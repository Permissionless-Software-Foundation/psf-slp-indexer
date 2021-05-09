/*
  This is the parent class library for the RPC controller.
*/

// Public npm libraries
const jsonrpc = require('jsonrpc-lite')

// Local support libraries
const wlogger = require('../lib/wlogger')
const UserController = require('./users')
const AuthController = require('./auth')
const AboutController = require('./about')

let _this

class JSONRPC {
  constructor (localConfig) {
    // Encapsulate dependencies
    this.jsonrpc = jsonrpc
    this.userController = new UserController()
    this.authController = new AuthController()
    this.aboutController = new AboutController()

    // This will be replaced once the ipfs-coord lib finishes initializing.
    this.ipfsCoord = {}

    _this = this
  }

  // This method takes a raw string of data from IPFS, parses it, and determins
  // which controller to route the instruction to.
  async router (str, from) {
    try {
      // console.log('router str: ', str)
      // console.log('router from: ', from)

      // Exit quietly if 'from' is not specified.
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

      // Added the property "from" to the parsedData object;
      // necessary for calculating rate limits (based on the IPFS ID).
      parsedData.from = from

      // Default return string
      let retObj = _this.defaultResponse()

      // Route the command to the appropriate route handler.
      switch (parsedData.payload.method) {
        case 'users':
          retObj = await _this.userController.userRouter(parsedData)
          break
        case 'auth':
          retObj = await _this.authController.authRouter(parsedData)
          break
        case 'about':
          retObj = await _this.aboutController.aboutRouter(parsedData)
      }

      // console.log('retObj: ', retObj)

      // Convert the returned object into a JSON RPC response string.
      const retJson = _this.jsonrpc.success(parsedData.payload.id, {
        method: parsedData.payload.method,
        reciever: from,
        value: retObj
      })
      const retStr = JSON.stringify(retJson, null, 2)
      // console.log('retStr: ', retStr)

      // Encrypt and publish the response to the originators private OrbitDB,
      // if ipfs-coord has been initialized and the peers ID is registered.
      if (_this.ipfsCoord.ipfs) {
        await _this.ipfsCoord.ipfs.orbitdb.sendToDb(from, retStr)
      }

      // Return the response and originator. Useful for testing.
      return { from, retStr }
    } catch (err) {
      // console.error('Error in rpc router(): ', err)
      wlogger.error('Error in rpc router(): ', err)
      // Do not throw error. This is a top-level function.
    }
  }

  // The default JSON RPC response if the incoming command could not be routed.
  defaultResponse () {
    try {
      // const errorObj = this.jsonrpc.error(
      //   'Can not route',
      //   new jsonrpc.JsonRpcError('Input does not match routing rules', 422)
      // )
      // const errorStr = JSON.stringify(errorObj)
      // return errorStr

      const errorObj = {
        success: false,
        status: 422,
        message: 'Input does not match routing rules.'
      }

      return errorObj
    } catch (err) {
      console.error('Error in defaultResponse()')
      throw err
    }
  }
}

module.exports = JSONRPC
