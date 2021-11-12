/*
  Integration test for rpc.js library. These tests ensure the indexer is
  properly configured to talk with the full node.

  In order to run these tests, the environment variables must be configured
  for the Full Node, to override the defaults in the config/env/common.js file.
*/

const assert = require('chai').assert

const RPC = require('../../../../../src/adapters/slp-indexer/lib/rpc')
let uut

describe('#rpc.js', () => {
  beforeEach(() => {
    uut = new RPC()
  })

  describe('#getBlockCount', () => {
    it('should get current block height', async () => {
      const result = await uut.getBlockCount()
      // console.log('result: ', result)

      assert.isNumber(result)
    })
  })

  describe('#getBlockHeader', () => {
    it('should get the a block header', async () => {
      const hash =
        '0000000000000000008e8d83cba6d45a9314bc2ef4538d4e0577c6bed8593536'

      const result = await uut.getBlockHeader(hash)
      // console.log('result: ', result)

      assert.equal(result.height, 600000)
    })
  })

  describe('#getBlock', () => {
    it('should get the contents of a block', async () => {
      const hash =
        '0000000000000000008e8d83cba6d45a9314bc2ef4538d4e0577c6bed8593536'

      const result = await uut.getBlock(hash)
      // console.log('result: ', result)

      assert.equal(result.height, 600000)
    })
  })

  describe('#getBlockHash', () => {
    it('should get the contents of a block', async () => {
      const height = 600000
      const hash =
        '0000000000000000008e8d83cba6d45a9314bc2ef4538d4e0577c6bed8593536'

      const result = await uut.getBlockHash(height)
      // console.log('result: ', result)

      assert.equal(result, hash)
    })
  })

  describe('#getRawTransaction', () => {
    it('should get details on a transaction', async () => {
      const txid =
        'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34'

      const result = await uut.getRawTransaction(txid)
      // console.log('result: ', result)

      assert.equal(result.txid, txid)
    })
  })
})
