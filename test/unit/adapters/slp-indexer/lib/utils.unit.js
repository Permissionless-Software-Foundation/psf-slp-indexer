/*
  Unit tests for the utils.js library.
*/

// Global npm libraries
const assert = require('chai').assert
const sinon = require('sinon')
const cloneDeep = require('lodash.clonedeep')

// local libraries
const IndexerUtils = require('../../../../../src/adapters/slp-indexer/lib/utils')
const mockDataLib = require('../../../mocks/utils-mock.js')

describe('#utils.js', () => {
  let uut, sandbox, mockData

  beforeEach(() => {
    uut = new IndexerUtils()

    mockData = cloneDeep(mockDataLib)

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#getNewAddrObj', () => {
    it('should generate a new address object', () => {
      const result = uut.getNewAddrObj()

      assert.isArray(result.utxos)
      assert.isArray(result.txs)
      assert.isArray(result.balances)
    })
  })

  describe('#addTxWithoutDuplicate', () => {
    it('should add a TX to the array', () => {
      const txObj = {
        txid: 'fake-txid'
      }
      const testAry = []

      uut.addTxWithoutDuplicate(txObj, testAry)

      assert.equal(testAry.length, 1)
    })

    it('should not add a duplicte TX to the array', () => {
      const txObj = {
        txid: 'fake-txid'
      }
      const testAry = []

      uut.addTxWithoutDuplicate(txObj, testAry)
      uut.addTxWithoutDuplicate(txObj, testAry)

      assert.equal(testAry.length, 1)
    })

    it('should catch and throw errors', () => {
      try {
        uut.addTxWithoutDuplicate()
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })

  describe('#removeUtxoFromArray', () => {
    it('should remove a UTXO from the array', () => {
      const utxoObj = {
        txid: 'fake-txid',
        vout: 0
      }
      const testArray = []
      testArray.push(utxoObj)

      const result = uut.removeUtxoFromArray(utxoObj, testArray)

      assert.equal(result.length, 0)
    })

    it('should catch and throw errors', () => {
      try {
        uut.removeUtxoFromArray()
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })

  describe('#subtractUtxoBalance', () => {
    it('should subtract the UTXO balance from the address balance with a single token', () => {
      const utxo = mockData.balance01.utxos[0]
      const balancesArray = mockData.balance01.balances
      const tokenId = 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2'

      const result = uut.subtractUtxoBalance(utxo, balancesArray, tokenId)
      // console.log('result: ', result)

      assert.isArray(result)
      assert.equal(result.length, 0)
    })

    it('should subtract the UTXO balance from the address balance with multiple tokens', () => {
      const utxo = mockData.balance01.utxos[0]
      const tokenId = 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2'

      const balancesArray = mockData.balance01.balances
      balancesArray.unshift({ tokenId: 'abc', qty: 4 })
      balancesArray.push({ tokenId: 'xyz', qty: 5 })

      const result = uut.subtractUtxoBalance(utxo, balancesArray, tokenId)
      // console.log('result: ', result)

      assert.isArray(result)
      assert.equal(result.length, 2)
    })

    it('should subtract the UTXO balance from a balance with a larger quantity than the utxo', () => {
      const utxo = mockData.balance01.utxos[0]
      const balancesArray = mockData.balance01.balances
      const tokenId = 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2'

      // Force balance to be larger than the utxo.
      balancesArray[0].qty = '19900'

      const result = uut.subtractUtxoBalance(utxo, balancesArray, tokenId)
      // console.log('result: ', result)

      assert.isArray(result)
      assert.equal(result.length, 1)
      assert.equal(result[0].qty, '10000')
    })
  })

  describe('#subtractBurnedTokens', () => {
    it('should updated token info with burned token data', () => {
      const utxoObj = mockData.balance01.utxos[0]
      const tokenData = mockData.tokenData01

      const result = uut.subtractBurnedTokens(utxoObj, tokenData)
      // console.log('result: ', result)

      assert.equal(result.tokensInCirculationStr, '10100')
      assert.equal(result.totalBurned, '9900')
    })
  })
})
