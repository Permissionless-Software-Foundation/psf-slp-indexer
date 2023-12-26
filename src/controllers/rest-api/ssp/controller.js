/*
  REST API Controller library for the /slp route
*/

// Local libraries
import config from '../../../../config/index.js'
// const { wlogger } = require('../../../adapters/wlogger')

let _this

class SspRESTControllerLib {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating /ssp REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating /ssp REST Controller.'
      )
    }

    // Encapsulate dependencies
    this.config = config
    // this.UserModel = this.adapters.localdb.Users
    // this.userUseCases = this.useCases.user

    _this = this
  }

  /**
   * @api {get} /ssp/stores SSP Stores
   * @apiPermission public
   * @apiName Stores
   * @apiGroup REST SSP
   * @apiDescription Get SSP indexed stores
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5001/ssp/stores
   *
   *
   * @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   * {
   *   "status": {
   *     "startBlockHeight": 543376,
   *     "syncedBlockHeight": "543378",
   *     "chainBlockHeight": "722004"
   *   }
   * }
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 422 Unprocessable Entity
   *     {
   *       "status": 422,
   *       "error": "Unprocessable Entity"
   *     }
   */
  async getStores (ctx) {
    try {
      // const address = ctx.request.body.address

      // console.log('hello world')

      // const result = await _this.adapters.slpIndexer.query.getAddress(address)

      // const storeList = await _this.adapters.slpIndexer.statusDb.get('sspList')
      // const stores = JSON.parse(storeList)

      const stores = await _this.adapters.slpIndexer.statusDb.get('sspList')

      // const status = true
      // console.log('status: ', status)

      ctx.body = {
        stores
      }
    } catch (err) {
      _this.handleError(ctx, err)
    }
  }

  /**
   * @api {get} /ssp/stores SSP Stores
   * @apiPermission public
   * @apiName Stores
   * @apiGroup REST SSP
   * @apiDescription Get SSP indexed stores
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5001/ssp/claims/9fe85e577562e120447f22e8fa0fbeec210d1f3844e05192e8819bde75366dc0
   *
   *
   * @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   * {
   *   "status": {
   *     "startBlockHeight": 543376,
   *     "syncedBlockHeight": "543378",
   *     "chainBlockHeight": "722004"
   *   }
   * }
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 422 Unprocessable Entity
   *     {
   *       "status": 422,
   *       "error": "Unprocessable Entity"
   *     }
   */
  async getClaims (ctx) {
    try {
      const tokenId = ctx.params.tokenId

      // const address = ctx.request.body.addres

      // console.log('hello world')

      // const result = await _this.adapters.slpIndexer.query.getAddress(address)

      const claims = await _this.adapters.slpIndexer.claimDb.get(tokenId)
      // const status = true
      // console.log('status: ', status)

      ctx.body = {
        claims
      }
    } catch (err) {
      _this.handleError(ctx, err)
    }
  }

  // DRY error handler
  handleError (ctx, err) {
    // If an HTTP status is specified by the buisiness logic, use that.
    if (err.status) {
      if (err.message) {
        ctx.throw(err.status, err.message)
      } else {
        ctx.throw(err.status)
      }
    } else {
      // By default use a 422 error if the HTTP status is not specified.
      ctx.throw(422, err.message)
    }
  }
}

// module.exports = SspRESTControllerLib
export default SspRESTControllerLib
