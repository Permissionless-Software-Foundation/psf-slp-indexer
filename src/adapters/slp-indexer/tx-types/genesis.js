/*
  A class library for processing Genesis SLP transactions
*/

const IndexerUtils = require('../lib/utils')
const BigNumber = require('bignumber.js')

class Genesis {
  constructor (localConfig = {}) {
    // LevelDBs
    this.addrDb = localConfig.addrDb
    if (!this.addrDb) {
      throw new Error(
        'Instance of address DB required when instantiating genesis.js'
      )
    }
    this.tokenDb = localConfig.tokenDb
    if (!this.tokenDb) {
      throw new Error(
        'Instance of token DB required when instantiating genesis.js'
      )
    }
    this.utxoDb = localConfig.utxoDb
    if (!this.utxoDb) {
      throw new Error(
        'Instance of utxo DB required when instantiating genesis.js'
      )
    }

    // Encapsulate dependencies
    this.util = new IndexerUtils()
  }

  // Primary function. Processes GENESIS transaction.
  async processTx (data) {
    try {
      // console.log(`data: ${JSON.stringify(data, null, 2)}`)
      console.log(
        `Processing Genesis txid ${data.txData.txid} with ticker '${data.slpData.ticker}' and name '${data.slpData.name}'`
      )
      // const { slpData, blockHeight, txData } = data

      await this.addTokenToDB(data)

      await this.addReceiverAddress(data)

      await this.addBatonAddress(data)

      // Signal that call completed successfully.
      return true
    } catch (err) {
      console.error('Error in genesis.processTx()')
      throw err
    }
  }

  // Process a GENESIS transaction by adding the new token to the token database.
  async addTokenToDB (data) {
    try {
      const { slpData, blockHeight } = data
      console.log(`Genesis slpData: ${JSON.stringify(slpData, null, 2)}`)

      // Initialize the transaction array.
      const txInfo = {
        txid: slpData.tokenId,
        height: blockHeight,
        type: 'GENESIS',
        qty: slpData.qty.toString()
      }
      const txArray = []
      txArray.push(txInfo)

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
        blockCreated: blockHeight,
        totalBurned: '0',
        totalMinted: slpData.qty.toString(),
        txs: txArray
      }

      // Handle case if minting baton was created.
      if (slpData.mintBatonVout) {
        token.mintBatonIsActive = true
      }

      console.log(`token Genesis: ${JSON.stringify(token, null, 2)}`)

      // Store the token data in the database.
      await this.tokenDb.put(slpData.tokenId, token)

      return token
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

      let recvrAddr
      try {
        recvrAddr = txData.vout[1].scriptPubKey.addresses[0]
      } catch (err) {
        // Corner case in tx 8a2aa5bb691a0ba15cce0d2a5b4aade6f43d39e10dc0a10d89dd6e7938a10c63
        // Where second output was a second OP_RETURN
        return true
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

      // Calculate the effective quantity
      const decimals = txData.tokenDecimals
      let effectiveQty = new BigNumber(slpData.qty).dividedBy(10 ** decimals)
      effectiveQty = effectiveQty.toString()

      // Get the BCH in the output for this utxo.
      const output = txData.vout[1]
      const value = output.value

      const utxo = {
        txid: txData.txid,
        vout: 1,
        type: 'token',
        qty: slpData.qty.toString(),
        tokenId: slpData.tokenId,
        tokenType: slpData.tokenType,
        address: recvrAddr,
        effectiveQty,
        decimals,
        value
      }
      // console.log(`genesis utxo: ${JSON.stringify(utxo, null, 2)}`)

      addr.utxos.push(utxo)
      // this.util.addWithoutDuplicate(utxo, addr.utxos)

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

      // Add the utxo to the utxo database
      await this.utxoDb.put(`${utxo.txid}:${utxo.vout}`, utxo)

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
      console.log(`data: ${JSON.stringify(data, null, 2)}`)

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
        address: recvrAddr,
        tokenType: slpData.tokenType
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

      // Add the utxo to the utxo database
      await this.utxoDb.put(`${utxo.txid}:${utxo.vout}`, utxo)

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
        console.log(`thisBalance: ${JSON.stringify(thisBalance, null, 2)}`)

        if (thisBalance.tokenId !== tokenId) continue

        // bignumber.js addition.
        thisBalance.qty = qty.plus(thisBalance.qty)

        return true
      }
    } catch (err) {
      console.error('Error in genesis.updateBalanceFromGenesis()')
      throw err
    }
  }
}

module.exports = Genesis
