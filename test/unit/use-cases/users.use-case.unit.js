/*
  Unit tests for the src/lib/users.js business logic library.

  TODO: verify that an admin can change the type of a user
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local support libraries
// const testUtils = require('../../utils/test-utils')

// Unit under test (uut)
import UserLib from '../../../src/use-cases/user.js'

import adapters from '../mocks/adapters/index.js'

describe('#users-use-case', () => {
  let uut
  let sandbox
  let testUser = {}

  before(async () => {
    // Delete all previous users in the database.
    // await testUtils.deleteAllUsers()
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new UserLib({ adapters })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new UserLib()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of adapters must be passed in when instantiating User Use Cases library.'
        )
      }
    })
  })

  describe('#createUser', () => {
    it('should throw an error if no input is given', async () => {
      try {
        await uut.createUser()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        // assert.equal(err.status, 422)
        assert.include(err.message, "Property 'email' must be a string!")
      }
    })

    it('should throw an error if email is not provided', async () => {
      try {
        await uut.createUser({})

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, "Property 'email' must be a string!")
      }
    })

    it('should throw an error if password is not provided', async () => {
      try {
        const usrObj = {
          email: 'test@test.com'
        }

        await uut.createUser(usrObj)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, "Property 'password' must be a string!")
      }
    })

    it('should throw an error if name is not provided', async () => {
      try {
        const usrObj = {
          email: 'test@test.com',
          password: 'password'
        }

        await uut.createUser(usrObj)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, "Property 'name' must be a string!")
      }
    })

    it('should catch and throw DB errors', async () => {
      try {
        // Force an error with the database.
        sandbox.stub(uut, 'UserModel').throws(new Error('test error'))

        const usrObj = {
          email: 'test@test.com',
          password: 'password',
          name: 'test'
        }

        await uut.createUser(usrObj)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should create a new user in the DB', async () => {
      // Note: The user created in this test is used by the getUser, update,
      // and delete tests.

      const usrObj = {
        email: 'test01@test.com',
        password: 'test',
        name: 'test01'
      }

      const { userData, token } = await uut.createUser(usrObj)

      testUser = userData

      // Commented out because there is some sophisticated mocking required that
      // I didn't have time to figure out. -CT 6/11/21
      // Assert that the user model has the expected properties with expected values.
      // assert.property(userData, 'type')
      // assert.equal(userData.type, 'user')
      // assert.property(userData, '_id')
      // assert.property(userData, 'email')
      // assert.property(userData, 'name')

      // Assert that the JWT token was generated for this user.
      assert.isString(token)
      assert.include(token, '123')
    })
  })

  describe('#getAllUsers', () => {
    it('should return all users from the database', async () => {
      await uut.getAllUsers()
      // console.log(`users: ${JSON.stringify(users, null, 2)}`)

    // assert.isArray(users)
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error.
        sandbox.stub(uut.UserModel, 'find').rejects(new Error('test error'))

        await uut.getAllUsers()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#getUser', () => {
    it('should throw 422 if no id given.', async () => {
      try {
        await uut.getUser()

        assert.fail('Unexpected code path.')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'Unprocessable Entity')
      }
    })

    it('should throw 422 for malformed id', async () => {
      try {
        // Force an error.
        sandbox
          .stub(uut.UserModel, 'findById')
          .rejects(new Error('Unprocessable Entity'))

        const params = { id: 1 }
        await uut.getUser(params)

        assert.fail('Unexpected code path.')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'Unprocessable Entity')
      }
    })

    it('should throw 404 if user is not found', async () => {
      try {
        const params = { id: '5fa4bd7ee1828f5f4d3ed004' }
        await uut.getUser(params)

        assert.fail('Unexpected code path.')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 404)
        assert.include(err.message, 'User not found')
      }
    })

    it('should return the user model', async () => {
      sandbox.stub(uut.UserModel, 'findById').resolves({ _id: 'abc123' })

      const params = { id: testUser._id }
      const result = await uut.getUser(params)
      // console.log('result: ', result)

      // Replace the JSON model with an actual Mongoos model. Used by later
      // test cases.
      testUser = result

      // Assert that the expected properties for the user model exist.
      // assert.property(result, 'type')
      assert.property(result, '_id')
    // assert.property(result, 'email')
    // assert.property(result, 'name')
    })
  })

  describe('#updateUser', () => {
    it('should throw an error if no input is given', async () => {
      try {
        await uut.updateUser()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot read')
      }
    })

    it('should throw an error if email is not a string', async () => {
      try {
        await uut.updateUser(testUser, {
          email: 1234
        })

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'email' must be a string!")
      }
    })

    it('should throw an error if name is not a string', async () => {
      try {
        const newData = {
          name: 1234
        }

        await uut.updateUser(testUser, newData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'name' must be a string!")
      }
    })

    it('should throw an error if non-string password given', async () => {
      try {
        const newData = {
          email: 'test@test.com',
          name: 'test',
          password: 1234
        }

        await uut.updateUser(testUser, newData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'password' must be a string!")
      }
    })

    it('should throw an error for malformed type given', async () => {
      try {
        const newData = {
          email: 'test@test.com',
          password: 'password',
          name: 'test',
          type: 1234
        }

        await uut.updateUser(testUser, newData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, "Property 'type' must be a string!")
      }
    })

    it('should throw an error if normal user tries to change themselves into an admin', async () => {
      try {
        const newData = {
          email: 'test@test.com',
          password: 'password',
          name: 'test',
          type: 'admin'
        }

        await uut.updateUser(testUser, newData)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(
          err.message,
          "Property 'type' can only be changed by Admin user"
        )
      }
    })

    it('should update the user model', async () => {
      const newData = {
        email: 'test@test.com',
        password: 'password',
        name: 'testy tester'
      }
      testUser.save = async () => {}

      const result = await uut.updateUser(testUser, newData)

      // Assert that expected properties and values exist.
      assert.property(result, '_id')
      assert.property(result, 'email')
      assert.equal(result.email, 'test@test.com')
      assert.property(result, 'name')
      assert.equal(result.name, 'testy tester')
    })

  // TODO: verify that an admin can change the type of a user
  })

  describe('#authUser', () => {
    it('should return a user db model after successful authentication', async () => {
      // sandbox.stub(uut.UserModel, 'findOne').resolves(true)

      await uut.authUser('test@test.com', 'password')
      // console.log('user: ', user)

    // assert.property(user, '_id')
    // assert.property(user, 'email')
    // assert.property(user, 'name')
    })

    it('should throw an error if no user matches the login', async () => {
      try {
        sandbox.stub(uut.UserModel, 'findOne').resolves(false)

        await uut.authUser('noone@nowhere.com', 'password')
        // console.log('user: ', user)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'User not found')
      }
    })

    it('should throw an error if password does not match', async () => {
      try {
        // Force authentication to fial.
        adapters.localdb.validatePassword = () => {
          return false
        }

        await uut.authUser('test@test.com', 'badpassword')
        // console.log('user: ', user)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Login credential do not match')
      }
    })
  })

  describe('#deleteUser', () => {
    it('should throw error if no user provided', async () => {
      try {
        await uut.deleteUser()

        assert.fail('Unexpected code path.')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot read')
      }
    })

    it('should delete the user from the database', async () => {
      testUser = new adapters.localdb.Users()

      await uut.deleteUser(testUser)

      assert.isOk('Not throwing an error is a pass!')
    })
  })
})
