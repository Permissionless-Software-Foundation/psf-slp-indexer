/*
  unit tests for the Cache library
*/

const assert = require('chai').assert
const sinon = require('sinon')

const BCHJS = require('@psf/bch-js')
const bchjs = new BCHJS()

const Cache = require('../../lib/cache')

describe('#cache.js', () => {
  let uut, sandbox

  beforeEach(() => {
    // Restore the sandbox before each test.
    sandbox = sinon.createSandbox()

    uut = new Cache({ bchjs })
  })

  afterEach(() => sandbox.restore())

  describe('#get', () => {
    it('should get tx data cache on second call', async () => {
      // Mock devDependencies
      sandbox
        .stub(uut.bchjs.Transaction, 'get2')
        .onCall(0)
        .resolves({ blockheight: 543957 })
        .onCall(1)
        .rejects(new Error('Unexpected code path'))

      const txid =
        '6bc111fbf5b118021d68355ca19a0e77fa358dd931f284b2550f79a51ab4792a'

      let result = await uut.get(txid)
      // console.log('result: ', result)

      result = await uut.get(txid)

      assert.equal(result.blockheight, 543957)

      // If data doesn't come from the cache on the second call, the mock above
      // will throw an error.
    })
  })
})
