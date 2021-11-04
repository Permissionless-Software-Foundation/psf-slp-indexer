/*
  unit tests for the Cache library
*/

const assert = require('chai').assert
const sinon = require('sinon')

const BCHJS = require('@psf/bch-js')
const bchjs = new BCHJS()

const Cache = require('../../../../../src/adapters/slp-indexer/lib/cache')
const MockLevel = require('../../../../unit/mocks/leveldb-mock')

describe('#cache.js', () => {
  let uut, sandbox

  beforeEach(() => {
    const addrDb = new MockLevel()
    const tokenDb = new MockLevel()
    const txDb = new MockLevel()

    // Restore the sandbox before each test.
    sandbox = sinon.createSandbox()

    uut = new Cache({ bchjs, txDb })
  })

  afterEach(() => sandbox.restore())

  describe('#get', () => {
    it('should get tx data cache on second call', async () => {
      sandbox.stub(uut.txDb, 'get').rejects(new Error('not in db'))

      // Mock devDependencies
      sandbox
        .stub(uut.transaction, 'get')
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
