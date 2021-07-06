/*
  REST API library for auth route.
*/

const AuthRESTRouter = require('./router')

class AuthRESTController {
  constructor (localConfig = {}) {
    this.authRESTRouter = new AuthRESTRouter()
  }

  attach (app) {
    this.authRESTRouter.attachControllers(app)
  }
}

module.exports = AuthRESTController
