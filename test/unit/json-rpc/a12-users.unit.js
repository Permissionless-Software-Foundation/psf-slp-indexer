/*
  Unit tests for the rpc/users/index.js file.
*/

// Public npm libraries
const jsonrpc = require('jsonrpc-lite')
const mongoose = require('mongoose')
const sinon = require('sinon')
const assert = require('chai').assert

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

      const userCall = jsonrpc.request('users', 'getAll', {})
      const jsonStr = JSON.stringify(userCall, null, 2)

      const result = await uut.userRouter(jsonStr)

      assert.equal(result, true)
    })
  })

  describe('#getAll', () => {
    it('should do something', async () => {
      const result = await uut.getAll()
      console.log('result: ', result)
    })
  })
})
