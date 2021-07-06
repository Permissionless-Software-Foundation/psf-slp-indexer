/*
  REST Router for the /contact route.
*/

// Public npm libraries.
const Router = require('koa-router')

// Local libraries.
const ContactRESTControllerLib = require('./controller')
const Validators = require('../middleware/validators')

// let _this

class ContactRESTRouter {
  constructor (localConfig = {}) {
    // Encapsulate dependencies.
    this.contactRESTController = new ContactRESTControllerLib()
    this.validators = new Validators()

    // Instantiate the router and set the base route.
    const baseUrl = '/contact'
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
    this.router.post('/email', this.contactRESTController.email)

    // Attach the Controller routes to the Koa app.
    app.use(this.router.routes())
    app.use(this.router.allowedMethods())
  }
}

module.exports = ContactRESTRouter
