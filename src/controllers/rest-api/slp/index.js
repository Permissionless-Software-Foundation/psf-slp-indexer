/*
  REST API library for /slp route.
*/

// Public npm libraries.
// const Router = require('koa-router')
import Router from 'koa-router'

// Local libraries.
// const SlpRESTControllerLib = require('./controller')
// const Validators = require('../middleware/validators')
import SlpRESTControllerLib from './controller.js'
import Validators from '../middleware/validators.js'

// let _this

class SlpRouter {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating SLP REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating SLP REST Controller.'
      )
    }

    const dependencies = {
      adapters: this.adapters,
      useCases: this.useCases
    }

    // Encapsulate dependencies.
    this.slpRESTController = new SlpRESTControllerLib(dependencies)
    this.validators = new Validators()

    // Instantiate the router and set the base route.
    const baseUrl = '/slp'
    this.router = new Router({ prefix: baseUrl })

    // _this = this
  }

  attach (app) {
    if (!app) {
      throw new Error(
        'Must pass app object when attaching REST API controllers.'
      )
    }

    // Define the routes and attach the controller.
    this.router.get('/status', this.slpRESTController.status)
    this.router.post('/address', this.slpRESTController.address)
    this.router.post('/tx', this.slpRESTController.tx)
    this.router.post('/token', this.slpRESTController.token)

    // Attach the Controller routes to the Koa app.
    app.use(this.router.routes())
    app.use(this.router.allowedMethods())
  }
}

// module.exports = SlpRouter
export default SlpRouter
