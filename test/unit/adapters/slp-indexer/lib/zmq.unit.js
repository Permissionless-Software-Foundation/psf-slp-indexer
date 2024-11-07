/*
  Unit tests for the zmq.js library
*/

import { assert } from 'chai'
import sinon from 'sinon'

import ZMQ from '../../../../../src/adapters/slp-indexer/lib/zmq.js'
import mockData from '../../../mocks/zmq-mocks.js'

describe('#zmq.js', () => {
  let uut, sandbox

  beforeEach(() => {
    uut = new ZMQ()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    // uut.disconnect() // Ensure the socket is disconnected.

    sandbox.restore()
  })

  describe('#connect', () => {
    it('should initialize a connection', async () => {
      console.log('uut.sock: ', uut.sock)

      // Mock network calls.
      uut.sock = {
        connect: () => {},
        subscribe: () => {}
      }
      sandbox.stub(uut, 'monitorZmq').returns()

      const result = await uut.connect()

      assert.equal(result, true)
    })

    it('should catch and throw an error', async () => {
      try {
        // Force and error
        uut.sock = {
          connect: () => { throw new Error('test error') }
        }

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

    it('should decode a new block', () => {
      // Assert that the TX queue is empty at the start of the test.
      assert.equal(uut.txQueue.length, 0)

      const topic = Buffer.from(mockData.blockTopic, 'hex')
      const message = Buffer.from(mockData.blockMsg, 'hex')

      const result = uut.decodeMsg(topic, message)

      assert.equal(result, true)

      // Assert that the queue now has a transaction in it.
      assert.equal(uut.blockQueue.length, 1)
    })

    it('should catch errors and return false', async () => {
      const topic = Buffer.from(mockData.topic01, 'hex')
      const message = Buffer.from(mockData.msg01, 'hex')

      // Force an error
      sandbox.stub(uut.bchZmqDecoder, 'decodeTransaction').throws(new Error('test error'))

      const result = uut.decodeMsg(topic, message)

      assert.equal(result, false)
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
