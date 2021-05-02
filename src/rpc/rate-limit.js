/*
  Rate limit
*/
/* eslint no-useless-catch: 0 */

// Local libraries
const RateLimitLib = require('koa2-ratelimit').RateLimit

class RateLimit {
  constructor () {
    // Encapsulate dependencies
    this.RateLimitLib = RateLimitLib
    this.options = {
      interval: { min: 1 },
      max: 2,
      onLimitReached: this.onLimitReached
    }

    // ctx obj
    this.context = {
      state: {
        user: ''
      },
      request: {
        ip: ''
      },
      user: '',
      set: () => { }
    }
  }

  onLimitReached () {
    try {
      const error = new Error()
      error.message = 'limit per minute reached!'
      error.status = 429
      throw error
    } catch (error) {
      // console.log("Error in onLimitReached()", error)
      throw error
    }
  }

  async limiter (from) {
    try {
      if (!from || typeof from !== 'string') {
        throw new Error('from must be a string')
      }
      const rateLimit = this.RateLimitLib.middleware(this.options)

      // Set context
      this.context.state.user = from
      this.context.request.ip = from
      this.context.user = from

      await rateLimit(this.context, () => { })
    } catch (error) {
      console.error('Error in limiter()', error)
      throw error
    }
  }
}

module.exports = RateLimit
