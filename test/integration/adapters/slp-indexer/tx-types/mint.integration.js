/*
  Integration tests for the mint.js library
*/

// Public npm libraries
const sinon = require('sinon')

// Local libraries
const Transaction = require('../../../../../src/adapters/slp-indexer/lib/transaction')
const transaction = new Transaction()
const Mint = require('../../../../../src/adapters/slp-indexer/tx-types/mint')
const MockLevel = require('../../../../unit/mocks/leveldb-mock')
const Cache = require('../../../../../src/adapters/slp-indexer/lib/cache')

describe('#mint.js', () => {
  let uut, sandbox

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

    // Restore the sandbox before each test.
    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  // This test is not working.
  describe('#processTx', () => {
    it('should processes multisig tx', async () => {
      const txid = '7f530b22748c227dd125ffbc045dbce23fa0d0e9826a8daab3ca5837dba1d382'

      const data = await getData(txid)

      // Stub removeBatonInAddr() as there is likely not an input to remove in the test.
      sandbox.stub(uut, 'removeBatonInAddr').resolves()

      // Stub update token stats
      sandbox.stub(uut, 'updateTokenStats').resolves()

      const result = await uut.processTx(data)
      console.log('result: ', result)
    })

    it('should process Group baton', async () => {
      const txid = '805b85ae1a7e1c1a770429a1158a8364cc8f6f1421115bcd0557cca9437d2769'

      const data = await getData(txid)
      console.log(`data: ${JSON.stringify(data, null, 2)}`)
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
