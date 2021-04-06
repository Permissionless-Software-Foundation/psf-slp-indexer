/*
  Unit tests for the rpc/index.js library.
*/

// Public npm libraries
const assert = require('chai').assert
const jsonrpc = require('jsonrpc-lite')
const sinon = require('sinon')

const JSONRPC = require('../../../src/rpc')

describe('#JSON RPC', () => {
  let uut
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new JSONRPC()
  })

  afterEach(() => sandbox.restore())

  describe('#router', () => {
    it('should exit quietly if given a random string', async () => {
      const str = 'random string message'
      await uut.router(str)

      assert.isOk('Not throwing an error is a pass.')
    })

    it('should exit quietly if invalid JSON RPC message received', async () => {
      const malformedRpc = '{"jsonrpc":"2.0"}'

      await uut.router(malformedRpc, 'peerA')

      assert.isOk('Not throwing an error is a pass.')
    })

    it('should return default response if routing is not possible', async () => {
      const json = jsonrpc.request('unknownId', 'unknownMethod', {})

      const str = JSON.stringify(json)

      const result = await uut.router(str, 'peerA')
      // console.log('result: ', result)

      const jsonObj = jsonrpc.parse(result.retStr)
      // console.log(`jsonObj: ${JSON.stringify(jsonObj, null, 2)}`)

      // Assert the expected properties exist on the returned object.
      assert.property(jsonObj, 'payload')
      assert.property(jsonObj, 'type')
      assert.property(jsonObj.payload, 'jsonrpc')
      assert.property(jsonObj.payload, 'id')
      assert.property(jsonObj.payload, 'error')
      assert.property(jsonObj.payload.error, 'message')
      assert.property(jsonObj.payload.error, 'code')

      // Assert the expected values exist.
      assert.equal(jsonObj.payload.id, 'Can not route')
      assert.equal(
        jsonObj.payload.error.message,
        'Input does not match routing rules'
      )
      assert.equal(jsonObj.payload.error.code, 422)
    })

    it('should catch and handle errors', async () => {
      // Force an error
      sandbox.stub(uut.jsonrpc, 'parse').throws(new Error('test error'))

      const malformedRpc = '{"jsonrpc":"2.0"}'

      await uut.router(malformedRpc, 'peerA')

      assert.isOk('Not throwing an error is a pass.')
    })

    it('should route to users handler', async () => {
      const userCall = jsonrpc.request('users', 'getAll', {})
      const jsonStr = JSON.stringify(userCall, null, 2)

      // Mock the users controller.
      sandbox.stub(uut.userController, 'userRouter').resolves('true')

      const result = await uut.router(jsonStr, 'peerA')
      // console.log(result)

      assert.equal(result.retStr, 'true')
    })
  })
})
