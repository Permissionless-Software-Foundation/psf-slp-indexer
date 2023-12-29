/*
  Unit tests for the webhook adapter library
*/

// Global npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local libraries
import WebhookAdapter from '../../../src/adapters/webhook.js'
// import config from '../../../config/index.js'

describe('#Webhook', () => {
  let uut
  let sandbox

  beforeEach(() => {
    uut = new WebhookAdapter()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#webhookNewClaim', () => {
    it('should execute a webhook', async () => {
      // Mock Dependencies
      sandbox.stub(uut.axios, 'post').resolves()

      const result = await uut.webhookNewClaim({})

      assert.equal(result, true)
    })

    it('should return false on error', async () => {
      sandbox.stub(uut.axios, 'post').rejects(new Error('test error'))

      const result = await uut.webhookNewClaim({})

      assert.equal(result, false)
    })
  })
})
