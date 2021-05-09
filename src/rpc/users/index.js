/*
  This is the JSON RPC router for the users API
*/

// Public npm libraries
const jsonrpc = require('jsonrpc-lite')

// Local libraries
const UserLib = require('../../lib/users')
const Validators = require('../validators')
const RateLimit = require('../rate-limit')

class UserRPC {
  constructor (localConfig) {
    // Encapsulate dependencies
    this.userLib = new UserLib()
    this.jsonrpc = jsonrpc
    this.validators = new Validators()
    this.rateLimit = new RateLimit()
  }

  // Top-level router for this library. All other methods in this class are for
  // a specific endpoint. This method routes incoming calls to one of those
  // methods.
  async userRouter (rpcData) {
    let endpoint = 'unknown'
    try {
      // console.log('userRouter rpcData: ', rpcData)

      endpoint = rpcData.payload.params.endpoint
      let user

      // Route the call based on the value of the method property.
      switch (endpoint) {
        case 'createUser':
          await this.rateLimit.limiter(rpcData.from)
          return await this.createUser(rpcData)

        case 'getAllUsers':
          await this.validators.ensureUser(rpcData)
          await this.rateLimit.limiter(rpcData.from)
          return await this.getAll(rpcData)

        case 'getUser':
          user = await this.validators.ensureUser(rpcData)
          await this.rateLimit.limiter(rpcData.from)
          return await this.getUser(rpcData, user)

        case 'updateUser':
          user = await this.validators.ensureTargetUserOrAdmin(rpcData)
          await this.rateLimit.limiter(rpcData.from)
          return await this.updateUser(rpcData, user)

        case 'deleteUser':
          user = await this.validators.ensureTargetUserOrAdmin(rpcData)
          await this.rateLimit.limiter(rpcData.from)
          return await this.deleteUser(rpcData, user)
      }
    } catch (err) {
      console.error('Error in UsersRPC/rpcRouter()')
      // throw err

      return {
        success: false,
        status: err.status || 500,
        message: err.message,
        endpoint
      }
    }
  }

  /**
   * @api {JSON} /users Create a new user
   * @apiPermission public
   * @apiName CreateUser
   * @apiGroup JSON Users
   *
   * @apiExample Example usage:
   * {"jsonrpc":"2.0","id":"555","method":"users","params":{ "endpoint": "createUser", "email": "test555@test.com", "name": "testy tester", "password": "password"}}
   *
   * @apiParam {String} email Email(required).
   * @apiParam {String} password Password(required).
   * @apiParam {String} name name or handle(optional).
   * @apiParam {string} endpoint      (required)

   * @apiSuccess {Object}   users           User object
   * @apiSuccess {ObjectId} users._id       User id
   * @apiSuccess {String}   user.type       User type (admin or user)
   * @apiSuccess {String}   users.name      User name
   * @apiSuccess {String}   users.username  User username
   * @apiSuccess {String}   users.email     User email
   *
   * @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   *  {
   *  "jsonrpc": "2.0",
   *  "id": "555",
   *  "result": {
   *    "method": "users",
   *    "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *    "value": {
   *      "userData": {
   *        "type": "user",
   *        "_id": "607dd3e6426f3d3148b3a466",
   *        "email": "test555@test.com",
   *        "name": "testy tester",
   *        "__v": 0
   *      },
   *      "token": "eyJhbGciOiJIUzI1NiIs1nR5cCI6IkpXVTJ9.eyJpZCI6IjYwN2RkM2U2NDI2ZjNkMzE0OGIzYTQ2NiIsImlhdCI6MTYxODg1ODk4Mn0.in4vzxDqqyCd7LpuhG3xlXeBqrJ5bp9GJPwhaoVzldI",
   *      "endpoint": "createUser",
   *      "success": true,
   *      "status": 200,
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
   *  "jsonrpc": "2.0",
   *  "id": "123",
   *  "result": {
   *    "method": "users",
   *    "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *    "value": {
   *      "success": false,
   *      "status": 422,
   *      "message": "Unprocessable Entity",
   *      "endpoint": "getUser"
   *    }
   *  }
   *}
   */
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

  /**
   * @api {JSON} /users Get all users
   * @apiPermission public
   * @apiName GetAllUsers
   * @apiGroup JSON Users
   *
   * @apiExample Example usage:
   * {"jsonrpc":"2.0","id":"555","method":"users","params":{ "endpoint": "getAllUsers", "apiToken": "<JWT>"}}
   *
   * @apiParam {String} apiToken      (required)
   * @apiParam {string} endpoint      (required)
   *
   * @apiSuccess {Object[]} users           Array of user objects
   * @apiSuccess {ObjectId} users._id       User id
   * @apiSuccess {String}   user.type       User type (admin or user)
   * @apiSuccess {String}   users.name      User name
   * @apiSuccess {String}   users.username  User username
   * @apiSuccess {String}   users.email     User email
   *
   * @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   *  result": {
   *  "method": "users",
   *  "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *  "value": {
   *   "users": [
   *     {
   *       "type": "user",
   *       "_id": "6070bc6da931e73d4d9e108d",
   *       "email": "test678@test.com",
   *       "name": "testy tester",
   *       "__v": 0
   *     }
   *   ],
   *   "endpoint": "getAllUsers",
   *   "success": true,
   *   "status": 200,
   *   "message": ""
   *  }
   * }
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 422 Unprocessable Entity
   *     {
   *     "jsonrpc": "2.0",
   *     "id": "123",
   *     "result": {
   *       "method": "users",
   *       "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *       "value": {
   *         "success": false,
   *         "status": 422,
   *         "message": "",
   *         "endpoint": "getAllUsers"
   *       }
   *     }
   */
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

  /**
   * @api {JSON} /users Get a user
   * @apiPermission public
   * @apiName GetAUser
   * @apiGroup JSON Users
   *
   * @apiExample Example usage:
   * {"jsonrpc":"2.0","id":"123","method":"users","params":{ "endpoint": "getUser", "apiToken": "<JWT>", "userId": "<_id>"}}
   *
   * @apiParam {String} apiToken      (required)
   * @apiParam {String} userId       (required)
   * @apiParam {string} endpoint      (required)
   *
   * @apiSuccess {Object[]} users           Array of user objects
   * @apiSuccess {ObjectId} users._id       User id
   * @apiSuccess {String}   user.type       User type (admin or user)
   * @apiSuccess {String}   users.name      User name
   * @apiSuccess {String}   users.username  User username
   * @apiSuccess {String}   users.email     User email
   *
   * @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   *  result": {
   *  "jsonrpc": "2.0",
   *  "id": "123",
   *  "result": {
   *    "method": "users",
   *    "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *    "value": {
   *      "user": {
   *        "type": "user",
   *        "_id": "607dd3e6426f3d3148b3a466",
   *        "email": "test555@test.com",
   *        "name": "testy tester",
   *        "__v": 0
   *      },
   *      "endpoint": "getUser",
   *      "success": true,
   *      "status": 200,
   *      "message": ""
   *  }
   *}
   *
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 422 Unprocessable Entity
   *     {
   *     "jsonrpc": "2.0",
   *     "id": "123",
   *     "result": {
   *       "method": "users",
   *       "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *       "value": {
   *         "success": false,
   *         "status": 422,
   *         "message": "Unprocessable Entity",
   *         "endpoint": "getUser"
   *       }
   *     }
   *
   */
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

  /**
   * @api {JSON} /users Update a user
   * @apiPermission public
   * @apiName UpdateAUser
   * @apiGroup JSON Users
   *
   * @apiExample Example usage:
   * {"jsonrpc":"2.0","id":"123","method":"users","params":{ "endpoint": "updateUser", "apiToken": "<JWT>", "userId": "<_id>", "name": "test999"}}
   *
   * @apiParam {String} apiToken      (required)
   * @apiParam {String} userId       (required)
   * @apiParam {string} endpoint      (required)
   * @apiParam {String} email Email(Optional).
   * @apiParam {String} password Password(Optional).
   * @apiParam {String} name name or handle(Optional).
   *
   *
   * @apiSuccess {Object}   users           User object
   * @apiSuccess {ObjectId} users._id       User id
   * @apiSuccess {String}   user.type      User type (admin or user)
   * @apiSuccess {String}   users.name      Updated name
   * @apiSuccess {String}   users.username  Updated username
   * @apiSuccess {String}   users.email     Updated email
   *
   * @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   *  result": {
   *  "jsonrpc": "2.0",
   *  "id": "123",
   *  "result": {
   *    "method": "users",
   *    "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *    "value": {
   *      "user": {
   *        "type": "user",
   *        "_id": "607dd3e6426f3d3148b3a466",
   *        "email": "test555@test.com",
   *        "name": "test001",
   *        "__v": 0
   *      },
   *      "endpoint": "updateUser",
   *      "success": true,
   *      "status": 200,
   *      "message": ""
   *    }
   *  }
   *}
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *  HTTP/1.1 422 Unprocessable Entity
   *  {
   *    "jsonrpc": "2.0",
   *    "id": "123",
   *    "result": {
   *      "method": "users",
   *      "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *      "value": {
   *        "success": false,
   *        "status": 422,
   *        "message": "Unprocessable Entity.",
   *        "endpoint": "updateUser"
   *      }
   *    }
   *  }
   *
   */
  async updateUser (rpcData, userModel) {
    try {
      // console.log('updateUser rpcData: ', rpcData)

      const newData = rpcData.payload.params

      const user = await this.userLib.updateUser(userModel, newData)

      return {
        user,
        endpoint: 'updateUser',
        success: true,
        status: 200,
        message: ''
      }
    } catch (err) {
      // console.log('updateUser err: ', err)

      // Return an error response
      return {
        success: false,
        status: 422,
        message: err.message,
        endpoint: 'updateUser'
      }
    }
  }

  /**
   * @api {JSON} /users Delete a user
   * @apiPermission public
   * @apiName DeleteAUser
   * @apiGroup JSON Users
   *
   *
   * @apiExample Example usage:
   * {"jsonrpc":"2.0","id":"123","method":"users","params":{ "endpoint": "deleteUser", "userId": "<_id>", "apiToken": "<JWT>"}}
   *
   * @apiParam {String} apiToken      (required)
   * @apiParam {String} userId       (required)
   * @apiParam {string} endpoint      (required)
   *
   * @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   *  result":  {
   *  "jsonrpc": "2.0",
   *  "id": "123",
   *  "result": {
   *    "method": "users",
   *    "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *    "value": {
   *      "endpoint": "deleteUser",
   *      "success": true,
   *      "status": 200,
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
   *  "jsonrpc": "2.0",
   *  "id": "123",
   *  "result": {
   *    "method": "users",
   *    "reciever": "Qmc2uJhg7yrqaNaoTJRDkzrAyVe82e9JMFQcxrBUjbdXyC",
   *    "value": {
   *      "success": false,
   *      "status": 422,
   *      "message": "Unprocessable Entity",
   *      "endpoint": "deleteUser"
   *    }
   *  }
   *}
   *
   *
   */
  async deleteUser (rpcData, userModel) {
    try {
      // console.log('deleteUser rpcData: ', rpcData)

      await this.userLib.deleteUser(userModel)

      const retObj = {
        endpoint: 'deleteUser',
        success: true,
        status: 200,
        message: ''
      }

      return retObj
    } catch (err) {
      // console.error('Error in deleteUser()')
      // throw err

      // Return an error response
      return {
        success: false,
        status: 422,
        message: err.message,
        endpoint: 'deleteUser'
      }
    }
  }

  // TODO create deleteUser()
}

module.exports = UserRPC
