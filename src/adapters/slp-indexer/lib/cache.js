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
      // console.log(`key: ${key}`)
      txData = await this.txDb.get(key)
      // console.log('~~>Result coming from database')

      return txData
    } catch (err) {
      /* exit quietly */
    }

    // Get TX Data from full node if it's not in the cache.
    txData = await this.transaction.get(key)
    // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)
    // console.log('~~>Result coming from full node')

    // Save the data to the *local* cache.
    this.put(key, txData)

    // Dev note: Do not store the TX data in the TX Level DB at this point. A
    // determination about its SLP validity has not yet been made. That data
    // is assumed to be in any entry coming out of the LevelDB.

    this.cacheCnt++
    if (this.cacheCnt % 100 === 0) {
      console.log(`tx cache has ${this.cacheCnt} cached txs`)
    }

    // Flush the cache once it gets too big, to same on memory.
    if (this.cacheCnt > 1000000) {
      this.cache = {}
      this.cacheCnt = 0
    }

    return txData
  }

  // Delete an entry from the cache
  delete (key) {
    delete this.cache[key]
  }
}

module.exports = Cache
