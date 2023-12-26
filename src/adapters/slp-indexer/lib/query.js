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

    if (!this.addrDb) throw new Error('addrDb missing when instantiating Query library')
    if (!this.tokenDb) throw new Error('tokenDb missing when instantiating Query library')
    if (!this.txDb) throw new Error('txDb missing when instantiating Query library')
    if (!this.statusDb) throw new Error('statusDb missing when instantiating Query library')
    if (!this.pTxDb) throw new Error('pTxDb missing when instantiating Query library')
  }

  // Query the state of an address from the database.
  async getAddress (addr) {
    try {
      if (!addr) throw new Error('Address required when calling getAddress()')

      const result = await this.addrDb.get(addr)

      return result
    } catch (err) {
      console.log('Error in getAddress()')
      throw err
    }
  }

  async getTx (txid) {
    try {
      if (!txid) throw new Error('txid required when calling getTx()')

      const result = await this.txDb.get(txid)

      return result
    } catch (err) {
      console.log('Error in getTx()')
      throw err
    }
  }

  async getToken (tokenId) {
    try {
      if (!tokenId) throw new Error('tokenId required when calling getToken()')

      const result = await this.tokenDb.get(tokenId)

      return result
    } catch (err) {
      console.log('Error in getToken()')
      throw err
    }
  }
}

// module.exports = Query
export default Query
