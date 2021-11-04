/*
  Integration tests for the DAG library
*/

const assert = require('chai').assert

const BCHJS = require('@psf/bch-js')
// const bchjs = new BCHJS()
const bchjs = new BCHJS({ restURL: 'http://192.168.0.36:3000/v5/' })

const Cache = require('../../lib/cache')
const cache = new Cache({ bchjs })

const DAG = require('../../lib/dag')

describe('#dag.js', () => {
  let uut

  beforeEach(() => {
    uut = new DAG({ cache })
  })

  describe('#DAG', () => {
    describe('#crawlDag', () => {
      // This is a simple 2-tx DAG.
      it('should get DAG for the first MINT transaction', async () => {
        const txid =
          'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34'
        const txidAry = []
        const tokenId =
          '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8'

        const txData = await cache.get(txid)

        const result = await uut.crawlDag(txData, tokenId, txidAry)
        // console.log('result: ', result)
        // console.log('txidAry: ', txidAry)

        assert.equal(result, true)
        assert.equal(txidAry.length, 2)
        assert.equal(
          txidAry[0],
          '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8'
        )
        assert.equal(
          txidAry[1],
          'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34'
        )
      })
    })

    describe('#getDag', () => {
      it('should get a txid list for the first MINT tx', async () => {
        const txid =
          'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34'

        const result = await uut.getDag(txid)
        // console.log(`result: ${JSON.stringify(result, null, 2)}`)

        assert.isArray(result)
        assert.equal(result.length, 2)
      })
    })
  })
})
