/*
  This is the parent class library for the RPC controller.
*/

const jsonrpc = require('jsonrpc-lite')

let _this

class JSONRPC {
  constructor (localConfig) {
    // Encapsulate dependencies
    this.jsonrpc = jsonrpc

    _this = this
  }

  // This method takes a raw string of data from IPFS, parses it, and determins
  // which controller to route the instruction to.
  router (str) {
    try {
      console.log('router str: ', str)

      const parsedData = _this.jsonrpc.parse(str)
      // console.log('parsedData: ', parsedData)

      // console.log('parsedData.type: ', parsedData.type)
      // Exit quietly if the incoming string is invalid
      if (parsedData.type === 'invalid') {
        return
      }
    } catch (err) {
      console.error('Error in rpc router(): ', err)
      // Do not throw error. This is a top-level function.
    }
  }
}

module.exports = JSONRPC
