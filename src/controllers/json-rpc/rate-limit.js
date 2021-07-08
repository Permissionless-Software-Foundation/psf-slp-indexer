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

    // Set default rate limit options.
    this.defaultOptions = {
      interval: { min: 1 },
      max: 60,
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
      set: () => {}
    }

    // console.log(
    //   `this.defaultOptions: ${JSON.stringify(this.defaultOptions, null, 2)}`
    // )
    // console.log(`options: ${JSON.stringify(options, null, 2)}`)

    // Set rate limit settings. Default values are overwritten if user passes
    // in an options object.
    this.rateLimitOptions = Object.assign({}, this.defaultOptions, options)
    // console.log(
    //   `this.rateLimitOptions: ${JSON.stringify(this.rateLimitOptions, null, 2)}`
    // )
    this.rateLimit = this.RateLimitLib.middleware(this.rateLimitOptions)
  }

  // This function is called when the user hits their rate limits.
  onLimitReached () {
    try {
      const error = new Error() // Establish provided options as the default options.
      error.message = 'Too many requests, please try again later.'
      error.status = 429
      throw error
    } catch (error) {
      // console.log("Error in onLimitReached()", error)
      throw error
    }
  }

  // This is the middleware function called by the router.
  async limiter (from) {
    try {
      if (!from || typeof from !== 'string') {
        throw new Error('from must be a string')
      }

      // Set context.limiter
      // This overrides the default koa behavior and adapts the rate limiter
      // to work with the JSON RPC over IPFS.
      this.context.state.user = from
      this.context.request.ip = from
      this.context.user = from

      await this.rateLimit(this.context, () => {})
      return true
    } catch (error) {
      console.error('Error in rate-limit.js/limiter()')
      throw error
    }
  }
}

module.exports = RateLimit
