/*
  A class library for interacting with the Full Node over its JSON RPC.
*/

// Public npm libraries
const axios = require('axios')

// Local libraries
const { wlogger } = require('../../wlogger')
const config = require('../../../../config')

class RPC {
  constructor () {
    // Encapsulate dependencies
    this.axios = axios
    this.wlogger = wlogger
    this.config = config
  }

  // Axios options used when calling axios.post() to talk with a full node.
  getAxiosOptions () {
    return {
      method: 'post',
      baseURL: this.config.rpcUri,
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
}

module.exports = RPC
