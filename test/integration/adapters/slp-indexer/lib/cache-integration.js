/*
  Integration tests for the Cache library
*/

const assert = require('chai').assert

const BCHJS = require('@psf/bch-js')
const bchjs = new BCHJS()

const Cache = require('../../../../../src/adapters/slp-indexer/lib/cache')

describe('#cache.js', () => {
  let uut

  beforeEach(() => {
    uut = new Cache({ bchjs })
  })

  describe('#get', () => {
    it('should get tx data from bch-js on the first call', async () => {
      const txid =
        '6bc111fbf5b118021d68355ca19a0e77fa358dd931f284b2550f79a51ab4792a'

      let result = await uut.get(txid)
      // console.log('result: ', result)

      result = await uut.get(txid)

      assert.equal(result.blockheight, 543957)
    })
  })
})
