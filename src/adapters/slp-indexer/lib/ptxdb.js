/*
  This library contains utility functions for cleaning up the processed tx db.
  'processed' transactions are txs that have already been processed. This lets
  the indexer safely transition between phase 1 (bulk indexing) and phase 2
  (ZMQ real-time indexing), and maintain a consistent state.
*/

class ManagePTXDB {
  constructor (localConfig = {}) {
    this.pTxDb = localConfig.pTxDb
    if (!this.pTxDb) {
      throw new Error(
        'Must pass instance of pTxDb when instantiating ManagePTXDB lib'
      )
    }

    // State
    this.keys = []
    this.cleanCnt = 0

    // Add 'this' object to all subfunctions
    this.getAllTxs = this.getAllTxs.bind(this)
    this.cleanPTXDB = this.cleanPTXDB.bind(this)
  }

  // Return a promise, which resolves to true when all txs have been collected
  // from the database and stored in this.keys array.
  getAllTxs (isTest = false) {
    return new Promise((resolve) => {
      const stream = this.pTxDb.createReadStream()

      stream.on('data', this.readFromStream)

      stream.on('end', this.endStream(resolve))

      if (isTest) return resolve(true)
    })
  }

  readFromStream (data) {
    this.keys.push(data.key)
  }

  endStream (resolve) {
    return resolve(true)
  }

  // Remove entries in the DB that are old and not needed.
  async cleanPTXDB (blockHeight) {
    try {
      // Get all TXs in the database.
      await this.getAllTxs()

      const cutoff = blockHeight - 10

      // Loop through each TX in the database.
      for (let i = 0; i < this.keys.length; i++) {
        const thisKey = this.keys[i]

        let value
        try {
          value = await this.pTxDb.get(thisKey)
        } catch (err) {
          console.log(`Warning: Could not find ${thisKey} in pTxDb`)

          // Skip if value can't be found.
          continue
        }

        // If the value is older than the cutoff, delete the db entry.
        if (value <= cutoff) {
          try {
            await this.pTxDb.del(thisKey)
            this.cleanCnt++
          } catch (err) {
            console.log(`Could not delete ${thisKey} from the pTxDB`)
          }
        }
      }

      console.log(`Cleaned ${this.cleanCnt} entries from the pTxDb.`)
      this.cleanCnt = 0
      this.keys = []

      return true
    } catch (err) {
      console.error('Error in cleanPTXDB()')
      throw err
    }
  }
}

export default ManagePTXDB
