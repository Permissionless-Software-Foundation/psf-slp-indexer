/*
  Unit tests for the utils.js library.
*/

const assert = require('chai').assert
const sinon = require('sinon')

const IndexerUtils = require('../../../../../src/adapters/slp-indexer/lib/utils')

describe('#utils.js', () => {
  let uut, sandbox

  beforeEach(() => {
    uut = new IndexerUtils()

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
        assert.include(err.message, 'Cannot read property')
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
        assert.include(err.message, 'Cannot read property')
      }
    })
  })
})
