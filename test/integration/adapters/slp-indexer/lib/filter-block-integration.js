/*
  Integration tests for the filter-block.js library
*/

const assert = require('chai').assert
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

      const txid = '234893177b18a95dbfc1eb855d69f1c9cc256a317a6c51be8fd1b9a38ae072ce'

      const result = await uut.checkForParent2(txid, 543413)
      console.log('result: ', result)

      assert.equal(result.hasParent, true)
      assert.equal(result.dag.length, 6)
    })
  })

  describe('#forwardDag', () => {
    it('should provide forward part of DAG', async () => {
      // force cache to get data from the full node.
      sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))

      const chainedArray = [
        '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2',
        'e5ff3083cd2dcf87a40a4a4a478349a394c1a1eeffe4857c2a173b183fdd42a2',
        'f56121d5a21a319204cf26ce68a6d607fefa02ba6ac42b4647fcad813b32d8b3',
        '660057b446cc4c930493607aa02e943e4fe7c38ae0816797ff7234ba72fea50f'
      ]
      const unsortedArray = [
        '234893177b18a95dbfc1eb855d69f1c9cc256a317a6c51be8fd1b9a38ae072ce',
        '82a9c47118dd221bf528e8b9ee9daef626ca52fb824b92cbe52a83e87afb0fac',
        '483d0198ed272bd0be7c6bbaf0e60340cce926f7d32143e2b09c5513922eaf87'
      ]

      const result = await uut.forwardDag(chainedArray, unsortedArray)
      console.log('result: ', result)
      console.log(`chainedArray: ${JSON.stringify(chainedArray, null, 2)}`)
      console.log(`unsortedArray: ${JSON.stringify(unsortedArray, null, 2)}`)

      assert.equal(result.success, true)
      assert.equal(result.chainedArray.length, 5)
      assert.equal(result.unsortedArray.length, 2)
    })
  })
})
