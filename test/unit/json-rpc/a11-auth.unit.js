/*
  Unit tests for the rpc/auth/index.js file.
*/

// Public npm libraries
// const jsonrpc = require('jsonrpc-lite')
const mongoose = require('mongoose')

const config = require('../../../config')

// const AuthRPC = require('../../../src/rpc/auth')

describe('#AuthRPC', () => {
  // let uut

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
    // sandbox = sinon.createSandbox()

    // uut = new AuthRPC()
  })

  after(() => {
    mongoose.connection.close()
  })

  describe('#authUser', () => {
    it('should return a JWT token if user successfully authenticates', async () => {
      const rpcData = 'placeholder'
      console.log(rpcData)

      // await uut.authUser(rpcData)
    })
  })
})
