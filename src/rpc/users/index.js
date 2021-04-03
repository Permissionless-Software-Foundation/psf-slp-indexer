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

  async userRouter (rpcData) {
    try {
      console.log('userRouter rpcData: ', rpcData)

      if (rpcData.payload.method === 'getAll') return await this.getAll()
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

module.exports = UserRPC
