// const assert = require('chai').assert
const {
  notifyRotation,
  outputToConsole
} = require('../../../src/adapters/wlogger')

const sinon = require('sinon')

// let uut
let sandbox

describe('#wlogger.js', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#notifyRotation', () => {
    it('should notify of a log rotation', () => {
      notifyRotation()
    })
  })

  describe('#envronment', () => {
    it('should write to console in non-test environment', () => {
      outputToConsole()
    })
  })
})
