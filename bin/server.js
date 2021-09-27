/*
  This Koa server has two interfaces:
  - REST API over HTTP
  - JSON RPC over IPFS

  The architecture of the code follows the Clean Architecture pattern:
  https://troutsblog.com/blog/clean-architecture
*/

// npm libraries
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const convert = require('koa-convert')
const logger = require('koa-logger')
const mongoose = require('mongoose')
const session = require('koa-generic-session')
const passport = require('koa-passport')
const mount = require('koa-mount')
const serve = require('koa-static')
const cors = require('kcors')

// Local libraries
const config = require('../config') // this first.
const AdminLib = require('../src/adapters/admin')
const errorMiddleware = require('../src/controllers/rest-api/middleware/error')
const { wlogger } = require('../src/adapters/wlogger')

class Server {
  constructor () {
    this.adminLib = new AdminLib()
  }

  async startServer () {
    try {
      // Create a Koa instance.
      const app = new Koa()
      app.keys = [config.session]

      // Connect to the Mongo Database.
      mongoose.Promise = global.Promise
      mongoose.set('useCreateIndex', true) // Stop deprecation warning.
      console.log(
        `Connecting to MongoDB with this connection string: ${config.database}`
      )
      await mongoose.connect(config.database, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })

      console.log(`Starting environment: ${config.env}`)
      console.log(`Debug level: ${config.debugLevel}`)

      // MIDDLEWARE START

      app.use(convert(logger()))
      app.use(bodyParser())
      app.use(session())
      app.use(errorMiddleware())

      // Used to generate the docs.
      app.use(mount('/', serve(`${process.cwd()}/docs`)))

      // Mount the page for displaying logs.
      app.use(mount('/logs', serve(`${process.cwd()}/config/logs`)))

      // User Authentication
      require('../config/passport')
      app.use(passport.initialize())
      app.use(passport.session())

      // Attach REST API and JSON RPC controllers to the app.
      const Controllers = require('../src/controllers')
      const controllers = new Controllers()
      await controllers.attachRESTControllers(app)

      app.controllers = controllers

      // Enable CORS for testing
      // THIS IS A SECURITY RISK. COMMENT OUT FOR PRODUCTION
      app.use(cors({ origin: '*' }))

      // MIDDLEWARE END

      console.log(`Running server in environment: ${config.env}`)
      wlogger.info(`Running server in environment: ${config.env}`)

      await app.listen(config.port)
      console.log(`Server started on ${config.port}`)

      // Create the system admin user.
      const success = await this.adminLib.createSystemUser()
      if (success) console.log('System admin user created.')

      // Attach the other IPFS controllers
      await controllers.attachControllers(app)

      // ipfs-coord has a memory leak. This app shuts down after 4 hours. It
      // expects to be run by Docker or pm2, which can automatically restart
      // the app.
      setTimeout(function () {
        process.exit(0)
      }, 60000 * 60 * 2) // 2 hours

      return app
    } catch (err) {
      console.error('Could not start server. Error: ', err)
    }
  }
}

module.exports = Server
