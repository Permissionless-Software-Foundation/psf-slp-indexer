/*
  Unit tests for the start-stop.js library
*/

const assert = require('chai').assert
const sinon = require('sinon')

const StartStop = require('../../../../../src/adapters/slp-indexer/lib/start-stop')

describe('#start-stop', () => {
  let uut, sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new StartStop()
  })

  afterEach(() => sandbox.restore())

  describe('#stopStatus', () => {
    it('should return false by default', () => {
      const result = uut.stopStatus()

      assert.equal(result, false)
    })

    it('should return true if stopIndexing is true', () => {
      uut.stopIndexing = true

      const result = uut.stopStatus()

      assert.equal(result, true)
    })
  })

  describe('#initStartStop', () => {
    it('should initialize stdin hooks', () => {
      // mock process so that test completes.
      sandbox.stub(process.stdin, 'setRawMode').returns()
      sandbox.stub(process.stdin, 'on').returns()

      const result = uut.initStartStop()

      assert.equal(result, true)
    })
  })
})
