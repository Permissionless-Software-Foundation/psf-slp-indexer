/*
  Unit tests for the src/lib/users.js business logic library.
*/

// Public npm libraries
const mongoose = require('mongoose')
const assert = require('chai').assert

// Local support libraries
const config = require('../../../config')

// Unit under test (uut)
const UserLib = require('../../../src/lib/users')

describe('#users', () => {
  let uut

  before(async () => {
    // Connect to the Mongo Database.
    mongoose.Promise = global.Promise
    mongoose.set('useCreateIndex', true) // Stop deprecation warning.
    await mongoose.connect(config.database, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
  })

  beforeEach(() => {
    uut = new UserLib()
  })

  after(() => {
    mongoose.connection.close()
  })

  describe('#getAllUsers', () => {
    it('should return all users from the database', async () => {
      const users = await uut.getAllUsers()
      // console.log(`users: ${JSON.stringify(users, null, 2)}`)

      assert.isArray(users)
    })
  })
})
