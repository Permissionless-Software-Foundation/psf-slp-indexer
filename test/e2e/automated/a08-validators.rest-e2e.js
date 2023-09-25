/*
import { assert } from 'chai';
import testUtils from '../../utils/test-utils.js';
import Validators from '../../../src/controllers/rest-api/middleware/validators.js';
import sinon from 'sinon';
import { context as mockContext } from '../../unit/mocks/ctx-mock.js';
import util from 'util';
util.inspect.defaultOptions = { depth: 1 }

const context = {}

let sandbox
let uut
describe('Validators', () => {
  before(async () => {
    // console.log(`config: ${JSON.stringify(config, null, 2)}`)

    // Create a second test user.
    const userObj = {
      email: 'testvalidator@test.com',
      password: 'pass2',
      name: 'testvalidator'
    }
    const testUser = await testUtils.createUser(userObj)
    // console.log(`testUser2: ${JSON.stringify(testUser, null, 2)}`)

    context.user = testUser.user
    context.token = testUser.token
    context.id = testUser.user._id

    // Get the JWT used to log in as the admin 'system' user.
    const adminJWT = await testUtils.getAdminJWT()
    // console.log(`adminJWT: ${adminJWT}`)
    context.adminJWT = adminJWT

    // const admin = await testUtils.loginAdminUser()
    // context.adminJWT = admin.token

    // const admin = await adminLib.loginAdmin()
    // console.log(`admin: ${JSON.stringify(admin, null, 2)}`)
  })
  beforeEach(() => {
    uut = new Validators()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('ensureUser()', () => {
    it('should throw 401 if user cant be found', async () => {
      try {
        // Force an error
        sandbox.stub(uut.User, 'findById').resolves(false)

        // Mock the context object.
        const ctx = mockContext()
        ctx.request = {
          header: {
            authorization: `Bearer ${context.token}`
          }
        }

        await uut.ensureUser(ctx)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.status, 401)
        assert.include(err.message, 'Unauthorized')
      }
    })

    it('should throw 401 if token not found', async () => {
      try {
        // Mock the context object.
        const ctx = mockContext()

        await uut.ensureUser(ctx)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.status, 401)
        assert.include(err.message, 'Unauthorized')
      }
    })

    it('should throw 401 if token is invalid', async () => {
      try {
        // Mock the context object.
        const ctx = mockContext()
        ctx.request = {
          header: {
            authorization: 'Bearer 1'
          }
        }
        await uut.ensureUser(ctx)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.status, 401)
        assert.include(err.message, 'Unauthorized')
      }
    })

    it('should return true if user is admin', async () => {
      // Mock the context object.
      const ctx = mockContext()
      ctx.params = { id: context.id }

      ctx.request = {
        header: {
          authorization: `Bearer ${context.adminJWT}`
        }
      }

      const result = await uut.ensureUser(ctx)

      assert.equal(result, true)
    })
  })

  describe('ensureAdmin()', () => {
    it('should throw 401 if token not found', async () => {
      try {
        // Mock the context object.
        const ctx = mockContext()

        await uut.ensureAdmin(ctx)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.status, 401)
        assert.include(err.message, 'Unauthorized')
      }
    })

    it('should throw 401 if token is invalid', async () => {
      try {
        // Mock the context object.
        const ctx = mockContext()
        ctx.request = {
          header: {
            authorization: 'Bearer 1'
          }
        }
        await uut.ensureAdmin(ctx)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.status, 401)
        assert.include(err.message, 'Unauthorized')
      }
    })

    it('should throw 401 if user cant be found', async () => {
      try {
        // Force an error
        sandbox.stub(uut.User, 'findById').resolves(false)

        // Mock the context object.
        const ctx = mockContext()
        ctx.request = {
          header: {
            authorization: `Bearer ${context.token}`
          }
        }
        await uut.ensureAdmin(ctx)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.status, 401)
        assert.include(err.message, 'Unauthorized')
      }
    })

    it('should throw 401 if user is not admin type', async () => {
      try {
        // Mock the context object.
        const ctx = mockContext()
        ctx.request = {
          header: {
            authorization: `Bearer ${context.token}`
          }
        }
        await uut.ensureAdmin(ctx)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.status, 401)
        assert.include(err.message, 'not admin')
      }
    })

    it('should return true if user is admin', async () => {
      // Mock the context object.
      const ctx = mockContext()
      ctx.request = {
        header: {
          authorization: `Bearer ${context.adminJWT}`
        }
      }

      const result = await uut.ensureAdmin(ctx)

      assert.equal(result, true)
    })
  })

  describe('ensureTargetUserOrAdmin()', () => {
    it('should throw 401 if token not found', async () => {
      try {
        // Mock the context object.
        const ctx = mockContext()
        ctx.params = { id: context.id }
        await uut.ensureTargetUserOrAdmin(ctx)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.status, 401)
        assert.include(err.message, 'Unauthorized')
      }
    })

    it('should throw 401 if token is invalid', async () => {
      try {
        // Mock the context object.
        const ctx = mockContext()
        ctx.params = { id: context.id }

        ctx.request = {
          header: {
            authorization: 'Bearer 1'
          }
        }
        await uut.ensureTargetUserOrAdmin(ctx)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.status, 401)
        assert.include(err.message, 'Unauthorized')
      }
    })

    it('should throw 401 if user cant be found', async () => {
      try {
        // Force an error
        sandbox.stub(uut.User, 'findById').resolves(false)

        // Mock the context object.
        const ctx = mockContext()
        ctx.params = { id: context.id }

        ctx.request = {
          header: {
            authorization: `Bearer ${context.token}`
          }
        }
        await uut.ensureTargetUserOrAdmin(ctx)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.status, 401)
        assert.include(err.message, 'Unauthorized')
      }
    })

    it('should throw 401 if user is not admin type', async () => {
      try {
        // Mock the context object.
        const ctx = mockContext()
        ctx.params = { id: 'Target Id' }

        ctx.request = {
          header: {
            authorization: `Bearer ${context.token}`
          }
        }
        await uut.ensureTargetUserOrAdmin(ctx)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.status, 401)
        assert.include(err.message, 'not admin')
      }
    })

    it('should return true if user is admin', async () => {
      // Mock the context object.
      const ctx = mockContext()
      ctx.params = { id: context.id }

      ctx.request = {
        header: {
          authorization: `Bearer ${context.adminJWT}`
        }
      }

      const result = await uut.ensureTargetUserOrAdmin(ctx)

      assert.equal(result, true)
    })
  })
})
*/
