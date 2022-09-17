import { assert } from 'chai'
import { Wlogger } from '../../../src/adapters/wlogger.js'
import sinon from 'sinon'

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
