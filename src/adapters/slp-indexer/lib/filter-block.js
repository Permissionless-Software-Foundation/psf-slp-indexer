/*
  This library is used to filter and sort the transactions within a block,
  before passing them on the send, genesis, and mint libraries for indexing.

  Strategy:
  - Filter out all non-SLP transactions using decodeOpReturn()
  - Use checkForParent() to sort the transactions by their DAG. This sorts
    chained transactions within the same block in the order which the UTXOs
    were spent.
*/

// Public npm libraries
const PQueue = require('p-queue').default
const pRetry = require('p-retry')
const BigNumber = require('bignumber.js')

// Local Libraries
// const config = require('../../../config')
const Utils = require('./utils')

class FilterBlock {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.cache = localConfig.cache
    if (!this.cache) {
      throw new Error(
        'Must include instance of tx cache when instantiating filter-block.js'
      )
    }
    this.transaction = localConfig.transaction
    if (!this.transaction) {
      throw new Error(
        'Must include instance of transaction lib when instantiating filter-block.js'
      )
    }
    this.addrDb = localConfig.addrDb
    if (!this.addrDb) {
      throw new Error(
        'Must pass address DB instance when instantiating filter-block.js'
      )
    }
    this.tokenDb = localConfig.tokenDb
    if (!this.tokenDb) {
      throw new Error(
        'Must pass token DB instance when instantiating filter-block.js'
      )
    }
    this.utxoDb = localConfig.utxoDb
    if (!this.utxoDb) {
      throw new Error(
        'Must pass utxo DB instance when instantiating filter-block.js'
      )
    }
    this.txDb = localConfig.txDb
    if (!this.txDb) {
      throw new Error(
        'Must pass transaction DB instance when instantiating filter-block.js'
      )
    }

    // Encapsulate dependencies
    this.pQueue = new PQueue({ concurrency: 20 })
    this.pRetry = pRetry
    this.utils = new Utils()

    // Number of retry attempts
    this.attempts = 5

    // this.txCache = {} // Used to locally cache transaction data.
  }

  // Wrap the p-retry library.
  // This function returns a promise that will resolve to the output of the
  // function 'funcHandle'.
  async retryWrapper (funcHandle, inputObj) {
    try {
      // console.log('retryWrapper inputObj: ', inputObj)

      if (!funcHandle) {
        throw new Error('function handler is required')
      }
      if (!inputObj) {
        throw new Error('input object is required')
      }
      // console.log('Entering retryWrapper()')

      // Add artificial delay to prevent 429 errors.
      // await this.sleep(this.retryPeriod)

      return this.pRetry(
        async () => {
          return await funcHandle(inputObj)
        },
        {
          onFailedAttempt: (error) => {
            console.log(
              `Attempt ${error.attemptNumber} failed. There are ${error.retriesLeft} tries left. `
            )
          },
          retries: this.attempts // Retry 5 times
        }
      )
    } catch (err) {
      console.error('Error in retryWrapper()')
      throw err
    }
  }

  // Filter out raw block transactions and return an array of txs that are
  // (unvalidated) SLP transactions.
  // An array of TXIDs are expected as input. An array of TXIDs are output.
  async filterSlpTxs (txids) {
    try {
      const slpTxs = []
      const nonSlpTxs = []

      // Add Tx to slpTxs array if it passes the OP_RETURN check.
      // This function is used below with the queue.
      const processTx = async (txid) => {
        // Is the TX an SLP TX?
        const isSlp = await this.transaction.getTokenInfo(txid)

        if (isSlp) {
          slpTxs.push(txid)
        } else {
          // TODO:
          nonSlpTxs.push(txid)

          // Check if any input UTXOs are in the database. If so, delete them,
          // since they are officially burned.
          const result = await this.deleteBurnedUtxos(txid)

          if (!result) {
            console.log(`deleteBurnedUtxos() errored on on txid ${txid}. Coinbase?`)
          }
        }
      }

      const promiseArray = []

      // Filter out all the non-SLP transactions.
      for (let i = 0; i < txids.length; i++) {
        const txid = txids[i]
        // console.log('txid: ', txid)

        // Create a promise that will automatically retry.
        const p1 = this.retryWrapper(processTx, txid)

        // Add the promise to the queue
        const thisPromise = this.pQueue.add(() => p1)

        // Add the queued promise to the array.
        promiseArray.push(thisPromise)
        // promiseArray.push(this.pQueue.add(() => this.transaction.getTokenInfo(txid)))
      }

      // TODO: Implement q-retry for when the full node throws an error.

      // Wait for all promises in the array to resolve.
      await Promise.all(promiseArray)

      // Wait for all the transactions in the block to be processed.
      // This should be redundent.
      await this.pQueue.onEmpty()

      return { slpTxs, nonSlpTxs }
    } catch (err) {
      console.error('Error in filterSlpTxs()')
      throw err
    }
  }

  // Lookup the address associated with a utxo
  async getAddressFromTxid (txidIn, vout) {
    let utxo = {}

    // Try to get the utxo from the database.
    try {
      utxo = await this.utxoDb.get(`${txidIn}:${vout}`)
    } catch (err) {
      // Address (and thus input UTXO) is not in the database.
      return false
    }

    return utxo.address
  }

  // Check the input UTXOs for a TX that fails the OP_RETURN test. If any input
  // UTXOs exist in the database, they should be deleted as they are burned.
  async deleteBurnedUtxos (txidIn) {
    try {
      // Get raw tx data from the full node.
      let txDetails = await this.transaction.getTxWithRetry(txidIn)

      // const txDetails = await this.cache.get(txidIn)
      // console.log(`txDetails: ${JSON.stringify(txDetails, null, 2)}`)

      const vins = txDetails.vin
      // // console.log(`vins: ${JSON.stringify(vins, null, 2)}`)

      // let totalBurned = new BigNumber(0)
      let tokenId

      // Loop through each input to the TX
      for (let i = 0; i < vins.length; i++) {
        const thisVin = vins[i]

        const txid = thisVin.txid
        const vout = thisVin.vout
        let addrData = {}

        // Use utxoDb to lookup the address associated with the UTXO.
        const addr = await this.getAddressFromTxid(txid, vout)
        if (!addr) continue

        // Try to get the address from the database.
        try {
          addrData = await this.addrDb.get(addr)
        } catch (err) {
          // Address (and thus input UTXO) is not in the database, so skip this
          // input.
          continue
        }
        // console.log(`addrData for ${addr}: ${JSON.stringify(addrData, null, 2)}`)

        console.log(`Uncontrolled burn detected in TXID ${txidIn}, involving ${addr}`)

        // Get hydrated TX details.
        txDetails = await this.cache.get(txidIn)
        // console.log(`txDetails: ${JSON.stringify(txDetails, null, 2)}`)
        // console.log('tx details should have been saved to the database.')

        // Loop through each UTXO associated with this address.
        const utxos = addrData.utxos
        for (let i = 0; i < utxos.length; i++) {
          const thisUtxo = utxos[i]

          // If the address contains the burned UTXO.
          if (thisUtxo.txid === txid && thisUtxo.vout === vout) {
            console.log(`Utxo found to remove: ${JSON.stringify(thisUtxo, null, 2)}`)
            // Remove the UTXO from the address.
            addrData.utxos = this.utils.removeUtxoFromArray(thisUtxo, addrData.utxos)

            // Remove the balance from the address
            addrData.balances = this.utils.subtractUtxoBalance(thisUtxo, addrData.balances, thisUtxo.tokenId)

            // Add the TXID to the transaction history
            const txObj = {
              txid: txidIn,
              height: txDetails.blockheight
            }
            this.utils.addTxWithoutDuplicate(txObj, addrData.txs)
            // addrData.txs.push({
            //   txid: txidIn,
            //   height: txDetails.blockheight
            // })

            // Save the updated address data in the database.
            // console.log(`Updated addrData: ${JSON.stringify(addrData, null, 2)}`)
            await this.addrDb.put(addr, addrData)

            // Delete the utxo from the utxo database
            await this.utxoDb.del(`${thisUtxo.txid}:${thisUtxo.vout}`)

            // Add the amount of burned tokens to the token stats.
            tokenId = thisUtxo.tokenId
            const tokenData = await this.tokenDb.get(tokenId)
            const startBurn = new BigNumber(tokenData.totalBurned)
            // console.log(`starting tokenData: ${JSON.stringify(tokenData, null, 2)}`)
            const newTokenData = this.utils.subtractBurnedTokens(thisUtxo, tokenData)
            // console.log(`newTokenData: ${JSON.stringify(newTokenData, null, 2)}`)

            // Calculate amount of tokens burned by this UTXO.
            const endBurn = new BigNumber(newTokenData.totalBurned)
            const diffBurn = endBurn.minus(startBurn)
            console.log(`totalBurned: ${diffBurn.toString()}`)

            // Update transaction info in token stats.
            if (diffBurn.isGreaterThan(0)) {
              // const tokenData = await this.tokenDb.get(tokenId)
              const txObj = {
                txid: txidIn,
                height: txDetails.blockheight,
                type: 'BURN-UNCONTROLLED',
                qty: '0',
                burned: diffBurn.toString()
              }
              // tokenData.txs.push(txInfo)
              this.utils.addTxWithoutDuplicate(txObj, newTokenData.txs)
              // await this.tokenDb.put(tokenId, tokenData)

              // Mark TX as invalid, in the transaction database.
              console.log(`Saving ${txidIn} to txDb`)
              txDetails.isValidSlp = false
              await this.txDb.put(txidIn, txDetails)
            }

            // console.log(`final tokenData: ${JSON.stringify(newTokenData, null, 2)}`)

            // Update the token stats in the database.
            await this.tokenDb.put(tokenId, newTokenData)
          }
        }
      }

      // Signal that this function completed successfully.
      return true
    } catch (err) {
      // console.log(`deleteBurnedUtxos error txid: ${txidIn}`)
      // console.error('Error in deleteBurnedUtxos(): ', err)
      // throw err

      // Ignore any errors.
      // Return false to signal an error.
      return false
    }
  }

  sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  // checkForParent(txid, blockheight) expects a transaction and
  // blockhight value as input.
  //
  // This function will return an object with two properties:
  // - hasParent: Boolean, true or false
  // - dag: []
  //
  // The `dag` property will contain a list of TXIDs of parent TXs in the same
  // block as the given txid. It will be empty if there are not parents.
  //
  // This function will recursively call itself, to traverse the DAG and find
  // all the parent UTXOs for that transaction. It will then
  // return an array of TXs, sorted with the oldest parent first, and the given
  // input tx as the last element.
  async checkForParent2 (txid, blockheight, chainedTxids = []) {
    try {
      // console.log('txid: ', txid)
      // console.log(`chainedTxids: ${JSON.stringify(chainedTxids, null, 2)}`)

      // await this.sleep(500)

      // Default output object
      const outObj = {
        hasParent: false,
        dag: []
      }

      // Get the transaction data for the current txid, from the cache.
      const txData = await this.cache.get(txid)
      // console.log('txData: ', txData)

      // If the txid does not exist in the chainedTxids array, then add it.
      const isAlreadyAdded = chainedTxids.filter((x) => x === txid)
      if (!isAlreadyAdded.length) {
        // Add it to the beginning of the array.
        chainedTxids.unshift(txData.txid)
      } else {
        // TXID exists in the chainedTxids array, it's already been analyzed, so
        // skip it.
        return
      }

      // Default value.
      let chainedParentsDetected = false

      // Loop through each input that represents tokens.
      for (let i = 0; i < txData.vin.length; i++) {
        const thisVin = txData.vin[i]
        // console.log(`thisVin: ${JSON.stringify(thisVin, null, 2)}`)

        // If the input is not colored as a token, or does not represent a
        // minting baton, then skip it.
        if (!thisVin.tokenQty && !thisVin.isMintBaton) {
          // console.log(`thisVin: ${JSON.stringify(thisVin, null, 2)}`)
          continue
        }

        // Get the parent transaction.
        const parentTx = await this.cache.get(thisVin.txid)
        // console.log(`parentTx.txid: ${JSON.stringify(parentTx.txid, null, 2)}`)
        // console.log(`parentTx.blockheight: ${JSON.stringify(parentTx.blockheight, null, 2)}`)

        // If block height of parent tx is same as the current tx, recurively
        // crawl the DAG, starting with the parent.
        if (blockheight === parentTx.blockheight) {
          chainedParentsDetected = true

          // Recursively call this function to follow the DAG to the first parent
          // in this block.
          await this.checkForParent2(parentTx.txid, blockheight, chainedTxids)
        }
      }

      // return chainedParentsDetected
      outObj.hasParent = chainedParentsDetected
      outObj.dag = chainedTxids

      return outObj
    } catch (err) {
      console.error('Error in checkForParent2(). txid: ', txid)
      throw err
    }
  }

  // This function is similar in nature to checkForParent(). Whereas
  // checkForParent() sorts an array by a 'backward' DAG of txs in the same block,
  // forwardDag() looks for chained TXs in the 'forward' part of the DAG, again,
  // in the same block.
  // This function loops through each of the unsortedAry txids. It checks to
  // see if that TXID is the child of the last element in the chainedAry. If
  // it is, the TXID is added to the end of the chainedAry, and removed from
  // the unsortedAry.
  // Returns an object with these properties:
  // - success: true if forward DAG TX found, otherwise false
  // - chainedArray: array of sorted TXIDs
  // - unsortedArray: array of TXIDs that are not part of the DAG
  async forwardDag (chainedAry, unsortedAry) {
    try {
      let dagFound = false
      let i = 0

      // Loop through each entry in the unsorted array.
      // for (let i = 0; i < unsortedAry.length; i++) {
      do {
        // The current txid being evaluated.
        const thisTxid = unsortedAry[i]
        i++

        // The last link in the DAG of chained TXs.
        const lastLink = chainedAry[chainedAry.length - 1]

        const txData = await this.cache.get(thisTxid)
        // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

        // Loop through each Vin.
        for (let j = 0; j < txData.vin.length; j++) {
          const thisVin = txData.vin[j]
          // console.log(`thisVin: ${JSON.stringify(thisVin, null, 2)}`)

          // Skip if this input is not colored as a token, or not a minting baton.
          if (!thisVin.tokenQty && !thisVin.isMintBaton) continue

          // If the current txid in the unsortedAry points to the last element
          // in the chainedAry array as it's parent.
          if (thisVin.txid === lastLink) {
            dagFound = true

            // Remove the txid from the unsortedAry.
            unsortedAry = unsortedAry.filter((x) => x !== thisTxid)
            // console.log(`Removed ${thisTxid} from unsortedAry: ${JSON.stringify(unsortedAry, null, 2)}`)

            // Add the txid to the end of the chainedAry.
            chainedAry.push(thisTxid)

            // Reset the counter for the unsorted array. This will restart the
            // search within the block.
            i = 0

            break
          }
        }
      } while (i < unsortedAry.length)

      // Signal that function completed successfully.
      // return true
      return {
        success: dagFound,
        chainedArray: chainedAry,
        unsortedArray: unsortedAry
      }
    } catch (err) {
      console.error('Error in forwardDag')
      throw err
    }
  }

  // Primary function for this library. It takes an array of txs from a block as
  // input. It filters all the candidate SLP transactions, then sorts those
  // SLP transactions by their DAG within the block.
  //
  // Returns an object containing two arrays:
  // - sortedTxids: is a list of TXIDs sorted by their DAG withing the block
  // - independentTxids: all other TXIDs that do not have chained txs within
  //     the block.
  //
  // Background: This filtering and sorting needs to be done prior to trying to
  // put new entries into the database. This input validation and pre-processing
  // makes the database processing much faster and less error prone.
  async filterAndSortSlpTxs2 (txids, blockHeight) {
    try {
      console.log(`txids before filtering: ${txids.length}`)

      // Filter out all the non-SLP transactions.
      let { slpTxs, nonSlpTxs } = await this.filterSlpTxs(txids)
      console.log(`txs in slpTxs prior to sorting: ${slpTxs.length}`)
      // console.log(`slpTxs prior to sorting: ${JSON.stringify(slpTxs, null, 2)}`)

      // No SLP txids in the array? Exit.
      if (!slpTxs.length) return []

      let sortedTxids = []
      const independentTxids = []
      // let i = 0

      // Loop while there are entries in the slpTxs array. This loop will remove
      // entries from the array until it's empty.
      do {
        // const txid = slpTxs[0]
        const txid = slpTxs.shift()
        // console.log(`start loop slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)
        // console.log(`i: ${i}, txid: ${txid}`)
        // i++

        // Check if TX is part of a backwards DAG
        const { hasParent, dag: backDag } = await this.checkForParent2(
          txid,
          blockHeight
        )
        // console.log(`hasParent: ${hasParent}`)
        // console.log(`backDag: ${JSON.stringify(backDag, null, 2)}`)
        // console.log(`slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)

        let sortedArray = backDag
        let hasChild = false

        // Check if TX is part of a forward DAG
        if (slpTxs.length) {
          const { success, chainedArray } = await this.forwardDag(backDag, slpTxs)
          // const { success, chainedArray, unsortedArray } =
          //   await this.forwardDag(backDag, slpTxs)

          sortedArray = chainedArray
          hasChild = success

          // console.log(`hasChild: ${hasChild}`)
          // console.log(`chainedArray: ${JSON.stringify(chainedArray, null, 2)}`)
          // console.log(
          //   `unsortedArray: ${JSON.stringify(unsortedArray, null, 2)}`
          // )
        }

        // If TX does not have a backward or forward DAG in the block, then it
        // is truely independent.
        if (!hasParent && !hasChild) {
          independentTxids.push(txid)
          continue
        }

        // If the current TXID has a parent or a child, then the chainedArray
        // will have a list of sorted TXIDs.
        if (hasParent || hasChild) {
          // Add the chained Array to the sortedTxids array.
          sortedTxids = sortedTxids.concat(sortedArray)

          // Remove duplicate entries from the sortedTxid array.
          // https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
          sortedTxids = [...new Set(sortedTxids)]
        }

        // Ensure that any txids in independentTxids or independentTxids are
        // removed from the slpTxs array, before continuing the loop.
        for (let j = 0; j < sortedTxids.length; j++) {
          slpTxs = slpTxs.filter((x) => x !== sortedTxids[j])
          // console.log(`filter ${j} slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)
        }
        for (let j = 0; j < independentTxids.length; j++) {
          slpTxs = slpTxs.filter((x) => x !== sortedTxids[j])
          // console.log(`filter ${j} slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)
        }

        // console.log(
        //   `slpTxs after removing elems: ${JSON.stringify(slpTxs, null, 2)}`
        // )
      } while (slpTxs.length)

      // The slpTxs array is empty. Each entry has landed in one of the two
      // arrays below.
      // return { sortedTxids, independentTxids }

      // For debugging:
      // console.log(`independentTxids: ${JSON.stringify(independentTxids, null, 2)}`)
      // console.log(`sortedTxids: ${JSON.stringify(sortedTxids, null, 2)}`)
      console.log(`independentTxids: ${independentTxids.length}`)
      console.log(`sortedTxids: ${sortedTxids.length}`)
      console.log(`nonSlpTxs: ${nonSlpTxs.length}`)

      // Combine arrays with the independent txids first.
      let combined = independentTxids.concat(sortedTxids)

      // Ensure there are no duplicate TXIDs.
      // https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
      combined = [...new Set(combined)]

      return { combined, nonSlpTxs }
    } catch (err) {
      console.error('Error in fitlerAndSortSlpTxs2()')
      // console.log(err)
      throw err
    }
  }
}

module.exports = FilterBlock
