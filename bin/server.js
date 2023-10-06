/*
  This Koa server has two interfaces:
  - REST API over HTTP
  - JSON RPC over IPFS

  The architecture of the code follows the Clean Architecture pattern:
  https://troutsblog.com/blog/clean-architecture
*/

// npm libraries
import Koa from 'koa'

import bodyParser from 'koa-bodyparser'
import convert from 'koa-convert'
import logger from 'koa-logger'
import session from 'koa-generic-session'
import mount from 'koa-mount'
import serve from 'koa-static'
import cors from 'kcors'

// Local libraries
import config from '../config/index.js' // this first.
import errorMiddleware from '../src/controllers/rest-api/middleware/error.js'
import wlogger from '../src/adapters/wlogger.js'
import Controllers from '../src/controllers/index.js'

class Server {
  constructor () {
    // Encapsulate dependencies
    this.controllers = new Controllers()
    this.config = config
    this.process = process
  }

  async startServer () {
    try {
      // Create a Koa instance.
      const app = new Koa()
      app.keys = [this.config.session]

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

      // Enable CORS for testing
      // THIS IS A SECURITY RISK. COMMENT OUT FOR PRODUCTION
      // Dev Note: This line must come BEFORE controllers.attachRESTControllers()
      app.use(cors({ origin: '*' }))

      // Wait for any adapters to initialize.
      await this.controllers.initAdapters()

      // Wait for any use-libraries to initialize.
      await this.controllers.initUseCases()

      // Attach REST API and JSON RPC controllers to the app.
      await this.controllers.attachRESTControllers(app)

      app.controllers = this.controllers

      // MIDDLEWARE END

      console.log(`Running server in environment: ${this.config.env}`)
      wlogger.info(`Running server in environment: ${this.config.env}`)

      this.server = await app.listen(this.config.port)
      console.log(`Server started on ${this.config.port}`)

      // Attach the other IPFS controllers.
      // Skip if this is a test environment.
      if (this.config.env !== 'test') {
        await this.controllers.attachControllers(app)
      }

      // Start the SLP Indexer
      app.controllers.adapters.slpIndexer.start()
      // app.controllers.adapters.start()

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

export default Server
