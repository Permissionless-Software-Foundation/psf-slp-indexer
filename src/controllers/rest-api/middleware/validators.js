/*
  REST API validator middleware.

  These are a series of functions that ensure the user making a REST API
  matches a user in the database (or not). In can do fine-grain user control
  such as telling the difference between an admin, a normal user, and an
  anonymous user.

  This middleware is used to gatekeep access to different REST API resources.

  CT 9/17/22:
  This library was lightly refactored to make it work with the new unit tests.
  This not and the commented code below can be deleted once it is verified that
  this refactor did not result in any breaking changes.
*/

import User from '../../../adapters/localdb/models/users.js'

import config from '../../../../config/index.js'
import jwt from 'jsonwebtoken'
import wlogger from '../../../adapters/wlogger.js'

let _this

class Validators {
  constructor () {
    this.User = User
    this.jwt = jwt
    this.config = config

    _this = this
  }

  async ensureUser (ctx, next) {
    try {
      const token = _this.getToken(ctx)

      if (!token) {
        throw new Error('Token could not be retrieved from header')
      }

      let decoded = null
      try {
        // console.log(`token: ${JSON.stringify(token, null, 2)}`)
        // console.log(`config: ${JSON.stringify(config, null, 2)}`)
        decoded = _this.jwt.verify(token, config.token)
      } catch (err) {
        throw new Error('Could not verify JWT')
      }

      ctx.state.user = await _this.User.findById(decoded.id, '-password')

      if (!ctx.state.user) {
        // console.log('Err: Could not find user.')
        throw new Error('Could not find user')
      }

      // return next()
      return true
    } catch (error) {
      // console.log('Ensure user error: ', error)
      // console.log('ctx: ', ctx)
      ctx.status = 401
      ctx.throw(401, error.message)
    }
  }

  // This funciton is almost identical to ensureUser, except at the end, it verifies
  // that the 'type' associated with the user equals 'admin'.
  async ensureAdmin (ctx, next) {
    try {
      // console.log(`getToken: ${typeof (getToken)}`)
      const token = _this.getToken(ctx)

      if (!token) {
        // console.log(`Err: Token not provided.`)
        // ctx.throw(401)
        throw new Error('Token could not be retrieved from header')
      }

      let decoded = null
      try {
        // console.log(`token: ${JSON.stringify(token, null, 2)}`)
        // console.log(`config: ${JSON.stringify(config, null, 2)}`)
        decoded = _this.jwt.verify(token, config.token)
      } catch (err) {
        // console.log(`Err: Token could not be decoded: ${err}`)
        // ctx.throw(401)
        throw new Error('Could not verify JWT')
      }

      ctx.state.user = await _this.User.findById(decoded.id, '-password')
      if (!ctx.state.user) {
        // console.log(`Err: Could not find user.`)
        // ctx.throw(401)
        throw new Error('Could not find user')
      }

      if (ctx.state.user.type !== 'admin') {
        // ctx.throw(401, 'not admin')
        throw new Error('User is not an admin')
      }

      // return next()
      return true
    } catch (error) {
      ctx.status = 401
      ctx.throw(401, error.message)
    }
  }

  // This middleware ensures that the :id used in the API endpoint matches the
  // the ID used in the JWT, or failing that, the ID used in the JWT matches
  // an Admin user. This prevents situations like users updating other users
  // profiles or non-admins deleting users.
  async ensureTargetUserOrAdmin (ctx, next) {
    try {
      // console.log(`getToken: ${typeof (getToken)}`)
      const token = _this.getToken(ctx)

      if (!token) {
        // console.log(`Err: Token not provided.`)
        // ctx.throw(401)
        throw new Error('Token could not be retrieved from header')
      }

      // The user ID targeted in this API call.
      const targetId = ctx.params.id
      // console.log(`targetId: ${JSON.stringify(targetId, null, 2)}`)

      let decoded = null
      try {
        // console.log(`token: ${JSON.stringify(token, null, 2)}`)
        // console.log(`config: ${JSON.stringify(config, null, 2)}`)
        decoded = _this.jwt.verify(token, config.token)
      } catch (err) {
        console.log(`Err: Token could not be decoded: ${err}`)
        // ctx.throw(401)
        throw new Error('Could not verify JWT')
      }

      ctx.state.user = await _this.User.findById(decoded.id, '-password')
      if (!ctx.state.user) {
        // console.log(`Err: Could not find user.`)
        // ctx.throw(401)
        throw new Error('Could not find user')
      }
      // console.log('ctx.state.user: ', ctx.state.user)

      // console.log(`ctx.state.user: ${JSON.stringify(ctx.state.user, null, 2)}`)
      // Ensure the calling user and the target user are the same.

      if (ctx.state.user._id.toString() !== targetId.toString()) {
        wlogger.verbose(
          `Calling user and target user do not match! Calling user: ${ctx.state.user._id}, Target user: ${targetId}`
        )

        // If they don't match, then the calling user better be an admin.
        if (ctx.state.user.type !== 'admin') {
          // ctx.throw(401, 'not admin')
          throw new Error('User is not an admin')
        } else {
          wlogger.verbose("It's ok. The user is an admin.")
        }
      }

      // return next()
      return true
    } catch (error) {
      // console.log('Error in ensureTargetUserOrAdmin(): ', error)
      ctx.status = 401
      ctx.throw(401, error.message)
    }
  }

  getToken (ctx) {
    const header = ctx.request.header.authorization
    if (!header) {
      return null
    }
    const parts = header.split(' ')
    if (parts.length !== 2) {
      return null
    }
    const scheme = parts[0]
    const token = parts[1]
    if (/^Bearer$/i.test(scheme)) {
      return token
    }
    return null
  }
}

export default Validators
