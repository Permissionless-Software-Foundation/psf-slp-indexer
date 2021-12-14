/*
  This library leverages the p-retry and p-queue libraries, to create a
  validation queue with automatic retry.

  New nodes syncing will attempt to rapidly validate a lot of entries.
  A promise-based queue allows this to happen while respecting rate-limits
  of the blockchain service provider.

  pay-to-write-access-controller.js depends on this library.
*/

const PQueue = require('p-queue').default
const pRetry = require('p-retry')

// const pRetry = require('p-retry')

let _this

class RetryQueue {
  constructor (localConfig = {}) {
    // Encapsulate dependencies
    this.queue = new PQueue({ concurrency: 1 })
    this.pRetry = pRetry

    this.attempts = 5
    this.retryPeriod = 1000

    _this = this
  }

  // Add an async function to the queue, and execute it with the input object.
  async addToQueue (funcHandle, inputObj) {
    try {
      // console.log('addToQueue inputObj: ', inputObj)

      if (!funcHandle) {
        throw new Error('function handler is required')
      }
      if (!inputObj) {
        throw new Error('input object is required')
      }

      const returnVal = await _this.queue.add(() =>
        _this.retryWrapper(funcHandle, inputObj)
      )
      return returnVal
    } catch (err) {
      console.error('Error in addToQueue(): ', err)
      throw err
    }
  }

  // Wrap the p-retry library.
  // This function returns a promise that will resolve to the output of the
  // function 'funcHandle'.
  async retryWrapper (funcHandle, inputObj) {
    try {
      // console.log('retryWrapper inputObj: ', inputObj)

      if (!funcHandle) {
        throw new Error('function handler is required')
      }
      if (!inputObj) {
        throw new Error('input object is required')
      }
      // console.log('Entering retryWrapper()')

      // Add artificial delay to prevent 429 errors.
      // await this.sleep(this.retryPeriod)

      return this.pRetry(
        async () => {
          return await funcHandle(inputObj)
        },
        {
          onFailedAttempt: _this.handleValidationError,
          retries: this.attempts // Retry 5 times
        }
      )
    } catch (err) {
      console.error('Error in retryWrapper()')
      throw err
    }
  }

  // Notifies the user that an error occured and that a retry will be attempted.
  // It tracks the number of retries until it fails.
  async handleValidationError (error) {
    try {
      const errorMsg = `Attempt ${error.attemptNumber} to validate entry. There are ${error.retriesLeft} retries left. Waiting before trying again.`
      console.log(errorMsg)

      const SLEEP_TIME = _this.retryPeriod
      console.log(`Waiting ${SLEEP_TIME} milliseconds before trying again.\n`)
      await _this.sleep(SLEEP_TIME) // 30 sec
    } catch (err) {
      console.error('Error in handleValidationError()')
      throw err
    }
  }

  sleep (ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}

module.exports = RetryQueue
