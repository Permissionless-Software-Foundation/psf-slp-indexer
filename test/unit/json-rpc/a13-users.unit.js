/*
  Unit tests for the rpc/users/index.js file.
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
const UserRPC = require('../../../src/controllers/json-rpc/users')
const RateLimit = require('../../../src/controllers/json-rpc/rate-limit')
const UserModel = require('../../../src/models/users')

describe('#UserRPC', () => {
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
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new UserRPC()
    uut.rateLimit = new RateLimit({ max: 100 })
  })

  afterEach(() => sandbox.restore())

  after(() => {
    mongoose.connection.close()
  })

  describe('#createUser', () => {
    it('should create a new user', async () => {
      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'createUser',
        email: 'test973@test.com',
        name: 'test973',
        password: 'password'
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      const result = await uut.createUser(rpcData)
      // console.log('result: ', result)

      // CreateUser() specific return values.
      assert.equal(result.userData.type, 'user')
      assert.equal(result.userData.email, 'test973@test.com')
      assert.equal(result.userData.name, 'test973')
      assert.property(result.userData, '_id')
      assert.property(result, 'token')

      // Generic JSON RPC return values
      assert.equal(result.endpoint, 'createUser')
      assert.equal(result.success, true)
      assert.equal(result.status, 200)
      assert.equal(result.message, '')

      // Save the user ID for future tests.
      testUser = result
    })

    it('should return error data if biz logic throws an error', async () => {
      // Force an error
      sandbox.stub(uut.userLib, 'createUser').rejects(new Error('test error'))

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'createUser',
        email: 'test973@test.com',
        name: 'test973',
        password: 'password'
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      const result = await uut.createUser(rpcData)
      // console.log('result: ', result)

      // Generic JSON RPC return values
      assert.equal(result.endpoint, 'createUser')
      assert.equal(result.success, false)
      assert.equal(result.status, 422)
      assert.equal(result.message, 'test error')
    })
  })

  describe('#userRouter', () => {
    it('should route to the createUser method', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'createUser').resolves(true)

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', { endpoint: 'createUser' })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)
      rpcData.from = 'Origin request'

      const result = await uut.userRouter(rpcData)

      assert.equal(result, true)
    })

    it('should route to the getAllUsers method', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getAll').resolves(true)

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'getAllUsers',
        apiToken: testUser.token
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)
      rpcData.from = 'Origin request'

      const result = await uut.userRouter(rpcData)
      console.log('result', result)
      assert.equal(result, true)
    })

    it('should route to the updateUser method', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'updateUser').resolves(true)

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'updateUser',
        apiToken: testUser.token,
        userId: testUser.userData._id
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)
      rpcData.from = 'Origin request'

      const result = await uut.userRouter(rpcData)
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should route to the getUser method', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getUser').resolves(true)

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'getUser',
        apiToken: testUser.token
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)
      rpcData.from = 'Origin request'
      const result = await uut.userRouter(rpcData)

      assert.equal(result, true)
    })

    it('should route to the deleteUsers method', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'deleteUser').resolves(true)

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'deleteUser',
        apiToken: testUser.token,
        userId: testUser.userData._id
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)
      rpcData.from = 'Origin request'

      const result = await uut.userRouter(rpcData)
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should return 500 status on routing issue', async () => {
      // Force an error
      sandbox.stub(uut, 'createUser').rejects(new Error('test error'))

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', { endpoint: 'createUser' })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)
      rpcData.from = 'Origin request'

      const result = await uut.userRouter(rpcData)
      // console.log('result: ', result)

      assert.equal(result.success, false)
      assert.equal(result.status, 500)
      assert.equal(result.message, 'test error')
      assert.equal(result.endpoint, 'createUser')
    })
  })

  describe('#getAllUsers', () => {
    it('should return all users', async () => {
      const result = await uut.getAll()
      // console.log('getAll result: ', result)

      // Endpoint specific properties
      assert.property(result, 'users')
      assert.isArray(result.users)

      // Generic JSON RPC return values
      assert.equal(result.endpoint, 'getAllUsers')
      assert.equal(result.success, true)
      assert.equal(result.status, 200)
      assert.equal(result.message, '')
    })

    it('should return error data if biz logic throws an error', async () => {
      // Force an error
      sandbox.stub(uut.userLib, 'getAllUsers').rejects(new Error('test error'))

      const result = await uut.getAll()
      // console.log('result: ', result)

      // Generic JSON RPC return values
      assert.equal(result.endpoint, 'getAllUsers')
      assert.equal(result.success, false)
      assert.equal(result.status, 422)
      assert.equal(result.message, 'test error')
    })
  })

  describe('#updateUser', () => {
    it('should update a user', async () => {
      // Get the user model for the test user.
      const testUserModel = await UserModel.findById(
        testUser.userData._id,
        '-password'
      )

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'updateUser',
        userId: testUser.userData._id.toString(),
        name: 'test777'
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      const result = await uut.updateUser(rpcData, testUserModel)
      // console.log('updateUser result: ', result)

      // Endpoint specific properties
      assert.property(result, 'user')
      assert.property(result.user, 'type')
      assert.property(result.user, '_id')
      assert.property(result.user, 'email')
      assert.property(result.user, 'name')

      // Generic JSON RPC return values
      assert.equal(result.endpoint, 'updateUser')
      assert.equal(result.success, true)
      assert.equal(result.status, 200)
      assert.equal(result.message, '')
    })

    it('should return error data if biz logic throws an error', async () => {
      // Force an error by not specifying an user ID.
      const result = await uut.updateUser()
      // console.log('result: ', result)

      // Generic JSON RPC return values
      assert.equal(result.endpoint, 'updateUser')
      assert.equal(result.success, false)
      assert.equal(result.status, 422)
      assert.include(result.message, 'Cannot read property')
    })
  })

  describe('#getUser', () => {
    it('should return a specific user', async () => {
      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'getUser',
        userId: testUser.userData._id.toString()
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      const result = await uut.getUser(rpcData)
      // console.log('getUser result: ', result)

      // Endpoint specific properties
      assert.property(result, 'user')
      assert.property(result.user, 'type')
      assert.property(result.user, '_id')
      assert.property(result.user, 'email')
      assert.property(result.user, 'name')

      // Generic JSON RPC return values
      assert.equal(result.endpoint, 'getUser')
      assert.equal(result.success, true)
      assert.equal(result.status, 200)
      assert.equal(result.message, '')
    })

    it('should return error data if biz logic throws an error', async () => {
      // Force an error by not specifying an user ID.
      const result = await uut.getUser()
      // console.log('result: ', result)

      // Generic JSON RPC return values
      assert.equal(result.endpoint, 'getUser')
      assert.equal(result.success, false)
      assert.equal(result.status, 422)
      assert.include(result.message, 'Cannot read property')
    })
  })

  describe('#deleteUser', () => {
    it('should delete a user', async () => {
      // Get the user model for the test user.
      const testUserModel = await UserModel.findById(
        testUser.userData._id,
        '-password'
      )

      await uut.deleteUser({}, testUserModel)
      // console.log(result)

      assert.isOk('Not throwing an error is a success')
    })

    it('should return error data if biz logic throws an error', async () => {
      // Force an error by not specifying an user ID.
      const result = await uut.deleteUser()
      // console.log('result: ', result)

      // Generic JSON RPC return values
      assert.equal(result.endpoint, 'deleteUser')
      assert.equal(result.success, false)
      assert.equal(result.status, 422)
      assert.include(result.message, 'Cannot read property')
    })
  })
})
