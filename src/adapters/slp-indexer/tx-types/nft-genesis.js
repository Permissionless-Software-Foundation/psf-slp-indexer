/*
  A class library for processing NFT (child) Genesis SLP transactions
*/

// Public npm libraries
const BigNumber = require('bignumber.js')

// Local libraries
const IndexerUtils = require('../lib/utils')

class NftGenesis {
  constructor (localConfig = {}) {
    // LevelDBs
    this.addrDb = localConfig.addrDb
    if (!this.addrDb) {
      throw new Error(
        'Instance of address DB required when instantiating nft-genesis.js'
      )
    }
    this.tokenDb = localConfig.tokenDb
    if (!this.tokenDb) {
      throw new Error(
        'Instance of token DB required when instantiating nft-genesis.js'
      )
    }
    this.utxoDb = localConfig.utxoDb
    if (!this.utxoDb) {
      throw new Error(
        'Instance of utxo DB required when instantiating nft-genesis.js'
      )
    }
    this.cache = localConfig.cache
    if (!this.cache) {
      throw new Error(
        'Must pass cache instance when instantiating nft-genesis.js'
      )
    }
    this.txDb = localConfig.txDb
    if (!this.txDb) {
      throw new Error(
        'Must pass transaction DB instance when instantiating nft-genesis.js'
      )
    }

    // Encapsulate dependencies
    this.util = new IndexerUtils()
  }

  // Primary function. Processes GENESIS transaction.
  async processTx (data) {
    try {
      // console.log(`NFT Genesis data: ${JSON.stringify(data, null, 2)}`)
      console.log(
        `Processing NFT Genesis txid ${data.txData.txid} with ticker '${data.slpData.ticker}' and name '${data.slpData.name}'`
      )

      // const { slpData, blockHeight, txData } = data
      // console.log(`slpData: ${JSON.stringify(data.slpData, null, 2)}`)

      // Verify the required inputs exist to make this a valid NFT transaction.
      const inputsAreValid = await this.validateInputs(data)

      const txid = data.txData.txid

      // If inputs are not valid, then mark the TX as invalid and exit.
      if (!inputsAreValid) {
        console.log(
          `NFT Genesis with TXID ${txid} failed input validation. Skipping.`
        )

        // Mark TX as invalid and save in database.
        data.txData.isValidSlp = false
        await this.txDb.put(txid, data.txData)

        return false
      }

      // Subtract the input UTXOs and balances from input addresses.
      const { spentBN, groupTokenId } = await this.subtractTokensFromInputAddr(data)
      console.log(`NFT TXID ${txid} spent ${spentBN.toString()} Group tokens.`)

      await this.addTokenToDB(data, groupTokenId)

      await this.addReceiverAddress(data)

      // Signal that call completed successfully.
      return true
    } catch (err) {
      console.error('Error in genesis.processTx()')
      throw err
    }
  }

  // Validate that the TX inputs include a Group token as input and meet the
  // other requirements listed in the NFT1 specification:
  // https://github.com/simpleledger/slp-specifications/blob/master/slp-nft-1.md#nft1-protocol-requirements
  // Retui
  async validateInputs (data) {
    try {
      // console.log('Entering nft-genesis.js validateInputs()')

      const { txData } = data
      // console.log(`slpData: ${JSON.stringify(slpData, null, 2)}`)
      // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

      // GENESIS must include spending a valid NFT1 parent token (quantity > 0) at transaction input index 0
      const groupQty = txData.vin[0].tokenQty
      if (!groupQty) {
        // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

        console.log(`Group token quantity is not greater than zero: ${txData.vin[0].tokenQty}`)
        return false
      }

      // Ensure the input token is of type Group (129)
      const groupId = txData.vin[0].tokenId
      const groupInfo = await this.cache.get(groupId)
      // console.log(`groupInfo: ${JSON.stringify(groupInfo, null, 2)}`)

      if (groupInfo.tokenType !== 129) {
        console.log(`First input is not a group token: ${groupInfo.tokenType}`)
        return false
      }

      return true
    } catch (err) {
      console.error('Error in nftGenesis.validateInputs()')
      throw err
    }
  }

  // Process a GENESIS transaction by adding the new token to the token database.
  async addTokenToDB (data, groupTokenId) {
    try {
      const { slpData, blockHeight } = data
      // console.log(`Genesis slpData: ${JSON.stringify(slpData, null, 2)}`)

      // Initialize the transaction array.
      const txInfo = {
        txid: slpData.tokenId,
        height: blockHeight,
        type: 'GENESIS',
        qty: '1' // Force 1 as per NFT1 spec
      }
      const txArray = []
      txArray.push(txInfo)

      const forceQty = new BigNumber(1)

      // Add the new token to the token database.
      const token = {
        type: slpData.tokenType,
        ticker: slpData.ticker,
        name: slpData.name,
        tokenId: slpData.tokenId,
        documentUri: slpData.documentUri,
        documentHash: slpData.documentHash,
        decimals: 0, // Force 0 as per NFT1 spec
        mintBatonIsActive: false,
        tokensInCirculationBN: forceQty, // Force 1 as per NFT1 spec
        tokensInCirculationStr: '1', // Force 1 as per NFT1 spec
        blockCreated: blockHeight,
        totalBurned: '0',
        totalMinted: '1', // Force 1 as per NFT1 spec
        txs: txArray,
        parentGroupId: groupTokenId
      }

      // Handle case if minting baton was created.
      // if (slpData.mintBatonVout) {
      //   token.mintBatonIsActive = true
      // }

      // console.log(`NFT token Genesis: ${JSON.stringify(token, null, 2)}`)

      // Store the token data in the database.
      await this.tokenDb.put(slpData.tokenId, token)

      // Add this token ID to the NFTs array of the Group token that spawned it.
      const groupToken = await this.tokenDb.get(groupTokenId)
      if (Array.isArray(groupToken.nfts)) {
        groupToken.nfts.push(slpData.tokenId)
        await this.tokenDb.put(groupToken.tokenId, groupToken)
      }

      return token
    } catch (err) {
      console.error('Error in nftGenesis.addTokenToDB()')
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
      const decimals = 0
      // let effectiveQty = new BigNumber(slpData.qty).dividedBy(10 ** decimals)
      // effectiveQty = effectiveQty.toString()
      const effectiveQty = '1'

      // Get the BCH in the output for this utxo.
      const output = txData.vout[1]
      const value = output.value

      const utxo = {
        txid: txData.txid,
        vout: 1,
        type: 'token',
        qty: '1', // Force 1 as per NFT1 spec
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
      console.error('Error in nftGenesis.addReceiverAddress()')
      throw err
    }
  }

  // Update the balance for the given address with the given token data.
  updateBalanceFromGenesis (addrObj, slpData) {
    try {
      // console.log('addrObj: ', addrObj)
      // console.log('slpData: ', slpData)

      const tokenId = slpData.tokenId
      // const qty = slpData.qty
      const qty = new BigNumber(1)

      // Get existing balance, if it exists.
      const tokenExists = addrObj.balances.filter((x) => x.tokenId === tokenId)
      // console.log('tokenExists: ', tokenExists)

      if (!tokenExists.length) {
        // Balance for this token does not exist in the address. Add it.
        addrObj.balances.push({ tokenId, qty })
        return true
      }

      // TODO: I think this for-loop can be removed, since it's not possible for
      // an address to have an existing balance of an NFT.
      // This function was copied send.js.

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
      console.error('Error in nftGenesis.updateBalanceFromGenesis()')
      throw err
    }
  }

  // Update the address entry in the database, to reflect the spent Group tokens.
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
          // console.log(`\nthisVin: ${JSON.stringify(thisVin, null, 2)}`)

          throw new Error(`Input UTXO with TXID ${thisVin.txid} could not be found in database.
            Skipping processing of ${data.txData.txid}`)
        }
      }

      let total = new BigNumber(0)
      let groupTokenId = ''

      // Loop through and process each input and delete the input UTXO
      // from the addr database object.
      for (let i = 0; i < txData.vin.length; i++) {
        const thisVin = txData.vin[i]
        console.log(`processing thisVin: ${JSON.stringify(thisVin, null, 2)}`)

        // GENESIS must include spending a valid NFT1 parent token
        // (quantity > 0) at transaction input index 0
        if (i === 0) {
          if (!thisVin.tokenQty) {
            throw new Error('NFT does not have Group token as input.')
          }
        }

        // If there are no tokens in this input, then skip it.
        if (!thisVin.tokenQty) continue

        // If the token IDs do not match, skip it.
        // if (thisVin.tokenId !== txData.tokenId) continue

        groupTokenId = thisVin.tokenId
        console.log(`Group Token ID used to generate this NFT: ${groupTokenId}`)

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
          // console.log(`\nthisVin: ${JSON.stringify(thisVin, null, 2)}`)
          // console.log(
          //   `addrData.utxos: ${JSON.stringify(addrData.utxos, null, 2)}`
          // )

          throw new Error(
            `Could not find UTXO in address ${thisVin.address} to delete when processing TX inputs.
            TXID: ${data.txData.txid}`
          )
        }

        // console.log(
        //   `Deleting input UTXO: ${JSON.stringify(utxoToDelete[0], null, 2)}`
        // )

        // Delete the UTXO that was just spent.
        addrData.utxos = this.util.removeUtxoFromArray(
          utxoToDelete[0],
          addrData.utxos
        )
        // console.log('addrData after utxo delete: ', addrData)

        // Subtract the token balance
        const negAmntBN = this.subtractBalanceFromSend(
          addrData,
          utxoToDelete[0]
        )
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

      // Return the amount of Group tokens consumed
      const spentBN = total
      return { spentBN, groupTokenId }

      // const inputTx = await this.txDb.get()
    } catch (err) {
      console.error(
        `Error in nftGenesis.subtractTokensFromInputAddr() TXID: ${data.txData.txid}`
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
      console.error('Error in nftGenesis.subtractBalanceFromSend()')
      throw err
    }
  }
}

module.exports = NftGenesis
