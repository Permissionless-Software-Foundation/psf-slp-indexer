/*
  Unit tests for the JSON RPC validator middleware.

  TODO: ensureTargetUserOrAdmin: it should exit quietly if user is an admin.
*/

// Public npm libraries
import jsonrpc from 'jsonrpc-lite'

import sinon from 'sinon'
import { assert } from 'chai'
import { v4 as uid } from 'uuid'

// Local libraries
import Validators from '../../../../src/controllers/json-rpc/validators.js'

import adapters from '../../mocks/adapters/index.js'

// Set the environment variable to signal this is a test.
process.env.SVC_ENV = 'test'

describe('#validators', () => {
  let uut
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new Validators({ adapters })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters is not passed in.', () => {
      try {
        uut = new Validators()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating JSON RPC Validators library.'
        )
      }
    })
  })

  describe('#ensureUser', () => {
    it('should return user model for valid JWT token', async () => {
      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'getAll',
        apiToken: 'fakeJWTToken'
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      // Mock external dependencies.
      sandbox.stub(uut.jwt, 'verify').returns(true)
      sandbox.stub(uut.UserModel, 'findById').resolves(true)

      const user = await uut.ensureUser(rpcData)
      // console.log('user: ', user)

      // For this test, we return a value of 'true' instead of actual user data.
      assert.equal(user, true)
    })

    it('should throw an error if JWT token is not included', async () => {
      try {
        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'getAll'
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureUser(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'apiToken JWT required as a parameter')
      }
    })

    it('should throw an error if JWT token can not be decoded', async () => {
      try {
        const token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmQxYTlkNTgxNTVjMjIzNWFmMTNhMSIsImlhdCI6MTYxNzc2Mjk3M30.6JkM1v0n71Mzsd3qzClzlMKtq6HlD0umoauG23N9FFF'

        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'getAll',
          apiToken: token
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureUser(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'invalid signature')
      }
    })

    it('should throw an error if the user can not be found', async () => {
      try {
        // Force 'error not found' error
        sandbox.stub(uut.UserModel, 'findById').resolves(null)
        sandbox.stub(uut.jwt, 'verify').returns(true)

        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'getAll',
          apiToken: 'fakeJWTToken'
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureUser(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'User not found!')
      }
    })
  })

  describe('#ensureTargetUserOrAdmin', () => {
    it('should return user model for valid JWT token', async () => {
      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'deleteUser',
        apiToken: 'fakeJWTToken',
        userId: 'abc123'
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      // Mock external dependencies.
      sandbox.stub(uut.jwt, 'verify').returns(true)
      sandbox.stub(uut.UserModel, 'findById').resolves({ _id: 'abc123' })

      const user = await uut.ensureTargetUserOrAdmin(rpcData)
      // console.log('user: ', user)

      // Assert that the mocked data expected is returned.
      assert.equal(user._id, 'abc123')
    })

    it('should throw error if JWT token is not provided', async () => {
      try {
        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'deleteUser'
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureTargetUserOrAdmin(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'apiToken JWT required as a parameter')
      }
    })

    it('should throw error if user ID is not specified', async () => {
      try {
        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'deleteUser',
          apiToken: 'fakeJWTToken'
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureTargetUserOrAdmin(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'userId must be specified')
      }
    })

    it('should throw error if JWT token can not be decoded', async () => {
      try {
        const token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmU0YzkxYzdlYWNjN2Q4NWJjOGI0NCIsImlhdCI6MTYxNzg0MTI5N30.n1sas7YlqtmhBlNDBY_IXxQCrIQTiE8UITqy0PJAFFF'

        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'deleteUser',
          apiToken: token,
          userId: 'abc123'
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureTargetUserOrAdmin(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'invalid signature')
      }
    })

    it('should throw an error if user can not be found', async () => {
      try {
        // Mock external dependencies.
        sandbox.stub(uut.jwt, 'verify').returns(true)
        sandbox.stub(uut.UserModel, 'findById').resolves(null)

        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'deleteUser',
          apiToken: 'fakeJWTToken',
          userId: 'abc123'
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureTargetUserOrAdmin(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'User not found!')
      }
    })

    it('should throw an error if JWT is from a different user', async () => {
      try {
        // Mock external dependencies.
        sandbox.stub(uut.jwt, 'verify').returns(true)
        sandbox.stub(uut.UserModel, 'findById').resolves({ _id: 'badId' })

        // Generate the parsed data that the main router would pass to this
        // endpoint.
        const id = uid()
        const userCall = jsonrpc.request(id, 'users', {
          endpoint: 'deleteUser',
          apiToken: 'fakeJWTToken',
          userId: 'abc123'
        })
        const jsonStr = JSON.stringify(userCall, null, 2)
        const rpcData = jsonrpc.parse(jsonStr)

        await uut.ensureTargetUserOrAdmin(rpcData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'User is neither admin nor target user.')
      }
    })

    it('should return true if user is an admin', async () => {
      // Generate the parsed data that the main router would pass to this
      // endpoint.
      const id = uid()
      const userCall = jsonrpc.request(id, 'users', {
        endpoint: 'deleteUser',
        apiToken: 'fakeJWTToken',
        userId: 'abc123'
      })
      const jsonStr = JSON.stringify(userCall, null, 2)
      const rpcData = jsonrpc.parse(jsonStr)

      // Mock external dependencies.
      sandbox.stub(uut.jwt, 'verify').returns(true)
      sandbox
        .stub(uut.UserModel, 'findById')
        .resolves({ _id: 'abc123', type: 'admin' })

      const user = await uut.ensureTargetUserOrAdmin(rpcData)
      // console.log('user: ', user)

      // Assert that the mocked data expected is returned.
      assert.equal(user, true)
    })
  })
})
