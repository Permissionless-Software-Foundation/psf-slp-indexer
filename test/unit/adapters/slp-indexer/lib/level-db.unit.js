/*
  Unit tests for the level-db.js adapter library.
*/

// Global npm libraries
// const assert = require('chai').assert

const LevelDb = require('../../../../../src/adapters/slp-indexer/lib/level-db')

describe('#level-db', () => {
  let uut

  beforeEach(() => {
    uut = new LevelDb()
  })

  afterEach(async () => {
    await uut.closeDbs()
  })

  describe('#openDbs', () => {
    // it('should open the databases and return handles', () => {
    //   const { addrDb, txDb, tokenDb, statusDb, pTxDb, utxoDb } = uut.openDbs()
    //   // console.log('addrDb: ', addrDb)
    //   // console.log('addrDb.db.status: ', addrDb.db.status)
    //
    //   assert.equal(addrDb.db.status, 'opening')
    //   assert.equal(txDb.db.status, 'opening')
    //   assert.equal(tokenDb.db.status, 'opening')
    //   assert.equal(statusDb.db.status, 'opening')
    //   assert.equal(pTxDb.db.status, 'opening')
    //   assert.equal(utxoDb.db.status, 'opening')
    // })
  })
})
