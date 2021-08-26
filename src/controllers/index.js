/*
  This is a top-level library that encapsulates all the additional Controllers.
  The concept of Controllers comes from Clean Architecture:
  https://troutsblog.com/blog/clean-architecture
*/

// Public npm libraries.

// Load the Clean Architecture Adapters library
const Adapters = require('../adapters')

// Load the JSON RPC Controller.
const JSONRPC = require('./json-rpc')

// Load the Clean Architecture Use Case libraries.
const UseCases = require('../use-cases')
// const useCases = new UseCases({ adapters })

// Load the REST API Controllers.
const RESTControllers = require('./rest-api')

class Controllers {
  constructor (localConfig = {}) {
    this.adapters = new Adapters()
    this.useCases = new UseCases({ adapters: this.adapters })
  }

  async attachControllers (app) {
    // Wait for any startup processes to complete for the Adapters libraries.
    await this.adapters.start()

    // Attach the REST controllers to the Koa app.
    // this.attachRESTControllers(app)

    this.attachRPCControllers()
  }

  // Top-level function for this library.
  // Start the various Controllers and attach them to the app.
  attachRESTControllers (app) {
    const restControllers = new RESTControllers({
      adapters: this.adapters,
      useCases: this.useCases
    })

    // Attach the REST API Controllers associated with the boilerplate code to the Koa app.
    restControllers.attachRESTControllers(app)
  }

  // Add the JSON RPC router to the ipfs-coord adapter.
  attachRPCControllers () {
    const jsonRpcController = new JSONRPC({
      adapters: this.adapters,
      useCases: this.useCases
    })

    // Attach the input of the JSON RPC router to the output of ipfs-coord.
    this.adapters.ipfs.ipfsCoordAdapter.attachRPCRouter(
      jsonRpcController.router
    )
  }
}

module.exports = Controllers
