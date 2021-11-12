/*
  Integration tests for the filter-block.js library
*/

// const assert = require('chai').assert
const sinon = require('sinon')

const BCHJS = require('@psf/bch-js')
// const bchjs = new BCHJS()
const bchjs = new BCHJS({ restURL: 'http://192.168.0.36:3000/v5/' })

const Cache = require('../../../../../src/adapters/slp-indexer/lib/cache')
const Transaction = require('../../../../../src/adapters/slp-indexer/lib/transaction')
const MockLevel = require('../../../../unit/mocks/leveldb-mock')
const FilterBlock = require('../../../../../src/adapters/slp-indexer/lib/filter-block')

const RPC = require('../../../../../src/adapters/slp-indexer/lib/rpc')
const rpc = new RPC()

describe('#filter-blog.js', () => {
  let uut, sandbox

  beforeEach(() => {
    // Restore the sandbox before each test.
    sandbox = sinon.createSandbox()

    const txDb = new MockLevel()

    const cache = new Cache({ bchjs, txDb })
    const transaction = new Transaction()

    uut = new FilterBlock({ cache, transaction })
  })

  afterEach(() => sandbox.restore())

  describe('#filterAndSortSlpTxs', () => {
    it('should sort problematic block', async () => {
      // force cache to get data from the full node.
      sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))

      const blockHeight = 688837
      const blockHash = await rpc.getBlockHash(blockHeight)
      const block = await rpc.getBlock(blockHash)
      const txs = block.tx

      const slpTxs = await uut.filterAndSortSlpTxs(
        txs,
        blockHeight
      )
      console.log(`slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)
    })
  })
})
