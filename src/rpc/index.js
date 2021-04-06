/*
  This is the parent class library for the RPC controller.
*/

// Public npm libraries
const jsonrpc = require('jsonrpc-lite')

// Local support libraries
const wlogger = require('../lib/wlogger')
const UserController = require('./users')
const AuthController = require('./auth')

let _this

class JSONRPC {
  constructor (localConfig) {
    // Encapsulate dependencies
    this.jsonrpc = jsonrpc
    this.userController = new UserController()
    this.authController = new AuthController()

    // This will be replaced once the ipfs-coord lib finishes initializing.
    this.ipfsCoord = {}

    _this = this
  }

  // This method takes a raw string of data from IPFS, parses it, and determins
  // which controller to route the instruction to.
  async router (str, from) {
    try {
      console.log('router str: ', str)
      console.log('router from: ', from)

      // Exit quietly if 'from' is not specified.
      if (!from || typeof from !== 'string') {
        // console.warn(
        //   'Warning: Can not send JSON RPC response. Can not determine which peer this message came from.'
        // )
        return
      }

      // Attempt to parse the incoming data as a JSON RPC string.
      const parsedData = _this.jsonrpc.parse(str)
      console.log('parsedData: ', parsedData)

      // Exit quietly if the incoming string is an invalid JSON RPC string.
      if (parsedData.type === 'invalid') {
        return
      }
      console.log('ping01')
      // Default return string
      let retStr = _this.defaultResponse()
      console.log('ping02')
      // Route the command to the appropriate route handler.
      switch (parsedData.payload.id) {
        case 'users':
          retStr = await _this.userController.userRouter(parsedData)
          break
        case 'auth':
          retStr = await _this.authController.authRouter(parsedData)
          break
      }
      console.log('ping03')
      console.log('retStr: ', retStr)

      // TODO: Instead of returning a string, I need to write the return string
      // to the OrbitDB of the 'from' peer.
      // return retStr

      console.log('_this.ipfsCoord.ipfs: ', _this.ipfsCoord.ipfs)
      await _this.ipfsCoord.ipfs.orbitdb.sendToDb(from, retStr)
      console.log('ping04')
    } catch (err) {
      wlogger.error('Error in rpc router(): ', err)
      // Do not throw error. This is a top-level function.
    }
  }

  // The default JSON RPC response if the incoming command could not be routed.
  defaultResponse () {
    try {
      console.log('Entering defaultResponse()')
      const errorObj = this.jsonrpc.error(
        'Can not route',
        new jsonrpc.JsonRpcError('Input does not match routing rules', 422)
      )
      const errorStr = JSON.stringify(errorObj)

      console.log('Exiting defaultResponse()')
      return errorStr
    } catch (err) {
      console.error('Error in defaultResponse()')
      throw err
    }
  }
}

module.exports = JSONRPC
