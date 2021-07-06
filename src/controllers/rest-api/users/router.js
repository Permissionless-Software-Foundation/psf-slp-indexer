/*
  REST Router for the /user route.
*/

// Public npm libraries.
const Router = require('koa-router')

// Local libraries.
const UserRESTControllerLib = require('./controller')
const Validators = require('../../../middleware/validators')

let _this

class UserRESTRouter {
  constructor (localConfig = {}) {
    // Encapsulate dependencies.
    this.userRESTController = new UserRESTControllerLib()
    this.validators = new Validators()

    // Instantiate the router and set the base route.
    const baseUrl = '/users'
    this.router = new Router({ prefix: baseUrl })

    _this = this
  }

  attachControllers (app) {
    if (!app) {
      throw new Error(
        'Must pass app object when attaching REST API controllers.'
      )
    }

    // Define the routes and attach the controller.
    this.router.post('/', this.userRESTController.createUser)
    this.router.get('/', this.getAll)
    this.router.get('/:id', this.getById)
    this.router.put('/:id', this.updateUser)
    this.router.delete('/:id', this.deleteUser)

    // Attach the Controller routes to the Koa app.
    app.use(this.router.routes())
    app.use(this.router.allowedMethods())
  }

  async getAll (ctx, next) {
    await _this.validators.ensureUser(ctx, next)
    await _this.userRESTController.getUsers(ctx, next)
  }

  async getById (ctx, next) {
    await _this.validators.ensureUser(ctx, next)
    await _this.userRESTController.getUser(ctx, next)
  }

  async updateUser (ctx, next) {
    await _this.validators.ensureTargetUserOrAdmin(ctx, next)
    await _this.userRESTController.getUser(ctx, next)
    await _this.userRESTController.updateUser(ctx, next)
  }

  async deleteUser (ctx, next) {
    await _this.validators.ensureTargetUserOrAdmin(ctx, next)
    await _this.userRESTController.getUser(ctx, next)
    await _this.userRESTController.deleteUser(ctx, next)
  }
}

module.exports = UserRESTRouter
