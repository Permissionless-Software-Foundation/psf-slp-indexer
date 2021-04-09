
const LogsApiLib = require('../../lib/logapi')
const logsApiLib = new LogsApiLib()
let _this

class LogsApi {
  constructor () {
    _this = this
    _this.logsApiLib = logsApiLib
  }

  /**
   * @api {post} /logapi Parse and return the log files.
   * @apiPermission public
   * @apiName LogApi
   * @apiGroup Logs
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X POST -d '{ "password": "secretpasas" }' localhost:5000/logapi
   *
   * @apiParam {String} password Password (required)
   *
   * @apiSuccess {Array}   users           User object
   * @apiSuccess {ObjectId} users._id       User id
   * @apiSuccess {String}   user.type       User type (admin or user)
   * @apiSuccess {String}   users.name      User name
   * @apiSuccess {String}   users.username  User username
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "user": {
   *          "_id": "56bd1da600a526986cf65c80"
   *          "name": "John Doe"
   *          "username": "johndoe"
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
  async getLogs (ctx) {
    try {
      // console.log('entering getLogs()')

      // Get the user-provided password.
      const password = ctx.request.body.password
      const result = await _this.logsApiLib.getLogs(password)
      ctx.body = result
    } catch (err) {
      if (err && err.message) {
        ctx.throw(422, err.message)
      } else {
        ctx.throw(500, 'Unhandled error')
      }
    }
  }
}

module.exports = LogsApi
