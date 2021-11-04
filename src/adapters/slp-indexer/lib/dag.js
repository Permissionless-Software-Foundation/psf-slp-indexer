/*
  This library is concernced with navigating the DAG of a transaction.
*/

// const txDb = level(`${__dirname.toString()}/../../../leveldb/current/txs`, {
// valueEncoding: 'json'
// })

class DAG {
  constructor (localConfig = {}) {
    this.cache = localConfig.cache
    if (!this.cache) {
      throw new Error('instance of cache required when instantiating DAG')
    }
  }

  // Given a token TXID, this function returns an array of TXIDs representing
  // the DAG of the token. The first element will be the Genesis transaction,
  // and the last element will be the given TXID.
  // If txid is not a valid SLP transaction, it will return false.
  async getDag (txid) {
    try {
      const txidAry = []
      const txData = await this.cache.get(txid)
      // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

      // Return false if TX is not an SLP tx.
      if (!txData.isSlpTx) {
        console.log(`txid ${txid} is not a valid SLP tx.`)
        return false
      }

      const tokenId = txData.tokenId

      const isValid = await this.crawlDag(txData, tokenId, txidAry)

      // Return false if txid did not pass DAG validation.
      if (!isValid) {
        console.log(`txid ${txid} failed DAG validation.`)
        return false
      }

      return txidAry
    } catch (err) {
      console.error('Error in getDag()')
      throw err
    }
  }

  // This is a recursive function.
  // This function will recursively call itself, to traverse the DAG and find
  // all the parent TXs for that transaction. It will then
  // return an array of TXs, sorted with the oldest parent first, and the given
  // input tx as the last element.
  async crawlDag (txData, tokenId, txidAry) {
    try {
      // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

      // If the txid does not exist in the chainedTxids array, then add it.
      const txid = txData.txid
      console.log('txid: ', txid)
      const isAlreadyAdded = txidAry.filter((x) => x === txid)
      if (!isAlreadyAdded.length) {
        // Add it to the beginning of the array.
        txidAry.unshift(txData.txid)
      }

      let chainedParentsDetected = false

      // Loop through each input that represents tokens.
      for (let i = 0; i < txData.vin.length; i++) {
        const thisVin = txData.vin[i]
        console.log(`thisVin: ${JSON.stringify(thisVin, null, 2)}`)

        const sameTokenId = thisVin.tokenId === txData.tokenId

        // If the input is not colored as a token, then skip it.
        // Corner case: If a mint baton, qty is 0 but still a valid token tx.
        // Corner case: If tokenId doesn't match, then skip it.
        if ((!thisVin.tokenQty && !thisVin.isMintBaton) || !sameTokenId) {
          continue
        }

        // Get the parent transaction.
        const parentTx = await this.cache.get(thisVin.txid)
        console.log(`parentTx: ${JSON.stringify(parentTx, null, 2)}`)

        // Not sure why or how parentTx can be undefined, but...
        if (!parentTx) return

        // console.log(`parent TXID: ${parentTx.txid}`)

        if (parentTx.tokenId !== tokenId) {
          // Corner case. Outputs from one token used for input of a different token.
          throw new Error(
            `TokenID does not match. Given token ID ${tokenId} does not match token ID ${parentTx.tokenId} in parent TXID ${parentTx.txid}`
          )
        } else if (parentTx.txid === tokenId) {
          // GENESIS TX Found. End of DAG.
          txidAry.unshift(parentTx.txid)

          // Final parent found. Stop the recursive calls.
          return true
        } else {
          chainedParentsDetected = true

          // Recursively call this function to follow the DAG to the first parent
          // in this block.
          await this.crawlDag(parentTx, tokenId, txidAry)
        }
      }

      return chainedParentsDetected
    } catch (err) {
      console.error('Error in crawlDag()')
      throw err
    }
  }
}

module.exports = DAG
