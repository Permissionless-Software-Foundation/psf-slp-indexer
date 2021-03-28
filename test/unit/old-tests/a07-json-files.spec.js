const assert = require('chai').assert
const fs = require('fs')
const sinon = require('sinon')

const util = require('util')
util.inspect.defaultOptions = { depth: 1 }

const JsonFiles = require('../../src/lib/utils/json-files')

const JSON_FILE = 'test-json-file.json'
const JSON_PATH = `${__dirname.toString()}/${JSON_FILE}`

const deleteFile = filepath => {
  try {
    // Delete state if exist
    fs.unlinkSync(filepath)
  } catch (error) {}
}
let sandbox
let uut
describe('JsonFiles', () => {
  const obj = {
    json: 'file'
  }
  beforeEach(() => {
    uut = new JsonFiles()
    sandbox = sinon.createSandbox()
  })
  afterEach(() => sandbox.restore())

  after(() => {
    deleteFile(JSON_PATH)
  })
  describe('writeJSON()', () => {
    it('should throw error if  inputs is not provided', async () => {
      try {
        await uut.writeJSON()
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'obj property is required')
      }
    })
    it('should throw error if  filename property is not provided', async () => {
      try {
        await uut.writeJSON(obj)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'fileName property must be a string')
      }
    })
    it('should throw error if  filename property is not string', async () => {
      try {
        await uut.writeJSON(obj, 1)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'fileName property must be a string')
      }
    })
    it('should throw error if fs library return an error', async () => {
      try {
        // https://sinonjs.org/releases/latest/stubs/
        // About yields
        sandbox.stub(uut.fs, 'writeFile').yields(new Error('test error'))

        await uut.writeJSON(obj, JSON_PATH)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
    it('should write a json file', async () => {
      try {
        await uut.writeJSON(obj, JSON_PATH)

        assert.isTrue(fs.existsSync(JSON_PATH))
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })

  describe('readJSON()', () => {
    it('should throw error if  filename property is not provided', async () => {
      try {
        await uut.readJSON(obj)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'fileName property must be a string')
      }
    })
    it('should throw error if  filename property is not string', async () => {
      try {
        await uut.readJSON(obj, 1)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'fileName property must be a string')
      }
    })
    it('should throw error if fs library return an error', async () => {
      try {
        // https://sinonjs.org/releases/latest/stubs/
        // About yields
        sandbox.stub(uut.fs, 'readFile').yields(new Error('test error'))

        await uut.readJSON(JSON_PATH)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
    it('should throw error if file not found', async () => {
      try {
        const testError = new Error('test error')
        testError.code = 'ENOENT'

        sandbox.stub(uut.fs, 'readFile').yields(testError)

        await uut.readJSON(JSON_PATH)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should read a json file', async () => {
      try {
        const result = await uut.readJSON(JSON_PATH)

        const objKeys = Object.keys(obj)
        const resultKeys = Object.keys(result)

        assert.isObject(result)
        assert.equal(objKeys.length, resultKeys.length)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })
})
