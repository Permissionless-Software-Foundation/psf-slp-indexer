/*
  REST API library for /user route.
*/

const UserRESTRouter = require('./router')

class UserRESTController {
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

    this.userRESTRouter = new UserRESTRouter(localConfig)
  }

  attach (app) {
    this.userRESTRouter.attachControllers(app)
  }
}

module.exports = UserRESTController
