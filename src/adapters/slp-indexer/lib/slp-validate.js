/*
  Adapter library for slp-validate.js.
*/

const slpValidate = require('@chris.troutner/slp-validate')
const ValidatorType1 = slpValidate.ValidatorType1

const config = require('../../../../config')

const RpcClient = require('bitcoin-rpc-promise-retry')
const RPC_USER = config.rpcUser
const RPC_PASS = config.rpcPass
// const RPC_URL = '172.17.0.1:8332'
const RPC_URL = config.rpcUri

const connectionString = `http://${RPC_USER}:${RPC_PASS}@${RPC_URL}`
console.log(`connectionString: ${connectionString}`)

let _this

class SlpValidate {
  constructor () {
    // Instantiate the RPC connection to the full node.
    this.rpc = new RpcClient(connectionString)

    _this = this
  }

  // Validates an SLP token TXID.
  async validateTxid (txid) {
    // console.log(`ctx: ${JSON.stringify(ctx, null, 2)}`)

    try {
      // Track time of execution.
      // console.time('SLP-VALIDATE-RPC')

      // Instantiate the validator.
      const slpValidator = new ValidatorType1({
        getRawTransaction: async (txid) => {
          const rawTx = await _this.rpc.getRawTransaction(txid)
          // console.log(`rawTx: ${JSON.stringify(rawTx, null, 2)}`)
          return rawTx
        }
      })

      // console.log('This may take a several seconds...')

      // false by default.
      let isValid = false

      try {
        // Validate the txid.
        isValid = await slpValidator.isValidSlpTxid({ txid })
      } catch (error) {
        console.log(error)
        isValid = false
      }

      return isValid
    } catch (err) {
      console.error('Error in validateTxid()')
      throw err
    }
  }
}

module.exports = SlpValidate
