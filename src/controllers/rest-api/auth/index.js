/*
  REST API library for auth route.
*/

const AuthRESTRouter = require('./router')

class AuthRESTController {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating PostEntry REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating PostEntry REST Controller.'
      )
    }

    this.authRESTRouter = new AuthRESTRouter(localConfig)
  }

  attach (app) {
    this.authRESTRouter.attachControllers(app)
  }
}

module.exports = AuthRESTController
