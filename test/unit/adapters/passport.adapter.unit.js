import { assert } from 'chai'
import PassportLib from '../../../src/adapters/passport.js'
import sinon from 'sinon'

let uut
let sandbox

describe('#passport.js', () => {
  beforeEach(() => {
    uut = new PassportLib()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('authUser()', () => {
    it('should throw error if ctx is not provided', async () => {
      try {
        await uut.authUser()
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'ctx is required')
      }
    })

    it('Should throw error if the passport library fails', async () => {
      try {
        const error = new Error('cant auth user')
        const user = null

        // Mock calls
        // https://sinonjs.org/releases/latest/stubs/
        // About yields
        sandbox.stub(uut.passport, 'authenticate').yields(error, user)

        const ctx = {}
        await uut.authUser(ctx)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'cant auth user')
      }
    })
  })
})
