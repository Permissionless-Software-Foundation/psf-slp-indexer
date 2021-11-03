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
})
