/*
  Unit tests for GENESIS tx indexing library genesis.js
*/

// Public npm libraries
const assert = require('chai').assert
const sinon = require('sinon')
const cloneDeep = require('lodash.clonedeep')
const BigNumber = require('bignumber.js')

// Local libraries
const Send = require('../../../../../src/adapters/slp-indexer/tx-types/send')
const Cache = require('../../../../../src/adapters/slp-indexer/lib/cache')
const MockLevel = require('../../../../unit/mocks/leveldb-mock')
const mockDataLib = require('../../../../unit/mocks/send-mock')

describe('#send.js', () => {
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

    uut = new Send({ cache, addrDb, tokenDb, txDb, utxoDb })

    mockData = cloneDeep(mockDataLib)

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw error if cache is not passed in', () => {
      try {
        uut = new Send()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(
          err.message,
          'Must pass cache instance when instantiating send.js'
        )
      }
    })

    it('should throw error if address DB is not passed in', () => {
      try {
        const txDb = new MockLevel()
        const cache = new Cache({ txDb })

        uut = new Send({ cache })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(
          err.message,
          'Must pass address DB instance when instantiating send.js'
        )
      }
    })

    it('should throw error if token DB is not passed in', () => {
      try {
        const txDb = new MockLevel()
        const cache = new Cache({ txDb })
        const addrDb = new MockLevel()

        uut = new Send({ cache, addrDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(
          err.message,
          'Must pass token DB instance when instantiating send.js'
        )
      }
    })

    it('should throw error if transaction DB is not passed in', () => {
      try {
        const txDb = new MockLevel()
        const cache = new Cache({ txDb })
        const addrDb = new MockLevel()
        const tokenDb = new MockLevel()

        uut = new Send({ cache, addrDb, tokenDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(
          err.message,
          'Must pass transaction DB instance when instantiating send.js'
        )
      }
    })

    it('should throw error if utxo DB is not passed in', () => {
      try {
        const txDb = new MockLevel()
        const cache = new Cache({ txDb })
        const addrDb = new MockLevel()
        const tokenDb = new MockLevel()

        uut = new Send({ cache, addrDb, tokenDb, txDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(
          err.message,
          'Must pass utxo DB instance when instantiating send.js'
        )
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
      // Force DAG validation to succeed
      sandbox.stub(uut.dag, 'crawlDag').resolves({ isValid: true })

      // Force database to return previous address data
      sandbox.stub(uut.addrDb, 'get').resolves(mockData.addrData01)

      let result = await uut.subtractTokensFromInputAddr(mockData.sendData01)
      result = result.toString()
      // console.log('result: ', result)

      assert.equal(result, '234123')
    })

    it('should skip inputs without a matching token ID', async () => {
      // Force input token ID to be different
      mockData.sendData01.txData.vin[1].tokenId = 'fake-token-id'

      let result = await uut.subtractTokensFromInputAddr(mockData.sendData01)
      result = result.toString()
      // console.log('result: ', result)

      assert.equal(result, '0')
    })

    it('should mark token qty as 0 if input fails DAG validation', async () => {
      // Force DAG validation to fail
      sandbox.stub(uut.dag, 'crawlDag').resolves({ isValid: false })

      const result = await uut.subtractTokensFromInputAddr(mockData.sendData01)
      console.log('result: ', result)
    })

    it('should throw an error if there are no UTXOs to delete', async () => {
      try {
        // Force DAG validation to succeed
        sandbox.stub(uut.dag, 'crawlDag').resolves({ isValid: true })

        // Force UTXO to fail filter
        mockData.addrData01.utxos[0].txid = 'bad-txid'

        // Force database to return previous address data
        sandbox.stub(uut.addrDb, 'get').resolves(mockData.addrData01)

        await uut.subtractTokensFromInputAddr(mockData.sendData01)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Input UTXO with TXID')
      }
    })

    it('should throw an error if utxo can not be found in database', async () => {
      try {
        // Force DAG validation to succeed
        sandbox.stub(uut.dag, 'crawlDag').resolves({ isValid: true })

        // Force UTXO to fail filter
        const badAddrData = cloneDeep(mockData.addrData01)
        badAddrData.utxos[0].txid = 'bad-txid'

        // Mock response from addr database
        sandbox
          .stub(uut.addrDb, 'get')
          .onCall(0)
          .resolves(mockData.addrData01)
          .onCall(1)
          .resolves(badAddrData)

        await uut.subtractTokensFromInputAddr(mockData.sendData01)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Could not find UTXO in address')
      }
    })

    // This test comes from real-world data and a bug where it was noticed that
    // send after genesis was not properly deleting the original UTXO.
    it('should subtract tokens using real-world data', async () => {
      // Force DAG validation to succeed
      sandbox.stub(uut.dag, 'crawlDag').resolves({ isValid: true })

      // Force database to return previous address data
      sandbox.stub(uut.addrDb, 'get').resolves(mockData.addrData02)

      let result = await uut.subtractTokensFromInputAddr(mockData.sendData02)
      result = result.toString()
      // console.log('result: ', result)

      assert.equal(result, '0')
    })
  })

  describe('#addUtxoToOutputAddr', () => {
    it('should return a new UTXO', async () => {
      const recvrAddr = 'bitcoincash:qqzewa0ljnm9cp8g56z8ua8tnqya3nthnvhv5hpu8y'
      const voutIndex = 1
      const slpAmountStr = '4354768657'
      const result = await uut.addUtxoToOutputAddr(
        mockData.sendData01,
        recvrAddr,
        voutIndex,
        slpAmountStr
      )
      // console.log('result: ', result)

      assert.hasAllKeys(result, [
        'txid',
        'vout',
        'type',
        'qty',
        'tokenId',
        'address',
        'tokenType',
        'value',
        'decimals',
        'effectiveQty'
      ])
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.addUtxoToOutputAddr()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })

  describe('#updateBalanceFromSend', () => {
    it('should update the balance of an address', () => {
      const startVal = parseInt(mockData.addrData01.balances[0].qty.toString())

      // console.log(`starting mockData.addrData01: ${JSON.stringify(mockData.addrData01, null, 2)}`)
      let result = uut.updateBalanceFromSend(
        mockData.addrData01,
        mockData.sendData01.slpData,
        0
      )
      result = result.toString()
      // console.log('result: ', result)

      const endVal = parseInt(mockData.addrData01.balances[0].qty.toString())

      assert.equal(result, '4354768657')

      // Assert that the balance of the address is greater after the function
      // completes.
      assert.isAbove(endVal, startVal)
    })

    it('should add new balance if token does not exist in address', () => {
      // Force existing balance to be for a different token
      mockData.addrData01.balances[0].tokenId = 'other-token'

      let result = uut.updateBalanceFromSend(
        mockData.addrData01,
        mockData.sendData01.slpData,
        0
      )
      result = result.toString()
      // console.log('result: ', result)

      assert.equal(result, '4354768657')

      // console.log(`addrData: ${JSON.stringify(mockData.addrData01, null, 2)}`)
      assert.equal(mockData.addrData01.balances[0].qty, '234123')
      assert.equal(mockData.addrData01.balances[1].qty, '4354768657')
    })

    it('should ignore existing tokens', () => {
      // Add different token to starting balance
      mockData.addrData01.balances.unshift({
        tokenId: 'other-token',
        qty: new BigNumber('10000')
      })

      let result = uut.updateBalanceFromSend(
        mockData.addrData01,
        mockData.sendData01.slpData,
        0
      )
      result = result.toString()
      // console.log('result: ', result)

      assert.equal(result, '4354768657')

      // console.log(`addrData: ${JSON.stringify(mockData.addrData01, null, 2)}`)
      assert.equal(mockData.addrData01.balances[0].qty, '10000')
      assert.equal(mockData.addrData01.balances[1].qty, '4355002780')
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.updateBalanceFromSend()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })

  describe('#updateOutputAddr', () => {
    it('should update the output address', async () => {
      // Force creation of new address object
      sandbox.stub(uut.addrDb, 'get').rejects(new Error('not found'))

      let result = await uut.updateOutputAddr(mockData.sendData01, 1)
      result = result.toString()
      // console.log('result: ', result)

      assert.equal(result, '4354768657')
    })

    it('should handle corner-case where scriptPubKey does not exist', async () => {
      // Force corner case
      delete mockData.sendData01.txData.vout[1].scriptPubKey

      const result = await uut.updateOutputAddr(mockData.sendData01, 1)
      // console.log('result: ', result)

      assert.equal(result, undefined)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.updateOutputAddr()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })

  describe('#addTokensFromOutput', () => {
    it('should add tokens to output address', async () => {
      // Force creation of new address object
      sandbox.stub(uut.addrDb, 'get').rejects(new Error('not found'))

      let result = await uut.addTokensFromOutput(mockData.sendData01)
      result = result.toString()
      // console.log('result: ', result)

      assert.equal(result, '4354768657')
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

  describe('#processTx', () => {
    it('should process SEND data', async () => {
      // Mock dependencies
      sandbox.stub(uut.dag, 'crawlDag').resolves({ isValid: true })
      sandbox
        .stub(uut, 'subtractTokensFromInputAddr')
        .resolves(new BigNumber(10))
      sandbox.stub(uut, 'addTokensFromOutput').resolves(new BigNumber(10))
      sandbox.stub(uut, 'processControlledBurn').resolves(new BigNumber(0))
      sandbox.stub(uut, 'updateTokenStats').resolves()

      const result = await uut.processTx(mockData.sendData01)
      console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should mark tx as invalid if it fails DAG validation', async () => {
      // Mock dependencies
      sandbox.stub(uut.dag, 'crawlDag').resolves({ isValid: false })

      const result = await uut.processTx(mockData.sendData01)
      // console.log('result: ', result)

      assert.equal(result, undefined)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.processTx()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })

  describe('#processControlledBurn', () => {
    it('should detect a burn and update token stats', async () => {
      // Mock data
      const tokenData = {
        tokensInCirculationBN: new BigNumber(10000),
        totalBurned: new BigNumber(0)
      }

      // Mock databases
      sandbox.stub(uut.tokenDb, 'get').resolves(tokenData)
      sandbox.stub(uut.tokenDb, 'put').resolves()

      const spentBN = new BigNumber(1000)
      const sentBN = new BigNumber(900)

      const result = await uut.processControlledBurn(
        spentBN,
        sentBN,
        mockData.sendData01
      )
      // console.log('result: ', result.toString())

      assert.equal(result.toString(), '100')
      assert.equal(tokenData.totalBurned.toString(), '100')
    })

    it('should catch and throw an error', async () => {
      try {
        await uut.processControlledBurn()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })

  describe('#updateTokenStats', () => {
    it('should update token stats with a normal send', async () => {
      // Mock data
      const tokenData = {
        tokensInCirculationBN: new BigNumber(10000),
        totalBurned: new BigNumber(0),
        txs: []
      }

      // Mock databases
      sandbox.stub(uut.tokenDb, 'get').resolves(tokenData)
      sandbox.stub(uut.tokenDb, 'put').resolves()

      const diffBN = new BigNumber(0)
      const sentBN = new BigNumber(1000)
      const spentBN = new BigNumber(1000)

      const result = await uut.updateTokenStats(
        mockData.sendData01,
        diffBN,
        spentBN,
        sentBN
      )
      // console.log('result: ', result)

      // Assert expected values
      assert.equal(result.txs[0].type, 'SEND')
      assert.equal(result.txs[0].qty, '1000')
    })

    it('should update token stats with a controlled burn', async () => {
      // Mock data
      const tokenData = {
        tokensInCirculationBN: new BigNumber(10000),
        totalBurned: new BigNumber(100),
        txs: []
      }

      // Mock databases
      sandbox.stub(uut.tokenDb, 'get').resolves(tokenData)
      sandbox.stub(uut.tokenDb, 'put').resolves()

      const diffBN = new BigNumber(100)
      const spentBN = new BigNumber(1100)
      const sentBN = new BigNumber(1000)

      const result = await uut.updateTokenStats(
        mockData.sendData01,
        diffBN,
        spentBN,
        sentBN
      )
      // console.log('result: ', result)

      // Assert expected values
      assert.equal(result.txs[0].type, 'SEND-BURN')
      assert.equal(result.txs[0].qty, '1000')
      assert.equal(result.txs[0].burned, '100')
    })
  })

  describe('#reverseAddTokenFromOutput', () => {
    // This test uses the txid of a token tx that spent more outputs than inputs,
    // which results in a complete burn.
    it('should delete database entries', async () => {
      // Mock dependencies
      sandbox
        .stub(uut.addrDb, 'get')
        .onCall(0)
        .resolves(mockData.greaterOutputAddr01)
        .onCall(1)
        .resolves(mockData.greaterOutputAddr02)
      sandbox.stub(uut, 'subtractBalanceFromSend').resolves(new BigNumber(10))

      const data = mockData.greaterOutputBurn

      const result = await uut.reverseAddTokenFromOutput(data)
      // console.log('result: ', result.toString())

      assert.equal(result.toString(), '20')
    })
  })
})
