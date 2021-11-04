/*
  A class library for processing Send SLP transactions

  Strategy for analyzing send transactions:
  - MINT transactions bring new tokens into existence.
  - Validate the transaction with slp-validate. If invalid, exit processing.
  - Add token output quantities to each output address.
  - Increase the tokens in circulation value in the token index.
*/

// Public npm libraries
const BigNumber = require('bignumber.js')

// Local libraries
const IndexerUtils = require('./utils')
const SlpValidate = require('./slp-validate')
const DAG = require('./dag')

class Mint {
  constructor (localConfig = {}) {
    this.cache = localConfig.cache
    if (!this.cache) {
      throw new Error(
        'Must pass cache instance when instantiating Send library'
      )
    }
    // TODO: Throw error if database handles are not passed in with localConfig

    // LevelDBs
    this.addrDb = localConfig.addrDb
    this.tokenDb = localConfig.tokenDb
    this.txDb = localConfig.txDb

    this.util = new IndexerUtils()
    this.slpValidate = new SlpValidate()
    this.dag = new DAG(localConfig)
  }

  async processTx (data) {
    try {
      // console.log(`mint.processTx() data: ${JSON.stringify(data, null, 2)}`)
      // const { slpData } = data

      // console.log('slpData: ', slpData)
      // console.log('slpData.amounts: ', slpData.amounts)

      // Validate the TX against the SLP DAG.
      const txid = data.txData.txid
      // const txidIsValid = await this.slpValidate.validateTxid(txid)
      // if (!txidIsValid) {
      //   console.log(`TXID ${txid} failed DAG validation. Skipping.`)
      //   return
      // }
      const txidIsValid = await this.dag.validateTxid(txid)
      if (!txidIsValid) {
        console.log(`TXID ${txid} failed DAG validation. Skipping.`)
        return
      }

      // Update the minting baton to the the output address.
      await this.removeBatonInAddr(data)

      // Add the output UTXOs to output addresses
      await this.addTokensFromOutput(data)

      // Update the circulating supply in the token index.
      await this.updateTokenStats(data)

      await this.addBatonOutAddr(data)
    } catch (err) {
      console.error('Error in mint.processTx()')
      throw err
    }
  }

  // Update the balance for the given address with the given token data.
  // updateBalanceFromSend (addrObj, slpData, amountIndex) {
  async updateBalanceFromMint (addr, slpData) {
    try {
      // console.log(`slpData: ${JSON.stringify(slpData, null, 2)}`)
      // console.log(`addr: ${JSON.stringify(addr, null, 2)}`)

      const tokenId = slpData.tokenId
      const qty = slpData.qty

      // const thisAddr = txData.vout[1].scriptPubKey.addresses[1]

      // Get address object from the database.
      // const addrObj = await this.addrDb.get(thisAddr)

      // Get existing balance, if it exists.
      const tokenExists = addr.balances.filter((x) => x.tokenId === tokenId)
      // console.log('tokenExists: ', tokenExists)

      // If the token does not exist in the address object from the database.
      if (!tokenExists.length) {
        // Balance for this token does not exist in the address. Add it.
        addr.balances.push({ tokenId, qty: qty.toString() })
        return true
      }

      // Token exists in the address object, update the balance.
      for (let i = 0; i < addr.balances.length; i++) {
        const thisBalance = addr.balances[i]

        // Skip entries that do not match the token ID.
        if (thisBalance.tokenId !== tokenId) continue

        // bignumber.js addition.
        thisBalance.qty = qty.plus(thisBalance.qty).toString()

        return true
      }

      // This code path shouldn't execute.
      return false
    } catch (err) {
      console.error('Error in updateBalanceFromMint()')
      throw err
    }
  }

  // Remove the minting baton UTXO from the input address.
  async removeBatonInAddr (data) {
    try {
      let batonFound = false
      let addr = {}
      let baton = {}
      let thisAddr

      // Find the input address that spent the baton.
      const vin = data.txData.vin
      for (let i = 0; i < vin.length; i++) {
        thisAddr = vin[i].address

        // Attempt to get the address from the database. If it doesn't exist,
        // then skip the address because it's not the one holding the minting
        // baton.
        // let addr = {}
        try {
          addr = await this.addrDb.get(thisAddr)
          console.log(
            `removeBatonInAddr() ${thisAddr}: ${JSON.stringify(addr, null, 2)}`
          )
        } catch (err) {
          // Move on to the next address.
          continue
        }

        // Get the UTXO that contains the baton.
        // Also ensure the UTXO TXID and Vin TXID match.
        baton = addr.utxos.filter(
          (x) =>
            x.type === 'baton' &&
            x.txid === vin[i].txid &&
            x.vout === vin[i].vout
        )

        // If address does not contain baton UTXO, then move on to next address.
        if (baton.length === 0) continue

        baton = baton[0]
        console.log(`baton UTXO: ${JSON.stringify(baton, null, 2)}`)
        // console.log(`addr before: ${JSON.stringify(addr, null, 2)}`)

        batonFound = true

        // Exit the loop.
        break
      }

      if (!batonFound) {
        console.log(`data.txData: ${JSON.stringify(data.txData, null, 2)}`)
        console.log(`addr: ${JSON.stringify(addr, null, 2)}`)
        throw new Error('Minting baton not found. UTXO is not in database.')
      }

      // Remove the baton UTXO from the array
      addr.utxos = this.util.removeUtxoFromArray(baton, addr.utxos)
      // console.log(`addr: ${JSON.stringify(addr, null, 2)}`)

      // Save updated address data to the database.
      await this.addrDb.put(thisAddr, addr)

      return true
    } catch (err) {
      console.error('Error in mint.js/removeBatonInAddr()')
      throw err
    }
  }

  // Update/add the address holding minting baton.
  async addBatonOutAddr (data) {
    try {
      const { slpData, txData, blockHeight } = data

      // Exit if the mint baton is null.
      if (!slpData.mintBatonVout) return

      const recvrAddr =
        txData.vout[slpData.mintBatonVout].scriptPubKey.addresses[0]

      // Update/add reciever address.
      let addr
      try {
        // Address exists in the database
        addr = await this.addrDb.get(recvrAddr)
        // console.log('addr exists in the database: ', addr)
      } catch (err) {
        // New address.
        addr = this.util.getNewAddrObj()
      }

      const utxo = {
        txid: txData.txid,
        vout: slpData.mintBatonVout,
        type: 'baton',
        tokenId: slpData.tokenId,
        address: recvrAddr
      }
      addr.utxos.push(utxo)

      // Add the txid to the transaction history.
      const txObj = {
        txid: txData.txid,
        height: blockHeight
      }
      this.util.addTxWithoutDuplicate(txObj, addr.txs)

      // Save address to the database.
      await this.addrDb.put(recvrAddr, addr)

      return addr
    } catch (err) {
      console.error('Error in mint.js/addBatonOutAddr()')
      throw err
    }
  }

  // Update the token quantity in circulation.
  async updateTokenStats (data) {
    try {
      const { slpData } = data

      // Get the token stats from the database.
      const tokenStats = await this.tokenDb.get(slpData.tokenId)
      console.log('MINT update to tokenStats: ', tokenStats)

      // Add tokens using BigNumber math.
      const qty = slpData.qty.plus(
        new BigNumber(tokenStats.tokensInCirculationStr)
      )
      const qtyStr = qty.toString()

      // Update the token stats in the database.
      tokenStats.tokensInCirculationBN = qty
      tokenStats.tokensInCirculationStr = qtyStr

      // Update baton status
      if (slpData.mintBatonVout) {
        tokenStats.mintBatonIsActive = true
      } else {
        tokenStats.mintBatonIsActive = false
      }

      // Save updates to the database.
      await this.tokenDb.put(slpData.tokenId, tokenStats)
    } catch (err) {
      console.error('Error in mint.js/updateTokenStats()')
      throw err
    }
  }

  // Add the newly minted tokens to the recieving address.
  async addTokensFromOutput (data) {
    try {
      // console.log(`data: ${JSON.stringify(data, null, 2)}`)
      const { slpData, txData, blockHeight } = data

      // Reciever address of newly minted tokens.
      const recvrAddr = txData.vout[1].scriptPubKey.addresses[0]

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

      // Create a token UTXO.
      const utxo = {
        txid: txData.txid,
        vout: 1,
        type: 'token',
        qty: slpData.qty.toString(),
        tokenId: slpData.tokenId,
        address: recvrAddr
      }
      addr.utxos.push(utxo)
      // this.util.addWithoutDuplicate(utxo, addr.utxos)

      // Add the txid to the transaction history.
      const txObj = {
        txid: txData.txid,
        height: blockHeight
      }
      this.util.addTxWithoutDuplicate(txObj, addr.txs)

      // Update balances
      this.updateBalanceFromMint(addr, slpData, txData)

      // Save address to the database.
      await this.addrDb.put(recvrAddr, addr)

      return true
    } catch (err) {
      console.error('Error in addTokensFromOutput()')
      throw err
    }
  }
}

module.exports = Mint
