const config = require('../../../config')
const assert = require('chai').assert

const axios = require('axios').default
const sinon = require('sinon')

const util = require('util')
util.inspect.defaultOptions = { depth: 1 }

const LOCALHOST = `http://localhost:${config.port}`

const LogsController = require('../../../src/modules/logapi/controller')
const mockContext = require('../../unit/mocks/ctx-mock').context

let sandbox
let uut
describe('LogsApi', () => {
  beforeEach(() => {
    uut = new LogsController()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('POST /logapi', () => {
    it('should return false if password is not provided', async () => {
      try {
        const options = {
          method: 'post',
          url: `${LOCALHOST}/logapi`,
          data: {}
        }

        const result = await axios(options)
        assert.isFalse(result.data.success)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
    it('should return log', async () => {
      try {
        const options = {
          method: 'post',
          url: `${LOCALHOST}/logapi`,
          data: {
            password: 'test'
          }
        }

        const result = await axios(options)

        assert.isTrue(result.data.success)
        assert.isArray(result.data.data)
        assert.property(result.data.data[0], 'message')
        assert.property(result.data.data[0], 'level')
        assert.property(result.data.data[0], 'timestamp')
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
    it('should return false if files are not found!', async () => {
      try {
        sandbox.stub(uut.logsApiLib, 'getLogs').resolves({
          success: false,
          data: 'file does not exist'
        })

        const ctx = mockContext()
        ctx.request = {
          body: {
            password: 'test'
          }
        }
        await uut.getLogs(ctx)

        assert.isFalse(ctx.body.success)
        assert.include(ctx.body.data, 'file does not exist')
      } catch (err) {
        assert.fail('Unexpected result')
      }
    })
    it('should catch and handle errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut.logsApiLib.fs, 'existsSync').throws(new Error('test error'))

        // Mock the context object.
        const ctx = mockContext()

        ctx.request = {
          body: {
            password: 'test'
          }
        }

        await uut.getLogs(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
    it('should throw unhandled error', async () => {
      try {
        // Force an error
        sandbox.stub(uut.logsApiLib.fs, 'existsSync').throws(new Error())

        // Mock the context object.
        const ctx = mockContext()

        ctx.request = {
          body: {
            password: 'test'
          }
        }

        await uut.getLogs(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'Unhandled error')
      }
    })
  })
})
