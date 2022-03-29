/*
  A utility library for doing common tasks with respect to indexing.
  This library is primarily used by the genesis.js, mint.js, and send.js files.
*/

// Global npm libraries
const BigNumber = require('bignumber.js')

class IndexerUtils {
  // Generate a new schema/template for an address object. This structure will
  // be populated with data.
  getNewAddrObj () {
    const addr = {
      utxos: [],
      txs: [],
      balances: []
    }

    return addr
  }

  // Will add a new entry to an array, but only if the entry does not already
  // exist in the array.
  // Canonical use case: Adding transactions to an array
  addTxWithoutDuplicate (txObj, array) {
    try {
      // if (array.includes(entry)) return
      //
      // array.push(entry)

      const txid = txObj.txid

      const txidExists = array.filter((x) => x.txid === txid)

      // Exit if the entry already exists.
      if (txidExists.length) return

      // Add the entry if it does not exist.
      array.push(txObj)
    } catch (err) {
      console.error('Error in indexer/util.js/addTxWithoutDuplicate')
      throw err
    }
  }

  // Finds a UTXO element within an array of UTXOs. Returns a new array with
  // the targeted UTXO deleted.
  removeUtxoFromArray (utxoObj, array) {
    try {
      const newArray = array.filter(
        (x) => x.txid !== utxoObj.txid || x.vout !== utxoObj.vout
      )
      // console.log('newArray: ', newArray)

      return newArray
    } catch (err) {
      console.error('Error in removeObjFromArray()')
      throw err
    }
  }

  // Scan the balances array for a token that matches the utxoObj. Subtract
  // the balance of the utxoObj from that balance in the array.
  // Assumes the utxoObj has the following properties:
  // - txid
  // - vout
  // - tokenId
  // - qty (string)
  subtractUtxoBalance (utxoObj, balancesArray, tokenId) {
    try {
      let deleteEntry = false

      // Skip if this is a minting baton. No balance to subtract.
      if (utxoObj.type === 'baton') return balancesArray

      for (let i = 0; i < balancesArray.length; i++) {
        const thisBalance = balancesArray[i]

        if (thisBalance.tokenId === utxoObj.tokenId) {
          // Convert the balances of each to a BigNumber
          const balanceQty = new BigNumber(thisBalance.qty)
          const utxoQty = new BigNumber(utxoObj.qty)

          // Subtract the difference
          const newBalance = balanceQty.minus(utxoQty)

          // If balance is zero, then remove the element from the array.
          if (newBalance.isLessThanOrEqualTo(0)) {
            deleteEntry = {
              index: i
            }

            break
          }

          // Convert the BigNumber to a string.
          thisBalance.qty = newBalance.toString()

          break
        }
      }

      // Delete the entry if quanity is zero
      if (deleteEntry !== false) {
        balancesArray = balancesArray.filter(x => x.tokenId !== tokenId)
      }

      return balancesArray
    } catch (err) {
      console.error('Error in subtractUtxoBalance()')
      throw err
    }
  }

  // Subtract a burned UTXO balance from the token data tracking that quantity.
  subtractBurnedTokens (utxoObj, tokenData) {
    try {
      // console.log(`utxoObj: ${JSON.stringify(utxoObj, null, 2)}`)

      // Skip if this is a minting baton. No quantities to subtract.
      if (utxoObj.type === 'baton') {
        // Mark mint baton as burned.
        tokenData.mintBatonIsActive = false
        return tokenData
      }

      const utxoQty = new BigNumber(utxoObj.qty)
      const tokensInCirculationBN = new BigNumber(tokenData.tokensInCirculationBN)

      let totalBurned
      if (tokenData.totalBurned) {
        totalBurned = new BigNumber(tokenData.totalBurned)
      } else {
        totalBurned = new BigNumber(0)
      }

      const newCirculatingTotal = tokensInCirculationBN.minus(utxoQty)
      const newBurned = totalBurned.plus(utxoQty)

      tokenData.tokensInCirculationBN = newCirculatingTotal
      tokenData.tokensInCirculationStr = newCirculatingTotal.toString()
      tokenData.totalBurned = newBurned.toString()

      return tokenData
    } catch (err) {
      console.error('Error in subtractBurnedTokens()')
      throw err
    }
  }

  sleep (ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}

module.exports = IndexerUtils
