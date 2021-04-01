const assert = require('chai').assert
const sinon = require('sinon')

const ContactLib = require('../../../src/lib/contact')
let uut
let sandbox

describe('Contact', () => {
  beforeEach(() => {
    uut = new ContactLib()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('sendEmail()', () => {
    it('should throw error if email property is not provided', async () => {
      try {
        const data = {
          formMessage: 'test msg'
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'email' must be a string!")
      }
    })

    it('should throw error if formMessage property is not provided', async () => {
      try {
        const data = {
          email: 'test@email.com'
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'formMessage' must be a string!")
      }
    })

    it('should throw error if email list provided is not a array', async () => {
      try {
        sandbox.stub(uut.nodemailer, 'sendEmail').resolves(true)

        const data = {
          formMessage: 'test msg',
          email: 'test@email.com',
          emailList: 'test@email.com'
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'emailList' must be a array of emails!")
      }
    })

    it('should throw error if email list provided is a empty array', async () => {
      try {
        sandbox.stub(uut.nodemailer, 'sendEmail').resolves(true)

        const data = {
          formMessage: 'test msg',
          email: 'test@email.com',
          emailList: []
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'emailList' must be a array of emails!")
      }
    })

    it('should send email to default server email', async () => {
      try {
        sandbox.stub(uut.nodemailer, 'sendEmail').resolves(true)

        const data = {
          formMessage: 'test msg',
          email: 'test@email.com'
        }
        const result = await uut.sendEmail(data)
        assert.isTrue(result)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })

    it('should catch and throw nodemailer lib error', async () => {
      try {
        // Force an error with the database.
        sandbox.stub(uut.nodemailer, 'sendEmail').throws(new Error('test error'))

        const data = {
          formMessage: 'test msg',
          email: 'test@email.com'
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should send email to specifics email list', async () => {
      try {
        sandbox.stub(uut.nodemailer, 'sendEmail').resolves(true)

        const data = {
          formMessage: 'test msg',
          email: 'test@email.com',
          emailList: ['testcontact@email.com']
        }
        const result = await uut.sendEmail(data)
        assert.isTrue(result)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })
})
