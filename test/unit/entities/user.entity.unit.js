/*
  Unit tests for the User entity library.
*/

import { assert } from 'chai'

import sinon from 'sinon'
import User from '../../../src/entities/user.js'

let sandbox
let uut

describe('#User-Entity', () => {
  before(async () => {})

  beforeEach(() => {
    uut = new User()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#validate', () => {
    it('should throw an error if email is not provided', () => {
      try {
        uut.validate()
      } catch (err) {
        assert.include(err.message, "Property 'email' must be a string!")
      }
    })

    it('should throw an error if password is not provided', () => {
      try {
        uut.validate({ email: 'test@test.com' })
      } catch (err) {
        assert.include(err.message, "Property 'password' must be a string!")
      }
    })

    it('should throw an error if name is not provided', () => {
      try {
        uut.validate({ email: 'test@test.com', password: 'test' })
      } catch (err) {
        assert.include(err.message, "Property 'name' must be a string!")
      }
    })

    it('should return a User object', () => {
      const inputData = {
        email: 'test@test.com',
        password: 'test',
        name: 'test'
      }

      const entry = uut.validate(inputData)
      // console.log('entry: ', entry)

      assert.property(entry, 'email')
      assert.equal(entry.email, inputData.email)

      assert.property(entry, 'password')
      assert.equal(entry.password, inputData.password)

      assert.property(entry, 'name')
      assert.equal(entry.name, inputData.name)
    })
  })
})
