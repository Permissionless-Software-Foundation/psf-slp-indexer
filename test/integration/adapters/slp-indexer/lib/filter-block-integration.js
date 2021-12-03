/*
  Integration tests for the filter-block.js library
*/

const assert = require('chai').assert
const sinon = require('sinon')

const BCHJS = require('@psf/bch-js')
const bchjs = new BCHJS()
// const bchjs = new BCHJS({ restURL: 'http://192.168.0.36:3000/v5/' })

const Cache = require('../../../../../src/adapters/slp-indexer/lib/cache')
const Transaction = require('../../../../../src/adapters/slp-indexer/lib/transaction')
const MockLevel = require('../../../../unit/mocks/leveldb-mock')
const FilterBlock = require('../../../../../src/adapters/slp-indexer/lib/filter-block')

const RPC = require('../../../../../src/adapters/slp-indexer/lib/rpc')
const rpc = new RPC()

describe('#filter-block.js', () => {
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
    //
    //   it('should filter a small block', async () => {
    //     // force cache to get data from the full node.
    //     sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))
    //
    //     const blockHeight = 652276
    //     const blockHash = await rpc.getBlockHash(blockHeight)
    //     const block = await rpc.getBlock(blockHash)
    //     // console.log(`block: ${JSON.stringify(block, null, 2)}`)
    //
    //     const txs = block.tx
    //
    //     const slpTxs = await uut.filterAndSortSlpTxs(
    //       txs,
    //       blockHeight
    //     )
    //     // console.log(`slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)
    //
    //     assert.equal(slpTxs.length, 1)
    //   })
    //
    //   it('should filter a block with a DAG', async () => {
    //     // force cache to get data from the full node.
    //     sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))
    //
    //     const blockHeight = 543413
    //     const blockHash = await rpc.getBlockHash(blockHeight)
    //     const block = await rpc.getBlock(blockHash)
    //
    //     const txs = block.tx
    //     // console.log(`original TXs: ${JSON.stringify(txs, null, 2)}`)
    //
    //     const slpTxs = await uut.filterAndSortSlpTxs(
    //       txs,
    //       blockHeight
    //     )
    //     console.log(`slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)
    //   })

    // it('should sort problematic block', async () => {
    //   // force cache to get data from the full node.
    //   sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))
    //
    //   const blockHeight = 688837
    //   const blockHash = await rpc.getBlockHash(blockHeight)
    //   const block = await rpc.getBlock(blockHash)
    //   const txs = block.tx
    //
    //   const slpTxs = await uut.filterAndSortSlpTxs2(txs, blockHeight)
    //   console.log(`slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)
    // })
  })

  describe('#filterAndSortSlpTxs2', () => {
    it('should filter a block with a DAG', async () => {
      // force cache to get data from the full node.
      sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))

      const blockHeight = 543413
      const blockHash = await rpc.getBlockHash(blockHeight)
      const block = await rpc.getBlock(blockHash)

      const txs = block.tx
      // console.log(`original TXs: ${JSON.stringify(txs, null, 2)}`)

      const result = await uut.filterAndSortSlpTxs2(txs, blockHeight)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // assert.equal(result.sortedTxids.length, 7)
      // assert.equal(result.independentTxids.length, 1)

      assert.equal(result.length, 8)
      assert.include(result[0], '82a9') // Independent tx
      assert.include(result[7], 'a333') // newest chained tx
    })

    it('should sort different tx ordering', async () => {
      // force cache to get data from the full node.
      sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))

      const blockHeight = 543413
      const txs = [
        '82a9c47118dd221bf528e8b9ee9daef626ca52fb824b92cbe52a83e87afb0fac',
        'e5ff3083cd2dcf87a40a4a4a478349a394c1a1eeffe4857c2a173b183fdd42a2',
        'f56121d5a21a319204cf26ce68a6d607fefa02ba6ac42b4647fcad813b32d8b3',
        '660057b446cc4c930493607aa02e943e4fe7c38ae0816797ff7234ba72fea50f',
        '483d0198ed272bd0be7c6bbaf0e60340cce926f7d32143e2b09c5513922eaf87',
        '234893177b18a95dbfc1eb855d69f1c9cc256a317a6c51be8fd1b9a38ae072ce',
        'a333e7ebd34f0e24b567e99ed27241e3cfda5e9952cacdaa8fab31a7ee7e544d',
        '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
      ]

      const result = await uut.filterAndSortSlpTxs2(txs, blockHeight)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.equal(result.length, 8)
      assert.include(result[0], '82a9') // Independent tx
      assert.include(result[7], 'a333') // newest chained tx
    })

    // This was a problematic block with chained txs.
    // 938c = Genesis
    // ee9d = Mint
    // 4640 = Send that consumes outputs from first two txs.
    //
    // Expected output:
    // [938c, ee9d, 4640]
    // Actual output:
    // [ee9d, 938c, 4640]
    // Actual is a result of 4640 depending on the first two txs. To fix this,
    // would require biz logic to detect a genesis tx and move it to the front.
    it('should sort mint and send in same block', async () => {
      // force cache to get data from the full node.
      sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))

      const blockHeight = 543614
      const txs = [
        '4640a734063ea79fa587a3cac38a70a2f6f3db0011e23514024185982110d0fa',
        '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
        'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34'
      ]

      const result = await uut.filterAndSortSlpTxs2(txs, blockHeight)
      console.log(`result: ${JSON.stringify(result, null, 2)}`)
    })

    it('should sort problematic block', async () => {
      // force cache to get data from the full node.
      sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))

      const blockHeight = 543751
      const txs = [
        '550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b35',
        '95d460512143b636bbc5780d8b27b04fca3bfd2f22003ab48da594e2bab9cfc1',
        'b36b0c7485ad569b98cc9b9614dc68a5208495f22ec3b00effcf963b135a5215'
      ]

      const result = await uut.filterAndSortSlpTxs2(txs, blockHeight)
      console.log(`result: ${JSON.stringify(result, null, 2)}`)
    })

    // it('should sort prolematic block', async () => {
    //   // force cache to get data from the full node.
    //   sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))
    //
    //   const blockHeight = 714476
    //   const blockHash = await rpc.getBlockHash(blockHeight)
    //   const block = await rpc.getBlock(blockHash)
    //
    //   const txs = block.tx
    //   // console.log(`original TXs: ${JSON.stringify(txs, null, 2)}`)
    //
    //   const result = await uut.filterAndSortSlpTxs2(txs, blockHeight)
    //   console.log(`result: ${JSON.stringify(result, null, 2)}`)
    // })

    // This block caused the app to freeze up.
    it('should sort prolematic block 642869', async () => {
      // force cache to get data from the full node.
      sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))

      const blockHeight = 642869
      const blockHash = await rpc.getBlockHash(blockHeight)
      const block = await rpc.getBlock(blockHash)

      const txs = block.tx
      // console.log(`original TXs: ${JSON.stringify(txs, null, 2)}`)

      const result = await uut.filterAndSortSlpTxs2(txs, blockHeight)
      console.log(`result: ${JSON.stringify(result, null, 2)}`)
    })
  })

  describe('#checkForParent', () => {
    it('should sort a small block', async () => {
      // force cache to get data from the full node.
      sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))

      const txid =
        '234893177b18a95dbfc1eb855d69f1c9cc256a317a6c51be8fd1b9a38ae072ce'

      const result = await uut.checkForParent2(txid, 543413)
      // console.log('result: ', result)

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
      // console.log('result: ', result)

      assert.equal(result.success, true)
      assert.equal(result.chainedArray.length, 6)
      assert.equal(result.unsortedArray.length, 1)
    })

    // Same test as above, but earlier part of the DAG is provided. This test
    // ensures that the entire part of the forward DAG is filled in.
    it('should fill in the rest of the DAG', async () => {
      // force cache to get data from the full node.
      sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))

      const chainedArray = [
        '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
      ]
      const unsortedArray = [
        'e5ff3083cd2dcf87a40a4a4a478349a394c1a1eeffe4857c2a173b183fdd42a2',
        'f56121d5a21a319204cf26ce68a6d607fefa02ba6ac42b4647fcad813b32d8b3',
        '660057b446cc4c930493607aa02e943e4fe7c38ae0816797ff7234ba72fea50f',
        '483d0198ed272bd0be7c6bbaf0e60340cce926f7d32143e2b09c5513922eaf87',
        '234893177b18a95dbfc1eb855d69f1c9cc256a317a6c51be8fd1b9a38ae072ce',
        'a333e7ebd34f0e24b567e99ed27241e3cfda5e9952cacdaa8fab31a7ee7e544d'
      ]

      const result = await uut.forwardDag(chainedArray, unsortedArray)
      // console.log('result: ', result)

      assert.equal(result.success, true)
      assert.equal(result.chainedArray.length, 7)
      assert.equal(result.unsortedArray, 0)
    })
  })
})
