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

    // Encapsulate dependencies
    this.util = new IndexerUtils()
    this.dag = new DAG(localConfig)
  }

  // This is the top-level function. It calls all other subfunctions.
  async processTx (data) {
    try {
      // console.log(`send.processTx() data: ${JSON.stringify(data, null, 2)}`)
      const { txData } = data
      const txid = txData.txid
      const tokenId = data.txData.tokenId

      let start = new Date()
      start = start.getTime()

      // Validate the TX against the SLP DAG.
      const { isValid } = await this.dag.crawlDag(txid, tokenId)
      if (!isValid) {
        console.log(`TXID ${txid} failed DAG validation. Skipping.`)

        // Mark TX as invalid and save in database.
        txData.isValidSlp = false
        await this.txDb.put(txData.txid, txData)

        return
      }

      // Subtract the input UTXOs and balances from input addresses.
      await this.subtractTokensFromInputAddr(data)

      // Add the output UTXOs to output addresses
      await this.addTokensFromOutput(data)

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

  // Update the addresses in the database recieving the outputs of the tx.
  async addTokensFromOutput (data) {
    try {
      // console.log(`data: ${JSON.stringify(data, null, 2)}`)
      const { slpData } = data

      // Loop through each output in slpData
      for (let i = 0; i < slpData.amounts.length; i++) {
        // const recvrAddr = txData.vout[1 + i].scriptPubKey.addresses[0]

        await this.updateOutputAddr(data, i + 1)
        // const addrObj = await this.updateOutputAddr(data, i + 1)
        // console.log(`addrObj: ${JSON.stringify(addrObj, null, 2)}`)
      }

      return true
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

      // Get the addr database object and add the output UTXO to it.
      const slpAmountStr = slpData.amounts[voutIndex - 1].toString()
      // const addr = await this.addUtxoToOutputAddr(
      //   data,
      //   recvrAddr,
      //   voutIndex,
      //   slpAmountStr
      // )
      // console.log(`addr.utxo from DB: ${JSON.stringify(addr.utxos, null, 2)}`)

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
      this.updateBalanceFromSend(addr, slpData, voutIndex - 1)

      // console.log(`Saving this UTXO data to database for addr ${recvrAddr}: ${JSON.stringify(addr.utxos, null, 2)}`)

      // Save address to the database.
      await this.addrDb.put(recvrAddr, addr)

      // console.log(`Stored addr data in database: ${JSON.stringify(addr, null, 2)}`)

      return addr
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
      // console.log(`data: ${JSON.stringify(data, null, 2)}`)
      const { slpData, txData } = data

      const utxo = {
        txid: txData.txid,
        vout: vout,
        type: 'token',
        qty: slpAmountStr,
        tokenId: slpData.tokenId,
        address: recvrAddr
      }

      return utxo
    } catch (err) {
      console.error('Error in updateAddrObjFromOutput()')
      throw err
    }
  }

  // Update the balance for the given address with the given token data.
  // Modifies the balance of the addrObj, in-place.
  // Returns true to signal that the function completed successfully.
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
        return true
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

        return true
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
        // const inputIsValid = await this.dag.validateTxid(thisVin.txid)
        const { isValid } = await this.dag.crawlDag(thisVin.txid, txData.tokenId)
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
        // console.log('addrData: ', addrData)

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
        this.subtractBalanceFromSend(addrData, utxoToDelete[0])
        // console.log('addrData after subtractBalanceFromSend: ', addrData)

        // Add the txid to the transaction history.
        const txObj = {
          txid: txData.txid,
          height: blockHeight
        }
        this.util.addTxWithoutDuplicate(txObj, addrData.txs)

        // Save the updated address data to the database.
        await this.addrDb.put(thisVin.address, addrData)
      }

      // Return true to indicate that the TX was processed.
      return true
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

      // Subtract the balance of the utxoToDelete from the balance for that token.
      for (let i = 0; i < addrObj.balances.length; i++) {
        const thisBalance = addrObj.balances[i]

        if (thisBalance.tokenId === utxoToDelete.tokenId) {
          const currentBalance = new BigNumber(thisBalance.qty)
          const amountToSubtract = new BigNumber(utxoToDelete.qty)

          const difference = currentBalance.minus(amountToSubtract)

          thisBalance.qty = difference.toString()

          // If the balance is zero, remove that entry from the address data.
          if (difference.isZero()) {
            addrObj.balances.splice(i, 1)
          }

          break // Exit the loop
        }
      }

      return true
    } catch (err) {
      console.error('Error in indexer/utils.js/updateBalance()')
      throw err
    }
  }
}

module.exports = Send