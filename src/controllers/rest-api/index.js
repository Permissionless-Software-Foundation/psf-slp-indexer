/*
  This index file for the Clean Architecture Controllers loads dependencies,
  creates instances, and attaches the controller to REST API endpoints for
  Koa.
*/

// Public npm libraries.

// Local libraries
import ContactRESTController from './contact/index.js'
import LogsRESTController from './logs/index.js'
import SlpRESTController from './slp/index.js'

class RESTControllers {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating REST Controller libraries.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating REST Controller libraries.'
      )
    }

    // console.log('Controllers localConfig: ', localConfig)
  }

  attachRESTControllers (app) {
    const dependencies = {
      adapters: this.adapters,
      useCases: this.useCases
    }

    // Attach the REST API Controllers associated with the /contact route
    const contactRESTController = new ContactRESTController(dependencies)
    contactRESTController.attach(app)

    // Attach the REST API Controllers associated with the /logs route
    const logsRESTController = new LogsRESTController(dependencies)
    logsRESTController.attach(app)

    const slpRESTController = new SlpRESTController(dependencies)
    slpRESTController.attach(app)

    return true
  }
}

export default RESTControllers
