/*
  This is a top-level library that encapsulates all the additional Controllers.
  The concept of Controllers comes from Clean Architecture:
  https://troutsblog.com/blog/clean-architecture
*/

// Public npm libraries.

// Load the Clean Architecture Adapters library
const adapters = require('../adapters')

// Load the JSON RPC Controller.
const JSONRPC = require('./json-rpc')

// Load the Clean Architecture Use Case libraries.
const UseCases = require('../use-cases')
const useCases = new UseCases({ adapters })

// Load the REST API Controllers.
const RESTControllers = require('./rest-api')

// Top-level function for this library.
// Start the various Controllers and attach them to the app.
async function attachControllers (app) {
  // Attach the REST controllers to the Koa app.
  attachRESTControllers(app)

  // Start IPFS.
  await adapters.ipfs.start()

  attachRPCControllers()
}

function attachRESTControllers (app) {
  const rESTControllers = new RESTControllers({
    adapters,
    useCases
  })

  // Attach the REST API Controllers associated with the boilerplate code to the Koa app.
  rESTControllers.attachRESTControllers(app)
}

// Add the JSON RPC router to the ipfs-coord adapter.
function attachRPCControllers () {
  const jsonRpcController = new JSONRPC({ adapters, useCases })

  // Attach the input of the JSON RPC router to the output of ipfs-coord.
  adapters.ipfs.ipfsCoordAdapter.attachRPCRouter(jsonRpcController.router)
}

module.exports = { attachControllers }
