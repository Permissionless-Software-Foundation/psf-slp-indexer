/*
  Validators for the JSON RPC
*/
/* eslint no-useless-catch: 0 */

// Public npm libraries
import jwt from 'jsonwebtoken'

// Local libraries
import config from '../../../config/index.js'

// const UserModel = require('../../adapters/localdb/models/users')

class Validators {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating JSON RPC Validators library.'
      )
    }

    // Encapsulate dependencies
    this.config = config
    this.jwt = jwt
    this.UserModel = this.adapters.localdb.Users
  }

  // Returns if user passes a valid JWT token that resolves to a valid user.
  // Otherwise it throws an error.
  async ensureUser (rpcData) {
    try {
      // console.log('rpcData: ', rpcData)

      const apiToken = rpcData.payload.params.apiToken
      if (!apiToken) throw new Error('apiToken JWT required as a parameter')

      const decoded = this.jwt.verify(apiToken, this.config.token)

      const user = await this.UserModel.findById(decoded.id, '-password')
      if (!user) throw new Error('User not found!')

      return user
    } catch (err) {
      // console.error('Error in ensureUser()')
      throw err
    }
  }

  // This middleware ensures that the :id used in the API endpoint matches the
  // the ID used in the JWT, or failing that, the ID used in the JWT matches
  // an Admin user. This prevents situations like users updating other users
  // profiles or non-admins deleting users.
  async ensureTargetUserOrAdmin (rpcData) {
    try {
      // console.log('rpcData: ', rpcData)

      // Ensure the JWT is passed in.
      const apiToken = rpcData.payload.params.apiToken
      if (!apiToken) throw new Error('apiToken JWT required as a parameter')

      // Ensure a target user ID is provided.
      const targetUserId = rpcData.payload.params.userId
      if (!targetUserId) throw new Error('userId must be specified')

      // Decode the JWT token.
      const decoded = this.jwt.verify(apiToken, this.config.token)

      // Get the user described by the JWT token.
      const user = await this.UserModel.findById(decoded.id, '-password')
      if (!user) throw new Error('User not found!')

      // If this current user is an admin, then quietly exit.
      if (user.type === 'admin') return true

      // Throw an error if the JWT token does not match the targeted user.
      if (user._id.toString() !== targetUserId) {
        throw new Error('User is neither admin nor target user.')
      }

      // Get the user model for the targeted User
      const targetedUser = await this.UserModel.findById(
        targetUserId,
        '-password'
      )

      // Return the user model.
      return targetedUser
    } catch (error) {
      // console.error('Error in ensureUser()')
      throw error
    }
  }
}

export default Validators
