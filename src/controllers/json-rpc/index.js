/*
  This is the parent class library for the RPC controller.
*/

// Public npm libraries
const jsonrpc = require('jsonrpc-lite')

// Local support libraries
const { wlogger } = require('../../adapters/wlogger')
const UserController = require('./users')
const AuthController = require('./auth')
const AboutController = require('./about')

let _this

class JSONRPC {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating JSON RPC Controllers.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating JSON RPC Controllers.'
      )
    }

    // Encapsulate dependencies
    this.ipfsCoord = this.adapters.ipfs.ipfsCoordAdapter.ipfsCoord
    this.jsonrpc = jsonrpc
    this.userController = new UserController(localConfig)
    this.authController = new AuthController(localConfig)
    this.aboutController = new AboutController()

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
    const errorObj = {
      success: false,
      status: 422,
      message: 'Input does not match routing rules.'
    }

    return errorObj
  }
}

module.exports = JSONRPC
