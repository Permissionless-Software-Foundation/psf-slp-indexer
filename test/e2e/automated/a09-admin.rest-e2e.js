import { assert } from 'chai'
import Admin from '../../../src/adapters/admin.js'
import sinon from 'sinon'
import util from 'util'
util.inspect.defaultOptions = { depth: 1 }

let sandbox
let uut
describe('Admin', () => {
  beforeEach(() => {
    uut = new Admin()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('loginAdmin()', () => {
    it('should logind admin', async () => {
      try {
        const error = new Error('test error')
        error.response = {
          status: 422
        }
        // sandbox.stub(uut.axios, 'request').onFirstCall().throws(error)

        const result = await uut.loginAdmin()
        const user = result.data.user

        assert.property(user, '_id')
        assert.property(user, 'email')
        assert.property(user, 'type')

        assert.isString(user._id)
        assert.isString(user.email)
        assert.isString(user.type)

        assert.equal(user.type, 'admin')
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })

    it('should handle axios error', async () => {
      try {
        // Returns an erroneous password to force
        // an auth error
        sandbox.stub(uut.jsonFiles, 'readJSON').resolves({ password: 'wrong' })

        await uut.loginAdmin()
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.response.status, 401)
        assert.include(err.response.data, 'Unauthorized')
      }
    })
  })

  describe('createSystemUser()', () => {
    it('should create admin', async () => {
      try {
        const result = await uut.createSystemUser()

        assert.property(result, 'email')
        assert.property(result, 'password')
        assert.property(result, 'id')
        assert.property(result, 'token')
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })

    it('should handle axios error', async () => {
      try {
        const error1 = new Error('test error')
        error1.response = {
          status: 422
        }
        const error2 = new Error('test error')
        error1.response = {
          status: 500
        }
        // The loginAdmin() function in some use cases is recursive
        // after handling the 422 error, it gets called again
        sandbox
          .stub(uut.axios, 'request')
          .onFirstCall()
          .throws(error1)
          .onSecondCall()
          .throws(error2)

        await uut.createSystemUser()
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should handle errors when remove user', async () => {
      try {
        const error1 = new Error('test error')
        error1.response = {
          status: 422
        }
        sandbox.stub(uut.axios, 'request').throws(error1)
        sandbox.stub(uut.User, 'deleteOne').throws(new Error('test error'))

        await uut.createSystemUser()
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })
})
