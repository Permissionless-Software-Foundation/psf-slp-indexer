/*
  Unit tests for GENESIS tx indexing library genesis.js
*/

// Public npm libraries
const assert = require('chai').assert
const sinon = require('sinon')
const cloneDeep = require('lodash.clonedeep')
const BigNumber = require('bignumber.js')

// Local libraries
const Genesis = require('../../../../../src/adapters/slp-indexer/tx-types/genesis')
const MockLevel = require('../../../../unit/mocks/leveldb-mock')
const mockDataLib = require('../../../../unit/mocks/genesis-mock')

describe('#genesis.js', () => {
  let uut, sandbox, mockData

  beforeEach(() => {
    const addrDb = new MockLevel()
    const tokenDb = new MockLevel()
    const utxoDb = new MockLevel()

    uut = new Genesis({ addrDb, tokenDb, utxoDb })

    mockData = cloneDeep(mockDataLib)

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw error if address DB is not passed in', () => {
      try {
        uut = new Genesis()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Instance of address DB required when instantiating genesis.js')
      }
    })

    it('should throw error if token DB is not passed in', () => {
      try {
        const addrDb = new MockLevel()

        uut = new Genesis({ addrDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Instance of token DB required when instantiating genesis.js')
      }
    })

    it('should throw error if utxo DB is not passed in', () => {
      try {
        const addrDb = new MockLevel()
        const tokenDb = new MockLevel()

        uut = new Genesis({ addrDb, tokenDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Instance of utxo DB required when instantiating genesis.js')
      }
    })
  })

  describe('#addTokenToDB', () => {
    it('should add a new token to the database', async () => {
      const result = await uut.addTokenToDB(mockData.genesisData01)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that expected values exist.
      assert.equal(result.decimals, 8)
      assert.equal(result.mintBatonIsActive, true)
      assert.equal(result.blockCreated, 543751)
      assert.equal(result.totalBurned, 0)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.addTokenToDB()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })

    it('should handle mint baton is set to 0', async () => {
      const result = await uut.addTokenToDB(mockData.genesisData02)
      console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that expected values exist.
      assert.equal(result.decimals, 8)
      assert.equal(result.mintBatonIsActive, false)
      assert.equal(result.blockCreated, 600518)
      assert.equal(result.totalBurned, 0)
    })
  })

  describe('#updateBalanceFromGenesis', () => {
    it('should update addr object', () => {
      // Convert slpData to BigNumber
      mockData.genesisData01.slpData.qty = new BigNumber(mockData.genesisData01.slpData.qty)

      const result = uut.updateBalanceFromGenesis(mockData.addrMock, mockData.genesisData01.slpData)
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should skip token not associated with this tx', () => {
      // Convert slpData to BigNumber
      mockData.genesisData01.slpData.qty = new BigNumber(mockData.genesisData01.slpData.qty)

      // Force function to skip this token entry.
      mockData.addrMock.balances.unshift({
        tokenId: '12345',
        qty: '10000000000000000'
      })

      const result = uut.updateBalanceFromGenesis(mockData.addrMock, mockData.genesisData01.slpData)
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.updateBalanceFromGenesis()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })

  describe('#addReceiverAddress', () => {
    it('should add reciever addresses to database', async () => {
      // Force code to generate new address.
      sandbox.stub(uut.addrDb, 'get').rejects(new Error('not in db'))

      const result = await uut.addReceiverAddress(mockData.genesisData01)
      // console.log('result: ', result)

      assert.equal(result.utxos.length, 1)
      assert.equal(result.txs.length, 1)
      assert.equal(result.balances.length, 1)
    })

    // Corner case based on TXID:
    // 8a2aa5bb691a0ba15cce0d2a5b4aade6f43d39e10dc0a10d89dd6e7938a10c63
    it('should handle corner case', async () => {
      // Force code to generate new address.
      sandbox.stub(uut.addrDb, 'get').rejects(new Error('not in db'))

      // Force corner case by deleting scriptPubKey.
      delete mockData.genesisData01.txData.vout[1].scriptPubKey

      const result = await uut.addReceiverAddress(mockData.genesisData01)
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.addReceiverAddress()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })

  describe('#addBatonAddress', () => {
    it('should add baton address to DB', async () => {
      // Force code to generate new address.
      sandbox.stub(uut.addrDb, 'get').rejects(new Error('not in db'))

      const result = await uut.addBatonAddress(mockData.genesisData01)
      // console.log('result: ', result)

      assert.equal(result.utxos.length, 1)
      assert.equal(result.txs.length, 1)
      assert.equal(result.balances.length, 0)
    })

    it('should exit if mint baton is dead-ended', async () => {
      // Force mint baton to be null.
      mockData.genesisData01.slpData.mintBatonVout = null

      const result = await uut.addBatonAddress(mockData.genesisData01)
      // console.log('result: ', result)

      assert.equal(result, undefined)
    })

    it('should handle corner-case of mint vout = 1', async () => {
      // Force mint baton to be null.
      mockData.genesisData01.slpData.mintBatonVout = 1

      const result = await uut.addBatonAddress(mockData.genesisData01)
      // console.log('result: ', result)

      assert.equal(result, undefined)
    })

    it('should handle corner-case of mint vout does not exist', async () => {
      // Force mint baton to be null.
      mockData.genesisData01.slpData.mintBatonVout = 10

      const result = await uut.addBatonAddress(mockData.genesisData01)
      // console.log('result: ', result)

      assert.equal(result, undefined)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.addBatonAddress()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })

  describe('#processTx', () => {
    it('should execute lower functions', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'addTokenToDB').resolves()
      sandbox.stub(uut, 'addReceiverAddress').resolves()
      sandbox.stub(uut, 'addBatonAddress').resolves()

      const result = await uut.processTx(mockData.genesisData01)
      assert.equal(result, true)
    })

    it('should catch and throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut, 'addTokenToDB').rejects(new Error('test error'))

        await uut.processTx(mockData.genesisData01)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'test error')
      }
    })
  })
})
