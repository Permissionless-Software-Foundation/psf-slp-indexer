/*
  This is the JSON RPC router for the users API

  CT 3/5/22: This library can probably be deleted. Handling of the /about endpoint
  is now directly controlled by the ipfs-coord library.
*/

// Public npm libraries
import jsonrpc from 'jsonrpc-lite'

// Local libraries
import config from '../../../../config/index.js'

class AboutRPC {
  constructor (localConfig) {
    // Encapsulate dependencies
    this.jsonrpc = jsonrpc
  }

  /**
   * @api {JSON} /about About IPFS Node
   * @apiPermission public
   * @apiName About
   * @apiGroup JSON About
   *
   * @apiExample Example usage:
   * {"jsonrpc":"2.0","id":"555","method":"about"}
   *
   * @apiDescription
   * This endpoint can be customized so that users can retrieve information about
   * your IPFS node and Service Provider application. This is a great place to
   * put a website URL, an IPFS hash, an other basic information.
   */

  // This is the top-level router for this library.
  // This is a bit different than other router libraries, because there is
  // only one response, which is a string about this node.
  async aboutRouter (rpcData) {
    console.log('debugging: aboutRouter from ipfs-service-provider triggered')

    return {
      success: true,
      status: 200,
      // message: aboutStr,
      message: JSON.stringify(config.announceJsonLd),
      endpoint: 'about'
    }
  }
}

export default AboutRPC
