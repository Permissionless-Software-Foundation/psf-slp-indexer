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
const UserRPC = require('../../../src/rpc/users')
const UserModel = require('../../../src/models/users')

describe('#UserRPC', () => {
  let uut
  let sandbox
  let testUserId

  before(async () => {
    // Connect to the Mongo Database.
    console.log(`Connecting to database: ${config.database}`)
    mongoose.Promise = global.Promise
    mongoose.set('useCreateIndex', true) // Stop deprecation warning.
    await mongoose.connect(
      config.database,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true
      }
    )
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new UserRPC()
  })

  afterEach(() => sandbox.restore())

  after(() => {
    mongoose.connection.close()
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

      const result = await uut.userRouter(rpcData)

      assert.equal(result, true)
    })

    it('should route to the getAllUsers method', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getAll').resolves(true)

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', { endpoint: 'getAllUsers' })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      const result = await uut.userRouter(rpcData)

      assert.equal(result, true)
    })
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

      assert.equal(result.endpoint, 'createUser')
      assert.equal(result.userData.type, 'user')
      assert.equal(result.userData.email, 'test973@test.com')
      assert.equal(result.userData.name, 'test973')
      assert.property(result.userData, '_id')
      assert.property(result, 'token')

      // Save the user ID for future tests.
      testUserId = result.userData._id
    })
  })

  describe('#getAllUsers', () => {
    it('should return all users', async () => {
      const result = await uut.getAll()
      console.log('result: ', result)

      assert.equal(result.endpoint, 'getAllUsers')
      assert.property(result, 'users')
    })
  })

  describe('#deleteUser', () => {
    it('should delete a user', async () => {
      // Get the user model for the test user.
      const testUserModel = await UserModel.findById(
        testUserId,
        '-password'
      )

      const result = await uut.deleteUser({}, testUserModel)
      console.log(result)
    })
  })
})
