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
      // console.log('userRouter rpcData: ', rpcData)

      const endpoint = rpcData.payload.params.endpoint
      let user

      // Route the call based on the value of the method property.
      switch (endpoint) {
        case 'createUser':
          return await this.createUser(rpcData)

        case 'getAllUsers':
          await this.validators.ensureUser(rpcData)
          return await this.getAll(rpcData)

        case 'getUser':
          user = await this.validators.ensureUser(rpcData)
          return await this.getUser(rpcData, user)

        case 'deleteUser':
          user = await this.validators.ensureTargetUserOrAdmin(rpcData)
          return await this.deleteUser(rpcData, user)
      }
    } catch (err) {
      console.error('Error in UsersRPC/rpcRouter()')
      throw err
    }
  }

  // Create a new user
  async createUser (rpcData) {
    try {
      // console.log('createUser rpcData: ', rpcData)

      const retObj = await this.userLib.createUser(rpcData.payload.params)

      // Add generic JSON RPC properties that every entry gets.
      retObj.endpoint = 'createUser'
      retObj.success = true
      retObj.status = 200
      retObj.message = ''

      return retObj
    } catch (err) {
      // console.error('Error in createUser()')
      // throw err

      // Return an error response
      return {
        success: false,
        status: 422,
        message: err.message,
        endpoint: 'createUser'
      }
    }
  }

  // Get all Users.
  async getAll () {
    try {
      const users = await this.userLib.getAllUsers()

      return {
        users,
        endpoint: 'getAllUsers',
        success: true,
        status: 200,
        message: ''
      }
    } catch (err) {
      // console.error('Error in getAll()')
      // throw err

      // Return an error response
      return {
        success: false,
        status: 422,
        message: err.message,
        endpoint: 'getAllUsers'
      }
    }
  }

  // Get a specific user.
  async getUser (rpcData, userModel) {
    try {
      // console.log('getUser rpcData: ', rpcData)

      // Throw error if rpcData does not include 'userId' property for target user.
      const userId = rpcData.payload.params.userId

      const user = await this.userLib.getUser({ id: userId })

      return {
        user,
        endpoint: 'getUser',
        success: true,
        status: 200,
        message: ''
      }
    } catch (err) {
      // console.error('Error in getUser()')
      // throw err

      // Return an error response
      return {
        success: false,
        status: 422,
        message: err.message,
        endpoint: 'getUser'
      }
    }
  }

  async deleteUser (rpcData, userModel) {
    try {
      // console.log('deleteUser rpcData: ', rpcData)

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
