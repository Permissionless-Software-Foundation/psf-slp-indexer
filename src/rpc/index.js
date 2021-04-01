/*
  This is the parent class library for the RPC controller.
*/

// Public npm libraries
const jsonrpc = require('jsonrpc-lite')

// Local support libraries
const UserController = require('./users')
const wlogger = require('../lib/wlogger')

let _this

class JSONRPC {
  constructor (localConfig) {
    // Encapsulate dependencies
    this.jsonrpc = jsonrpc
    this.userController = new UserController()

    _this = this
  }

  // This method takes a raw string of data from IPFS, parses it, and determins
  // which controller to route the instruction to.
  async router (str, from) {
    try {
      console.log('router str: ', str)
      console.log('router from: ', from)

      // Exit if from is not specified.
      if (!from || typeof from !== 'string') {
        // console.warn(
        //   'Warning: Can not send JSON RPC response. Can not determine which peer this message came from.'
        // )
        return
      }

      // Attempt to parse the incoming data as a JSON RPC string.
      const parsedData = _this.jsonrpc.parse(str)
      // console.log('parsedData: ', parsedData)

      // Exit quietly if the incoming string is an invalid JSON RPC string.
      if (parsedData.type === 'invalid') {
        return
      }

      // Default return string
      let retStr = this.defaultResponse()

      // Route the command to the appropriate route handler.
      switch (parsedData.payload.id) {
        case 'users':
          retStr = await _this.userController.userRouter(parsedData)
          break
      }

      return retStr
    } catch (err) {
      wlogger.error('Error in rpc router(): ', err)
      // Do not throw error. This is a top-level function.
    }
  }

  // The default JSON RPC response if the incoming command could not be routed.
  defaultResponse () {
    try {
      const errorObj = this.jsonrpc.error(
        'Can not route',
        new jsonrpc.JsonRpcError('Input does not match routing rules', 422)
      )
      const errorStr = JSON.stringify(errorObj)
      return errorStr
    } catch (err) {
      console.error('Error in defaultResponse()')
      throw err
    }
  }
}

module.exports = JSONRPC
