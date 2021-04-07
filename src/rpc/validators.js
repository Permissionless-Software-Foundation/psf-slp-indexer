/*
  Validators for the JSON RPC
*/
/* eslint no-useless-catch: 0 */

// Public npm libraries
const jwt = require('jsonwebtoken')

// Local libraries
const config = require('../../config')
const UserModel = require('../models/users')

class Validators {
  constructor () {
    // Encapsulate dependencies
    this.config = config
    this.UserModel = UserModel
    this.jwt = jwt
  }

  // Returns if user passes a valid JWT token. Otherwise it throws an error.
  async ensureUser (rpcData) {
    try {
      // console.log('rpcData: ', rpcData)

      const apiToken = rpcData.payload.params.apiToken
      if (!apiToken) throw new Error('apiToken JWT required as a parameter')

      const decoded = this.jwt.verify(apiToken, this.config.token)

      const user = await this.UserModel.findById(decoded.id, '-password')
      if (!user) throw new Error('User not found!')
    } catch (err) {
      // console.error('Error in ensureUser()')
      throw err
    }
  }
}

module.exports = Validators
