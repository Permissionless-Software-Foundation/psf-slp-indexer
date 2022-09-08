/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
import { assert } from 'chai'

import sinon from 'sinon'
import LogsApiController from '../../../../../src/controllers/rest-api/logs/controller.js'

import { context as mockContext } from '../../../../unit/mocks/ctx-mock.js'
let uut
let sandbox
let ctx

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
        assert.include(err.message, 'Cannot read')
      }
    })

    it('should return 500 status on biz logic Unhandled error', async () => {
      try {
        // eslint-disable
        sandbox
          .stub(uut.logsApiLib, 'getLogs')
          .returns(Promise.reject(new Error()))

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
      // Mock dependencies
      sandbox.stub(uut.logsApiLib, 'getLogs').resolves({})

      ctx.request.body = {
        password: 'test'
      }

      await uut.getLogs(ctx)

      assert.isOk(ctx.body)
    })
  })
})
