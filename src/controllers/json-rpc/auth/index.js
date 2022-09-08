/*
  This is the JSON RPC router for the users API
*/

// Public npm libraries
import jsonrpc from 'jsonrpc-lite'

// Local libraries
// const AuthLib = require('../../lib/auth')
// const UserLib = require('../../../use-cases/user')
import wlogger from '../../../adapters/wlogger.js'

import RateLimit from '../rate-limit.js'

class AuthRPC {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating Auth JSON RPC Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating Auth JSON RPC Controller.'
      )
    }

    // Encapsulate dependencies
    // this.authLib = new AuthLib()
    this.jsonrpc = jsonrpc
    this.userLib = this.useCases.user
    this.rateLimit = new RateLimit()
  }

  // Top-level router for this library. All other methods in this class are for
  // a specific endpoint. This method routes incoming calls to one of those
  // methods.
  async authRouter (rpcData) {
    let endpoint = 'unknown'

    try {
      // console.log('authRouter rpcData: ', rpcData)

      endpoint = rpcData.payload.params.endpoint

      // Route the call based on the requested endpoint.
      switch (endpoint) {
        case 'authUser':
          await this.rateLimit.limiter(rpcData.from)
          return await this.authUser(rpcData)
      }
    } catch (err) {
      console.error('Error in AuthRPC/authRouter()')
      // throw err

      return {
        success: false,
        status: 500,
        message: err.message,
        endpoint
      }
    }
  }

  /**
   * @api {JSON} /auth Get JWT Token
   * @apiPermission public
   * @apiName AuthUser
   * @apiGroup JSON Auth
   *
   * @apiExample Example usage:
   * {"jsonrpc":"2.0","id":"556","method":"auth","params":{ "endpoint": "authUser", "login": "test555@test.com", "password": "password"}}
   *
   * @apiParam {String} login Email(required).
   * @apiParam {String} password Password(required).
   * @apiParam {string} endpoint      (required)
   *
   * @apiSuccess {Object}   users           User object
   * @apiSuccess {ObjectId} users._id       User id
   * @apiSuccess {String}   user.type       User type (admin or user)
   * @apiSuccess {String}   users.name      User name
   * @apiSuccess {String}   users.email     User email
   * @apiSuccess {String}   token           JWT.
   *
   * @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   *  {
   *  "jsonrpc": "2.0",
   *  "id": "556",
   *  "result": {
   *    "method": "auth",
   *    "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *    "value": {
   *      "endpoint": "authUser",
   *      "userId": "607de52d426f3d3148b3a467",
   *      "userType": "user",
   *      "userName": "testy tester",
   *      "userEmail": "test555@test.com",
   *      "apiToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwN2RlNTJkNDI2ZjNkMzE0OGIzYTQ2NyIsImlhdCI6MTYxODg2NTcwM30.acGe5ZiBAAcbOcPQDIhvc3z0KjnuYZd1Y5pJJJC9mJQ",
   *      "status": 200,
   *      "success": true,
   *      "message": ""
   *    }
   *  }
   *}
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 422 Unprocessable Entity
   * {
   *   "jsonrpc": "2.0",
   *   "id": "556",
   *   "result": {
   *     "method": "auth",
   *     "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *     "value": {
   *       "success": false,
   *       "status": 422,
   *       "message": "User not found",
   *       "endpoint": "authUser"
   *     }
   *   }
   * }
   */
  async authUser (rpcData) {
    try {
      // console.log('authUser rpcData: ', rpcData)

      if (!rpcData.payload.params.login) {
        throw new Error('login must be specified')
      }
      if (!rpcData.payload.params.password) {
        throw new Error('password must be specified')
      }

      const login = rpcData.payload.params.login
      const password = rpcData.payload.params.password

      const user = await this.userLib.authUser(login, password)
      // console.log('user: ', user)

      const token = user.generateToken()

      const response = {
        endpoint: 'authUser',
        userId: user._id,
        userType: user.type,
        userName: user.name,
        userEmail: user.email,
        apiToken: token,
        status: 200,
        success: true,
        message: ''
      }

      return response
    } catch (err) {
      // console.error('Error in authUser()')
      wlogger.error('Error in authUser(): ', err)
      // throw err

      // Return an error response
      return {
        success: false,
        status: 422,
        message: err.message,
        endpoint: 'authUser'
      }
    }
  }
}

export default AuthRPC
