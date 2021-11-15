/*
  Integration tests for the DAG library
*/

const assert = require('chai').assert

const BCHJS = require('@psf/bch-js')
// const bchjs = new BCHJS()
const bchjs = new BCHJS({ restURL: 'http://192.168.0.36:3000/v5/' })

const Cache = require('../../../../../src/adapters/slp-indexer/lib/cache')
// const Transaction = require('../../../../../src/adapters/slp-indexer/lib/transaction')
const MockLevel = require('../../../../unit/mocks/leveldb-mock')

const DAG = require('../../../../../src/adapters/slp-indexer/lib/dag')

describe('#dag.js', () => {
  let uut, cache

  beforeEach(() => {
    // const addrDb = new MockLevel()
    // const tokenDb = new MockLevel()

    // Force cache to get TX data from full node, not database.
    const txDb = new MockLevel()
    txDb.get = () => { throw new Error('no in db') }

    cache = new Cache({ bchjs, txDb })
    uut = new DAG({ cache, txDb })
  })

  describe('#DAG', () => {
    describe('#crawlDag2', () => {
      it('should get DAG for invalid MINT', async () => {
        const txid =
          'c017075df2eae8cfcfa0d121040c6fd08f3ec3234faa5c71e56c800869f4b87a'
        const tokenId =
          '495322b37d6b2eae81f045eda612b95870a0c2b6069c58f70cf8ef4e6a9fd43a'

        // const txData = await cache.get(txid)
        // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

        const result = await uut.crawlDag2(txid, tokenId)
        // console.log('result: ', result)

        assert.equal(result.isValid, false)
        assert.isArray(result.dag)
        assert.equal(result.dag.length, 2)
      })

      it('should get DAG for valid SEND', async () => {
        const txid =
          '8e22a695b43f2347660f881a687d190e1abb9ef241ce41a3437c4f2b2cdedf9b'
        const tokenId =
          '550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b35'

        // const txData = await cache.get(txid)
        // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

        const result = await uut.crawlDag2(txid, tokenId)
        // console.log('result: ', result)

        assert.equal(result.isValid, true)
        assert.isArray(result.dag)
        assert.equal(result.dag.length, 4)
      })
    })

    // describe('#crawlDag', () => {
    //   // This is a simple 2-tx DAG.
    //   it('should get DAG for the first MINT transaction', async () => {
    //     const txid =
    //       'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34'
    //     const txidAry = []
    //     const tokenId =
    //       '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8'
    //
    //     const txData = await cache.get(txid)
    //
    //     const result = await uut.crawlDag(txData, tokenId, txidAry)
    //     // console.log('result: ', result)
    //     // console.log('txidAry: ', txidAry)
    //
    //     assert.equal(result, true)
    //     assert.equal(txidAry.length, 2)
    //     assert.equal(
    //       txidAry[0],
    //       '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8'
    //     )
    //     assert.equal(
    //       txidAry[1],
    //       'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34'
    //     )
    //   })
    // })

    // describe('#getDag', () => {
    //   it('should get a txid list for the first MINT tx', async () => {
    //     const txid =
    //       'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34'
    //
    //     const result = await uut.getDag(txid)
    //     // console.log(`result: ${JSON.stringify(result, null, 2)}`)
    //
    //     assert.isArray(result)
    //     assert.equal(result.length, 2)
    //   })
    // })

    // describe('#validateTxid', () => {
    //   it('should fail validation test', async () => {
    //     const txid =
    //       'b1091bb9d5821b84dd65be21158d905bcf2d799bf096b81a5c8a74d1c6e2e9ef'
    //
    //     const result = await uut.validateTxid(txid)
    //     console.log('result: ', result)
    //   })
    //
    //   it('should fail validation test', async () => {
    //     const txid =
    //       '9e85f156f83304f38cc44f759b319b3d3f0b45d79b81eadd712df6336e1f5cfa'
    //
    //     const result = await uut.validateTxid(txid)
    //     console.log('result: ', result)
    //   })
    //
    //   it('should fail validation test', async () => {
    //     const txid =
    //       'c017075df2eae8cfcfa0d121040c6fd08f3ec3234faa5c71e56c800869f4b87a'
    //
    //     const result = await uut.validateTxid(txid)
    //     console.log('result: ', result)
    //   })
    //
    //   it('should pass validation test', async () => {
    //     const txid =
    //       'e7f99e836d9d3ef88db6bfe757980e07b62066869267714c8c3377cea438aa71'
    //
    //     const result = await uut.validateTxid(txid)
    //     console.log('result: ', result)
    //   })
    //
    //   it('should pass validation test', async () => {
    //     const txid =
    //       '6bc111fbf5b118021d68355ca19a0e77fa358dd931f284b2550f79a51ab4792a'
    //
    //     const result = await uut.validateTxid(txid)
    //     console.log('result: ', result)
    //   })
    //
    //   it('should pass a valid, but large DAG', async () => {
    //     const txid =
    //       '9d7905b5cb8901b0a90e6c704530dd20f1c22af4f5ba119fb707fc7026cf59b2'
    //
    //     const result = await uut.validateTxid(txid)
    //     console.log('result: ', result)
    //   })
    //
    //   it('should fail validation test', async () => {
    //     const txid =
    //       'b91f7648d0a91e68f1ab5c205fcc9f0f7ab382034219e8db3147b83667798da8'
    //
    //     const result = await uut.validateTxid(txid)
    //     console.log('result: ', result)
    //   })
    // })
  })
})
