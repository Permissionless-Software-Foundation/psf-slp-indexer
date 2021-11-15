/*
  Unit tests for the dag.js library
*/

// Public npm libraries
const assert = require('chai').assert
const sinon = require('sinon')
const BCHJS = require('@psf/bch-js')
const cloneDeep = require('lodash.clonedeep')

// Local libraries
const DAG = require('../../../../../src/adapters/slp-indexer/lib/dag')
const Cache = require('../../../../../src/adapters/slp-indexer/lib/cache')
const MockLevel = require('../../../../unit/mocks/leveldb-mock')
const mockDataLib = require('../../../../unit/mocks/dag-mock')

const bchjs = new BCHJS()

describe('#dag.js', () => {
  let uut, sandbox, mockData

  // Mock txDb and force mock to return error.
  const txDb = new MockLevel()
  txDb.get = () => { throw new Error('not in db') }

  const cache = new Cache({ bchjs, txDb })

  beforeEach(() => {
    // Mock test data
    mockData = cloneDeep(mockDataLib)

    // Restore the sandbox before each test.
    sandbox = sinon.createSandbox()

    uut = new DAG({ cache, txDb })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor()', () => {
    it('should throw an error if cache instance is not provided', () => {
      try {
        uut = new DAG()

        assert.fail('Unexpected code path')
        console.log(uut)
      } catch (err) {
        assert.equal(err.message, 'instance of cache required when instantiating DAG')
      }
    })

    it('should throw an error if tx database instance is not provided', () => {
      try {
        uut = new DAG({ cache })

        assert.fail('Unexpected code path')
        console.log(uut)
      } catch (err) {
        assert.equal(err.message, 'TX DB required')
      }
    })
  })

  describe('#crawlDag2()', () => {
    it('should catch and throw errors', async () => {
      try {
        await uut.crawlDag2()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Cannot read property')
      }
    })

    // Happy path - simple two-tx DAG.
    it('should return true for valid SEND', async () => {
      // Mock dependencies
      sandbox.stub(uut.cache, 'get').resolves(mockData.slpGenesisTxData01)

      const txidAry = []
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'
      const txData = mockData.slpSendTxData01

      const result = await uut.crawlDag2(txData, tokenId, txidAry)
      // console.log('result: ', result)
      // console.log('txidAry: ', txidAry)

      assert.equal(result, true)
      assert.equal(txidAry.length, 2)
    })

    it('should return false if tx has no inputs', async () => {
      const txidAry = []
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'
      const txData = mockData.slpSendTxData01

      // Force token quantity to be zero.
      txData.vin[0].tokenQty = 0

      const result = await uut.crawlDag2(txData, tokenId, txidAry)
      // console.log('result: ', result)
      // console.log('txidAry: ', txidAry)

      assert.equal(result, false)
      assert.equal(txidAry.length, 1)
    })

    it('should return true for a mint baton', async () => {
      // Mock dependencies
      sandbox.stub(uut.cache, 'get').resolves(mockData.slpGenesisTxData01)

      const txidAry = []
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'
      const txData = mockData.slpSendTxData01

      // Force token quantity to be zero
      txData.vin[0].tokenQty = 0

      // Force input to have mint baton
      txData.vin[0].isMintBaton = true

      const result = await uut.crawlDag2(txData, tokenId, txidAry)
      // console.log('result: ', result)
      // console.log('txidAry: ', txidAry)

      assert.equal(result, true)
      assert.equal(txidAry.length, 2)
    })

    it('should return false if parent has different token type', async () => {
      // Force parent TX to have a different token type.
      mockData.slpGenesisTxData01.tokenType = 45
      sandbox.stub(uut.cache, 'get').resolves(mockData.slpGenesisTxData01)

      const txidAry = []
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'
      const txData = mockData.slpSendTxData01

      const result = await uut.crawlDag2(txData, tokenId, txidAry)
      // console.log('result: ', result)
      // console.log('txidAry: ', txidAry)

      assert.equal(result, false)
      assert.equal(txidAry.length, 1)
    })

    // Simulates parent tx being marked isValid=true from the DB.
    it('should return true for cached valid parent', async () => {
      // Force parent tx to be valid.
      mockData.slpGenesisTxData01.isValidSlp = true
      sandbox.stub(uut.cache, 'get').resolves(mockData.slpGenesisTxData01)

      const txidAry = []
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'
      const txData = mockData.slpSendTxData01

      const result = await uut.crawlDag2(txData, tokenId, txidAry)
      // console.log('result: ', result)
      // console.log('txidAry: ', txidAry)

      assert.equal(result, true)
      assert.equal(txidAry.length, 2)
    })

    // Simulates parent tx being marked isValid=false from the DB.
    it('should return false for cached invalid parent', async () => {
      // Force parent tx to be valid.
      mockData.slpGenesisTxData01.isValidSlp = false
      sandbox.stub(uut.cache, 'get').resolves(mockData.slpGenesisTxData01)

      const txidAry = []
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'
      const txData = mockData.slpSendTxData01

      const result = await uut.crawlDag2(txData, tokenId, txidAry)
      // console.log('result: ', result)
      // console.log('txidAry: ', txidAry)

      assert.equal(result, false)
      assert.equal(txidAry.length, 1)
    })

    it('should throw an error if parent has different tokenId', async () => {
      // Force parent to have different token ID
      mockData.slpGenesisTxData01.tokenId = 'aaaaae35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'
      sandbox.stub(uut.cache, 'get').resolves(mockData.slpGenesisTxData01)

      const txidAry = []
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'
      const txData = mockData.slpSendTxData01

      try {
        await uut.crawlDag2(txData, tokenId, txidAry)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'TokenID does not match')
      }
    })
  })
})
