/*
  A library for working with the ZMQ/websocket connection of a full node. This
  is used to get notifications of new mempool transactions and newly mined
  blocks.
*/

// Public npm libraries
const BitcoinCashZmqDecoder = require('@psf/bitcoincash-zmq-decoder')
const zmq = require('zeromq')

// Local libraries
const config = require('../../../../config')

let _this

class ZMQ {
  constructor () {
    // Encapsulate dependencies
    this.sock = zmq.socket('sub')
    this.bchZmqDecoder = new BitcoinCashZmqDecoder('mainnet')
    this.config = config

    // State
    this.txQueue = []
    this.blockQueue = []

    _this = this
  }

  // Connect to the ZMQ port of the full node.
  async connect () {
    try {
      this.sock.connect(`tcp://${this.config.rpcIp}:${this.config.zmqPort}`)
      this.sock.subscribe('raw')

      // Send incoming messages to the decodeMsg() function.
      this.sock.on('message', this.decodeMsg)

      // Return true to signal that the function has completed successfully.
      return true
    } catch (err) {
      console.error('Error in zmq.js/connect()')
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
      const decoded = topic.toString('ascii')
      // console.log('decoded message: ', decoded)

      if (decoded === 'rawtx') {
        // Process new transactions.

        const txd = _this.bchZmqDecoder.decodeTransaction(message)
        // console.log(`txd: ${JSON.stringify(txd, null, 2)}`)
        // console.log(`txd.format.txid: ${txd.format.txid}`)
        _this.txQueue.push(txd.format.txid)
      } else if (decoded === 'rawblock') {
        // Process new blocks

        const blk = _this.bchZmqDecoder.decodeBlock(message)
        console.log(`blk: ${JSON.stringify(blk, null, 2)}`)
        _this.blockQueue.push(blk)
      }

      return true
    } catch (err) {
      console.error('Error in decodeMsg: ', err)
      // This is a top-level function. Do not throw an error.
    }
  }

  // Get the next TX in the queue
  getTx () {
    console.log(`this.txQueue.length: ${this.txQueue.length}`)
    let nextTx = this.txQueue.shift()
    // console.log(`nextTx: ${JSON.stringify(nextTx, null, 2)}`)

    if (nextTx === undefined) nextTx = false

    return nextTx
  }

  // Get the next block in the queue
  getBlock () {
    console.log(`this.blockQueue.length: ${this.blockQueue.length}`)
    let nextBlock = _this.blockQueue.shift()

    if (nextBlock === undefined) nextBlock = false

    return nextBlock
  }
}

module.exports = ZMQ
