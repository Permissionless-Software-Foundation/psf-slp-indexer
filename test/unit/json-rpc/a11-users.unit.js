/*
  Unit tests for the rpc/users/index.js file.
*/

// Public npm libraries
// const jsonrpc = require('jsonrpc-lite')
const mongoose = require('mongoose')

const config = require('../../../config')

const UserRPC = require('../../../src/rpc/users')

describe('#UserRPC', () => {
  let uut

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

    uut = new UserRPC()
  })

  after(() => {
    mongoose.connection.close()
  })

  describe('#getAll', () => {
    it('should do something', async () => {
      const result = await uut.getAll()
      console.log('result: ', result)
    })
  })
})
