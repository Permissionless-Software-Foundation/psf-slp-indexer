/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
const assert = require('chai').assert
const sinon = require('sinon')
const mongoose = require('mongoose')

// Local support libraries
const config = require('../../../config')
const testUtils = require('../../utils/test-utils')
const User = require('../../../src/models/users')

const UserController = require('../../../src/modules/users/controller')
let uut
let sandbox
let ctx

const mockContext = require('../../unit/mocks/ctx-mock').context

describe('Users', () => {
  let testUser = {}

  before(async () => {
    // Connect to the Mongo Database.
    mongoose.Promise = global.Promise
    mongoose.set('useCreateIndex', true) // Stop deprecation warning.
    await mongoose.connect(config.database, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })

    // Delete all previous users in the database.
    await testUtils.deleteAllUsers()

    // console.log(`config: ${JSON.stringify(config, null, 2)}`)

    // Create a second test user.
    // const userObj = {
    //   email: 'test2@test.com',
    //   password: 'pass2'
    // }
    // const testUser = await testUtils.createUser(userObj)
    // console.log(`testUser2: ${JSON.stringify(testUser, null, 2)}`)

    // context.user2 = testUser.user
    // context.token2 = testUser.token
    // context.id2 = testUser.user._id

    // Get the JWT used to log in as the admin 'system' user.
    // const adminJWT = await testUtils.getAdminJWT()
    // // console.log(`adminJWT: ${adminJWT}`)
    // context.adminJWT = adminJWT

    // const admin = await testUtils.loginAdminUser()
    // context.adminJWT = admin.token

    // const admin = await adminLib.loginAdmin()
    // console.log(`admin: ${JSON.stringify(admin, null, 2)}`)
  })

  beforeEach(() => {
    uut = new UserController()

    sandbox = sinon.createSandbox()

    // Mock the context object.
    ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  after(() => {
    mongoose.connection.close()
  })

  describe('#POST /users', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        await uut.createUser(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'Cannot read property')
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
      testUser = ctx.response.body.user
      // console.log('testUser: ', testUser)
    })
  })

  describe('GET /users', () => {
    it('should return 422 status on arbitrary biz logic error', async () => {
      try {
        // Force an error
        sandbox
          .stub(uut.userLib, 'getAllUsers')
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
        sandbox.stub(uut.userLib, 'getUser').rejects(new Error('test error'))

        await uut.getUser(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.status, 422)
        assert.include(err.message, 'test error')
      }
    })

    it('should return 200 status on success', async () => {
      // Mock dependencies
      sandbox.stub(uut.userLib, 'getUser').resolves({ _id: '123' })

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
        sandbox.stub(uut.userLib, 'getUser').rejects(testErr)

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
        assert.include(err.message, 'Cannot read property')
      }
    })

    it('should return 200 on success', async () => {
      // Prep the testUser data.
      // console.log('testUser: ', testUser)
      testUser.password = 'password'
      delete testUser.type

      // Replace the testUser variable with an actual model from the DB.
      const existingUser = await User.findById(testUser._id)

      ctx.body = {
        user: existingUser
      }
      ctx.request.body = {
        user: testUser
      }

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
        assert.include(err.message, 'Cannot read property')
      }
    })

    it('should return 200 status on success', async () => {
      // Replace the testUser variable with an actual model from the DB.
      const existingUser = await User.findById(testUser._id)

      ctx.body = {
        user: existingUser
      }

      await uut.deleteUser(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)
    })
  })
})
