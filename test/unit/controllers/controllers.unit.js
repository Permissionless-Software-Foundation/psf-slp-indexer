/*
  Unit tests for controllers index.js file.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

import Controllers from '../../../src/controllers/index.js'

describe('#Controllers', () => {
  let uut
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new Controllers()
  })

  afterEach(() => sandbox.restore())

  describe('#attachControllers', () => {
    it('should attach the controllers', async () => {
      // mock IPFS
      sandbox.stub(uut.adapters, 'start').resolves({})
      uut.adapters.ipfs.ipfsCoordAdapter = {
        attachRPCRouter: () => {}
      }

      // Mock the timer controllers
      sandbox.stub(uut.timerControllers, 'startTimers').returns()

      const app = {
        use: () => {}
      }

      await uut.attachControllers(app)
    })
  })

  describe('#initAdapters', () => {
    it('should initialize adapters', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters, 'start').resolves()

      const result = await uut.initAdapters()

      assert.equal(result, true)
    })
  })

  describe('#initUseCases', () => {
    it('should initialize use cases', async () => {
      // Mock dependencies
      sandbox.stub(uut.useCases, 'start').resolves()

      const result = await uut.initUseCases()

      assert.equal(result, true)
    })
  })

  describe('#attachRESTControllers', () => {
    it('should attach REST controllers', () => {
      const app = {
        use: () => {}
      }

      const result = uut.attachRESTControllers(app)

      assert.equal(result, true)
    })
  })
})
