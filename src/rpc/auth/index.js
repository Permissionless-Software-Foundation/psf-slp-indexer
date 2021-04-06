/*
  This is the JSON RPC router for the users API
*/

// Public npm libraries
const jsonrpc = require('jsonrpc-lite')

// Local libraries
// const AuthLib = require('../../lib/auth')
const UserLib = require('../../lib/users')

class AuthRPC {
  constructor (localConfig) {
    // Encapsulate dependencies
    // this.authLib = new AuthLib()
    this.jsonrpc = jsonrpc
    this.userLib = new UserLib()
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
        case 'authUser':
          return await this.authUser()
      }
    } catch (err) {
      console.error('Error in AuthRPC/authRouter()')
      throw err
    }
  }

  async authUser (rpcData) {
    try {
      console.log('authUser rpcData: ', rpcData)

      if (!rpcData.payload.params.login) {
        throw new Error('login must be specified')
      }
      if (!rpcData.payload.params.password) {
        throw new Error('password must be specified')
      }

      const login = rpcData.payload.params.login
      const password = rpcData.payload.params.password

      // const user = await this.passport.authUser(ctx, next)
      // if (!user) {
      //   // ctx.throw(401)
      //   const retJson =
      // }

      const user = await this.userLib.authUser(login, password)
      console.log('user: ', user)
      return user

      // const token = user.generateToken()
      //
      // const response = user.toJSON()
      //
      // delete response.password
      //
      // ctx.body = {
      //   token,
      //   user: response
      // }
    } catch (err) {
      console.error('Error in authUser()')
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
