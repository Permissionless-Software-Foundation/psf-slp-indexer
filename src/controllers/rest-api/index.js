/*
  This index file for the Clean Architecture Controllers loads dependencies,
  creates instances, and attaches the controller to REST API endpoints for
  Koa.
*/

// Public npm libraries.

// Load the REST API Controllers.
const AuthRESTController = require('./auth')
const UserRESTController = require('./users')
const ContactRESTController = require('./contact')
const LogsRESTController = require('./logs')

class RESTControllers {
  constructor (localConfig) {
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

    // console.log('Controllers localConfig: ', localConfig)
  }

  attachRESTControllers (app) {
    const dependencies = {
      adapters: this.adapters,
      useCases: this.useCases
    }

    // Attach the REST API Controllers associated with the /auth route
    const authRESTController = new AuthRESTController(dependencies)
    authRESTController.attach(app)

    // Attach the REST API Controllers associated with the /user route
    const userRESTController = new UserRESTController(dependencies)
    userRESTController.attach(app)

    // Attach the REST API Controllers associated with the /contact route
    const contactRESTController = new ContactRESTController(dependencies)
    contactRESTController.attach(app)

    // Attach the REST API Controllers associated with the /logs route
    const logsRESTController = new LogsRESTController(dependencies)
    logsRESTController.attach(app)
  }
}

module.exports = RESTControllers
