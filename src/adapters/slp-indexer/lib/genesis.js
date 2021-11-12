/*
  A class library for processing Genesis SLP transactions
*/

const IndexerUtils = require('./utils')

class Genesis {
  constructor (localConfig = {}) {
    // LevelDBs
    this.addrDb = localConfig.addrDb
    this.tokenDb = localConfig.tokenDb

    this.util = new IndexerUtils()
  }

  async processTx (data) {
    try {
      // const { slpData, blockHeight, txData } = data

      await this.addTokenToDB(data)

      await this.addReceiverAddress(data)

      await this.addBatonAddress(data)
    } catch (err) {
      console.error('Error in genesis.processTx()')
      throw err
    }
  }

  // Process a GENESIS transaction by adding the new token to the token database.
  async addTokenToDB (data) {
    try {
      const { slpData, blockHeight } = data

      // Add the new token to the token database.
      const token = {
        type: slpData.tokenType,
        ticker: slpData.ticker,
        name: slpData.name,
        tokenId: slpData.tokenId,
        documentUri: slpData.documentUri,
        documentHash: slpData.documentHash,
        decimals: slpData.decimals,
        mintBatonIsActive: false,
        tokensInCirculationBN: slpData.qty,
        tokensInCirculationStr: slpData.qty.toString(),
        blockCreated: blockHeight
      }

      // Handle case if minting baton was created.
      if (slpData.mintBatonVout !== null) {
        token.mintBatonIsActive = true
      }

      console.log(`token Genesis: ${JSON.stringify(token, null, 2)}`)

      // Store the token data in the database.
      await this.tokenDb.put(slpData.tokenId, token)

      return true
    } catch (err) {
      console.error('Error in genesis.addTokenToDB()')
      throw err
    }
  }

  // Add the address to the database, for the address recieving the tokens
  // created by the Genesis transaction.
  async addReceiverAddress (data) {
    try {
      const { slpData, txData, blockHeight } = data

      const recvrAddr = txData.vout[1].scriptPubKey.addresses[0]

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
        vout: 1,
        type: 'token',
        qty: slpData.qty.toString(),
        tokenId: slpData.tokenId,
        address: recvrAddr
      }
      addr.utxos.push(utxo)
      // this.util.addWithoutDuplicate(utxo, addr.utxos)
      console.log(`genesis utxo: ${JSON.stringify(utxo, null, 2)}`)

      // Add the txid to the transaction history.
      const txObj = {
        txid: txData.txid,
        height: blockHeight
      }
      this.util.addTxWithoutDuplicate(txObj, addr.txs)

      // Update balances
      this.updateBalanceFromGenesis(addr, slpData)

      // Save address to the database.
      await this.addrDb.put(recvrAddr, addr)

      return addr
    } catch (err) {
      console.error('Error in genesis.addReceiverAddress()')
      throw err
    }
  }

  // Add the address to the database, for the address recieving the minting
  // baton.
  async addBatonAddress (data) {
    try {
      const { slpData, txData, blockHeight } = data
      // console.log(`data: ${JSON.stringify(data, null, 2)}`)

      // Exit if the mint baton is null or 0.
      if (!slpData.mintBatonVout) return

      // Exit if mintBatonVout is 1. That is not allowed.
      if (slpData.mintBatonVout === 1) return

      let recvrAddr
      try {
        recvrAddr = txData.vout[slpData.mintBatonVout].scriptPubKey.addresses[0]
      } catch (err) {
        // Corner case: Mint baton was specified but the output does not actually
        // exist. In that case, the mint baton is actually burned.
        return
      }

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
      console.log(`mint baton utxo: ${JSON.stringify(utxo, null, 2)}`)

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
      console.error('Error in genesis.addBatonAddress()')
      throw err
    }
  }

  // Update the balance for the given address with the given token data.
  updateBalanceFromGenesis (addrObj, slpData) {
    try {
      // console.log('addrObj: ', addrObj)
      // console.log('slpData: ', slpData)

      const tokenId = slpData.tokenId
      const qty = slpData.qty

      // Get existing balance, if it exists.
      const tokenExists = addrObj.balances.filter((x) => x.tokenId === tokenId)
      // console.log('tokenExists: ', tokenExists)

      if (!tokenExists.length) {
        // Balance for this token does not exist in the address. Add it.
        addrObj.balances.push({ tokenId, qty })
        return true
      }

      // Token exists in the address object, update the balance.
      for (let i = 0; i < addrObj.balances.length; i++) {
        const thisBalance = addrObj.balances[i]

        if (thisBalance.tokenId !== tokenId) continue

        // bignumber.js addition.
        thisBalance.qty = qty.plus(thisBalance.qty)

        return true
      }

      // This code path shouldn't execute.
      return false
    } catch (err) {
      console.error('Error in indexer/utils.js/updateBalance()')
      throw err
    }
  }
}

module.exports = Genesis
