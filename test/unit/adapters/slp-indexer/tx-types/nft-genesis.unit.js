/*
  Unit tests for NFT GENESIS tx indexing library nft-genesis.js
*/

// Public npm libraries
const assert = require('chai').assert
const sinon = require('sinon')
const cloneDeep = require('lodash.clonedeep')
const BigNumber = require('bignumber.js')

// Local libraries
const NftGenesis = require('../../../../../src/adapters/slp-indexer/tx-types/nft-genesis')
const MockLevel = require('../../../../unit/mocks/leveldb-mock')
const mockDataLib = require('../../../../unit/mocks/nft-genesis-mock')
const Cache = require('../../../../../src/adapters/slp-indexer/lib/cache')

describe('#nft-genesis.js', () => {
  let uut, sandbox, mockData

  beforeEach(() => {
    const addrDb = new MockLevel()
    const tokenDb = new MockLevel()
    const utxoDb = new MockLevel()
    const txDb = new MockLevel()

    const cache = new Cache({ txDb })

    uut = new NftGenesis({ addrDb, tokenDb, utxoDb, cache, txDb })

    mockData = cloneDeep(mockDataLib)

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw error if address DB is not passed in', () => {
      try {
        uut = new NftGenesis()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Instance of address DB required when instantiating nft-genesis.js')
      }
    })

    it('should throw error if token DB is not passed in', () => {
      try {
        const addrDb = new MockLevel()

        uut = new NftGenesis({ addrDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Instance of token DB required when instantiating nft-genesis.js')
      }
    })

    it('should throw error if utxo DB is not passed in', () => {
      try {
        const addrDb = new MockLevel()
        const tokenDb = new MockLevel()

        uut = new NftGenesis({ addrDb, tokenDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Instance of utxo DB required when instantiating nft-genesis.js')
      }
    })

    it('should throw error if cache is not passed in', () => {
      try {
        const addrDb = new MockLevel()
        const tokenDb = new MockLevel()
        const utxoDb = new MockLevel()

        uut = new NftGenesis({ addrDb, tokenDb, utxoDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Must pass cache instance when instantiating nft-genesis.js')
      }
    })

    it('should throw error if tx DB is not passed in', () => {
      try {
        const addrDb = new MockLevel()
        const tokenDb = new MockLevel()
        const utxoDb = new MockLevel()
        const txDb = new MockLevel()
        const cache = new Cache({ txDb })

        uut = new NftGenesis({ addrDb, tokenDb, utxoDb, cache })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Must pass transaction DB instance when instantiating nft-genesis.js')
      }
    })
  })

  describe('#validateInputs', () => {
    it('should return true for valid transaction', async () => {
      // Mock dependencies
      sandbox.stub(uut.cache, 'get').resolves(mockData.groupTx01)

      const data = {
        txData: mockData.nftGenesisTx01
      }

      const result = await uut.validateInputs(data)
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should return false if vin[0] does not include a Group token', async () => {
      // Force code path
      mockData.nftGenesisTx01.vin[0].tokenQty = 0

      const data = {
        txData: mockData.nftGenesisTx01
      }

      const result = await uut.validateInputs(data)
      // console.log('result: ', result)

      assert.equal(result, false)
    })

    it('should return false if vin[0] does not include a Group token', async () => {
      // Force code path
      mockData.groupTx01.tokenType = 1
      sandbox.stub(uut.cache, 'get').resolves(mockData.groupTx01)

      const data = {
        txData: mockData.nftGenesisTx01
      }

      const result = await uut.validateInputs(data)
      // console.log('result: ', result)

      assert.equal(result, false)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.validateInputs()

        assert.fail('Unexpected code result')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot destructure')
      }
    })
  })

  describe('#subtractBalanceFromSend', () => {
    it('should subtract a balance from an address object', () => {
      let result = uut.subtractBalanceFromSend(
        mockData.addrData01,
        mockData.utxo01
      )
      result = result.toString()
      // console.log('result: ', result)

      assert.equal(result, '234123')
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.subtractBalanceFromSend()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })

  describe('#subtractTokensFromInputAddr', () => {
    it('should subtract tokens from the input address', async () => {
      // Force database to return previous address data
      sandbox.stub(uut.addrDb, 'get').resolves(mockData.addrData02)

      const data = {
        txData: mockData.nftGenesisTx01,
        blockHeight: 730295
      }

      const { spentBN, groupTokenId } = await uut.subtractTokensFromInputAddr(data)
      // result = result.toString()
      // console.log('groupTokenId: ', groupTokenId)

      assert.equal(spentBN.toString(), '5')
      assert.equal(groupTokenId, '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59')
    })

    it('should throw an error if there are no UTXOs to delete', async () => {
      try {
        // Force DAG validation to succeed
        // sandbox.stub(uut.dag, 'crawlDag').resolves({ isValid: true })

        // Force UTXO to fail filter
        mockData.addrData02.utxos[0].txid = 'bad-txid'

        // Force database to return previous address data
        sandbox.stub(uut.addrDb, 'get').resolves(mockData.addrData02)

        const data = {
          txData: mockData.nftGenesisTx01,
          blockHeight: 730295
        }

        await uut.subtractTokensFromInputAddr(data)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Input UTXO with TXID')
      }
    })

    it('should throw error if NFT does not have Group token as input', async () => {
      try {
        // Force error
        mockData.nftGenesisTx01.vin[0].tokenQty = 0

        const data = {
          txData: mockData.nftGenesisTx01,
          blockHeight: 730295
        }

        await uut.subtractTokensFromInputAddr(data)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)

        assert.include(err.message, 'NFT does not have Group token as input.')
      }
    })

    it('should throw an error if utxo can not be found in database', async () => {
      try {
        // Force UTXO to fail filter
        const badAddrData = cloneDeep(mockData.addrData02)
        badAddrData.utxos[0].txid = 'bad-txid'

        // Mock response from addr database
        sandbox
          .stub(uut.addrDb, 'get')
          .onCall(0)
          .resolves(mockData.addrData02)
          .onCall(1)
          .resolves(badAddrData)

        const data = {
          txData: mockData.nftGenesisTx01,
          blockHeight: 730295
        }

        await uut.subtractTokensFromInputAddr(data)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Could not find UTXO in address')
      }
    })
  })

  describe('#addTokenToDB', () => {
    it('should add a new token to the database', async () => {
      const data = {
        slpData: mockData.slpData01,
        blockHeight: 730295
      }

      const result = await uut.addTokenToDB(data)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that expected values exist.
      assert.equal(result.decimals, 0)
      assert.equal(result.mintBatonIsActive, false)
      assert.equal(result.blockCreated, 730295)
      assert.equal(result.totalBurned, 0)
      assert.equal(result.totalMinted, 1)
      assert.equal(result.tokensInCirculationStr, '1')
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
  })

  describe('#updateBalanceFromGenesis', () => {
    it('should update addr object', () => {
      // Convert slpData to BigNumber
      mockData.slpData01.qty = new BigNumber(mockData.slpData01.qty)

      const result = uut.updateBalanceFromGenesis(mockData.addrData02, mockData.slpData01)
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

      const data = {
        slpData: mockData.slpData01,
        blockHeight: 730295,
        txData: mockData.nftGenesisTx01
      }

      const result = await uut.addReceiverAddress(data)
      // console.log('result: ', result)

      assert.equal(result.utxos.length, 1)
      assert.equal(result.txs.length, 1)
      assert.equal(result.balances.length, 1)
    })

    //   // Corner case based on TXID:
    //   // 8a2aa5bb691a0ba15cce0d2a5b4aade6f43d39e10dc0a10d89dd6e7938a10c63
    //   it('should handle corner case', async () => {
    //     // Force code to generate new address.
    //     sandbox.stub(uut.addrDb, 'get').rejects(new Error('not in db'))
    //
    //     // Force corner case by deleting scriptPubKey.
    //     delete mockData.genesisData01.txData.vout[1].scriptPubKey
    //
    //     const result = await uut.addReceiverAddress(mockData.genesisData01)
    //     // console.log('result: ', result)
    //
    //     assert.equal(result, true)
    //   })

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

  describe('#processTx', () => {
    it('should execute lower functions', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'validateInputs').resolves(true)
      sandbox.stub(uut, 'subtractTokensFromInputAddr').resolves({ spentBN: '1', groupTokenId: 'fakeId' })
      sandbox.stub(uut, 'addTokenToDB').resolves()
      sandbox.stub(uut, 'addReceiverAddress').resolves()

      const data = {
        slpData: mockData.slpData01,
        blockHeight: 730295,
        txData: mockData.nftGenesisTx01
      }

      const result = await uut.processTx(data)

      assert.equal(result, true)
    })

    it('should return false for invalid tx inputs', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'validateInputs').resolves(false)

      const data = {
        slpData: mockData.slpData01,
        blockHeight: 730295,
        txData: mockData.nftGenesisTx01
      }

      const result = await uut.processTx(data)

      assert.equal(result, false)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.processTx()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })
})
