/*
  Unit tests for the passport library.
*/

// Public npm libraries
// const assert = require('chai').assert
const sinon = require('sinon')

// Local libraries
const User = require('../../../src/adapters/localdb/models/users')
const { passport, passportCallback } = require('../../../config/passport')
const adaptersMock = require('../mocks/adapters')

describe('#passport', () => {
  let sandbox
  let id
  let done

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    id = 'abc123'
    done = () => {}
  })

  afterEach(() => sandbox.restore())

  describe('#serializeUser', () => {
    it('should serialize a user', () => {
      const user = {
        id: 'abc123'
      }
      const done = () => {}

      passport.serializeUser(user, done)
    })
  })

  describe('#deserializeUser', () => {
    it('should deserialize a user', () => {
      // Mock Users model.
      sandbox.stub(User, 'findById').resolves({ id })

      passport.deserializeUser(id, done)
    })

    it('should catch and handle errors', () => {
      // Force an error
      sandbox.stub(User, 'findById').rejects(new Error('test error'))

      passport.deserializeUser(id, done)
    })
  })

  describe('#passportCallback', () => {
    it('should return if user is found', () => {
      // Mock Users model.
      sandbox.stub(User, 'findOne').resolves({ id })

      passportCallback(id, 'password', done)
    })

    it('should return if password is validated', () => {
      // Mock Users model.
      sandbox.stub(User, 'findOne').resolves(new adaptersMock.localdb.Users())

      passportCallback(id, 'password', done)
    })

    it('should catch a high-level error', () => {
      // Force an error
      sandbox.stub(User, 'findOne').rejects(new Error('test error'))

      passportCallback(id, 'password', done)
    })
  })
})
