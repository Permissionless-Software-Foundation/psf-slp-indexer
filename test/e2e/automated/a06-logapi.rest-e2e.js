import config from '../../../config/index.js'
import { assert } from 'chai'
import axios from 'axios'
import sinon from 'sinon'
import util from 'util'

import LogsController from '../../../src/controllers/rest-api/logs/controller.js'
import { context as mockContext } from '../../unit/mocks/ctx-mock.js'
util.inspect.defaultOptions = { depth: 1 }

const LOCALHOST = `http://localhost:${config.port}`

let sandbox
let uut
describe('LogsApi', () => {
  beforeEach(() => {
    uut = new LogsController()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('POST /logs', () => {
    it('should return false if password is not provided', async () => {
      try {
        const options = {
          method: 'post',
          url: `${LOCALHOST}/logs`,
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
          url: `${LOCALHOST}/logs`,
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
        sandbox
          .stub(uut.logsApiLib.fs, 'existsSync')
          .throws(new Error('test error'))

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
