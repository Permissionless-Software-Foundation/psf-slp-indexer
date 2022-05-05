/*
  Integration tests for the genesis.js library
*/

// Public npm libraries

// Local libraries
const Transaction = require('../../../../../src/adapters/slp-indexer/lib/transaction')
const transaction = new Transaction()
const Genesis = require('../../../../../src/adapters/slp-indexer/tx-types/genesis')
const MockLevel = require('../../../../unit/mocks/leveldb-mock')
// const Cache = require('../../../../../src/adapters/slp-indexer/lib/cache')

describe('#genesis.js', () => {
  let uut

  beforeEach(() => {
    const addrDb = new MockLevel()
    const tokenDb = new MockLevel()
    const txDb = new MockLevel()
    const utxoDb = new MockLevel()
    txDb.get = () => {
      throw new Error('not in db')
    }

    // const cache = new Cache({ txDb })

    uut = new Genesis({ addrDb, tokenDb, utxoDb })
  })

  describe('#addBatonAddress', () => {
    it('should processes problematic tx', async () => {
      const txid = '805b85ae1a7e1c1a770429a1158a8364cc8f6f1421115bcd0557cca9437d2769'

      const data = await getData(txid)

      const result = await uut.addBatonAddress(data)
      console.log('result: ', result)
    })
  })
})

// Get the data needed to process a TXID.
async function getData (txid) {
  const slpData = await transaction.decodeOpReturn(txid)
  console.log(`slpData: ${JSON.stringify(slpData, null, 2)}`)

  const txData = await transaction.get(txid)
  console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

  const blockHeight = txData.blockheight

  const data = { slpData, txData, blockHeight }

  return data
}
