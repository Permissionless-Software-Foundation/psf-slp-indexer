/*
  REST Router for the /user route.
*/

// Public npm libraries.
const Router = require('koa-router')

// Local libraries.
const UserRESTControllerLib = require('./controller')

class UserRESTRouter {
  constructor (localConfig = {}) {
    // Encapsulate dependencies.
    this.userRESTController = new UserRESTControllerLib()

    // Instantiate the router and set the base route.
    const baseUrl = '/users'
    this.router = new Router({ prefix: baseUrl })
  }

  attachControllers (app) {
    if (!app) {
      throw new Error(
        'Must pass app object when attaching REST API controllers.'
      )
    }

    // Define the routes and attach the controller.
    this.router.post('/', this.userRESTController.createUser)
    this.router.get('/', this.userRESTController.getUsers)
    this.router.get('/:id', this.userRESTController.getUsers)
    this.router.put('/', this.userRESTController.updateUser)
    this.router.delete('/', this.userRESTController.deleteUser)

    // Attach the Controller routes to the Koa app.
    app.use(this.router.routes())
    app.use(this.router.allowedMethods())
  }
}

module.exports = UserRESTRouter
