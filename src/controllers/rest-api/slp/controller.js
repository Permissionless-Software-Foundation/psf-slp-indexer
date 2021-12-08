/*
  REST API Controller library for the /slp route
*/

// const { wlogger } = require('../../../adapters/wlogger')

let _this

class UserRESTControllerLib {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating /slp REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating /slp REST Controller.'
      )
    }

    // Encapsulate dependencies
    // this.UserModel = this.adapters.localdb.Users
    // this.userUseCases = this.useCases.user

    _this = this
  }

  // curl -H "Content-Type: application/json" -X POST -d '{ "address": "bitcoincash:qrfrwlxarxmsqeqjsyhdkh0fpdyt3en6xghjr6hu03" }' localhost:5001/slp/address
  async address (ctx) {
    try {
      const address = ctx.request.body.address

      const result = await _this.adapters.slpIndexer.query.getAddress(address)

      ctx.body = {
        balance: result
      }
    } catch (err) {
      _this.handleError(ctx, err)
    }
  }

  // curl -H "Content-Type: application/json" -X POST -d '{ "txid": "f3e14cd871402a766e85045dc552f2c1e87857dd3ea1b15efab6334ccef5e315" }' localhost:5001/slp/tx
  async tx (ctx) {
    try {
      const txid = ctx.request.body.txid

      const result = await _this.adapters.slpIndexer.query.getTx(txid)

      ctx.body = {
        txData: result
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

module.exports = UserRESTControllerLib
