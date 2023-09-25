/*
  This is the parent class library for the RPC controller.
*/

// Public npm libraries
import jsonrpc from 'jsonrpc-lite'

// Local support libraries
import wlogger from '../../adapters/wlogger.js'

import UserController from './users/index.js'
import AuthController from './auth/index.js'
import AboutController from './about/index.js'

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

    // Cache to store IDs of processed JSON RPC commands. Used to prevent
    // duplicate processing.
    this.msgCache = []
    this.MSG_CACHE_SIZE = 30

    _this = this
  }

  // This method takes a raw string of data from IPFS, parses it, and determins
  // which controller to route the instruction to.
  async router (str, from) {
    try {
      // console.log('router str: ', str)
      console.log('JSON RPC router recieved data from: ', from)

      // Exit quietly if 'from' is not specified.
      if (!from || typeof from !== 'string') {
        wlogger.info(
          'Warning: Can not send JSON RPC response. Can not determine which peer this message came from.'
        )
        return false
      }

      // Attempt to parse the incoming data as a JSON RPC string.
      const parsedData = _this.jsonrpc.parse(str)
      // wlogger.debug(`parsedData: ${JSON.stringify(parsedData, null, 2)}`)

      // Exit quietly if the incoming string is an invalid JSON RPC string.
      if (parsedData.type === 'invalid') {
        wlogger.info('Rejecting invalid JSON RPC command.')
        return false
      }

      // Check for duplicate entries with same 'id' value.
      const alreadyProcessed = _this._checkIfAlreadyProcessed(parsedData)
      if (alreadyProcessed) {
        return false
      } else {
        // console.log(`parsedData: ${JSON.stringify(parsedData, null, 2)}`)

        // This node will regularly ping known circuit relays with an /about
        // JSON RPC call. These will be handled by ipfs-coord, but will percolate
        // up to this library. Ignore these messages.
        if (
          parsedData.type.includes('success') &&
          parsedData.payload.method === undefined
        ) {
          return false
        }

        // Log the incoming JSON RPC command.
        wlogger.info(
          `JSON RPC received from ${from}, ID: ${parsedData.payload.id}, type: ${parsedData.type}, method: ${parsedData.payload.method}`
        )
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

      // console.log('responding to JSON RPC command')
      const thisNode = _this.ipfsCoord.thisNode
      // console.log('thisNode: ', thisNode)

      try {
        await _this.ipfsCoord.useCases.peer.sendPrivateMessage(
          from,
          retStr,
          thisNode
        )
      } catch (err) {
        console.log('sendPrivateMessage() err: ', err)
      }

      // Return the response and originator. Useful for testing.
      return { from, retStr }
    } catch (err) {
      // console.error('Error in rpc router(): ', err)
      wlogger.error('Error in rpc router(): ', err)
      // Do not throw error. This is a top-level function.
    }
  }

  // Checks the ID of the JSON RPC call, to see if the message has already been
  // processed. Returns true if the ID exists in the cache of processed messages.
  // If the ID is new, the function adds it to the cache and return false.
  _checkIfAlreadyProcessed (data) {
    try {
      // console.log('data: ', data)

      const id = data.payload.id

      // Check if the hash is in the array of already processed message.
      const alreadyProcessed = this.msgCache.includes(id)

      // Update the msgCache if this is a new message.
      if (!alreadyProcessed) {
        // Add the hash to the array.
        this.msgCache.push(id)

        // If the array is at its max size, then remove the oldest element.
        if (this.msgCache.length > this.MSG_CACHE_SIZE) {
          this.msgCache.shift()
        }
      }

      return alreadyProcessed
    } catch (err) {
      console.error('Error in _checkIfAlreadyProcessed: ', err)
      return true
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

export default JSONRPC
