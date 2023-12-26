/*
  Unit tests for the start-stop.js library
*/

import { assert } from 'chai'
import sinon from 'sinon'

import Query from '../../../../../src/adapters/slp-indexer/lib/query.js'
import MockLevel from '../../../../unit/mocks/leveldb-mock.js'

describe('#query', () => {
  let uut, sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    const addrDb = new MockLevel()
    const tokenDb = new MockLevel()
    const txDb = new MockLevel()
    const statusDb = new MockLevel()
    const pTxDb = new MockLevel()
    const localConfig = { addrDb, tokenDb, txDb, statusDb, pTxDb }

    uut = new Query(localConfig)
  })

  afterEach(() => sandbox.restore())

  describe('#getAddress', () => {
    it('should get an address from the database', async () => {
      sandbox.stub(uut.addrDb, 'get').resolves(true)

      const result = await uut.getAddress('fake-addr')

      assert.equal(result, true)
    })

    it('should throw an error if address is not passed in', async () => {
      try {
        await uut.getAddress()

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.message, 'Address required when calling getAddress()')
      }
    })
  })

  describe('#getTx', () => {
    it('should get a transaction from the database', async () => {
      sandbox.stub(uut.txDb, 'get').resolves(true)

      const result = await uut.getTx('fake-txid')

      assert.equal(result, true)
    })

    it('should throw an error if txid is not passed in', async () => {
      try {
        await uut.getTx()

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.message, 'txid required when calling getTx()')
      }
    })
  })

  describe('#getToken', () => {
    it('should get a token from the database', async () => {
      sandbox.stub(uut.tokenDb, 'get').resolves(true)

      const result = await uut.getToken('fake-token-id')

      assert.equal(result, true)
    })

    it('should throw an error if token ID is not passed in', async () => {
      try {
        await uut.getToken()

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.message, 'tokenId required when calling getToken()')
      }
    })
  })
})
