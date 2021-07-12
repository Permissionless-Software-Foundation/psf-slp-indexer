/*
  Unit tests for the users Mongoose model.
*/

const assert = require('chai').assert
const sinon = require('sinon')
const mongoose = require('mongoose')

// Set the environment variable to signal this is a test.
process.env.SVC_ENV = 'test'

const User = require('../../../src/adapters/localdb/models/users')
const config = require('../../../config')

describe('#User-Adapter', () => {
  // let uut
  let sandbox
  let testuser

  before(async () => {
    // Connect to the Mongo Database.
    console.log(`Connecting to database: ${config.database}`)
    mongoose.Promise = global.Promise
    mongoose.set('useCreateIndex', true) // Stop deprecation warning.
    await mongoose.connect(config.database, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })

    testuser = new User({
      email: 'test983@test.com',
      name: 'test983',
      password: 'password'
    })
  })

  beforeEach(async () => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  after(async () => {
    await testuser.remove()

    mongoose.connection.close()
  })

  describe('#save', () => {
    it('should replace the password with a salt', async () => {
      await testuser.save()
      // console.log('testuser: ', testuser)

      assert.notEqual(testuser.password, 'password')
    })
  })

  describe('#validatePassword', () => {
    it('should return true when password matches', async () => {
      const result = await testuser.validatePassword('password')
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should return false when password does not match', async () => {
      const result = await testuser.validatePassword('wrongpassword')
      // console.log('result: ', result)

      assert.equal(result, false)
    })
  })

  describe('#generateToken', () => {
    it('should generate a JWT token', () => {
      const token = testuser.generateToken()
      // console.log('token: ', token)

      assert.include(token, 'eyJ')
    })
  })
})
