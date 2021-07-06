/*
  REST Router for the /auth route.
*/

// Public npm libraries.
const Router = require('koa-router')

// Local libraries.
const AuthRESTController = require('./controller')

class AuthRESTRouter {
  constructor (localConfig = {}) {
    // Encapsulate dependencies.
    this.authRESTController = new AuthRESTController()

    // Instantiate the router and set the base route.
    const baseUrl = '/auth'
    this.router = new Router({ prefix: baseUrl })
  }

  attachControllers (app) {
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

module.exports = AuthRESTRouter
