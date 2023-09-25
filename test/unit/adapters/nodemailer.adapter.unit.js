/*
  Unit tests for the nodemailer.js library.
*/

// Public npm libraries
import { assert } from 'chai'

import sinon from 'sinon'
import NodeMailer from '../../../src/adapters/nodemailer.js'

let sandbox
let uut

describe('NodeMailer', () => {
  beforeEach(() => {
    uut = new NodeMailer()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('sendEmail()', () => {
    it('should throw error if email property is not provided', async () => {
      try {
        const data = {
          formMessage: 'test msg',
          name: 'test name',
          subject: 'test subject',
          to: ['test2@email.com']
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
          email: 'test@email.com',
          name: 'test name',
          subject: 'test subject',
          to: ['test2@email.com']
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'formMessage' must be a string!")
      }
    })

    it('should throw error if <to> property is not provided', async () => {
      try {
        const data = {
          email: 'test@email.com',
          name: 'test name',
          subject: 'test subject'
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'to' must be a array!")
      }
    })

    it('should throw error if  <to> is wrong type', async () => {
      try {
        const data = {
          email: 'test@email.com',
          formMessage: 'test msg',
          name: 'test name',
          subject: 'test subject',
          to: 'test'
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'to' must be a array!")
      }
    })

    it('should throw error if subject Property is not provided', async () => {
      try {
        const data = {
          email: 'test@email.com',
          formMessage: 'test msg',
          name: 'test name',
          to: ['test2@email.com']
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'subject' must be a string!")
      }
    })

    it('should send email with default html data', async () => {
      try {
        sandbox
          .stub(uut.transporter, 'sendMail')
          .resolves({ messageId: 'messageId' })

        const data = {
          email: 'test@email.com',
          formMessage: 'test msg',
          to: ['test2@email.com'],
          subject: 'test subject'
        }

        const info = await uut.sendEmail(data)

        assert.isObject(info)
        assert.isString(info.messageId)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })

    it('should send email if htmlData is provided', async () => {
      try {
        sandbox
          .stub(uut.transporter, 'sendMail')
          .resolves({ messageId: 'messageId' })
        const data = {
          email: 'test@email.com',
          formMessage: 'test msg',
          name: 'test name',
          to: ['test2@email.com'],
          subject: 'test subject',
          htmlData: '<p> Unit test </p>'
        }
        const info = await uut.sendEmail(data)
        assert.isObject(info)
        assert.isString(info.messageId)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })

  describe('validateEmailArray()', () => {
    it('should throw error if email list is not provided ', async () => {
      try {
        await uut.validateEmailArray()
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'emailList' must be a array!")
      }
    })

    it('should throw error if email list is empty', async () => {
      try {
        const emailList = []
        await uut.validateEmailArray(emailList)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'emailList' cant be empty!")
      }
    })

    it('should return true ', async () => {
      try {
        const emailList = ['test@email.com', 'simple@email.com']
        const result = await uut.validateEmailArray(emailList)
        assert.isTrue(result)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })

  describe('getHtmlFromObject()', () => {
    it('should throw error if the input  is not provided ', async () => {
      try {
        await uut.getHtmlFromObject()
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'objectData' must be a object!")
      }
    })

    it('should throw error if the object is empty', async () => {
      try {
        await uut.getHtmlFromObject({})
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'subject' must be a string!")
      }
    })

    it('should throw error if "formMessage" property is not provided', async () => {
      try {
        const obj = {
          subject: 'unit'
        }
        await uut.getHtmlFromObject(obj)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'formMessage' must be a string!")
      }
    })

    it('should return the html', async () => {
      try {
        const obj = {
          subject: 'unit ',
          formMessage: 'test',
          value1: 'value1',
          value2: 'value2',
          value3: 'value3'
        }
        const result = await uut.getHtmlFromObject(obj)
        assert.isString(result)
        assert.include(result, '<p>', 'expect html tag')
        assert.include(result, '</p>', 'expect html tag')
        assert.include(
          result,
          'value1',
          'Expect value 1 is included in the html'
        )
        assert.include(result, 'value2', 'expect is included in the html')
        assert.include(result, 'value3', 'expect is included in the html')
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })
})
