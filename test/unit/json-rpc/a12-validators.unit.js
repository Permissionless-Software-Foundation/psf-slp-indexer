/*
  Unit tests for the JSON RPC validator middleware.
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
    it('should return quietly for valid JWT token', async () => {
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

      assert.isOk('Not throwing an error is a success!')
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
})
