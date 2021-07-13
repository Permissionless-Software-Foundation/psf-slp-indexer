/*
  Unit tests for the index.js file for the IPFS and ipfs-coord libraries.
*/

const assert = require('chai').assert
const sinon = require('sinon')

const IPFSLib = require('../../../src/adapters/ipfs')
const IPFSMock = require('../mocks/ipfs-mock')
const IPFSCoordMock = require('../mocks/ipfs-coord-mock')

describe('#IPFS-adapter-index', () => {
  let uut
  let sandbox

  beforeEach(() => {
    uut = new IPFSLib()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#start', () => {
    it('should return a promise that resolves into an instance of IPFS.', async () => {
      // Mock dependencies.
      uut.ipfsAdapter = new IPFSMock()
      uut.IpfsCoordAdapter = IPFSCoordMock

      const result = await uut.start()

      assert.equal(result, true)
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        sandbox.stub(uut.ipfsAdapter, 'start').rejects(new Error('test error'))

        await uut.start()

        assert.fail('Unexpected code path.')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'test error')
      }
    })
  })
})
