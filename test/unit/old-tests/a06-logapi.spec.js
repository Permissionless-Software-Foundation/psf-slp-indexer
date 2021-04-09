const config = require('../../config')
const assert = require('chai').assert

const axios = require('axios').default
const sinon = require('sinon')

const util = require('util')
util.inspect.defaultOptions = { depth: 1 }

const LOCALHOST = `http://localhost:${config.port}`

const LogsController = require('../../src/modules/logapi/controller')
const mockContext = require('./mocks/ctx-mock').context
const mockData = require('./mocks/log-api-mock')

const context = {}
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
        sandbox.stub(uut, 'generateFileName').resolves('bad router')

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
        sandbox.stub(uut.fs, 'existsSync').throws(new Error('test error'))

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
        sandbox.stub(uut.fs, 'existsSync').throws(new Error())

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
  describe('#filterLogs()', () => {
    it('should throw error if data is not provided', async () => {
      try {
        await uut.filterLogs()

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'Data must be array')
      }
    })
    it('should throw error if data provided is not an array', async () => {
      try {
        const data = 'data'
        await uut.filterLogs(data)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'Data must be array')
      }
    })
    it('should sort the log data', async () => {
      try {
        const data = mockData.data
        const result = await uut.filterLogs(data)
        assert.isArray(result)
        assert.property(result[1], 'message')
        assert.property(result[1], 'level')
        assert.property(result[1], 'timestamp')
      } catch (err) {
        assert.fail('Unexpected result')
      }
    })
    it('should sort the log data with a limit', async () => {
      try {
        const data = mockData.data
        const limit = 1
        const result = await uut.filterLogs(data, limit)
        assert.isArray(result)
        assert.equal(result.length, limit)
        assert.property(result[0], 'message')
        assert.property(result[0], 'level')
        assert.property(result[0], 'timestamp')
      } catch (err) {
        assert.fail('Unexpected result')
      }
    })
  })

  describe('#generateFileName()', () => {
    it('should return file name', async () => {
      try {
        const fileName = await uut.generateFileName()
        assert.isString(fileName)
        context.fileName = fileName
      } catch (err) {
        assert.fail('Unexpected result')
      }
    })
    it('should throw error if something fails', async () => {
      try {
        uut.config = null
        await uut.generateFileName()
        assert.fail('Unexpected result')
      } catch (err) {
        assert.exists(err)
        assert.isString(err.message)
      }
    })
  })
  describe('#readLines()', () => {
    it('should throw error if fileName is not provided', async () => {
      try {
        await uut.readLines()

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'filename must be a string')
      }
    })
    it('should throw error if fileName provided is not string', async () => {
      try {
        const fileName = true
        await uut.readLines(fileName)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'filename must be a string')
      }
    })
    it('should throw error if the file does not exist', async () => {
      try {
        const fileName = 'test/logs/'
        await uut.readLines(fileName)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'file does not exist')
      }
    })
    it('should ignore fileReader callback errors', async () => {
      try {
        // https://sinonjs.org/releases/latest/stubs/
        // About yields
        sandbox.stub(uut.lineReader, 'eachLine').yieldsRight({}, true)

        const fileName = context.fileName
        const result = await uut.readLines(fileName)
        assert.isArray(result)
      } catch (err) {
        assert.fail('Unexpected result')
      }
    })
    it('should return data', async () => {
      try {
        const fileName = context.fileName
        const result = await uut.readLines(fileName)

        assert.isArray(result)
        assert.property(result[1], 'message')
        assert.property(result[1], 'level')
        assert.property(result[1], 'timestamp')
      } catch (err) {
        assert.fail('Unexpected result')
      }
    })
  })
})
