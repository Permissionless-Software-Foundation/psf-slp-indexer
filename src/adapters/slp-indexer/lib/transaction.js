/*
  High-level functions for working with Transactions
*/

// Public npm libraries
const BigNumber = require('bignumber.js')

// Local libraries
const RPC = require('./rpc')

// const RawTransaction = require('./raw-transactions')
// const SlpUtils = require('./slp/utils')
// const Blockchain = require('./blockchain')

class Transaction {
  constructor (config) {
    this.rpc = new RPC()

    // State
    this.txCache = {}
  }

  /**
   * @api Transaction.get() get()
   * @apiName get3
   * @apiGroup Transaction
   * @apiDescription
   * Returns an object of transaction data, including addresses for input UTXOs.
   * If it is a SLP token transaction, the token information for inputs and
   * outputs will also be included.
   *
   * This is an API heavy call. This function will only work with a single txid.
   * It does not yet support an array of TXIDs.
   *
   * This is the same as bchjs.Transaction.get(), except it omits DAG validation of the TXID.
   *
   * @apiExample Example usage:
   * (async () => {
   * try {
   *  let txData = await bchjs.Transaction.get2("0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098");
   *  console.log(txData);
   * } catch(error) {
   * console.error(error)
   * }
   * })()
   */
  async get (txid) {
    try {
      if (typeof txid !== 'string') {
        throw new Error(
          'Input to Transaction.get() must be a string containing a TXID.'
        )
      }

      // Get TX data
      const txDetails = await this.rpc.getRawTransaction.getTxData(txid)
      // console.log(`txDetails: ${JSON.stringify(txDetails, null, 2)}`)

      // Get the block height the transaction was mined in.
      const blockHeader = await this.rpc.getBlockHeader(txDetails.blockhash)
      txDetails.blockheight = blockHeader.height
      // console.log(`blockHeader: ${JSON.stringify(blockHeader, null, 2)}`)

      // Set default as not an SLP tx
      txDetails.isSlpTx = false

      // Get Token Data
      const txTokenData = await this.getTokenInfo(txid)
      // console.log(`txTokenData: ${JSON.stringify(txTokenData, null, 2)}`)

      // If not a token, return the tx data. Processing is complete.
      if (!txTokenData) return txDetails

      // Mark TX as an SLP tx. This does not mean it's valid, it just means
      // the OP_RETURN passes a basic check.
      txDetails.isSlpTx = true

      // Get Genesis data
      const genesisData = await this.getTokenInfo(txTokenData.tokenId)
      // console.log(`genesisData: ${JSON.stringify(genesisData, null, 2)}`)

      // Add token information to the tx details object.
      txDetails.tokenTxType = txTokenData.txType
      txDetails.tokenId = txTokenData.tokenId
      txDetails.tokenTicker = genesisData.ticker
      txDetails.tokenName = genesisData.name
      txDetails.tokenDecimals = genesisData.decimals
      txDetails.tokenUri = genesisData.documentUri
      txDetails.tokenDocHash = genesisData.documentHash
      // console.log(`txDetails before processing input and outputs: ${JSON.stringify(txDetails, null, 2)}`)

      // Process TX Outputs
      // Add the token quantity to each output.
      // 'i' starts at 1, because vout[0] is the OP_RETURN
      for (let i = 0; i < txDetails.vout.length; i++) {
        const thisVout = txDetails.vout[i]
        if (txTokenData.txType === 'SEND') {
          // console.log(
          //   `output txTokenData: ${JSON.stringify(txTokenData, null, 2)}`
          // )

          // First output is OP_RETURN, so tokenQty is null.
          if (i === 0) {
            thisVout.tokenQty = null
            thisVout.tokenQtyStr = null
            continue
          }

          // Non SLP outputs.
          if (i > txTokenData.amounts.length) {
            thisVout.tokenQty = null
            thisVout.tokenQtyStr = null
            continue
          }

          const rawQty = txTokenData.amounts[i - 1]

          // Calculate the real quantity using a BigNumber, then convert it to a
          // floating point number.
          let realQty = new BigNumber(rawQty).dividedBy(
            10 ** parseInt(txDetails.tokenDecimals)
          )
          realQty = realQty.toString()
          // realQty = parseFloat(realQty)

          txDetails.vout[i].tokenQtyStr = realQty
          txDetails.vout[i].tokenQty = parseFloat(realQty)

          // console.log(
          //   `thisVout ${i}: ${JSON.stringify(txDetails.vout[i], null, 2)}`
          // )
        } else if (
          txTokenData.txType === 'GENESIS' ||
          txTokenData.txType === 'MINT'
        ) {
          // console.log(
          //   `output txTokenData: ${JSON.stringify(txTokenData, null, 2)}`
          // )

          let tokenQty = 0 // Default value

          // Only vout[1] of a Genesis or Mint transaction represents the tokens.
          // Any other outputs in that transaction are normal BCH UTXOs.
          if (i === 1) {
            tokenQty = txTokenData.qty
            // console.log(`tokenQty: ${JSON.stringify(tokenQty, null, 2)}`)

            // Calculate the real quantity using a BigNumber, then convert it to a
            // floating point number.
            let realQty = new BigNumber(tokenQty).dividedBy(
              10 ** parseInt(txDetails.tokenDecimals)
            )
            realQty = realQty.toString()
            // realQty = parseFloat(realQty)

            thisVout.tokenQtyStr = realQty
            thisVout.tokenQty = parseFloat(realQty)
            // console.log(`thisVout[${i}]: ${JSON.stringify(thisVout, null, 2)}`)
          } else if (i === txTokenData.mintBatonVout) {
            // Optional Mint baton
            thisVout.tokenQtyStr = '0'
            thisVout.tokenQty = 0
            thisVout.isMintBaton = true
          } else {
            thisVout.tokenQtyStr = '0'
            thisVout.tokenQty = 0
          }
        } else {
          throw new Error('Unknown SLP TX type for TX')
        }
      }

      // Process TX inputs
      for (let i = 0; i < txDetails.vin.length; i++) {
        const thisVin = txDetails.vin[i]
        console.log(`thisVin[${i}]: ${JSON.stringify(thisVin, null, 2)}`)

        const vinTokenData = await this.getTokenInfo(thisVin.txid)
        console.log(
          `vinTokenData ${i}: ${JSON.stringify(vinTokenData, null, 2)}`
        )

        // Corner case: Ensure the token ID is the same.
        const vinTokenIdIsTheSame = vinTokenData.tokenId === txDetails.tokenId

        // If the input is not a token input, or if the tokenID is not the same,
        // then mark the token output as null.
        if (!vinTokenData || !vinTokenIdIsTheSame) {
          thisVin.tokenQty = 0
          thisVin.tokenQtyStr = '0'
          thisVin.tokenId = null
          continue
        }

        if (vinTokenData.txType === 'SEND') {
          // console.log(
          //   `SEND vinTokenData ${i}: ${JSON.stringify(vinTokenData, null, 2)}`
          // )

          const tokenQty = vinTokenData.amounts[thisVin.vout - 1]
          // console.log(`tokenQty: ${JSON.stringify(tokenQty, null, 2)}`)

          // Calculate the real quantity using a BigNumber, then convert it to a
          // floating point number.
          let realQty = new BigNumber(tokenQty).dividedBy(
            10 ** parseInt(txDetails.tokenDecimals)
          )
          realQty = realQty.toString()
          // realQty = parseFloat(realQty)

          thisVin.tokenQtyStr = realQty
          thisVin.tokenQty = parseFloat(realQty)
          thisVin.tokenId = vinTokenData.tokenId
        } else if (vinTokenData.txType === 'MINT') {
          // console.log(
          //   `MINT vinTokenData ${i}: ${JSON.stringify(vinTokenData, null, 2)}`
          // )

          let tokenQty = 0 // Default value

          // Only vout[1] of a Genesis transaction represents the tokens.
          // Any other outputs in that transaction are normal BCH UTXOs.
          if (thisVin.vout === 1) {
            tokenQty = vinTokenData.qty
            // console.log(`tokenQty: ${JSON.stringify(tokenQty, null, 2)}`)

            // Calculate the real quantity using a BigNumber, then convert it to a
            // floating point number.
            let realQty = new BigNumber(tokenQty).dividedBy(
              10 ** parseInt(txDetails.tokenDecimals)
            )
            realQty = realQty.toString()
            // realQty = parseFloat(realQty)

            thisVin.tokenQtyStr = realQty
            thisVin.tokenQty = parseFloat(realQty)
            thisVin.tokenId = vinTokenData.tokenId
          } else if (thisVin.vout === vinTokenData.mintBatonVout) {
            // Optional Mint baton
            thisVin.tokenQtyStr = '0'
            thisVin.tokenQty = 0
            thisVin.tokenId = vinTokenData.tokenId
            thisVin.isMintBaton = true
          } else {
            thisVin.tokenQtyStr = '0'
            thisVin.tokenQty = 0
            thisVin.tokenId = null
          }
        } else if (vinTokenData.txType === 'GENESIS') {
          // console.log(
          //   `GENESIS vinTokenData ${i}: ${JSON.stringify(
          //     vinTokenData,
          //     null,
          //     2
          //   )}`
          // )

          let tokenQty = 0 // Default value

          // Only vout[1] of a Genesis transaction represents the tokens.
          // Any other outputs in that transaction are normal BCH UTXOs.
          if (thisVin.vout === 1) {
            tokenQty = vinTokenData.qty
            // console.log(`tokenQty: ${JSON.stringify(tokenQty, null, 2)}`)

            // Calculate the real quantity using a BigNumber, then convert it to a
            // floating point number.
            let realQty = new BigNumber(tokenQty).dividedBy(
              10 ** parseInt(txDetails.tokenDecimals)
            )
            realQty = realQty.toString()
            // realQty = parseFloat(realQty)

            thisVin.tokenQtyStr = realQty
            thisVin.tokenQty = parseFloat(realQty)
            thisVin.tokenId = vinTokenData.tokenId
          } else if (thisVin.vout === vinTokenData.mintBatonVout) {
            // Optional Mint baton
            thisVin.tokenQtyStr = '0'
            thisVin.tokenQty = 0
            thisVin.tokenId = vinTokenData.tokenId
            thisVin.isMintBaton = true
          } else {
            thisVin.tokenQtyStr = '0'
            thisVin.tokenQty = 0
            thisVin.tokenId = null
          }
        } else {
          console.log(
            `Unknown vinTokenData: ${JSON.stringify(vinTokenData, null, 2)}`
          )
          throw new Error('Unknown token type in input')
        }
      }

      return txDetails
    } catch (err) {
      console.error('Error in get3()')

      // This case handles rate limit errors.
      if (err.response && err.response.data && err.response.data.error) {
        throw new Error(err.response.data.error)
      }

      if (err.error) throw new Error(err.error)
      throw err
    }
  }

  // A wrapper for decodeOpReturn(). Returns false if txid is not an SLP tx.
  // Returns the token data if the txid is an SLP tx.
  async getTokenInfo (txid) {
    try {
      const tokenData = await this.decodeOpReturn(txid)
      return tokenData
    } catch (err) {
      return false
    }
  }

  /**
   * @api SLP.Utils.decodeOpReturn() decodeOpReturn()
   * @apiName decodeOpReturn
   * @apiGroup SLP Utils
   * @apiDescription
   * Retrieves transactions data from a txid and decodes the SLP OP_RETURN data.
   *
   * Throws an error if given a non-SLP txid.
   *
   * If optional associative array parameter cache is used, will cache and
   * reuse responses for the same input.
   *
   * A third optional input, `usrObj`, is used by bch-api for managing rate limits.
   * It can be safely ignored when writing apps using this call.
   *
   *
   * @apiExample Example usage:
   *
   * (async () => {
   * try {
   *  const txid =
   *   "266844d53e46bbd7dd37134688dffea6e54d944edff27a0add63dd0908839bc1"
   *
   *  const data = await bchjs.SLP.Utils.decodeOpReturn(txid)
   *
   *  console.log(`Decoded OP_RETURN data: ${JSON.stringify(data,null,2)}`)
   * } catch (error) {
   *  console.error(error)
   * }
   * })()
   *
   * // returns
   * {
   *  "tokenType": 1,
   *  "txType": "SEND",
   *  "tokenId": "497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7"
   *  "amounts": [
   *    "100000000",
   *    "99883300000000"
   *  ]
   * }
   *
   */
  // Reimplementation of decodeOpReturn() using slp-parser.
  async decodeOpReturn (txid) {
    try {
      // Validate the txid input.
      if (!txid || txid === '' || typeof txid !== 'string') {
        throw new Error('txid string must be included.')
      }

      // Return results if they've been cached.
      const cachedVal = this.txCache[txid]
      if (cachedVal) return cachedVal

      const txDetails = await this.rpc.getRawTransaction(txid)

      // SLP spec expects OP_RETURN to be the first output of the transaction.
      const opReturn = txDetails.vout[0].scriptPubKey.hex
      // console.log(`opReturn hex: ${opReturn}`)

      const parsedData = _this.slpParser.parseSLP(Buffer.from(opReturn, 'hex'))
      // console.log(`parsedData: ${JSON.stringify(parsedData, null, 2)}`)

      // Convert Buffer data to hex strings or utf8 strings.
      let tokenData = {}
      if (parsedData.transactionType === 'SEND') {
        tokenData = {
          tokenType: parsedData.tokenType,
          txType: parsedData.transactionType,
          tokenId: parsedData.data.tokenId.toString('hex'),
          amounts: parsedData.data.amounts
        }
      } else if (parsedData.transactionType === 'GENESIS') {
        tokenData = {
          tokenType: parsedData.tokenType,
          txType: parsedData.transactionType,
          ticker: parsedData.data.ticker.toString(),
          name: parsedData.data.name.toString(),
          tokenId: txid,
          documentUri: parsedData.data.documentUri.toString(),
          documentHash: parsedData.data.documentHash.toString(),
          decimals: parsedData.data.decimals,
          mintBatonVout: parsedData.data.mintBatonVout,
          qty: parsedData.data.qty
        }
      } else if (parsedData.transactionType === 'MINT') {
        tokenData = {
          tokenType: parsedData.tokenType,
          txType: parsedData.transactionType,
          tokenId: parsedData.data.tokenId.toString('hex'),
          mintBatonVout: parsedData.data.mintBatonVout,
          qty: parsedData.data.qty
        }
      }
      // console.log(`tokenData: ${JSON.stringify(tokenData, null, 2)}`)

      this.txCache[txid] = tokenData

      return tokenData
    } catch (error) {
      throw error
    }
  }
}

module.exports = Transaction
