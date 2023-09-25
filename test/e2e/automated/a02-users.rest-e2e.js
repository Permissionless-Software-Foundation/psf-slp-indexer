import testUtils from '../../utils/test-utils.js'
import { assert } from 'chai'
import config from '../../../config/index.js'
import axios from 'axios'
import sinon from 'sinon'
import util from 'util'

import UserController from '../../../src/controllers/rest-api/users/controller.js'
import Adapters from '../../../src/adapters/index.js'
import UseCases from '../../../src/use-cases/index.js'
util.inspect.defaultOptions = { depth: 1 }

const LOCALHOST = `http://localhost:${config.port}`

const context = {}
const adapters = new Adapters()
let uut
let sandbox

// const mockContext = require('../../unit/mocks/ctx-mock').context

describe('Users', () => {
  before(async () => {
    // console.log(`config: ${JSON.stringify(config, null, 2)}`)

    // Create a second test user.
    const userObj = {
      email: 'test2@test.com',
      password: 'pass2',
      name: 'test2'
    }
    const testUser = await testUtils.createUser(userObj)
    // console.log(`testUser2: ${JSON.stringify(testUser, null, 2)}`)

    context.user2 = testUser.user
    context.token2 = testUser.token
    context.id2 = testUser.user._id

    // Get the JWT used to log in as the admin 'system' user.
    const adminJWT = await testUtils.getAdminJWT()
    console.log(`adminJWT: ${adminJWT}`)
    context.adminJWT = adminJWT

    // const admin = await testUtils.loginAdminUser()
    // context.adminJWT = admin.token

    // const admin = await adminLib.loginAdmin()
    // console.log(`admin: ${JSON.stringify(admin, null, 2)}`)
  })

  beforeEach(() => {
    const useCases = new UseCases({ adapters })
    uut = new UserController({ adapters, useCases })

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('POST /users - Create User', () => {
    it('should reject signup when data is incomplete', async () => {
      try {
        const options = {
          method: 'POST',
          url: `${LOCALHOST}/users`,
          data: {
            email: 'test2@test.com'
          }
        }

        await axios(options)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert(err.response.status === 422, 'Error code 422 expected.')
      }
    })

    it('should reject signup if no email property is provided', async () => {
      try {
        const options = {
          method: 'POST',
          url: `${LOCALHOST}/users`,
          data: {
            user: {
              password: 'pass2'
            }
          }
        }
        await axios(options)

        assert(false, 'Unexpected result')
      } catch (err) {
        // console.log('err', err)
        assert.equal(err.response.status, 422)
        assert.include(err.response.data, "Property 'email' must be a string")
      }
    })

    it('should reject signup if no password property is provided', async () => {
      try {
        const options = {
          method: 'POST',
          url: `${LOCALHOST}/users`,
          data: {
            user: {
              email: 'test2@test.com'
            }
          }
        }
        await axios(options)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.response.status, 422)
        assert.include(
          err.response.data,
          "Property 'password' must be a string"
        )
      }
    })

    it('should reject if name property property is not string', async () => {
      try {
        const options = {
          method: 'POST',
          url: `${LOCALHOST}/users`,
          data: {
            user: {
              email: 'test322@test.com',
              password: 'supersecretpassword',
              name: 1234
            }
          }
        }
        await axios(options)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.equal(err.response.status, 422)
        assert.include(err.response.data, "Property 'name' must be a string")
      }
    })

    it("should signup of type 'user' by default", async () => {
      const options = {
        method: 'post',
        url: `${LOCALHOST}/users`,
        data: {
          user: {
            email: 'test3@test.com',
            password: 'supersecretpassword',
            name: 'test3'
          }
        }
      }
      const result = await axios(options)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      context.user = result.data.user
      context.token = result.data.token

      assert(result.status === 200, 'Status Code 200 expected.')
      assert(
        result.data.user.email === 'test3@test.com',
        'Email of test expected'
      )
      assert(
        result.data.user.password === undefined,
        'Password expected to be omited'
      )
      assert.property(result.data, 'token', 'Token property exists.')
      assert.equal(result.data.user.type, 'user')
    })
  })

  describe('GET /users', () => {
    it('should not fetch users if the authorization header is missing', async () => {
      try {
        const options = {
          method: 'GET',
          url: `${LOCALHOST}/users`,
          headers: {
            Accept: 'application/json'
          }
        }
        await axios(options)

        assert.equal(true, false, 'Unexpected behavior')
      } catch (err) {
        assert.equal(err.response.status, 401)
      }
    })

    it('should not fetch users if the authorization header is missing the scheme', async () => {
      try {
        const options = {
          method: 'GET',
          url: `${LOCALHOST}/users`,
          headers: {
            Accept: 'application/json',
            Authorization: '1'
          }
        }
        await axios(options)

        assert.equal(true, false, 'Unexpected behavior')
      } catch (err) {
        assert.equal(err.response.status, 401)
      }
    })

    it('should not fetch users if the authorization header has invalid scheme', async () => {
      const { token } = context
      try {
        const options = {
          method: 'GET',
          url: `${LOCALHOST}/users`,
          headers: {
            Accept: 'application/json',
            Authorization: `Unknown ${token}`
          }
        }
        await axios(options)

        assert.equal(true, false, 'Unexpected behavior')
      } catch (err) {
        assert.equal(err.response.status, 401)
      }
    })

    it('should not fetch users if token is invalid', async () => {
      try {
        const options = {
          method: 'GET',
          url: `${LOCALHOST}/users`,
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer 1'
          }
        }
        await axios(options)

        assert.equal(true, false, 'Unexpected behavior')
      } catch (err) {
        assert.equal(err.response.status, 401)
      }
    })

    it('should fetch all users', async () => {
      const { token } = context

      const options = {
        method: 'GET',
        url: `${LOCALHOST}/users`,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const result = await axios(options)

      const users = result.data.users
      // console.log(`users: ${util.inspect(users)}`)

      assert.hasAnyKeys(users[0], ['type', '_id', 'email'])
      assert.isNumber(users.length)
    })

    it('should return a 422 http status if biz-logic throws an error', async () => {
      try {
        const { token } = context

        // Force an error
        sandbox
          .stub(uut.useCases.user, 'getAllUsers')
          .rejects(new Error('test error'))

        const options = {
          method: 'GET',
          url: `${LOCALHOST}/users`,
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
        await axios(options)

        assert.fail('Unexpected code path!')
      } catch (err) {
        // console.log(err)
        assert.equal(err.response.status, 422)
        assert.equal(err.response.data, 'test error')
      }
    })
  })

  describe('GET /users/:id', () => {
    it('should not fetch user if token is invalid', async () => {
      try {
        const options = {
          method: 'GET',
          url: `${LOCALHOST}/users/1`,
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer 1'
          }
        }
        await axios(options)

        assert.equal(true, false, 'Unexpected behavior')
      } catch (err) {
        assert.equal(err.response.status, 401)
      }
    })

    it("should throw 404 if user doesn't exist", async () => {
      const { token } = context

      try {
        const options = {
          method: 'GET',
          url: `${LOCALHOST}/users/5fa4bd7ee1828f5f4d8ed004`,
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
        await axios(options)

        assert.equal(true, false, 'Unexpected behavior')
      } catch (err) {
        assert.equal(err.response.status, 404)
      }
    })

    it('should throw 422 for invalid input', async () => {
      const { token } = context

      try {
        const options = {
          method: 'GET',
          url: `${LOCALHOST}/users/1`,
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
        await axios(options)

        assert.equal(true, false, 'Unexpected behavior')
      } catch (err) {
        assert.equal(err.response.status, 422)
      }
    })

    it('should fetch own user', async () => {
      const _id = context.user._id
      const token = context.token

      const options = {
        method: 'GET',
        url: `${LOCALHOST}/users/${_id}`,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const result = await axios(options)

      const user = result.data.user
      // console.log(`user: ${util.inspect(user)}`)

      assert.property(user, 'type')
      assert.property(user, 'email')

      assert.property(user, '_id')
      assert.equal(user._id, _id)

      assert.notProperty(
        user,
        'password',
        'Password property should not be returned'
      )
    })
  })

  describe('PUT /users/:id', () => {
    it('should not update user if token is invalid', async () => {
      try {
        const options = {
          method: 'PUT',
          url: `${LOCALHOST}/users/1`,
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer 1'
          }
        }
        await axios(options)

        assert.equal(true, false, 'Unexpected behavior')
      } catch (err) {
        assert.equal(err.response.status, 401)
      }
    })

    it('should throw 401 if non-admin updating other user', async () => {
      const { token } = context

      try {
        const options = {
          method: 'PUT',
          url: `${LOCALHOST}/users/1`,
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
        await axios(options)

        assert.equal(true, false, 'Unexpected behavior')
      } catch (err) {
        assert.equal(err.response.status, 401)
      }
    })

    it('should not be able to update user type', async () => {
      try {
        const options = {
          method: 'PUT',
          url: `${LOCALHOST}/users/${context.user._id.toString()}`,
          headers: {
            Authorization: `Bearer ${context.token}`
          },
          data: {
            user: {
              email: 'test@test.com',
              password: 'password',
              name: 'new name',
              type: 'test'
            }
          }
        }
        await axios(options)

        // console.log(`Users: ${JSON.stringify(result.data, null, 2)}`)

        // assert(result.status === 200, 'Status Code 200 expected.')
        // assert(result.data.user.type === 'user', 'Type should be unchanged.')
        assert.equal(true, false, 'Unexpected behavior')
      } catch (err) {
        assert.equal(err.response.status, 422)
        assert.include(
          err.response.data,
          "Property 'type' can only be changed by Admin user"
        )
      }
    })

    it('should not be able to update other user when not admin', async () => {
      try {
        const options = {
          method: 'PUT',
          url: `${LOCALHOST}/users/${context.user2._id.toString()}`,
          headers: {
            Authorization: `Bearer ${context.token}`
          },
          data: {
            user: {
              name: 'This should not work'
            }
          }
        }
        await axios(options)

        // console.log(`result: ${JSON.stringify(result.data, null, 2)}`)

        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.response.status, 401)
      }
    })

    it('should not be able to update if name property is wrong', async () => {
      try {
        const _id = context.user._id
        const token = context.token

        const options = {
          method: 'PUT',
          url: `${LOCALHOST}/users/${_id}`,
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          },
          data: {
            user: {
              email: 'testToUpdate@test.com',
              name: {},
              password: 'password'
            }
          }
        }
        await axios(options)
      } catch (error) {
        assert.equal(error.response.status, 422)
        assert.include(error.response.data, "Property 'name' must be a string!")
      }
    })

    it('should not be able to update if password property is not string', async () => {
      const { token } = context
      const _id = context.user._id
      try {
        const options = {
          method: 'PUT',
          url: `${LOCALHOST}/users/${_id}`,
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          },
          data: {
            user: {
              password: 1234,
              email: 'test@test.com',
              name: 'test'
            }
          }
        }
        await axios(options)

        assert.equal(true, false, 'Unexpected behavior')
      } catch (err) {
        assert.equal(err.response.status, 422)
        assert.include(
          err.response.data,
          "Property 'password' must be a string!"
        )
      }
    })

    it('should not be able to update if email is not string', async () => {
      const { token } = context
      const _id = context.user._id
      try {
        const options = {
          method: 'PUT',
          url: `${LOCALHOST}/users/${_id}`,
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          },
          data: {
            user: {
              email: 1234
            }
          }
        }
        await axios(options)

        assert.equal(true, false, 'Unexpected behavior')
      } catch (err) {
        assert.equal(err.response.status, 422)
        assert.include(err.response.data, "Property 'email' must be a string!")
      }
    })

    it('should not be able to update type property if is not string', async () => {
      try {
        const _id = context.user._id
        const token = context.token

        const options = {
          method: 'PUT',
          url: `${LOCALHOST}/users/${_id}`,
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          },
          data: {
            user: {
              type: 1,
              email: 'test@test.com',
              name: 'test',
              password: 'password'
            }
          }
        }
        await axios(options)
      } catch (err) {
        assert.equal(err.response.status, 422)
        assert.include(err.response.data, "Property 'type' must be a string!")
      }
    })

    it('should be able to update other user when admin', async () => {
      const adminJWT = context.adminJWT

      const options = {
        method: 'PUT',
        url: `${LOCALHOST}/users/${context.user2._id.toString()}`,
        headers: {
          Authorization: `Bearer ${adminJWT}`
        },
        data: {
          user: {
            name: 'This should work',
            email: 'test4@test.com',
            password: 'password'
          }
        }
      }

      const result = await axios(options)
      // console.log(`result stringified: ${JSON.stringify(result, null, 2)}`)

      const userName = result.data.user.name
      assert.equal(userName, 'This should work')
    })

    it('should update user with minimum inputs', async () => {
      const _id = context.user._id
      const token = context.token

      const options = {
        method: 'PUT',
        url: `${LOCALHOST}/users/${_id}`,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
        data: {
          user: { email: 'testToUpdate@test.com' }
        }
      }

      const result = await axios(options)
      const user = result.data.user
      // console.log(`user: ${util.inspect(user)}`)

      assert.property(user, 'type')
      assert.property(user, 'email')

      assert.property(user, '_id')
      assert.equal(user._id, _id)

      assert.notProperty(
        user,
        'password',
        'Password property should not be returned'
      )
      assert.equal(user.email, 'testToUpdate@test.com')
    })

    it('should update user with all inputs', async () => {
      const _id = context.user._id
      const token = context.token

      const options = {
        method: 'PUT',
        url: `${LOCALHOST}/users/${_id}`,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
        data: {
          user: {
            email: 'testToUpdate@test.com',
            name: 'my name',
            username: 'myUsername'
          }
        }
      }
      const result = await axios(options)

      const user = result.data.user
      // console.log(`user: ${util.inspect(user)}`)

      assert.property(user, 'type')
      assert.property(user, 'email')
      assert.property(user, 'name')

      assert.property(user, '_id')
      assert.equal(user._id, _id)
      assert.notProperty(
        user,
        'password',
        'Password property should not be returned'
      )
      assert.equal(user.name, 'my name')
      assert.equal(user.email, 'testToUpdate@test.com')
      assert.equal(user.username, 'myUsername')
    })
  })

  describe('DELETE /users/:id', () => {
    it('should not delete user if token is invalid', async () => {
      try {
        const options = {
          method: 'DELETE',
          url: `${LOCALHOST}/users/1`,
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer 1'
          }
        }
        await axios(options)

        assert.equal(true, false, 'Unexpected behavior')
      } catch (err) {
        assert.equal(err.response.status, 401)
      }
    })

    it('should throw 401 if deleting invalid user', async () => {
      const { token } = context

      try {
        const options = {
          method: 'DELETE',
          url: `${LOCALHOST}/users/1`,
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
        await axios(options)

        assert.equal(true, false, 'Unexpected behavior')
      } catch (err) {
        assert.equal(err.response.status, 401)
      }
    })

    it('should not be able to delete other users unless admin', async () => {
      try {
        const options = {
          method: 'DELETE',
          url: `${LOCALHOST}/users/${context.user2._id.toString()}`,
          headers: {
            Authorization: `Bearer ${context.token}`
          }
        }
        await axios(options)
      } catch (err) {
        assert.equal(err.response.status, 401)
      }
    })

    it('should delete own user', async () => {
      const _id = context.user._id
      const token = context.token

      const options = {
        method: 'DELETE',
        url: `${LOCALHOST}/users/${_id}`,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const result = await axios(options)
      // console.log(`result: ${util.inspect(result.data.success)}`)

      assert.equal(result.data.success, true)
    })

    it('should be able to delete other users when admin', async () => {
      const id = context.id2
      const adminJWT = context.adminJWT

      const options = {
        method: 'DELETE',
        url: `${LOCALHOST}/users/${id}`,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${adminJWT}`
        }
      }
      const result = await axios(options)
      // console.log(`result: ${util.inspect(result.data)}`)

      assert.equal(result.data.success, true)
    })
  })
})
