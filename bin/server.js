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
const Controllers = require('../src/controllers')

class Server {
  constructor () {
    // Encapsulate dependencies
    this.adminLib = new AdminLib()
    this.controllers = new Controllers()
    this.mongoose = mongoose
    this.config = config
    this.process = process
  }

  async startServer () {
    try {
      // Create a Koa instance.
      const app = new Koa()
      app.keys = [this.config.session]

      // Connect to the Mongo Database.
      this.mongoose.Promise = global.Promise
      this.mongoose.set('useCreateIndex', true) // Stop deprecation warning.
      console.log(
        `Connecting to MongoDB with this connection string: ${this.config.database}`
      )
      await this.mongoose.connect(this.config.database, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })

      console.log(`Starting environment: ${this.config.env}`)
      console.log(`Debug level: ${this.config.debugLevel}`)

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

      // Enable CORS for testing
      // THIS IS A SECURITY RISK. COMMENT OUT FOR PRODUCTION
      // Dev Note: This line must come BEFORE controllers.attachRESTControllers()
      app.use(cors({ origin: '*' }))

      // Attach REST API and JSON RPC controllers to the app.
      await this.controllers.attachRESTControllers(app)

      app.controllers = this.controllers

      // MIDDLEWARE END

      console.log(`Running server in environment: ${this.config.env}`)
      wlogger.info(`Running server in environment: ${this.config.env}`)

      this.server = await app.listen(this.config.port)
      console.log(`Server started on ${this.config.port}`)

      // Create the system admin user.
      const success = await this.adminLib.createSystemUser()
      if (success) console.log('System admin user created.')

      // Attach the other IPFS controllers.
      // Skip if this is a test environment.
      if (this.config.env !== 'test') {
        await this.controllers.attachControllers(app)
      }

      // Display configuration settings
      console.log('\nConfiguration:')
      console.log(`Circuit Relay: ${this.config.isCircuitRelay}`)
      console.log(`IPFS TCP port: ${this.config.ipfsTcpPort}`)
      console.log(`IPFS WS port: ${this.config.ipfsWsPort}\n`)

      return app
    } catch (err) {
      console.error('Could not start server. Error: ', err)

      console.log(
        'Exiting after 5 seconds. Depending on process manager to restart.'
      )
      await this.sleep(5000)
      this.process.exit(1)
    }
  }

  sleep (ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}

module.exports = Server
