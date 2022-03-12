/*
  Integration tests for the DAG library
*/

const assert = require('chai').assert

const BCHJS = require('@psf/bch-js')
// const bchjs = new BCHJS()
const bchjs = new BCHJS({ restURL: 'http://192.168.2.129:3000/v5/' })

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

      it('should get DAG for 3-tx DAG', async () => {
        const txid =
          '4e52e0ec21d26feb8bdcafdbe48d0f15662f1ba2b3bea8200bcf0a90d7c209ee'
        const tokenId =
          'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501'

        const result = await uut.crawlDag(txid, tokenId)
        // console.log('result: ', result)

        assert.equal(result.isValid, true)
        assert.isArray(result.dag)
        assert.equal(result.dag.length, 3)
      })

      // This comes from real-world data while troubleshooting the app.
      // CT 11/28/21
      it('should validate a genesis TX', async () => {
        const txid =
          '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170'
        const tokenId =
          '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170'

        const result = await uut.crawlDag(txid, tokenId)
        // console.log('result: ', result)

        assert.equal(result.isValid, true)
        assert.isArray(result.dag)
        assert.equal(result.dag.length, 1)
      })

      // it('should invalidate if parent UTXO is invalid', async () => {
      //   const txid = '1a8e0fb428fefe6c7413dba30c15e2814947f7efb7978de526c514d9128b266c'
      //   const tokenId = '01e34c1524c523380707570ced7217024f644fd6f228c13413b12e97e4ca13e8'
      //
      //   const result = await uut.crawlDag(txid, tokenId)
      //   console.log('result: ', result)
      // })

      // it('should inspect long SPICE DAG', async () => {
      //   const txid = 'a154947de9239b93e28b7fc809627b8b4d7ecb494156ea964e96ce2eeefbfe14'
      //   // const txid = '57e76d0d3d3b76f66ca4276642557eddc8e5c1b92355add6866da958ec39afe5'
      //   // const txid = '23279ab149da98673cf3677c9c6d90bbc4bad4a8de2c0baea7181e8fba08cccc'
      //   // const txid = 'de30610b68be8dae2d1627cd0e7f7c0e18d916bc8881bbbff074c4c2c8e58e73'
      //   // const txid = 'e74ed9a8593d521eb64e527ac12d1ab00c689c8440931079f6e50d37097d2f7c'
      //   // const txid = '58bbb866dd09bd348f20a367c706dd7c48cc8c642a28f4f9c442cb469f99aefb'
      //   // const txid = '43cf6410d2b41a2087f38d83ba5340547a32dd99a5778e347667df2379708eee'
      //   const tokenId = '4de69e374a8ed21cbddd47f2338cc0f479dc58daa2bbe11cd604ca488eca0ddf'
      //
      //   const result = await uut.crawlDag(txid, tokenId)
      //   console.log(`result: ${JSON.stringify(result, null, 2)}`)
      // })

      // This was a corner-case MINT transaction.
      // it('should inspect problematic MINT tx', async () => {
      //   const txid = 'a98686df3ced24b5ce7f47762631b8a8dc87086aa7b9ee2be59bcdde7886264a'
      //   const tokenId = 'd912758f9f2c9c365e31f4d87e1c79675ec09b35364db2484061413651d0ccd4'
      //
      //   const result = await uut.crawlDag(txid, tokenId)
      //   console.log(`result: ${JSON.stringify(result, null, 2)}`)
      // })

      it('should validate a NFT Group genesis TX', async () => {
        const txid =
          '7e0b2c51417f2ebdbee1b2fa87935682dd23ef10c6601253e2426ffa20e8a1f5'
        const tokenId =
          '7e0b2c51417f2ebdbee1b2fa87935682dd23ef10c6601253e2426ffa20e8a1f5'

        const result = await uut.crawlDag(txid, tokenId)
        // console.log('result: ', result)

        assert.equal(result.isValid, true)
      })

      it('should run this temporary test', async () => {
        const txid = '6d68a7ffbb63ef851c43025f801a1d365cddda50b00741bca022c743d74cd61a'
        const tokenId = '9b6db26b64aedcedc0bd9a3037b29b3598573ec5cea99eec03faa838616cd683'

        const result = await uut.crawlDag(txid, tokenId)
        // console.log('result: ', result)

        assert.equal(result.isValid, false)
        assert.equal(result.dag.length, 0)
      })
    })
  })
})
