/*
  Unit tests for the zmq.js library
*/

const assert = require('chai').assert
const sinon = require('sinon')

const ZMQ = require('../../../../../src/adapters/slp-indexer/lib/zmq')
const mockData = require('../../../mocks/zmq-mocks')

describe('#zmq.js', () => {
  let uut, sandbox

  beforeEach(() => {
    uut = new ZMQ()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    uut.disconnect() // Ensure the socket is disconnected.

    sandbox.restore()
  })

  describe('#connect', () => {
    it('should initialize a connection', async () => {
      // Mock network calls.
      sandbox.stub(uut.sock, 'connect').returns()
      sandbox.stub(uut.sock, 'subscribe').returns()
      sandbox.stub(uut.sock, 'on').returns()

      const result = await uut.connect()

      assert.equal(result, true)
    })

    it('should catch and throw an error', async () => {
      try {
        // Force and error
        sandbox.stub(uut.sock, 'connect').throws(new Error('test error'))

        await uut.connect()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'test error')
      }
    })
  })

  describe('#decodeMsg', () => {
    it('should decode an SLP transaction', () => {
      // Assert that the TX queue is empty at the start of the test.
      assert.equal(uut.txQueue.length, 0)

      const topic = Buffer.from(mockData.topic01, 'hex')
      const message = Buffer.from(mockData.msg01, 'hex')

      const result = uut.decodeMsg(topic, message)

      assert.equal(result, true)

      // Assert that the queue now has a transaction in it.
      assert.equal(uut.txQueue.length, 1)
    })
  })

  describe('#getTx', () => {
    it('should return false if the queue is empty', () => {
      const result = uut.getTx()
      // console.log('result: ', result)

      assert.equal(result, false)
    })

    it('should return the oldest element in the queue', () => {
      uut.txQueue.push('a')
      uut.txQueue.push('b')
      uut.txQueue.push('c')

      const result = uut.getTx()

      assert.equal(result, 'a')
    })
  })

  describe('#getBlock', () => {
    it('should return false if the queue is empty', () => {
      const result = uut.getBlock()
      // console.log('result: ', result)

      assert.equal(result, false)
    })

    it('should return the oldest element in the queue', () => {
      uut.blockQueue.push('a')
      uut.blockQueue.push('b')
      uut.blockQueue.push('c')

      const result = uut.getBlock()

      assert.equal(result, 'a')
    })
  })
})
