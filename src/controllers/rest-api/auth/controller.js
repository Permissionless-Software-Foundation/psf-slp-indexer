import Passport from '../../../adapters/passport.js'
const passport = new Passport()

let _this

class AuthRESTController {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating Auth REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating Auth REST Controller.'
      )
    }

    _this = this
    this.passport = passport
  }

  /**
   * @apiDefine TokenError
   * @apiError Unauthorized Invalid JWT token
   *
   * @apiErrorExample {json} Unauthorized-Error:
   *     HTTP/1.1 401 Unauthorized
   *     {
   *       "status": 401,
   *       "error": "Unauthorized"
   *     }
   */

  /**
   * @api {post} /auth Authenticate user
   * @apiName AuthUser
   * @apiGroup Auth
   *
   * @apiParam {String} username  User username.
   * @apiParam {String} password  User password.
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X POST -d '{ "username": "johndoe@gmail.com", "password": "foo" }' localhost:5000/auth
   *
   * @apiSuccess {Object}   user           User object
   * @apiSuccess {ObjectId} user._id       User id
   * @apiSuccess {String}   user.name      User name
   * @apiSuccess {String}   user.username  User username
   * @apiSuccess {String}   token          Encoded JWT
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "user": {
   *          "_id": "56bd1da600a526986cf65c80"
   *          "username": "johndoe"
   *        },
   *       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
   *     }
   *
   * @apiError Unauthorized Incorrect credentials
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 401 Unauthorized
   *     {
   *       "status": 401,
   *       "error": "Unauthorized"
   *     }
   */
  async authUser (ctx, next) {
    try {
      // Retrieve the user from the database after they've proven the correct
      // password.
      const user = await _this.passport.authUser(ctx, next)
      if (!user) {
        ctx.throw(401)
      }

      const token = user.generateToken()

      const response = user.toJSON()

      delete response.password

      ctx.body = {
        token,
        user: response
      }
    } catch (err) {
      ctx.throw(401)
    }
  }
}

export default AuthRESTController
