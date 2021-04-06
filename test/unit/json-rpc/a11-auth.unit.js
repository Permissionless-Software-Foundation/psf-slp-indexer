/*
  Unit tests for the rpc/auth/index.js file.
*/

// Public npm libraries
const jsonrpc = require('jsonrpc-lite')
const mongoose = require('mongoose')
const sinon = require('sinon')
const assert = require('chai').assert

const config = require('../../../config')

const AuthRPC = require('../../../src/rpc/auth')

describe('#AuthRPC', () => {
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
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new AuthRPC()
  })

  afterEach(() => sandbox.restore())

  after(() => {
    mongoose.connection.close()
  })

  describe('#authRouter', () => {
    it('should route to the authUser method', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'authUser').resolves(true)

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const authCall = jsonrpc.request('auth', 'authUser', {})
      const jsonStr = JSON.stringify(authCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      const result = await uut.authRouter(rpcData)

      assert.equal(result, true)
    })
  })

  describe('#authUser', () => {
    it('should return a JWT token if user successfully authenticates', async () => {
      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const authCall = jsonrpc.request('auth', 'authUser', {
        login: 'test@test.com',
        password: 'password'
      })
      const jsonStr = JSON.stringify(authCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)
      console.log(rpcData)

      await uut.authUser(rpcData)
    })
  })
})
