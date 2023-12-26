/*
  REST API library for /slp route.
*/

// Public npm libraries.
import Router from 'koa-router'

// Local libraries.
import SspRESTControllerLib from './controller.js'
// import Validators from '../middleware/validators'

// let _this

class SspRouter {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating SSP REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating SSP REST Controller.'
      )
    }

    const dependencies = {
      adapters: this.adapters,
      useCases: this.useCases
    }

    // Encapsulate dependencies.
    this.sspRESTController = new SspRESTControllerLib(dependencies)
    // this.validators = new Validators()

    // Instantiate the router and set the base route.
    const baseUrl = '/ssp'
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
    this.router.get('/stores', this.sspRESTController.getStores)
    this.router.get('/claims/:tokenId', this.sspRESTController.getClaims)
    // this.router.post('/address', this.slpRESTController.address)
    // this.router.post('/tx', this.slpRESTController.tx)
    // this.router.post('/token', this.slpRESTController.token)

    // Attach the Controller routes to the Koa app.
    app.use(this.router.routes())
    app.use(this.router.allowedMethods())
  }
}

// module.exports = SspRouter
export default SspRouter
