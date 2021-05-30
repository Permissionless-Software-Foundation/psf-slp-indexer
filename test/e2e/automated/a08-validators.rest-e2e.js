const assert = require('chai').assert
const testUtils = require('../../utils/test-utils')

const Validators = require('../../../src/middleware/validators')

const sinon = require('sinon')
const mockContext = require('../../unit/mocks/ctx-mock').context

const util = require('util')
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
    it('should trigger the "next" function if user is admin', async () => {
      try {
        // Mock the context object.
        const ctx = mockContext()
        ctx.params = { id: context.id }

        ctx.request = {
          header: {
            authorization: `Bearer ${context.adminJWT}`
          }
        }
        // Function that execute if the validations
        // are successful
        const next = () => { return 'next function' }

        const result = await uut.ensureUser(ctx, next)

        assert.isString(result)
        assert.equal(result, 'next function')
      } catch (err) {
        assert(false, 'Unexpected result')
      }
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
    it('should trigger the "next" function if user is admin', async () => {
      try {
        // Mock the context object.
        const ctx = mockContext()
        ctx.request = {
          header: {
            authorization: `Bearer ${context.adminJWT}`
          }
        }
        // Function that execute if the validations
        // are successful
        const next = () => { return 'next function' }

        const result = await uut.ensureAdmin(ctx, next)

        assert.isString(result)
        assert.equal(result, 'next function')
      } catch (err) {
        assert(false, 'Unexpected result')
      }
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
    it('should trigger the "next" function if user is admin', async () => {
      try {
        // Mock the context object.
        const ctx = mockContext()
        ctx.params = { id: context.id }

        ctx.request = {
          header: {
            authorization: `Bearer ${context.adminJWT}`
          }
        }
        // Function that execute if the validations
        // are successful
        const next = () => { return 'next function' }

        const result = await uut.ensureTargetUserOrAdmin(ctx, next)

        assert.isString(result)
        assert.equal(result, 'next function')
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })
})
