/*
  This index file for the Clean Architecture Controllers loads dependencies,
  creates instances, and attaches the controller to REST API endpoints for
  Koa.
*/

// Public npm libraries.

// Load the REST API Controllers.
const AuthRESTController = require('./auth')
const UserRESTController = require('./users')
const ContactRESTController = require('./contact')
const LogsRESTController = require('./logs')

function attachRESTControllers (app) {
  // Attach the REST API Controllers associated with the /auth route
  const authRESTController = new AuthRESTController()
  authRESTController.attach(app)

  // Attach the REST API Controllers associated with the /user route
  const userRESTController = new UserRESTController()
  userRESTController.attach(app)

  // Attach the REST API Controllers associated with the /contact route
  const contactRESTController = new ContactRESTController()
  contactRESTController.attach(app)

  // Attach the REST API Controllers associated with the /logs route
  const logsRESTController = new LogsRESTController()
  logsRESTController.attach(app)
}

module.exports = { attachRESTControllers }
