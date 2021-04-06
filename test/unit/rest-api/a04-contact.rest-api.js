/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
const assert = require('chai').assert
const sinon = require('sinon')

const ContactController = require('../../../src/modules/contact/controller')
let uut
let sandbox
let ctx

const mockContext = require('../../unit/mocks/ctx-mock').context

describe('Contact', () => {
  before(async () => {
  })

  beforeEach(() => {
    uut = new ContactController()

    sandbox = sinon.createSandbox()

    // Mock the context object.
    ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#POST /contact', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        await uut.email(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'Cannot read property')
      }
    })

    it('should return 200 status on success', async () => {
      sandbox.stub(uut.contactLib, 'sendEmail').resolves(true)

      ctx.request.body = {
        email: 'test02@test.com',
        formMessage: 'test'
      }

      await uut.email(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      // Assert that expected properties exist in the returned data.
      assert.property(ctx.response.body, 'success')
      assert.isTrue(ctx.response.body.success)
    })
  })
})
