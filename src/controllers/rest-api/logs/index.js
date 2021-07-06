/*
  REST API library for /logs route.
*/

const LogsRESTRouter = require('./router')

class LogsRESTController {
  constructor (localConfig = {}) {
    this.logsRESTRouter = new LogsRESTRouter()
  }

  attach (app) {
    this.logsRESTRouter.attachControllers(app)
  }
}

module.exports = LogsRESTController
