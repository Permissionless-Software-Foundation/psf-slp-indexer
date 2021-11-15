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
  txDb.get = () => {
    throw new Error('not in db')
  }

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
        assert.equal(
          err.message,
          'instance of cache required when instantiating DAG'
        )
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
    it('should throw an error if txid is not included', async () => {
      try {
        await uut.crawlDag2()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'txid required to crawl DAG')
      }
    })

    it('should throw an error if tokenId is not included', async () => {
      try {
        const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'

        await uut.crawlDag2(txid)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'tokenId required to crawl DAG')
      }
    })

    it('should catch and throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut.cache, 'get').rejects(new Error('test error'))

        const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
        const tokenId =
            '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

        await uut.crawlDag2(txid, tokenId)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    // Happy path - simple two-tx DAG.
    it('should return true for valid SEND', async () => {
      const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      const result = await uut.crawlDag2(txid, tokenId)
      // console.log('result: ', result)

      assert.equal(result.isValid, true)
      assert.equal(result.dag.length, 2)
    })

    it('should return false if tx has no inputs', async () => {
      // Force token quantity to be zero.
      mockData.slpSendTxData01.vin[0].tokenQty = 0

      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.slpSendTxData01)
        .onCall(1).resolves(mockData.slpGenesisTxData01)

      const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      const result = await uut.crawlDag2(txid, tokenId)
      // console.log('result: ', result)

      assert.equal(result.isValid, false)
      assert.equal(result.dag.length, 1)
    })

    it('should return true for a mint baton', async () => {
      // Force token quantity to be zero
      mockData.slpSendTxData01.vin[0].tokenQty = 0

      // Force input to have mint baton
      mockData.slpSendTxData01.vin[0].isMintBaton = true

      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.slpSendTxData01)
        .onCall(1).resolves(mockData.slpGenesisTxData01)

      const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      const result = await uut.crawlDag2(txid, tokenId)
      // console.log('result: ', result)

      assert.equal(result.isValid, true)
      assert.equal(result.dag.length, 2)
    })

    it('should return false if parent has different token type', async () => {
      // Force parent TX to have a different token type.
      mockData.slpGenesisTxData01.tokenType = 45

      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.slpSendTxData01)
        .onCall(1).resolves(mockData.slpGenesisTxData01)

      const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      const result = await uut.crawlDag2(txid, tokenId)
      // console.log('result: ', result)

      assert.equal(result.isValid, false)
      assert.equal(result.dag.length, 1)
    })

    // Simulates parent tx being marked isValid=true from the DB.
    it('should return true for cached valid parent', async () => {
      // Force parent tx to be valid.
      mockData.slpGenesisTxData01.isValidSlp = true

      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.slpSendTxData01)
        .onCall(1).resolves(mockData.slpGenesisTxData01)

      const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      const result = await uut.crawlDag2(txid, tokenId)
      // console.log('result: ', result)

      assert.equal(result.isValid, true)
      assert.equal(result.dag.length, 2)
    })

    // Simulates parent tx being marked isValid=false from the DB.
    it('should return false for cached invalid parent', async () => {
      // Force parent tx to be valid.
      mockData.slpGenesisTxData01.isValidSlp = false

      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.slpSendTxData01)
        .onCall(1).resolves(mockData.slpGenesisTxData01)

      const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      const result = await uut.crawlDag2(txid, tokenId)
      // console.log('result: ', result)

      assert.equal(result.isValid, false)
      assert.equal(result.dag.length, 1)
    })

    it('should throw an error if parent has different tokenId', async () => {
      // Force parent to have different token ID
      mockData.slpGenesisTxData01.tokenId =
        'aaaaae35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.slpSendTxData01)
        .onCall(1).resolves(mockData.slpGenesisTxData01)

      const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      try {
        await uut.crawlDag2(txid, tokenId)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'TokenID does not match')
      }
    })
  })

  describe('#validateTxid', () => {
    it('if crawlDag() returns true, this should return true', async () => {
      // Mock dependencies
      sandbox.stub(uut.cache, 'get').resolves(mockData.slpSendTxData01)
      sandbox.stub(uut, 'crawlDag2').resolves(true)

      const txid =
        '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'

      const result = await uut.validateTxid(txid)
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    // it('if crawlDag() returns false, this should return true', async () => {
    //   // Mock dependencies
    //   sandbox.stub(uut.cache, 'get').resolves(mockData.slpSendTxData01)
    //   sandbox.stub(uut, 'crawlDag2').resolves(false)
    //
    //   const txid =
    //     '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
    //
    //   const result = await uut.validateTxid(txid)
    //   // console.log('result: ', result)
    //
    //   assert.equal(result, false)
    // })
  })

  // describe('#getDag', () => {
  //   it('should get DAG for 2-tx chain', async () => {
  //     // Mock dependencies
  //     sandbox.stub(uut.cache, 'get').resolves(mockData.slpSendTxData01)
  //
  //     const txid =
  //       '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
  //
  //     const result = await uut.getDag(txid)
  //     console.log('result: ', result)
  //   })
  // })
})
