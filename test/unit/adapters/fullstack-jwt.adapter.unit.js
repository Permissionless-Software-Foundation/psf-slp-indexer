/*
  Unit tests for the jwt-bch-lib and fullstack-jwt.js adapter library.

*/

import { assert } from 'chai'

import sinon from 'sinon'
import FullStackJWT from '../../../src/adapters/fullstack-jwt.js'

describe('#FullStackJWT', () => {
  let sandbox
  let uut

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    const localConfig = {
      authServer: 'someserver',
      apiServer: 'someserver',
      fullstackLogin: 'somelogin',
      fullstackPassword: 'somepassword'
    }
    uut = new FullStackJWT(localConfig)
  })
  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if auth server is not specified', () => {
      try {
        uut = new FullStackJWT()

        assert.fail('Unexpected code path')
        console.log(uut) // For linting.
      } catch (err) {
        assert.include(
          err.message,
          'Must pass a url for the AUTH server when instantiating FullStackJWT class.'
        )
      }
    })

    it('should throw an error if api server is not specified', () => {
      try {
        const localConfig = {
          authServer: 'someserver'
        }

        uut = new FullStackJWT(localConfig)

        assert.fail('Unexpected code path')
        console.log(uut) // For linting.
      } catch (err) {
        assert.include(
          err.message,
          'Must pass a url for the API server when instantiating FullStackJWT class.'
        )
      }
    })

    it('should throw an error if login is not specified', () => {
      try {
        const localConfig = {
          authServer: 'someserver',
          apiServer: 'someserver'
        }
        uut = new FullStackJWT(localConfig)

        assert.fail('Unexpected code path')
        console.log(uut) // For linting.
      } catch (err) {
        assert.include(
          err.message,
          'Must pass a FullStack.cash login (email) instantiating FullStackJWT class.'
        )
      }
    })

    it('should throw an error if login is not specified', () => {
      try {
        const localConfig = {
          authServer: 'someserver',
          apiServer: 'someserver',
          fullstackLogin: 'somelogin'
        }
        uut = new FullStackJWT(localConfig)

        assert.fail('Unexpected code path')
        console.log(uut) // For linting.
      } catch (err) {
        assert.include(
          err.message,
          'Must pass a FullStack.cash account password when instantiating FullStackJWT class.'
        )
      }
    })
  })

  describe('#getJWT', () => {
    it('should return the JWT token', async () => {
      // Mock dependencies to force a code path.
      sandbox.stub(uut.jwtLib, 'register').resolves({})
      uut.jwtLib.userData.apiToken = 'abc123'
      sandbox.stub(uut.jwtLib, 'validateApiToken').resolves({ isValid: true })

      const result = await uut.getJWT()
      // console.log('result: ', result)

      assert.equal(result, 'abc123')
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        sandbox.stub(uut.jwtLib, 'register').rejects(new Error('test error'))

        await uut.getJWT()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should throw an error if user does not have a JWT', async () => {
      try {
        // Mock dependencies to force a code path.
        sandbox.stub(uut.jwtLib, 'register').resolves({})

        await uut.getJWT()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err.message: ', err.message)
        assert.include(err.message, 'This account does not have a JWT')
      }
    })

    it('should retrieve a new JWT token if the old one invalid', async () => {
      // Mock dependencies to force a code path.
      sandbox.stub(uut.jwtLib, 'register').resolves({})
      uut.jwtLib.userData.apiToken = 'abc123'
      uut.jwtLib.userData.apiLevel = 30
      sandbox.stub(uut.jwtLib, 'validateApiToken').resolves({ isValid: false })
      sandbox.stub(uut.jwtLib, 'getApiToken').resolves('xyz789')

      const result = await uut.getJWT()
      // console.log('result: ', result)

      assert.equal(result, 'xyz789')
    })
  })

  describe('#instanceBchjs', () => {
    it('should return an instance of bch-js', () => {
      const result = uut.instanceBchjs()
      // console.log('result: ', result)

      assert.property(result, 'restURL')
    })
  })
})
