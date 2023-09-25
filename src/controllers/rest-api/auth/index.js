/*
  REST API library for auth route.
*/

// Public npm libraries.
import Router from 'koa-router'

// Local libraries.
import AuthRESTController from './controller.js'

class AuthRouter {
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

    // Encapsulate dependencies.
    this.authRESTController = new AuthRESTController(localConfig)

    // Instantiate the router and set the base route.
    const baseUrl = '/auth'
    this.router = new Router({ prefix: baseUrl })
  }

  attach (app) {
    if (!app) {
      throw new Error(
        'Must pass app object when attached REST API controllers.'
      )
    }

    // Define the routes and attach the controller.
    this.router.post('/', this.authRESTController.authUser)

    // Attach the Controller routes to the Koa app.
    app.use(this.router.routes())
    app.use(this.router.allowedMethods())
  }
}

export default AuthRouter
