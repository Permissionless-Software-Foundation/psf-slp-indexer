/*
  Unit tests for the passport library.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'
import passport from 'koa-passport'

// Local libraries
import User from '../../../src/adapters/localdb/models/users.js'

import { applyPassportMods, passportCallback } from '../../../config/passport.js'
import adaptersMock from '../mocks/adapters/index.js'

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

  describe('#applyPassportMods', () => {
    it('should apply modifications to default passport behavior', () => {
      const result = applyPassportMods(passport)

      assert.equal(result, true)
    })
  })

  describe('#serializeUser', () => {
    it('should serialize a user', () => {
      const user = {
        id: 'abc123'
      }
      const done = () => {}

      applyPassportMods(passport)

      passport.serializeUser(user, done)
    })
  })

  describe('#deserializeUser', () => {
    it('should deserialize a user', () => {
      // Mock Users model.
      sandbox.stub(User, 'findById').resolves({ id })

      applyPassportMods(passport)

      passport.deserializeUser(id, done)
    })

    it('should catch and handle errors', () => {
      // Force an error
      sandbox.stub(User, 'findById').rejects(new Error('test error'))

      applyPassportMods(passport)

      passport.deserializeUser(id, done)
    })
  })
})
