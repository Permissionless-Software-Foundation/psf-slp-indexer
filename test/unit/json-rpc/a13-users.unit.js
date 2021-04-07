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

describe('#UserRPC', () => {
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

    uut = new UserRPC()
  })

  afterEach(() => sandbox.restore())

  after(() => {
    mongoose.connection.close()
  })

  describe('#userRouter', () => {
    it('should route to the getAll method', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getAll').resolves(true)

      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', { endpoint: 'getAll' })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      const result = await uut.userRouter(rpcData)

      assert.equal(result, true)
    })
  })

  describe('#getAll', () => {
    it('should return all users', async () => {
      const result = await uut.getAll()
      console.log('result: ', result)

      assert.equal(result.endpoint, 'getAll')
      assert.property(result, 'users')
    })
  })
})
