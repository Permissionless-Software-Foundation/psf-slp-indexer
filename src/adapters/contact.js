/*
  Business logic for the /contact endpoint.
*/

/* eslint-disable no-useless-escape */
import config from '../../config/index.js'
import NodeMailer from '../adapters/nodemailer.js'
import wlogger from '../adapters/wlogger.js'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const nodemailer = new NodeMailer()

let _this

class ContactLib {
  constructor () {
    _this = this
    _this.config = config
    _this.nodemailer = nodemailer
  }

  async sendEmail (emailObj) {
    try {
      // Validate input
      if (!emailObj.email || typeof emailObj.email !== 'string') {
        throw new Error("Property 'email' must be a string!")
      }

      if (!emailObj.formMessage || typeof emailObj.formMessage !== 'string') {
        throw new Error("Property 'formMessage' must be a string!")
      }

      // If an email list exists, the email will be sended to that list
      // otherwhise will be sended by default to the variable "_this.config.emailUser"
      let _to = [_this.config.emailUser]

      // Email list is optional
      if (emailObj.emailList) {
        if (
          !Array.isArray(emailObj.emailList) ||
          !emailObj.emailList.length > 0
        ) {
          throw new Error("Property 'emailList' must be a array of emails!")
        } else {
          _to = emailObj.emailList
        }
      }

      console.log(`Trying send message to : ${_to}`)

      emailObj.subject = 'Someone wants contact with you.'
      emailObj.to = _to

      const result = await _this.nodemailer.sendEmail(emailObj)
      return result
    } catch (err) {
      wlogger.error('Error in lib/contact.js/sendEmail()')
      throw err
    }
  }
}
export default ContactLib
