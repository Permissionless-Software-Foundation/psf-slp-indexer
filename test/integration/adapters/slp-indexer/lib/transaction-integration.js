/*
  Integration tests for the Cache library
*/

const assert = require('chai').assert

const BCHJS = require('@psf/bch-js')
const bchjs = new BCHJS()

const Transaction = require('../../../../../src/adapters/slp-indexer/lib/transaction')

describe('#transaction.js', () => {
  let uut

  beforeEach(() => {
    uut = new Transaction({ bchjs })
  })

  describe('#decodeOpReturn', () => {
    it('should throw error for problematic TX', async () => {
      const txid =
        '16a40eca8bf6a1d4b913820718db2361686a9371e4b4ad82998c0566cf7a3052'

      const result = await uut.decodeOpReturn(txid)
      console.log(`result: ${JSON.stringify(result, null, 2)}`)
    })
  })

  // describe('#get', () => {
  //   // This is a problematic TX.
  //   // TX b1091bb9d5821b84dd65be21158d905bcf2d799bf096b81a5c8a74d1c6e2e9ef
  //   // Has an input TX: 16a40eca8bf6a1d4b913820718db2361686a9371e4b4ad82998c0566cf7a3052
  //   // That is structured as a valid SLP token, but should fail SLP Parsing.
  //   it('should properly hydrate input txs', async () => {
  //     const txid =
  //       'b1091bb9d5821b84dd65be21158d905bcf2d799bf096b81a5c8a74d1c6e2e9ef'
  //
  //     const result = await uut.get(txid)
  //     console.log(`result: ${JSON.stringify(result, null, 2)}`)
  //   })
  // })
})
