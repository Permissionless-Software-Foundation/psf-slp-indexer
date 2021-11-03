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
})
