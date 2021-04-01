/*
  This is the parent class library for the RPC controller.
*/

// Public npm libraries
const jsonrpc = require('jsonrpc-lite')

// Local support libraries
const UserController = require('./users')

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
  router (str, from) {
    try {
      console.log('router str: ', str)
      console.log('router from: ', from)

      const parsedData = _this.jsonrpc.parse(str)
      console.log('parsedData: ', parsedData)

      // console.log('parsedData.type: ', parsedData.type)
      // Exit quietly if the incoming string is invalid
      if (parsedData.type === 'invalid') {
        return
      }

      switch (parsedData.payload.id) {
        case 'users':
          _this.userController.userRouter(parsedData)
          break
        // case default:
          // TODO: Return an error
      }
    } catch (err) {
      console.error('Error in rpc router(): ', err)
      // Do not throw error. This is a top-level function.
    }
  }
}

module.exports = JSONRPC
