/*
  REST API library for /contact route.
*/

const ContactRESTRouter = require('./router')

class ContactRESTController {
  constructor (localConfig = {}) {
    this.contactRESTRouter = new ContactRESTRouter()
  }

  attach (app) {
    this.contactRESTRouter.attachControllers(app)
  }
}

module.exports = ContactRESTController
