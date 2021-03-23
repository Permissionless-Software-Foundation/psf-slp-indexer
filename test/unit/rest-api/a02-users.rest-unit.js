// const testUtils = require('../../utils/test-utils')
const assert = require('chai').assert
const config = require('../../../config')
// const axios = require('axios').default
const sinon = require('sinon')
const mongoose = require('mongoose')

const util = require('util')
util.inspect.defaultOptions = { depth: 1 }

// const LOCALHOST = `http://localhost:${config.port}`

// const context = {}

const UserController = require('../../../src/modules/users/controller')
let uut
let sandbox

const mockContext = require('../../unit/mocks/ctx-mock').context

describe('Users', () => {
  before(async () => {
    // Connect to the Mongo Database.
    mongoose.Promise = global.Promise
    mongoose.set('useCreateIndex', true) // Stop deprecation warning.
    await mongoose.connect(config.database, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })

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
  })

  afterEach(() => sandbox.restore())

  after(() => {
    mongoose.connection.close()
  })

  describe('GET /users', () => {
    it('should catch and handle errors', async () => {
      try {
        // Force an error
        sandbox
          .stub(uut.userLib, 'getAllUsers')
          .rejects(new Error('test error'))

        // Mock the context object.
        const ctx = mockContext()

        await uut.getUsers(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        console.log('err: ', err)
        assert.include(err.message, 'Not Found')
      }
    })
  })

  describe('GET /users/:id', () => {
    it('should catch and handle errors', async () => {
      try {
        // Force an error
        sandbox
          .stub(uut.userLib, 'getUser')
          .rejects(new Error('test error'))

        // Mock the context object.
        const ctx = mockContext()

        await uut.getUser(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'Internal Server Error')
      }
    })
  })
})
