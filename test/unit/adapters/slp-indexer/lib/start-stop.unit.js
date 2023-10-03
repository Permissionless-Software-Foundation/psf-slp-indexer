/*
  Unit tests for the start-stop.js library
*/

// const assert = require('chai').assert
// const sinon = require('sinon')
import { assert } from 'chai'
import sinon from 'sinon'

// const StartStop = require('../../../../../src/adapters/slp-indexer/lib/start-stop')
import StartStop from '../../../../../src/adapters/slp-indexer/lib/start-stop.js'

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
      // sandbox.stub(process.stdin, 'setRawMode').returns()
      // sandbox.stub(process.stdin, 'on').returns()
      uut.process = mockProcess

      const result = uut.initStartStop()

      assert.equal(result, true)
    })
  })

  describe('#qDetected', () => {
    it('should set the stop flag if the q key is detected', () => {
      const key = {
        name: 'q'
      }

      const result = uut.qDetected('', key)

      assert.equal(result, true)
      assert.equal(uut.stopIndexing, true)
    })

    it('should exit immediately if ctrl-c is detected', () => {
      uut.process = mockProcess

      const key = {
        name: 'c',
        ctrl: true
      }

      const result = uut.qDetected('', key)

      assert.equal(result, true)
    })
  })
})

const mockProcess = {
  stdin: {
    setRawMode: () => {},
    on: () => {}
  },
  exit: () => {}
}
