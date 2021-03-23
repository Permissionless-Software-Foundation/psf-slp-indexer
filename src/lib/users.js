/*
  This library contains business-logic for dealing with users. Most of these
  functions are called by the /user REST API endpoints.
*/

const UserModel = require('../models/users')
const wlogger = require('./wlogger')

class UserLib {
  constructor (configObj) {
    // Encapsulate dependencies
    this.UserModel = UserModel
  }

  // Returns an array of all user models in the Mongo database.
  async getAllUsers () {
    try {
      // Get all user models. Delete the password property from each model.
      const users = await this.UserModel.find({}, '-password')

      return users
    } catch (err) {
      wlogger.error('Error in lib/users.js/getAllUsers()')
      throw err
    }
  }

  // Get the model for a specific user.
  async getUser (params) {
    try {
      const { id } = params

      const user = await this.UserModel.findById(id, '-password')

      // Throw a 404 error if the user isn't found.
      if (!user) {
        const err = new Error('User not found')
        err.status = 404
        throw err
      }

      return user
    } catch (err) {
      // console.log('Error in getUser: ', err)

      if (err.status === 404) throw err

      // Return 422 for any other error
      err.status = 422
      err.message = 'Unprocessable Entity'
      throw err
    }
  }
}

module.exports = UserLib
