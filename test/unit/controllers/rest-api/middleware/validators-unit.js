/*
  Unit tests for the REST API middleware that validates users.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local libraries
import Validators from '../../../../../src/controllers/rest-api/middleware/validators.js'
import { context as mockContext } from '../../../../unit/mocks/ctx-mock.js'

describe('#Validators', () => {
  let uut
  let ctx
  let sandbox

  beforeEach(() => {
    uut = new Validators()

    // Mock the context object.
    ctx = mockContext()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#getToken', () => {
    it('should return null if no header is provided', () => {
      const result = uut.getToken(ctx)

      assert.equal(result, null)
    })

    it('should return null if header is not in two parts', () => {
      ctx.request.header.authorization = 'Bearer'

      const result = uut.getToken(ctx)

      assert.equal(result, null)
    })

    it('should return null if first part of header does not container the word bearer', () => {
      ctx.request.header.authorization = 'some thing'

      const result = uut.getToken(ctx)

      assert.equal(result, null)
    })

    it('should return the JWT token from the header', () => {
      const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjNiNTUwNzgxYWYzNTc4YzI0ZmU5YiIsImlhdCI6MTY2MzQ0NDczNCwiZXhwIjoxNjYzNTMxMTM0fQ.BY5sOfXc4z5axS98CdTfyqnO9y2wijOlwnv52rcvxHA'
      ctx.request.header.authorization = `Bearer ${jwt}`

      const result = uut.getToken(ctx)

      assert.equal(result, jwt)
    })
  })

  describe('#ensureUser', () => {
    it('should throw error if token is not provided', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns()

        await uut.ensureUser(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should throw error if token can not be verified', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns('fake-jwt')
        sandbox.stub(uut.jwt, 'verify').throws(new Error('test error'))

        await uut.ensureUser(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should throw error if user can not be found in database', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns('fake-jwt')
        sandbox.stub(uut.jwt, 'verify').returns({})
        sandbox.stub(uut.User, 'findById').resolves(false)

        await uut.ensureUser(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should return true if the user is verified', async () => {
      // Mock dependencies and force desired code path
      sandbox.stub(uut, 'getToken').returns('fake-jwt')
      sandbox.stub(uut.jwt, 'verify').returns({})
      sandbox.stub(uut.User, 'findById').resolves({ user: 'alice' })

      const result = await uut.ensureUser(ctx)

      assert.equal(result, true)
    })
  })

  describe('#ensureUser', () => {
    it('should throw error if token is not provided', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns()

        await uut.ensureAdmin(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should throw error if token can not be verified', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns('fake-jwt')
        sandbox.stub(uut.jwt, 'verify').throws(new Error('test error'))

        await uut.ensureAdmin(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should throw error if user can not be found in database', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns('fake-jwt')
        sandbox.stub(uut.jwt, 'verify').returns({})
        sandbox.stub(uut.User, 'findById').resolves(false)

        await uut.ensureAdmin(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should throw error if user is not an admin', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns('fake-jwt')
        sandbox.stub(uut.jwt, 'verify').returns({})
        sandbox.stub(uut.User, 'findById').resolves({ type: 'user' })

        await uut.ensureAdmin(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should return true if the user is an admin', async () => {
      // Mock dependencies and force desired code path
      sandbox.stub(uut, 'getToken').returns('fake-jwt')
      sandbox.stub(uut.jwt, 'verify').returns({})
      sandbox.stub(uut.User, 'findById').resolves({ type: 'admin' })

      const result = await uut.ensureAdmin(ctx)

      assert.equal(result, true)
    })
  })

  describe('#ensureTargetUserOrAdmin', () => {
    it('should throw error if token is not provided', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns()

        await uut.ensureTargetUserOrAdmin(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should throw error if token can not be verified', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns('fake-jwt')
        sandbox.stub(uut.jwt, 'verify').throws(new Error('test error'))

        ctx.params = {
          id: '456'
        }

        await uut.ensureTargetUserOrAdmin(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should throw error if user can not be found in database', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns('fake-jwt')
        sandbox.stub(uut.jwt, 'verify').returns({})
        sandbox.stub(uut.User, 'findById').resolves(false)

        ctx.params = {
          id: '456'
        }

        await uut.ensureTargetUserOrAdmin(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should throw error if user is not an admin', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns('fake-jwt')
        sandbox.stub(uut.jwt, 'verify').returns({})
        sandbox.stub(uut.User, 'findById').resolves({ type: 'user' })

        ctx.params = {
          id: '456'
        }

        await uut.ensureTargetUserOrAdmin(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should throw error is user is not admin or target user', async () => {
      try {
        // Mock dependencies and force desired code path
        sandbox.stub(uut, 'getToken').returns('fake-jwt')
        sandbox.stub(uut.jwt, 'verify').returns({})
        sandbox.stub(uut.User, 'findById').resolves({ type: 'user', _id: '123' })

        ctx.params = {
          id: '456'
        }

        await uut.ensureTargetUserOrAdmin(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(ctx.status, 401)
      }
    })

    it('should return true if the user is an admin', async () => {
      // Mock dependencies and force desired code path
      sandbox.stub(uut, 'getToken').returns('fake-jwt')
      sandbox.stub(uut.jwt, 'verify').returns({})
      sandbox.stub(uut.User, 'findById').resolves({ type: 'admin', _id: '123' })

      ctx.params = {
        id: '456'
      }

      const result = await uut.ensureTargetUserOrAdmin(ctx)

      assert.equal(result, true)
    })

    it('should return true if the user is the target user', async () => {
      // Mock dependencies and force desired code path
      sandbox.stub(uut, 'getToken').returns('fake-jwt')
      sandbox.stub(uut.jwt, 'verify').returns({})
      sandbox.stub(uut.User, 'findById').resolves({ type: 'user', _id: '123' })

      ctx.params = {
        id: '123'
      }

      const result = await uut.ensureTargetUserOrAdmin(ctx)

      assert.equal(result, true)
    })
  })
})
