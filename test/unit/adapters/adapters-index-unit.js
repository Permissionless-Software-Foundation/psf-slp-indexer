/*
  Unit tests for the adapters index.js library
*/

// Global npm libraries
import { assert } from 'chai'

import sinon from 'sinon'

// Local libraries
import Adapters from '../../../src/adapters/index.js'

describe('#adapters', () => {
  let uut, sandbox

  beforeEach(() => {
    uut = new Adapters()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('#start', () => {
    it('should start the async adapters', async () => {
      // Mock dependencies
      uut.config.getJwtAtStartup = true
      sandbox.stub(uut.fullStackJwt, 'getJWT').resolves()
      sandbox.stub(uut.fullStackJwt, 'instanceBchjs').resolves()
      sandbox.stub(uut.ipfs, 'start').resolves()

      const result = await uut.start()

      assert.equal(result, true)
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        uut.config.getJwtAtStartup = false
        uut.config.env = 'dev'
        sandbox.stub(uut.ipfs, 'start').rejects(new Error('test error'))

        await uut.start()

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'test error')
      }
    })
  })
})
