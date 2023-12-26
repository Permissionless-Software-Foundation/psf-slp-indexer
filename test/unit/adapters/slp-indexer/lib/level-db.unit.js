/*
  Unit tests for the level-db.js adapter library.
*/

// Global npm libraries
import { assert } from 'chai'

// const LevelDb = require('../../../../../src/adapters/slp-indexer/lib/level-db')
import LevelDb from '../../../../../src/adapters/slp-indexer/lib/level-db.js'

describe('#level-db', () => {
  let uut

  beforeEach(() => {
    uut = new LevelDb()
  })

  afterEach(async () => {
    await uut.closeDbs()
  })

  describe('#openDbs', () => {
    it('should open the databases and return handles', () => {
      const { addrDb, txDb, tokenDb, statusDb, pTxDb, utxoDb } = uut.openDbs()
      // console.log('addrDb: ', addrDb)
      // console.log('addrDb.db.status: ', addrDb.db.status)

      assert.equal(addrDb.db.status, 'opening')
      assert.equal(txDb.db.status, 'opening')
      assert.equal(tokenDb.db.status, 'opening')
      assert.equal(statusDb.db.status, 'opening')
      assert.equal(pTxDb.db.status, 'opening')
      assert.equal(utxoDb.db.status, 'opening')
    })
  })

  // describe('#closeDbs', () => {
  //   it('should close all DBs', async () => {

  //     const result = await uut.closeDbs()

  //     assert.equal(result, true)
  //   })
  // })
})
