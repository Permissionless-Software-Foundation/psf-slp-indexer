/*
  Unit tests for the db-backup.js library
*/

import { assert } from 'chai'
import sinon from 'sinon'

import DbBackup from '../../../../../src/adapters/slp-indexer/lib/db-backup.js'
import MockLevel from '../../../../unit/mocks/leveldb-mock.js'

describe('#db-backup', () => {
  let uut, sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    const addrDb = new MockLevel()
    const tokenDb = new MockLevel()
    const txDb = new MockLevel()
    const statusDb = new MockLevel()
    const pTxDb = new MockLevel()
    const utxoDb = new MockLevel()
    const localConfig = { addrDb, tokenDb, txDb, statusDb, pTxDb, utxoDb }

    uut = new DbBackup(localConfig)
  })

  afterEach(() => sandbox.restore())

  describe('#backupDb', () => {
    it('should backup the databases', async () => {
      // Mock dependencies
      sandbox.stub(uut.shell, 'rm').returns()
      sandbox.stub(uut.shell, 'mkdir').returns()
      sandbox.stub(uut.shell, 'cp').returns()

      const result = await uut.backupDb()
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should catch and throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut.addrDb, 'close').rejects(new Error('test error'))

        await uut.backupDb()
        // console.log('result: ', result)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.message, 'test error')
      }
    })
  })

  describe('#restoreDb', () => {
    it('should restore databases', async () => {
      // Mock dependencies
      sandbox.stub(uut.shell, 'rm').returns()
      sandbox.stub(uut.shell, 'cp').returns()

      const result = await uut.restoreDb()

      assert.equal(result, true)
    })

    it('should catch and throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut.addrDb, 'close').rejects(new Error('test error'))

        await uut.restoreDb()
        // console.log('result: ', result)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.message, 'test error')
      }
    })
  })

  describe('#zipDb', () => {
    it('should zip databases', async () => {
      // Mock dependencies
      sandbox.stub(uut.shell, 'rm').returns()
      sandbox.stub(uut.shell, 'exec').returns()

      const result = await uut.zipDb()

      assert.equal(result, true)
    })

    it('should delete old zip database', async () => {
      // Mock dependencies
      sandbox.stub(uut.shell, 'rm').returns()
      sandbox.stub(uut.shell, 'exec').returns()

      const result = await uut.zipDb(1, 1)

      assert.equal(result, true)
    })

    it('should catch and throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut.addrDb, 'close').rejects(new Error('test error'))

        await uut.zipDb()
        // console.log('result: ', result)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.message, 'test error')
      }
    })
  })

  describe('#unzipDb', () => {
    it('should unzip databases', async () => {
      // Mock dependencies
      sandbox.stub(uut.shell, 'rm').returns()
      sandbox.stub(uut.shell, 'exec').returns()
      sandbox.stub(uut.shell, 'cd').returns()

      const result = await uut.unzipDb()

      assert.equal(result, true)
    })

    it('should return false if there is an error', async () => {
      // Force an error
      sandbox.stub(uut.addrDb, 'close').rejects(new Error('test error'))

      const result = await uut.unzipDb()
      // console.log('result: ', result)

      assert.equal(result, false)
    })
  })
})
