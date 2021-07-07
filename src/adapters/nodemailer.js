/*
  A library for controlling the sending of email.
*/

'use strict'
const nodemailer = require('nodemailer')

const config = require('../../config')

const wlogger = require('./wlogger')

let _this

class NodeMailer {
  constructor () {
    this.nodemailer = nodemailer
    this.config = config

    _this = this
    _this.transporter = _this.createTransporter()
  }

  // Define an email server 'transport' for nodemailer
  createTransporter () {
    const transporter = _this.nodemailer.createTransport({
      host: _this.config.emailServer,
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: _this.config.emailUser, // generated ethereal user
        pass: _this.config.emailPassword // generated ethereal password
      }
    })
    return transporter
  }

  // Handles the sending of data via email.
  async sendEmail (data) {
    try {
      // Validate input
      if (!data.email || typeof data.email !== 'string') {
        throw new Error("Property 'email' must be a string!")
      }

      if (!data.to || !Array.isArray(data.to)) {
        throw new Error("Property 'to' must be a array!")
      }

      await _this.validateEmailArray(data.to)

      if (!data.formMessage || typeof data.formMessage !== 'string') {
        throw new Error("Property 'formMessage' must be a string!")
      }

      if (!data.subject || typeof data.subject !== 'string') {
        throw new Error("Property 'subject' must be a string!")
      }

      // Use the provided html or use a default html generated from the input data

      const html = data.htmlData || _this.getHtmlFromObject(data)
      const sendObj = {
        // from: `${data.email}`, // sender address
        from: data.email,
        to: data.to, // list of receivers
        // subject: `Pearson ${subject}`, // Subject line
        subject: data.subject,
        // html: '<b>This is a test email</b>' // html body
        html
      }

      // send mail with defined transport object
      const info = await _this.transporter.sendMail(sendObj)
      console.log('Message sent: %s', info.messageId)

      return info
    } catch (err) {
      wlogger.error('Error in lib/nodemailer.js/sendEmail()')
      throw err
    }
  }

  async validateEmailArray (emailList) {
    try {
      if (!emailList || !Array.isArray(emailList)) {
        throw new Error("Property 'emailList' must be a array!")
      }
      //  Email list can't be empty
      if (!emailList.length > 0) {
        throw new Error("Property 'emailList' cant be empty!")
      }

      return true
    } catch (err) {
      wlogger.error('Error in lib/nodemailer.js/validateEmailArray()')
      throw err
    }
  }

  // get the email html from object
  getHtmlFromObject (objectData) {
    try {
      if (!objectData || typeof objectData !== 'object') {
        throw new Error("Property 'objectData' must be a object!")
      }
      if (!objectData.subject) {
        throw new Error("Property 'subject' must be a string!")
      }
      if (!objectData.formMessage) {
        throw new Error("Property 'formMessage' must be a string!")
      }

      const obj = {}
      Object.assign(obj, objectData)

      // neccesary data
      const msg = obj.formMessage.replace(/(\r\n|\n|\r)/g, '<br />')
      const now = new Date()
      const subject = obj.subject

      // Delete unneccesary data if it exist
      delete obj.to
      delete obj.subject
      delete obj.from
      delete obj.emailList
      delete obj.formMessage

      const bodyJson = obj
      bodyJson.message = msg

      // Html body
      let htmlBody = ''

      // maps the object and converts it into html format
      Object.keys(bodyJson).forEach(function (key) {
        htmlBody += `${key}: ${bodyJson[key]}<br/>`
      })

      const defaultHtmlData = `<h3>${subject}:</h3>
       <p>
         time: ${now.toLocaleString()}<br/>
         ${htmlBody}
       </p>`

      return defaultHtmlData
    } catch (error) {
      wlogger.error('Error in lib/nodemailer.js/getHtmlFromObject()')
      throw error
    }
  }
}

module.exports = NodeMailer
