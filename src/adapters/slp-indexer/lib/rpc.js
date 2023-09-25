/*
  A class library for interacting with the Full Node over its JSON RPC.
*/

// Public npm libraries
// const axios = require('axios')
import axios from 'axios'

// Local libraries
// const { wlogger } = require('../../wlogger')
// const config = require('../../../../config')
import wlogger from '../../wlogger.js'
import config from '../../../../config/index.js'

// Global pointer to instance of this class
let _this

class RPC {
  constructor () {
    // Encapsulate dependencies
    this.axios = axios
    this.wlogger = wlogger
    this.config = config

    _this = this

    // Bind 'this' object to subfunctions
    this.getBlockCount = this.getBlockCount.bind(this)
    this.getBlockHeader = this.getBlockHeader.bind(this)
  }

  // Axios options used when calling axios.post() to talk with a full node.
  getAxiosOptions () {
    return {
      method: 'post',
      baseURL: `http://${this.config.rpcIp}:${this.config.rpcPort}/`,
      timeout: 15000,
      auth: {
        username: this.config.rpcUser,
        password: this.config.rpcPass
      },
      data: {
        jsonrpc: '1.0'
      }
    }
  }

  // Get the current block height of the BCH blockchain.
  async getBlockCount () {
    try {
      // Axios options
      const options = this.getAxiosOptions()
      options.data.id = 'getblockcount'
      options.data.method = 'getblockcount'
      options.data.params = []

      const response = await this.axios.request(options)

      return response.data.result
    } catch (err) {
      // Write out error to error log.
      this.wlogger.error('Error in rpc.js/getBlockCount().', err)

      throw err
    }
  }

  // Given a block hash, return the block header. This includes the block height.
  async getBlockHeader (hash, verbose = true) {
    try {
      if (!hash) throw new Error('Block hash must be provided')

      const options = this.getAxiosOptions()
      options.data.id = 'getblockheader'
      options.data.method = 'getblockheader'
      options.data.params = [hash, verbose]

      const response = await this.axios.request(options)

      return response.data.result
    } catch (err) {
      // Write out error to error log.
      this.wlogger.error('Error in rpc.js/getBlockHeader().', err)

      throw err
    }
  }

  // Get the contents of a block, given its block hash.
  async getBlock (hash, verbose = true) {
    try {
      if (!hash) throw new Error('Block hash must be provided')

      // Axios options
      const options = this.getAxiosOptions()

      options.data.id = 'getblock'
      options.data.method = 'getblock'
      options.data.params = [hash, verbose]

      const response = await this.axios.request(options)

      return response.data.result
    } catch (err) {
      // Write out error to error log.
      this.wlogger.error('Error in rpc.js/getBlock() ', err)

      throw err
    }
  }

  // Given a block height, return the block hash matching that block height.
  async getBlockHash (height) {
    try {
      if (!height) throw new Error('Block height must be provided')

      // Axios options
      const options = this.getAxiosOptions()

      options.data.id = 'getblockhash'
      options.data.method = 'getblockhash'
      options.data.params = [parseInt(height)]

      const response = await this.axios.request(options)

      return response.data.result
    } catch (err) {
      // Write out error to error log.
      this.wlogger.error('Error in rpc.js/getBlockHash() ', err)

      throw err
    }
  }

  // Get details on a transaction, given a TXID.
  async getRawTransaction (txid, verbose = true) {
    try {
      if (!txid) throw new Error('txid must be provided')

      const options = _this.getAxiosOptions()

      options.data.id = 'getrawtransaction'
      options.data.method = 'getrawtransaction'
      options.data.params = [txid, verbose]

      const response = await _this.axios.request(options)

      return response.data.result
    } catch (err) {
      // console.log('error txid: ', txid)

      // Don't log the error for this specific response.
      if (err.message.includes('txid must be provided')) throw err

      // Write out error to error log.
      _this.wlogger.error('Error in rpc.js/getRawTransaction() ', err)

      throw err
    }
  }
}

// module.exports = RPC
export default RPC
