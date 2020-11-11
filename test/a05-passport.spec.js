const assert = require('chai').assert
const PassportLib = require('../src/lib/passport')

describe('#passport.js', () => {
  let passportLib

  beforeEach(async () => {
    passportLib = new PassportLib()
  })

  describe('authUser()', () => {
    it('should throw error if ctx is not provided', async () => {
      try {
        await passportLib.authUser()
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'ctx is required')
      }
    })

    it('Should throw error if the passport library fails', async () => {
      try {
        // This is a mock to handle the callback error
        // when the passport library fails or throws error
        const error = new Error('cant auth user')
        const user = null
        const authMock = (value, callback) => {
          callback(error, user)
        }
        passportLib.passport.authenticate = authMock

        const ctx = {}
        await passportLib.authUser(ctx)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'cant auth user')
      }
    })
  })
})
