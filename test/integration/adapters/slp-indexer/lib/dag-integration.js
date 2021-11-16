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
    describe('#crawlDag', () => {
      it('should get DAG for invalid MINT', async () => {
        const txid =
          'c017075df2eae8cfcfa0d121040c6fd08f3ec3234faa5c71e56c800869f4b87a'
        const tokenId =
          '495322b37d6b2eae81f045eda612b95870a0c2b6069c58f70cf8ef4e6a9fd43a'

        // const txData = await cache.get(txid)
        // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

        const result = await uut.crawlDag(txid, tokenId)
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

        const result = await uut.crawlDag(txid, tokenId)
        // console.log('result: ', result)

        assert.equal(result.isValid, true)
        assert.isArray(result.dag)
        assert.equal(result.dag.length, 4)
      })
    })
  })
})
