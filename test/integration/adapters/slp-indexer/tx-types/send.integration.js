/*
  Integration tests for the send.js library
*/

// Public npm libraries

// Local libraries
const Transaction = require('../../../../../src/adapters/slp-indexer/lib/transaction')
const transaction = new Transaction()
const Send = require('../../../../../src/adapters/slp-indexer/tx-types/send')
const MockLevel = require('../../../../unit/mocks/leveldb-mock')
const Cache = require('../../../../../src/adapters/slp-indexer/lib/cache')

describe('#send.js', () => {
  let uut

  beforeEach(() => {
    const addrDb = new MockLevel()
    const tokenDb = new MockLevel()
    const txDb = new MockLevel()
    const utxoDb = new MockLevel()
    txDb.get = () => {
      throw new Error('not in db')
    }

    const cache = new Cache({ txDb })

    uut = new Send({ cache, addrDb, tokenDb, txDb, utxoDb })
  })

  describe('#processTx', () => {
    it('should processes problematic tx', async () => {
      const txid = '8e577799f9366f41880f53fb4dcca12af3a69cae5f4a6c6bf6f8dd7dc43ef564'

      const data = await getData(txid)

      const result = await uut.processTx(data)
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
