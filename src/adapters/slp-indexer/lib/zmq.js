/*
  A library for working with the ZMQ/websocket connection of a full node. This
  is used to get notifications of new mempool transactions and newly mined
  blocks.
*/

// Public npm libraries
import BitcoinCashZmqDecoder from '@psf/bitcoincash-zmq-decoder'
import * as zmq from 'zeromq'

// Local libraries
import config from '../../../../config/index.js'

class ZMQ {
  constructor () {
    // Encapsulate dependencies
    // this.sock = zmq.socket('sub')
    this.sock = new zmq.Subscriber()
    this.bchZmqDecoder = new BitcoinCashZmqDecoder('mainnet')
    this.config = config

    // State
    this.txQueue = []
    this.blockQueue = []

    // Bind 'this' object to subfunctions
    this.connect = this.connect.bind(this)
    this.monitorZmq = this.monitorZmq.bind(this)
    this.disconnect = this.disconnect.bind(this)
    this.decodeMsg = this.decodeMsg.bind(this)
    this.getTx = this.getTx.bind(this)
    this.getBlock = this.getBlock.bind(this)
  }

  // Connect to the ZMQ port of the full node.
  async connect () {
    try {
      this.sock.connect(`tcp://${this.config.rpcIp}:${this.config.zmqPort}`)
      this.sock.subscribe('raw')

      // Send incoming messages to the decodeMsg() function.
      // this.sock.on('message', this.decodeMsg)

      // Do not await. Fire and forget.
      this.monitorZmq()

      // Return true to signal that the function has completed successfully.
      return true
    } catch (err) {
      console.error('Error in zmq.js/connect()')
      throw err
    }
  }

  async monitorZmq () {
    try {
      for await (const [topic, msg] of this.sock) {
        // console.log(
        //   "received a message related to:",
        //   topic,
        //   "containing message:",
        //   msg,
        // )

        this.decodeMsg(topic, msg)
      }
    } catch (err) {
      console.error('Error in zmq.js/monitorZmq()')
      throw err
    }
  }

  disconnect () {
    // this.sock.disconnect(`tcp://${this.config.rpcIp}:${this.config.zmqPort}`)
    this.sock.close()
  }

  // Decode message coming through ZMQ connection.
  decodeMsg (topic, message) {
    try {
      // console.log('topic: ', topic)

      const decoded = topic.toString('ascii')
      // console.log('decoded topic: ', decoded)

      if (decoded === 'rawtx') {
        // Process new transactions.

        const txd = this.bchZmqDecoder.decodeTransaction(message)
        // console.log(`txd: ${JSON.stringify(txd, null, 2)}`)
        // console.log(`txd.format.txid: ${txd.format.txid}`)
        this.txQueue.push(txd.format.txid)
        // console.log(`txQueue length: ${this.txQueue.length}`)
      } else if (decoded === 'rawblock') {
        // Process new blocks

        const blk = this.bchZmqDecoder.decodeBlock(message)
        console.log(`blk: ${JSON.stringify(blk, null, 2)}`)
        this.blockQueue.push(blk)
      }

      return true
    } catch (err) {
      console.error('Error in decodeMsg: ', err)

      // This is a top-level function. Do not throw an error.
      return false
    }
  }

  // Get the next TX in the queue
  getTx () {
    // console.log(`this.txQueue.length: ${this.txQueue.length}`)
    let nextTx = this.txQueue.shift()
    // console.log(`nextTx: ${JSON.stringify(nextTx, null, 2)}`)

    if (nextTx === undefined) nextTx = false

    return nextTx
  }

  // Get the next block in the queue
  getBlock () {
    // console.log(`this.blockQueue.length: ${this.blockQueue.length}`)
    let nextBlock = this.blockQueue.shift()

    if (nextBlock === undefined) nextBlock = false

    return nextBlock
  }
}

// module.exports = ZMQ
export default ZMQ
