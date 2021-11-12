/*
  Unit tests for rpc.js library
*/

const assert = require('chai').assert
const sinon = require('sinon')

const RPC = require('../../../../../src/adapters/slp-indexer/lib/rpc')
let uut
let sandbox

describe('#rpc.js', () => {
  beforeEach(() => {
    uut = new RPC()

    sandbox = sinon.createSandbox()

    // Suppress winston logs during test.
    uut.wlogger.error = () => {}
    uut.wlogger.info = () => {}
    uut.wlogger.debug = () => {}
    uut.wlogger.silly = () => {}
  })

  afterEach(() => sandbox.restore())

  describe('#getBlockCount', () => {
    it('should get current block height', async () => {
      // Mock the RPC call for unit tests.
      sandbox.stub(uut.axios, 'request').resolves({ data: { result: 126769 } })

      const result = await uut.getBlockCount()
      // console.log(`result: ${util.inspect(result)}`)

      assert.isNumber(result)
    })

    it('should log then throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut, 'getAxiosOptions').throws(new Error('test error'))

        await uut.getBlockCount()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#getBlockHeader', () => {
    it('should get block header', async () => {
      // Mock the RPC call for unit tests.
      sandbox
        .stub(uut.axios, 'request')
        .resolves({ data: { result: { height: 600000 } } })

      const hash =
        '0000000000000000008e8d83cba6d45a9314bc2ef4538d4e0577c6bed8593536'

      const result = await uut.getBlockHeader(hash)
      // console.log(`result: ${util.inspect(result)}`)

      assert.equal(result.height, 600000)
    })

    it('should log then throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut, 'getAxiosOptions').throws(new Error('test error'))

        const hash =
          '0000000000000000008e8d83cba6d45a9314bc2ef4538d4e0577c6bed8593536'

        await uut.getBlockHeader(hash)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should throw error if hash is not provided', async () => {
      try {
        await uut.getBlockHeader()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Block hash must be provided')
      }
    })
  })

  describe('#getBlock', () => {
    it('should get the contents of a block', async () => {
      // Mock the RPC call for unit tests.
      sandbox
        .stub(uut.axios, 'request')
        .resolves({ data: { result: { height: 600000 } } })

      const hash =
        '0000000000000000008e8d83cba6d45a9314bc2ef4538d4e0577c6bed8593536'

      const result = await uut.getBlock(hash)
      // console.log(`result: ${util.inspect(result)}`)

      assert.equal(result.height, 600000)
    })

    it('should log then throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut, 'getAxiosOptions').throws(new Error('test error'))

        const hash =
          '0000000000000000008e8d83cba6d45a9314bc2ef4538d4e0577c6bed8593536'

        await uut.getBlock(hash)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should throw error if hash is not provided', async () => {
      try {
        await uut.getBlock()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Block hash must be provided')
      }
    })
  })

  describe('#getBlockHash', () => {
    it('should get the hash of a block', async () => {
      // const height = 600000
      const hash =
        '0000000000000000008e8d83cba6d45a9314bc2ef4538d4e0577c6bed8593536'

      // Mock the RPC call for unit tests.
      sandbox.stub(uut.axios, 'request').resolves({ data: { result: hash } })

      const result = await uut.getBlockHash(hash)
      // console.log(`result: ${util.inspect(result)}`)

      assert.equal(result, hash)
    })

    it('should log then throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut, 'getAxiosOptions').throws(new Error('test error'))

        const height = 600000

        await uut.getBlockHash(height)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should throw error if hash is not provided', async () => {
      try {
        await uut.getBlockHash()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Block height must be provided')
      }
    })
  })

  describe('#getRawTransaction', () => {
    it('should get tx details', async () => {
      const txid =
        'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34'

      // Mock the RPC call for unit tests.
      sandbox
        .stub(uut.axios, 'request')
        .resolves({ data: { result: { txid } } })

      const result = await uut.getRawTransaction(txid)
      // console.log(`result: ${util.inspect(result)}`)

      assert.equal(result.txid, txid)
    })

    it('should log then throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut, 'getAxiosOptions').throws(new Error('test error'))

        const txid =
          'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34'

        await uut.getRawTransaction(txid)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should throw error if txid is not provided', async () => {
      try {
        await uut.getRawTransaction()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'txid must be provided')
      }
    })
  })
})
