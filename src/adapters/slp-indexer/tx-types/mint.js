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
const IndexerUtils = require('../lib/utils')
const DAG = require('../lib/dag')

class Mint {
  constructor (localConfig = {}) {
    // Dependency injection
    this.cache = localConfig.cache
    if (!this.cache) {
      throw new Error(
        'Must pass cache instance when instantiating mint.js'
      )
    }
    this.addrDb = localConfig.addrDb
    if (!this.addrDb) {
      throw new Error(
        'Must pass address DB instance when instantiating mint.js'
      )
    }
    this.tokenDb = localConfig.tokenDb
    if (!this.tokenDb) {
      throw new Error(
        'Must pass token DB instance when instantiating mint.js'
      )
    }
    this.txDb = localConfig.txDb
    if (!this.txDb) {
      throw new Error(
        'Must pass transaction DB instance when instantiating mint.js'
      )
    }
    this.utxoDb = localConfig.utxoDb
    if (!this.utxoDb) {
      throw new Error(
        'Must pass utxo DB instance when instantiating mint.js'
      )
    }

    // Encapsulate dependencies
    this.util = new IndexerUtils()
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
      const tokenId = data.txData.tokenId
      const { isValid } = await this.dag.crawlDag(txid, tokenId)
      // const { isValid, dag } = await this.dag.crawlDag(txid, tokenId)
      // console.log('isValid: ', isValid)
      if (!isValid) {
        console.log(`MINT TXID ${txid} failed DAG validation. Skipping.`)

        // Mark TX as invalid and save in database.
        data.txData.isValidSlp = false
        await this.txDb.put(data.txData.txid, data.txData)

        return
      }

      console.log('isValid: ', isValid)
      // console.log(`dag: ${JSON.stringify(dag, null, 2)}`)

      // Ensure the inputs to the tx have a valid mint baton.
      const batonVin = this.findBatonInput(data)
      if (batonVin === null) {
        console.log(`MINT TXID ${txid} has no baton input UTXOs. Skipping`)

        // Mark TX as invalid and save in database.
        data.txData.isValidSlp = false
        await this.txDb.put(data.txData.txid, data.txData)

        return
      }

      // Remove the minting baton from the input address.
      await this.removeBatonInAddr(data)

      // Add the output UTXOs to output addresses
      await this.addTokensFromOutput(data)

      // Update the circulating supply in the token index.
      await this.updateTokenStats(data)

      // If there is a minting baton output, add the address to the DB.
      await this.addBatonOutAddr(data)

      // Return true to signal a successful completion of this function.
      return true
    } catch (err) {
      console.error('Error in mint.processTx()')
      throw err
    }
  }

  // Returns the vin index that contains the minting baton. If no minting
  // baton is found, returns null.
  findBatonInput (data) {
    try {
      // Default output
      let output = null

      const tokenId = data.slpData.tokenId
      const txData = data.txData

      // Loop through each input.
      for (let i = 0; i < txData.vin.length; i++) {
        const thisVin = txData.vin[i]

        // Test the input to see if it's the baton we're looking for.
        const tokenIdMatches = thisVin.tokenId === tokenId
        const isBaton = thisVin.isMintBaton

        if (tokenIdMatches && isBaton) {
          // Baton match found.
          output = i
          break
        }
      }

      return output
    } catch (err) {
      console.error('Error in findBatonInput()')
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
      // let invalidInputFound = false

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
          // console.log(
          //   `removeBatonInAddr() ${thisAddr}: ${JSON.stringify(addr, null, 2)}`
          // )
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
        // console.log(`data.txData: ${JSON.stringify(data.txData, null, 2)}`)
        // console.log(`addr: ${JSON.stringify(addr, null, 2)}`)
        console.log(`vin: ${JSON.stringify(vin, null, 2)}`)
        throw new Error('Minting baton not found. UTXO is not in database.')
      }

      // Remove the baton UTXO from the array
      addr.utxos = this.util.removeUtxoFromArray(baton, addr.utxos)
      // console.log(`addr: ${JSON.stringify(addr, null, 2)}`)

      // Save updated address data to the database.
      await this.addrDb.put(thisAddr, addr)

      // Remove the baton UTXO from the UTXO database.
      await this.utxoDb.del(`${baton.txid}:${baton.vout}`)

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
        address: recvrAddr,
        tokenType: slpData.tokenType
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

      // Add the utxo to the utxo database
      await this.utxoDb.put(`${utxo.txid}:${utxo.vout}`, utxo)

      // Signal that the method completed successfully by returning the addr
      // object.
      return addr
    } catch (err) {
      console.error('Error in mint.js/addBatonOutAddr()')
      throw err
    }
  }

  // Update the token quantity in circulation.
  async updateTokenStats (data) {
    try {
      const { slpData, txData, blockHeight } = data

      // Get the token stats from the database.
      const tokenStats = await this.tokenDb.get(slpData.tokenId)
      // console.log('MINT update to tokenStats: ', tokenStats)

      // Add tokens using BigNumber math.
      const qty = slpData.qty.plus(
        new BigNumber(tokenStats.tokensInCirculationStr)
      )
      const qtyStr = qty.toString()

      // Update the token stats in the database.
      tokenStats.tokensInCirculationBN = qty
      tokenStats.tokensInCirculationStr = qtyStr

      // Track the total minted.
      const prevMinted = new BigNumber(tokenStats.totalMinted)
      const totalMinted = prevMinted.plus(slpData.qty)
      tokenStats.totalMinted = totalMinted.toString()

      // Update baton status
      if (slpData.mintBatonVout) {
        tokenStats.mintBatonIsActive = true
      } else {
        tokenStats.mintBatonIsActive = false
      }

      // Update the transactions array
      const txInfo = {
        txid: txData.txid,
        height: blockHeight,
        type: 'MINT',
        qty: slpData.qty.toString()
      }
      tokenStats.txs.push(txInfo)

      // Save updates to the database.
      await this.tokenDb.put(slpData.tokenId, tokenStats)

      // Signal that the function completed successfully by returning the
      // tokenStats object.
      return tokenStats
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

      // Calculate the effective quantity
      const decimals = txData.tokenDecimals
      let effectiveQty = new BigNumber(slpData.qty).dividedBy(10 ** decimals)
      effectiveQty = effectiveQty.toString()

      // Get the BCH in the output for this utxo.
      const output = txData.vout[1]
      const value = output.value

      // Create a token UTXO.
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
      console.log(`mint utxo: ${JSON.stringify(utxo, null, 2)}`)

      addr.utxos.push(utxo)
      // this.util.addWithoutDuplicate(utxo, addr.utxos)

      // Add the txid to the transaction history.
      const txObj = {
        txid: txData.txid,
        height: blockHeight
      }
      this.util.addTxWithoutDuplicate(txObj, addr.txs)

      // console.log(`addr: ${JSON.stringify(addr, null, 2)}`)

      // Update balances
      this.updateBalanceFromMint(addr, slpData)

      // Save address to the database.
      await this.addrDb.put(recvrAddr, addr)

      // Add the utxo to the utxo database
      await this.utxoDb.put(`${utxo.txid}:${utxo.vout}`, utxo)

      return true
    } catch (err) {
      console.error('Error in addTokensFromOutput()')
      throw err
    }
  }
}

module.exports = Mint
