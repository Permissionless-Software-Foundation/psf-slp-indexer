/*
  This library is used to filter and sort the transactions within a block,
  before passing them on the send, genesis, and mint libraries for indexing.

  Strategy:
  - Filter out all non-SLP transactions using decodeOpReturn()
  - Use checkForParent() to sort the transactions by their DAG. This sorts
    chained transactions within the same block in the order which the UTXOs
    were spent.
*/

// const BCHJS = require('@psf/bch-js')
const PQueue = require('p-queue').default

// const config = require('../../../config')

class FilterBlock {
  constructor (localConfig = {}) {
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

    // Encapsulate dependencies
    this.pQueue = new PQueue({ concurrency: 20 })

    // this.txCache = {} // Used to locally cache transaction data.
  }

  // Filter out raw block transactions and return an array of txs that are
  // (unvalidated) SLP transactions.
  // An array of TXIDs are expected as input. An array of TXIDs are output.
  async filterSlpTxs (txids) {
    try {
      const slpTxs = []

      // Add Tx to slpTxs array if it passes the OP_RETURN check.
      // This function is used below with the queue.
      const processTx = async (txid) => {
        // Is the TX an SLP TX?
        const isSlp = await this.transaction.getTokenInfo(txid)

        if (isSlp) { slpTxs.push(txid) }
      }

      const promiseArray = []

      // Filter out all the non-SLP transactions.
      for (let i = 0; i < txids.length; i++) {
        const txid = txids[i]

        promiseArray.push(this.pQueue.add(() => processTx(txid)))
        // promiseArray.push(this.pQueue.add(() => this.transaction.getTokenInfo(txid)))
      }

      // Wait for all promises in the array to resolve.
      await Promise.all(promiseArray)

      // Wait for all the transactions in the block to be processed.
      // This should be redundent.
      await this.pQueue.onEmpty()

      return slpTxs
    } catch (err) {
      console.error('Error in filterSlpTxs()')
      throw err
    }
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

      // Loop through each entry in the unsorted array.
      for (let i = 0; i < unsortedAry.length; i++) {
        // The current txid being evaluated.
        const thisTxid = unsortedAry[i]

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
      }

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

  async checkForParent (txData, blockheight, chainedTxids = []) {
    try {
      // If the txid does not exist in the chainedTxids array, then add it.
      const txid = txData.txid
      console.log(`txid: ${txid}`)
      const isAlreadyAdded = chainedTxids.filter((x) => x === txid)
      if (!isAlreadyAdded.length) {
        // Add it to the beginning of the array.
        chainedTxids.unshift(txData.txid)
      }

      let chainedParentsDetected = false

      // const txData = await this.bchjs.Transaction.get(txid)

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
        // let parentTx = {}
        // if (this.txCache[thisVin.txid]) {
        //   // Get the parent TX from the local cache if it exists.
        //   parentTx = this.txCache.txid
        // } else {
        //   // Otherwise, get parent TX from the global app cache.
        //   parentTx = await this.cache.get(thisVin.txid)
        //   this.txCache[thisVin.txid] = parentTx
        // }
        const parentTx = await this.cache.get(thisVin.txid)
        console.log(`parent txid: ${thisVin.txid}`)
        console.log(`parentTx: ${JSON.stringify(parentTx, null, 2)}`)

        // Not sure why or how parentTx can be undefined, but
        // if (!parentTx) return

        // console.log(`parent TXID: ${parentTx.txid}`)

        // Get the block height of that transaction.
        // const parentBlockhash = parentTx.blockhash
        // const parentBlockHeader = await this.rpc.getBlockHeader(
        //   parentBlockhash
        // )
        // console.log(`parentBlockHeader: ${JSON.stringify(parentBlockHeader, null, 2)}`)

        // If block height of parent tx is same as the current tx, recurively
        // the parent.
        // if (blockheight === parentBlockHeader.height) {
        if (blockheight === parentTx.blockheight) {
          chainedParentsDetected = true

          // Used for debugging
          // console.log(`Block ${parentTx.blockheight} has same block height as child.`)
          // process.exit(0)

          // Recursively call this function to follow the DAG to the first parent
          // in this block.
          await this.checkForParent(parentTx, blockheight, chainedTxids)
        }
      }

      return chainedParentsDetected
    } catch (err) {
      console.error('Error in checkForParent(). txdata: ', txData)
      throw err
    }
  }

  // Primary function for this library. Takes an array of txs as input. Returns
  // an array of only SLP txs, sorted by their UTXO DAG.
  async filterAndSortSlpTxs (txids, blockHeight) {
    try {
      // Filter out all the non-SLP transactions.
      let slpTxs = await this.filterSlpTxs(txids)
      console.log(`txs in slpTxs prior to sorting: ${slpTxs.length}`)
      console.log(`slpTxs prior to sorting: ${JSON.stringify(slpTxs, null, 2)}`)

      if (!slpTxs.length) return []

      const sortedTxids = []
      const independentTxids = []

      do {
        const txid = slpTxs[0]
        // console.log(`i: ${i}, txid: ${txid}`)

        // Clear the tx cache.
        this.txCache = {}

        // Check if tx has a parent in the same block.
        const chainedTxids = []
        let txData = {}
        try {
          txData = await this.cache.get(txid)
          // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)
        } catch (err) {
          // Corner case to catch forged SLP Txs.
          if (
            err.message.includes('No such mempool or blockchain transaction')
          ) {
            console.log(`Transaction.get() error: ${err.message}`)
            console.log("Skipping transaction. It's probably a forged SLP tx.")

            // Remove the problematic TX.
            slpTxs.shift()

            continue
          }

          // Throw error of other types of errors.
          throw err
        }

        const hasParent = await this.checkForParent(
          txData,
          blockHeight,
          chainedTxids
        )

        // If no parent, then add this TX to the output array, and process the
        // next tx.
        if (!hasParent) {
          independentTxids.push(txid)

          // Remove the txid from slpTxs
          slpTxs = slpTxs.filter((x) => x !== txid)

          continue
        }

        // console.log(`\ntxid: ${txid}`)
        // console.log(
        //   `(before) sortedTxids: ${JSON.stringify(sortedTxids, null, 2)}`
        // )
        // console.log(
        //   `(before) chainedTxids: ${JSON.stringify(chainedTxids, null, 2)}`
        // )
        // console.log(`(before) independentTxids: ${JSON.stringify(independentTxids, null, 2)}`)
        // console.log(`(before) slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)

        // Check if there are any txs in this block for the 'forward' part of
        // the DAG.
        await this.forwardDag(chainedTxids, slpTxs)
        // console.log(`after forwardDag, chainedTxids: ${JSON.stringify(chainedTxids, null, 2)}`)
        // console.log(`after forwardDag, slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)

        // Separate txids in chainedTxids from slpTxs
        for (let j = 0; j < chainedTxids.length; j++) {
          const thisTxid = chainedTxids[j]

          // Skip if the curent TXID is already in the sortedTxids array.
          const isAlreadySorted = sortedTxids.filter((x) => x === thisTxid)
          if (isAlreadySorted.length) continue

          // Remove current TXID from slpTxs
          slpTxs = slpTxs.filter((x) => x !== thisTxid)

          // Add txid to the beginning of the sortedTxids array.
          // sortedTxids.unshift(thisTxid)
          sortedTxids.push(thisTxid)
        }

        // console.log(
        //   `(after) sortedTxids: ${JSON.stringify(sortedTxids, null, 2)}`
        // )
        // console.log(
        //   `(after) chainedTxids: ${JSON.stringify(chainedTxids, null, 2)}`
        // )
        // console.log(`(after) slpTxs: ${JSON.stringify(slpTxs, null, 2)}\n`)
      } while (slpTxs.length)

      // console.log(`sortedTxids: ${JSON.stringify(sortedTxids, null, 2)}`)
      // console.log(`independentTxids: ${JSON.stringify(independentTxids, null, 2)}`)

      // Add any 'independent' TXIDS to the beginning of the 'sorted' TXIDs,
      // so long as they don't already exist in the sorted array.
      for (let i = 0; i < independentTxids.length; i++) {
        const thisTxid = independentTxids[i]

        if (!sortedTxids.includes(thisTxid)) {
          sortedTxids.unshift(thisTxid)
        }
      }

      return sortedTxids
    } catch (err) {
      console.error('Error in fitlerAndSortSlpTxs()')
      console.log(err)
      throw err
    }
  }
}

module.exports = FilterBlock
