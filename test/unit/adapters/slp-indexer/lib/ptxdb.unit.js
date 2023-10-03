/*
  Unit tests for the start-stop.js library
*/

import { assert } from 'chai'
import sinon from 'sinon'

import ManagePTXDB from '../../../../../src/adapters/slp-indexer/lib/ptxdb.js'
import MockLevel from '../../../mocks/leveldb-mock.js'

describe('#ManagePTXDB', () => {
  let uut, sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    const pTxDb = new MockLevel()
    const localConfig = { pTxDb }

    uut = new ManagePTXDB(localConfig)
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw error pTxDb instance is not included', () => {
      try {
        uut = new ManagePTXDB({})

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.message, 'Must pass instance of pTxDb when instantiating ManagePTXDB lib')
      }
    })
  })

  describe('#getAllTxs', () => {
    it('should get all transactions in the database', async () => {
      const isTest = true
      const result = await uut.getAllTxs(isTest)

      assert.equal(result, true)
    })
  })

  describe('#readFromStream', () => {
    it('should add key to the keys array', () => {
      const data = {
        key: 'a',
        value: 'b'
      }

      uut.readFromStream(data)

      assert.equal(uut.keys[0], 'a')
    })
  })

  describe('#endStream', () => {
    it('should call promise resolve() function', () => {
      const resolve = () => true

      const result = uut.endStream(resolve)

      assert.equal(result, true)
    })
  })

  describe('#cleanPTXDB', () => {
    it('should clean entries from the ptxdb', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getAllTxs').resolves()
      uut.keys.push({
        key: 'a',
        value: 'b'
      })
      sandbox.stub(uut.pTxDb, 'get').resolves(100)

      const result = await uut.cleanPTXDB(110)

      assert.equal(result, true)
    })

    it('should throw error if key is not found in pTxDb', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getAllTxs').resolves()
      uut.keys.push({
        key: 'a',
        value: 'b'
      })
      sandbox.stub(uut.pTxDb, 'get').rejects(new Error('entry not found'))

      const result = await uut.cleanPTXDB(110)

      assert.equal(result, true)
    })

    it('should throw error if entry can not be deleted from the database', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getAllTxs').resolves()
      uut.keys.push({
        key: 'a',
        value: 'b'
      })
      sandbox.stub(uut.pTxDb, 'get').resolves(100)

      // Force error
      sandbox.stub(uut.pTxDb, 'del').rejects(new Error('Could not delete entry'))

      const result = await uut.cleanPTXDB(110)

      assert.equal(result, true)
    })

    it('should catch and throw unhandled errors', async () => {
      try {
        // Force error
        sandbox.stub(uut, 'getAllTxs').rejects(new Error('test error'))

        await uut.cleanPTXDB(110)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.message, 'test error')
      }
    })
  })
})
