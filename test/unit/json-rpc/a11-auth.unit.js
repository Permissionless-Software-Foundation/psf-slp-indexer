/*
  Unit tests for the rpc/auth/index.js file.
*/

// Public npm libraries
const jsonrpc = require('jsonrpc-lite')
const mongoose = require('mongoose')
const sinon = require('sinon')
const assert = require('chai').assert
const { v4: uid } = require('uuid')

// Set the environment variable to signal this is a test.
process.env.SVC_ENV = 'test'

// Local libraries
const config = require('../../../config')
const AuthRPC = require('../../../src/controllers/json-rpc/auth')
const RateLimit = require('../../../src/controllers/json-rpc/rate-limit')
const UserLib = require('../../../src/lib/users')
const userLib = new UserLib()

describe('#AuthRPC', () => {
  let uut
  let sandbox
  let testUser

  before(async () => {
    // Connect to the Mongo Database.
    console.log(`Connecting to database: ${config.database}`)
    mongoose.Promise = global.Promise
    mongoose.set('useCreateIndex', true) // Stop deprecation warning.
    await mongoose.connect(config.database, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })

    // Create a test user.
    testUser = await userLib.createUser({
      email: 'test543@test.com',
      name: 'tester543',
      password: 'password'
    })
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new AuthRPC()
    uut.rateLimit = new RateLimit({ max: 100 })
  })

  afterEach(() => sandbox.restore())

  after(async () => {
    // Delete the test user.
    testUser = await userLib.getUser({ id: testUser.userData._id })
    await userLib.deleteUser(testUser)

    mongoose.connection.close()
  })

  describe('#authRouter', () => {
    it('should route to the authUser method', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'authUser').resolves(true)

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const authCall = jsonrpc.request(id, 'auth', { endpoint: 'authUser' })
      const jsonStr = JSON.stringify(authCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)
      rpcData.from = 'Origin request'

      const result = await uut.authRouter(rpcData)

      assert.equal(result, true)
    })

    it('should return 500 status on routing issue', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'authUser').rejects(new Error('test error'))

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const authCall = jsonrpc.request(id, 'auth', { endpoint: 'authUser' })
      const jsonStr = JSON.stringify(authCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)
      rpcData.from = 'Origin request'

      const result = await uut.authRouter(rpcData)

      assert.equal(result.success, false)
      assert.equal(result.status, 500)
      assert.equal(result.message, 'test error')
      assert.equal(result.endpoint, 'authUser')
    })
  })

  describe('#authUser', () => {
    it('should return a JWT token if user successfully authenticates', async () => {
      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const authCall = jsonrpc.request(id, 'auth', {
        endpoint: 'authUser',
        login: 'test543@test.com',
        password: 'password'
      })
      const jsonStr = JSON.stringify(authCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      const response = await uut.authUser(rpcData)
      // console.log('response: ', response)

      assert.equal(response.endpoint, 'authUser')
      assert.property(response, 'userId')
      assert.equal(response.userType, 'user')
      assert.property(response, 'userName')
      assert.property(response, 'userEmail')
      assert.property(response, 'apiToken')
      assert.equal(response.status, 200)
      assert.equal(response.success, true)
      assert.property(response, 'message')
    })

    it('should return an error for invalid credentials', async () => {
      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const authCall = jsonrpc.request(id, 'auth', {
        endpoint: 'authUser',
        login: 'test543@test.com',
        password: 'badpassword'
      })
      const jsonStr = JSON.stringify(authCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      const response = await uut.authUser(rpcData)
      // console.log('response: ', response)

      assert.equal(response.success, false)
      assert.equal(response.status, 422)
      assert.equal(response.message, 'Login credential do not match')
      assert.equal(response.endpoint, 'authUser')
    })

    it('should throw an error if login is not provided', async () => {
      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const authCall = jsonrpc.request(id, 'auth', {
        endpoint: 'authUser'
      })
      const jsonStr = JSON.stringify(authCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      const response = await uut.authUser(rpcData)
      // console.log('response: ', response)

      assert.equal(response.success, false)
      assert.equal(response.status, 422)
      assert.equal(response.message, 'login must be specified')
      assert.equal(response.endpoint, 'authUser')
    })

    it('should throw an error if password is not provided', async () => {
      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const authCall = jsonrpc.request(id, 'auth', {
        endpoint: 'authUser',
        login: 'test543@test.com'
      })
      const jsonStr = JSON.stringify(authCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      const response = await uut.authUser(rpcData)
      // console.log('response: ', response)

      assert.equal(response.success, false)
      assert.equal(response.status, 422)
      assert.equal(response.message, 'password must be specified')
      assert.equal(response.endpoint, 'authUser')
    })
  })
})
