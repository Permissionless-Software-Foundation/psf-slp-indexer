/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
import { assert } from 'chai'

import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'

import UseCasesMock from '../../../mocks/use-cases/index.js'

// const app = require('../../../mocks/app-mock')

import AuthRESTController from '../../../../../src/controllers/rest-api/auth/controller.js'

import { context as mockContext } from '../../../../unit/mocks/ctx-mock.js'

let uut
let sandbox
let ctx

describe('#Auth-REST-Router', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new AuthRESTController({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new AuthRESTController()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating Auth REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new AuthRESTController({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating Auth REST Controller.'
        )
      }
    })
  })

  describe('#authUser', () => {
    it('should authorize a user', async () => {
      // Mock dependencies
      const user = {
        toJSON: () => {
          return { password: 'password' }
        },
        generateToken: () => {}
      }
      sandbox.stub(uut.passport, 'authUser').resolves(user)

      await uut.authUser(ctx)
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        sandbox.stub(uut.passport, 'authUser').rejects('test error')

        await uut.authUser(ctx)
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Unauthorized')
      }
    })
  })
})
