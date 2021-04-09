/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
const assert = require('chai').assert
const sinon = require('sinon')

const LogsApiController = require('../../../src/modules/logapi/controller')
let uut
let sandbox
let ctx

const mockContext = require('../../unit/mocks/ctx-mock').context

describe('Logapi', () => {
  before(async () => {
  })

  beforeEach(() => {
    uut = new LogsApiController()

    sandbox = sinon.createSandbox()

    // Mock the context object.
    ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#POST /logapi', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        await uut.getLogs(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.status, 422)
        assert.include(err.message, 'Cannot read property')
      }
    })
    it('should return 500 status on biz logic Unhandled error', async () => {
      try {
        // eslint-disable
        sandbox.stub(uut.logsApiLib, 'getLogs').returns(Promise.reject(new Error()))

        ctx.request.body = {
          password: 'test'
        }

        await uut.getLogs(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.status, 500)
        assert.include(err.message, 'Unhandled error')
      }
    })

    it('should return 200 status on success', async () => {
      ctx.request.body = {
        password: 'test'
      }

      await uut.getLogs(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      // Assert that expected properties exist in the returned data.
      assert.property(ctx.response.body, 'success')
      assert.isTrue(ctx.response.body.success)
    })
  })
})
