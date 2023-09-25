/*
  A library for querying the LevelDB entries.
*/

class Query {
  constructor (localConfig = {}) {
    const { addrDb, tokenDb, txDb, statusDb, pTxDb } = localConfig
    this.addrDb = addrDb
    this.tokenDb = tokenDb
    this.txDb = txDb
    this.statusDb = statusDb
    this.pTxDb = pTxDb
    // TODO: throw error if dbs are not passed in.
  }

  // Query the state of an address from the database.
  async getAddress (addr) {
    try {
      const result = await this.addrDb.get(addr)

      return result
    } catch (err) {
      console.error('Error in getAddress()')
      throw err
    }
  }

  async getTx (txid) {
    const result = await this.txDb.get(txid)

    return result
  }

  async getToken (tokenId) {
    const result = await this.tokenDb.get(tokenId)

    return result
  }
}

// module.exports = Query
export default Query
