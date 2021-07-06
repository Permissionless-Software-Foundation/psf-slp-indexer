const config = require('../../../config')
const axios = require('axios').default
const assert = require('chai').assert
const sinon = require('sinon')

// Mock data
// const mockData = require('./mocks/contact-mocks')

const LOCALHOST = `http://localhost:${config.port}`

const mockContext = require('../../unit/mocks/ctx-mock').context
const ContactController = require('../../../src/modules/contact/controller')
let uut
let sandbox

describe('Contact', () => {
  beforeEach(() => {
    uut = new ContactController()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('POST /contact/email', () => {
    it('should throw error if email property is not provided', async () => {
      try {
        const options = {
          method: 'POST',
          url: `${LOCALHOST}/contact/email`,
          data: {
            obj: {
              formMessage: 'message'
            }
          }
        }

        await axios(options)

        // console.log(`result: ${JSON.stringify(result, null, 2)}`)

        // console.log(`result stringified: ${JSON.stringify(result, null, 2)}`)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.response.status, 422)
        assert.include(err.response.data, "Property 'email' must be a string!")
      }
    })

    it('should throw error if formMessage property is not provided', async () => {
      try {
        const options = {
          method: 'POST',
          url: `${LOCALHOST}/contact/email`,
          data: {
            obj: {
              email: 'email@email.com'
            }
          }
        }

        await axios(options)

        // console.log(`result: ${JSON.stringify(result, null, 2)}`)

        // console.log(`result stringified: ${JSON.stringify(result, null, 2)}`)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.response.status, 422)
        assert.include(
          err.response.data,
          "Property 'formMessage' must be a string!"
        )
      }
    })

    it('should throw error if email list provided is not a array', async () => {
      try {
        const options = {
          method: 'POST',
          url: `${LOCALHOST}/contact/email`,
          data: {
            obj: {
              email: 'email@email.com',
              formMessage: 'test message',
              emailList: 1
            }
          }
        }

        await axios(options)

        // console.log(`result: ${JSON.stringify(result, null, 2)}`)

        // console.log(`result stringified: ${JSON.stringify(result, null, 2)}`)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.response.status, 422)
        assert.include(
          err.response.data,
          "Property 'emailList' must be a array of emails!"
        )
      }
    })

    it('should throw error if email list provided is a empty array', async () => {
      try {
        const options = {
          method: 'POST',
          url: `${LOCALHOST}/contact/email`,
          data: {
            obj: {
              email: 'email@email.com',
              formMessage: 'test message',
              emailList: []
            }
          }
        }

        await axios(options)

        // console.log(`result: ${JSON.stringify(result, null, 2)}`)

        // console.log(`result stringified: ${JSON.stringify(result, null, 2)}`)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.equal(err.response.status, 422)
        assert.include(
          err.response.data,
          "Property 'emailList' must be a array of emails!"
        )
      }
    })

    it('should send email with minimun input', async () => {
      try {
        // Mock live network calls.
        sandbox.stub(uut.contactLib, 'sendEmail').resolves(true)

        // Mock the context object.
        const ctx = mockContext()
        ctx.request = {
          body: {
            obj: {
              email: 'email@email.com',
              formMessage: 'test message'
            }
          }
        }
        await uut.email(ctx)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })

    it('should send email with all inputs', async () => {
      try {
        // Mock live network calls.
        sandbox.stub(uut.contactLib, 'sendEmail').resolves(true)

        // Mock the context object.
        const ctx = mockContext()
        ctx.request = {
          body: {
            obj: {
              email: 'email@email.com',
              formMessage: 'test message',
              emailList: ['email@email.com']
            }
          }
        }
        await uut.email(ctx)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })
})
