/*
  High-level functions for working with Transactions

  TODO:
  - Change name of txCache to tokenCache
  - Create an actual token cache that stores raw tx data from full node.

*/

// Public npm libraries
const BigNumber = require('bignumber.js')
const slpParser = require('slp-parser')

// Local libraries
const RPC = require('./rpc')
const RetryQueue = require('./retry-queue')

// Global pointer to instance of this class
let _this

class Transaction {
  constructor (localConfig = {}) {
    // Encapsulate dependencies
    this.rpc = new RPC()
    this.slpParser = slpParser
    this.queue = new RetryQueue()

    // State
    this.tokenCache = {}
    this.tokenCacheCnt = 0
    this.txCache = {}
    this.txCacheCnt = 0

    _this = this
  }

  /**
   * @api Transaction.get() get()
   * @apiName get
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
      const txDetails = await this.getTxData(txid)
      // console.log(`txDetails: ${JSON.stringify(txDetails, null, 2)}`)

      // Get the block height the transaction was mined in.
      if (!txDetails.blockhash) {
        // Transaction has not been mined yet.

        // Assumption: the TX will make it into the next block.
        const blockHeight = await this.rpc.getBlockCount()
        txDetails.blockheight = blockHeight + 1
      } else {
        // Transaction is in a mined block.

        const blockHeader = await this.rpc.getBlockHeader(txDetails.blockhash)
        txDetails.blockheight = blockHeader.height
        // console.log(`blockHeader: ${JSON.stringify(blockHeader, null, 2)}`)
      }

      // Set default as not an SLP tx
      // TODO: Should this be null instead of false?
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
      // console.log(`txTokenData.tokenId: ${txTokenData.tokenId}`)
      const genesisData = await this.getTokenInfo(txTokenData.tokenId)
      // console.log(`genesisData: ${JSON.stringify(genesisData, null, 2)}`)

      // Add token information to the tx details object.
      txDetails.tokenTxType = txTokenData.txType
      txDetails.tokenId = txTokenData.tokenId
      txDetails.tokenType = txTokenData.tokenType
      txDetails.tokenTicker = genesisData.ticker
      txDetails.tokenName = genesisData.name
      txDetails.tokenDecimals = genesisData.decimals
      txDetails.tokenUri = genesisData.documentUri
      txDetails.tokenDocHash = genesisData.documentHash
      // console.log(`txDetails before processing input and outputs: ${JSON.stringify(txDetails, null, 2)}`)

      let finalTxDetails
      if (txDetails.tokenType === 1 || txDetails.tokenType === 129) {
        finalTxDetails = await this.getTx01(txDetails, txTokenData)
      } else if (txDetails.tokenType === 65) {
        finalTxDetails = this.getNftTx(txDetails, txTokenData)
      }

      return finalTxDetails
    } catch (err) {
      console.error('Error in transaction.js/get(). txid: ', txid)
      throw err
    }
  }

  // Used for processing NFT (child) tokens.
  async getNftTx (txDetails, txTokenData) {
    // console.log(`Processing NFT (child) with txid ${txDetails.txid}`)

    // console.log(`txDetails: ${JSON.stringify(txDetails, null, 2)}`)
    // console.log(`txTokenData: ${JSON.stringify(txTokenData, null, 2)}`)

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

        if (i === 0) {
          // Add the decoded OP_RETURN data to the first vout
          thisVout.opReturnData = txTokenData

          thisVout.tokenQtyStr = '0'
          thisVout.tokenQty = 0

          if (i === txTokenData.mintBatonVout) {
            // Optional dead-ended Mint baton
            thisVout.isMintBaton = true
          }
        } else if (i === 1) {
          // Only vout[1] of a Genesis or Mint transaction represents the tokens.
          // Any other outputs in that transaction are normal BCH UTXOs.

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
      // console.log(`thisVin[${i}]: ${JSON.stringify(thisVin, null, 2)}`)

      // console.log(`thisVin.txid: ${thisVin.txid}`)
      const vinTokenData = await this.getTokenInfo(thisVin.txid)
      // console.log(`vinTokenData ${i}: ${JSON.stringify(vinTokenData, null, 2)}`)

      // Is the input token ID the same? It should be for a SEND.
      const vinTokenIdIsTheSame = vinTokenData.tokenId === txDetails.tokenId
      // console.log('vinTokenIdIsTheSame: ', vinTokenIdIsTheSame)

      // Is the input token ID from a Group token? It should be for a GENESIS
      const vinTokenIsGroup =
        vinTokenData.tokenId !== txDetails.tokenId &&
        vinTokenData.tokenType === 129
      // console.log('vinTokenIsGroup: ', vinTokenIsGroup)

      if (vinTokenIsGroup) {
        // If this is a NFT Genesis TX, then one of the inputs should be a Group token.
        thisVin.tokenQty = parseFloat(vinTokenData.qty)
        thisVin.tokenQtyStr = vinTokenData.qty
        thisVin.tokenId = vinTokenData.tokenId
      } else if (!vinTokenData || !vinTokenIdIsTheSame) {
        // If the input is not a token input, or if the tokenID is not the same,
        // then mark the token output as null.
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

        if (isNaN(realQty)) realQty = 0

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

    // console.log(`hydrated txDetails: ${JSON.stringify(txDetails, null, 2)}`)

    return txDetails
  }

  // Used for processing 'normal' Type 1 tokens, as well as Group NFT tokens.
  async getTx01 (txDetails, txTokenData) {
    // console.log('Entering getTx01()')
    // console.log(`txTokenData: ${JSON.stringify(txTokenData, null, 2)}`)

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

        if (i === 0) {
          // Add the decoded OP_RETURN data to the first vout
          thisVout.opReturnData = txTokenData

          thisVout.tokenQtyStr = '0'
          thisVout.tokenQty = 0

          if (i === txTokenData.mintBatonVout) {
            // Optional dead-ended Mint baton
            thisVout.isMintBaton = true
          }
        } else if (i === 1) {
          // Only vout[1] of a Genesis or Mint transaction represents the tokens.
          // Any other outputs in that transaction are normal BCH UTXOs.

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
      // console.log(`thisVin[${i}]: ${JSON.stringify(thisVin, null, 2)}`)

      // console.log(`thisVin.txid: ${thisVin.txid}`)
      const vinTokenData = await this.getTokenInfo(thisVin.txid)
      // console.log(
      //         `vinTokenData ${i}: ${JSON.stringify(vinTokenData, null, 2)}`
      // )

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
  }

  // A wrapper for decodeOpReturn(). Returns false if txid is not an SLP tx.
  // Returns the token data if the txid is an SLP tx.
  async getTokenInfo (txid) {
    try {
      // Get token data, and auto-retry if the full node throws an error
      const tokenData = await this.decodeOpReturn(txid)

      // Corner case: token ID comes back as all zeros
      // Assumption: a normal TXID won't contain this many zeros.
      if (tokenData.tokenId.includes('00000000')) {
        return false
      }

      return tokenData
    } catch (err) {
      // Dev Note: It's impossible to tell the difference between a full node
      // having a network issue vs the corner-case of passing a 'fake' TXID
      // that does not exist. In both instances, the full node will respond
      // with a 500 error code. Auto-retry should fix network errors, so it
      // must be assumed that a 500 error code at this point in the code path
      // is due to the corner case, and returning false (as opposed to throwing
      // an error) is the proper response.
      // Code below intentially commented out.
      // if (err.message.includes('status code 50')) {
      //   throw err
      // }

      // console.log('err: ', err)

      // Otherwise return false
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
  // Originally copied from bch-js slp-utils.js lib.
  async decodeOpReturn (txid) {
    // Validate the txid input.
    if (!txid || txid === '' || typeof txid !== 'string') {
      throw new Error('txid string must be included.')
    }

    // Return results if they've been cached.
    const cachedVal = _this.tokenCache[txid]
    if (cachedVal) return cachedVal

    // const txDetails = await _this.rpc.getRawTransaction(txid)
    // Auto-retry if call to full node fails.
    // const txDetails = await this.queue.addToQueue(
    //   this.rpc.getRawTransaction,
    //   txid
    // )
    const txDetails = await this.getTxWithRetry(txid)
    // console.log('txDetails: ', txDetails)

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
        // documentHash: parsedData.data.documentHash.toString(),
        documentHash: parsedData.data.documentHash.toString('hex'),
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

    _this.tokenCache[txid] = tokenData
    _this.tokenCacheCnt++
    if (_this.tokenCacheCnt % 100 === 0) {
      console.log(`decodeOpReturn cache has ${_this.tokenCacheCnt} cached txs`)
    }

    // Clear the token cache if it gets too big. Prevents memory leaks.
    if (_this.tokenCacheCnt > 1000000) {
      _this.tokenCache = {}
      _this.tokenCacheCnt = 0
    }

    return tokenData

    // Dev Note: There is no try/catch statement here because this function
    // throws errors as part of its normal operation.
  }

  /**
   * @api RawTransactions.getTxData() getTxData()
   * @apiName getTxData
   * @apiGroup RawTransactions
   * @apiDescription
   * Returns an object of transaction data, including addresses for input UTXOs.
   *
   * This function is equivalent to running `getRawTransaction (txid, true)`,
   * execept the `vin` array will be populated with an `address` property that
   * contains the `bitcoincash:` address of the sender for each input.
   *
   * This function will only work with a single txid. It does not yet support an
   * array of TXIDs.
   *
   * @apiExample Example usage:
   * (async () => {
   * try {
   *  let txData = await bchjs.RawTransactions.getTxData("0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098");
   *  console.log(txData);
   * } catch(error) {
   * console.error(error)
   * }
   * })()
   */
  // Equivalent to running: async getRawTransaction (txid, verbose = true)
  // Only handles a single TXID (not arrays).
  // Appends the BCH address to the inputs of the transaction.
  async getTxData (txid) {
    try {
      if (typeof txid !== 'string') {
        throw new Error(
          'Input to raw-transaction.js/getTxData() must be a string containg a TXID.'
        )
      }

      // Get the TX details for the transaction under consideration.
      // const txDetails = await this.rpc.getRawTransaction(txid)
      const txDetails = await this.getTxWithRetry(txid)
      // console.log(`txDetails: ${JSON.stringify(txDetails, null, 2)}`)

      const inAddrs = await this._getInputAddrs(txDetails)
      // console.log(`inAddrs: ${JSON.stringify(inAddrs, null, 2)}`)

      // Add the input address to the transaction data.
      for (let i = 0; i < inAddrs.length; i++) {
        txDetails.vin[i].address = inAddrs[i].address
        txDetails.vin[i].value = inAddrs[i].value
      }

      return txDetails
    } catch (err) {
      console.error('Error in transaction.js/getTxData()')
      throw err
    }
  }

  // Given verbose transaction details, this function retrieves the transaction
  // data for the inputs (the parent transactions). It returns an array of
  // objects. Each object corresponds to a transaction input, and contains
  // the address that generated that input UTXO.
  //
  // Assumes a single TX. Does not yet work with an array of TXs.
  // This function returns an array of objects, each object if formated as follows:
  // {
  //   vin: 0, // The position of the input for the given txid
  //   address: bitcoincash:qzhrpmu7nruyfcemeanqh5leuqcnf6zkjq4qm9nqh0
  // }
  async _getInputAddrs (txDetails) {
    try {
      const retArray = [] // Return array

      for (let i = 0; i < txDetails.vin.length; i++) {
        // The first input represents the sender of the BCH or tokens.
        const vin = txDetails.vin[i]
        const inputTxid = vin.txid
        const inputVout = vin.vout

        // Skip if there is no input TXID (Coinbase)
        if (!inputTxid) continue

        // Get the TX details for the input, in order to retrieve the address of
        // the sender.
        // const txDetailsParent = await this.rpc.getRawTransaction(inputTxid)
        // const txDetailsParent = await this.queue.addToQueue(
        //   this.rpc.getRawTransaction,
        //   inputTxid
        // )
        const txDetailsParent = await this.getTxWithRetry(inputTxid)

        // console.log(
        //   `txDetailsParent: ${JSON.stringify(txDetailsParent, null, 2)}`
        // )

        // The vout from the previous tx that represents the sender.
        const voutSender = txDetailsParent.vout[inputVout]

        retArray.push({
          vin: i,
          address: voutSender.scriptPubKey.addresses[0],
          value: voutSender.value
        })
      }

      return retArray
    } catch (err) {
      // Handle corner-case of a Coinbase TX.
      if (err.message.includes('txid must be provided')) {
        return []
      }

      console.error('Error in transaction.js/_getInputAddrs()')
      throw err
    }
  }

  // Wraps the rpc.getRawTransaction() function in the queue-with-retry lib.
  // This will retrieve transaction data from the full node, and it will
  // automatically retry if there is an issue when trying to talk to the full
  // node.
  async getTxWithRetry (txid) {
    try {
      // Validate the txid input.
      if (!txid || txid === '' || typeof txid !== 'string') {
        throw new Error('txid string must be included.')
      }

      // Return results if they've been cached.
      const cachedVal = this.txCache[txid]
      if (cachedVal) return cachedVal

      const txData = await this.queue.addToQueue(
        this.rpc.getRawTransaction,
        txid
      )

      // Add the result to the cache.
      this.txCache[txid] = txData
      this.txCacheCnt++
      if (this.txCacheCnt % 1000 === 0) {
        console.log(`txCache has ${this.txCacheCnt} cached txs`)
      }

      // Clear the token cache if it gets too big. Prevents memory leaks.
      if (this.txCacheCnt > 1000000) {
        this.txCache = {}
        this.txCacheCnt = 0
      }

      return txData
    } catch (err) {
      console.error('Error in getTxWithRetry()')
      throw err
    }
  }
}

module.exports = Transaction
