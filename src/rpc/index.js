/*
  This is the parent class library for the RPC controller.
*/

class JSONRPC {
  constructor (localConfig) {
    console.log('instantiating JSONRPC')
  }

  // This method takes a raw string of data from IPFS, parses it, and determins
  // which controller to route the instruction to.
  router (str) {
    try {
      console.log('router str: ', str)
    } catch (err) {
      console.error('Error in rpc router()')
      throw err
    }
  }
}

module.exports = JSONRPC
