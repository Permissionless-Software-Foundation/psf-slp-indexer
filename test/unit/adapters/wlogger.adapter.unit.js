const assert = require('chai').assert
const { Wlogger } = require('../../../src/adapters/wlogger')

const sinon = require('sinon')

let uut
let sandbox

describe('#wlogger', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()

    uut = new Wlogger()
  })

  describe('#constructor', () => {
    it('should create a new wlogger instance', () => {
      uut = new Wlogger()
      // console.log('uut: ', uut)

      assert.property(uut, 'transport')
    })
  })

  describe('#notifyRotation', () => {
    it('should notify of a log rotation', () => {
      uut.notifyRotation()
    })
  })

  describe('#envronment', () => {
    it('should write to console in non-test environment', () => {
      uut.outputToConsole()
    })
  })
})
