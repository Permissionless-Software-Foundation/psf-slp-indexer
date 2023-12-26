/*
  Unit tests for the index.js file that aggregates all use-cases.
*/

// Public npm libraries
import { assert } from 'chai'

import sinon from 'sinon'

// Local support libraries
// const testUtils = require('../../utils/test-utils')

// Unit under test (uut)
import UseCases from '../../../src/use-cases/index.js'

import adapters from '../mocks/adapters/index.js'

describe('#use-cases', () => {
  let uut
  let sandbox

  before(async () => {
    // Delete all previous users in the database.
    // await testUtils.deleteAllUsers()
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new UseCases({ adapters })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new UseCases()

        assert.fail('Unexpected code path')

        // This is here to prevent the linter from complaining.
        assert.isOk(uut)
      } catch (err) {
        assert.include(
          err.message,
          'Instance of adapters must be passed in when instantiating Use Cases library.'
        )
      }
    })
  })

  describe('#start', () => {
    it('should initialize async use cases', async () => {
      const result = await uut.start()

      assert.equal(result, true)
    })

    // it('should catch and throw errors', async () => {
    //   // Force an error
    //   sandbox.stub()
    // })
  })
})
