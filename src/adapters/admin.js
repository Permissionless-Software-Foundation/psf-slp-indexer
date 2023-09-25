/*
  A library for working with the system admin user. This is an auto-generated
  account with 'admin' privledges, for interacting with private APIs.

  The admin account is regenerated every time the server is started. This improves
  security by not having stale passwords for the account. The login information
  and JWT token for the admin account is written to a JSON file, for easy
  retrieval by other apps running on the server that may need admin privledges
  to access private APIs.

  This library is really more of an Adapter to the internal systems default
  admin user. It's not really a central Entity, which is why this library lives
  in the Adapter directory.
*/

// Global npm libraries
import axios from 'axios'
import mongoose from 'mongoose'

// Local libraries
import User from '../adapters/localdb/models/users.js'
import config from '../../config/index.js'
import JsonFiles from '../adapters/json-files.js'

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const jsonFiles = new JsonFiles()

const JSON_FILE = `system-user-${config.env}.json`
const JSON_PATH = `${__dirname.toString()}../../config/${JSON_FILE}`

const LOCALHOST = `http://localhost:${config.port}`
const context = {}

let _this
class Admin {
  constructor () {
    this.axios = axios
    this.User = User
    this.config = config
    this.jsonFiles = jsonFiles
    this.context = context

    _this = this
  }

  // Create the first user in the system. A 'admin' level system user that is
  // used by the Listing Manager and test scripts, in order access private API
  // functions.
  async createSystemUser () {
    // Create the system user.
    try {
      context.password = _this._randomString(20)

      const options = {
        method: 'POST',
        url: `${LOCALHOST}/users`,
        data: {
          user: {
            email: 'system@system.com',
            password: context.password,
            name: 'admin'
          }
        }
      }
      const result = await _this.axios.request(options)
      // console.log('admin.data: ', result.data)

      context.email = result.data.user.email
      context.id = result.data.user._id
      context.token = result.data.token

      // Get the mongoDB entry
      const user = await _this.User.findById(context.id)

      // Change the user type to admin
      user.type = 'admin'
      // console.log(`user created: ${JSON.stringify(user, null, 2)}`)

      // Save the user model.
      await user.save()

      // console.log(`admin user created: ${JSON.stringify(result.body, null, 2)}`)
      // console.log(`with password: ${context.password}`)

      // Write out the system user information to a JSON file that external
      // applications like the Task Manager and the test scripts can access.

      await jsonFiles.writeJSON(context, JSON_PATH)
      // console.log('context: ', context)
      // console.log('JSON_PATH: ', JSON_PATH)

      return context
    } catch (err) {
      // Handle existing system user.
      if (err.response.status === 422) {
        try {
          // Delete the existing user
          await _this.deleteExistingSystemUser()

          // Call this function again.
          return _this.createSystemUser()
        } catch (err2) {
          console.error(
            'Error in admin.js/createSystemUser() while trying generate new system user.'
          )
          // process.end(1)
          throw err2
        }
      } else {
        console.log('Error in admin.js/createSystemUser: ')
        // process.end(1)
        throw err
      }
    }
  }

  async deleteExistingSystemUser () {
    try {
      mongoose.Promise = global.Promise
      mongoose.set('useCreateIndex', true) // Stop deprecation warning.

      await mongoose.connect(config.database, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })

      await _this.User.deleteOne({ email: 'system@system.com' })
    } catch (err) {
      console.log('Error in admin.js/deleteExistingSystemUser()')
      throw err
    }
  }

  async loginAdmin () {
    // console.log(`loginAdmin() running.`)
    let existingUser

    try {
      // Read the exising file
      existingUser = await _this.jsonFiles.readJSON(JSON_PATH)
      // console.log(`existingUser: ${JSON.stringify(existingUser, null, 2)}`)

      // Log in as the user.
      const options = {
        method: 'POST',
        url: `${LOCALHOST}/auth`,
        headers: {
          Accept: 'application/json'
        },
        data: {
          email: 'system@system.com',
          password: existingUser.password
        }
      }
      const result = await _this.axios.request(options)
      // console.log(`result1: ${JSON.stringify(result, null, 2)}`)
      return result
    } catch (err) {
      console.error('Error in admin.js/loginAdmin().')

      // console.error(`existingUser: ${JSON.stringify(existingUser, null, 2)}`)

      throw err
    }
  }

  _randomString (length) {
    let text = ''
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
  }
}

export default Admin
