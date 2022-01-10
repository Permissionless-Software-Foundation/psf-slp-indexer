/*
  REST API Controller library for the /slp route
*/

// Local libraries
const config = require('../../../../config')
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
    this.config = config
    // this.UserModel = this.adapters.localdb.Users
    // this.userUseCases = this.useCases.user

    _this = this
  }

  /**
   * @api {post} /slp/:address Address Balance
   * @apiPermission public
   * @apiName Address
   * @apiGroup REST SLP
   * @apiDescription Get information about an address and its SLP balances.
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X POST -d '{ "user": { "email": "email@format.com", "name": "my name", "password": "secretpasas" } }' localhost:5001/users
   *
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "balance": {
   *       "utxos": [
   *         {
   *           "txid": "a24a6a4abf06fabd799ecea4f8fac6a9ff21e6a8dd6169a3c2ebc03665329db9",
   *           "vout": 1,
   *           "type": "token",
   *           "qty": "1800",
   *           "tokenId": "a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2",
   *           "address": "bitcoincash:qrqy3kj7r822ps6628vwqq5k8hyjl6ey3y4eea2m4s"
   *         }
   *       ],
   *       "txs": [
   *         {
   *           "txid": "078b2c48ed1db0d5d5996f2889b8d847a49200d0a781f6aa6752f740f312688f",
   *           "height": 717796
   *         },
   *         {
   *           "txid": "a24a6a4abf06fabd799ecea4f8fac6a9ff21e6a8dd6169a3c2ebc03665329db9",
   *           "height": 717832
   *         }
   *       ],
   *       "balances": [
   *         {
   *           "tokenId": "a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2",
   *           "qty": "1800"
   *         }
   *       ]
   *     }
   *   }
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

  /**
   * @api {post} /slp/:txid Get TX Data
   * @apiPermission public
   * @apiName TX
   * @apiGroup REST SLP
   * @apiDescription Get transaction data, hyrated with token information.
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X POST -d '{ "txid": "f3e14cd871402a766e85045dc552f2c1e87857dd3ea1b15efab6334ccef5e315" }' localhost:5001/slp/tx
   *
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *  {
   *    "txid": "078b2c48ed1db0d5d5996f2889b8d847a49200d0a781f6aa6752f740f312688f",
   *    "hash": "078b2c48ed1db0d5d5996f2889b8d847a49200d0a781f6aa6752f740f312688f",
   *    "version": 2,
   *    "size": 513,
   *    "locktime": 0,
   *    "vin": [
   *      {
   *        "txid": "f3ad7418888fb5344394d511e373b53f99a41bd6ae35176533d7b5b5a6b21452",
   *        "vout": 2,
   *        "scriptSig": {
   *          "asm": "3044022028e19af46c77380c0177c4b3a50de780c54d7da421dfe141d969e5215446933a022049698e74a5c24d6771fb71a9f6f2ee980f5b4236e28c15cbf6112cb6171ea2b1[ALL|FORKID] 033a24d13b45eaf53bebc7da5b7ee79a39615790b4fb16dab048fdcc5abd3764ef",
   *          "hex": "473044022028e19af46c77380c0177c4b3a50de780c54d7da421dfe141d969e5215446933a022049698e74a5c24d6771fb71a9f6f2ee980f5b4236e28c15cbf6112cb6171ea2b14121033a24d13b45eaf53bebc7da5b7ee79a39615790b4fb16dab048fdcc5abd3764ef"
   *         },
   *         "sequence": 4294967295,
   *         "address": "bitcoincash:qqlrzp23w08434twmvr4fxw672whkjy0py26r63g3d",
   *         "value": 0.00000546,
   *         "tokenQtyStr": "865193.81",
   *         "tokenQty": 865193.81,
   *         "tokenId": "a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2"
   *      },
   *      {
   *         "txid": "56ee0149aaa44916cec3c780c06064411016a0c7f1ef37a538f996cbf9f241a7",
   *         "vout": 2,
   *         "scriptSig": {
   *           "asm": "304402204e98cfaa6d98db231733b2e269ef9a5d693c8d37c32671d434ee1db4f9595819022020f9908218a8ea93cbab53334932e433c57c6e4f565997979af40bf979b8e3d3[ALL|FORKID] 033a24d13b45eaf53bebc7da5b7ee79a39615790b4fb16dab048fdcc5abd3764ef",
   *           "hex": "47304402204e98cfaa6d98db231733b2e269ef9a5d693c8d37c32671d434ee1db4f9595819022020f9908218a8ea93cbab53334932e433c57c6e4f565997979af40bf979b8e3d34121033a24d13b45eaf53bebc7da5b7ee79a39615790b4fb16dab048fdcc5abd3764ef"
   *         },
   *         "sequence": 4294967295,
   *         "address": "bitcoincash:qqlrzp23w08434twmvr4fxw672whkjy0py26r63g3d",
   *         "value": 0.02796721,
   *         "tokenQty": 0,
   *         "tokenQtyStr": "0",
   *         "tokenId": null
   *      }
   *    ],
   *    "vout": [
   *      {
   *        "value": 0,
   *        "n": 0,
   *        "scriptPubKey": {
   *          "asm": "OP_RETURN 5262419 1 1145980243 a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2 00000000000007d0 0000000005282685",
   *          "hex": "6a04534c500001010453454e4420a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b20800000000000007d0080000000005282685",
   *          "type": "nulldata"
   *        },
   *        "tokenQty": null,
   *        "tokenQtyStr": null
   *      },
   *      {
   *        "value": 0.00000546,
   *        "n": 1,
   *        "scriptPubKey": {
   *          "asm": "OP_DUP OP_HASH160 c048da5e19d4a0c35a51d8e002963dc92feb2489 OP_EQUALVERIFY OP_CHECKSIG",
   *          "hex": "76a914c048da5e19d4a0c35a51d8e002963dc92feb248988ac",
   *          "reqSigs": 1,
   *          "type": "pubkeyhash",
   *          "addresses": [
   *            "bitcoincash:qrqy3kj7r822ps6628vwqq5k8hyjl6ey3y4eea2m4s"
   *          ]
   *        },
   *        "tokenQtyStr": "20",
   *        "tokenQty": 20
   *      },
   *      {
   *        "value": 0.00000546,
   *        "n": 2,
   *        "scriptPubKey": {
   *          "asm": "OP_DUP OP_HASH160 3e31055173cf58d56edb075499daf29d7b488f09 OP_EQUALVERIFY OP_CHECKSIG",
   *          "hex": "76a9143e31055173cf58d56edb075499daf29d7b488f0988ac",
   *          "reqSigs": 1,
   *          "type": "pubkeyhash",
   *          "addresses": [
   *            "bitcoincash:qqlrzp23w08434twmvr4fxw672whkjy0py26r63g3d"
   *          ]
   *        },
   *        "tokenQtyStr": "865173.81",
   *        "tokenQty": 865173.81
   *      },
   *      {
   *        "value": 0.00002,
   *        "n": 3,
   *        "scriptPubKey": {
   *          "asm": "OP_DUP OP_HASH160 203b64bfbaa9e58333295b621159ddebc591ecb1 OP_EQUALVERIFY OP_CHECKSIG",
   *          "hex": "76a914203b64bfbaa9e58333295b621159ddebc591ecb188ac",
   *          "reqSigs": 1,
   *          "type": "pubkeyhash",
   *          "addresses": [
   *            "bitcoincash:qqsrke9lh257tqen99dkyy2emh4uty0vky9y0z0lsr"
   *          ]
   *        },
   *        "tokenQty": null,
   *        "tokenQtyStr": null
   *      },
   *      {
   *        "value": 0.02793263,
   *        "n": 4,
   *        "scriptPubKey": {
   *          "asm": "OP_DUP OP_HASH160 3e31055173cf58d56edb075499daf29d7b488f09 OP_EQUALVERIFY OP_CHECKSIG",
   *          "hex": "76a9143e31055173cf58d56edb075499daf29d7b488f0988ac",
   *          "reqSigs": 1,
   *          "type": "pubkeyhash",
   *          "addresses": [
   *            "bitcoincash:qqlrzp23w08434twmvr4fxw672whkjy0py26r63g3d"
   *          ]
   *        },
   *        "tokenQty": null,
   *        "tokenQtyStr": null
   *      }
   *    ],
   *    "hex": "02000000025...0988ac00000000",
   *    "blockhash": "00000000000000000302eef092b2c75f5c36c325eadc9d36c16ec05c6ae17a97",
   *    "confirmations": 36,
   *    "time": 1639161638,
   *    "blocktime": 1639161638,
   *    "blockheight": 717796,
   *    "isSlpTx": true,
   *    "tokenTxType": "SEND",
   *    "tokenId": "a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2",
   *    "tokenType": 1,
   *    "tokenTicker": "TROUT",
   *    "tokenName": "Trout's test token",
   *    "tokenDecimals": 2,
   *    "tokenUri": "troutsblog.com",
   *    "tokenDocHash": "",
   *    "isValidSlp": true
   *    }
   *  }
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

  /**
   * @api {post} /slp/:tokenId Token Stats
   * @apiPermission public
   * @apiName Token
   * @apiGroup REST SLP
   * @apiDescription Get statistics about a token.
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X POST -d '{ "tokenId": "a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2" }' localhost:5001/slp/token
   *
   *
   * @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   * {
   *   "tokenData": {
   *     "type": 1,
   *     "ticker": "TROUT",
   *     "name": "Trout's test token",
   *     "tokenId": "a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2",
   *     "documentUri": "troutsblog.com",
   *     "documentHash": "",
   *     "decimals": 2,
   *     "mintBatonIsActive": true,
   *     "tokensInCirculationBN": "100099989900",
   *     "tokensInCirculationStr": "100099989900",
   *     "blockCreated": 622414,
   *     "totalBurned": "10100"
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
  // curl -H "Content-Type: application/json" -X POST -d '{ "tokenId": "a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2" }' localhost:5001/slp/token
  async token (ctx) {
    try {
      const tokenId = ctx.request.body.tokenId

      // Intercept if token is in the blacklist.
      const isInBlacklist = _this.adapters.slpIndexer.blacklist.checkBlacklist(tokenId)
      if (isInBlacklist) {
        ctx.body = {
          tokenData: {
            tokenId: null
          }
        }
        return
      }

      const result = await _this.adapters.slpIndexer.query.getToken(tokenId)

      ctx.body = {
        tokenData: result
      }
    } catch (err) {
      _this.handleError(ctx, err)
    }
  }

  /**
   * @api {get} /slp/status Indexer Status
   * @apiPermission public
   * @apiName Status
   * @apiGroup REST SLP
   * @apiDescription Get the indexer status
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5001/slp/status
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
  async status (ctx) {
    try {
      // const address = ctx.request.body.address

      // const result = await _this.adapters.slpIndexer.query.getAddress(address)

      const status = await _this.adapters.slpIndexer.statusDb.get('status')
      // console.log('status: ', status)

      ctx.body = {
        status
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
