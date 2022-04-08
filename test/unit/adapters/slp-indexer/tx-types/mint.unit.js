/*
  Unit tests for GENESIS tx indexing library genesis.js
*/

// Public npm libraries
const assert = require('chai').assert
const sinon = require('sinon')
const cloneDeep = require('lodash.clonedeep')
const BigNumber = require('bignumber.js')

// Local libraries
const Mint = require('../../../../../src/adapters/slp-indexer/tx-types/mint')
const Cache = require('../../../../../src/adapters/slp-indexer/lib/cache')
const MockLevel = require('../../../../unit/mocks/leveldb-mock')
const mockDataLib = require('../../../../unit/mocks/mint-mock')

describe('#mint.js', () => {
  let uut, sandbox, mockData

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

    mockData = cloneDeep(mockDataLib)

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw error if cache is not passed in', () => {
      try {
        uut = new Mint()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Must pass cache instance when instantiating mint.js')
      }
    })

    it('should throw error if address DB is not passed in', () => {
      try {
        const txDb = new MockLevel()
        const cache = new Cache({ txDb })

        uut = new Mint({ cache })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Must pass address DB instance when instantiating mint.js')
      }
    })

    it('should throw error if token DB is not passed in', () => {
      try {
        const txDb = new MockLevel()
        const cache = new Cache({ txDb })
        const addrDb = new MockLevel()

        uut = new Mint({ cache, addrDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Must pass token DB instance when instantiating mint.js')
      }
    })

    it('should throw error if transaction DB is not passed in', () => {
      try {
        const txDb = new MockLevel()
        const cache = new Cache({ txDb })
        const addrDb = new MockLevel()
        const tokenDb = new MockLevel()

        uut = new Mint({ cache, addrDb, tokenDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Must pass transaction DB instance when instantiating mint.js')
      }
    })

    it('should throw error if utxo DB is not passed in', () => {
      try {
        const txDb = new MockLevel()
        const cache = new Cache({ txDb })
        const addrDb = new MockLevel()
        const tokenDb = new MockLevel()

        uut = new Mint({ cache, addrDb, tokenDb, txDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Must pass utxo DB instance when instantiating mint.js')
      }
    })
  })

  describe('#removeBatonInAddr', () => {
    it('should remove mint baton from input address', async () => {
      // Mock database
      sandbox.stub(uut.addrDb, 'get')
      // First call should throw an error
        .onCall(0).rejects(new Error('not found'))
      // Second call returns baton input data.
        .onCall(1).resolves(mockData.mintAddrDb01)

      const result = await uut.removeBatonInAddr(mockData.mintData)

      assert.equal(result, true)
    })

    it('should throw error if baton is not found', async () => {
      try {
      // Change the token ID of the mock data, to force the desired code path.
        mockData.mintAddrDb01.utxos[0].txid = 'fake-txid'

        // Mock database
        sandbox.stub(uut.addrDb, 'get')
        // First call should throw an error
          .onCall(0).rejects(new Error('not found'))
        // Second call returns baton input data.
          .onCall(1).resolves(mockData.mintAddrDb01)

        await uut.removeBatonInAddr(mockData.mintData)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Minting baton not found. UTXO is not in database.')
      }
    })
  })

  describe('#addTokensFromOutput', () => {
    it('should update address balance with newly minted tokens', async () => {
      // Force generation of a new address
      sandbox.stub(uut.addrDb, 'get').rejects(new Error('not found'))

      const result = await uut.addTokensFromOutput(mockData.mintData)
      assert.equal(result, true)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.addTokensFromOutput()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })

  describe('#updateBalanceFromMint', () => {
    it('should add new balances to the address', async () => {
      const result = await uut.updateBalanceFromMint(mockData.mintAddrDb02, mockData.mintData.slpData)
      // console.log(`mockData.mintAddrDb02: ${JSON.stringify(mockData.mintAddrDb02, null, 2)}`)

      assert.equal(result, true)
      assert.equal(mockData.mintAddrDb02.balances[0].qty, '234123')
    })

    it('should add new tokens to existing balance', async () => {
      // Force address to have a balance of a different token
      mockData.mintAddrDb02.balances.push({
        tokenId: 'abc123'
      })
      // Force address to have an existing balance
      mockData.mintAddrDb02.balances.push({
        tokenId: mockData.mintData.slpData.tokenId,
        qty: new BigNumber(10)
      })

      const result = await uut.updateBalanceFromMint(mockData.mintAddrDb02, mockData.mintData.slpData)
      // console.log(`mockData.mintAddrDb02: ${JSON.stringify(mockData.mintAddrDb02, null, 2)}`)

      assert.equal(result, true)
      assert.equal(mockData.mintAddrDb02.balances[1].qty, '234133')
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.updateBalanceFromMint()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })

  describe('#updateTokenStats', () => {
    it('should update token stats', async () => {
      // Simulate token stats in the database
      sandbox.stub(uut.tokenDb, 'get').resolves({
        tokensInCirculationBN: new BigNumber(1),
        tokensInCirculationStr: '1',
        txs: []
      })

      const result = await uut.updateTokenStats(mockData.mintData)
      // console.log('result: ', result)

      assert.equal(result.tokensInCirculationStr, '234124')
      assert.equal(result.mintBatonIsActive, true)
    })

    it('should mark baton as inactive', async () => {
      // Simulate token stats in the database
      sandbox.stub(uut.tokenDb, 'get').resolves({
        tokensInCirculationBN: new BigNumber(1),
        tokensInCirculationStr: '1',
        txs: []
      })

      // Force mint baton to be inactive
      mockData.mintData.slpData.mintBatonVout = 0

      const result = await uut.updateTokenStats(mockData.mintData)
      // console.log('result: ', result)

      assert.equal(result.tokensInCirculationStr, '234124')
      assert.equal(result.mintBatonIsActive, false)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.updateTokenStats()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })

  describe('#addBatonOutAddr', () => {
    it('should add the baton to the output address', async () => {
      // Force generation of a new address
      sandbox.stub(uut.addrDb, 'get').rejects(new Error('not found'))

      const result = await uut.addBatonOutAddr(mockData.mintData)
      // console.log('result: ', result)

      // Assert that the baton was placed in the new output address.
      assert.equal(result.utxos[0].type, 'baton')
    })

    it('should return if the mint baton is null', async () => {
      // Force mint baton to be dead ended.
      mockData.mintData.slpData.mintBatonVout = 0

      const result = await uut.addBatonOutAddr(mockData.mintData)

      assert.equal(result, undefined)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.addBatonOutAddr()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })

  describe('#processTx', () => {
    it('should exit if SLP tx fails DAG validation', async () => {
      // Force DAG validation to fail
      sandbox.stub(uut.dag, 'crawlDag').resolves({ isValid: false })

      const result = await uut.processTx(mockData.mintData)

      assert.equal(result, undefined)
    })

    it('should successfully process Mint TX', async () => {
      // Mock dependencies
      sandbox.stub(uut.dag, 'crawlDag').resolves({ isValid: true })
      sandbox.stub(uut, 'removeBatonInAddr').resolves()
      sandbox.stub(uut, 'addTokensFromOutput').resolves()
      sandbox.stub(uut, 'updateTokenStats').resolves()
      sandbox.stub(uut, 'addBatonOutAddr').resolves()

      const result = await uut.processTx(mockData.mintData)

      assert.equal(result, true)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.processTx()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })

  describe('#findBatonInput', () => {
    it('should return baton vin', () => {
      const result = uut.findBatonInput(mockData.mintData)
      // console.log('result: ', result)

      assert.equal(result, 1)
    })

    it('should return null for invalid mint tx', () => {
      const result = uut.findBatonInput(mockData.invalidMintData01)
      // console.log('result: ', result)

      assert.equal(result, null)
    })
  })
})
