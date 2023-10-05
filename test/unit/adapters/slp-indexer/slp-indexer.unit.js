/*
  Unit tests for the main slp-indexer/index.js library
*/

// Global npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local libraries
import SlpIndexer from '../../../../src/adapters/slp-indexer/index.js'
import MockLevel from '../../../unit/mocks/leveldb-mock.js'

describe('#slpIndexer', () => {
  let uut, sandbox

  // Generate mock databases.
  function openMockDbs () {
    const addrDb = new MockLevel()
    const tokenDb = new MockLevel()
    const txDb = new MockLevel()
    const statusDb = new MockLevel()
    const pTxDb = new MockLevel()
    const utxoDb = new MockLevel()

    uut.addrDb = addrDb
    uut.tokenDb = tokenDb
    uut.txDb = txDb
    uut.statusDb = statusDb
    uut.pTxDb = pTxDb
    uut.utxoDb = utxoDb

    return { addrDb, tokenDb, txDb, statusDb, pTxDb, utxoDb }
  }

  beforeEach(() => {
    uut = new SlpIndexer()
    const dbs = openMockDbs()
    uut.encapsulateDeps(dbs)

    // Restore the sandbox before each test.
    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#openDatabases', () => {
    it('should open and then close databases', async () => {
      const { addrDb, tokenDb, txDb, statusDb, pTxDb, utxoDb } = uut.openDatabases()

      await addrDb.close()
      await tokenDb.close()
      await txDb.close()
      await statusDb.close()
      await pTxDb.close()
      await utxoDb.close()
    })
  })

  // Note: This test completes right away but causes the process to stay open
  // for a few seconds while all the support libraries do their thing.
  describe('#encapsulateDeps', () => {
    it('should instantiate all support libraries and encapsulate them', () => {
      const dbs = openMockDbs()

      const result = uut.encapsulateDeps(dbs)

      assert.equal(result, true)
    })
  })

  describe('#getStatus()', () => {
    it('should get status from the database', async () => {
      uut.statusDb = new MockLevel()
      sandbox.stub(uut.statusDb, 'get').resolves('test data')

      const result = await uut.getStatus()

      assert.equal(result, 'test data')
    })

    it('should initialze the status DB on error', async () => {
      uut.statusDb = new MockLevel()

      // Force an error
      sandbox.stub(uut.statusDb, 'get').rejects(new Error('test error'))

      const result = await uut.getStatus()
      // console.log('result: ', result)

      assert.equal(result.startBlockHeight, 543376)
      assert.equal(result.syncedBlockHeight, 543376)
    })
  })

  describe('#processData', () => {
    it('should skip tokens with unknown token type', async () => {
      const data = {
        slpData: {
          tokenType: 42
        },
        txData: {
          txid: 'fake-txid'
        }
      }

      const result = await uut.processData(data)

      assert.equal(result, false)
    })

    it('should route NFT Genesis tx', async () => {
      // Mock dependencies
      sandbox.stub(uut.nftGenesis, 'processTx').resolves()

      const data = {
        slpData: {
          tokenType: 65,
          txType: 'GENESIS'
        },
        txData: {
          txid: 'fake-txid'
        }
      }

      const result = await uut.processData(data)

      assert.equal(result, true)
    })

    it('should route Type 1 Genesis tx', async () => {
      // Mock dependencies
      sandbox.stub(uut.genesis, 'processTx').resolves()

      const data = {
        slpData: {
          tokenType: 1,
          txType: 'GENESIS'
        },
        txData: {
          txid: 'fake-txid'
        }
      }

      const result = await uut.processData(data)

      assert.equal(result, true)
    })

    it('should route a mint tx', async () => {
      // Mock dependencies
      sandbox.stub(uut.mint, 'processTx').resolves()

      const data = {
        slpData: {
          tokenType: 1,
          txType: 'MINT',
          tokenId: 'fake-token-ID'
        },
        txData: {
          txid: 'fake-txid'
        }
      }

      const result = await uut.processData(data)

      assert.equal(result, true)
    })

    it('should route a send tx', async () => {
      // Mock dependencies
      sandbox.stub(uut.send, 'processTx').resolves()

      const data = {
        slpData: {
          tokenType: 1,
          txType: 'SEND',
          tokenId: 'fake-token-ID'
        },
        txData: {
          txid: 'fake-txid'
        }
      }

      const result = await uut.processData(data)

      assert.equal(result, true)
    })

    it('should catch, report, and throw errors', async () => {
      try {
        const data = {
          slpData: {
            tokenType: 42
          },
          txData: {
            txid: 'fake-txid'
          }
        }

        // Force an error
        sandbox.stub(uut.txDb, 'put').rejects(new Error('test error'))

        await uut.processData(data)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#processTx', () => {
    it('should skip transactions that have already been processed', async () => {
      const inData = {
        tx: 'fake-txid',
        blockHeight: 600000
      }

      sandbox.stub(uut.pTxDb, 'get').resolves('fake result')

      const result = await uut.processTx(inData)

      assert.equal(result, false)
    })

    it('should mark blacklist tokens with isValidSlp = null in txDb', async () => {
      // Mock dependencies
      sandbox.stub(uut.pTxDb, 'get').rejects(new Error('Entry not found'))
      sandbox.stub(uut.transaction, 'decodeOpReturn').resolves({ tokenId: 'fake-tokenid' })
      sandbox.stub(uut.blacklist, 'checkBlacklist').returns(true)

      const inData = {
        tx: 'fake-txid',
        blockHeight: 600000
      }

      const result = await uut.processTx(inData)

      assert.equal(result.isValidSlp, null)
    })

    it('should identify SLP txs and route them to processData()', async () => {
      // Mock dependencies
      sandbox.stub(uut.pTxDb, 'get').rejects(new Error('Entry not found'))
      sandbox.stub(uut.transaction, 'decodeOpReturn').resolves({ tokenId: 'fake-tokenid' })
      sandbox.stub(uut.blacklist, 'checkBlacklist').returns(false)
      sandbox.stub(uut.cache, 'get').resolves({})
      sandbox.stub(uut, 'processData').resolves()

      const inData = {
        tx: 'fake-txid',
        blockHeight: 600000
      }

      const result = await uut.processTx(inData)

      assert.equal(result, true)
    })

    it('should catch, report, and throw errors', async () => {
      try {
        await uut.processTx()

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'Cannot destructure')
      }
    })
  })
})
