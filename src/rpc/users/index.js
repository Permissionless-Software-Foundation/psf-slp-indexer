/*
  This is the JSON RPC router for the users API
*/

// Public npm libraries
const jsonrpc = require('jsonrpc-lite')

// Local libraries
const UserLib = require('../../lib/users')
const Validators = require('../validators')

class UserRPC {
  constructor (localConfig) {
    // Encapsulate dependencies
    this.userLib = new UserLib()
    this.jsonrpc = jsonrpc
    this.validators = new Validators()
  }

  // Top-level router for this library. All other methods in this class are for
  // a specific endpoint. This method routes incoming calls to one of those
  // methods.
  async userRouter (rpcData) {
    try {
      console.log('userRouter rpcData: ', rpcData)

      const endpoint = rpcData.payload.params.endpoint
      let user

      // Route the call based on the value of the method property.
      switch (endpoint) {
        case 'createUser':
          return await this.createUser(rpcData)
        case 'deleteUser':
          user = await this.validators.ensureTargetUserOrAdmin(rpcData)
          return await this.deleteUser(rpcData, user)
        case 'getAllUsers':
          // await this.validators.ensureUser(rpcData)
          return await this.getAll(rpcData)
        case 'getUser':
          return await this.getUser(rpcData)
      }
    } catch (err) {
      console.error('Error in UsersRPC/rpcRouter()')
      throw err
    }
  }

  // Create a new user
  async createUser (rpcData) {
    try {
      console.log('createUser rpcData: ', rpcData)

      const retObj = await this.userLib.createUser(rpcData.payload.params)

      retObj.endpoint = 'createUser'

      return retObj
    } catch (err) {
      console.error('Error in createUser()')
      throw err
    }
  }

  // Get all Users.
  async getAll () {
    try {
      const users = await this.userLib.getAllUsers()

      return {
        endpoint: 'getAllUsers',
        users
      }
    } catch (err) {
      console.error('Error in getAll()')
      throw err
    }
  }

  async deleteUser (rpcData, userModel) {
    try {
      console.log('deleteUser rpcData: ', rpcData)

      await this.userLib.deleteUser(userModel)

      const retObj = {
        endpoint: 'deleteUser'
      }

      return retObj
    } catch (err) {
      console.error('Error in deleteUser()')
      throw err
    }
  }

  // TODO create deleteUser()
}

module.exports = UserRPC
