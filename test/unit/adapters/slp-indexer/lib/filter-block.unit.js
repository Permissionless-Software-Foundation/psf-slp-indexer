/*
  Unit tests for the filter-block.js library
*/

const assert = require('chai').assert
const sinon = require('sinon')

const MockLevel = require('../../../../unit/mocks/leveldb-mock')
const Cache = require('../../../../../src/adapters/slp-indexer/lib/cache')
const Transaction = require('../../../../../src/adapters/slp-indexer/lib/transaction')
const FilterBlock = require('../../../../../src/adapters/slp-indexer/lib/filter-block')

describe('#filter-block.js', () => {
  let uut, sandbox

  beforeEach(() => {
    // Restore the sandbox before each test.
    sandbox = sinon.createSandbox()

    // Mock txDb and force mock to return error.
    const txDb = new MockLevel()
    txDb.get = () => {
      throw new Error('not in db')
    }

    const cache = new Cache({ txDb })
    const transaction = new Transaction()

    uut = new FilterBlock({ cache, transaction })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw error if cache lib is not passed', () => {
      try {
        uut = new FilterBlock()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Must include instance of tx cache when instantiating filter-block.js')
      }
    })

    it('should throw error if transaction lib is not passed', () => {
      try {
        const txDb = new MockLevel()
        const cache = new Cache({ txDb })

        uut = new FilterBlock({ cache })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Must include instance of transaction lib when instantiating filter-block.js')
      }
    })
  })

  describe('#filterSlpTxs', () => {
    it('should filter SLP txs from block', async () => {
      // From block 652,276
      const txs = [
        '5d7001c04bfb21a3d45bb084269ce811bf11269bc020eb4146440ebd66057d4a',
        '01b2118775d84a48dec3d31c760fddd8abc44dad6073b26f72d57fbc636d912d',
        '38d5f98dbe7ff2f0205c1a370d5d587d8d98aa65ad60d7026e381e7ba559d5d0',
        'a0b18e78d60b8ead3a5c45a00a964d04c2a8c268d62043fccc644b0efdcf5dd8',
        'e05035a3719559fa4627016fd1edb2cc490092c906a3415394a16b0d0add8178'
      ]

      // The first 4 blocks are not SLP. The 5th is.
      sandbox.stub(uut.transaction, 'getTokenInfo')
        .onCall(0).resolves(false)
        .onCall(1).resolves(false)
        .onCall(2).resolves(false)
        .onCall(3).resolves(false)
        .onCall(4).resolves(true)

      const slpTxs = await uut.filterSlpTxs(txs)
      // console.log(slpTxs)

      assert.isArray(slpTxs)
      assert.equal(slpTxs.length, 1)
      assert.equal(slpTxs[0], txs[4])
    })
  })
})
