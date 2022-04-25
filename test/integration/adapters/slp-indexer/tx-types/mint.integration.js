/*
  Integration tests for the mint.js library
*/

// Public npm libraries

// Local libraries
const Transaction = require('../../../../../src/adapters/slp-indexer/lib/transaction')
const transaction = new Transaction()
const Mint = require('../../../../../src/adapters/slp-indexer/tx-types/mint')
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

    uut = new Mint({ cache, addrDb, tokenDb, txDb, utxoDb })
  })

  describe('#processTx', () => {
    it('should processes multisig tx', async () => {
      const txid = '9f6cd0e64aa52086e43fe7a90b4e4e9619e81eb8ea8dced841ebfa8d3a7cf76c'

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
