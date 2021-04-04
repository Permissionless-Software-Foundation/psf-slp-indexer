/*
  This is the JSON RPC router for the users API
*/

// Public npm libraries
const jsonrpc = require('jsonrpc-lite')

// Local libraries
const AuthLib = require('../../lib/auth')

class AuthRPC {
  constructor (localConfig) {
    // Encapsulate dependencies
    this.authLib = new AuthLib()
    this.jsonrpc = jsonrpc
  }

  // Top-level router for this library. All other methods in this class are for
  // a specific endpoint. This method routes incoming calls to one of those
  // methods.
  async authRouter (rpcData) {
    try {
      console.log('authRouter rpcData: ', rpcData)

      // if (rpcData.payload.method === 'getAll') return await this.getAll()

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

      const retJson = this.jsonrpc.success('getAll', users)
      const retStr = JSON.stringify(retJson, null, 2)

      return retStr
    } catch (err) {
      console.error('Error in getAll()')
      throw err
    }
  }
}

module.exports = AuthRPC
