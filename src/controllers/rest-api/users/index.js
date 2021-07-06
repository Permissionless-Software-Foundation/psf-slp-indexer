/*
  REST API library for /user route.
*/

const UserRESTRouter = require('./router')

class UserRESTController {
  constructor (localConfig = {}) {
    this.userRESTRouter = new UserRESTRouter()
  }

  attach (app) {
    this.userRESTRouter.attachControllers(app)
  }
}

module.exports = UserRESTController
