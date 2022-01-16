/*
  unit tests for the Cache library
*/

// Global npm libraries
const assert = require('chai').assert
const sinon = require('sinon')

const Cache = require('../../../../../src/adapters/slp-indexer/lib/cache')
const MockLevel = require('../../../../unit/mocks/leveldb-mock')

describe('#cache.js', () => {
  let uut, sandbox

  beforeEach(() => {
    // const addrDb = new MockLevel()
    // const tokenDb = new MockLevel()
    const txDb = new MockLevel()

    // Restore the sandbox before each test.
    sandbox = sinon.createSandbox()

    uut = new Cache({ txDb })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw error if txDb is not included', () => {
      try {
        uut = new Cache()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Must include txDb when instantiationg Transaction library')
      }
    })
  })

  describe('#put', () => {
    it('should throw an error if input is not a string', async () => {
      try {
        uut.put(1234)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'key must be a string')
      }
    })
  })

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

    it('should get tx data from DB on first call', async () => {
      // Force tx DB to return data
      sandbox.stub(uut.txDb, 'get').resolves({ blockheight: 543957 })

      const txid =
        '6bc111fbf5b118021d68355ca19a0e77fa358dd931f284b2550f79a51ab4792a'

      const result = await uut.get(txid)
      // console.log('result: ', result)

      assert.equal(result.blockheight, 543957)
    })

    it('should increment and report the cacheCnt', async () => {
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

      // Force count to be 99, so that it rolls over to 100.
      uut.cacheCnt = 99

      await uut.get(txid)
      // const result = await uut.get(txid)
      // console.log('result: ', result)

      // console.log(`uut.cacheCnt: ${uut.cacheCnt}`)
      assert.equal(uut.cacheCnt, 100)
    })
  })

  describe('#delete', () => {
    it('should delete key from cache', () => {
      uut.delete('test')

      assert.isOk('Not throwing an error is a pass')
    })
  })
})
