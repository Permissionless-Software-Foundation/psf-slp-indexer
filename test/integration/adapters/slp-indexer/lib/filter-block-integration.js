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
    // it('should sort problematic block', async () => {
    //   // force cache to get data from the full node.
    //   sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))
    //
    //   const blockHeight = 688837
    //   const blockHash = await rpc.getBlockHash(blockHeight)
    //   const block = await rpc.getBlock(blockHash)
    //   const txs = block.tx
    //
    //   const slpTxs = await uut.filterAndSortSlpTxs(
    //     txs,
    //     blockHeight
    //   )
    //   console.log(`slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)
    // })

    it('should sort small block', async () => {
      // force cache to get data from the full node.
      sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))

      const blockHeight = 652276
      const blockHash = await rpc.getBlockHash(blockHeight)
      const block = await rpc.getBlock(blockHash)
      console.log(`block: ${JSON.stringify(block, null, 2)}`)

      const txs = block.tx

      const slpTxs = await uut.filterAndSortSlpTxs(
        txs,
        blockHeight
      )
      console.log(`slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)
    })
  })

  describe('#checkForParent', () => {
    it('should sort a small block', async () => {
      // force cache to get data from the full node.
      sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))

      const txid = 'e05035a3719559fa4627016fd1edb2cc490092c906a3415394a16b0d0add8178'

      const result = await uut.checkForParent2(txid, 652276)
      console.log('result: ', result)
    })
  })
})
