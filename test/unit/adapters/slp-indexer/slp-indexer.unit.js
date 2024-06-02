/*
  Unit tests for the main slp-indexer/index.js library
*/

// Global npm libraries
import { assert } from 'chai'
import sinon from 'sinon'
import cloneDeep from 'lodash.clonedeep'

// Local libraries
import SlpIndexer from '../../../../src/adapters/slp-indexer/index.js'
import MockLevel from '../../../unit/mocks/leveldb-mock.js'
import mockTxLib from '../../mocks/transaction-mock.js'

describe('#slpIndexer', () => {
  let uut, sandbox, mockTxData

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

    mockTxData = cloneDeep(mockTxLib)

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

    it('should exit quietly if there is an error checking the blacklist', async () => {
      // Mock dependencies
      sandbox.stub(uut.pTxDb, 'get').rejects(new Error('Entry not found'))
      sandbox.stub(uut.transaction, 'decodeOpReturn').rejects(new Error('test error'))
      // sandbox.stub(uut.blacklist, 'checkBlacklist').returns(true)

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

  describe('#handleProcessFailure', () => {
    it('should roll back to the oldest parent TX blockhight', async () => {
      // Mock dependencies
      sandbox.stub(uut.cache, 'get').resolves(mockTxData.genesisTestInputTx02)
      sandbox.stub(uut.dbBackup, 'unzipDb').resolves()
      sandbox.stub(uut.process, 'exit').returns()

      const result = await uut.handleProcessFailure(603424, 'fake-txid', 'some error')

      assert.equal(result, true)
    })

    it('should catch and report errors', async () => {
      // Force error
      sandbox.stub(uut.cache, 'get').rejects(new Error('test error'))

      const result = await uut.handleProcessFailure()

      assert.equal(result, false)
    })

    it('should loop through parent txs', async () => {
      // Force desired code path
      mockTxData.genesisTestInputTx02.vin[0].tokenQty = 5
      mockTxData.nftGenesisTx01.blockheight = 602345

      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockTxData.genesisTestInputTx02)
        .onCall(1).resolves(mockTxData.nftGenesisTx01)
      sandbox.stub(uut.dbBackup, 'unzipDb').resolves()
      sandbox.stub(uut.process, 'exit').returns()

      const result = await uut.handleProcessFailure(603424, 'fake-txid', 'some error')

      assert.equal(result, true)
    })
  })

  describe('#processSlpTxs', () => {
    it('should process slp TXs in a block', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'processTx').resolves()

      const blockHeight = 543413
      const slpTxs = [
        '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
      ]

      const result = await uut.processSlpTxs(slpTxs, blockHeight)

      assert.equal(result, true)
    })

    it('should skip errors in phase 2', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'processTx').rejects(new Error('test error'))
      uut.indexState = 'phase2'

      const blockHeight = 543413
      const slpTxs = [
        '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
      ]

      const result = await uut.processSlpTxs(slpTxs, blockHeight)

      assert.equal(result, null)
    })

    it('should throw error for unprocessible transactions', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'processTx').rejects(new Error('test error'))
      sandbox.stub(uut, 'handleProcessFailure').resolves()
      uut.RETRY_CNT = 0
      uut.indexState = 'phase1'

      const blockHeight = 543413
      const slpTxs = [
        '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
      ]

      try {
        await uut.processSlpTxs(slpTxs, blockHeight)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'Failed to process TXID')
      }
    })

    it('should catch, report, and throw errors', async () => {
      try {
        await uut.processSlpTxs()

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'Cannot read')
      }
    })
  })

  describe('#processBlock', () => {
    it('should process txs in a block', async () => {
      // Mock dependencies
      const block = {
        tx: [
          '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
        ]
      }
      sandbox.stub(uut.rpc, 'getBlockHash').resolves()
      sandbox.stub(uut.rpc, 'getBlock').resolves(block)
      sandbox.stub(uut.filterBlock, 'filterAndSortSlpTxs2').resolves({
        combined: ['170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'],
        nonSlpTxs: ['170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2']
      })
      sandbox.stub(uut, 'processSlpTxs').resolves()
      sandbox.stub(uut.filterBlock, 'deleteBurnedUtxos').resolves(false)
      sandbox.stub(uut.managePtxdb, 'cleanPTXDB').resolves()

      const result = await uut.processBlock(600000)

      assert.equal(result, 1)
    })

    it('should create a backup every epoch', async () => {
      // Mock dependencies
      const block = {
        tx: [
          '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
        ]
      }
      sandbox.stub(uut.rpc, 'getBlockHash').resolves()
      sandbox.stub(uut.rpc, 'getBlock').resolves(block)
      sandbox.stub(uut.filterBlock, 'filterAndSortSlpTxs2').resolves({
        combined: ['170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'],
        nonSlpTxs: ['170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2']
      })
      sandbox.stub(uut, 'processSlpTxs').resolves()
      sandbox.stub(uut.filterBlock, 'deleteBurnedUtxos').resolves(false)
      sandbox.stub(uut.managePtxdb, 'cleanPTXDB').resolves()
      sandbox.stub(uut.dbBackup, 'zipDb').resolves()

      uut.indexState = 'phase1'

      const result = await uut.processBlock(600000)

      assert.equal(result, 2)
    })

    it('should rollback to last ephoch when in phase 2 indexing', async () => {
      // Mock dependencies
      const block = {
        tx: [
          '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
        ]
      }
      sandbox.stub(uut.rpc, 'getBlockHash').resolves()
      sandbox.stub(uut.rpc, 'getBlock').resolves(block)
      sandbox.stub(uut.filterBlock, 'filterAndSortSlpTxs2').resolves({
        combined: ['170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'],
        nonSlpTxs: ['170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2']
      })
      sandbox.stub(uut, 'processSlpTxs').resolves()
      sandbox.stub(uut.filterBlock, 'deleteBurnedUtxos').resolves(false)
      sandbox.stub(uut.managePtxdb, 'cleanPTXDB').resolves()
      sandbox.stub(uut.dbBackup, 'unzipDb').resolves()
      sandbox.stub(uut.process, 'exit').returns()

      uut.indexState = 'phase2'

      const result = await uut.processBlock(600001)

      assert.equal(result, 3)
    })

    it('should catch, report, and throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut.rpc, 'getBlockHash').rejects(new Error('test error'))

        await uut.processBlock(588923)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should hand off block pre-processing to support API in phase2', async () => {
      // Mock dependencies
      const block = {
        tx: [
          '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
        ]
      }
      sandbox.stub(uut.rpc, 'getBlockHash').resolves()
      sandbox.stub(uut.rpc, 'getBlock').resolves(block)
      // Mock support API.
      sandbox.stub(uut.axios, 'post').resolves({ data: {
        combined: ['170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'],
        nonSlpTxs: ['170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2']
      }})
      sandbox.stub(uut, 'processSlpTxs').resolves()
      sandbox.stub(uut.filterBlock, 'deleteBurnedUtxos').resolves(false)
      sandbox.stub(uut.managePtxdb, 'cleanPTXDB').resolves()

      // Force phase2 processing and config to use support API.
      uut.indexState = 'phase2'
      uut.config.useSlpSupportApi = true

      const result = await uut.processBlock(600000)

      assert.equal(result, 1)
    })

    it('should still rollback to last epoch in phase 2 when using support API', async () => {
      // Mock dependencies
      const block = {
        tx: [
          '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
        ]
      }
      sandbox.stub(uut.rpc, 'getBlockHash').resolves()
      sandbox.stub(uut.rpc, 'getBlock').resolves(block)
      // Mock support API.
      sandbox.stub(uut.axios, 'post').resolves({ data: {
        combined: ['170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'],
        nonSlpTxs: ['170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2']
      }})
      sandbox.stub(uut, 'processSlpTxs').resolves()
      sandbox.stub(uut.filterBlock, 'deleteBurnedUtxos').resolves(false)
      sandbox.stub(uut.managePtxdb, 'cleanPTXDB').resolves()
      sandbox.stub(uut.dbBackup, 'unzipDb').resolves()
      sandbox.stub(uut.process, 'exit').returns()

      // Force phase2 processing and config to use support API.
      uut.indexState = 'phase2'
      uut.config.useSlpSupportApi = true

      const result = await uut.processBlock(600001)

      assert.equal(result, 3)
    })
  })

  describe('#start', () => {
    it('should start indexing in phase1', async () => {
      // Mock dependencies
      sandbox.stub(uut.startStop, 'initStartStop').returns()
      sandbox.stub(uut, 'getStatus').resolves({
        syncedBlockHeight: 566777,
        chainBlockHeight: 566778
      })
      sandbox.stub(uut.rpc, 'getBlockCount').resolves(566778)
      sandbox.stub(uut, 'processBlock').resolves()
      sandbox.stub(uut.zmq, 'connect').resolves()
      sandbox.stub(uut.zmq, 'getTx').returns(false)
      sandbox.stub(uut.zmq, 'getBlock').returns(false)
      sandbox.stub(uut.process, 'exit').returns()

      // Force an error to exit the loop
      sandbox.stub(uut.utils, 'sleep').rejects(new Error('test error'))

      const result = await uut.start()

      assert.equal(result, 0)
    })

    it('should stop indexing if the user hits the q button', async () => {
      // Mock dependencies
      sandbox.stub(uut.startStop, 'initStartStop').returns()
      sandbox.stub(uut, 'getStatus').resolves({
        syncedBlockHeight: 566777,
        chainBlockHeight: 566778
      })
      sandbox.stub(uut.rpc, 'getBlockCount').resolves(566778)
      sandbox.stub(uut.startStop, 'stopStatus').returns(true)

      sandbox.stub(uut.process, 'exit')
        .onCall(0).throws(new Error('test error'))
        .onCall(1).returns()

      const result = await uut.start()

      assert.equal(result, 0)
    })

    it('should process a ZMQ transaction in phase 2', async () => {
      // Mock dependencies
      sandbox.stub(uut.startStop, 'initStartStop').returns()
      sandbox.stub(uut, 'getStatus').resolves({
        syncedBlockHeight: 566777,
        chainBlockHeight: 566778
      })
      sandbox.stub(uut.rpc, 'getBlockCount').resolves(566778)
      sandbox.stub(uut, 'processBlock').resolves()
      sandbox.stub(uut.zmq, 'connect').resolves()
      sandbox.stub(uut.zmq, 'getTx').returns({})
      sandbox.stub(uut, 'processTx').resolves()
      sandbox.stub(uut.zmq, 'getBlock').returns(false)
      sandbox.stub(uut.process, 'exit').returns()

      // Force an error to exit the loop
      sandbox.stub(uut.utils, 'sleep').rejects(new Error('test error'))

      const result = await uut.start()

      assert.equal(result, 0)
    })

    it('should exit quiety if there is an error processes a ZMQ transaction in phase 2', async () => {
      // Mock dependencies
      sandbox.stub(uut.startStop, 'initStartStop').returns()
      sandbox.stub(uut, 'getStatus').resolves({
        syncedBlockHeight: 566777,
        chainBlockHeight: 566778
      })
      sandbox.stub(uut.rpc, 'getBlockCount').resolves(566778)
      sandbox.stub(uut, 'processBlock').resolves()
      sandbox.stub(uut.zmq, 'connect').resolves()
      sandbox.stub(uut.zmq, 'getTx').returns({})
      sandbox.stub(uut, 'processTx').rejects(new Error('test error'))
      sandbox.stub(uut.zmq, 'getBlock').returns(false)
      sandbox.stub(uut.process, 'exit').returns()

      // Force an error to exit the loop
      sandbox.stub(uut.utils, 'sleep').rejects(new Error('test error'))

      const result = await uut.start()

      assert.equal(result, 0)
    })

    it('should process a ZMQ block in phase 2', async () => {
      // Mock dependencies
      sandbox.stub(uut.startStop, 'initStartStop').returns()
      sandbox.stub(uut, 'getStatus').resolves({
        syncedBlockHeight: 566777,
        chainBlockHeight: 566778
      })
      sandbox.stub(uut.rpc, 'getBlockCount').resolves(566778)
      sandbox.stub(uut, 'processBlock').resolves()
      sandbox.stub(uut.zmq, 'connect').resolves()
      sandbox.stub(uut.zmq, 'getTx').returns(false)
      sandbox.stub(uut.zmq, 'getBlock').returns({ hash: 'fake-hash' })
      sandbox.stub(uut.rpc, 'getBlockHeader').resolves({ height: 566778 })
      sandbox.stub(uut.process, 'exit').returns()

      // Force an error to exit the loop
      sandbox.stub(uut.utils, 'sleep').rejects(new Error('test error'))

      const result = await uut.start()

      assert.equal(result, 0)
    })

    it('In phase 2, it should report every 100 checks of the ZMQ queue', async () => {
      // Mock dependencies
      sandbox.stub(uut.startStop, 'initStartStop').returns()
      sandbox.stub(uut, 'getStatus').resolves({
        syncedBlockHeight: 566777,
        chainBlockHeight: 566778
      })
      sandbox.stub(uut.rpc, 'getBlockCount').resolves(566778)
      sandbox.stub(uut, 'processBlock').resolves()
      sandbox.stub(uut.zmq, 'connect').resolves()
      sandbox.stub(uut.zmq, 'getTx').returns(false)
      sandbox.stub(uut, 'processTx').resolves()
      sandbox.stub(uut.zmq, 'getBlock').returns(false)
      sandbox.stub(uut.process, 'exit').returns()

      // Force an error to exit the loop
      sandbox.stub(uut.utils, 'sleep').rejects(new Error('test error'))

      uut.loopCnt = 100

      const result = await uut.start()

      assert.equal(result, 0)
    })
  })
})
