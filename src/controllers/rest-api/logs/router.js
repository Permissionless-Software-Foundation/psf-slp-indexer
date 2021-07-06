/*
  REST Router for the /logs route.
*/

// Public npm libraries.
const Router = require('koa-router')

// Local libraries.
const LogsRESTControllerLib = require('./controller')
const Validators = require('../middleware/validators')

// let _this

class LogsRESTRouter {
  constructor (localConfig = {}) {
    // Encapsulate dependencies.
    this.logsRESTController = new LogsRESTControllerLib()
    this.validators = new Validators()

    // Instantiate the router and set the base route.
    const baseUrl = '/logs'
    this.router = new Router({ prefix: baseUrl })

    // _this = this
  }

  attachControllers (app) {
    if (!app) {
      throw new Error(
        'Must pass app object when attaching REST API controllers.'
      )
    }

    // Define the routes and attach the controller.
    this.router.post('/', this.logsRESTController.getLogs)

    // Attach the Controller routes to the Koa app.
    app.use(this.router.routes())
    app.use(this.router.allowedMethods())
  }
}

module.exports = LogsRESTRouter
