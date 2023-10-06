/*
  Unit tests for the dag.js library
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'
import BCHJS from '@psf/bch-js'
import cloneDeep from 'lodash.clonedeep'

// Local libraries
import DAG from '../../../../../src/adapters/slp-indexer/lib/dag.js'
import Cache from '../../../../../src/adapters/slp-indexer/lib/cache.js'
import MockLevel from '../../../../unit/mocks/leveldb-mock.js'
import mockDataLib from '../../../../unit/mocks/dag-mock.js'

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

  describe('#crawlDag()', () => {
    it('should throw an error if txid is not included', async () => {
      try {
        await uut.crawlDag()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'txid required to crawl DAG')
      }
    })

    it('should throw an error if tokenId is not included', async () => {
      try {
        const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'

        await uut.crawlDag(txid)

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

        await uut.crawlDag(txid, tokenId)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    // Happy path - simple two-tx DAG.
    it('should return true for valid SEND', async () => {
      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.slpSendTxData01)
        .onCall(1).resolves(mockData.slpGenesisTxData01)

      const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      const result = await uut.crawlDag(txid, tokenId)
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

      const result = await uut.crawlDag(txid, tokenId)
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

      const result = await uut.crawlDag(txid, tokenId)
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

      const result = await uut.crawlDag(txid, tokenId)
      // console.log('result: ', result)

      assert.equal(result.isValid, false)
      assert.equal(result.dag.length, 1)
    })

    // CT 12-21-21 - Commented out because the part of the code tested by this
    // test case, was leading to false negatives.
    // Simulates parent tx being marked isValid=true from the DB.
    // it('should return true for cached valid parent', async () => {
    //   // Force parent tx to be valid.
    //   mockData.slpGenesisTxData01.isValidSlp = true
    //
    //   // Mock dependencies
    //   sandbox.stub(uut.cache, 'get')
    //     .onCall(0).resolves(mockData.slpSendTxData01)
    //     .onCall(1).resolves(mockData.slpGenesisTxData01)
    //
    //   const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
    //   const tokenId =
    //     '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'
    //
    //   const result = await uut.crawlDag(txid, tokenId)
    //   // console.log('result: ', result)
    //
    //   assert.equal(result.isValid, true)
    //   assert.equal(result.dag.length, 2)
    // })

    // Simulates parent tx being marked isValid=false from the DB.
    // CT 12-21-21 - Commented out because the part of the code tested by this
    // test case, was leading to false negatives.
    // it('should return false for cached invalid parent', async () => {
    //   // Force parent tx to be valid.
    //   mockData.slpGenesisTxData01.isValidSlp = false
    //
    //   // Mock dependencies
    //   sandbox.stub(uut.cache, 'get')
    //     .onCall(0).resolves(mockData.slpSendTxData01)
    //     .onCall(1).resolves(mockData.slpGenesisTxData01)
    //
    //   const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
    //   const tokenId =
    //     '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'
    //
    //   const result = await uut.crawlDag(txid, tokenId)
    //   console.log('result: ', result)
    //
    //   assert.equal(result.isValid, false)
    //   assert.equal(result.dag.length, 1)
    // })

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
        await uut.crawlDag(txid, tokenId)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'TokenID does not match')
      }
    })

    it('should return true if endFound is true', async () => {
      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.slpSendTxData01)
        .onCall(1).resolves(mockData.slpGenesisTxData01)

      const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      const result = await uut.crawlDag(txid, tokenId, [], true)
      // console.log('result: ', result)

      assert.equal(result.isValid, true)
      assert.equal(result.dag.length, 0)
    })

    it('should return false if endFound is false', async () => {
      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.slpSendTxData01)
        .onCall(1).resolves(mockData.slpGenesisTxData01)

      const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      const result = await uut.crawlDag(txid, tokenId, [], false)
      // console.log('result: ', result)

      assert.equal(result.isValid, false)
      assert.equal(result.dag.length, 0)
    })

    it('should validate 3-tx DAG', async () => {
      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.threeTxTestData01)
        .onCall(1).resolves(mockData.threeTxTestData02)
        .onCall(2).resolves(mockData.threeTxTestData02)
        .onCall(3).resolves(mockData.threeTxTestData03)

      const txid =
        '4e52e0ec21d26feb8bdcafdbe48d0f15662f1ba2b3bea8200bcf0a90d7c209ee'
      const tokenId =
        'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501'

      const result = await uut.crawlDag(txid, tokenId)
      // console.log('result: ', result)

      assert.equal(result.isValid, true)
      assert.equal(result.dag.length, 3)
    })

    it('should use pre-cached, pre-validated parent TXs', async () => {
      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.cachedTx01)
        .onCall(1).resolves(mockData.cachedTxParent01)

      const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      const result = await uut.crawlDag(txid, tokenId)
      // console.log('result: ', result)

      assert.equal(result.isValid, true)
      assert.equal(result.dag.length, 2)
    })

    it('should exit immediately for genesis TX', async () => {
      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.slpGenesisTxData01)

      const txid = '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      const result = await uut.crawlDag(txid, tokenId)
      // console.log('result: ', result)

      assert.equal(result.isValid, true)
      assert.equal(result.dag.length, 1)
    })
  })
})
