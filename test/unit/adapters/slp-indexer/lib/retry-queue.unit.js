/*
  Unit tests for the retry-queue library.
*/

const assert = require('chai').assert
const sinon = require('sinon')

const RetryQueue = require('../../../../../src/adapters/slp-indexer/lib/retry-queue')

let uut
let sandbox

describe('#retry-queue.js', () => {
  beforeEach(() => {
    uut = new RetryQueue()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#_retryWrapper', () => {
    it('should throw an error if function handler is not provided', async () => {
      try {
        await uut.retryWrapper()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'function handler is required')
      }
    })

    it('should throw an error if input object  is not provided', async () => {
      try {
        const funcHandler = () => {}
        await uut.retryWrapper(funcHandler)
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'input object is required')
      }
    })

    it('should execute the given function.', async () => {
      const inputTest = 'test'
      // func mock to execute into the retry wrapper
      const funcHandle = sinon.spy()

      await uut.retryWrapper(funcHandle, inputTest)

      assert.equal(inputTest, funcHandle.getCall(0).args[0])
      assert.equal(funcHandle.callCount, 1)
    })

    it('should call handleValidationError() when p-retry error is thrown', async () => {
      try {
        // Mock for ignore sleep time
        sandbox.stub(uut, 'sleep').resolves({})

        const inputTest = 'test'
        const funcHandle = () => {
          throw new Error('test error')
        }
        uut.attempts = 1

        await uut.retryWrapper(funcHandle, inputTest)

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should retry the specific number of times before giving up', async () => {
      // Mock for ignore sleep time
      sandbox.stub(uut, 'sleep').resolves({})

      const inputTest = 'test'
      const funcHandle = () => {
        throw new Error('test error')
      }
      // func handler
      const spy = sinon.spy(funcHandle)

      // p-retry attempts
      const attempts = 1

      try {
        uut.attempts = attempts

        await uut.retryWrapper(spy, inputTest)

        assert.fail('unexpected code path')
      } catch (error) {
        assert.equal(spy.callCount, attempts + 1)
      }
    })
  })

  describe('#addToQueue', () => {
    it('should throw an error if function handler is not provided', async () => {
      try {
        await uut.addToQueue()

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'function handler is required')
      }
    })

    it('should throw an error if input object  is not provided', async () => {
      try {
        const funcHandler = () => {}

        await uut.addToQueue(funcHandler)

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'input object is required')
      }
    })

    it('should add a function and input object to the queue and execute them', async () => {
      const inputTest = 'test'
      // func mock to execute into the retry wrapper
      const funcHandle = sinon.spy()

      await uut.addToQueue(funcHandle, inputTest)

      assert.equal(inputTest, funcHandle.getCall(0).args[0])
      assert.equal(funcHandle.callCount, 1)
    })

    it('should catch and throw an error', async () => {
      try {
        // Mock for ignore sleep time
        sandbox.stub(uut, 'sleep').resolves({})

        const inputTest = 'test'

        const funcHandle = () => {
          throw new Error('test error')
        }

        uut.attempts = 1
        await uut.retryWrapper(funcHandle, inputTest)

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#handleValidationError', () => {
    it('should catch and throw an error', async () => {
      try {
        await uut.handleValidationError()

        assert.fail('unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })
})
