/*
  Integration tests for the Cache library
*/

const assert = require('chai').assert

const BCHJS = require('@psf/bch-js')
const bchjs = new BCHJS()

const MockLevel = require('../../../../unit/mocks/leveldb-mock')

const Transaction = require('../../../../../src/adapters/slp-indexer/lib/transaction')

describe('#transaction.js', () => {
  let uut

  beforeEach(() => {
    // const addrDb = new MockLevel()
    // const tokenDb = new MockLevel()
    const txDb = new MockLevel()

    uut = new Transaction({ bchjs, txDb })
  })

  describe('#decodeOpReturn', () => {
    // it('should throw error for problematic TX', async () => {
    //   const txid =
    //     '16a40eca8bf6a1d4b913820718db2361686a9371e4b4ad82998c0566cf7a3052'
    //
    //   const result = await uut.decodeOpReturn(txid)
    //   console.log(`result: ${JSON.stringify(result, null, 2)}`)
    // })

    it('should handle NFTs', async () => {
      // const txid = 'b91f7648d0a91e68f1ab5c205fcc9f0f7ab382034219e8db3147b83667798da8'
      const txid = '9eb460161344c0e1e69d22c518b9706cc6db37d492d009790dcf4e55b635df71'

      const result = await uut.decodeOpReturn(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.equal(result.tokenType, 65)
    })

    it('should properly handle a documentHash property in GENESIS tx', async () => {
      const txid = '79a6e7caa57b8eedfbeef799bf502b02f98055d0bed9a84296346bbdb00ec003'

      const result = await uut.decodeOpReturn(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.equal(result.documentHash, '54ff82df2f6f19844e884e386972c5aa7a2638efb33f49c70f4f2733c47eeba5')
    })
  })

  describe('#get', () => {
    it('should get details about a SLP SEND tx with SEND input', async () => {
      const txid =
        '266844d53e46bbd7dd37134688dffea6e54d944edff27a0add63dd0908839bc1'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that there are stanardized properties.
      assert.property(result, 'txid')
      assert.property(result, 'vin')
      assert.property(result, 'vout')
      assert.property(result.vout[0], 'value')
      assert.property(result.vout[1].scriptPubKey, 'addresses')

      // Assert outputs have expected properties
      assert.equal(result.vout[0].tokenQty, null)
      assert.equal(result.vout[0].tokenQtyStr, null)
      assert.equal(result.vout[1].tokenQty, 1)
      assert.equal(result.vout[1].tokenQtyStr, '1')
      assert.equal(result.vout[2].tokenQty, 998833)
      assert.equal(result.vout[2].tokenQtyStr, '998833')
      assert.equal(result.vout[3].tokenQty, null)
      assert.equal(result.vout[3].tokenQtyStr, null)

      // Assert that inputs have expected properties
      assert.equal(result.vin[0].tokenQtyStr, '998834')
      assert.equal(result.vin[0].tokenQty, 998834)
      assert.equal(
        result.vin[0].tokenId,
        '497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7'
      )
      assert.equal(result.vin[1].tokenQtyStr, '0')
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenId, null)

      // Assert blockheight is added
      assert.equal(result.blockheight, 603424)
      assert.equal(result.isSlpTx, true)
    })

    // This is a problematic TX.
    // TX b1091bb9d5821b84dd65be21158d905bcf2d799bf096b81a5c8a74d1c6e2e9ef
    // Has an input TX: 16a40eca8bf6a1d4b913820718db2361686a9371e4b4ad82998c0566cf7a3052
    // That is structured as a valid SLP token, but should fail SLP Parsing.
    // it('should properly hydrate input txs', async () => {
    //   const txid =
    //     'b1091bb9d5821b84dd65be21158d905bcf2d799bf096b81a5c8a74d1c6e2e9ef'
    //
    //   const result = await uut.get(txid)
    //   console.log(`result: ${JSON.stringify(result, null, 2)}`)
    // })

    it('should properly hydrate a genesis UTXO being spent', async () => {
      const txid = '401aae1bef9246c42916808c9595d2834791384dcf2e298d2fc294e27b6f5273'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.property(result, 'txid')
    })

    it('should get details about an NFT Group Genesis TX', async () => {
      const txid =
        '7e0b2c51417f2ebdbee1b2fa87935682dd23ef10c6601253e2426ffa20e8a1f5'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.equal(result.tokenType, 129)
      assert.equal(result.isSlpTx, true)
    })

    // This is the creation of an NFT (child) from an NFT Group token.
    it('should get details about an NFT (Child) Genesis TX', async () => {
      const txid = '526b5a95bb33cbe1b7da49e90656451a964dfb5ec0b80f1e75ae83c5d009afe9'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that properties unique to an NFT Genesis TX exist in the output.
      assert.equal(result.vin[0].tokenQty, 5)
      assert.equal(result.vin[0].tokenId, 'e8c8d85f03aedd0a4ec4b5ff8885c0bad33517ba2188ed29cfcefbd76e3959ca')
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenId, null)
      assert.equal(result.vout[0].isMintBaton, true)
      assert.equal(result.vout[1].tokenQty, 1)
      assert.equal(result.vout[2].tokenQty, 0)
    })
  })

  describe('#getTokenInfo', () => {
    it('should return data on burn transaction', async () => {
      const txid = '70d69e0f3d58e52526ef8136b20993b5b4d3f7c936771fd2f490ccfc5c019372'

      const result = await uut.getTokenInfo(txid)
      console.log('result: ', result)
    })
  })
})
