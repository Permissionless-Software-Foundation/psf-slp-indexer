/*
  A library of utility functions for working with FullStack.cash JWT tokens.

  Feel free to copy this library into your own app, as well as the unit tests
  for this file.
*/

import JwtLib from 'jwt-bch-lib'

import BCHJS from '@psf/bch-js'

class FullStackJWT {
  constructor (localConfig = {}) {
    // Input Validation
    this.authServer = localConfig.authServer
    if (!this.authServer || typeof this.authServer !== 'string') {
      throw new Error(
        'Must pass a url for the AUTH server when instantiating FullStackJWT class.'
      )
    }
    this.apiServer = localConfig.apiServer
    if (!this.apiServer || typeof this.apiServer !== 'string') {
      throw new Error(
        'Must pass a url for the API server when instantiating FullStackJWT class.'
      )
    }
    this.login = localConfig.fullstackLogin
    if (!this.login || typeof this.login !== 'string') {
      throw new Error(
        'Must pass a FullStack.cash login (email) instantiating FullStackJWT class.'
      )
    }
    this.password = localConfig.fullstackPassword
    if (!this.password || typeof this.password !== 'string') {
      throw new Error(
        'Must pass a FullStack.cash account password when instantiating FullStackJWT class.'
      )
    }

    // Encapsulate dependencies
    this.jwtLib = new JwtLib({
      // Overwrite default values with the values in the config file.
      server: this.authServer,
      login: this.login,
      password: this.password
    })

    // State
    this.apiToken = '' // Default value.
    this.bchjs = {}
  }

  // Get's a JWT token from FullStack.cash.
  async getJWT () {
    try {
      // Log into the auth server.
      await this.jwtLib.register()

      this.apiToken = this.jwtLib.userData.apiToken
      if (!this.apiToken) {
        throw new Error('This account does not have a JWT')
      }
      console.log(`Retrieved JWT token: ${this.apiToken}\n`)

      // Ensure the JWT token is valid to use.
      const isValid = await this.jwtLib.validateApiToken()

      // Get a new token with the same API level, if the existing token is not
      // valid (probably expired).
      if (!isValid.isValid) {
        this.apiToken = await this.jwtLib.getApiToken(
          this.jwtLib.userData.apiLevel
        )
        console.log(
          `The JWT token was not valid. Retrieved new JWT token: ${this.apiToken}\n`
        )
      } else {
        console.log('JWT token is valid.\n')
      }

      return this.apiToken
    } catch (err) {
      console.error(
        `Error trying to log into ${this.server} and retrieve JWT token.`
      )
      throw err
    }
  }

  // Create an instance of bchjs with the validated JWT token. Returns this
  // instance of bch-js.
  instanceBchjs () {
    this.bchjs = new BCHJS({
      restURL: this.apiServer,
      apiToken: this.apiToken
    })

    return this.bchjs
  }
}

export default FullStackJWT
