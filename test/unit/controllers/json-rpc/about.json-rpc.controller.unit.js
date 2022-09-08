/*
  Unit tests for the json-rpc/about/index.js file.
*/

// Public npm libraries
import sinon from 'sinon'

import { assert } from 'chai'

// Local libraries
import AboutRPC from '../../../../src/controllers/json-rpc/about/index.js'

describe('#AboutRPC', () => {
  let uut
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new AboutRPC()
  })

  afterEach(() => sandbox.restore())

  describe('#aboutRouter', () => {
    it('should return information about the service', async () => {
      const result = await uut.aboutRouter()
      // console.log('result: ', result)

      assert.property(result, 'success')
      assert.equal(result.success, true)
      assert.property(result, 'status')
      assert.equal(result.status, 200)
      assert.property(result, 'message')
      assert.property(result, 'endpoint')
      assert.equal(result.endpoint, 'about')
    })
  })
})
