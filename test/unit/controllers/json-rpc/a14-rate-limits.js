/*
  Unit tests for the JSON RPC validator middleware.

  TODO: ensureTargetUserOrAdmin: it should exit quietly if user is an admin.
*/

// Public npm libraries
import sinon from 'sinon'

import { assert } from 'chai'

// Local libraries
import RateLimit from '../../../../src/controllers/json-rpc/rate-limit.js'

// Set the environment variable to signal this is a test.
process.env.SVC_ENV = 'test'

describe('#rate-limit', () => {
  let uut
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new RateLimit()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should use the options provided', async () => {
      try {
        const options = {
          interval: { min: 10 },
          delayAfter: 1,
          timeWait: { sec: 5 },
          max: 2,
          onLimitReached: () => {
            throw new Error('custom message error')
          }
        }
        const _uut = new RateLimit(options)

        // Assert  options
        assert.equal(_uut.rateLimitOptions.interval.min, options.interval.min)
        assert.equal(_uut.rateLimitOptions.delayAfter, options.delayAfter)
        assert.equal(_uut.rateLimitOptions.timeWait.sec, options.timeWait.sec)

        const from = 'constructor test'
        const firstRequest = await _uut.limiter(from)
        assert.isTrue(firstRequest)

        const secondRequest = await _uut.limiter(from)
        assert.isTrue(secondRequest)

        await _uut.limiter(from)
        assert.fail('unexpected error')
      } catch (error) {
        assert.include(error.message, 'custom message error')
      }
    })
  })

  describe('#onLimitReached', () => {
    it('should throw error', async () => {
      try {
        uut.onLimitReached()
        assert.fail('unexpected error')
      } catch (error) {
        assert.equal(error.status, 429)
        assert.include(
          error.message,
          'Too many requests, please try again later.'
        )
      }
    })
  })

  describe('#limiter', () => {
    it('should throw error if "from" input is not provider', async () => {
      try {
        await uut.limiter()
        assert.fail('unexpected error')
      } catch (error) {
        assert.include(error.message, 'from must be a string')
      }
    })

    it('should throw error 429', async () => {
      try {
        const _uut = new RateLimit({ max: 1 })
        const from = 'Origin request'

        const firstRequest = await _uut.limiter(from)
        assert.isTrue(firstRequest)

        const secondRequest = await _uut.limiter(from)
        assert.isTrue(secondRequest)

        await _uut.limiter(from)
        assert.fail('unexpected error')
      } catch (error) {
        assert.include(
          error.message,
          'Too many requests, please try again later.'
        )
      }
    })
  })
})
