/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'
import UseCasesMock from '../../../mocks/use-cases/index.js'
import UserController from '../../../../../src/controllers/rest-api/users/controller.js'

import { context as mockContext } from '../../../../unit/mocks/ctx-mock.js'
let uut
let sandbox
let ctx

describe('#Users-REST-Controller', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new UserController({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new UserController()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating /users REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new UserController({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating /users REST Controller.'
        )
      }
    })
  })

  describe('#POST /users', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        await uut.createUser(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'Cannot read')
      }
    })

    it('should return 200 status on success', async () => {
      ctx.request.body = {
        user: {
          email: 'test02@test.com',
          password: 'test',
          name: 'test02'
        }
      }

      await uut.createUser(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      // Assert that expected properties exist in the returned data.
      assert.property(ctx.response.body, 'user')
      assert.property(ctx.response.body, 'token')

    // Used by downstream tests.
    // testUser = ctx.response.body.user
    // console.log('testUser: ', testUser)
    })
  })

  describe('GET /users', () => {
    it('should return 422 status on arbitrary biz logic error', async () => {
      try {
        // Force an error
        sandbox
          .stub(uut.useCases.user, 'getAllUsers')
          .rejects(new Error('test error'))

        await uut.getUsers(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.status, 422)
        assert.include(err.message, 'test error')
      }
    })

    it('should return 200 status on success', async () => {
      await uut.getUsers(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      // Assert that expected properties exist in the returned data.
      assert.property(ctx.response.body, 'users')
    })
  })

  describe('GET /users/:id', () => {
    it('should return 422 status on arbitrary biz logic error', async () => {
      try {
        // Force an error
        sandbox
          .stub(uut.useCases.user, 'getUser')
          .rejects(new Error('test error'))

        await uut.getUser(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.status, 422)
        assert.include(err.message, 'test error')
      }
    })

    it('should return 200 status on success', async () => {
      // Mock dependencies
      sandbox.stub(uut.useCases.user, 'getUser').resolves({ _id: '123' })

      await uut.getUser(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      // Assert that expected properties exist in the returned data.
      assert.property(ctx.response.body, 'user')
    })

    it('should return other error status passed by biz logic', async () => {
      try {
        // Mock dependencies
        const testErr = new Error('test error')
        testErr.status = 404
        sandbox.stub(uut.useCases.user, 'getUser').rejects(testErr)

        await uut.getUser(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.status, 404)
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('PUT /users/:id', () => {
    it('should return 422 if no input data given', async () => {
      try {
        await uut.updateUser(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'Cannot read')
      }
    })

    it('should return 200 on success', async () => {
      // Prep the testUser data.
      // console.log('testUser: ', testUser)
      // testUser.password = 'password'
      // delete testUser.type

      // Replace the testUser variable with an actual model from the DB.
      // const existingUser = await User.findById(testUser._id)

      ctx.body = {
        user: {}
      }
      ctx.request.body = {
        user: {}
      }

      // Mock dependencies
      sandbox.stub(uut.useCases.user, 'updateUser').resolves({})

      await uut.updateUser(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      // Assert that expected properties exist in the returned data.
      assert.property(ctx.response.body, 'user')
    })
  })

  describe('DELETE /users/:id', () => {
    it('should return 422 if no input data given', async () => {
      try {
        await uut.deleteUser(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'Cannot read')
      }
    })

    it('should return 200 status on success', async () => {
      // Replace the testUser variable with an actual model from the DB.
      const existingUser = {}

      ctx.body = {
        user: existingUser
      }

      await uut.deleteUser(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)
    })
  })

  describe('#handleError', () => {
    it('should still throw error if there is no message', () => {
      try {
        const err = {
          status: 404
        }

        uut.handleError(ctx, err)
      } catch (err) {
        assert.include(err.message, 'Not Found')
      }
    })
  })
})
