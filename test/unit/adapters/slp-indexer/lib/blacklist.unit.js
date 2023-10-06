/*
  unit tests for the Cache library
*/

// Global npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

import Blacklist from '../../../../../src/adapters/slp-indexer/lib/blacklist.js'

describe('#blacklist', () => {
  let uut, sandbox

  beforeEach(() => {
    // Restore the sandbox before each test.
    sandbox = sinon.createSandbox()

    uut = new Blacklist()
  })

  afterEach(() => sandbox.restore())

  describe('#checkBlacklist', () => {
    it('should return true if a token ID is on the blacklist', () => {
      // Use a token ID that is on the blacklist (FlexUSD)
      const tokenId = 'dd21be4532d93661e8ffe16db6535af0fb8ee1344d1fef81a193e2b4cfa9fbc9'

      const result = uut.checkBlacklist(tokenId)

      assert.equal(result, true)
    })

    it('should return false if a token ID is not in the blacklist', () => {
      // Use a token ID that is on the blacklist (FlexUSD)
      const tokenId = 'dd21be4532d93661e8ffe16db6535af0fb8ee1344d1fef81a193e2b4cfa9faaa'

      const result = uut.checkBlacklist(tokenId)

      assert.equal(result, false)
    })

    it('should catch and throw errors', () => {
      try {
        // Force an error
        uut.blacklist = null

        uut.checkBlacklist()

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })
})
