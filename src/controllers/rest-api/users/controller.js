/*
  REST API Controller library for the /user route
*/

import wlogger from '../../../adapters/wlogger.js'

let _this

class UserRESTControllerLib {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating /users REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating /users REST Controller.'
      )
    }

    // Encapsulate dependencies
    this.UserModel = this.adapters.localdb.Users
    // this.userUseCases = this.useCases.user

    _this = this
  }

  /**
   * @api {post} /users Create a new user
   * @apiPermission user
   * @apiName CreateUser
   * @apiGroup REST Users
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X POST -d '{ "user": { "email": "email@format.com", "name": "my name", "password": "secretpasas" } }' localhost:5010/users
   *
   * @apiParam {Object} user          User object (required)
   * @apiParam {String} user.email Email
   * @apiParam {String} user.password Password
   * @apiParam {String} user.name name or handle
   *
   * @apiSuccess {Object}   users           User object
   * @apiSuccess {ObjectId} users._id       User id
   * @apiSuccess {String}   user.type       User type (admin or user)
   * @apiSuccess {String}   users.name      User name
   * @apiSuccess {String}   users.username  User username
   * @apiSuccess {String}   users.email     User email
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "user": {
   *          "_id": "56bd1da600a526986cf65c80"
   *          "name": "John Doe"
   *          "email": "email@format.com",
   *          "password": "somestrongpassword"
   *       }
   *     }
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 422 Unprocessable Entity
   *     {
   *       "status": 422,
   *       "error": "Unprocessable Entity"
   *     }
   */
  async createUser (ctx) {
    try {
      const userObj = ctx.request.body.user

      const { userData, token } = await _this.useCases.user.createUser(userObj)
      // console.log('userData: ', userData)
      // console.log('token: ', token)

      ctx.body = {
        user: userData,
        token
      }
    } catch (err) {
      // console.log(`err.message: ${err.message}`)
      // console.log('err: ', err)
      // ctx.throw(422, err.message)
      _this.handleError(ctx, err)
    }
  }

  /**
   * @api {get} /users Get all users
   * @apiPermission user
   * @apiName GetUsers
   * @apiGroup REST Users
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5000/users
   *
   * @apiSuccess {Object[]} users           Array of user objects
   * @apiSuccess {ObjectId} users._id       User id
   * @apiSuccess {String}   user.type       User type (admin or user)
   * @apiSuccess {String}   users.name      User name
   * @apiSuccess {String}   users.username  User username
   * @apiSuccess {String}   users.email     User email
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "users": [{
   *          "_id": "56bd1da600a526986cf65c80"
   *          "name": "John Doe"
   *          "email": "email@format.com"
   *       }]
   *     }
   *
   * @apiUse TokenError
   */
  async getUsers (ctx) {
    try {
      const users = await _this.useCases.user.getAllUsers()

      ctx.body = { users }
    } catch (err) {
      wlogger.error('Error in users/controller.js/getUsers(): ', err)
      ctx.throw(422, err.message)
    }
  }

  /**
   * @api {get} /users/:id Get user by id
   * @apiPermission user
   * @apiName GetUser
   * @apiGroup REST Users
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5010/users/56bd1da600a526986cf65c80
   *
   * @apiSuccess {Object}   users           User object
   * @apiSuccess {ObjectId} users._id       User id
   * @apiSuccess {String}   user.type       User type (admin or user)
   * @apiSuccess {String}   users.name      User name
   * @apiSuccess {String}   users.username  User username
   * @apiSuccess {String}   users.email     User email
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "user": {
   *          "_id": "56bd1da600a526986cf65c80"
   *          "name": "John Doe"
   *          "email": "email@format.com"
   *       }
   *     }
   *
   * @apiUse TokenError
   */
  async getUser (ctx, next) {
    try {
      const user = await _this.useCases.user.getUser(ctx.params)

      ctx.body = {
        user
      }
    } catch (err) {
      _this.handleError(ctx, err)
    }

    if (next) {
      return next()
    }
  }

  /**
   * @api {put} /users/:id Update a user
   * @apiPermission user
   * @apiName UpdateUser
   * @apiGroup REST Users
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X PUT -d '{ "user": { "name": "Cool new Name" } }' localhost:5000/users/56bd1da600a526986cf65c80
   *
   * @apiParam {Object} user          User object (required)
   * @apiParam {String} user.name     Name.
   * @apiParam {String} user.email    Email.
   * @apiParam {String} user.password Password. (optional)
   *
   * @apiSuccess {Object}   users           User object
   * @apiSuccess {ObjectId} users._id       User id
   * @apiSuccess {String}   user.type      User type (admin or user)
   * @apiSuccess {String}   users.name      Updated name
   * @apiSuccess {String}   users.username  Updated username
   * @apiSuccess {String}   users.email     Updated email
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "user": {
   *          "_id": "56bd1da600a526986cf65c80"
   *          "name": "Cool new name"
   *          "email": "email@format.com"
   *       }
   *     }
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 422 Unprocessable Entity
   *     {
   *       "status": 422,
   *       "error": "Unprocessable Entity"
   *     }
   *
   * @apiUse TokenError
   */
  async updateUser (ctx) {
    try {
      const existingUser = ctx.body.user
      const newData = ctx.request.body.user

      const user = await _this.useCases.user.updateUser(existingUser, newData)

      ctx.body = {
        user
      }
    } catch (err) {
      ctx.throw(422, err.message)
    }
  }

  /**
   * @api {delete} /users/:id Delete a user
   * @apiPermission user
   * @apiName DeleteUser
   * @apiGroup REST Users
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X DELETE localhost:5000/users/56bd1da600a526986cf65c80
   *
   * @apiSuccess {StatusCode} 200
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "success": true
   *     }
   *
   * @apiUse TokenError
   */
  async deleteUser (ctx) {
    try {
      const user = ctx.body.user

      // await user.remove()
      await _this.useCases.user.deleteUser(user)

      ctx.status = 200
      ctx.body = {
        success: true
      }
    } catch (err) {
      ctx.throw(422, err.message)
    }
  }

  // DRY error handler
  handleError (ctx, err) {
    // If an HTTP status is specified by the buisiness logic, use that.
    if (err.status) {
      if (err.message) {
        ctx.throw(err.status, err.message)
      } else {
        ctx.throw(err.status)
      }
    } else {
      // By default use a 422 error if the HTTP status is not specified.
      ctx.throw(422, err.message)
    }
  }
}

export default UserRESTControllerLib
