/*
  This is a top-level library that encapsulates all the additional Controllers.
  The concept of Controllers comes from Clean Architecture:
  https://troutsblog.com/blog/clean-architecture
*/

// Public npm libraries.

// Load the Clean Architecture Adapters library
import Adapters from '../adapters/index.js'

// Load the JSON RPC Controller.
import JSONRPC from './json-rpc/index.js'

// Load the Clean Architecture Use Case libraries.
import UseCases from '../use-cases/index.js'

// const useCases = new UseCases({ adapters })

// Load the REST API Controllers.
import RESTControllers from './rest-api/index.js'

class Controllers {
  constructor (localConfig = {}) {
    this.adapters = new Adapters()
    this.useCases = new UseCases({ adapters: this.adapters })
  }

  // Spin up any adapter libraries that have async startup needs.
  async initAdapters () {
    await this.adapters.start()
  }

  // Run any Use Cases to startup the app.
  async initUseCases () {
    await this.useCases.start()
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

  // Attach any other controllers other than REST API controllers.
  async attachControllers (app) {
    // Wait for any startup processes to complete for the Adapters libraries.
    // await this.adapters.start()

    // Attach the REST controllers to the Koa app.
    // this.attachRESTControllers(app)

    this.attachRPCControllers()
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

export default Controllers
