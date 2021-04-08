/*
  Unit tests for the JSON RPC validator middleware.

  TODO: ensureTargetUserOrAdmin: it should exit quietly if user is an admin.
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
const Validators = require('../../../src/rpc/validators')
const UserLib = require('../../../src/lib/users')
const userLib = new UserLib()

describe('#validators', () => {
  let testUser
  let uut
  let sandbox

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

    // Create a test user.
    testUser = await userLib.createUser({
      email: 'test544@test.com',
      name: 'tester544',
      password: 'password'
    })
    // console.log('testUser: ', testUser)
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new Validators()
  })

  afterEach(() => sandbox.restore())

  after(async () => {
    // Delete the test user.
    testUser = await userLib.getUser({ id: testUser.userData._id })
    await userLib.deleteUser(testUser)

    mongoose.connection.close()
  })

  describe('#ensureUser', () => {
    it('should return user model for valid JWT token', async () => {
      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'getAll',
        apiToken: testUser.token
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      const user = await uut.ensureUser(rpcData)
      // console.log('user: ', user)

      assert.property(user, 'type')
      assert.property(user, '_id')
      assert.property(user, 'email')
      assert.property(user, 'name')
    })

    it('should throw an error if JWT token is not included', async () => {
      try {
        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'getAll'
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureUser(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'apiToken JWT required as a parameter')
      }
    })

    it('should throw an error if JWT token can not be decoded', async () => {
      try {
        const token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmQxYTlkNTgxNTVjMjIzNWFmMTNhMSIsImlhdCI6MTYxNzc2Mjk3M30.6JkM1v0n71Mzsd3qzClzlMKtq6HlD0umoauG23N9FFF'

        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'getAll',
          apiToken: token
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureUser(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'invalid signature')
      }
    })

    it('should throw an error if the user can not be found', async () => {
      try {
        // Force 'error not found' error
        sandbox.stub(uut.UserModel, 'findById').resolves(null)

        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'getAll',
          apiToken: testUser.token
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureUser(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'User not found!')
      }
    })
  })

  describe('#ensureTargetUserOrAdmin', () => {
    it('should return user model for valid JWT token', async () => {
      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'deleteUser',
        apiToken: testUser.token,
        userId: testUser.userData._id.toString()
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      const user = await uut.ensureTargetUserOrAdmin(rpcData)

      assert.property(user, 'type')
      assert.property(user, '_id')
      assert.property(user, 'email')
      assert.property(user, 'name')
    })

    it('should throw error if JWT token is not provided', async () => {
      try {
        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'deleteUser'
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureTargetUserOrAdmin(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'apiToken JWT required as a parameter')
      }
    })

    it('should throw error if user ID is not specified', async () => {
      try {
        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'deleteUser',
          apiToken: testUser.token
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureTargetUserOrAdmin(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'userId must be specified')
      }
    })

    it('should throw error if JWT token can not be decoded', async () => {
      try {
        const token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmU0YzkxYzdlYWNjN2Q4NWJjOGI0NCIsImlhdCI6MTYxNzg0MTI5N30.n1sas7YlqtmhBlNDBY_IXxQCrIQTiE8UITqy0PJAFFF'

        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'deleteUser',
          apiToken: token,
          userId: testUser.userData._id.toString()
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureTargetUserOrAdmin(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'invalid signature')
      }
    })

    it('should throw an error if user can not be found', async () => {
      try {
        // Force an error
        sandbox.stub(uut.UserModel, 'findById').rejects(new Error('test error'))

        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'deleteUser',
          apiToken: testUser.token,
          userId: testUser.userData._id.toString()
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureTargetUserOrAdmin(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'test error')
      }
    })

    // TODO: it should exit quietly if user is an admin.
  })
})
