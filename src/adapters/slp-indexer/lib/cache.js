/*
  This class is used to generate a simple key-value (in-memory) cache of TX data.
  The 'key' is the txid. The 'value' is the tx data.
*/

// Local libraries
const Transaction = require('./transaction')

class Cache {
  constructor (localConfig = {}) {
    this.txDb = localConfig.txDb
    if (!this.txDb) {
      throw new Error(
        'Must include txDb when instantiationg Transaction library'
      )
    }

    // Encapsulate dependencies
    this.transaction = new Transaction(localConfig)

    this.cache = {}
    this.cacheCnt = 0
  }

  // Save a new entry into the cache.
  put (key, value) {
    if (typeof key !== 'string') throw new Error('key must be a string')

    this.cache[key] = value
  }

  // Get the tx data from the full node if it's not already in the cache.
  async get (key) {
    // Try to retrieve it from the cache.
    let txData = this.cache[key]

    // If the data existed in the cache, this function is done.
    if (txData) return txData

    // Try to get txData from the database.
    try {
      txData = await this.txDb.get(key)

      return txData
    } catch (err) {
      /* exit quietly */
    }

    // Get TX Data from full node if it's not in the cache.
    txData = await this.transaction.get(key)
    // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

    // Save the data to the cache.
    this.put(key, txData)

    this.cacheCnt++
    if (this.cacheCnt % 100 === 0) {
      console.log(`tx cache has ${this.cacheCnt} cached txs`)
    }

    return txData
  }

  // Delete an entry from the cache
  delete (key) {
    delete this.cache[key]
  }
}

module.exports = Cache
