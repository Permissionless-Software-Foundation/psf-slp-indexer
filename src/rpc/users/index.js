/*
  This is the JSON RPC router for the users API
*/

// Public npm libraries
const jsonrpc = require('jsonrpc-lite')

// Local libraries
const UserLib = require('../../lib/users')

class UserRPC {
  constructor (localConfig) {
    // Encapsulate dependencies
    this.userLib = new UserLib()
    this.jsonrpc = jsonrpc
  }

  // Top-level router for this library. All other methods in this class are for
  // a specific endpoint. This method routes incoming calls to one of those
  // methods.
  async userRouter (rpcData) {
    try {
      // console.log('userRouter rpcData: ', rpcData)

      // Default return object.
      // let retObj = {}

      // Route the call based on the value of the method property.
      switch (rpcData.payload.method) {
        case 'getAll':
          return await this.getAll()
        case 'getUser':
          return await this.getUser(rpcData)
      }
    } catch (err) {
      console.error('Error in UsersRPC/rpcRouter()')
      throw err
    }
  }

  // Get all Users.
  async getAll () {
    try {
      console.log('Executing get all')
      const users = await this.userLib.getAllUsers()

      return users
    } catch (err) {
      console.error('Error in getAll()')
      throw err
    }
  }
}

module.exports = UserRPC
