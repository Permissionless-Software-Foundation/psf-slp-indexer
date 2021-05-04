/*
  Rate limit
*/
/* eslint no-useless-catch: 0 */

// Local libraries
const RateLimitLib = require('koa2-ratelimit').RateLimit

class RateLimit {
  constructor (options) {
    // Encapsulate dependencies
    this.RateLimitLib = RateLimitLib
    this.defaultOptions = {
      interval: { min: 1 },
      max: 1,
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
    // Stasblish provided options as the default options
    this.rateLimitOptions = Object.assign({}, this.defaultOptions, options)
    this.rateLimit = this.RateLimitLib.middleware(this.rateLimitOptions)
  }

  onLimitReached () {
    try {
      const error = new Error()
      error.message = 'Too many requests, please try again later.'
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

      // Set context
      this.context.state.user = from
      this.context.request.ip = from
      this.context.user = from

      await this.rateLimit(this.context, () => { })
      return true
    } catch (error) {
      console.error('Error in limiter()')
      throw error
    }
  }
}

module.exports = RateLimit
