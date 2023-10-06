/*
  This is a top-level library that encapsulates all the additional Adapters.
  The concept of Adapters comes from Clean Architecture:
  https://troutsblog.com/blog/clean-architecture
*/

// Public NPM libraries
import BCHJS from '@psf/bch-js'

// Load individual adapter libraries.
import IPFSAdapter from './ipfs/index.js'

// import LocalDB from './localdb/index.js'
import LogsAPI from './logapi.js'
import Nodemailer from './nodemailer.js'

// const { wlogger } = require('./wlogger')
import JSONFiles from './json-files.js'

import FullStackJWT from './fullstack-jwt.js'
import SlpIndexer from './slp-indexer/index.js'
import config from '../../config/index.js'

class Adapters {
  constructor (localConfig = {}) {
    // Encapsulate dependencies
    this.ipfs = new IPFSAdapter()
    this.logapi = new LogsAPI()
    this.nodemailer = new Nodemailer()
    this.jsonFiles = new JSONFiles()
    this.bchjs = new BCHJS()
    this.config = config
    this.slpIndexer = new SlpIndexer()

    // Get a valid JWT API key and instance bch-js.
    this.fullStackJwt = new FullStackJWT(config)
  }

  async start () {
    try {
      if (this.config.getJwtAtStartup) {
        // Get a JWT token and instantiate bch-js with it. Then pass that instance
        // to all the rest of the apps controllers and adapters.
        // await this.fullStackJwt.getJWT()
        // Instantiate bch-js with the JWT token, and overwrite the placeholder for bch-js.
        this.bchjs = await this.fullStackJwt.instanceBchjs()
      }

      // Start the IPFS node.
      // await this.ipfs.start()

      // Start the indexer.
      this.initIndexer()

      return true
    } catch (err) {
      console.error('Error in adapters/index.js/start()')
      throw err
    }
  }

  initIndexer () {
    console.log('Instantiating SlpIndexer() in adapters/index.js')
    // this.slpIndexer = new SlpIndexer()
    const dbs = this.slpIndexer.openDatabases()
    this.slpIndexer.encapsulateDeps(dbs)
  }
}

export default Adapters
