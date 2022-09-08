/*
  End-to-end tests for /auth endpoints.

  This test sets up the environment for other e2e tests.
*/

// Public npm libraries
import { assert } from 'chai'

import axios from 'axios'

// const sinon = require('sinon')

// Local support libraries
import config from '../../../config/index.js'

import Server from '../../../bin/server.js'
import testUtils from '../../utils/test-utils.js'
import AdminLib from '../../../src/adapters/admin.js'
const adminLib = new AdminLib()

// const request = supertest.agent(app.listen())
const context = {}

const LOCALHOST = `http://localhost:${config.port}`

describe('Auth', () => {
  before(async () => {
    const app = new Server()

    // This should be the first instruction. It starts the REST API server.
    await app.startServer()

    // Stop the IPFS node for the rest of the e2e tests.
    // await app.controllers.adapters.ipfs.stop()

    // Delete all previous users in the database.
    await testUtils.deleteAllUsers()

    // Create a new admin user.
    await adminLib.createSystemUser()

    const userObj = {
      email: 'test@test.com',
      password: 'pass',
      name: 'test'
    }
    const testUser = await testUtils.createUser(userObj)
    // console.log('TestUser: ', testUser)

    context.user = testUser.user
    context.token = testUser.token
  })

  describe('POST /auth', () => {
    it('should throw 401 if credentials are incorrect', async () => {
      try {
        const options = {
          method: 'post',
          url: `${LOCALHOST}/auth`,
          data: {
            email: 'test@test.com',
            password: 'wrongpassword'
          }
        }

        const result = await axios(options)

        // console.log(`result: ${JSON.stringify(result, null, 2)}`)

        console.log(
          `result stringified: ${JSON.stringify(result.data, null, 2)}`
        )
        assert(false, 'Unexpected result')
      } catch (err) {
        assert(err.response.status === 401, 'Error code 401 expected.')
      }
    })

    it('should throw 401 if email is wrong format', async () => {
      try {
        const options = {
          method: 'post',
          url: `${LOCALHOST}/auth`,
          data: {
            email: 'wrongEmail',
            password: 'wrongpassword'
          }
        }

        await axios(options)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert(err.response.status === 401, 'Error code 401 expected.')
      }
    })

    it('should auth user', async () => {
      try {
        const options = {
          method: 'post',
          url: `${LOCALHOST}/auth`,
          data: {
            email: 'test@test.com',
            password: 'pass'
          }
        }
        const result = await axios(options)
        // console.log(`result: ${JSON.stringify(result.data, null, 2)}`)

        assert(result.status === 200, 'Status Code 200 expected.')
        assert(
          result.data.user.email === 'test@test.com',
          'Email of test expected'
        )
        assert(
          result.data.user.password === undefined,
          'Password expected to be omited'
        )
      } catch (err) {
        console.log(
          'Error authenticating test user: ' + JSON.stringify(err, null, 2)
        )
        throw err
      }
    })
  })
})
