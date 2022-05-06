/*
  A class library for processing Send SLP transactions

  Strategy for analyzing send transactions:
  - Subtract the quantities of those tokens from the address holding them.
  - Validate the transaction with slp-validate. If invalid, exit processing.
  - Add the token output quantities to each output address.

  Dev Notes:
  - CT 10/25/21
    TXID: c73a90412a96a59cd760bad25b6d81dd06bede58669ec1fa42eab0ca744d3b78
    Caused the indexer to abort on the first time, due to 'UTXO not found' error,
    but then passed on the second attempt. It's a simple chain of sends. I'm
    unsure what is causing this issue, leads me to believe it's a race condition.
    This TXID might be a good one to study?

  - txid 4bc56e2c0358dbfa169e0feadf8edade0b76773f3bfad3f44b042e9bc5cd5d7f
    A token by James Cramer that tripped the bug.

*/

const BigNumber = require('bignumber.js')

const IndexerUtils = require('../lib/utils')
const DAG = require('../lib/dag')

class Send {
  constructor (localConfig = {}) {
    // Dependency injection
    this.cache = localConfig.cache
    if (!this.cache) {
      throw new Error(
        'Must pass cache instance when instantiating send.js'
      )
    }
    this.addrDb = localConfig.addrDb
    if (!this.addrDb) {
      throw new Error(
        'Must pass address DB instance when instantiating send.js'
      )
    }
    this.tokenDb = localConfig.tokenDb
    if (!this.tokenDb) {
      throw new Error(
        'Must pass token DB instance when instantiating send.js'
      )
    }
    this.txDb = localConfig.txDb
    if (!this.txDb) {
      throw new Error(
        'Must pass transaction DB instance when instantiating send.js'
      )
    }
    this.utxoDb = localConfig.utxoDb
    if (!this.utxoDb) {
      throw new Error(
        'Must pass utxo DB instance when instantiating send.js'
      )
    }

    // Encapsulate dependencies
    this.util = new IndexerUtils()
    this.dag = new DAG(localConfig)
  }

  // This is the top-level function. It calls all other subfunctions.
  async processTx (data) {
    try {
      // console.log(`data.slpData: ${JSON.stringify(data.slpData, null, 2)}`)

      // console.log(`send.processTx() data: ${JSON.stringify(data, null, 2)}`)
      const { txData } = data
      const txid = txData.txid
      const tokenId = data.txData.tokenId

      let start = new Date()
      start = start.getTime()

      // Validate the TX against the SLP DAG.
      const { isValid } = await this.dag.crawlDag(txid, tokenId)
      console.log(`processTx() isValid: ${isValid}`)
      if (!isValid) {
        console.log(`TXID ${txid} failed DAG validation. Skipping.`)

        // Mark TX as invalid and save in database.
        txData.isValidSlp = false
        await this.txDb.put(txData.txid, txData)

        return
      }

      // Subtract the input UTXOs and balances from input addresses.
      const spentBN = await this.subtractTokensFromInputAddr(data)
      console.log(`TXID ${txid} spent ${spentBN.toString()} tokens.`)

      // Add the output UTXOs to output addresses
      const sentBN = await this.addTokensFromOutput(data)
      console.log(`TXID ${txid} sent ${sentBN.toString()} tokens.`)

      // Detect and process a 'controlled burn' transaction.
      // const diffBN = await this.processControlledBurn(spentBN, sentBN, txid, tokenId)
      const diffBN = await this.processControlledBurn(spentBN, sentBN, data)
      console.log(`TXID ${txid} difference is ${diffBN.toString()}`)

      // Update token stats
      await this.updateTokenStats(data, diffBN, spentBN, sentBN)

      let end = new Date()
      end = end.getTime()
      const diff = end - start
      console.log(`Processing of SEND TX took ${diff} mS for TXID ${txid}`)

      return true
    } catch (err) {
      console.error('Error in send.processTx()')

      throw err
    }
  }

  // Update the transaction array for the token stats.
  async updateTokenStats (data, diffBN, spentBN, sentBN) {
    try {
      const { slpData, blockHeight, txData } = data
      const tokenId = slpData.tokenId

      // Update the token data.
      const tokenData = await this.tokenDb.get(tokenId)
      // console.log(`tokenData: ${JSON.stringify(tokenData, null, 2)}`)

      let txInfo = {}

      if (diffBN.isGreaterThan(0)) {
        // Controlled burn.

        txInfo = {
          txid: txData.txid,
          height: blockHeight,
          type: 'SEND-BURN',
          qty: sentBN.toString(),
          burned: diffBN.toString()
        }
      } else if (diffBN.isLessThan(0)) {
        // Uncontrolled burn

        txInfo = {
          txid: txData.txid,
          height: blockHeight,
          type: 'BURN-UNCONTROLLED',
          qty: '0',
          burned: spentBN.toString()
        }
      } else {
        // Normal send transaction.

        txInfo = {
          txid: txData.txid,
          height: blockHeight,
          type: 'SEND',
          qty: sentBN.toString()
        }
      }

      console.log(`txInfo: ${JSON.stringify(txInfo, null, 2)}`)
      tokenData.txs.push(txInfo)

      // console.log(`new token data: ${JSON.stringify(tokenData, null, 2)}`)
      await this.tokenDb.put(tokenId, tokenData)

      return tokenData
    } catch (err) {
      console.error('Error in updateTokenStats()')
      throw err
    }
  }

  // This function expects two BigNumbers as an input, represent the amount
  // spent (inputs) and sent (outputs). This info is used to detect a
  // 'controlled burn' for a token. If a burn is detected, it updates the
  // token stats.
  async processControlledBurn (spentBN, sentBN, data) {
  // async processControlledBurn (spentBN, sentBN, txid, tokenId) {
    try {
      const { slpData, txData } = data
      const txid = txData.txid
      const tokenId = slpData.tokenId

      const diffBN = spentBN.minus(sentBN)

      // If the difference is positive, then it's a 'controlled burn' transaction.
      if (diffBN.isGreaterThan(0)) {
        console.log(`TXID ${txid} burned ${diffBN.toString()} tokens.`)

        // Update the token data.
        const tokenData = await this.tokenDb.get(tokenId)
        // console.log(`tokenData: ${JSON.stringify(tokenData, null, 2)}`)

        const tokensInCirc = new BigNumber(tokenData.tokensInCirculationBN)
        const totalBurned = new BigNumber(tokenData.totalBurned)

        const diffCirc = tokensInCirc.minus(diffBN)
        const newBurned = totalBurned.plus(diffBN)

        tokenData.tokensInCirculationBN = diffCirc
        tokenData.tokensInCirculationStr = diffCirc.toString()
        tokenData.totalBurned = newBurned.toString()

        // console.log(`new token data: ${JSON.stringify(tokenData, null, 2)}`)
        await this.tokenDb.put(tokenId, tokenData)
      } else if (diffBN.isLessThan(0)) {
        console.log('Outputs exceed inputs. Uncontrolled burn detected.')
        console.log(`${spentBN} tokens burned.`)
        // console.log(`data: ${JSON.stringify(data, null, 2)}`)

        // Outputs exceed inputs, which make this an invalide TX, resulting in
        // burn of all tokens. All changes made by addTokensFromOutput() need
        // to be rolled back.
        await this.reverseAddTokenFromOutput(data)

        // Mark TX as invalid in tx database.
        // This should get picked up in index.js/processData() to update the
        // tx database.
        data.txData.isValidSlp = false

        // Update token stats.
        const tokenData = await this.tokenDb.get(tokenId)
        // console.log(`tokenData: ${JSON.stringify(tokenData, null, 2)}`)

        const tokensInCirc = new BigNumber(tokenData.tokensInCirculationBN)
        const totalBurned = new BigNumber(tokenData.totalBurned)
        console.log(`old total burned: ${totalBurned.toString()}`)

        // TODO: Get total of all inputs

        const diffCirc = tokensInCirc.minus(spentBN)
        const newBurned = totalBurned.plus(spentBN)
        console.log(`new total burned: ${newBurned.toString()}`)

        tokenData.tokensInCirculationBN = diffCirc
        tokenData.tokensInCirculationStr = diffCirc.toString()
        tokenData.totalBurned = newBurned.toString()

        // console.log(`new token data: ${JSON.stringify(tokenData, null, 2)}`)
        await this.tokenDb.put(tokenId, tokenData)
      }

      return diffBN
    } catch (err) {
      console.error('Error in processControlledBurn()')
      throw err
    }
  }

  // Reverse the database changes that were made by addTokensFromOutput()
  // A lot of the input validation is skipped, because it is assumed this
  // function runs after addTokensFromOutput().
  async reverseAddTokenFromOutput (data) {
    try {
      let totalBurnedBN = new BigNumber(0)

      const { slpData, txData } = data

      // Loop through each output in slpData
      for (let i = 0; i < slpData.amounts.length; i++) {
        const recvrAddr = txData.vout[1 + i].scriptPubKey.addresses[0]
        const txid = txData.txid

        // Get the address data from the database.
        const addrData = await this.addrDb.get(recvrAddr)
        // console.log(`addrData: ${JSON.stringify(addrData, null, 2)}`)

        // Get the UTXO entry that matches the current output.
        const utxoToDelete = addrData.utxos.filter((x) => {
          return x.txid === txid && x.vout === (1 + i)
        })
        console.log('utxoToDelete: ', utxoToDelete)

        // Subtract the token balance
        const negAmntBN = await this.subtractBalanceFromSend(addrData, utxoToDelete[0])
        // console.log(`netAmntBN: ${negAmntBN.toString()}`)

        // Delete the burned UTXO
        addrData.utxos = this.util.removeUtxoFromArray(
          utxoToDelete[0],
          addrData.utxos
        )
        // console.log('addrData after utxo delete: ', addrData)

        // Track the total quantity of burned tokens.
        totalBurnedBN = totalBurnedBN.plus(negAmntBN)
        // console.log(`totalBurnedBN: ${totalBurnedBN.toString()}`)

        // Save the updated address data to the database.
        await this.addrDb.put(recvrAddr, addrData)

        // Delete the utxo from the utxo database
        await this.utxoDb.del(`${utxoToDelete[0].txid}:${utxoToDelete[0].vout}`)
      }

      return totalBurnedBN
    } catch (err) {
      console.error('Error in reverseAddtokenFromOutput()')
      throw err
    }
  }

  // Update the addresses in the database recieving the outputs of the tx.
  async addTokensFromOutput (data) {
    try {
      let totalSentBN = new BigNumber(0)

      // console.log(`data: ${JSON.stringify(data, null, 2)}`)
      const { slpData } = data

      // Loop through each output in slpData
      for (let i = 0; i < slpData.amounts.length; i++) {
        // const recvrAddr = txData.vout[1 + i].scriptPubKey.addresses[0]

        const sentBN = await this.updateOutputAddr(data, i + 1)
        // const addrObj = await this.updateOutputAddr(data, i + 1)
        // console.log(`addrObj: ${JSON.stringify(addrObj, null, 2)}`)

        totalSentBN = totalSentBN.plus(sentBN)
      }

      return totalSentBN
    } catch (err) {
      console.error('Error in addTokensFromOutput()')
      throw err
    }
  }

  // Update the index databases with an output from a TX. This updates the address
  // and TX databases.
  async updateOutputAddr (data, voutIndex) {
    try {
      const { slpData, txData, blockHeight } = data

      let recvrAddr = ''
      try {
        recvrAddr = txData.vout[voutIndex].scriptPubKey.addresses[0]
        // console.log(`recvrAddr: ${recvrAddr}`)
      } catch (err) {
        // This is a corner case, when the vout doesn't exist, and thus the TX
        // has burned tokens.
        console.log(
          `voutIndex: ${voutIndex}, txData: ${JSON.stringify(txData, null, 2)}`
        )
        console.log('err: ', err)
        // throw err

        console.log('Skipping this output.')
        return
      }

      // Get address from the database, or create a new address object if it
      // doesn't exist in the database.
      let addr
      try {
        // Address exists in the database
        addr = await this.addrDb.get(recvrAddr)
        // console.log('addr exists in the database: ', addr)
      } catch (err) {
        // New address.
        addr = this.util.getNewAddrObj()
      }
      // console.log(`addr: ${JSON.stringify(addr, null, 2)}`)
      // console.log(`UTXOs from database for addr ${recvrAddr}: ${JSON.stringify(addr.utxos, null, 2)}`)

      // The token quantity in this output.
      const slpAmountStr = slpData.amounts[voutIndex - 1].toString()

      // Generate a new UTXO object.
      const newUtxo = await this.addUtxoToOutputAddr(
        data,
        recvrAddr,
        voutIndex,
        slpAmountStr
      )
      // console.log(`newUtxo: ${JSON.stringify(newUtxo, null, 2)}`)

      // Add the UTXO to the addr object.
      addr.utxos.push(newUtxo)

      // Add the txid to the transaction history.
      const txObj = {
        txid: txData.txid,
        height: blockHeight
      }
      this.util.addTxWithoutDuplicate(txObj, addr.txs)

      // Update balances
      const qtyBN = this.updateBalanceFromSend(addr, slpData, voutIndex - 1)
      // console.log(`qtyBN: ${qtyBN.toString()}`)

      // console.log(`Saving this UTXO data to database for addr ${recvrAddr}: ${JSON.stringify(addr.utxos, null, 2)}`)

      // Save address to the database.
      await this.addrDb.put(recvrAddr, addr)

      // Add the utxo to the utxo database
      await this.utxoDb.put(`${newUtxo.txid}:${newUtxo.vout}`, newUtxo)

      // console.log(`Stored addr data in database: ${JSON.stringify(addr, null, 2)}`)

      return qtyBN
    } catch (err) {
      console.error('Error in updateOutputAddr()')
      throw err
    }
  }

  // Update the addresses object in the database (recieving the outputs of the tx).
  // Returns the address object. Does not update the database, in case there
  // needs to be further processing.
  // Create the UTXOs and add to the address object, to reflect the new UTXO
  // output of the transaction.
  async addUtxoToOutputAddr (data, recvrAddr, vout, slpAmountStr) {
    try {
      // console.log(`addUtxoToOutputAddr data: ${JSON.stringify(data, null, 2)}`)
      const { slpData, txData } = data

      // Calculate the effective quantity
      const decimals = txData.tokenDecimals
      let effectiveQty = new BigNumber(slpAmountStr).dividedBy(10 ** decimals)
      effectiveQty = effectiveQty.toString()

      // Get the BCH in the output for this utxo.
      const output = txData.vout[vout]
      const value = output.value

      const utxo = {
        txid: txData.txid,
        vout: vout,
        type: 'token',
        tokenType: slpData.tokenType,
        qty: slpAmountStr,
        tokenId: slpData.tokenId,
        address: recvrAddr,
        decimals,
        effectiveQty,
        value
      }
      // console.log(`utxo: ${JSON.stringify(utxo, null, 2)}`)

      return utxo
    } catch (err) {
      console.error('Error in updateAddrObjFromOutput()')
      throw err
    }
  }

  // Update the balance for the given address with the given token data.
  // Modifies the balance of the addrObj, in-place.
  // Returns a BigNumber instance of the quanity of tokens added to the address.
  updateBalanceFromSend (addrObj, slpData, amountIndex) {
    try {
      // console.log('addrObj: ', addrObj)
      // console.log('slpData: ', slpData)
      // console.log('amountIndex: ', amountIndex)

      const tokenId = slpData.tokenId
      const qty = slpData.amounts[amountIndex]

      // Get existing balance, if it exists.
      const tokenExists = addrObj.balances.filter((x) => x.tokenId === tokenId)
      // console.log('tokenExists: ', tokenExists)

      // If the token does not exist in the address object from the database.
      if (!tokenExists.length) {
        // Balance for this token does not exist in the address. Add it.
        addrObj.balances.push({ tokenId, qty: qty.toString() })
        return qty
      }
      // console.log(`token balance for ${tokenId} already exists`)

      // Token exists in the address object, update the balance.
      for (let i = 0; i < addrObj.balances.length; i++) {
        const thisBalance = addrObj.balances[i]

        if (thisBalance.tokenId !== tokenId) continue

        // console.log(`old balance: ${thisBalance.qty.toString()}`)

        // bignumber.js addition.
        thisBalance.qty = qty.plus(thisBalance.qty).toString()

        // console.log(`new balance: ${thisBalance.qty.toString()}`)

        return qty
      }
    } catch (err) {
      console.error('Error in updateBalanceFromSend()')
      throw err
    }
  }

  // Update the address entry in the database, to reflect the spent inputs.
  async subtractTokensFromInputAddr (data) {
    try {
      const { txData, blockHeight } = data
      // console.log(`Processing txid: ${txData.txid}`)
      // console.log(`data: ${JSON.stringify(data, null, 2)}`)

      // Loop through each input, and ensure all input UTXOs are present in the
      // database BEFORE processing (i.e. before deleting UTXOs from the database).
      for (let i = 0; i < txData.vin.length; i++) {
        const thisVin = txData.vin[i]
        // console.log(
        //   `pre-processing thisVin: ${JSON.stringify(thisVin, null, 2)}`
        // )

        // If there are no tokens in this input, then skip it.
        if (!thisVin.tokenQty) continue

        // If the token IDs do not match, skip it.
        if (thisVin.tokenId !== txData.tokenId) continue

        // Do a DAG validation of the input.
        // console.log(`crawling txid ${thisVin.txid} for token ${txData.tokenId}`)
        // const inputIsValid = await this.dag.validateTxid(thisVin.txid)
        const { isValid } = await this.dag.crawlDag(thisVin.txid, txData.tokenId)
        // console.log(`send.js subtractTokensFromInputAddr() crawlDag result: ${isValid}`)
        // console.log(`dag: ${JSON.stringify(dag, null, 2)}`)
        if (!isValid) {
          thisVin.tokenId = null
          thisVin.tokenQty = 0
          thisVin.tokenQtyStr = '0'
          continue
        }

        // Get the DB entry for this address.
        const addrData = await this.addrDb.get(thisVin.address)
        // console.log(`data: ${JSON.stringify(data, null, 2)}`)
        // console.log(`addrData: ${JSON.stringify(addrData, null, 2)}`)
        // process.exit(0)

        // Get the UTXO entry that matches the current input.
        const utxoToDelete = addrData.utxos.filter((x) => {
          // console.log('x.tokenId: ', x.tokenId)
          // console.log('txData.tokenId: ', thisVin.tokenId)
          return x.txid === thisVin.txid && x.vout === thisVin.vout
        })

        if (!utxoToDelete.length) {
          console.log(`\nthisVin: ${JSON.stringify(thisVin, null, 2)}`)

          throw new Error(`Input UTXO with TXID ${thisVin.txid} could not be found in database.
            Skipping processing of ${data.txData.txid}`)
        }
      }

      let total = new BigNumber(0)

      // Loop through and process each input and delete the input UTXO
      // from the addr database object.
      for (let i = 0; i < txData.vin.length; i++) {
        const thisVin = txData.vin[i]
        // console.log(`processing thisVin: ${JSON.stringify(thisVin, null, 2)}`)

        // If there are no tokens in this input, then skip it.
        if (!thisVin.tokenQty) continue

        // If the token IDs do not match, skip it.
        if (thisVin.tokenId !== txData.tokenId) continue

        // Get the DB entry for this address.
        const addrData = await this.addrDb.get(thisVin.address)
        // console.log('before deletion, addrData: ', addrData)

        // Get the UTXO entry that matches the current input.
        const utxoToDelete = addrData.utxos.filter((x) => {
          // console.log('x.tokenId: ', x.tokenId)
          // console.log('thisVin.tokenId: ', thisVin.tokenId)
          return x.txid === thisVin.txid && x.vout === thisVin.vout
        })
        // console.log('utxoToDelete: ', utxoToDelete)

        // This is most often where the indexer will 'break'. This is primarily
        // due to several chained UTXOs in the block, which are rapidly spending
        // tokens.
        if (!utxoToDelete.length) {
          console.log(`\nthisVin: ${JSON.stringify(thisVin, null, 2)}`)
          console.log(
            `addrData.utxos: ${JSON.stringify(addrData.utxos, null, 2)}`
          )
          throw new Error(
            `Could not find UTXO in address ${thisVin.address} to delete when processing TX inputs.
            TXID: ${data.txData.txid}`
          )
        }

        console.log(
          `Deleting input UTXO: ${JSON.stringify(utxoToDelete[0], null, 2)}`
        )

        // Delete the UTXO that was just spent.
        addrData.utxos = this.util.removeUtxoFromArray(
          utxoToDelete[0],
          addrData.utxos
        )
        // console.log('addrData after utxo delete: ', addrData)

        // Subtract the token balance
        const negAmntBN = this.subtractBalanceFromSend(addrData, utxoToDelete[0])
        // console.log('addrData after subtractBalanceFromSend: ', addrData)

        // Track the total quantity of deleted tokens.
        total = total.plus(negAmntBN)

        // Add the txid to the transaction history.
        const txObj = {
          txid: txData.txid,
          height: blockHeight
        }
        this.util.addTxWithoutDuplicate(txObj, addrData.txs)

        // Save the updated address data to the database.
        await this.addrDb.put(thisVin.address, addrData)

        // Delete the utxo from the utxo database
        await this.utxoDb.del(`${utxoToDelete[0].txid}:${utxoToDelete[0].vout}`)
      }

      // Return true to indicate that the TX was processed.
      return total
      // const inputTx = await this.txDb.get()
    } catch (err) {
      console.error(
        `Error in subtractTokensFromInputAddr() TXID: ${data.txData.txid}`
      )
      throw err
    }
  }

  // Update the balance for the given address with the given token data.
  subtractBalanceFromSend (addrObj, utxoToDelete) {
    try {
      // console.log('addrObj: ', addrObj)
      // console.log('utxoToDelete: ', utxoToDelete)

      let amountToSubtract

      // Subtract the balance of the utxoToDelete from the balance for that token.
      for (let i = 0; i < addrObj.balances.length; i++) {
        const thisBalance = addrObj.balances[i]

        if (thisBalance.tokenId === utxoToDelete.tokenId) {
          const currentBalance = new BigNumber(thisBalance.qty)
          amountToSubtract = new BigNumber(utxoToDelete.qty)

          const difference = currentBalance.minus(amountToSubtract)

          thisBalance.qty = difference.toString()

          // If the balance is zero, remove that entry from the address data.
          if (difference.isZero()) {
            addrObj.balances.splice(i, 1)
          }

          break // Exit the loop
        }
      }

      return amountToSubtract
    } catch (err) {
      console.error('Error in indexer/utils.js/updateBalance()')
      throw err
    }
  }
}

module.exports = Send
