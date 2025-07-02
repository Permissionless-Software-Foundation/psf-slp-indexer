Project Path: psf-slp-indexer

Source Tree:

```
psf-slp-indexer
├── backup-leveldb.sh
├── index.js
├── src
│   ├── adapters
│   │   ├── contact.js
│   │   ├── index.js
│   │   ├── logapi.js
│   │   ├── nodemailer.js
│   │   ├── wlogger.js
│   │   ├── json-files.js
│   │   ├── slp-indexer
│   │   │   ├── index.js
│   │   │   ├── tx-types
│   │   │   │   ├── nft-genesis.js
│   │   │   │   ├── send.js
│   │   │   │   ├── genesis.js
│   │   │   │   └── mint.js
│   │   │   ├── tx-maps
│   │   │   │   ├── combine-maps.js
│   │   │   │   └── get-tx-map.js
│   │   │   ├── lib
│   │   │   │   ├── rpc.js
│   │   │   │   ├── cache.js
│   │   │   │   ├── start-stop.js
│   │   │   │   ├── blacklist.js
│   │   │   │   ├── ptxdb.js
│   │   │   │   ├── query.js
│   │   │   │   ├── filter-block.js
│   │   │   │   ├── zmq.js
│   │   │   │   ├── level-db.js
│   │   │   │   ├── utils.js
│   │   │   │   ├── db-backup.js
│   │   │   │   ├── transaction.js
│   │   │   │   ├── dag.js
│   │   │   │   └── retry-queue.js
│   │   │   └── re-index.js
│   │   ├── fullstack-jwt.js
│   │   └── ipfs
│   │       ├── index.js
│   │       ├── ipfs-coord.js
│   │       └── ipfs.js
│   ├── controllers
│   │   ├── index.js
│   │   ├── rest-api
│   │   │   ├── index.js
│   │   │   ├── contact
│   │   │   │   ├── index.js
│   │   │   │   └── controller.js
│   │   │   └── slp
│   │   │       ├── index.js
│   │   │       └── controller.js
│   │   ├── json-rpc
│   │   │   ├── index.js
│   │   │   ├── rate-limit.js
│   │   │   └── about
│   │   │       └── index.js
│   │   └── timer-controllers.js
│   └── use-cases
│       └── index.js
├── test
│   ├── unit
│   │   ├── adapters
│   │   │   ├── ipfs.adapter.unit.js
│   │   │   ├── ipfs-index.adapter.unit.js
│   │   │   ├── wlogger.adapter.unit.js
│   │   │   ├── logapi.adapter.unit.js
│   │   │   ├── contact.adapter.unit.js
│   │   │   ├── nodemailer.adapter.unit.js
│   │   │   ├── json-files.adapter.unit.js
│   │   │   ├── adapters-index-unit.js
│   │   │   ├── slp-indexer
│   │   │   │   ├── tx-types
│   │   │   │   │   ├── genesis.unit.js
│   │   │   │   │   ├── nft-genesis.unit.js
│   │   │   │   │   ├── mint.unit.js
│   │   │   │   │   └── send.unit.js
│   │   │   │   ├── lib
│   │   │   │   │   ├── cache-unit.js
│   │   │   │   │   ├── db-backup.unit.js
│   │   │   │   │   ├── rpc.unit.js
│   │   │   │   │   ├── dag.unit.js
│   │   │   │   │   ├── zmq.unit.js
│   │   │   │   │   ├── ptxdb.unit.js
│   │   │   │   │   ├── transaction.unit.js
│   │   │   │   │   ├── utils.unit.js
│   │   │   │   │   ├── filter-block.unit.js
│   │   │   │   │   ├── start-stop.unit.js
│   │   │   │   │   ├── blacklist.unit.js
│   │   │   │   │   ├── query.unit.js
│   │   │   │   │   ├── level-db.unit.js
│   │   │   │   │   └── retry-queue.unit.js
│   │   │   │   └── slp-indexer.unit.js
│   │   │   ├── fullstack-jwt.adapter.unit.js
│   │   │   └── ipfs-coord.adapter.unit.js
│   │   ├── README.md
│   │   ├── misc
│   │   │   ├── config.js
│   │   │   └── server-unit.js
│   │   ├── controllers
│   │   │   ├── rest-api
│   │   │   │   ├── contact
│   │   │   │   │   ├── contact.rest.controller.unit.js
│   │   │   │   │   └── contact.rest.router.unit.js
│   │   │   │   ├── rest.controller.unit.js
│   │   │   │   ├── README.md
│   │   │   │   └── slp
│   │   │   │       ├── slp.rest.router.unit.js
│   │   │   │       └── slp.rest.controller.unit.js
│   │   │   ├── controllers.unit.js
│   │   │   ├── json-rpc
│   │   │   │   ├── a14-rate-limits.js
│   │   │   │   ├── a10-rpc.unit.js
│   │   │   │   └── about.json-rpc.controller.unit.js
│   │   │   └── timer-controllers.unit.js
│   │   ├── use-cases
│   │   │   └── index.use-case.unit.js
│   │   └── mocks
│   │       ├── ipfs-mock.js
│   │       ├── send-mock.js
│   │       ├── utils-mock.js
│   │       ├── nft-genesis-mock.js
│   │       ├── leveldb-mock.js
│   │       ├── mint-mock.js
│   │       ├── adapters
│   │       │   ├── index.js
│   │       │   └── fake-log
│   │       ├── dag-mock.js
│   │       ├── zmq-mocks.js
│   │       ├── ctx-mock.js
│   │       ├── filter-block-mock.js
│   │       ├── genesis-mock.js
│   │       ├── log-api-mock.js
│   │       ├── transaction-mock.js
│   │       ├── use-cases
│   │       │   └── index.js
│   │       ├── app-mock.js
│   │       └── ipfs-coord-mock.js
│   ├── integration
│   │   └── adapters
│   │       └── slp-indexer
│   │           ├── tx-types
│   │           │   ├── mint.integration.js
│   │           │   ├── send.integration.js
│   │           │   └── genesis.integration.js
│   │           └── lib
│   │               ├── transaction-integration.js
│   │               ├── cache-integration.js
│   │               ├── dag-integration.js
│   │               ├── rpc.integration.js
│   │               └── filter-block-integration.js
│   └── utils
│       └── test-utils.js
├── bin
│   └── server.js
├── README.md
├── slp-indexer.sh
├── shell-scripts
│   ├── ipfs-service-provider-generic.sh
│   ├── ipfs-service-provider-relay.sh
│   └── local-external-ipfs-node.sh
├── production
│   └── docker
│       ├── start-production.sh
│       ├── cleanup-images.sh
│       ├── restore-auto.sh
│       ├── README.md
│       ├── docker-compose.yml
│       └── Dockerfile
├── util
│   ├── README.md
│   ├── wipe-test-db.js
│   ├── index
│   │   ├── create-tx-map.js
│   │   ├── getOneTx.js
│   │   ├── getAllAddressesWithTxid.js
│   │   ├── getOneToken.js
│   │   ├── getGroupTokens.js
│   │   ├── getAllUtxos.js
│   │   ├── misc
│   │   │   ├── README.md
│   │   │   └── getSimpleNfts.js
│   │   ├── getAllTxData.js
│   │   ├── getAllAddresses.js
│   │   ├── getNFTTokens.js
│   │   ├── getAllTokens.js
│   │   ├── getAllTxs.js
│   │   └── getOneAddr.js
│   └── wipe-db.md
├── CONTRIBUTING.md
├── wipe-db.sh
├── swarm.key
├── LICENSE.md
├── install-mongo.sh
├── dev-docs
│   ├── README.md
│   └── dev-notes.md
├── examples
│   └── README.md
├── apidoc.json
├── config
│   ├── index.js
│   └── env
│       ├── common.js
│       ├── production.js
│       ├── development.js
│       └── test.js
└── package.json

```

`/home/trout/work/psf/code/psf-slp-indexer/backup-leveldb.sh`:

```sh
#!/bin/bash

echo What is the block height?

read height

zip -r slp-indexer-$height.zip leveldb/current

#mv slp-indexer-$height.zip ~/tmp/
mv slp-indexer-$height.zip leveldb/zips/

```

`/home/trout/work/psf/code/psf-slp-indexer/index.js`:

```js
import Server from './bin/server.js'
const server = new Server()

server.startServer()

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/contact.js`:

```js
/*
  Business logic for the /contact endpoint.
*/

/* eslint-disable no-useless-escape */
import config from '../../config/index.js'
import NodeMailer from '../adapters/nodemailer.js'
import wlogger from '../adapters/wlogger.js'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const nodemailer = new NodeMailer()

let _this

class ContactLib {
  constructor () {
    _this = this
    _this.config = config
    _this.nodemailer = nodemailer
  }

  async sendEmail (emailObj) {
    try {
      // Validate input
      if (!emailObj.email || typeof emailObj.email !== 'string') {
        throw new Error("Property 'email' must be a string!")
      }

      if (!emailObj.formMessage || typeof emailObj.formMessage !== 'string') {
        throw new Error("Property 'formMessage' must be a string!")
      }

      // If an email list exists, the email will be sended to that list
      // otherwhise will be sended by default to the variable "_this.config.emailUser"
      let _to = [_this.config.emailUser]

      // Email list is optional
      if (emailObj.emailList) {
        if (
          !Array.isArray(emailObj.emailList) ||
          !emailObj.emailList.length > 0
        ) {
          throw new Error("Property 'emailList' must be a array of emails!")
        } else {
          _to = emailObj.emailList
        }
      }

      console.log(`Trying send message to : ${_to}`)

      emailObj.subject = 'Someone wants contact with you.'
      emailObj.to = _to

      const result = await _this.nodemailer.sendEmail(emailObj)
      return result
    } catch (err) {
      wlogger.error('Error in lib/contact.js/sendEmail()')
      throw err
    }
  }
}
export default ContactLib

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/index.js`:

```js
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

    const dbs = this.slpIndexer.openDatabases()
    this.slpIndexer.encapsulateDeps(dbs)

    return true
  }
}

export default Adapters

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/logapi.js`:

```js
import lineReader from 'line-reader'
import fs from 'fs'

import config from '../../config/index.js'

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'

let _this
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

class LogsApi {
  constructor () {
    _this = this
    _this.fs = fs
    _this.lineReader = lineReader
    _this.config = config
  }

  async getLogs (password) {
    try {
      // console.log('entering getLogs()')
      _this.password = password
      // console.log(`password: ${password}`)

      // Password matches the password set in the config file.
      if (password === _this.config.logPass) {
        // Generate the full path and file name for the current log file.
        const fullPath = _this.generateFileName()
        // console.log(`fullPath: ${JSON.stringify(fullPath, null, 2)}`)

        // Throw an error if the file does not exist.
        if (!_this.fs.existsSync(fullPath)) {
          return {
            success: false,
            data: 'file does not exist'
          }
        } else {
          // Read in the data from the log file.
          const data = await _this.readLines(fullPath)
          // console.log(`data: ${JSON.stringify(data, null, 2)}`)

          // Filter the logs before passing them to the front end.
          const filteredData = _this.filterLogs(data)

          return {
            success: true,
            data: filteredData
          }
        }

        // Password does not match password in config file.
      } else {
        return {
          success: false
        }
      }
    } catch (err) {
      console.error('Error in lib/logapi.js/getLogs()')
      throw err
    }
  }

  // Sorts the log data by their timestamp. Returns the LIMIT or less elements.
  filterLogs (data, LIMIT = 100) {
    try {
      if (!Array.isArray(data)) {
        throw new Error('Data must be array')
      }
      // console.log(`data: ${JSON.stringify(data, null, 2)}`)

      // const LIMIT = 100 // Max number of entries to return.

      // Sort the elements by date.
      data.sort(function (a, b) {
        let dateA = new Date(a.timestamp)
        dateA = dateA.getTime()

        let dateB = new Date(b.timestamp)
        dateB = dateB.getTime()

        return dateB - dateA
      })

      // Limit the number of elements.
      if (data.length > LIMIT) {
        return data.slice(0, LIMIT)
      }

      // else
      return data
    } catch (err) {
      console.error('Error in lib/logapi.js/filterLogs()')
      throw err
    }
  }

  generateFileName () {
    try {
      const now = new Date()
      let thisDate = now.getDate()
      thisDate = ('0' + thisDate).slice(-2)

      let thisMonth = now.getMonth() + 1
      thisMonth = ('0' + thisMonth).slice(-2)
      // console.log(`thisMonth: ${thisMonth}`)

      const thisYear = now.getFullYear()

      const filename = `koa-${
        _this.config.env
      }-${thisYear}-${thisMonth}-${thisDate}.log`
      // console.log(`filename: ${filename}`)
      const logDir = `${__dirname.toString()}/../../logs/`
      const fullPath = `${logDir}${filename}`
      // console.log(`fullPath: ${fullPath}`)

      return fullPath
    } catch (err) {
      console.error('Error in lib/logapi.js/generateFileName()')
      throw err
    }
  }

  // Promise based read-file
  /*   readFile (path, opts = 'utf8') {
    return new Promise((resolve, reject) => {
      _this.fs.readFile(path, opts, (err, data) => {
        if (err) reject(err)
        else resolve(data)
      })
    })
  } */

  // Returns an array with each element containing a line of the file.
  readLines (filename) {
    return new Promise((resolve, reject) => {
      try {
        if (!filename || typeof filename !== 'string') {
          throw new Error('filename must be a string')
        }

        console.log('readLines() filename: ', filename)

        // Throw an error if the file does not exist.
        if (!_this.fs.existsSync(filename)) {
          throw new Error('file does not exist')
        }

        const data = []

        // let i = 0

        _this.lineReader.eachLine(filename, function (line, last) {
          try {
            data.push(JSON.parse(line))

            // Uncomment to display the raw data in each line of the winston log file.
            // console.log(`line ${i}: ${line}`)
            // i++

            if (last) return resolve(data)
          } catch (err) {
            // console.log('err: ', err)
            if (last) return resolve(data)
          }
        })
      } catch (err) {
        console.log('Error in lib/logapi.js/readLines()')
        return reject(err)
      }
    })
  }
}

export default LogsApi

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/nodemailer.js`:

```js
/*
  A library for controlling the sending of email.
*/

'use strict'
import nodemailer from 'nodemailer'

import config from '../../config/index.js'
import wlogger from './wlogger.js'

let _this

class NodeMailer {
  constructor () {
    this.nodemailer = nodemailer
    this.config = config

    _this = this
    _this.transporter = _this.createTransporter()
  }

  // Define an email server 'transport' for nodemailer
  createTransporter () {
    const transporter = _this.nodemailer.createTransport({
      host: _this.config.emailServer,
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: _this.config.emailUser, // generated ethereal user
        pass: _this.config.emailPassword // generated ethereal password
      }
    })
    return transporter
  }

  // Handles the sending of data via email.
  async sendEmail (data) {
    try {
      // Validate input
      if (!data.email || typeof data.email !== 'string') {
        throw new Error("Property 'email' must be a string!")
      }

      if (!data.to || !Array.isArray(data.to)) {
        throw new Error("Property 'to' must be a array!")
      }

      await _this.validateEmailArray(data.to)

      if (!data.formMessage || typeof data.formMessage !== 'string') {
        throw new Error("Property 'formMessage' must be a string!")
      }

      if (!data.subject || typeof data.subject !== 'string') {
        throw new Error("Property 'subject' must be a string!")
      }

      // Use the provided html or use a default html generated from the input data

      const html = data.htmlData || _this.getHtmlFromObject(data)
      const sendObj = {
        // from: `${data.email}`, // sender address
        from: data.email,
        to: data.to, // list of receivers
        // subject: `Pearson ${subject}`, // Subject line
        subject: data.subject,
        // html: '<b>This is a test email</b>' // html body
        html
      }

      // send mail with defined transport object
      const info = await _this.transporter.sendMail(sendObj)
      console.log('Message sent: %s', info.messageId)

      return info
    } catch (err) {
      wlogger.error('Error in lib/nodemailer.js/sendEmail()')
      throw err
    }
  }

  async validateEmailArray (emailList) {
    try {
      if (!emailList || !Array.isArray(emailList)) {
        throw new Error("Property 'emailList' must be a array!")
      }
      //  Email list can't be empty
      if (!emailList.length > 0) {
        throw new Error("Property 'emailList' cant be empty!")
      }

      return true
    } catch (err) {
      wlogger.error('Error in lib/nodemailer.js/validateEmailArray()')
      throw err
    }
  }

  // get the email html from object
  getHtmlFromObject (objectData) {
    try {
      if (!objectData || typeof objectData !== 'object') {
        throw new Error("Property 'objectData' must be a object!")
      }
      if (!objectData.subject) {
        throw new Error("Property 'subject' must be a string!")
      }
      if (!objectData.formMessage) {
        throw new Error("Property 'formMessage' must be a string!")
      }

      const obj = {}
      Object.assign(obj, objectData)

      // neccesary data
      const msg = obj.formMessage.replace(/(\r\n|\n|\r)/g, '<br />')
      const now = new Date()
      const subject = obj.subject

      // Delete unneccesary data if it exist
      delete obj.to
      delete obj.subject
      delete obj.from
      delete obj.emailList
      delete obj.formMessage

      const bodyJson = obj
      bodyJson.message = msg

      // Html body
      let htmlBody = ''

      // maps the object and converts it into html format
      Object.keys(bodyJson).forEach(function (key) {
        htmlBody += `${key}: ${bodyJson[key]}<br/>`
      })

      const defaultHtmlData = `<h3>${subject}:</h3>
       <p>
         time: ${now.toLocaleString()}<br/>
         ${htmlBody}
       </p>`

      return defaultHtmlData
    } catch (error) {
      wlogger.error('Error in lib/nodemailer.js/getHtmlFromObject()')
      throw error
    }
  }
}

export default NodeMailer

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/wlogger.js`:

```js
/*
  Instantiates and configures the Winston logging library. This utitlity library
  can be called by other parts of the application to conveniently tap into the
  logging library.
*/

'use strict'

// Global npm libraries
import winston from 'winston'
import 'winston-daily-rotate-file'

// Local libraries
import config from '../../config/index.js'

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

class Wlogger {
  constructor (localConfig = {}) {
    this.config = config

    // Configure daily-rotation transport.
    this.transport = new winston.transports.DailyRotateFile({
      filename: `${__dirname.toString()}/../../logs/koa-${
        this.config.env
      }-%DATE%.log`,
      datePattern: 'YYYY-MM-DD',
      zippedArchive: false,
      maxSize: '1m', // 1 megabyte
      maxFiles: '5d', // 5 days
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      )
    })

    this.transport.on('rotate', this.notifyRotation)

    // This controls what goes into the log FILES
    this.wlogger = winston.createLogger({
      level: 'verbose',
      format: winston.format.json(),
      transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log`
        // - Write all logs error (and below) to `error.log`.
        //
        // new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        // new winston.transports.File({ filename: 'logs/combined.log' })
        this.transport
      ]
    })

    // Bind 'this' object to all subfunctions.
    this.notifyRotation = this.notifyRotation.bind(this)
    this.outputToConsole = this.outputToConsole.bind(this)
  }

  notifyRotation (oldFilename, newFilename) {
    this.wlogger.info('Rotating log files')
  }

  outputToConsole () {
    this.wlogger.add(
      new winston.transports.Console({
        format: winston.format.simple(),
        level: 'info'
      })
    )
  }
}

const logger = new Wlogger()

// Allow the logger to write to the console.
logger.outputToConsole()

const wlogger = logger.wlogger

export { wlogger as default, Wlogger }
// export default wlogger

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/json-files.js`:

```js
/*
  A utility file for reading and writing JSON files.
*/

import fs from 'fs'

let _this

class JsonFiles {
  constructor () {
    this.fs = fs

    _this = this
  }

  // Writes out a JSON file of any object passed to the function.
  // This is used for testing.
  writeJSON (obj, fileName) {
    return new Promise(function (resolve, reject) {
      try {
        if (!obj) {
          throw new Error('obj property is required')
        }
        if (!fileName || typeof fileName !== 'string') {
          throw new Error('fileName property must be a string')
        }
        const fileStr = JSON.stringify(obj, null, 2)

        _this.fs.writeFile(fileName, fileStr, function (err) {
          if (err) {
            console.error('Error while trying to write file: ')
            throw err
          } else {
            // console.log(`${fileName} written successfully!`)
            return resolve()
          }
        })
      } catch (err) {
        console.error('Error trying to write out object in util.js/_writeJSON().')
        return reject(err)
      }
    })
  }

  readJSON (fileName) {
    return new Promise(function (resolve, reject) {
      try {
        if (!fileName || typeof fileName !== 'string') {
          throw new Error('fileName property must be a string')
        }

        _this.fs.readFile(fileName, (err, data) => {
          if (err) {
            if (err.code === 'ENOENT') {
              console.log('Admin .json file not found!')
            } else {
              console.log(`err: ${JSON.stringify(err, null, 2)}`)
            }

            // throw err
            return reject(err)
          }

          const obj = JSON.parse(data)

          return resolve(obj)
        })
      } catch (err) {
        console.error('Error trying to read JSON file in util.js/_readJSON().')
        return reject(err)
      }
    })
  }
}

export default JsonFiles

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/slp-indexer/index.js`:

```js
/*
  Main class library for the SLP indexing functionality.

  Testing notes:
  - First Genesis tx occurs in block 543376, txid: 545cba6f72a08cbcb08c7d4e8166267942e8cb9a611328805c62fa538e861ba4
  - First Send tx occurs in block 543409, txid: 874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e
  - First Mint tx occurs in block 543614 txid: ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34
  - First NFT tx occurs in block 589808 txid: 3b66b7e0f80473ae9e761892046b843689a1281405504ae6d93a30156aeefeda

  ToDo: Wrap rpc calls in processBlock() in a retry wrapper.

*/

// Constants use to configure indexing thresholds. Customize as needed.
// Number of retries before exiting the indexer

// Global npm libraries
// const RetryQueue = require('@chris.troutner/retry-queue-commonjs')
import RetryQueue from '@chris.troutner/retry-queue-commonjs'

// Local libraries
import wlogger from '../wlogger.js'
import LevelDb from './lib/level-db.js'
import RPC from './lib/rpc.js'
import DbBackup from './lib/db-backup.js'
import Cache from './lib/cache.js'
import Transaction from './lib/transaction.js'
import FilterBlock from './lib/filter-block.js'
import Genesis from './tx-types/genesis.js'
import NftGenesis from './tx-types/nft-genesis.js'
import Send from './tx-types/send.js'
import Mint from './tx-types/mint.js'
import StartStop from './lib/start-stop.js'
import ZMQ from './lib/zmq.js'
import Utils from './lib/utils.js'
import ManagePTXDB from './lib/ptxdb.js'
import Query from './lib/query.js'
import Blacklist from './lib/blacklist.js'

const EPOCH = 1000 // blocks between backups
const RETRY_CNT = 10

class SlpIndexer {
  constructor (localConfig = {}) {
    // Bind the 'this' object to all subfunctions.
    this.openDatabases = this.openDatabases.bind(this)
    this.encapsulateDeps = this.encapsulateDeps.bind(this)
    this.start = this.start.bind(this)
    this.handleProcessFailure = this.handleProcessFailure.bind(this)
    this.processTx = this.processTx.bind(this)
    this.processData = this.processData.bind(this)
    this.getStatus = this.getStatus.bind(this)
    this.processSlpTxs = this.processSlpTxs.bind(this)
    this.processBlock = this.processBlock.bind(this)

    // State
    this.RETRY_CNT = RETRY_CNT
    this.indexState = 'phase0'
    this.loopCnt = 0
  }

  openDatabases () {
    // Open the indexer databases.
    this.levelDb = new LevelDb()
    const { addrDb, tokenDb, txDb, statusDb, pTxDb, utxoDb } =
      this.levelDb.openDbs()
    this.addrDb = addrDb
    this.tokenDb = tokenDb
    this.txDb = txDb
    this.statusDb = statusDb
    this.pTxDb = pTxDb
    this.utxoDb = utxoDb

    return { addrDb, tokenDb, txDb, statusDb, pTxDb, utxoDb }
  }

  // Instantiate all dependency libraries and encapsulate them into the 'this' object.
  encapsulateDeps (localConfig = {}) {
    const { addrDb, tokenDb, txDb, statusDb, pTxDb, utxoDb } = localConfig

    // Encapsulate dependencies
    this.rpc = new RPC()
    this.dbBackup = new DbBackup({
      addrDb,
      tokenDb,
      txDb,
      statusDb,
      pTxDb,
      utxoDb
    })
    this.cache = new Cache({ txDb })
    this.transaction = new Transaction({ txDb })
    this.filterBlock = new FilterBlock({
      cache: this.cache,
      transaction: this.transaction,
      addrDb,
      tokenDb,
      utxoDb,
      txDb
    })
    this.genesis = new Genesis({ addrDb, tokenDb, utxoDb })
    this.nftGenesis = new NftGenesis({
      addrDb,
      tokenDb,
      utxoDb,
      txDb,
      cache: this.cache
    })
    this.send = new Send({ addrDb, tokenDb, txDb, utxoDb, cache: this.cache })
    this.mint = new Mint({ addrDb, tokenDb, txDb, utxoDb, cache: this.cache })
    this.startStop = new StartStop()
    this.zmq = new ZMQ()
    this.utils = new Utils()
    this.managePtxdb = new ManagePTXDB({ pTxDb })
    this.query = new Query({ addrDb, tokenDb, txDb, statusDb, pTxDb })
    this.statusDb = statusDb
    this.blacklist = new Blacklist()
    this.retryQueue = new RetryQueue()

    // Used to control program flow during testing, to override the default
    // behavior of process.exit().
    this.process = process

    return true
  }

  async start () {
    try {
      wlogger.info('starting SLP indexer...')

      // Capture keyboard input to determine when to shut down.
      this.startStop.initStartStop()

      // Get the current sync status.
      const status = await this.getStatus()
      console.log(
        `Indexer is currently synced to height ${status.syncedBlockHeight}`
      )

      // Get the current block height
      let biggestBlockHeight = await this.retryQueue.addToQueue(this.rpc.getBlockCount, {})
      console.log('Current chain block height: ', biggestBlockHeight)
      console.log('Starting bulk indexing.')

      // Update the status database with the chain block height.
      status.chainBlockHeight = biggestBlockHeight
      await this.statusDb.put('status', status)

      // Loop through the block heights and index every block.
      // Phase 1: Bulk indexing

      let blockHeight = status.syncedBlockHeight
      do {
        // Update and save the sync status.
        status.syncedBlockHeight = blockHeight
        await this.statusDb.put('status', status)
        // console.log(`Indexing block ${blockHeight}`)

        // Shut down elegantly if the 'q' key was detected.
        const shouldStop = this.startStop.stopStatus()
        if (shouldStop) {
          console.log(
            `'q' key detected. Stopping indexing. Last block processed was ${
              blockHeight - 1
            }`
          )
          this.process.exit(0)
        }

        // Process all SLP txs in the block.
        await this.processBlock(blockHeight)

        // Change phase after processing first block. This prevents unneeded
        // zipping of the database after a restart.
        this.indexState = 'phase1'

        // Wait a few seconds between loops.
        // await this.utils.sleep(1000)

        blockHeight++
        biggestBlockHeight = await this.retryQueue.addToQueue(this.rpc.getBlockCount, {})
      } while (blockHeight <= biggestBlockHeight)
      // } while (blockHeight < 769587)
      // } while (blockHeight < 739707)
      // console.log('Target block height reached.')
      // process.exit(0)

      // Debugging: state the current state of the indexer.
      console.log(`Leaving ${this.indexState}`)
      this.indexState = 'phase2'

      blockHeight = status.syncedBlockHeight
      // if (this.indexState === 'phase1') {
      //   // Update and save the sync status.
      //   status.syncedBlockHeight++
      //   await statusDb.put('status', status)
      //   blockHeight = status.syncedBlockHeight
      // }

      console.log(
        `\n\nBulk Indexing has completed. Last block synced: ${status.syncedBlockHeight}\n`
      )

      // Temp code for debugging. Take a backup at this point.
      // await this.dbBackup.zipDb(status.syncedBlockHeight)

      // Get the current block height
      biggestBlockHeight = await this.retryQueue.addToQueue(this.rpc.getBlockCount, {})
      console.log('Current chain block height: ', biggestBlockHeight)
      console.log('Starting indexing of mempool')

      // process.exit(0)

      // Start connection to ZMQ/websocket interface on full node.
      await this.zmq.connect()
      console.log('Connected to ZMQ port of full node.')

      // Enter permanent loop, processing ZMQ input.
      do {
        // TODO: add getBlockCounty to a auto-retry in case it fails.
        blockHeight = await this.retryQueue.addToQueue(this.rpc.getBlockCount, {})
        // console.log('Current chain block height: ', blockHeight)
        // console.log(`status.syncedBlockHeight: ${status.syncedBlockHeight}`)

        // On a new transaction, process it.
        const tx = this.zmq.getTx()

        if (tx) {
          // console.log('tx: ', tx)
          try {
            const inData = {
              tx,
              blockHeight
            }
            // console.log(`inData: ${JSON.stringify(inData, null, 2)}`)
            await this.processTx(inData)
          } catch (err) {
            /* exit quietly */
          }
        }

        // On a new block, process it.
        const block = this.zmq.getBlock()
        if (block) {
          console.log('block: ', block)

          const blockHeader = await this.retryQueue.addToQueue(this.rpc.getBlockHeader, block.hash)
          blockHeight = blockHeader.height
          console.log(`processing block ${blockHeight}`)

          // Update the status DB.
          status.syncedBlockHeight = blockHeight
          status.chainBlockHeight = blockHeight
          await this.statusDb.put('status', status)

          // Process the block.
          await this.processBlock(blockHeight)
        }

        // Periodically print to the console to indicate that the ZMQ is being
        // monitored.
        this.loopCnt++
        if (this.loopCnt > 100) {
          this.loopCnt = 0
          const now = new Date()
          console.log(`Checked ZMQ. ${now.toLocaleString()}, block height: ${blockHeight}`)
        }

        // Wait a few seconds between loops.
        await this.utils.sleep(50)
      } while (1)
    } catch (err) {
      console.log('Error in indexer: ', err)
      // Don't throw an error. This is a top-level function.

      // Exit if there is an error.
      this.process.exit(0)

      return 0
    }
  }

  // Get the status of the indexer from the status database. Initialize if
  // this is a new run.
  async getStatus () {
    try {
      const status = await this.statusDb.get('status')
      return status
    } catch (err) {
      console.log('Error trying to get status from leveldb')
      // New database, so there is no status. Create it.
      const status = {
        startBlockHeight: 543376,
        syncedBlockHeight: 543376
      }

      await this.statusDb.put('status', status)

      return status
    }
  }

  // Processes an entire block.
  async processBlock (blockHeight) {
    try {
      // Get the block hash for the current block height.
      const blockHash = await this.rpc.getBlockHash(blockHeight)
      // console.log("blockHash: ", blockHash);

      // Now get the actual data stored in that block.
      const block = await this.rpc.getBlock(blockHash)
      // console.log('block: ', block)

      // Transactions in the block.
      const txs = block.tx

      const now = new Date()
      console.log(
        `Indexing block ${blockHeight} with ${
          txs.length
        } transactions. Time now: ${now.toLocaleString()}`
      )

      // Filter and sort block transactions, to make indexing more efficient
      // and easier to debug.
      const filteredTxs = await this.filterBlock.filterAndSortSlpTxs2(
        txs,
        blockHeight
      )
      const slpTxs = filteredTxs.combined
      const nonSlpTxs = filteredTxs.nonSlpTxs
      // console.log(`slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)

      // If the block has no txs after filtering for SLP txs, then skip processing.
      if (slpTxs && slpTxs.length) {
        console.log(`slpTxs: ${slpTxs.length}`)

        // Progressively processes TXs in the array.
        await this.processSlpTxs(slpTxs, blockHeight)

        // Do a second round of this.filterBlock.deleteBurnedUtxos() for
        // all non-SLP transactions. Handles corner-case where a token UTXO
        // is burned in the same block that it was created.
        for (let i = 0; i < nonSlpTxs.length; i++) {
          const thisTxid = nonSlpTxs[i]
          const burnResult = await this.filterBlock.deleteBurnedUtxos(thisTxid)

          if (!burnResult) {
            console.log(
              `deleteBurnedUtxos() errored on on txid ${thisTxid}. Coinbase?`
            )
          }
        }
      }

      // Create a zip-file backup every 'epoch' of blocks, but only in phase 1.
      // console.log(`blockHeight: ${blockHeight}, indexState: ${this.indexState}`)
      if (blockHeight % EPOCH === 0 && this.indexState === 'phase1') {
        // Clean up stale TXs in the pTxDb.
        await this.managePtxdb.cleanPTXDB(blockHeight)

        console.log(`this.indexState: ${this.indexState}`)
        console.log(`Creating zip archive of database at block ${blockHeight}`)
        await this.dbBackup.zipDb(blockHeight, EPOCH)

        return 2
      } else if ((blockHeight - 1) % EPOCH === 0 && this.indexState === 'phase2') {
        // In phase 2 (ZMQ), roll back to the last backup and resync, to generate
        // a new backup. This prevents the backup file from being corrupted by ZMQ
        // transaction processing while in phase2.

        const rollbackHeight = blockHeight - 1 - EPOCH

        // Roll back the database to the last epoch.
        await this.dbBackup.unzipDb(rollbackHeight)

        // Kill the process, which will allow the app to shut down, and pm2 or Docker can
        // restart it at a block height to resync and take a proper backup while
        // in phase1.
        console.log('Killing process, expecting process manager to restart this app.')
        this.process.exit(0)

        return 3
      }

      return 1
    } catch (err) {
      console.error('Error in processBlock()')
      throw err
    }
  }

  // This processes each SLP tx in-order in the array. If an error is found,
  // the current TX is moved to the back of the queue. Processing continues
  // until the array is empty, or the same TX has failed to process RETRY_CNT
  // times in a row.
  async processSlpTxs (slpTxs, blockHeight) {
    try {
      const errors = [] // Track errors

      // Loop through each tx in the slpTxs array, until all the TXs have been
      // removed from the array.
      do {
        // Get the first element in the slpTxs array.
        const tx = slpTxs.shift()
        console.log(`tx: ${JSON.stringify(tx, null, 2)}`)
        console.log(`slpTxs: ${slpTxs.length}`)

        try {
          // Attempt to process TX
          await this.processTx({ tx, blockHeight })
        } catch (err) {
          // Temp. Seeing if we can skip errors when in phase 2.
          if (this.indexState === 'phase2') {
            console.log(
              'Skipping error because indexer is in phase 2, indexing the tip of the chain.'
            )

            return null
          }

          console.log('----> HANDLING ERROR <----')
          console.log(err)

          // Move the tx to the back of the queue.
          slpTxs.push(tx)

          // Get the error object for this tx.
          const errObj = errors.filter((x) => x.tx === tx)

          // Create a new error object if it doesn't exist.
          if (!errObj.length) {
            const newErrObj = {
              tx,
              cnt: 0
            }

            errors.push(newErrObj)

            errObj.push(newErrObj)
          } else {
            // Increment the error count for this tx.
            errObj[0].cnt++
          }

          console.log(`Error count for ${tx}: ${errObj[0].cnt}`)

          const retryCnt = this.RETRY_CNT
          if (errObj[0].cnt > retryCnt) {
            await this.handleProcessFailure(blockHeight, tx, err.message)
            throw new Error(
              `Failed to process TXID ${tx} after ${retryCnt} tries.`
            )
          }
        }

        // Loop while there are still elements in the slpTxs array.
      } while (slpTxs.length)

      return true
    } catch (err) {
      console.error('Error in processSlpTxs()')
      throw err
    }
  }

  // This function is used to roll back to a previous snapshot, when the indexer
  // gets stuck.
  // It determines the block height of the problematic parent transaction, then
  // rolls the database to a block height before that transaction.
  async handleProcessFailure (blockHeight, tx, errMsg) {
    try {
      // Subtract one from the block height. This ensure we roll back to a block
      // before where the problem happened.
      // This protects against a corner-case where restoring from a problematic
      // backup, causes the indexer to get stuck in a loop, trying to restore the
      // same problematic backup over and over.
      blockHeight = blockHeight - 1

      console.log(`Block height: ${blockHeight}`)
      console.log(`errMsg: ${errMsg}`)

      const txData = await this.cache.get(tx)
      // console.log(
      //   `TX Data for problematic TX: ${JSON.stringify(txData, null, 2)}`
      // )

      // Figure out the block height of the parent transaction.
      let targetBlockHeight = blockHeight // Initial (wrong) value.

      // Loop through each Vin and find the oldest parent with the smallest
      // (oldest) block height.
      for (let i = 0; i < txData.vin.length; i++) {
        const thisVin = txData.vin[i]
        console.log(`thisVin: ${JSON.stringify(thisVin, null, 2)}`)

        // Skip any non-token inputs.
        if (!thisVin.tokenQty && !thisVin.isMintBaton) continue

        // Get parent TX data
        const parentTxData = await this.cache.get(thisVin.txid)

        // Find and track the oldest parent block height.
        if (parentTxData.blockheight < targetBlockHeight) {
          targetBlockHeight = parentTxData.blockheight
        }
      }
      console.log(`targetBlockHeight: ${targetBlockHeight}`)

      // Round the hight to the nearest epoch
      const rollbackHeight = Math.floor(targetBlockHeight / EPOCH) * EPOCH
      console.log(
        `Rolling database back to this block height: ${rollbackHeight}`
      )

      // Roll back the database to before the parent transaction.
      await this.dbBackup.unzipDb(rollbackHeight)

      // Kill the process, which will allow the app to shut down, and pm2 or Docker can
      // restart it at a block height prior to the problematic parent transaction.
      this.process.exit(0)

      return true
    } catch (err) {
      console.error('Error in handleProcessFailure: ', err)

      // Do not throw an error, as this is an error handlilng function.
      return false
    }
  }

  // Process a single SLP transaction.
  async processTx (inData) {
    try {
      const { tx, blockHeight } = inData

      let dataToProcess = false

      // Check the pTxs database to see if this transaction has already been
      // processed. If so, skip it.
      try {
        // Will throw an error if tx is not found, which is the same as false.
        await this.pTxDb.get(tx)

        // If TXID exists in the DB, then it's been processed. Exit.
        console.log(`${tx} already processed. Skipping.`)
        return false
      } catch (err) {
        // console.log(err)
        /* exit quietly */
      }

      try {
        // Dev Note: Call this code paragraph before calling cache.get().
        // Otherwise, blacklisted tokens will hydrate (which is computationally
        // expensive) right before rejecting the TX.

        // Is the TX an SLP TX? If not, it will throw an error.
        const slpData = await this.transaction.decodeOpReturn(tx)
        // console.log('slpData: ', slpData)

        // Skip this TX if it is for a token that is in the blacklist.
        const tokenId = slpData.tokenId
        const isInBlacklist = this.blacklist.checkBlacklist(tokenId)
        if (isInBlacklist) {
          console.log(
            `Skipping TX ${tx}, it contains...\ntoken ${tokenId} which is in the blacklist.`
          )

          // Mark the transaction validity as 'null' to signal that this tx
          // has not been processed and the UTXO should be ignored.
          const txData = {
            txid: tx,
            blockHeight,
            isValidSlp: null
          }
          await this.txDb.put(tx, txData)

          // Save the TX to the processed database.
          await this.pTxDb.put(tx, blockHeight)

          // throw new Error('TX is for token in blacklist')
          return txData
        }

        // Get the transaction information.
        // See dev note above.
        const txData = await this.cache.get(tx)
        // console.log('txData: ', txData)

        // Combine available data for further processing.
        dataToProcess = {
          slpData,
          blockHeight,
          txData
        }
      } catch (err) {
        /* exit quietly */
        // console.log(err)
      }

      // Process the identified SLP transaction.
      if (dataToProcess) {
        console.log('Inspecting tx: ', tx)
        await this.processData(dataToProcess)
      }

      // Save the TX to the processed database.
      await this.pTxDb.put(tx, blockHeight)

      // console.log(`Completed ${tx}`)

      return true
    } catch (err) {
      console.error('Error in processTx()')
      throw err
    }
  }

  // This function routes the data for individual SLP transactions for further
  // processing, based on the type of SLP transaction it is.
  async processData (data) {
    try {
      const { slpData, txData } = data
      // console.log('slpData: ', slpData)

      // Skip tokens with an unknown token type.
      // But mark the TX as 'null', to signal to wallets that the UTXO should
      // be segregated so that it's not burned.
      if (
        slpData.tokenType !== 1 &&
        slpData.tokenType !== 65 &&
        slpData.tokenType !== 129
      ) {
        console.log(
          `Skipping TX ${txData.txid}, it is tokenType ${slpData.tokenType}, which is not yet supported.`
        )

        // Mark the transaction validity as 'null' to signal that this tx
        // has not been processed and the UTXO should be   ignored.
        txData.isValidSlp = null
        await this.txDb.put(txData.txid, txData)

        return false
      }

      // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

      // Route the data for processing, based on the type of transaction.
      if (slpData.txType.includes('GENESIS')) {
        if (slpData.tokenType === 65) {
          // NFT Genesis

          await this.nftGenesis.processTx(data)

          console.log(`NFT Genesis tx processed: ${txData.txid}`)
        } else {
          // Type 1 and Group GENESIS

          await this.genesis.processTx(data)

          console.log(`Genesis tx processed: ${txData.txid}`)
        }
      } else if (slpData.txType.includes('MINT')) {
        console.log(`Mint tx for token ID: ${slpData.tokenId}`)

        // console.log(`Mint data: ${JSON.stringify(data, null, 2)}`)
        await this.mint.processTx(data)

        console.log(`Mint tx processed: ${txData.txid}`)
      } else if (slpData.txType.includes('SEND')) {
        console.log(`Send tx. Block Height: ${data.blockHeight}`)

        await this.send.processTx(data)

        console.log(`Send tx processed: ${txData.txid}`)
      }

      // If a prior library did not explictely mark this TX as invalid,
      if (txData.isValidSlp !== false && txData.isValidSlp !== null) {
        // Mark TXID as valid.
        txData.isValidSlp = true
      }

      // Add the transaction to the database
      await this.txDb.put(txData.txid, txData)

      return true
    } catch (err) {
      console.error('Error in processData(): ', err)
      throw err
    }
  }
}

// module.exports = SlpIndexer
export default SlpIndexer

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/slp-indexer/tx-types/nft-genesis.js`:

```js
/*
  A class library for processing NFT (child) Genesis SLP transactions

  First NFT tx occurs in block 589808 txid: 3b66b7e0f80473ae9e761892046b843689a1281405504ae6d93a30156aeefeda
*/

// Public npm libraries
import BigNumber from 'bignumber.js'

// Local libraries
import IndexerUtils from '../lib/utils.js'

class NftGenesis {
  constructor (localConfig = {}) {
    // LevelDBs
    this.addrDb = localConfig.addrDb
    if (!this.addrDb) {
      throw new Error(
        'Instance of address DB required when instantiating nft-genesis.js'
      )
    }
    this.tokenDb = localConfig.tokenDb
    if (!this.tokenDb) {
      throw new Error(
        'Instance of token DB required when instantiating nft-genesis.js'
      )
    }
    this.utxoDb = localConfig.utxoDb
    if (!this.utxoDb) {
      throw new Error(
        'Instance of utxo DB required when instantiating nft-genesis.js'
      )
    }
    this.cache = localConfig.cache
    if (!this.cache) {
      throw new Error(
        'Must pass cache instance when instantiating nft-genesis.js'
      )
    }
    this.txDb = localConfig.txDb
    if (!this.txDb) {
      throw new Error(
        'Must pass transaction DB instance when instantiating nft-genesis.js'
      )
    }

    // Encapsulate dependencies
    this.util = new IndexerUtils()
  }

  // Primary function. Processes GENESIS transaction.
  async processTx (data) {
    try {
      // console.log(`NFT Genesis data: ${JSON.stringify(data, null, 2)}`)
      console.log(
        `Processing NFT Genesis txid ${data.txData.txid} with ticker '${data.slpData.ticker}' and name '${data.slpData.name}'`
      )

      // const { slpData, blockHeight, txData } = data
      // console.log(`slpData: ${JSON.stringify(data.slpData, null, 2)}`)

      // Verify the required inputs exist to make this a valid NFT transaction.
      const inputsAreValid = await this.validateInputs(data)

      const txid = data.txData.txid

      // If inputs are not valid, then mark the TX as invalid and exit.
      if (!inputsAreValid) {
        console.log(
          `NFT Genesis with TXID ${txid} failed input validation. Skipping.`
        )

        // Mark TX as invalid and save in database.
        data.txData.isValidSlp = false
        await this.txDb.put(txid, data.txData)

        return false
      }

      // Subtract the input UTXOs and balances from input addresses.
      const { spentBN, groupTokenId } = await this.subtractTokensFromInputAddr(data)
      console.log(`NFT TXID ${txid} spent ${spentBN.toString()} Group tokens.`)

      await this.addTokenToDB(data, groupTokenId)

      await this.addReceiverAddress(data)

      // Signal that call completed successfully.
      return true
    } catch (err) {
      console.error('Error in genesis.processTx()')
      throw err
    }
  }

  // Validate that the TX inputs include a Group token as input and meet the
  // other requirements listed in the NFT1 specification:
  // https://github.com/simpleledger/slp-specifications/blob/master/slp-nft-1.md#nft1-protocol-requirements
  // Retui
  async validateInputs (data) {
    try {
      // console.log('Entering nft-genesis.js validateInputs()')

      const { txData } = data
      // console.log(`slpData: ${JSON.stringify(slpData, null, 2)}`)
      // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

      // GENESIS must include spending a valid NFT1 parent token (quantity > 0) at transaction input index 0
      const groupQty = txData.vin[0].tokenQty
      if (!groupQty) {
        // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

        console.log(`Group token quantity is not greater than zero: ${txData.vin[0].tokenQty}`)
        return false
      }

      // Ensure the input token is of type Group (129)
      const groupId = txData.vin[0].tokenId
      const groupInfo = await this.cache.get(groupId)
      // console.log(`groupInfo: ${JSON.stringify(groupInfo, null, 2)}`)

      if (groupInfo.tokenType !== 129) {
        console.log(`First input is not a group token: ${groupInfo.tokenType}`)
        return false
      }

      return true
    } catch (err) {
      console.error('Error in nftGenesis.validateInputs()')
      throw err
    }
  }

  // Process a GENESIS transaction by adding the new token to the token database.
  async addTokenToDB (data, groupTokenId) {
    try {
      const { slpData, blockHeight } = data
      // console.log(`Genesis slpData: ${JSON.stringify(slpData, null, 2)}`)

      // Initialize the transaction array.
      const txInfo = {
        txid: slpData.tokenId,
        height: blockHeight,
        type: 'GENESIS',
        qty: '1' // Force 1 as per NFT1 spec
      }
      const txArray = []
      txArray.push(txInfo)

      const forceQty = new BigNumber(1)

      // Add the new token to the token database.
      const token = {
        type: slpData.tokenType,
        ticker: slpData.ticker,
        name: slpData.name,
        tokenId: slpData.tokenId,
        documentUri: slpData.documentUri,
        documentHash: slpData.documentHash,
        decimals: 0, // Force 0 as per NFT1 spec
        mintBatonIsActive: false,
        tokensInCirculationBN: forceQty, // Force 1 as per NFT1 spec
        tokensInCirculationStr: '1', // Force 1 as per NFT1 spec
        blockCreated: blockHeight,
        totalBurned: '0',
        totalMinted: '1', // Force 1 as per NFT1 spec
        txs: txArray,
        parentGroupId: groupTokenId
      }

      // Handle case if minting baton was created.
      // if (slpData.mintBatonVout) {
      //   token.mintBatonIsActive = true
      // }

      // console.log(`NFT token Genesis: ${JSON.stringify(token, null, 2)}`)

      // Store the token data in the database.
      await this.tokenDb.put(slpData.tokenId, token)

      // Add this token ID to the NFTs array of the Group token that spawned it.
      const groupToken = await this.tokenDb.get(groupTokenId)
      if (Array.isArray(groupToken.nfts)) {
        groupToken.nfts.push(slpData.tokenId)
        await this.tokenDb.put(groupToken.tokenId, groupToken)
      }

      return token
    } catch (err) {
      console.error('Error in nftGenesis.addTokenToDB()')
      throw err
    }
  }

  // Add the address to the database, for the address recieving the tokens
  // created by the Genesis transaction.
  async addReceiverAddress (data) {
    try {
      const { slpData, txData, blockHeight } = data

      let recvrAddr
      try {
        recvrAddr = txData.vout[1].scriptPubKey.addresses[0]
      } catch (err) {
        // Corner case in tx 8a2aa5bb691a0ba15cce0d2a5b4aade6f43d39e10dc0a10d89dd6e7938a10c63
        // Where second output was a second OP_RETURN
        return true
      }

      // Update/add reciever address.
      let addr
      try {
        // Address exists in the database
        addr = await this.addrDb.get(recvrAddr)
      } catch (err) {
        // New address.
        addr = this.util.getNewAddrObj()
      }

      // Calculate the effective quantity
      const decimals = 0
      // let effectiveQty = new BigNumber(slpData.qty).dividedBy(10 ** decimals)
      // effectiveQty = effectiveQty.toString()
      const effectiveQty = '1'

      // Get the BCH in the output for this utxo.
      const output = txData.vout[1]
      const value = output.value

      const utxo = {
        txid: txData.txid,
        vout: 1,
        type: 'token',
        qty: '1', // Force 1 as per NFT1 spec
        tokenId: slpData.tokenId,
        tokenType: slpData.tokenType,
        address: recvrAddr,
        effectiveQty,
        decimals,
        value
      }
      // console.log(`genesis utxo: ${JSON.stringify(utxo, null, 2)}`)

      addr.utxos.push(utxo)
      // this.util.addWithoutDuplicate(utxo, addr.utxos)

      // Add the txid to the transaction history.
      const txObj = {
        txid: txData.txid,
        height: blockHeight
      }
      this.util.addTxWithoutDuplicate(txObj, addr.txs)

      // Update balances
      this.updateBalanceFromGenesis(addr, slpData)

      // Save address to the database.
      await this.addrDb.put(recvrAddr, addr)

      // Add the utxo to the utxo database
      await this.utxoDb.put(`${utxo.txid}:${utxo.vout}`, utxo)

      return addr
    } catch (err) {
      console.error('Error in nftGenesis.addReceiverAddress()')
      throw err
    }
  }

  // Update the balance for the given address with the given token data.
  updateBalanceFromGenesis (addrObj, slpData) {
    try {
      // console.log('addrObj: ', addrObj)
      // console.log('slpData: ', slpData)

      const tokenId = slpData.tokenId
      // const qty = slpData.qty
      const qty = new BigNumber(1)

      // Get existing balance, if it exists.
      const tokenExists = addrObj.balances.filter((x) => x.tokenId === tokenId)
      // console.log('tokenExists: ', tokenExists)

      if (!tokenExists.length) {
        // Balance for this token does not exist in the address. Add it.
        addrObj.balances.push({ tokenId, qty })
        return true
      }

      // TODO: I think this for-loop can be removed, since it's not possible for
      // an address to have an existing balance of an NFT.
      // This function was copied from send.js.
      // To remove this for-loop, it should be commented out and an instance
      // should be synced from genesis, then the NFT balances for an address
      // can be compared between instances.

      // Token exists in the address object, update the balance.
      // for (let i = 0; i < addrObj.balances.length; i++) {
      //   const thisBalance = addrObj.balances[i]
      //   console.log(`thisBalance: ${JSON.stringify(thisBalance, null, 2)}`)
      //
      //   if (thisBalance.tokenId !== tokenId) continue
      //
      //   // bignumber.js addition.
      //   thisBalance.qty = qty.plus(thisBalance.qty)
      //
      //   return true
      // }
    } catch (err) {
      console.error('Error in nftGenesis.updateBalanceFromGenesis()')
      throw err
    }
  }

  // Update the address entry in the database, to reflect the spent Group tokens.
  async subtractTokensFromInputAddr (data) {
    try {
      const { txData, blockHeight } = data
      // console.log(`Processing txid: ${txData.txid}`)
      // console.log(`data: ${JSON.stringify(data, null, 2)}`)

      // Loop through each input, and ensure all input UTXOs are present in the
      // database BEFORE processing (i.e. before deleting UTXOs from the database).
      for (let i = 0; i < txData.vin.length; i++) {
        const thisVin = txData.vin[i]
        // console.log(
        //   `pre-processing thisVin: ${JSON.stringify(thisVin, null, 2)}`
        // )

        // If there are no tokens in this input, then skip it.
        if (!thisVin.tokenQty) continue

        // Get the DB entry for this address.
        const addrData = await this.addrDb.get(thisVin.address)
        // console.log(`data: ${JSON.stringify(data, null, 2)}`)
        // console.log(`addrData: ${JSON.stringify(addrData, null, 2)}`)
        // process.exit(0)

        // Get the UTXO entry that matches the current input.
        const utxoToDelete = addrData.utxos.filter((x) => {
          // console.log('x.tokenId: ', x.tokenId)
          // console.log('txData.tokenId: ', thisVin.tokenId)
          return x.txid === thisVin.txid && x.vout === thisVin.vout
        })

        if (!utxoToDelete.length) {
          // console.log(`\nthisVin: ${JSON.stringify(thisVin, null, 2)}`)

          throw new Error(`Input UTXO with TXID ${thisVin.txid} could not be found in database.
            Skipping processing of ${data.txData.txid}`)
        }
      }

      let total = new BigNumber(0)
      let groupTokenId = ''

      // Loop through and process each input and delete the input UTXO
      // from the addr database object.
      for (let i = 0; i < txData.vin.length; i++) {
        const thisVin = txData.vin[i]

        // Add properties desired when monitoring output on command line.
        thisVin.tokenType = txData.tokenType
        thisVin.tokenTicker = txData.tokenTicker
        thisVin.tokenName = txData.tokenName
        console.log(`processing thisVin: ${JSON.stringify(thisVin, null, 2)}`)

        // GENESIS must include spending a valid NFT1 parent token
        // (quantity > 0) at transaction input index 0
        if (i === 0) {
          if (!thisVin.tokenQty) {
            throw new Error('NFT does not have Group token as input.')
          }
        }

        // If there are no tokens in this input, then skip it.
        if (!thisVin.tokenQty) continue

        // If the token IDs do not match, skip it.
        // if (thisVin.tokenId !== txData.tokenId) continue

        groupTokenId = thisVin.tokenId
        console.log(`Group Token ID used to generate this NFT: ${groupTokenId}`)

        // Get the DB entry for this address.
        const addrData = await this.addrDb.get(thisVin.address)
        // console.log('before deletion, addrData: ', addrData)

        // Get the UTXO entry that matches the current input.
        const utxoToDelete = addrData.utxos.filter((x) => {
          // console.log('x.tokenId: ', x.tokenId)
          // console.log('thisVin.tokenId: ', thisVin.tokenId)
          return x.txid === thisVin.txid && x.vout === thisVin.vout
        })
        // console.log('utxoToDelete: ', utxoToDelete)

        // This is most often where the indexer will 'break'. This is primarily
        // due to several chained UTXOs in the block, which are rapidly spending
        // tokens.
        if (!utxoToDelete.length) {
          // console.log(`\nthisVin: ${JSON.stringify(thisVin, null, 2)}`)
          // console.log(
          //   `addrData.utxos: ${JSON.stringify(addrData.utxos, null, 2)}`
          // )

          throw new Error(
            `Could not find UTXO in address ${thisVin.address} to delete when processing TX inputs.
            TXID: ${data.txData.txid}`
          )
        }

        // console.log(
        //   `Deleting input UTXO: ${JSON.stringify(utxoToDelete[0], null, 2)}`
        // )

        // Delete the UTXO that was just spent.
        addrData.utxos = this.util.removeUtxoFromArray(
          utxoToDelete[0],
          addrData.utxos
        )
        // console.log('addrData after utxo delete: ', addrData)

        // Subtract the token balance
        const negAmntBN = this.subtractBalanceFromSend(
          addrData,
          utxoToDelete[0]
        )
        // console.log('addrData after subtractBalanceFromSend: ', addrData)

        // Track the total quantity of deleted tokens.
        total = total.plus(negAmntBN)

        // Add the txid to the transaction history.
        const txObj = {
          txid: txData.txid,
          height: blockHeight
        }
        this.util.addTxWithoutDuplicate(txObj, addrData.txs)

        // Save the updated address data to the database.
        await this.addrDb.put(thisVin.address, addrData)

        // Delete the utxo from the utxo database
        await this.utxoDb.del(`${utxoToDelete[0].txid}:${utxoToDelete[0].vout}`)
      }

      // Return the amount of Group tokens consumed
      const spentBN = total
      return { spentBN, groupTokenId }

      // const inputTx = await this.txDb.get()
    } catch (err) {
      console.error(
        `Error in nftGenesis.subtractTokensFromInputAddr() TXID: ${data.txData.txid}`
      )
      throw err
    }
  }

  // Update the balance for the given address with the given token data.
  subtractBalanceFromSend (addrObj, utxoToDelete) {
    try {
      // console.log('addrObj: ', addrObj)
      // console.log('utxoToDelete: ', utxoToDelete)

      let amountToSubtract

      // Subtract the balance of the utxoToDelete from the balance for that token.
      for (let i = 0; i < addrObj.balances.length; i++) {
        const thisBalance = addrObj.balances[i]

        if (thisBalance.tokenId === utxoToDelete.tokenId) {
          const currentBalance = new BigNumber(thisBalance.qty)
          amountToSubtract = new BigNumber(utxoToDelete.qty)

          const difference = currentBalance.minus(amountToSubtract)

          thisBalance.qty = difference.toString()

          // If the balance is zero, remove that entry from the address data.
          if (difference.isZero()) {
            addrObj.balances.splice(i, 1)
          }

          break // Exit the loop
        }
      }

      return amountToSubtract
    } catch (err) {
      console.error('Error in nftGenesis.subtractBalanceFromSend()')
      throw err
    }
  }
}

// module.exports = NftGenesis
export default NftGenesis

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/slp-indexer/tx-types/send.js`:

```js
/*
  A class library for processing Send SLP transactions

  Strategy for analyzing send transactions:
  - Subtract the quantities of those tokens from the address holding them.
  - Validate the transaction with slp-validate. If invalid, exit processing.
  - Add the token output quantities to each output address.

  Dev Notes:

*/

// const BigNumber = require('bignumber.js')
import BigNumber from 'bignumber.js'

// const IndexerUtils = require('../lib/utils')
// const DAG = require('../lib/dag')
import IndexerUtils from '../lib/utils.js'
import DAG from '../lib/dag.js'

class Send {
  constructor (localConfig = {}) {
    // Dependency injection
    this.cache = localConfig.cache
    if (!this.cache) {
      throw new Error('Must pass cache instance when instantiating send.js')
    }
    this.addrDb = localConfig.addrDb
    if (!this.addrDb) {
      throw new Error(
        'Must pass address DB instance when instantiating send.js'
      )
    }
    this.tokenDb = localConfig.tokenDb
    if (!this.tokenDb) {
      throw new Error('Must pass token DB instance when instantiating send.js')
    }
    this.txDb = localConfig.txDb
    if (!this.txDb) {
      throw new Error(
        'Must pass transaction DB instance when instantiating send.js'
      )
    }
    this.utxoDb = localConfig.utxoDb
    if (!this.utxoDb) {
      throw new Error('Must pass utxo DB instance when instantiating send.js')
    }

    // Encapsulate dependencies
    this.util = new IndexerUtils()
    this.dag = new DAG(localConfig)

    // Bind 'this' object to all methods in this class.
    this.processTx = this.processTx.bind(this)
    this.processBurn = this.processBurn.bind(this)
    this.reverseAddTokenFromOutput = this.reverseAddTokenFromOutput.bind(this)
  }

  // This is the top-level function. It calls all other subfunctions.
  async processTx (data) {
    try {
      // console.log(`data.slpData: ${JSON.stringify(data.slpData, null, 2)}`)

      // console.log(`send.processTx() data: ${JSON.stringify(data, null, 2)}`)
      const { txData } = data
      const txid = txData.txid
      const tokenId = data.txData.tokenId

      let start = new Date()
      start = start.getTime()

      // Validate the TX against the SLP DAG.
      const { isValid } = await this.dag.crawlDag(txid, tokenId)
      console.log(`processTx() isValid: ${isValid}`)
      if (!isValid) {
        console.log(`TXID ${txid} failed DAG validation. Skipping.`)

        // Mark TX as invalid and save in database.
        txData.isValidSlp = false
        await this.txDb.put(txData.txid, txData)

        return
      }

      // Subtract the input UTXOs and balances from input addresses.
      const spentBN = await this.subtractTokensFromInputAddr(data)
      console.log(`TXID ${txid} spent ${spentBN.toString()} tokens.`)

      // Add the output UTXOs to output addresses
      const sentBN = await this.addTokensFromOutput(data)
      console.log(`TXID ${txid} sent ${sentBN.toString()} tokens.`)

      // Detect and process a 'controlled burn' transaction.
      const diffBN = await this.processBurn(spentBN, sentBN, data)
      console.log(`TXID ${txid} difference is ${diffBN.toString()}`)

      // Update token stats
      await this.updateTokenStats(data, diffBN, spentBN, sentBN)

      let end = new Date()
      end = end.getTime()
      const diff = end - start
      console.log(`Processing of SEND TX took ${diff} mS for TXID ${txid}`)

      return true
    } catch (err) {
      console.error('Error in send.processTx()')

      throw err
    }
  }

  // Update the transaction array for the token stats.
  async updateTokenStats (data, diffBN, spentBN, sentBN) {
    try {
      const { slpData, blockHeight, txData } = data
      const tokenId = slpData.tokenId

      // Update the token data.
      const tokenData = await this.tokenDb.get(tokenId)
      // console.log(`updateTokenStats() tokenData: ${JSON.stringify(tokenData, null, 2)}`)

      let txInfo = {}

      if (diffBN.isGreaterThan(0)) {
        // Controlled burn.

        txInfo = {
          txid: txData.txid,
          height: blockHeight,
          type: 'SEND-BURN',
          qty: sentBN.toString(),
          burned: diffBN.toString()
        }

        // If the token is an NFT, mark the holder address as null
        if (tokenData.type === 65) {
          tokenData.nftHolder = null
        }
      } else if (diffBN.isLessThan(0)) {
        // Uncontrolled burn

        txInfo = {
          txid: txData.txid,
          height: blockHeight,
          type: 'BURN-UNCONTROLLED',
          qty: '0',
          burned: spentBN.toString()
        }

        // If the token is an NFT, mark the holder address as null
        if (tokenData.type === 65) {
          tokenData.nftHolder = null
        }
      } else {
        // Normal send transaction.

        txInfo = {
          txid: txData.txid,
          height: blockHeight,
          type: 'SEND',
          qty: sentBN.toString()
        }

        // If the token is an NFT, save address of the current holder of the NFT.
        if (tokenData.type === 65) {
          const addr = txData.vout[1].scriptPubKey.addresses[0]

          tokenData.nftHolder = addr
        }
      }

      // console.log(`txInfo: ${JSON.stringify(txInfo, null, 2)}`)
      tokenData.txs.push(txInfo)

      // console.log(`new token data: ${JSON.stringify(tokenData, null, 2)}`)
      await this.tokenDb.put(tokenId, tokenData)

      return tokenData
    } catch (err) {
      console.error('Error in updateTokenStats()')
      throw err
    }
  }

  // This function expects two BigNumbers as an input, represent the amount
  // spent (inputs) and sent (outputs). This info is used to detect a
  // 'controlled burn' for a token. If a burn is detected, it updates the
  // token stats.
  async processBurn (spentBN, sentBN, data) {
    // async processBurn (spentBN, sentBN, txid, tokenId) {
    try {
      const { slpData, txData } = data
      const txid = txData.txid
      const tokenId = slpData.tokenId

      const diffBN = spentBN.minus(sentBN)

      // If the difference is positive, then it's a 'controlled burn' transaction.
      if (diffBN.isGreaterThan(0)) {
        console.log(`TXID ${txid} burned ${diffBN.toString()} tokens.`)

        // Update the token data.
        const tokenData = await this.tokenDb.get(tokenId)
        // console.log(`tokenData: ${JSON.stringify(tokenData, null, 2)}`)

        const tokensInCirc = new BigNumber(tokenData.tokensInCirculationBN)
        const totalBurned = new BigNumber(tokenData.totalBurned)

        const diffCirc = tokensInCirc.minus(diffBN)
        const newBurned = totalBurned.plus(diffBN)

        tokenData.tokensInCirculationBN = diffCirc
        tokenData.tokensInCirculationStr = diffCirc.toString()
        tokenData.totalBurned = newBurned.toString()

        // console.log(`new token data: ${JSON.stringify(tokenData, null, 2)}`)
        await this.tokenDb.put(tokenId, tokenData)
      } else if (diffBN.isLessThan(0)) {
        console.log('Outputs exceed inputs. Uncontrolled burn detected.')
        console.log(`${spentBN} tokens burned.`)
        // console.log(`data: ${JSON.stringify(data, null, 2)}`)

        // Outputs exceed inputs, which make this an invalide TX, resulting in
        // burn of all tokens. All changes made by addTokensFromOutput() need
        // to be rolled back.
        await this.reverseAddTokenFromOutput(data)

        // Mark TX as invalid in tx database.
        // This should get picked up in index.js/processData() to update the
        // tx database.
        data.txData.isValidSlp = false

        // Update token stats.
        const tokenData = await this.tokenDb.get(tokenId)
        // console.log(`tokenData: ${JSON.stringify(tokenData, null, 2)}`)

        const tokensInCirc = new BigNumber(tokenData.tokensInCirculationBN)
        const totalBurned = new BigNumber(tokenData.totalBurned)
        console.log(`old total burned: ${totalBurned.toString()}`)

        // TODO: Get total of all inputs

        const diffCirc = tokensInCirc.minus(spentBN)
        const newBurned = totalBurned.plus(spentBN)
        console.log(`new total burned: ${newBurned.toString()}`)

        tokenData.tokensInCirculationBN = diffCirc
        tokenData.tokensInCirculationStr = diffCirc.toString()
        tokenData.totalBurned = newBurned.toString()

        // console.log(`new token data: ${JSON.stringify(tokenData, null, 2)}`)
        await this.tokenDb.put(tokenId, tokenData)
      }

      return diffBN
    } catch (err) {
      console.error('Error in processBurn()')
      throw err
    }
  }

  // Reverse the database changes that were made by addTokensFromOutput()
  // A lot of the input validation is skipped, because it is assumed this
  // function runs after addTokensFromOutput().
  async reverseAddTokenFromOutput (data) {
    try {
      let totalBurnedBN = new BigNumber(0)

      const { slpData, txData } = data

      // Loop through each output in slpData
      for (let i = 0; i < slpData.amounts.length; i++) {
        const recvrAddr = txData.vout[1 + i].scriptPubKey.addresses[0]
        const txid = txData.txid

        // Get the address data from the database.
        const addrData = await this.addrDb.get(recvrAddr)
        // console.log(`addrData: ${JSON.stringify(addrData, null, 2)}`)

        // Get the UTXO entry that matches the current output.
        const utxoToDelete = addrData.utxos.filter((x) => {
          return x.txid === txid && x.vout === 1 + i
        })
        console.log('utxoToDelete: ', utxoToDelete)

        // Subtract the token balance
        const negAmntBN = await this.subtractBalanceFromSend(
          addrData,
          utxoToDelete[0]
        )
        // console.log(`netAmntBN: ${negAmntBN.toString()}`)

        // Delete the burned UTXO
        addrData.utxos = this.util.removeUtxoFromArray(
          utxoToDelete[0],
          addrData.utxos
        )
        // console.log('addrData after utxo delete: ', addrData)

        // Track the total quantity of burned tokens.
        totalBurnedBN = totalBurnedBN.plus(negAmntBN)
        // console.log(`totalBurnedBN: ${totalBurnedBN.toString()}`)

        // Save the updated address data to the database.
        await this.addrDb.put(recvrAddr, addrData)

        // Delete the utxo from the utxo database
        await this.utxoDb.del(`${utxoToDelete[0].txid}:${utxoToDelete[0].vout}`)
      }

      return totalBurnedBN
    } catch (err) {
      console.error('Error in reverseAddtokenFromOutput()')
      throw err
    }
  }

  // Update the addresses in the database recieving the outputs of the tx.
  async addTokensFromOutput (data) {
    try {
      let totalSentBN = new BigNumber(0)

      // console.log(`data: ${JSON.stringify(data, null, 2)}`)
      const { slpData } = data

      // Loop through each output in slpData
      for (let i = 0; i < slpData.amounts.length; i++) {
        // const recvrAddr = txData.vout[1 + i].scriptPubKey.addresses[0]

        const sentBN = await this.updateOutputAddr(data, i + 1)
        // const addrObj = await this.updateOutputAddr(data, i + 1)
        // console.log(`addrObj: ${JSON.stringify(addrObj, null, 2)}`)

        totalSentBN = totalSentBN.plus(sentBN)
      }

      return totalSentBN
    } catch (err) {
      console.error('Error in addTokensFromOutput()')
      throw err
    }
  }

  // Update the index databases with an output from a TX. This updates the address
  // and TX databases.
  async updateOutputAddr (data, voutIndex) {
    try {
      const { slpData, txData, blockHeight } = data

      let recvrAddr = ''
      try {
        recvrAddr = txData.vout[voutIndex].scriptPubKey.addresses[0]
        // console.log(`recvrAddr: ${recvrAddr}`)
      } catch (err) {
        // This is a corner case, when the vout doesn't exist, and thus the TX
        // has burned tokens.
        console.log(
          `voutIndex: ${voutIndex}, txData: ${JSON.stringify(txData, null, 2)}`
        )
        console.log('err: ', err)
        // throw err

        console.log('Skipping this output.')
        return
      }

      // Get address from the database, or create a new address object if it
      // doesn't exist in the database.
      let addr
      try {
        // Address exists in the database
        addr = await this.addrDb.get(recvrAddr)
      } catch (err) {
        // New address.
        addr = this.util.getNewAddrObj()
      }
      // console.log(`addr: ${JSON.stringify(addr, null, 2)}`)
      // console.log(`UTXOs from database for addr ${recvrAddr}: ${JSON.stringify(addr.utxos, null, 2)}`)

      // The token quantity in this output.
      const slpAmountStr = slpData.amounts[voutIndex - 1].toString()

      // Generate a new UTXO object.
      const newUtxo = await this.addUtxoToOutputAddr(
        data,
        recvrAddr,
        voutIndex,
        slpAmountStr
      )
      // console.log(`newUtxo: ${JSON.stringify(newUtxo, null, 2)}`)

      // Add the UTXO to the addr object.
      addr.utxos.push(newUtxo)

      // Add the txid to the transaction history.
      const txObj = {
        txid: txData.txid,
        height: blockHeight
      }
      this.util.addTxWithoutDuplicate(txObj, addr.txs)

      // Update balances
      const qtyBN = this.updateBalanceFromSend(addr, slpData, voutIndex - 1)
      // console.log(`qtyBN: ${qtyBN.toString()}`)

      // console.log(`Saving this UTXO data to database for addr ${recvrAddr}: ${JSON.stringify(addr.utxos, null, 2)}`)

      // Save address to the database.
      await this.addrDb.put(recvrAddr, addr)

      // Add the utxo to the utxo database
      await this.utxoDb.put(`${newUtxo.txid}:${newUtxo.vout}`, newUtxo)

      // console.log(`Stored addr data in database: ${JSON.stringify(addr, null, 2)}`)

      return qtyBN
    } catch (err) {
      console.error('Error in updateOutputAddr()')
      throw err
    }
  }

  // Update the addresses object in the database (recieving the outputs of the tx).
  // Returns the address object. Does not update the database, in case there
  // needs to be further processing.
  // Create the UTXOs and add to the address object, to reflect the new UTXO
  // output of the transaction.
  async addUtxoToOutputAddr (data, recvrAddr, vout, slpAmountStr) {
    try {
      // console.log(`addUtxoToOutputAddr data: ${JSON.stringify(data, null, 2)}`)
      const { slpData, txData } = data

      // Calculate the effective quantity
      const decimals = txData.tokenDecimals
      let effectiveQty = new BigNumber(slpAmountStr).dividedBy(10 ** decimals)
      effectiveQty = effectiveQty.toString()

      // Get the BCH in the output for this utxo.
      const output = txData.vout[vout]
      const value = output.value

      const utxo = {
        txid: txData.txid,
        vout,
        type: 'token',
        tokenType: slpData.tokenType,
        qty: slpAmountStr,
        tokenId: slpData.tokenId,
        address: recvrAddr,
        decimals,
        effectiveQty,
        value,
        name: txData.tokenName,
        ticker: txData.tokenTicker
      }
      // console.log(`utxo: ${JSON.stringify(utxo, null, 2)}`)

      return utxo
    } catch (err) {
      console.error('Error in updateAddrObjFromOutput()')
      throw err
    }
  }

  // Update the balance for the given address with the given token data.
  // Modifies the balance of the addrObj, in-place.
  // Returns a BigNumber instance of the quanity of tokens added to the address.
  updateBalanceFromSend (addrObj, slpData, amountIndex) {
    try {
      // console.log('addrObj: ', addrObj)
      // console.log('slpData: ', slpData)
      // console.log('amountIndex: ', amountIndex)

      const tokenId = slpData.tokenId
      const qty = slpData.amounts[amountIndex]

      // Get existing balance, if it exists.
      const tokenExists = addrObj.balances.filter((x) => x.tokenId === tokenId)
      // console.log('tokenExists: ', tokenExists)

      // If the token does not exist in the address object from the database.
      if (!tokenExists.length) {
        // Balance for this token does not exist in the address. Add it.
        addrObj.balances.push({ tokenId, qty: qty.toString() })
        return qty
      }
      // console.log(`token balance for ${tokenId} already exists`)

      // Token exists in the address object, update the balance.
      for (let i = 0; i < addrObj.balances.length; i++) {
        const thisBalance = addrObj.balances[i]

        if (thisBalance.tokenId !== tokenId) continue

        // console.log(`old balance: ${thisBalance.qty.toString()}`)

        // bignumber.js addition.
        thisBalance.qty = qty.plus(thisBalance.qty).toString()

        // console.log(`new balance: ${thisBalance.qty.toString()}`)

        return qty
      }
    } catch (err) {
      console.error('Error in updateBalanceFromSend()')
      throw err
    }
  }

  // Update the address entry in the database, to reflect the spent inputs.
  async subtractTokensFromInputAddr (data) {
    try {
      const { txData, blockHeight } = data
      // console.log(`Processing txid: ${txData.txid}`)
      // console.log(`data: ${JSON.stringify(data, null, 2)}`)

      // Loop through each input, and ensure all input UTXOs are present in the
      // database BEFORE processing (i.e. before deleting UTXOs from the database).
      for (let i = 0; i < txData.vin.length; i++) {
        const thisVin = txData.vin[i]
        // console.log(
        //   `pre-processing thisVin: ${JSON.stringify(thisVin, null, 2)}`
        // )

        // If there are no tokens in this input, then skip it.
        if (!thisVin.tokenQty) continue

        // If the token IDs do not match, skip it.
        if (thisVin.tokenId !== txData.tokenId) continue

        // Do a DAG validation of the input.
        // console.log(`crawling txid ${thisVin.txid} for token ${txData.tokenId}`)
        // const inputIsValid = await this.dag.validateTxid(thisVin.txid)
        const { isValid } = await this.dag.crawlDag(
          thisVin.txid,
          txData.tokenId
        )
        // console.log(
        //   `send.js subtractTokensFromInputAddr() crawlDag result: ${isValid}`
        // )
        // console.log(`dag: ${JSON.stringify(dag, null, 2)}`)
        if (!isValid) {
          thisVin.tokenId = null
          thisVin.tokenQty = 0
          thisVin.tokenQtyStr = '0'
          continue
        }

        // Check to see if this Vin TX is in the database.
        try {
          const checkTxData = await this.txDb.get(thisVin.txid)

          // Skip this input if it was marked invalid
          if (checkTxData.isValidSlp === false) {
            thisVin.tokenId = null
            thisVin.tokenQty = 0
            thisVin.tokenQtyStr = '0'
            continue
          }
        } catch (err) {
          // console.log(`txid ${thisVin.txid} not found in the tx database`)
          /* exit quietly */
        }

        // Get the DB entry for this address.
        const addrData = await this.addrDb.get(thisVin.address)
        // console.log(`data: ${JSON.stringify(data, null, 2)}`)
        // console.log(`addrData: ${JSON.stringify(addrData, null, 2)}`)
        // process.exit(0)

        // Get the UTXO entry that matches the current input.
        const utxoToDelete = addrData.utxos.filter((x) => {
          // console.log('x.tokenId: ', x.tokenId)
          // console.log('txData.tokenId: ', thisVin.tokenId)
          return x.txid === thisVin.txid && x.vout === thisVin.vout
        })

        if (!utxoToDelete.length) {
          console.log(`\nthisVin: ${JSON.stringify(thisVin, null, 2)}`)

          throw new Error(`Input UTXO with TXID ${thisVin.txid} could not be found in database.
            Skipping processing of ${data.txData.txid}`)
        }
      }

      let total = new BigNumber(0)

      // Loop through and process each input and delete the input UTXO
      // from the addr database object.
      for (let i = 0; i < txData.vin.length; i++) {
        const thisVin = txData.vin[i]
        // console.log(`processing thisVin: ${JSON.stringify(thisVin, null, 2)}`)

        // If there are no tokens in this input, then skip it.
        if (!thisVin.tokenQty) continue

        // If the token IDs do not match, skip it.
        if (thisVin.tokenId !== txData.tokenId) continue

        // Get the DB entry for this address.
        const addrData = await this.addrDb.get(thisVin.address)
        // console.log('before deletion, addrData: ', addrData)

        // Get the UTXO entry that matches the current input.
        const utxoToDelete = addrData.utxos.filter((x) => {
          // console.log('x.tokenId: ', x.tokenId)
          // console.log('thisVin.tokenId: ', thisVin.tokenId)
          return x.txid === thisVin.txid && x.vout === thisVin.vout
        })
        // console.log('utxoToDelete: ', utxoToDelete)

        // This is most often where the indexer will 'break'. This is primarily
        // due to several chained UTXOs in the block, which are rapidly spending
        // tokens.
        if (!utxoToDelete.length) {
          console.log(`\nthisVin: ${JSON.stringify(thisVin, null, 2)}`)
          console.log(
            `addrData.utxos: ${JSON.stringify(addrData.utxos, null, 2)}`
          )
          throw new Error(
            `Could not find UTXO in address ${thisVin.address} to delete when processing TX inputs.
            TXID: ${data.txData.txid}`
          )
        }

        // console.log('txData: ', txData)
        // Add details for on-screen debugging
        utxoToDelete[0].tokenName = txData.tokenName
        utxoToDelete[0].tokenTicker = txData.tokenTicker
        console.log(
          `send.js/subtractTokensFromInputAddr() Deleting input UTXO: ${JSON.stringify(utxoToDelete[0], null, 2)}`
        )

        // Delete the UTXO that was just spent.
        addrData.utxos = this.util.removeUtxoFromArray(
          utxoToDelete[0],
          addrData.utxos
        )
        // console.log('addrData after utxo delete: ', addrData)

        // Subtract the token balance
        const negAmntBN = this.subtractBalanceFromSend(
          addrData,
          utxoToDelete[0]
        )
        // console.log('addrData after subtractBalanceFromSend: ', addrData)

        // Track the total quantity of deleted tokens.
        total = total.plus(negAmntBN)

        // Add the txid to the transaction history.
        const txObj = {
          txid: txData.txid,
          height: blockHeight
        }
        this.util.addTxWithoutDuplicate(txObj, addrData.txs)

        // Save the updated address data to the database.
        await this.addrDb.put(thisVin.address, addrData)

        // Delete the utxo from the utxo database
        await this.utxoDb.del(`${utxoToDelete[0].txid}:${utxoToDelete[0].vout}`)
      }

      // Return true to indicate that the TX was processed.
      return total
      // const inputTx = await this.txDb.get()
    } catch (err) {
      console.error(
        `Error in subtractTokensFromInputAddr() TXID: ${data.txData.txid}`
      )
      throw err
    }
  }

  // Update the balance for the given address with the given token data.
  subtractBalanceFromSend (addrObj, utxoToDelete) {
    try {
      // console.log('addrObj: ', addrObj)
      // console.log('utxoToDelete: ', utxoToDelete)

      let amountToSubtract

      // Subtract the balance of the utxoToDelete from the balance for that token.
      for (let i = 0; i < addrObj.balances.length; i++) {
        const thisBalance = addrObj.balances[i]

        if (thisBalance.tokenId === utxoToDelete.tokenId) {
          const currentBalance = new BigNumber(thisBalance.qty)
          amountToSubtract = new BigNumber(utxoToDelete.qty)

          const difference = currentBalance.minus(amountToSubtract)

          thisBalance.qty = difference.toString()

          // If the balance is zero, remove that entry from the address data.
          if (difference.isZero()) {
            addrObj.balances.splice(i, 1)
          }

          break // Exit the loop
        }
      }

      return amountToSubtract
    } catch (err) {
      console.error('Error in indexer/utils.js/updateBalance()')
      throw err
    }
  }
}

// module.exports = Send
export default Send

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/slp-indexer/tx-types/genesis.js`:

```js
/*
  A class library for processing Genesis SLP transactions
*/

// const IndexerUtils = require('../lib/utils')
// const BigNumber = require('bignumber.js')

import IndexerUtils from '../lib/utils.js'
import BigNumber from 'bignumber.js'

class Genesis {
  constructor (localConfig = {}) {
    // LevelDBs
    this.addrDb = localConfig.addrDb
    if (!this.addrDb) {
      throw new Error(
        'Instance of address DB required when instantiating genesis.js'
      )
    }
    this.tokenDb = localConfig.tokenDb
    if (!this.tokenDb) {
      throw new Error(
        'Instance of token DB required when instantiating genesis.js'
      )
    }
    this.utxoDb = localConfig.utxoDb
    if (!this.utxoDb) {
      throw new Error(
        'Instance of utxo DB required when instantiating genesis.js'
      )
    }

    // Encapsulate dependencies
    this.util = new IndexerUtils()
  }

  // Primary function. Processes GENESIS transaction.
  async processTx (data) {
    try {
      // console.log(`data: ${JSON.stringify(data, null, 2)}`)
      console.log(
        `Processing Genesis txid ${data.txData.txid} with ticker '${data.slpData.ticker}' and name '${data.slpData.name}'`
      )
      // const { slpData, blockHeight, txData } = data

      await this.addTokenToDB(data)

      await this.addReceiverAddress(data)

      await this.addBatonAddress(data)

      // Signal that call completed successfully.
      return true
    } catch (err) {
      console.error('Error in genesis.processTx()')
      throw err
    }
  }

  // Process a GENESIS transaction by adding the new token to the token database.
  async addTokenToDB (data) {
    try {
      const { slpData, blockHeight } = data
      // console.log(`Genesis slpData: ${JSON.stringify(slpData, null, 2)}`)

      // Initialize the transaction array.
      const txInfo = {
        txid: slpData.tokenId,
        height: blockHeight,
        type: 'GENESIS',
        qty: slpData.qty.toString()
      }
      const txArray = []
      txArray.push(txInfo)

      // Add the new token to the token database.
      const token = {
        type: slpData.tokenType,
        ticker: slpData.ticker,
        name: slpData.name,
        tokenId: slpData.tokenId,
        documentUri: slpData.documentUri,
        documentHash: slpData.documentHash,
        decimals: slpData.decimals,
        mintBatonIsActive: false,
        tokensInCirculationBN: slpData.qty,
        tokensInCirculationStr: slpData.qty.toString(),
        blockCreated: blockHeight,
        totalBurned: '0',
        totalMinted: slpData.qty.toString(),
        txs: txArray
      }

      // Handle case if minting baton was created.
      if (slpData.mintBatonVout) {
        token.mintBatonIsActive = true
      }

      // Add NFT array for Group tokens
      if (slpData.tokenType === 129) {
        token.nfts = []
      }

      console.log(`token Genesis: ${JSON.stringify(token, null, 2)}`)

      // Store the token data in the database.
      await this.tokenDb.put(slpData.tokenId, token)

      return token
    } catch (err) {
      console.error('Error in genesis.addTokenToDB()')
      throw err
    }
  }

  // Add the address to the database, for the address recieving the tokens
  // created by the Genesis transaction.
  async addReceiverAddress (data) {
    try {
      const { slpData, txData, blockHeight } = data

      let recvrAddr
      try {
        recvrAddr = txData.vout[1].scriptPubKey.addresses[0]
      } catch (err) {
        // Corner case in tx 8a2aa5bb691a0ba15cce0d2a5b4aade6f43d39e10dc0a10d89dd6e7938a10c63
        // Where second output was a second OP_RETURN
        return true
      }

      // Update/add reciever address.
      let addr
      try {
        // Address exists in the database
        addr = await this.addrDb.get(recvrAddr)
      } catch (err) {
        // New address.
        addr = this.util.getNewAddrObj()
      }

      // Calculate the effective quantity
      const decimals = txData.tokenDecimals
      let effectiveQty = new BigNumber(slpData.qty).dividedBy(10 ** decimals)
      effectiveQty = effectiveQty.toString()

      // Get the BCH in the output for this utxo.
      const output = txData.vout[1]
      const value = output.value

      const utxo = {
        txid: txData.txid,
        vout: 1,
        type: 'token',
        qty: slpData.qty.toString(),
        tokenId: slpData.tokenId,
        tokenType: slpData.tokenType,
        address: recvrAddr,
        effectiveQty,
        decimals,
        value
      }
      // console.log(`genesis utxo: ${JSON.stringify(utxo, null, 2)}`)

      addr.utxos.push(utxo)
      // this.util.addWithoutDuplicate(utxo, addr.utxos)

      // Add the txid to the transaction history.
      const txObj = {
        txid: txData.txid,
        height: blockHeight
      }
      this.util.addTxWithoutDuplicate(txObj, addr.txs)

      // Update balances
      this.updateBalanceFromGenesis(addr, slpData)

      // Save address to the database.
      await this.addrDb.put(recvrAddr, addr)

      // Add the utxo to the utxo database
      await this.utxoDb.put(`${utxo.txid}:${utxo.vout}`, utxo)

      return addr
    } catch (err) {
      console.error('Error in genesis.addReceiverAddress()')
      throw err
    }
  }

  // Add the address to the database, for the address recieving the minting
  // baton.
  async addBatonAddress (data) {
    try {
      const { slpData, txData, blockHeight } = data
      // console.log(`data: ${JSON.stringify(data, null, 2)}`)

      // Exit if the mint baton is null or 0.
      if (!slpData.mintBatonVout) return

      // Exit if mintBatonVout is 1. That is not allowed.
      if (slpData.mintBatonVout === 1) return

      let recvrAddr
      try {
        recvrAddr = txData.vout[slpData.mintBatonVout].scriptPubKey.addresses[0]
      } catch (err) {
        // Corner case: Mint baton was specified but the output does not actually
        // exist. In that case, the mint baton is actually burned.
        return
      }

      // Update/add reciever address.
      let addr
      try {
        // Address exists in the database
        addr = await this.addrDb.get(recvrAddr)
      } catch (err) {
        // New address.
        addr = this.util.getNewAddrObj()
      }

      const utxo = {
        txid: txData.txid,
        vout: slpData.mintBatonVout,
        type: 'baton',
        tokenId: slpData.tokenId,
        address: recvrAddr,
        tokenType: slpData.tokenType,
        tokenName: txData.tokenName,
        tokenTicker: txData.tokenTicker
      }
      addr.utxos.push(utxo)
      console.log(`genesis.js/addBatonAddress() mint baton utxo: ${JSON.stringify(utxo, null, 2)}`)

      // Add the txid to the transaction history.
      const txObj = {
        txid: txData.txid,
        height: blockHeight
      }
      this.util.addTxWithoutDuplicate(txObj, addr.txs)

      // Save address to the database.
      await this.addrDb.put(recvrAddr, addr)

      // Add the utxo to the utxo database
      await this.utxoDb.put(`${utxo.txid}:${utxo.vout}`, utxo)

      return addr
    } catch (err) {
      console.error('Error in genesis.addBatonAddress()')
      throw err
    }
  }

  // Update the balance for the given address with the given token data.
  updateBalanceFromGenesis (addrObj, slpData) {
    try {
      // console.log('addrObj: ', addrObj)
      // console.log('slpData: ', slpData)

      const tokenId = slpData.tokenId
      const qty = slpData.qty

      // Get existing balance, if it exists.
      const tokenExists = addrObj.balances.filter((x) => x.tokenId === tokenId)
      // console.log('tokenExists: ', tokenExists)

      if (!tokenExists.length) {
        // Balance for this token does not exist in the address. Add it.
        addrObj.balances.push({ tokenId, qty })
        return true
      }

      // Token exists in the address object, update the balance.
      for (let i = 0; i < addrObj.balances.length; i++) {
        const thisBalance = addrObj.balances[i]
        console.log(`thisBalance: ${JSON.stringify(thisBalance, null, 2)}`)

        if (thisBalance.tokenId !== tokenId) continue

        // bignumber.js addition.
        thisBalance.qty = qty.plus(thisBalance.qty)

        return true
      }
    } catch (err) {
      console.error('Error in genesis.updateBalanceFromGenesis()')
      throw err
    }
  }
}

// module.exports = Genesis
export default Genesis

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/slp-indexer/tx-types/mint.js`:

```js
/*
  A class library for processing Send SLP transactions

  Strategy for analyzing send transactions:
  - MINT transactions bring new tokens into existence.
  - Validate the transaction with slp-validate. If invalid, exit processing.
  - Add token output quantities to each output address.
  - Increase the tokens in circulation value in the token index.
*/

// Public npm libraries
// const BigNumber = require('bignumber.js')
import BigNumber from 'bignumber.js'

// Local libraries
// const IndexerUtils = require('../lib/utils')
// const DAG = require('../lib/dag')
import IndexerUtils from '../lib/utils.js'
import DAG from '../lib/dag.js'

class Mint {
  constructor (localConfig = {}) {
    // Dependency injection
    this.cache = localConfig.cache
    if (!this.cache) {
      throw new Error(
        'Must pass cache instance when instantiating mint.js'
      )
    }
    this.addrDb = localConfig.addrDb
    if (!this.addrDb) {
      throw new Error(
        'Must pass address DB instance when instantiating mint.js'
      )
    }
    this.tokenDb = localConfig.tokenDb
    if (!this.tokenDb) {
      throw new Error(
        'Must pass token DB instance when instantiating mint.js'
      )
    }
    this.txDb = localConfig.txDb
    if (!this.txDb) {
      throw new Error(
        'Must pass transaction DB instance when instantiating mint.js'
      )
    }
    this.utxoDb = localConfig.utxoDb
    if (!this.utxoDb) {
      throw new Error(
        'Must pass utxo DB instance when instantiating mint.js'
      )
    }

    // Encapsulate dependencies
    this.util = new IndexerUtils()
    this.dag = new DAG(localConfig)
  }

  async processTx (data) {
    try {
      // console.log(`mint.processTx() data: ${JSON.stringify(data, null, 2)}`)
      // const { slpData } = data

      // console.log('slpData: ', slpData)
      // console.log('slpData.amounts: ', slpData.amounts)

      // Validate the TX against the SLP DAG.
      const txid = data.txData.txid
      const tokenId = data.txData.tokenId
      const { isValid } = await this.dag.crawlDag(txid, tokenId)
      // const { isValid, dag } = await this.dag.crawlDag(txid, tokenId)
      // console.log('isValid: ', isValid)
      if (!isValid) {
        console.log(`MINT TXID ${txid} failed DAG validation. Skipping.`)

        // Mark TX as invalid and save in database.
        data.txData.isValidSlp = false
        await this.txDb.put(data.txData.txid, data.txData)

        return false
      }

      console.log('isValid: ', isValid)
      // console.log(`dag: ${JSON.stringify(dag, null, 2)}`)

      // Ensure the inputs to the tx have a valid mint baton.
      const batonVin = this.findBatonInput(data)
      if (batonVin === null) {
        console.log(`MINT TXID ${txid} has no baton input UTXOs. Skipping`)

        // Mark TX as invalid and save in database.
        data.txData.isValidSlp = false
        await this.txDb.put(data.txData.txid, data.txData)

        return false
      }

      // Remove the minting baton from the input address.
      await this.removeBatonInAddr(data)

      // Add the output UTXOs to output addresses
      await this.addTokensFromOutput(data)

      // Update the circulating supply in the token index.
      await this.updateTokenStats(data)

      // If there is a minting baton output, add the address to the DB.
      await this.addBatonOutAddr(data)

      // Return true to signal a successful completion of this function.
      return true
    } catch (err) {
      console.error('Error in mint.processTx()')
      throw err
    }
  }

  // Returns the vin index that contains the minting baton. If no minting
  // baton is found, returns null.
  findBatonInput (data) {
    try {
      // Default output
      let output = null

      const tokenId = data.slpData.tokenId
      const txData = data.txData

      // Loop through each input.
      for (let i = 0; i < txData.vin.length; i++) {
        const thisVin = txData.vin[i]

        // Test the input to see if it's the baton we're looking for.
        const tokenIdMatches = thisVin.tokenId === tokenId
        const isBaton = thisVin.isMintBaton

        if (tokenIdMatches && isBaton) {
          // Baton match found.
          output = i
          break
        }
      }

      return output
    } catch (err) {
      console.error('Error in findBatonInput()')
      throw err
    }
  }

  // Update the balance for the given address with the given token data.
  // updateBalanceFromSend (addrObj, slpData, amountIndex) {
  async updateBalanceFromMint (addr, slpData) {
    try {
      // console.log(`slpData: ${JSON.stringify(slpData, null, 2)}`)
      // console.log(`addr: ${JSON.stringify(addr, null, 2)}`)

      const tokenId = slpData.tokenId
      const qty = slpData.qty

      // const thisAddr = txData.vout[1].scriptPubKey.addresses[1]

      // Get address object from the database.
      // const addrObj = await this.addrDb.get(thisAddr)

      // Get existing balance, if it exists.
      const tokenExists = addr.balances.filter((x) => x.tokenId === tokenId)
      // console.log('tokenExists: ', tokenExists)

      // If the token does not exist in the address object from the database.
      if (!tokenExists.length) {
        // Balance for this token does not exist in the address. Add it.
        addr.balances.push({ tokenId, qty: qty.toString() })
        return true
      }

      // Token exists in the address object, update the balance.
      for (let i = 0; i < addr.balances.length; i++) {
        const thisBalance = addr.balances[i]

        // Skip entries that do not match the token ID.
        if (thisBalance.tokenId !== tokenId) continue

        // bignumber.js addition.
        thisBalance.qty = qty.plus(thisBalance.qty).toString()

        return true
      }
    } catch (err) {
      console.error('Error in updateBalanceFromMint()')
      throw err
    }
  }

  // Remove the minting baton UTXO from the input address.
  async removeBatonInAddr (data) {
    try {
      let batonFound = false
      let addr = {}
      let baton = {}
      let thisAddr
      // let invalidInputFound = false

      // Find the input address that spent the baton.
      const vin = data.txData.vin
      for (let i = 0; i < vin.length; i++) {
        thisAddr = vin[i].address

        // Attempt to get the address from the database. If it doesn't exist,
        // then skip the address because it's not the one holding the minting
        // baton.
        // let addr = {}
        try {
          addr = await this.addrDb.get(thisAddr)
          // console.log(
          //   `removeBatonInAddr() ${thisAddr}: ${JSON.stringify(addr, null, 2)}`
          // )
        } catch (err) {
          // Move on to the next address.
          continue
        }

        // Get the UTXO that contains the baton.
        // Also ensure the UTXO TXID and Vin TXID match.
        baton = addr.utxos.filter(
          (x) =>
            x.type === 'baton' &&
            x.txid === vin[i].txid &&
            x.vout === vin[i].vout
        )

        // If address does not contain baton UTXO, then move on to next address.
        if (baton.length === 0) continue

        baton = baton[0]
        console.log(`baton UTXO: ${JSON.stringify(baton, null, 2)}`)
        // console.log(`addr before: ${JSON.stringify(addr, null, 2)}`)

        batonFound = true

        // Exit the loop.
        break
      }

      if (!batonFound) {
        // console.log(`data.txData: ${JSON.stringify(data.txData, null, 2)}`)
        // console.log(`addr: ${JSON.stringify(addr, null, 2)}`)
        console.log(`vin: ${JSON.stringify(vin, null, 2)}`)
        throw new Error('Minting baton not found. UTXO is not in database.')
      }

      // Remove the baton UTXO from the array
      addr.utxos = this.util.removeUtxoFromArray(baton, addr.utxos)
      // console.log(`addr: ${JSON.stringify(addr, null, 2)}`)

      // Save updated address data to the database.
      await this.addrDb.put(thisAddr, addr)

      // Remove the baton UTXO from the UTXO database.
      await this.utxoDb.del(`${baton.txid}:${baton.vout}`)

      return true
    } catch (err) {
      console.error('Error in mint.js/removeBatonInAddr()')
      throw err
    }
  }

  // Update/add the address holding minting baton.
  async addBatonOutAddr (data) {
    try {
      const { slpData, txData, blockHeight } = data

      // Exit if the mint baton is null.
      if (!slpData.mintBatonVout) return

      const recvrAddr =
        txData.vout[slpData.mintBatonVout].scriptPubKey.addresses[0]

      // Update/add reciever address.
      let addr
      try {
        // Address exists in the database
        addr = await this.addrDb.get(recvrAddr)
      } catch (err) {
        // New address.
        addr = this.util.getNewAddrObj()
      }

      const utxo = {
        txid: txData.txid,
        vout: slpData.mintBatonVout,
        type: 'baton',
        tokenId: slpData.tokenId,
        address: recvrAddr,
        tokenType: slpData.tokenType
      }
      addr.utxos.push(utxo)

      // Add the txid to the transaction history.
      const txObj = {
        txid: txData.txid,
        height: blockHeight
      }
      this.util.addTxWithoutDuplicate(txObj, addr.txs)

      // Save address to the database.
      await this.addrDb.put(recvrAddr, addr)

      // Add the utxo to the utxo database
      await this.utxoDb.put(`${utxo.txid}:${utxo.vout}`, utxo)

      // Signal that the method completed successfully by returning the addr
      // object.
      return addr
    } catch (err) {
      console.error('Error in mint.js/addBatonOutAddr()')
      throw err
    }
  }

  // Update the token quantity in circulation.
  async updateTokenStats (data) {
    try {
      const { slpData, txData, blockHeight } = data

      // Get the token stats from the database.
      const tokenStats = await this.tokenDb.get(slpData.tokenId)
      // console.log('MINT update to tokenStats: ', tokenStats)

      // Add tokens using BigNumber math.
      const qty = slpData.qty.plus(
        new BigNumber(tokenStats.tokensInCirculationStr)
      )
      const qtyStr = qty.toString()

      // Update the token stats in the database.
      tokenStats.tokensInCirculationBN = qty
      tokenStats.tokensInCirculationStr = qtyStr

      // Track the total minted.
      const prevMinted = new BigNumber(tokenStats.totalMinted)
      const totalMinted = prevMinted.plus(slpData.qty)
      tokenStats.totalMinted = totalMinted.toString()

      // Update baton status
      if (slpData.mintBatonVout) {
        tokenStats.mintBatonIsActive = true
      } else {
        tokenStats.mintBatonIsActive = false
      }

      // Update the transactions array
      const txInfo = {
        txid: txData.txid,
        height: blockHeight,
        type: 'MINT',
        qty: slpData.qty.toString()
      }
      tokenStats.txs.push(txInfo)

      // Save updates to the database.
      await this.tokenDb.put(slpData.tokenId, tokenStats)

      // Signal that the function completed successfully by returning the
      // tokenStats object.
      return tokenStats
    } catch (err) {
      console.error('Error in mint.js/updateTokenStats()')
      throw err
    }
  }

  // Add the newly minted tokens to the recieving address.
  async addTokensFromOutput (data) {
    try {
      // console.log(`data: ${JSON.stringify(data, null, 2)}`)
      const { slpData, txData, blockHeight } = data

      // Reciever address of newly minted tokens.
      const recvrAddr = txData.vout[1].scriptPubKey.addresses[0]

      // Get address from the database, or create a new address object if it
      // doesn't exist in the database.
      let addr
      try {
        // Address exists in the database
        addr = await this.addrDb.get(recvrAddr)
      } catch (err) {
        // New address.
        addr = this.util.getNewAddrObj()
      }

      // Calculate the effective quantity
      const decimals = txData.tokenDecimals
      let effectiveQty = new BigNumber(slpData.qty).dividedBy(10 ** decimals)
      effectiveQty = effectiveQty.toString()

      // Get the BCH in the output for this utxo.
      const output = txData.vout[1]
      const value = output.value

      // Create a token UTXO.
      const utxo = {
        txid: txData.txid,
        vout: 1,
        type: 'token',
        qty: slpData.qty.toString(),
        tokenId: slpData.tokenId,
        tokenType: slpData.tokenType,
        address: recvrAddr,
        effectiveQty,
        decimals,
        value,
        tokenTicker: txData.tokenTicker,
        tokenName: txData.tokenName
      }
      console.log(`mint.js/addTokensFromOutput() mint utxo: ${JSON.stringify(utxo, null, 2)}`)

      addr.utxos.push(utxo)
      // this.util.addWithoutDuplicate(utxo, addr.utxos)

      // Add the txid to the transaction history.
      const txObj = {
        txid: txData.txid,
        height: blockHeight
      }
      this.util.addTxWithoutDuplicate(txObj, addr.txs)

      // console.log(`addr: ${JSON.stringify(addr, null, 2)}`)

      // Update balances
      this.updateBalanceFromMint(addr, slpData)

      // Save address to the database.
      await this.addrDb.put(recvrAddr, addr)

      // Add the utxo to the utxo database
      await this.utxoDb.put(`${utxo.txid}:${utxo.vout}`, utxo)

      return true
    } catch (err) {
      console.error('Error in addTokensFromOutput()')
      throw err
    }
  }
}

// module.exports = Mint
export default Mint

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/slp-indexer/tx-maps/combine-maps.js`:

```js
/*
  This stand-alone app is used to compare two transaction maps, and combine
  them.

  Run this command by increasing the memory allocation for node.js:
  node --max_old_space_size=28000 combine-maps.js
*/

const map1 = require('./tx-map.json')
const map2 = require('./tx-map-new.json')

const fs = require('fs')

const combinedMap = []

async function combineMaps () {
  try {
    // console.log(`map1: ${JSON.stringify(map1, null, 2)}`)

    // Get block heights from each map.
    const map1Heights = map1.map(x => x.height)
    const map2Heights = map2.map(x => x.height)
    // console.log(`map1Heights: ${JSON.stringify(map1Heights, null, 2)}`)

    // Combine both arrays.
    let allHeights = map1Heights.concat(map2Heights)

    // Remove duplicates. https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
    allHeights = [...new Set(allHeights)]
    // console.log(`allHeights: ${JSON.stringify(allHeights, null, 2)}`)
    // console.log(`map1Heights: ${map1Heights.length}, map2Heights: ${map2Heights.length}, allHeights: ${allHeights.length}`)

    // Loop through all block heights.
    for (let i = 0; i < allHeights.length; i++) {
    // for (let i = 0; i < 10; i++) {
      const thisHeight = allHeights[i]
      // console.log('thisHeight: ', thisHeight)

      // Get txs for this block height.
      const map1Txs = map1.filter(x => x.height === thisHeight)
      const map2Txs = map2.filter(x => x.height === thisHeight)
      // console.log(`map1Txs: ${JSON.stringify(map1Txs, null, 2)}`)
      // console.log(`map2Txs: ${JSON.stringify(map2Txs, null, 2)}`)

      // If map1 has no txs for this height, just use map2.
      if (!map1Txs.length) {
        const thisObj = {
          height: thisHeight,
          txs: map2Txs[0].txs
        }
        combinedMap.push(thisObj)
        continue
      }

      // If map2 has no txs for this hight, just use map1.
      if (!map2Txs.length) {
        const thisObj = {
          height: thisHeight,
          txs: map1Txs[0].txs
        }
        combinedMap.push(thisObj)
        continue
      }

      // Combine transactions from both maps.
      let allTxs = map1Txs[0].txs.concat(map2Txs[0].txs)
      // console.log(`allTxs: ${JSON.stringify(allTxs, null, 2)}`)

      // Remove duplicates
      allTxs = [...new Set(allTxs)]
      // console.log(`allTxs: ${JSON.stringify(allTxs, null, 2)}`)

      const thisObj = {
        height: thisHeight,
        txs: allTxs
      }
      combinedMap.push(thisObj)
    }

    // console.log(`combinedMap: ${JSON.stringify(combinedMap, null, 2)}`)
    console.log(`map1Heights: ${map1Heights.length}, map2Heights: ${map2Heights.length}, combinedMap: ${combinedMap.length}`)

    fs.writeFileSync('./out-combined-map.json', JSON.stringify(combinedMap, null, 2))
  } catch (err) {
    console.error(err)
  }
}
combineMaps()

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/slp-indexer/tx-maps/get-tx-map.js`:

```js
/*
  This app is used to download the tx-map from the Filecoin blockchain.
*/

const https = require('https')
const fs = require('fs')
const shell = require('shelljs')

const url =
  'https://bafybeigmljzmjbknx7bb5vwcmm5oowxuteawpvzgggqzojqatw6jibqita.ipfs.dweb.link/slp-tx-map.zip'

async function getTxMap () {
  try {
    const download = function (url, dest, cb) {
      return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest)
        https
          .get(url, function (response) {
            response.pipe(file)
            file.on('finish', function () {
              file.close(cb) // close() is async, call cb after close completes.
              return resolve(true)
            })
          })
          .on('error', function (err) {
            // Handle errors
            fs.unlink(dest) // Delete the file async. (But we don't check the result)
            // if (cb) cb(err.message)
            return reject(err)
          })
      })
    }

    console.log(
      'Downloading tx-map. It\'s a big file (over 100MB), it can take a while...'
    )

    // const dest = 'tx-map.json'
    const dest = 'slp-tx-map.zip'
    await download(url, dest, function () {
      console.log('done')
    })

    // Unzip the tx map.
    shell.exec(`unzip ${dest}`)
  } catch (err) {
    console.error('Error in getTxMap(): ', err)
  }
}
getTxMap()

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/slp-indexer/lib/rpc.js`:

```js
/*
  A class library for interacting with the Full Node over its JSON RPC.
*/

// Public npm libraries
// const axios = require('axios')
import axios from 'axios'

// Local libraries
// const { wlogger } = require('../../wlogger')
// const config = require('../../../../config')
import wlogger from '../../wlogger.js'
import config from '../../../../config/index.js'

// Global pointer to instance of this class
let _this

class RPC {
  constructor () {
    // Encapsulate dependencies
    this.axios = axios
    this.wlogger = wlogger
    this.config = config

    _this = this

    // Bind 'this' object to subfunctions
    this.getBlockCount = this.getBlockCount.bind(this)
    this.getBlockHeader = this.getBlockHeader.bind(this)
  }

  // Axios options used when calling axios.post() to talk with a full node.
  getAxiosOptions () {
    return {
      method: 'post',
      baseURL: `http://${this.config.rpcIp}:${this.config.rpcPort}/`,
      timeout: 15000,
      auth: {
        username: this.config.rpcUser,
        password: this.config.rpcPass
      },
      data: {
        jsonrpc: '1.0'
      }
    }
  }

  // Get the current block height of the BCH blockchain.
  async getBlockCount () {
    try {
      // Axios options
      const options = this.getAxiosOptions()
      options.data.id = 'getblockcount'
      options.data.method = 'getblockcount'
      options.data.params = []

      const response = await this.axios.request(options)

      return response.data.result
    } catch (err) {
      // Write out error to error log.
      this.wlogger.error('Error in rpc.js/getBlockCount().', err)

      throw err
    }
  }

  // Given a block hash, return the block header. This includes the block height.
  async getBlockHeader (hash, verbose = true) {
    try {
      if (!hash) throw new Error('Block hash must be provided')

      const options = this.getAxiosOptions()
      options.data.id = 'getblockheader'
      options.data.method = 'getblockheader'
      options.data.params = [hash, verbose]

      const response = await this.axios.request(options)

      return response.data.result
    } catch (err) {
      // Write out error to error log.
      this.wlogger.error('Error in rpc.js/getBlockHeader().', err)

      throw err
    }
  }

  // Get the contents of a block, given its block hash.
  async getBlock (hash, verbose = true) {
    try {
      if (!hash) throw new Error('Block hash must be provided')

      // Axios options
      const options = this.getAxiosOptions()

      options.data.id = 'getblock'
      options.data.method = 'getblock'
      options.data.params = [hash, verbose]

      const response = await this.axios.request(options)

      return response.data.result
    } catch (err) {
      // Write out error to error log.
      this.wlogger.error('Error in rpc.js/getBlock() ', err)

      throw err
    }
  }

  // Given a block height, return the block hash matching that block height.
  async getBlockHash (height) {
    try {
      if (!height) throw new Error('Block height must be provided')

      // Axios options
      const options = this.getAxiosOptions()

      options.data.id = 'getblockhash'
      options.data.method = 'getblockhash'
      options.data.params = [parseInt(height)]

      const response = await this.axios.request(options)

      return response.data.result
    } catch (err) {
      // Write out error to error log.
      this.wlogger.error('Error in rpc.js/getBlockHash() ', err)

      throw err
    }
  }

  // Get details on a transaction, given a TXID.
  async getRawTransaction (txid, verbose = true) {
    try {
      if (!txid) throw new Error('txid must be provided')

      const options = _this.getAxiosOptions()

      options.data.id = 'getrawtransaction'
      options.data.method = 'getrawtransaction'
      options.data.params = [txid, verbose]

      const response = await _this.axios.request(options)

      return response.data.result
    } catch (err) {
      // console.log('error txid: ', txid)

      // Don't log the error for this specific response.
      if (err.message.includes('txid must be provided')) throw err

      // Write out error to error log.
      _this.wlogger.error('Error in rpc.js/getRawTransaction() ', err)

      throw err
    }
  }
}

// module.exports = RPC
export default RPC

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/slp-indexer/lib/cache.js`:

```js
/*
  This class is used to generate a simple key-value (in-memory) cache of TX data.
  The 'key' is the txid. The 'value' is the tx data.
*/

// Local libraries
// const Transaction = require('./transaction'
import Transaction from './transaction.js'

class Cache {
  constructor (localConfig = {}) {
    this.txDb = localConfig.txDb
    if (!this.txDb) {
      throw new Error(
        'Must include txDb when instantiationg Transaction library'
      )
    }

    // Encapsulate dependencies
    this.transaction = new Transaction(localConfig)

    this.cache = {}
    this.cacheCnt = 0
  }

  // Save a new entry into the cache.
  put (key, value) {
    if (typeof key !== 'string') throw new Error('key must be a string')

    this.cache[key] = value
  }

  // Get the tx data from the full node if it's not already in the cache.
  async get (key) {
    // Try to retrieve it from the cache.
    let txData = this.cache[key]

    // If the data existed in the cache, this function is done.
    if (txData) return txData

    // Try to get txData from the database.
    try {
      // console.log(`key: ${key}`)
      txData = await this.txDb.get(key)
      // console.log('~~>Result coming from database')

      return txData
    } catch (err) {
      /* exit quietly */
    }

    // Get TX Data from full node if it's not in the cache.
    txData = await this.transaction.get(key)
    // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)
    // console.log('~~>Result coming from full node')

    // Save the data to the *local* cache.
    this.put(key, txData)

    // Dev note: Do not store the TX data in the TX Level DB at this point. A
    // determination about its SLP validity has not yet been made. That data
    // is assumed to be in any entry coming out of the LevelDB.

    this.cacheCnt++
    if (this.cacheCnt % 100 === 0) {
      console.log(`tx cache has ${this.cacheCnt} cached txs`)
    }

    // Flush the cache once it gets too big, to same on memory.
    if (this.cacheCnt > 1000000) {
      this.cache = {}
      this.cacheCnt = 0
    }

    return txData
  }

  // Delete an entry from the cache
  delete (key) {
    delete this.cache[key]
  }
}

// module.exports = Cache
export default Cache

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/slp-indexer/lib/start-stop.js`:

```js
/*
  This library controls the biz logic around starting and stopping the app.
  It handles graceful shutdown, detecting all the different SIG signals for
  shutting down.
*/

// Public npm libraries
// const readline = require('readline')
import readline from 'readline'

class StartStop {
  constructor () {
    // Encapsulate dependencies
    this.process = process

    this.stopIndexing = false

    // Bind 'this' object to all subfunctions.
    this.initStartStop = this.initStartStop.bind(this)
    this.stopStatus = this.stopStatus.bind(this)
    this.qDetected = this.qDetected.bind(this)
  }

  // Returns the value of the stopIndexing state variable.
  // The main app polls this function to determine if it should shut down.
  stopStatus () {
    return this.stopIndexing
  }

  initStartStop () {
    // Detect 'q' key to stop indexing.
    console.log("Press the 'q' key to stop indexing.")

    readline.emitKeypressEvents(process.stdin)

    if (this.process.stdin.isTTY) {
      this.process.stdin.setRawMode(true)
    }

    this.process.stdin.on('keypress', this.qDetected)
    // this.process.stdin.on('keypress', (str, key) => {
    //   if (key.name === 'q') {
    //     console.log(
    //       'q key detected. Will stop indexing after processing current block.'
    //     )
    //     this.stopIndexing = true
    //   }

    //   // Exit immediately if Ctrl+C is pressed.
    //   if (key.ctrl && key.name === 'c') {
    //     this.process.exit(0)
    //   }
    // })

    // Return true to signal the function exited successfully.
    //   return true
    // }

    return true
  }

  // This is a callback function that is called by the keypress event. It checks
  // to see if the 'q' key has been pressed.
  qDetected (str, key) {
    if (key.name === 'q') {
      console.log(
        'q key detected. Will stop indexing after processing current block.'
      )
      this.stopIndexing = true
    }

    // Exit immediately if Ctrl+C is pressed.
    if (key.ctrl && key.name === 'c') {
      this.process.exit(0)
    }

    return true
  }
}

// module.exports = StartStop
export default StartStop

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/slp-indexer/lib/blacklist.js`:

```js
/*
  This library controls blacklists.
*/

// local libraries
// const config = require('../../../../config')
import config from '../../../../config/index.js'

class Blacklist {
  constructor () {
    // Encapsulate dependencies
    this.config = config

    this.blacklist = this.config.blacklist
  }

  // This function expects a token ID as input. It compares that token ID
  // against the list of token IDs in the blacklist. It returns true if there
  // is a match. Otherwise it returns false.
  checkBlacklist (tokenId) {
    try {
      // Default value
      let result = false

      for (let i = 0; i < this.blacklist.length; i++) {
        const thisToken = this.blacklist[i]

        if (tokenId === thisToken) {
          result = true
          break
        }
      }

      return result
    } catch (err) {
      console.error('Error in checkBlacklist()')
      throw err
    }
  }
}

// module.exports = Blacklist
export default Blacklist

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/slp-indexer/lib/ptxdb.js`:

```js
/*
  This library contains utility functions for cleaning up the processed tx db.
  'processed' transactions are txs that have already been processed. This lets
  the indexer safely transition between phase 1 (bulk indexing) and phase 2
  (ZMQ real-time indexing), and maintain a consistent state.
*/

class ManagePTXDB {
  constructor (localConfig = {}) {
    this.pTxDb = localConfig.pTxDb
    if (!this.pTxDb) {
      throw new Error(
        'Must pass instance of pTxDb when instantiating ManagePTXDB lib'
      )
    }

    // State
    this.keys = []
    this.cleanCnt = 0

    // Add 'this' object to all subfunctions
    this.getAllTxs = this.getAllTxs.bind(this)
    this.cleanPTXDB = this.cleanPTXDB.bind(this)
    this.readFromStream = this.readFromStream.bind(this)
    this.endStream = this.endStream.bind(this)
  }

  // Return a promise, which resolves to true when all txs have been collected
  // from the database and stored in this.keys array.
  getAllTxs (isTest = false) {
    return new Promise((resolve) => {
      const stream = this.pTxDb.createReadStream()

      stream.on('data', this.readFromStream)

      stream.on('end', this.endStream(resolve))

      if (isTest) return resolve(true)
    })
  }

  readFromStream (data) {
    this.keys.push(data.key)
  }

  endStream (resolve) {
    return resolve(true)
  }

  // Remove entries in the DB that are old and not needed.
  async cleanPTXDB (blockHeight) {
    try {
      // Get all TXs in the database.
      await this.getAllTxs()

      const cutoff = blockHeight - 10

      // Loop through each TX in the database.
      for (let i = 0; i < this.keys.length; i++) {
        const thisKey = this.keys[i]

        let value
        try {
          value = await this.pTxDb.get(thisKey)
        } catch (err) {
          // console.log(`Warning: Could not find ${thisKey} in pTxDb`)

          // Skip if value can't be found.
          continue
        }

        // If the value is older than the cutoff, delete the db entry.
        if (value <= cutoff) {
          try {
            await this.pTxDb.del(thisKey)
            this.cleanCnt++
          } catch (err) {
            console.log(`Could not delete ${thisKey} from the pTxDB`)
          }
        }
      }

      console.log(`Cleaned ${this.cleanCnt} entries from the pTxDb.`)
      this.cleanCnt = 0
      this.keys = []

      return true
    } catch (err) {
      console.error('Error in cleanPTXDB()')
      throw err
    }
  }
}

export default ManagePTXDB

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/slp-indexer/lib/query.js`:

```js
/*
  A library for querying the LevelDB entries.
*/

class Query {
  constructor (localConfig = {}) {
    const { addrDb, tokenDb, txDb, statusDb, pTxDb } = localConfig
    this.addrDb = addrDb
    this.tokenDb = tokenDb
    this.txDb = txDb
    this.statusDb = statusDb
    this.pTxDb = pTxDb

    if (!this.addrDb) throw new Error('addrDb missing when instantiating Query library')
    if (!this.tokenDb) throw new Error('tokenDb missing when instantiating Query library')
    if (!this.txDb) throw new Error('txDb missing when instantiating Query library')
    if (!this.statusDb) throw new Error('statusDb missing when instantiating Query library')
    if (!this.pTxDb) throw new Error('pTxDb missing when instantiating Query library')
  }

  // Query the state of an address from the database.
  async getAddress (addr) {
    try {
      if (!addr) throw new Error('Address required when calling getAddress()')

      const result = await this.addrDb.get(addr)

      return result
    } catch (err) {
      console.log('Error in getAddress()')
      throw err
    }
  }

  async getTx (txid) {
    try {
      if (!txid) throw new Error('txid required when calling getTx()')

      const result = await this.txDb.get(txid)

      return result
    } catch (err) {
      console.log('Error in getTx()')
      throw err
    }
  }

  async getToken (tokenId) {
    try {
      if (!tokenId) throw new Error('tokenId required when calling getToken()')

      const result = await this.tokenDb.get(tokenId)

      return result
    } catch (err) {
      console.log('Error in getToken()')
      throw err
    }
  }
}

// module.exports = Query
export default Query

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/slp-indexer/lib/filter-block.js`:

```js
/*
  This library is used to filter and sort the transactions within a block,
  before passing them on the send, genesis, and mint libraries for indexing.

  Strategy:
  - Filter out all non-SLP transactions using decodeOpReturn()
  - Use checkForParent() to sort the transactions by their DAG. This sorts
    chained transactions within the same block in the order which the UTXOs
    were spent.
*/

// Public npm libraries
import PQueue from 'p-queue'
import pRetry from 'p-retry'
import BigNumber from 'bignumber.js'

// Local Libraries
import Utils from './utils.js'
import Blacklist from './blacklist.js'

class FilterBlock {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.cache = localConfig.cache
    if (!this.cache) {
      throw new Error(
        'Must include instance of tx cache when instantiating filter-block.js'
      )
    }
    this.transaction = localConfig.transaction
    if (!this.transaction) {
      throw new Error(
        'Must include instance of transaction lib when instantiating filter-block.js'
      )
    }
    this.addrDb = localConfig.addrDb
    if (!this.addrDb) {
      throw new Error(
        'Must pass address DB instance when instantiating filter-block.js'
      )
    }
    this.tokenDb = localConfig.tokenDb
    if (!this.tokenDb) {
      throw new Error(
        'Must pass token DB instance when instantiating filter-block.js'
      )
    }
    this.utxoDb = localConfig.utxoDb
    if (!this.utxoDb) {
      throw new Error(
        'Must pass utxo DB instance when instantiating filter-block.js'
      )
    }
    this.txDb = localConfig.txDb
    if (!this.txDb) {
      throw new Error(
        'Must pass transaction DB instance when instantiating filter-block.js'
      )
    }

    // Encapsulate dependencies
    this.pQueue = new PQueue({ concurrency: 20 })
    this.pRetry = pRetry
    this.utils = new Utils()
    this.blacklist = new Blacklist()

    // Number of retry attempts
    this.attempts = 5

    // this.txCache = {} // Used to locally cache transaction data.
  }

  // Wrap the p-retry library.
  // This function returns a promise that will resolve to the output of the
  // function 'funcHandle'.
  async retryWrapper (funcHandle, inputObj) {
    try {
      // console.log('retryWrapper inputObj: ', inputObj)

      if (!funcHandle) {
        throw new Error('function handler is required')
      }
      if (!inputObj) {
        throw new Error('input object is required')
      }
      // console.log('Entering retryWrapper()')

      // Add artificial delay to prevent 429 errors.
      // await this.sleep(this.retryPeriod)

      return this.pRetry(
        async () => {
          return await funcHandle(inputObj)
        },
        {
          onFailedAttempt: (error) => {
            console.log(
              `Attempt ${error.attemptNumber} failed. There are ${error.retriesLeft} tries left. `
            )
          },
          retries: this.attempts // Retry 5 times
        }
      )
    } catch (err) {
      console.error('Error in retryWrapper()')
      throw err
    }
  }

  // Filter out raw block transactions and return an array of txs that are
  // (unvalidated) SLP transactions.
  // An array of TXIDs are expected as input. An array of TXIDs are output.
  async filterSlpTxs (txids) {
    try {
      const slpTxs = []
      const nonSlpTxs = []

      // Add Tx to slpTxs array if it passes the OP_RETURN check.
      // This function is used below with the queue.
      const processTx = async (txid) => {
        // Is the TX an SLP TX?
        let isSlp = await this.transaction.getTokenInfo(txid)
        // console.log(`isSlp: ${JSON.stringify(isSlp, null, 2)}`)

        // Force TX to be non-token, if it *is* a token in the blacklist.
        if (isSlp) {
          const isInBlacklist = this.blacklist.checkBlacklist(isSlp.tokenId)

          if (isInBlacklist) isSlp = false
        }

        if (isSlp) {
          slpTxs.push(txid)
        } else {
          // Non-token TX
          nonSlpTxs.push(txid)

          // Check if any input UTXOs are in the database. If so, delete them,
          // since they are officially burned.
          await this.deleteBurnedUtxos(txid)
        }
      }

      const promiseArray = []

      // Filter out all the non-SLP transactions.
      for (let i = 0; i < txids.length; i++) {
        const txid = txids[i]
        // console.log('txid: ', txid)

        // Create a promise that will automatically retry.
        const p1 = this.retryWrapper(processTx, txid)

        // Add the promise to the queue
        const thisPromise = this.pQueue.add(() => p1)

        // Add the queued promise to the array.
        promiseArray.push(thisPromise)
        // promiseArray.push(this.pQueue.add(() => this.transaction.getTokenInfo(txid)))
      }

      // TODO: Implement q-retry for when the full node throws an error.

      // Wait for all promises in the array to resolve.
      await Promise.all(promiseArray)

      // Wait for all the transactions in the block to be processed.
      // This should be redundent.
      await this.pQueue.onEmpty()

      return { slpTxs, nonSlpTxs }
    } catch (err) {
      console.error('Error in filterSlpTxs()')
      throw err
    }
  }

  // Lookup the address associated with a utxo
  async getAddressFromTxid (txidIn, vout) {
    let utxo = {}

    // Try to get the utxo from the database.
    try {
      utxo = await this.utxoDb.get(`${txidIn}:${vout}`)
    } catch (err) {
      // Address (and thus input UTXO) is not in the database.
      return false
    }

    return utxo.address
  }

  // Check the input UTXOs for a TX that fails the OP_RETURN test. If any input
  // UTXOs exist in the database, they should be deleted as they are burned.
  async deleteBurnedUtxos (txidIn) {
    try {
      // Get raw tx data from the full node.
      let txDetails = await this.transaction.getTxWithRetry(txidIn)

      // const txDetails = await this.cache.get(txidIn)
      // console.log(`txDetails: ${JSON.stringify(txDetails, null, 2)}`)

      const vins = txDetails.vin
      // // console.log(`vins: ${JSON.stringify(vins, null, 2)}`)

      // let totalBurned = new BigNumber(0)
      let tokenId

      // Loop through each input to the TX
      for (let i = 0; i < vins.length; i++) {
        const thisVin = vins[i]

        const txid = thisVin.txid
        const vout = thisVin.vout
        let addrData = {}

        // Use utxoDb to lookup the address associated with the UTXO.
        const addr = await this.getAddressFromTxid(txid, vout)
        if (!addr) continue

        // Try to get the address from the database.
        try {
          addrData = await this.addrDb.get(addr)
        } catch (err) {
          // Address (and thus input UTXO) is not in the database, so skip this
          // input.
          continue
        }
        // console.log(`addrData for ${addr}: ${JSON.stringify(addrData, null, 2)}`)

        console.log(`Uncontrolled burn detected in TXID ${txidIn}, involving ${addr}`)

        // Get hydrated TX details.
        txDetails = await this.cache.get(txidIn)
        // console.log(`txDetails: ${JSON.stringify(txDetails, null, 2)}`)
        // console.log('tx details should have been saved to the database.')

        // Loop through each UTXO associated with this address.
        const utxos = addrData.utxos
        for (let i = 0; i < utxos.length; i++) {
          const thisUtxo = utxos[i]

          // If the address contains the burned UTXO.
          if (thisUtxo.txid === txid && thisUtxo.vout === vout) {
            console.log(`filter-block.js/deleteBurnedUtxos() Utxo found to remove: ${JSON.stringify(thisUtxo, null, 2)}`)

            // Remove the UTXO from the address.
            addrData.utxos = this.utils.removeUtxoFromArray(thisUtxo, addrData.utxos)

            // Remove the balance from the address
            addrData.balances = this.utils.subtractUtxoBalance(thisUtxo, addrData.balances, thisUtxo.tokenId)

            // Add the TXID to the transaction history
            const txObj = {
              txid: txidIn,
              height: txDetails.blockheight
            }
            this.utils.addTxWithoutDuplicate(txObj, addrData.txs)
            // addrData.txs.push({
            //   txid: txidIn,
            //   height: txDetails.blockheight
            // })

            // Save the updated address data in the database.
            // console.log(`Updated addrData: ${JSON.stringify(addrData, null, 2)}`)
            await this.addrDb.put(addr, addrData)

            // Delete the utxo from the utxo database
            await this.utxoDb.del(`${thisUtxo.txid}:${thisUtxo.vout}`)

            // Add the amount of burned tokens to the token stats.
            tokenId = thisUtxo.tokenId
            const tokenData = await this.tokenDb.get(tokenId)
            const startBurn = new BigNumber(tokenData.totalBurned)
            // console.log(`starting tokenData: ${JSON.stringify(tokenData, null, 2)}`)
            const newTokenData = this.utils.subtractBurnedTokens(thisUtxo, tokenData)
            // console.log(`newTokenData: ${JSON.stringify(newTokenData, null, 2)}`)

            // Calculate amount of tokens burned by this UTXO.
            const endBurn = new BigNumber(newTokenData.totalBurned)
            const diffBurn = endBurn.minus(startBurn)
            console.log(`totalBurned: ${diffBurn.toString()}`)

            // Update transaction info in token stats.
            if (diffBurn.isGreaterThan(0)) {
              // const tokenData = await this.tokenDb.get(tokenId)
              const txObj = {
                txid: txidIn,
                height: txDetails.blockheight,
                type: 'BURN-UNCONTROLLED',
                qty: '0',
                burned: diffBurn.toString()
              }
              // tokenData.txs.push(txInfo)
              this.utils.addTxWithoutDuplicate(txObj, newTokenData.txs)
              // await this.tokenDb.put(tokenId, tokenData)

              // Mark TX as invalid, in the transaction database.
              console.log(`Saving ${txidIn} to txDb`)
              txDetails.isValidSlp = false
              await this.txDb.put(txidIn, txDetails)
            }

            // console.log(`final tokenData: ${JSON.stringify(newTokenData, null, 2)}`)

            // Update the token stats in the database.
            await this.tokenDb.put(tokenId, newTokenData)
          }
        }
      }

      // Signal that this function completed successfully.
      return true
    } catch (err) {
      // console.log(`deleteBurnedUtxos error txid: ${txidIn}`)
      // console.error('Error in deleteBurnedUtxos(): ', err)
      // throw err

      // Ignore any errors.
      // Return false to signal an error.
      return false
    }
  }

  // checkForParent(txid, blockheight) expects a transaction and
  // blockhight value as input.
  //
  // This function will return an object with two properties:
  // - hasParent: Boolean, true or false
  // - dag: []
  //
  // The `dag` property will contain a list of TXIDs of parent TXs in the same
  // block as the given txid. It will be empty if there are no parents.
  //
  // This function will recursively call itself, to traverse the DAG and find
  // all the parent UTXOs for that transaction. It will then
  // return an array of TXs, sorted with the oldest parent first, and the given
  // input tx as the last element.
  async checkForParent2 (txid, blockheight, chainedTxids = []) {
    try {
      // console.log('txid: ', txid)
      // console.log(`chainedTxids: ${JSON.stringify(chainedTxids, null, 2)}`)

      // Init the output object
      const outObj = {
        hasParent: false,
        dag: []
      }

      // Get the transaction data for the current txid, from the cache.
      const txData = await this.cache.get(txid)
      // console.log('txData: ', txData)

      // If the txid does not exist in the chainedTxids array, then add it.
      const isAlreadyAdded = chainedTxids.filter((x) => x === txid)
      if (!isAlreadyAdded.length) {
        // Add it to the beginning of the array.
        chainedTxids.unshift(txData.txid)
      } else {
        // TXID exists in the chainedTxids array, it's already been analyzed, so
        // skip it.
        return
      }

      // Default value.
      let chainedParentsDetected = false

      // Loop through each input that represents tokens.
      for (let i = 0; i < txData.vin.length; i++) {
        const thisVin = txData.vin[i]
        // console.log(`thisVin: ${JSON.stringify(thisVin, null, 2)}`)

        // If the input is not colored as a token, or does not represent a
        // minting baton, then skip it.
        if (!thisVin.tokenQty && !thisVin.isMintBaton) {
          // console.log(`thisVin: ${JSON.stringify(thisVin, null, 2)}`)
          continue
        }

        // Get the parent transaction.
        const parentTx = await this.cache.get(thisVin.txid)
        // console.log(`parentTx.txid: ${JSON.stringify(parentTx.txid, null, 2)}`)
        // console.log(`parentTx.blockheight: ${JSON.stringify(parentTx.blockheight, null, 2)}`)

        // If block height of parent tx is same as the current tx, recurively
        // crawl the DAG, starting with the parent.
        if (blockheight === parentTx.blockheight) {
          chainedParentsDetected = true

          // Recursively call this function to follow the DAG to the first parent
          // in this block.
          await this.checkForParent2(parentTx.txid, blockheight, chainedTxids)
        }
      }

      // return chainedParentsDetected
      outObj.hasParent = chainedParentsDetected
      outObj.dag = chainedTxids

      return outObj
    } catch (err) {
      console.error('Error in checkForParent2(). txid: ', txid)
      throw err
    }
  }

  // This function is similar in nature to checkForParent(). Whereas
  // checkForParent() sorts an array by a 'backward' DAG of txs in the same block,
  // forwardDag() looks for chained TXs in the 'forward' part of the DAG, again,
  // in the same block.
  // This function loops through each of the unsortedAry txids. It checks to
  // see if that TXID is the child of the last element in the chainedAry. If
  // it is, the TXID is added to the end of the chainedAry, and removed from
  // the unsortedAry.
  // Returns an object with these properties:
  // - success: true if forward DAG TX found, otherwise false
  // - chainedArray: array of sorted TXIDs
  // - unsortedArray: array of TXIDs that are not part of the DAG
  async forwardDag (chainedAry, unsortedAry) {
    try {
      let dagFound = false
      let i = 0

      // Loop through each entry in the unsorted array.
      // for (let i = 0; i < unsortedAry.length; i++) {
      do {
        // The current txid being evaluated.
        const thisTxid = unsortedAry[i]
        i++

        // The last link in the DAG of chained TXs.
        const lastLink = chainedAry[chainedAry.length - 1]

        const txData = await this.cache.get(thisTxid)
        // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

        // Loop through each Vin.
        for (let j = 0; j < txData.vin.length; j++) {
          const thisVin = txData.vin[j]
          // console.log(`thisVin: ${JSON.stringify(thisVin, null, 2)}`)

          // Skip if this input is not colored as a token, or not a minting baton.
          if (!thisVin.tokenQty && !thisVin.isMintBaton) continue

          // If the current txid in the unsortedAry points to the last element
          // in the chainedAry array as it's parent.
          if (thisVin.txid === lastLink) {
            dagFound = true

            // Remove the txid from the unsortedAry.
            unsortedAry = unsortedAry.filter((x) => x !== thisTxid)
            // console.log(`Removed ${thisTxid} from unsortedAry: ${JSON.stringify(unsortedAry, null, 2)}`)

            // Add the txid to the end of the chainedAry.
            chainedAry.push(thisTxid)

            // Reset the counter for the unsorted array. This will restart the
            // search within the block.
            i = 0

            break
          }
        }
      } while (i < unsortedAry.length)

      // Signal that function completed successfully.
      // return true
      return {
        success: dagFound,
        chainedArray: chainedAry,
        unsortedArray: unsortedAry
      }
    } catch (err) {
      console.error('Error in forwardDag')
      throw err
    }
  }

  // Primary function for this library. It takes an array of txs from a block as
  // input. It filters all the candidate SLP transactions, then sorts those
  // SLP transactions by their DAG within the block.
  //
  // Returns an object containing two arrays:
  // - sortedTxids: is a list of TXIDs sorted by their DAG withing the block
  // - independentTxids: all other TXIDs that do not have chained txs within
  //     the block.
  //
  // Background: This filtering and sorting needs to be done prior to trying to
  // put new entries into the database. This input validation and pre-processing
  // makes the database processing much faster and less error prone.
  async filterAndSortSlpTxs2 (txids, blockHeight) {
    try {
      console.log(`txids before filtering: ${txids.length}`)

      // Filter out all the non-SLP transactions.
      let { slpTxs, nonSlpTxs } = await this.filterSlpTxs(txids)
      console.log(`txs in slpTxs prior to sorting: ${slpTxs.length}`)
      // console.log('nonSlpTxs: ', nonSlpTxs.length)
      // console.log(`slpTxs prior to sorting: ${JSON.stringify(slpTxs, null, 2)}`)

      // No SLP txids in the array? Exit.
      if (!slpTxs.length) return []

      let sortedTxids = []
      const independentTxids = []
      // let i = 0

      // Loop while there are entries in the slpTxs array. This loop will remove
      // entries from the array until it's empty.
      do {
        // const txid = slpTxs[0]
        const txid = slpTxs.shift()
        // console.log(`start loop slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)
        // console.log(`i: ${i}, txid: ${txid}`)
        // i++

        // Check if TX is part of a backwards DAG
        const { hasParent, dag: backDag } = await this.checkForParent2(
          txid,
          blockHeight
        )
        // console.log(`hasParent: ${hasParent}`)
        // console.log(`backDag: ${JSON.stringify(backDag, null, 2)}`)
        // console.log(`slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)

        let sortedArray = backDag
        let hasChild = false

        // Check if TX is part of a forward DAG
        if (slpTxs.length) {
          const { success, chainedArray } = await this.forwardDag(backDag, slpTxs)
          // console.log('success: ', success)
          // console.log('chainedArray: ', chainedArray)
          // const { success, chainedArray, unsortedArray } =
          //   await this.forwardDag(backDag, slpTxs)

          sortedArray = chainedArray
          hasChild = success

          // console.log(`hasChild: ${hasChild}`)
          // console.log(`chainedArray: ${JSON.stringify(chainedArray, null, 2)}`)
          // console.log(
          //   `unsortedArray: ${JSON.stringify(unsortedArray, null, 2)}`
          // )
        }

        // If TX does not have a backward or forward DAG in the block, then it
        // is truely independent.
        if (!hasParent && !hasChild) {
          independentTxids.push(txid)
          continue
        }

        // If the current TXID has a parent or a child, then the chainedArray
        // will have a list of sorted TXIDs.
        if (hasParent || hasChild) {
          // Add the chained Array to the sortedTxids array.
          sortedTxids = sortedTxids.concat(sortedArray)

          // Remove duplicate entries from the sortedTxid array.
          // https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
          sortedTxids = [...new Set(sortedTxids)]
        }

        // Ensure that any txids in independentTxids or independentTxids are
        // removed from the slpTxs array, before continuing the loop.
        for (let j = 0; j < sortedTxids.length; j++) {
          slpTxs = slpTxs.filter((x) => x !== sortedTxids[j])
          // console.log(`filter ${j} slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)
        }
        // Dev Note: CT 10/04/23 I don't think this code paragraph is ever executed.
        for (let j = 0; j < independentTxids.length; j++) {
          slpTxs = slpTxs.filter((x) => x !== sortedTxids[j])
          // console.log(`filter ${j} slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)
        }

        // console.log(
        //   `slpTxs after removing elems: ${JSON.stringify(slpTxs, null, 2)}`
        // )
      } while (slpTxs.length)

      // The slpTxs array is empty. Each entry has landed in one of the two
      // arrays below.
      // return { sortedTxids, independentTxids }

      // For debugging:
      // console.log(`independentTxids: ${JSON.stringify(independentTxids, null, 2)}`)
      // console.log(`sortedTxids: ${JSON.stringify(sortedTxids, null, 2)}`)
      // console.log(`independentTxids: ${independentTxids.length}`)
      // console.log(`sortedTxids: ${sortedTxids.length}`)
      // console.log(`nonSlpTxs: ${nonSlpTxs.length}`)

      // Combine arrays with the independent txids first.
      let combined = independentTxids.concat(sortedTxids)

      // Ensure there are no duplicate TXIDs.
      // https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
      combined = [...new Set(combined)]

      return { combined, nonSlpTxs }
    } catch (err) {
      console.error('Error in fitlerAndSortSlpTxs2()')
      // console.log(err)
      throw err
    }
  }
}

// module.exports = FilterBlock
export default FilterBlock

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/slp-indexer/lib/zmq.js`:

```js
/*
  A library for working with the ZMQ/websocket connection of a full node. This
  is used to get notifications of new mempool transactions and newly mined
  blocks.
*/

// Public npm libraries
import BitcoinCashZmqDecoder from '@psf/bitcoincash-zmq-decoder'
import * as zmq from 'zeromq'

// Local libraries
import config from '../../../../config/index.js'

class ZMQ {
  constructor () {
    // Encapsulate dependencies
    // this.sock = zmq.socket('sub')
    this.sock = new zmq.Subscriber()
    this.bchZmqDecoder = new BitcoinCashZmqDecoder('mainnet')
    this.config = config

    // State
    this.txQueue = []
    this.blockQueue = []

    // Bind 'this' object to subfunctions
    this.connect = this.connect.bind(this)
    this.monitorZmq = this.monitorZmq.bind(this)
    this.disconnect = this.disconnect.bind(this)
    this.decodeMsg = this.decodeMsg.bind(this)
    this.getTx = this.getTx.bind(this)
    this.getBlock = this.getBlock.bind(this)
  }

  // Connect to the ZMQ port of the full node.
  async connect () {
    try {
      this.sock.connect(`tcp://${this.config.rpcIp}:${this.config.zmqPort}`)
      this.sock.subscribe('raw')

      // Send incoming messages to the decodeMsg() function.
      // this.sock.on('message', this.decodeMsg)

      // Do not await. Fire and forget.
      this.monitorZmq()

      // Return true to signal that the function has completed successfully.
      return true
    } catch (err) {
      console.error('Error in zmq.js/connect()')
      throw err
    }
  }

  async monitorZmq () {
    try {
      for await (const [topic, msg] of this.sock) {
        // console.log(
        //   "received a message related to:",
        //   topic,
        //   "containing message:",
        //   msg,
        // )

        this.decodeMsg(topic, msg)
      }
    } catch (err) {
      console.error('Error in zmq.js/monitorZmq()')
      throw err
    }
  }

  disconnect () {
    // this.sock.disconnect(`tcp://${this.config.rpcIp}:${this.config.zmqPort}`)
    this.sock.close()
  }

  // Decode message coming through ZMQ connection.
  decodeMsg (topic, message) {
    try {
      // console.log('topic: ', topic)

      const decoded = topic.toString('ascii')
      // console.log('decoded topic: ', decoded)

      if (decoded === 'rawtx') {
        // Process new transactions.

        const txd = this.bchZmqDecoder.decodeTransaction(message)
        // console.log(`txd: ${JSON.stringify(txd, null, 2)}`)
        // console.log(`txd.format.txid: ${txd.format.txid}`)
        this.txQueue.push(txd.format.txid)
        // console.log(`txQueue length: ${this.txQueue.length}`)
      } else if (decoded === 'rawblock') {
        // Process new blocks

        const blk = this.bchZmqDecoder.decodeBlock(message)
        console.log(`blk: ${JSON.stringify(blk, null, 2)}`)
        this.blockQueue.push(blk)
      }

      return true
    } catch (err) {
      console.error('Error in decodeMsg: ', err)

      // This is a top-level function. Do not throw an error.
      return false
    }
  }

  // Get the next TX in the queue
  getTx () {
    // console.log(`this.txQueue.length: ${this.txQueue.length}`)
    let nextTx = this.txQueue.shift()
    // console.log(`nextTx: ${JSON.stringify(nextTx, null, 2)}`)

    if (nextTx === undefined) nextTx = false

    return nextTx
  }

  // Get the next block in the queue
  getBlock () {
    // console.log(`this.blockQueue.length: ${this.blockQueue.length}`)
    let nextBlock = this.blockQueue.shift()

    if (nextBlock === undefined) nextBlock = false

    return nextBlock
  }
}

// module.exports = ZMQ
export default ZMQ

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/slp-indexer/lib/level-db.js`:

```js
/*
  Adapter library for LevelDB.
*/

// Public npm libraries.
import level from 'level'

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

class LevelDb {
  constructor (localConfig = {}) {
    // Encapsulate dependencies
    this.level = level
  }

  openDbs () {
    // Instantiate LevelDB databases
    console.log('Opening LevelDB databases...')

    // Address database. Tracks the balances of addresses.
    this.addrDb = this.level(`${__dirname.toString()}/../../../../leveldb/current/addrs`, {
      valueEncoding: 'json',
      cacheSize: 1 * 1024 * 1024 * 1024 // 1 GB
    })

    // Transaction database. Acts as a cache, to reduce the amount of network
    // calls and computation.
    this.txDb = this.level(`${__dirname.toString()}/../../../../leveldb/current/txs`, {
      valueEncoding: 'json',
      cacheSize: 1 * 1024 * 1024 * 1024 // 1 GB
    })

    // Token Stats database.
    this.tokenDb = this.level(
      `${__dirname.toString()}/../../../../leveldb/current/tokens`,
      {
        valueEncoding: 'json'
      }
    )

    // Tracks the sync status of the indexer.
    this.statusDb = this.level(
      `${__dirname.toString()}/../../../../leveldb/current/status`,
      {
        valueEncoding: 'json'
      }
    )

    // Processed transaction database. Used to detect transactions that have
    // already been processed.
    this.pTxDb = this.level(`${__dirname.toString()}/../../../../leveldb/current/ptxs`, {
      valueEncoding: 'json'
    })

    // The UTXO database is used as a sort of reverse-lookup. The key is the TXID
    // plus vout, in this format: 'txid:vout'.
    // and the value is the vout and address. This can be used to lookup what
    // address possesses the UTXO. This makes handling of 'controlled burn' txs
    // much faster.
    this.utxoDb = this.level(`${__dirname.toString()}/../../../../leveldb/current/utxos`, {
      valueEncoding: 'json'
    })

    return {
      addrDb: this.addrDb,
      txDb: this.txDb,
      tokenDb: this.tokenDb,
      statusDb: this.statusDb,
      pTxDb: this.pTxDb,
      utxoDb: this.utxoDb
    }
  }

  // Cleanly close the open databases.
  async closeDbs () {
    await this.addrDb.close()
    await this.txDb.close()
    await this.tokenDb.close()
    await this.statusDb.close()
    await this.pTxDb.close()
    await this.utxoDb.close()

    // Signal that the databases were close successfully.
    return true
  }
}

// module.exports = LevelDb
export default LevelDb

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/slp-indexer/lib/utils.js`:

```js
/*
  A utility library for doing common tasks with respect to indexing.
  This library is primarily used by the genesis.js, mint.js, and send.js files.
*/

// Global npm libraries
import BigNumber from 'bignumber.js'

class IndexerUtils {
  // Generate a new schema/template for an address object. This structure will
  // be populated with data.
  getNewAddrObj () {
    const addr = {
      utxos: [],
      txs: [],
      balances: []
    }

    return addr
  }

  // Will add a new entry to an array, but only if the entry does not already
  // exist in the array.
  // Canonical use case: Adding transactions to an array
  addTxWithoutDuplicate (txObj, array) {
    try {
      // if (array.includes(entry)) return
      //
      // array.push(entry)

      const txid = txObj.txid

      const txidExists = array.filter((x) => x.txid === txid)

      // Exit if the entry already exists.
      if (txidExists.length) return

      // Add the entry if it does not exist.
      array.push(txObj)
    } catch (err) {
      console.error('Error in indexer/util.js/addTxWithoutDuplicate')
      throw err
    }
  }

  // Finds a UTXO element within an array of UTXOs. Returns a new array with
  // the targeted UTXO deleted.
  removeUtxoFromArray (utxoObj, array) {
    try {
      const newArray = array.filter(
        (x) => x.txid !== utxoObj.txid || x.vout !== utxoObj.vout
      )
      // console.log('newArray: ', newArray)

      return newArray
    } catch (err) {
      console.error('Error in removeObjFromArray()')
      throw err
    }
  }

  // Scan the balances array for a token that matches the utxoObj. Subtract
  // the balance of the utxoObj from that balance in the array.
  // Assumes the utxoObj has the following properties:
  // - txid
  // - vout
  // - tokenId
  // - qty (string)
  subtractUtxoBalance (utxoObj, balancesArray, tokenId) {
    try {
      let deleteEntry = false

      // Skip if this is a minting baton. No balance to subtract.
      if (utxoObj.type === 'baton') return balancesArray

      for (let i = 0; i < balancesArray.length; i++) {
        const thisBalance = balancesArray[i]

        if (thisBalance.tokenId === utxoObj.tokenId) {
          // Convert the balances of each to a BigNumber
          const balanceQty = new BigNumber(thisBalance.qty)
          const utxoQty = new BigNumber(utxoObj.qty)

          // Subtract the difference
          const newBalance = balanceQty.minus(utxoQty)

          // If balance is zero, then remove the element from the array.
          if (newBalance.isLessThanOrEqualTo(0)) {
            deleteEntry = {
              index: i
            }

            break
          }

          // Convert the BigNumber to a string.
          thisBalance.qty = newBalance.toString()

          break
        }
      }

      // Delete the entry if quanity is zero
      if (deleteEntry !== false) {
        balancesArray = balancesArray.filter(x => x.tokenId !== tokenId)
      }

      return balancesArray
    } catch (err) {
      console.error('Error in subtractUtxoBalance()')
      throw err
    }
  }

  // Subtract a burned UTXO balance from the token data tracking that quantity.
  subtractBurnedTokens (utxoObj, tokenData) {
    try {
      // console.log(`utxoObj: ${JSON.stringify(utxoObj, null, 2)}`)

      // Skip if this is a minting baton. No quantities to subtract.
      if (utxoObj.type === 'baton') {
        // Mark mint baton as burned.
        tokenData.mintBatonIsActive = false
        return tokenData
      }

      const utxoQty = new BigNumber(utxoObj.qty)
      const tokensInCirculationBN = new BigNumber(tokenData.tokensInCirculationBN)

      let totalBurned
      if (tokenData.totalBurned) {
        totalBurned = new BigNumber(tokenData.totalBurned)
      } else {
        totalBurned = new BigNumber(0)
      }

      const newCirculatingTotal = tokensInCirculationBN.minus(utxoQty)
      const newBurned = totalBurned.plus(utxoQty)

      tokenData.tokensInCirculationBN = newCirculatingTotal
      tokenData.tokensInCirculationStr = newCirculatingTotal.toString()
      tokenData.totalBurned = newBurned.toString()

      return tokenData
    } catch (err) {
      console.error('Error in subtractBurnedTokens()')
      throw err
    }
  }

  sleep (ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}

// module.exports = IndexerUtils
export default IndexerUtils

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/slp-indexer/lib/db-backup.js`:

```js
/*
  A library for handling the backup and restoration of the Level Database.

  The database is backed up prior to processing a block. If the indexer gets
  stuck on a block that it can't process, it will restore the backup before
  exiting. This library controls the backup and restore functionality.
*/

// Global npm librares
// const shell = require('shelljs')
import shell from 'shelljs'

// Local libraries
// const config = require('../../../../config')
import config from '../../../../config/index.js'

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const dbDir = `${__dirname.toString()}/../../../../leveldb`

class DbBackup {
  constructor (localConfig = {}) {
    const { addrDb, tokenDb, txDb, statusDb, pTxDb, utxoDb } = localConfig
    this.addrDb = addrDb
    this.tokenDb = tokenDb
    this.txDb = txDb
    this.statusDb = statusDb
    this.pTxDb = pTxDb
    this.utxoDb = utxoDb
    // TODO: throw error if dbs are not passed in.

    // Encapsulate dependencies
    this.shell = shell
    this.config = config

    // Create the backup directory if it doesn't already exist.
    // this.shell.mkdir(`${dbDir}/backup`)
  }

  // Backup the LevelDB.
  async backupDb () {
    try {
      // Close the databases
      await this.addrDb.close()
      await this.tokenDb.close()
      await this.txDb.close()
      await this.statusDb.close()
      await this.pTxDb.close()
      await this.utxoDb.close()

      // console.log(`dbDir: ${dbDir}`)

      // Delete the old backup
      this.shell.rm('-rf', `${dbDir}/backup`)

      // Create a new backup directory
      this.shell.mkdir(`${dbDir}/backup`)

      // Copy the existing LevelDB files to the backup folder.
      this.shell.cp('-r', `${dbDir}/current/addrs`, `${dbDir}/backup/`)
      this.shell.cp('-r', `${dbDir}/current/status`, `${dbDir}/backup/`)
      this.shell.cp('-r', `${dbDir}/current/tokens`, `${dbDir}/backup/`)
      this.shell.cp('-r', `${dbDir}/current/txs`, `${dbDir}/backup/`)
      this.shell.cp('-r', `${dbDir}/current/ptxs`, `${dbDir}/backup/`)
      this.shell.cp('-r', `${dbDir}/current/utxos`, `${dbDir}/backup/`)

      // Reopen the databases.
      await this.addrDb.open()
      await this.tokenDb.open()
      await this.txDb.open()
      await this.statusDb.open()
      await this.pTxDb.open()
      await this.utxoDb.open()

      return true
    } catch (err) {
      console.error('Error in backupDb()')
      throw err
    }
  }

  async restoreDb () {
    try {
      // Close the databases
      await this.addrDb.close()
      await this.tokenDb.close()
      await this.txDb.close()
      await this.statusDb.close()
      await this.pTxDb.close()
      await this.utxoDb.close()

      // console.log(`dbDir: ${dbDir}`)

      // this.shell.mv(`${dbDir}/backup/addrs`, `${dbDir}/current/`)
      // this.shell.mv(`${dbDir}/backup/status`, `${dbDir}/current/`)
      // this.shell.mv(`${dbDir}/backup/tokens`, `${dbDir}/current/`)
      // this.shell.mv(`${dbDir}/backup/txs`, `${dbDir}/current/`)

      this.shell.rm('-rf', `${dbDir}/current/*`)
      this.shell.cp('-r', `${dbDir}/backup/*`, `${dbDir}/current/`)

      return true
    } catch (err) {
      console.error('Error in restoreDb()')
      throw err
    }
  }

  // Create a zipped copy of the database.
  async zipDb (height, epoch) {
    try {
      // Close the databases
      await this.addrDb.close()
      await this.tokenDb.close()
      await this.txDb.close()
      await this.statusDb.close()
      await this.pTxDb.close()
      await this.utxoDb.close()

      // Create a zip backup of the current database.
      this.shell.exec(
        `zip -r ${dbDir}/zips/slp-indexer-${height}.zip ${dbDir}/current`
      )

      // const deleteBackup = parseInt(process.env.DELETE_BACKUP)
      const backupQty = this.config.backupQty
      console.log('backupQty: ', backupQty)
      console.log('epoch: ', epoch)
      if (backupQty && epoch) {
        // Delete the oldest backup.
        const oldHeight = height - (epoch * backupQty)
        const rmStr = `${dbDir}/zips/slp-indexer-${oldHeight}.zip`
        console.log(`rmStr: ${rmStr}`)
        this.shell.rm(rmStr)
      }

      // Reopen the databases.
      console.log('Reopening database')
      await this.addrDb.open()
      await this.tokenDb.open()
      await this.txDb.open()
      await this.statusDb.open()
      await this.pTxDb.open()
      await this.utxoDb.open()

      return true
    } catch (err) {
      console.error('Error in zipDb')
      throw err
    }
  }

  // Unzip a previous backup to roll the database back.
  // Height must match a zip file.
  async unzipDb (height) {
    try {
      // Close the databases
      await this.addrDb.close()
      await this.tokenDb.close()
      await this.txDb.close()
      await this.statusDb.close()
      await this.pTxDb.close()
      await this.utxoDb.close()

      // Wipe the old database
      this.shell.cd(`${dbDir}/../`)
      this.shell.exec('./wipe-db.sh')

      // Change to the zips directory.
      this.shell.cd(`${dbDir}/zips`)

      // Remove any previous unzip backup.
      this.shell.rm('-rf', 'home')

      // Unzip a previous archive.
      this.shell.exec(`unzip slp-indexer-${height}.zip`)

      // Restore the backup
      this.shell.exec('./restore-auto.sh')

      return true
    } catch (err) {
      console.error('Error in unzipDb: ', err)

      return false
    }
  }
}

// module.exports = DbBackup
export default DbBackup

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/slp-indexer/lib/transaction.js`:

```js
/*
  High-level functions for working with Transactions

  TODO:
  - Change name of txCache to tokenCache
  - Create an actual token cache that stores raw tx data from full node.

*/

// Public npm libraries
import BigNumber from 'bignumber.js'
import slpParser from 'slp-parser'

// Local libraries
import RPC from './rpc.js'
import RetryQueue from './retry-queue.js'

class Transaction {
  constructor (localConfig = {}) {
    // Encapsulate dependencies
    this.rpc = new RPC()
    this.slpParser = slpParser
    this.queue = new RetryQueue()

    // State
    this.tokenCache = {}
    this.tokenCacheCnt = 0
    this.txCache = {}
    this.txCacheCnt = 0

    // Bing 'this' object to all subfunctions
    this.get = this.get.bind(this)
    this.getNftTx = this.getNftTx.bind(this)
    this.getTx01 = this.getTx01.bind(this)
    this.getTokenInfo = this.getTokenInfo.bind(this)
    this.decodeOpReturn = this.decodeOpReturn.bind(this)
    this.getTxData = this.getTxData.bind(this)
    this._getInputAddrs = this._getInputAddrs.bind(this)
    this.getTxWithRetry = this.getTxWithRetry.bind(this)
  }

  /**
   * @api Transaction.get() get()
   * @apiName get
   * @apiGroup Transaction
   * @apiDescription
   * Returns an object of transaction data, including addresses for input UTXOs.
   * If it is a SLP token transaction, the token information for inputs and
   * outputs will also be included.
   *
   * This is an API heavy call. This function will only work with a single txid.
   * It does not yet support an array of TXIDs.
   *
   * This is the same as bchjs.Transaction.get(), except it omits DAG validation of the TXID.
   *
   * @apiExample Example usage:
   * (async () => {
   * try {
   *  let txData = await bchjs.Transaction.get2("0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098");
   *  console.log(txData);
   * } catch(error) {
   * console.error(error)
   * }
   * })()
   */
  async get (txid) {
    try {
      if (typeof txid !== 'string') {
        throw new Error(
          'Input to Transaction.get() must be a string containing a TXID.'
        )
      }

      // Get TX data
      const txDetails = await this.getTxData(txid)
      // console.log(`txDetails: ${JSON.stringify(txDetails, null, 2)}`)

      // Get the block height the transaction was mined in.
      if (!txDetails.blockhash) {
        // Transaction has not been mined yet.

        // Assumption: the TX will make it into the next block.
        const blockHeight = await this.rpc.getBlockCount()
        txDetails.blockheight = blockHeight + 1
      } else {
        // Transaction is in a mined block.

        const blockHeader = await this.rpc.getBlockHeader(txDetails.blockhash)
        txDetails.blockheight = blockHeader.height
        // console.log(`blockHeader: ${JSON.stringify(blockHeader, null, 2)}`)
      }

      // Set default as not an SLP tx
      // TODO: Should this be null instead of false?
      txDetails.isSlpTx = false

      // Get Token Data
      const txTokenData = await this.getTokenInfo(txid)
      // console.log(`txTokenData: ${JSON.stringify(txTokenData, null, 2)}`)

      // If not a token, return the tx data. Processing is complete.
      if (!txTokenData) return txDetails

      // Mark TX as an SLP tx. This does not mean it's valid, it just means
      // the OP_RETURN passes a basic check.
      txDetails.isSlpTx = true

      // Get Genesis data
      // console.log(`txTokenData.tokenId: ${txTokenData.tokenId}`)
      const genesisData = await this.getTokenInfo(txTokenData.tokenId)
      // console.log(`genesisData: ${JSON.stringify(genesisData, null, 2)}`)

      // Add token information to the tx details object.
      txDetails.tokenTxType = txTokenData.txType
      txDetails.tokenId = txTokenData.tokenId
      txDetails.tokenType = txTokenData.tokenType
      txDetails.tokenTicker = genesisData.ticker
      txDetails.tokenName = genesisData.name
      txDetails.tokenDecimals = genesisData.decimals
      txDetails.tokenUri = genesisData.documentUri
      txDetails.tokenDocHash = genesisData.documentHash
      // console.log(`txDetails before processing input and outputs: ${JSON.stringify(txDetails, null, 2)}`)

      let finalTxDetails
      if (txDetails.tokenType === 1 || txDetails.tokenType === 129) {
        finalTxDetails = await this.getTx01(txDetails, txTokenData)
      } else if (txDetails.tokenType === 65) {
        finalTxDetails = await this.getNftTx(txDetails, txTokenData)
      }

      return finalTxDetails
    } catch (err) {
      console.error('Error in transaction.js/get(). txid: ', txid)
      throw err
    }
  }

  // Used for processing NFT (child) tokens.
  // This function hydrates the input and output data of a transaction with
  // SLP-related information.
  // Note: It is not possible to 'mint' NFTs (type 65), only Group (type 128)
  // can be minted.
  async getNftTx (txDetails, txTokenData) {
    console.log(`Processing NFT (child) with txid ${txDetails.txid}`)

    // console.log(`txDetails: ${JSON.stringify(txDetails, null, 2)}`)
    // console.log(`txTokenData: ${JSON.stringify(txTokenData, null, 2)}`)

    // Process TX Outputs
    // Add the token quantity to each output.
    // 'i' starts at 1, because vout[0] is the OP_RETURN
    for (let i = 0; i < txDetails.vout.length; i++) {
      const thisVout = txDetails.vout[i]
      if (txTokenData.txType === 'SEND') {
        // console.log(
        //   `output txTokenData: ${JSON.stringify(txTokenData, null, 2)}`
        // )

        // First output is OP_RETURN, so tokenQty is null.
        if (i === 0) {
          thisVout.tokenQty = null
          thisVout.tokenQtyStr = null
          continue
        }

        // Non SLP outputs.
        if (i > txTokenData.amounts.length) {
          thisVout.tokenQty = null
          thisVout.tokenQtyStr = null
          continue
        }

        const rawQty = txTokenData.amounts[i - 1]

        // Calculate the real quantity using a BigNumber, then convert it to a
        // floating point number.
        let realQty = new BigNumber(rawQty).dividedBy(
          10 ** parseInt(txDetails.tokenDecimals)
        )
        realQty = realQty.toString()
        // realQty = parseFloat(realQty)

        txDetails.vout[i].tokenQtyStr = realQty
        txDetails.vout[i].tokenQty = parseFloat(realQty)

        // console.log(
        //   `thisVout ${i}: ${JSON.stringify(txDetails.vout[i], null, 2)}`
        // )
      } else if (
        txTokenData.txType === 'GENESIS'
      ) {
        // console.log('txTokenData.txType: ', txTokenData.txType)
        // console.log(
        //   `output txTokenData: ${JSON.stringify(txTokenData, null, 2)}`
        // )

        let tokenQty = 0 // Default value

        if (i === 0) {
          // Add the decoded OP_RETURN data to the first vout
          thisVout.opReturnData = txTokenData

          thisVout.tokenQtyStr = '0'
          thisVout.tokenQty = 0

          if (i === txTokenData.mintBatonVout) {
            // Optional dead-ended Mint baton
            thisVout.isMintBaton = true
          }
        } else if (i === 1) {
          // Only vout[1] of a Genesis transaction represents the tokens.
          // Any other outputs in that transaction are normal BCH UTXOs.

          tokenQty = txTokenData.qty
          // console.log(`tokenQty: ${JSON.stringify(tokenQty, null, 2)}`)

          // Calculate the real quantity using a BigNumber, then convert it to a
          // floating point number.
          let realQty = new BigNumber(tokenQty).dividedBy(
            10 ** parseInt(txDetails.tokenDecimals)
          )
          realQty = realQty.toString()
          // realQty = parseFloat(realQty)

          thisVout.tokenQtyStr = realQty
          thisVout.tokenQty = parseFloat(realQty)
          // console.log(`thisVout[${i}]: ${JSON.stringify(thisVout, null, 2)}`)
        } else {
          // Normal BCH output
          thisVout.tokenQtyStr = '0'
          thisVout.tokenQty = 0
        }
      } else {
        throw new Error('Unknown SLP TX type for TX')
      }
    }

    // Process TX inputs
    for (let i = 0; i < txDetails.vin.length; i++) {
      const thisVin = txDetails.vin[i]
      // console.log(`thisVin[${i}]: ${JSON.stringify(thisVin, null, 2)}`)

      // console.log(`thisVin.txid: ${thisVin.txid}`)
      const vinTokenData = await this.getTokenInfo(thisVin.txid)
      // console.log(`vinTokenData ${i}: ${JSON.stringify(vinTokenData, null, 2)}`)

      // Is the input token ID the same? It should be for a SEND.
      const vinTokenIdIsTheSame = vinTokenData.tokenId === txDetails.tokenId
      // console.log('vinTokenIdIsTheSame: ', vinTokenIdIsTheSame)

      // Is the input token ID from a Group token? It should be for a GENESIS
      const vinTokenIsGroup =
        vinTokenData.tokenId !== txDetails.tokenId &&
        vinTokenData.tokenType === 129
      // console.log('vinTokenIsGroup: ', vinTokenIsGroup)

      if (vinTokenIsGroup) {
        // If this is a NFT Genesis TX, then one of the inputs should be a Group token.
        thisVin.tokenQty = parseFloat(vinTokenData.qty)
        thisVin.tokenQtyStr = vinTokenData.qty
        thisVin.tokenId = vinTokenData.tokenId
      } else if (!vinTokenData || !vinTokenIdIsTheSame) {
        // If the input is not a token input, or if the tokenID is not the same,
        // then mark the token output as null.
        thisVin.tokenQty = 0
        thisVin.tokenQtyStr = '0'
        thisVin.tokenId = null
        continue
      }

      if (vinTokenData.txType === 'SEND') {
        // console.log(
        //   `SEND vinTokenData ${i}: ${JSON.stringify(vinTokenData, null, 2)}`
        // )

        const tokenQty = vinTokenData.amounts[thisVin.vout - 1]
        // console.log(`tokenQty: ${JSON.stringify(tokenQty, null, 2)}`)

        // Calculate the real quantity using a BigNumber, then convert it to a
        // floating point number.
        let realQty = new BigNumber(tokenQty).dividedBy(
          10 ** parseInt(txDetails.tokenDecimals)
        )
        realQty = realQty.toString()
        // realQty = parseFloat(realQty)

        thisVin.tokenQtyStr = realQty
        thisVin.tokenQty = parseFloat(realQty)
        thisVin.tokenId = vinTokenData.tokenId

        //
      } else if (vinTokenData.txType === 'MINT') {
        // This case is when the GROUP (129) token used to generate the NFT
        // came from a MINT transaction to create a new GROUP token.
        // Example TX: b219ba0a7e712345abeadd979db1783b19f4643374a6efc6ad61c7913de9528e
        // Using Group Token ID: 112f967519e18083c8e4bd7ba67ebc04d72aaaa941826d38655c53d677e6a5be

        // console.log(
        //   `MINT vinTokenData ${i}: ${JSON.stringify(vinTokenData, null, 2)}`
        // )

        let tokenQty = 0 // Default value

        // Only vout[1] of a Genesis transaction represents the tokens.
        // Any other outputs in that transaction are normal BCH UTXOs.
        if (thisVin.vout === 1) {
          tokenQty = vinTokenData.qty
          // console.log(`tokenQty: ${JSON.stringify(tokenQty, null, 2)}`)

          // Calculate the real quantity using a BigNumber, then convert it to a
          // floating point number.
          let realQty = new BigNumber(tokenQty).dividedBy(
            10 ** parseInt(txDetails.tokenDecimals)
          )
          realQty = realQty.toString()
          // realQty = parseFloat(realQty)

          thisVin.tokenQtyStr = realQty
          thisVin.tokenQty = parseFloat(realQty)
          thisVin.tokenId = vinTokenData.tokenId
        } else if (thisVin.vout === vinTokenData.mintBatonVout) {
          // Optional Mint baton
          thisVin.tokenQtyStr = '0'
          thisVin.tokenQty = 0
          thisVin.tokenId = vinTokenData.tokenId
          thisVin.isMintBaton = true
        } else {
          thisVin.tokenQtyStr = '0'
          thisVin.tokenQty = 0
          thisVin.tokenId = null
        }

        //
      } else if (vinTokenData.txType === 'GENESIS') {
        // console.log(
        //   `GENESIS vinTokenData ${i}: ${JSON.stringify(
        //     vinTokenData,
        //     null,
        //     2
        //   )}`
        // )

        let tokenQty = 0 // Default value

        // Only vout[1] of a Genesis transaction represents the tokens.
        // Any other outputs in that transaction are normal BCH UTXOs.
        if (thisVin.vout === 1) {
          tokenQty = vinTokenData.qty
          // console.log(`tokenQty: ${JSON.stringify(tokenQty, null, 2)}`)

          // Calculate the real quantity using a BigNumber, then convert it to a
          // floating point number.
          let realQty = new BigNumber(tokenQty).dividedBy(
            10 ** parseInt(txDetails.tokenDecimals)
          )
          realQty = realQty.toString()
          // realQty = parseFloat(realQty)

          thisVin.tokenQtyStr = realQty
          thisVin.tokenQty = parseFloat(realQty)
          thisVin.tokenId = vinTokenData.tokenId
        } else {
          // Normal BCH output
          thisVin.tokenQtyStr = '0'
          thisVin.tokenQty = 0
          thisVin.tokenId = null
        }
      } else {
        console.log(
          `Unknown vinTokenData: ${JSON.stringify(vinTokenData, null, 2)}`
        )

        throw new Error('Unknown token type in input')
      }
    }

    // console.log(`hydrated txDetails: ${JSON.stringify(txDetails, null, 2)}`)

    return txDetails
  }

  // Used for processing 'normal' Type 1 tokens, as well as Group NFT tokens.
  // This function hydrates the input and output data of a transaction with
  // SLP-related information.
  async getTx01 (txDetails, txTokenData) {
    // console.log('Entering getTx01()')
    // console.log(`getTx01() txTokenData: ${JSON.stringify(txTokenData, null, 2)}`)
    // console.log(`getTx01() txDetails: ${JSON.stringify(txDetails, null, 2)}`)

    // Process TX Outputs
    // Add the token quantity to each output.
    // 'i' starts at 1, because vout[0] is the OP_RETURN
    for (let i = 0; i < txDetails.vout.length; i++) {
      const thisVout = txDetails.vout[i]
      if (txTokenData.txType === 'SEND') {
        // console.log(
        //   `output txTokenData: ${JSON.stringify(txTokenData, null, 2)}`
        // )

        // First output is OP_RETURN, so tokenQty is null.
        if (i === 0) {
          thisVout.tokenQty = null
          thisVout.tokenQtyStr = null
          continue
        }

        // Non SLP outputs.
        if (i > txTokenData.amounts.length) {
          thisVout.tokenQty = null
          thisVout.tokenQtyStr = null
          continue
        }

        const rawQty = txTokenData.amounts[i - 1]

        // Calculate the real quantity using a BigNumber, then convert it to a
        // floating point number.
        let realQty = new BigNumber(rawQty).dividedBy(
          10 ** parseInt(txDetails.tokenDecimals)
        )
        realQty = realQty.toString()
        // realQty = parseFloat(realQty)

        txDetails.vout[i].tokenQtyStr = realQty
        txDetails.vout[i].tokenQty = parseFloat(realQty)

        // console.log(
        //   `thisVout ${i}: ${JSON.stringify(txDetails.vout[i], null, 2)}`
        // )
      } else if (
        txTokenData.txType === 'GENESIS' ||
        txTokenData.txType === 'MINT'
      ) {
        // console.log(
        //   `output txTokenData: ${JSON.stringify(txTokenData, null, 2)}`
        // )

        let tokenQty = 0 // Default value

        if (i === 0) {
          // Add the decoded OP_RETURN data to the first vout
          thisVout.opReturnData = txTokenData

          thisVout.tokenQtyStr = '0'
          thisVout.tokenQty = 0

          if (i === txTokenData.mintBatonVout) {
            // Optional dead-ended Mint baton
            thisVout.isMintBaton = true
          }
        } else if (i === 1) {
          // Only vout[1] of a Genesis or Mint transaction represents the tokens.
          // Any other outputs in that transaction are normal BCH UTXOs.

          tokenQty = txTokenData.qty
          // console.log(`tokenQty: ${JSON.stringify(tokenQty, null, 2)}`)

          // Calculate the real quantity using a BigNumber, then convert it to a
          // floating point number.
          let realQty = new BigNumber(tokenQty).dividedBy(
            10 ** parseInt(txDetails.tokenDecimals)
          )
          realQty = realQty.toString()
          // realQty = parseFloat(realQty)

          thisVout.tokenQtyStr = realQty
          thisVout.tokenQty = parseFloat(realQty)
          // console.log(`thisVout[${i}]: ${JSON.stringify(thisVout, null, 2)}`)
        } else if (i === txTokenData.mintBatonVout) {
          // Optional Mint baton
          thisVout.tokenQtyStr = '0'
          thisVout.tokenQty = 0
          thisVout.isMintBaton = true
        } else {
          thisVout.tokenQtyStr = '0'
          thisVout.tokenQty = 0
        }
      } else {
        throw new Error('Unknown SLP TX type for TX')
      }
    }

    // Process TX inputs
    for (let i = 0; i < txDetails.vin.length; i++) {
      const thisVin = txDetails.vin[i]
      // console.log(`thisVin[${i}]: ${JSON.stringify(thisVin, null, 2)}`)

      // console.log(`thisVin.txid: ${thisVin.txid}`)
      const vinTokenData = await this.getTokenInfo(thisVin.txid)
      // console.log(
      //         `getTx01() vinTokenData ${i}: ${JSON.stringify(vinTokenData, null, 2)}`
      // )

      // Corner case: Ensure the token ID is the same.
      const vinTokenIdIsTheSame = vinTokenData.tokenId === txDetails.tokenId

      // If the input is not a token input, or if the tokenID is not the same,
      // then mark the token output as null.
      if (!vinTokenData || !vinTokenIdIsTheSame) {
        thisVin.tokenQty = 0
        thisVin.tokenQtyStr = '0'
        thisVin.tokenId = null
        continue
      }

      if (vinTokenData.txType === 'SEND') {
        // console.log(
        //   `SEND vinTokenData ${i}: ${JSON.stringify(vinTokenData, null, 2)}`
        // )

        const tokenQty = vinTokenData.amounts[thisVin.vout - 1]
        // console.log(`tokenQty: ${JSON.stringify(tokenQty, null, 2)}`)

        // Calculate the real quantity using a BigNumber, then convert it to a
        // floating point number.
        let realQty = new BigNumber(tokenQty).dividedBy(
          10 ** parseInt(txDetails.tokenDecimals)
        )
        realQty = realQty.toString()
        // realQty = parseFloat(realQty)

        thisVin.tokenQtyStr = realQty
        thisVin.tokenQty = parseFloat(realQty)
        thisVin.tokenId = vinTokenData.tokenId
      } else if (vinTokenData.txType === 'MINT') {
        // console.log(
        //   `MINT vinTokenData ${i}: ${JSON.stringify(vinTokenData, null, 2)}`
        // )

        let tokenQty = 0 // Default value

        // Only vout[1] of a Genesis transaction represents the tokens.
        // Any other outputs in that transaction are normal BCH UTXOs.
        if (thisVin.vout === 1) {
          tokenQty = vinTokenData.qty
          // console.log(`tokenQty: ${JSON.stringify(tokenQty, null, 2)}`)

          // Calculate the real quantity using a BigNumber, then convert it to a
          // floating point number.
          let realQty = new BigNumber(tokenQty).dividedBy(
            10 ** parseInt(txDetails.tokenDecimals)
          )
          realQty = realQty.toString()
          // realQty = parseFloat(realQty)

          thisVin.tokenQtyStr = realQty
          thisVin.tokenQty = parseFloat(realQty)
          thisVin.tokenId = vinTokenData.tokenId
        } else if (thisVin.vout === vinTokenData.mintBatonVout) {
          // Optional Mint baton
          thisVin.tokenQtyStr = '0'
          thisVin.tokenQty = 0
          thisVin.tokenId = vinTokenData.tokenId
          thisVin.isMintBaton = true
        } else {
          thisVin.tokenQtyStr = '0'
          thisVin.tokenQty = 0
          thisVin.tokenId = null
        }
      } else if (vinTokenData.txType === 'GENESIS') {
        // console.log(
        //   `GENESIS vinTokenData ${i}: ${JSON.stringify(
        //     vinTokenData,
        //     null,
        //     2
        //   )}`
        // )

        let tokenQty = 0 // Default value

        // Only vout[1] of a Genesis transaction represents the tokens.
        // Any other outputs in that transaction are normal BCH UTXOs.
        if (thisVin.vout === 1) {
          tokenQty = vinTokenData.qty
          // console.log(`tokenQty: ${JSON.stringify(tokenQty, null, 2)}`)

          // Calculate the real quantity using a BigNumber, then convert it to a
          // floating point number.
          let realQty = new BigNumber(tokenQty).dividedBy(
            10 ** parseInt(txDetails.tokenDecimals)
          )
          realQty = realQty.toString()
          // realQty = parseFloat(realQty)

          thisVin.tokenQtyStr = realQty
          thisVin.tokenQty = parseFloat(realQty)
          thisVin.tokenId = vinTokenData.tokenId
        } else if (thisVin.vout === vinTokenData.mintBatonVout) {
          // Optional Mint baton
          thisVin.tokenQtyStr = '0'
          thisVin.tokenQty = 0
          thisVin.tokenId = vinTokenData.tokenId
          thisVin.isMintBaton = true
        } else {
          thisVin.tokenQtyStr = '0'
          thisVin.tokenQty = 0
          thisVin.tokenId = null
        }
      } else {
        console.log(
          `Unknown vinTokenData: ${JSON.stringify(vinTokenData, null, 2)}`
        )
        throw new Error('Unknown token type in input')
      }
    }

    return txDetails
  }

  // A wrapper for decodeOpReturn(). Returns false if txid is not an SLP tx.
  // Returns the token data if the txid is an SLP tx.
  async getTokenInfo (txid) {
    try {
      // Get token data, and auto-retry if the full node throws an error
      const tokenData = await this.decodeOpReturn(txid)

      // Corner case: token ID comes back as all zeros
      // Assumption: a normal TXID won't contain this many zeros.
      if (tokenData.tokenId.includes('00000000')) {
        return false
      }

      return tokenData
    } catch (err) {
      // Dev Note: It's impossible to tell the difference between a full node
      // having a network issue vs the corner-case of passing a 'fake' TXID
      // that does not exist. In both instances, the full node will respond
      // with a 500 error code. Auto-retry should fix network errors, so it
      // must be assumed that a 500 error code at this point in the code path
      // is due to the corner case, and returning false (as opposed to throwing
      // an error) is the proper response.
      // Code below intentially commented out.
      // if (err.message.includes('status code 50')) {
      //   throw err
      // }

      // console.log('err: ', err)

      // Otherwise return false
      return false
    }
  }

  /**
   * @api SLP.Utils.decodeOpReturn() decodeOpReturn()
   * @apiName decodeOpReturn
   * @apiGroup SLP Utils
   * @apiDescription
   * Retrieves transactions data from a txid and decodes the SLP OP_RETURN data.
   *
   * Throws an error if given a non-SLP txid.
   *
   * If optional associative array parameter cache is used, will cache and
   * reuse responses for the same input.
   *
   * A third optional input, `usrObj`, is used by bch-api for managing rate limits.
   * It can be safely ignored when writing apps using this call.
   *
   *
   * @apiExample Example usage:
   *
   * (async () => {
   * try {
   *  const txid =
   *   "266844d53e46bbd7dd37134688dffea6e54d944edff27a0add63dd0908839bc1"
   *
   *  const data = await bchjs.SLP.Utils.decodeOpReturn(txid)
   *
   *  console.log(`Decoded OP_RETURN data: ${JSON.stringify(data,null,2)}`)
   * } catch (error) {
   *  console.error(error)
   * }
   * })()
   *
   * // returns
   * {
   *  "tokenType": 1,
   *  "txType": "SEND",
   *  "tokenId": "497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7"
   *  "amounts": [
   *    "100000000",
   *    "99883300000000"
   *  ]
   * }
   *
   */
  // Reimplementation of decodeOpReturn() using slp-parser.
  // Originally copied from bch-js slp-utils.js lib.
  async decodeOpReturn (txid) {
    // Validate the txid input.
    if (!txid || txid === '' || typeof txid !== 'string') {
      throw new Error('txid string must be included.')
    }

    // Return results if they've been cached.
    const cachedVal = this.tokenCache[txid]
    if (cachedVal) return cachedVal

    // const txDetails = await this.rpc.getRawTransaction(txid)
    // Auto-retry if call to full node fails.
    // const txDetails = await this.queue.addToQueue(
    //   this.rpc.getRawTransaction,
    //   txid
    // )
    const txDetails = await this.getTxWithRetry(txid)
    // console.log('txDetails: ', txDetails)

    // SLP spec expects OP_RETURN to be the first output of the transaction.
    const opReturn = txDetails.vout[0].scriptPubKey.hex
    // console.log(`opReturn hex: ${opReturn}`)

    const parsedData = this.slpParser.parseSLP(Buffer.from(opReturn, 'hex'))
    // console.log(`parsedData: ${JSON.stringify(parsedData, null, 2)}`)

    // Convert Buffer data to hex strings or utf8 strings.
    let tokenData = {}
    if (parsedData.transactionType === 'SEND') {
      tokenData = {
        tokenType: parsedData.tokenType,
        txType: parsedData.transactionType,
        tokenId: parsedData.data.tokenId.toString('hex'),
        amounts: parsedData.data.amounts
      }
    } else if (parsedData.transactionType === 'GENESIS') {
      tokenData = {
        tokenType: parsedData.tokenType,
        txType: parsedData.transactionType,
        ticker: parsedData.data.ticker.toString(),
        name: parsedData.data.name.toString(),
        tokenId: txid,
        documentUri: parsedData.data.documentUri.toString(),
        // documentHash: parsedData.data.documentHash.toString(),
        documentHash: parsedData.data.documentHash.toString('hex'),
        decimals: parsedData.data.decimals,
        mintBatonVout: parsedData.data.mintBatonVout,
        qty: parsedData.data.qty
      }
    } else if (parsedData.transactionType === 'MINT') {
      tokenData = {
        tokenType: parsedData.tokenType,
        txType: parsedData.transactionType,
        tokenId: parsedData.data.tokenId.toString('hex'),
        mintBatonVout: parsedData.data.mintBatonVout,
        qty: parsedData.data.qty
      }
    }
    // console.log(`tokenData: ${JSON.stringify(tokenData, null, 2)}`)

    this.tokenCache[txid] = tokenData
    this.tokenCacheCnt++
    if (this.tokenCacheCnt % 100 === 0) {
      console.log(`decodeOpReturn cache has ${this.tokenCacheCnt} cached txs`)
    }

    // Clear the token cache if it gets too big. Prevents memory leaks.
    if (this.tokenCacheCnt > 1000000) {
      this.tokenCache = {}
      this.tokenCacheCnt = 0
    }

    return tokenData

    // Dev Note: There is no try/catch statement here because this function
    // throws errors as part of its normal operation.
  }

  /**
   * @api RawTransactions.getTxData() getTxData()
   * @apiName getTxData
   * @apiGroup RawTransactions
   * @apiDescription
   * Returns an object of transaction data, including addresses for input UTXOs.
   *
   * This function is equivalent to running `getRawTransaction (txid, true)`,
   * execept the `vin` array will be populated with an `address` property that
   * contains the `bitcoincash:` address of the sender for each input.
   *
   * This function will only work with a single txid. It does not yet support an
   * array of TXIDs.
   *
   * @apiExample Example usage:
   * (async () => {
   * try {
   *  let txData = await bchjs.RawTransactions.getTxData("0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098");
   *  console.log(txData);
   * } catch(error) {
   * console.error(error)
   * }
   * })()
   */
  // Equivalent to running: async getRawTransaction (txid, verbose = true)
  // Only handles a single TXID (not arrays).
  // Appends the BCH address to the inputs of the transaction.
  async getTxData (txid) {
    try {
      if (typeof txid !== 'string') {
        throw new Error(
          'Input to raw-transaction.js/getTxData() must be a string containg a TXID.'
        )
      }

      // Get the TX details for the transaction under consideration.
      // const txDetails = await this.rpc.getRawTransaction(txid)
      const txDetails = await this.getTxWithRetry(txid)
      // console.log(`txDetails: ${JSON.stringify(txDetails, null, 2)}`)

      const inAddrs = await this._getInputAddrs(txDetails)
      // console.log(`inAddrs: ${JSON.stringify(inAddrs, null, 2)}`)

      // Add the input address to the transaction data.
      for (let i = 0; i < inAddrs.length; i++) {
        txDetails.vin[i].address = inAddrs[i].address
        txDetails.vin[i].value = inAddrs[i].value
      }

      return txDetails
    } catch (err) {
      console.error('Error in transaction.js/getTxData()')
      throw err
    }
  }

  // Given verbose transaction details, this function retrieves the transaction
  // data for the inputs (the parent transactions). It returns an array of
  // objects. Each object corresponds to a transaction input, and contains
  // the address that generated that input UTXO.
  //
  // Assumes a single TX. Does not yet work with an array of TXs.
  // This function returns an array of objects, each object is formated as follows:
  // {
  //   vin: 0, // The position of the input for the given txid
  //   address: bitcoincash:qzhrpmu7nruyfcemeanqh5leuqcnf6zkjq4qm9nqh0
  // }
  async _getInputAddrs (txDetails) {
    try {
      const retArray = [] // Return array

      for (let i = 0; i < txDetails.vin.length; i++) {
        // The first input represents the sender of the BCH or tokens.
        const vin = txDetails.vin[i]
        const inputTxid = vin.txid
        const inputVout = vin.vout

        // Skip if there is no input TXID (Coinbase)
        if (!inputTxid) continue

        // Get the TX details for the input, in order to retrieve the address of
        // the sender.
        // const txDetailsParent = await this.rpc.getRawTransaction(inputTxid)
        // const txDetailsParent = await this.queue.addToQueue(
        //   this.rpc.getRawTransaction,
        //   inputTxid
        // )
        const txDetailsParent = await this.getTxWithRetry(inputTxid)

        // console.log(
        //   `txDetailsParent: ${JSON.stringify(txDetailsParent, null, 2)}`
        // )

        // The vout from the previous tx that represents the sender.
        const voutSender = txDetailsParent.vout[inputVout]

        retArray.push({
          vin: i,
          address: voutSender.scriptPubKey.addresses[0],
          value: voutSender.value
        })
      }

      return retArray
    } catch (err) {
      // Handle corner-case of a Coinbase TX.
      if (err.message.includes('txid must be provided')) {
        return []
      }

      console.error('Error in transaction.js/_getInputAddrs()')
      throw err
    }
  }

  // Wraps the rpc.getRawTransaction() function in the queue-with-retry lib.
  // This will retrieve transaction data from the full node, and it will
  // automatically retry if there is an issue when trying to talk to the full
  // node.
  async getTxWithRetry (txid) {
    try {
      // Validate the txid input.
      if (!txid || txid === '' || typeof txid !== 'string') {
        throw new Error('txid string must be included.')
      }

      // Return results if they've been cached.
      const cachedVal = this.txCache[txid]
      if (cachedVal) return cachedVal

      const txData = await this.queue.addToQueue(
        this.rpc.getRawTransaction,
        txid
      )

      // Add the result to the cache.
      this.txCache[txid] = txData
      this.txCacheCnt++
      if (this.txCacheCnt % 1000 === 0) {
        console.log(`txCache has ${this.txCacheCnt} cached txs`)
      }

      // Clear the token cache if it gets too big. Prevents memory leaks.
      if (this.txCacheCnt > 1000000) {
        this.txCache = {}
        this.txCacheCnt = 0
      }

      return txData
    } catch (err) {
      console.error('Error in getTxWithRetry()')
      throw err
    }
  }
}

// module.exports = Transaction
export default Transaction

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/slp-indexer/lib/dag.js`:

```js
/*
  This library is concernced with navigating the DAG of a transaction.

  All other methods have been replaced with crawlDag()
*/

class DAG {
  constructor (localConfig = {}) {
    this.cache = localConfig.cache
    if (!this.cache) {
      throw new Error('instance of cache required when instantiating DAG')
    }
    this.txDb = localConfig.txDb
    if (!this.txDb) throw new Error('TX DB required')
  }

  // This is a recursive function.
  // This function will recursively call itself, to traverse the DAG and find
  // all the parent TXs for that transaction. It will then
  // return an array of TXs, sorted with the oldest parent first, and the given
  // input tx as the last element.
  // It first queries the parent TX from LevelDB. If that TX is found, the
  // crawling stops and the validation result from the database is used. This
  // makes crawling *much* faster.
  async crawlDag (txid, tokenId, txidAry = [], endFound = null) {
    try {
      if (!txid) {
        throw new Error('txid required to crawl DAG')
      }
      if (!tokenId) {
        throw new Error('tokenId required to crawl DAG')
      }

      // console.log(`crawling TXID ${txid}, endFound: ${endFound}`)
      // console.log(`tokenId: ${tokenId}`)
      // console.log('txidAry: ', txidAry)

      // Set default value for the output object.
      const outObj = {
        isValid: false,
        dag: []
      }

      const txData = await this.cache.get(txid)
      // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

      // Exit immediately if endFound achieves true or false status.
      if (endFound === true || endFound === false) {
        outObj.isValid = endFound
        outObj.dag = txidAry
        return outObj
      }

      // If the txid does not exist in the txidAry array, then add it.
      const isAlreadyAdded = txidAry.filter((x) => x === txid)
      if (!isAlreadyAdded.length) {
        // Add it to the beginning of the array.
        txidAry.unshift(txData.txid)
        // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)
      }

      // If this is the genesis TX, then exit immediately.
      // This happens when evaluating the first send TX after a genesis TX.
      if (txid === tokenId) {
        // TODO: Should decodeOpReturn() be run on this txid, to ensure it
        // is valid via SLP OP_RETURN rules?

        outObj.isValid = true
        outObj.dag = txidAry
        return outObj
      }

      // Loop through each input that represents tokens.
      for (let i = 0; i < txData.vin.length; i++) {
        const thisVin = txData.vin[i]
        // console.log(`thisVin: ${JSON.stringify(thisVin, null, 2)}`)

        // Evaluate if the token IDs match.
        const sameTokenId = thisVin.tokenId === txData.tokenId

        // If the input is not colored as a token, then skip it.
        // Corner case: If a mint baton, qty is 0 but still a valid token tx.
        // Corner case: If tokenId doesn't match, then skip it.
        if ((!thisVin.tokenQty && !thisVin.isMintBaton) || !sameTokenId) {
          continue
        }

        // Phase 1: retrieve the parent TX.
        const parentTx = await this.cache.get(thisVin.txid)
        // console.log(`parentTx: ${JSON.stringify(parentTx, null, 2)}`)

        // Phase 2: Evaluate relationship between parent and child.

        // Phase 2a: Evaluate rules that apply regardless of where parent came
        // from (cache or full node).
        if (parentTx.tokenType !== txData.tokenType) {
          // Corner case: Mixing NFT and Type 1 tokens.
          endFound = false
          outObj.dag = txidAry
          return outObj
        }

        // Phase 2b: Evaluate cached pre-evaluated parents.
        // If the parent TX is a valid SLP tx that has already been evaluated.
        if (parentTx.isValidSlp) {
          // Ensure this input is either a token or a minting baton.
          const vinIsTokenOrBaton = !!thisVin.tokenQty || thisVin.isMintBaton
          // console.log(`vinIsTokenOrBaton: ${JSON.stringify(vinIsTokenOrBaton, null, 2)}`)

          // Ensure this input originates from that parent.
          // console.log(`parentTx.vout: ${JSON.stringify(parentTx.vout, null, 2)}`)
          const parentOutMatch = parentTx.vout.filter(
            (x) => x.n === thisVin.vout && vinIsTokenOrBaton
          )
          // console.log(`parentOutMatch: ${JSON.stringify(parentOutMatch, null, 2)}`)

          if (parentOutMatch.length) {
            // Stop crawling DAG and use result from DB.
            txidAry.unshift(parentTx.txid)

            // Final parent found. Stop the recursive calls.
            endFound = true
            outObj.isValid = true
            outObj.dag = txidAry
            return outObj
          }
        }

        // Phase 2c: Evaluate un-cached, un-evaluated parent

        // Not sure why or how parentTx can be undefined, but...
        // if (!parentTx) return

        if (parentTx.tokenId !== tokenId) {
          // Corner case. Outputs from one token used for input of a different token.
          throw new Error(
            `TokenID does not match. Given token ID ${tokenId} does not match token ID ${parentTx.tokenId} in parent TXID ${parentTx.txid}`
          )

          //
        } else if (parentTx.txid === tokenId) {
          // Handle corner case with NFTs. This is when the Genesis TX does
          // not originate from a Group (Type 128) token.
          const isNFT = parentTx.tokenType !== 1
          const groupTokenOnVin0 = parentTx.vin[0].tokenQty > 0
          if (isNFT && !groupTokenOnVin0) {
            // Corner case expressed in this transaction:
            // TXID: 6d68a7ffbb63ef851c43025f801a1d365cddda50b00741bca022c743d74cd61a

            endFound = true
            outObj.isValid = false
            outObj.dag = []
            return outObj
          }

          // GENESIS TX Found. End of DAG.
          txidAry.unshift(parentTx.txid)

          // Final parent found. Stop the recursive calls.
          endFound = true
          outObj.isValid = true
          outObj.dag = txidAry
          return outObj

          //
        } else {
          // chainedParentsDetected = true

          // console.log(`parentTx: ${JSON.stringify(parentTx, null, 2)}`)
          // console.log(`txData.txid: ${txData.txid}`)
          // console.log(`--->txData.isValidSlp: ${txData.isValidSlp}`)
          // console.log(`parentTx.txid: ${parentTx.txid}`)
          // console.log(`--->parentTx.isValidSlp ${parentTx.isValidSlp}`)

          // Recursively call this function to follow the DAG to the first parent
          // in this block.
          const inObj = await this.crawlDag(
            parentTx.txid,
            tokenId,
            txidAry,
            endFound
          )
          endFound = inObj.isValid
        }
      }

      outObj.dag = txidAry

      if (endFound === true) {
        outObj.isValid = true
        return outObj
      }

      return outObj
    } catch (err) {
      console.error('Error in crawlDag()')
      throw err
    }
  }
}

// module.exports = DAG
export default DAG

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/slp-indexer/lib/retry-queue.js`:

```js
/*
  This library leverages the p-retry and p-queue libraries, to create a
  validation queue with automatic retry.

  New nodes syncing will attempt to rapidly validate a lot of entries.
  A promise-based queue allows this to happen while respecting rate-limits
  of the blockchain service provider.

  pay-to-write-access-controller.js depends on this library.
*/

// Global npm libraries
import PQueue from 'p-queue'
import pRetry from 'p-retry'

// Local libraries
import Util from './utils.js'

class RetryQueue {
  constructor (localConfig = {}) {
    // Encapsulate dependencies
    this.queue = new PQueue({ concurrency: 1 })
    this.pRetry = pRetry
    this.util = new Util()

    // Note: Retry has exponential back-off, so 6-10 is the right number.
    this.attempts = 6
    this.retryPeriod = 3000

    // Bind 'this' object to all subfunctions
    this.addToQueue = this.addToQueue.bind(this)
    this.retryWrapper = this.retryWrapper.bind(this)
    this.handleValidationError = this.handleValidationError.bind(this)
    this.sleep = this.util.sleep
  }

  // Add an async function to the queue, and execute it with the input object.
  async addToQueue (funcHandle, inputObj) {
    try {
      // console.log('addToQueue inputObj: ', inputObj)

      if (!funcHandle) {
        throw new Error('function handler is required')
      }
      if (!inputObj) {
        throw new Error('input object is required')
      }

      const returnVal = await this.queue.add(() =>
        this.retryWrapper(funcHandle, inputObj)
      )
      return returnVal
    } catch (err) {
      console.log('addToQueue() err: ', err)

      if (err.message.includes('500')) {
        console.log('Error code 500 typically indicates a TXID that does not exist. This is expected, and indexing can continue.')
      } else {
        console.error('Error in addToQueue(): ', err)
      }

      throw err
    }
  }

  // Wrap the p-retry library.
  // This function returns a promise that will resolve to the output of the
  // function 'funcHandle'.
  async retryWrapper (funcHandle, inputObj) {
    try {
      // console.log('retryWrapper inputObj: ', inputObj)

      if (!funcHandle) {
        throw new Error('function handler is required')
      }
      if (!inputObj) {
        throw new Error('input object is required')
      }
      // console.log('Entering retryWrapper()')

      // Add artificial delay to prevent 429 errors.
      // await this.sleep(this.retryPeriod)

      return this.pRetry(
        async () => {
          return await funcHandle(inputObj)
        },
        {
          onFailedAttempt: this.handleValidationError,
          retries: this.attempts // Retry 5 times
        }
      )
    } catch (err) {
      console.error('Error in retryWrapper()')
      throw err
    }
  }

  // Notifies the user that an error occured and that a retry will be attempted.
  // It tracks the number of retries until it fails.
  async handleValidationError (error) {
    try {
      // console.log('handleValidationError() error: ', error)

      const errorMsg = `Attempt ${error.attemptNumber} to validate entry. There are ${error.retriesLeft} retries left. Waiting before trying again.`
      console.log(errorMsg)

      const SLEEP_TIME = this.retryPeriod
      console.log(`Waiting ${SLEEP_TIME} milliseconds before trying again.\n`)
      await this.sleep(SLEEP_TIME) // 30 sec
    } catch (err) {
      console.error('Error in handleValidationError()')
      throw err
    }
  }
}

// module.exports = RetryQueue
export default RetryQueue

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/slp-indexer/re-index.js`:

```js
/*
  This is a modified version of index.js. It runs on it's own, and it re-indexes
  the database using a tx-map. This is a JSON file mapping out all the SLP
  transactions in the blockchain.
*/

// Global constants
const EPOCH = 400 // blocks between backups
const RETRY_CNT = 15 // Number of retries before exiting the indexer

// Load the TX map of SLP transactions in the blockchain
const txMap = require('./tx-maps/tx-map.json')

// Public npm libraries.
const level = require('level')

// Local libraries
const { wlogger } = require('../wlogger')
const RPC = require('./lib/rpc')
const DbBackup = require('./lib/db-backup')
const Cache = require('./lib/cache')
const Transaction = require('./lib/transaction')
const FilterBlock = require('./lib/filter-block')
const Genesis = require('./tx-types/genesis')
const Send = require('./tx-types/send')
const Mint = require('./tx-types/mint')
const StartStop = require('./lib/start-stop')
const Utils = require('./lib/utils')
const ManagePTXDB = require('./lib/ptxdb')
const Blacklist = require('./lib/blacklist')
const NftGenesis = require('./tx-types/nft-genesis')

// Instantiate LevelDB databases
const addrDb = level(`${__dirname.toString()}/../../../leveldb/current/addrs`, {
  valueEncoding: 'json',
  cacheSize: 1 * 1024 * 1024 * 1024 // 1 GB
})
const txDb = level(`${__dirname.toString()}/../../../leveldb/current/txs`, {
  valueEncoding: 'json',
  cacheSize: 1 * 1024 * 1024 * 1024 // 1 GB
})
const tokenDb = level(
  `${__dirname.toString()}/../../../leveldb/current/tokens`,
  {
    valueEncoding: 'json'
  }
)
const statusDb = level(
  `${__dirname.toString()}/../../../leveldb/current/status`,
  {
    valueEncoding: 'json'
  }
)
const pTxDb = level(`${__dirname.toString()}/../../../leveldb/current/ptxs`, {
  valueEncoding: 'json'
})

// The UTXO database is used as a sort of reverse-lookup. The key is the TXID
// plus vout, in this format: 'txid:vout'.
// and the value is the vout and address. This can be used to lookup what
// address possesses the UTXO. This makes handling of 'controlled burn' txs
// much faster.
const utxoDb = level(`${__dirname.toString()}/../../../leveldb/current/utxos`, {
  valueEncoding: 'json'
})

let _this

class SlpReIndexer {
  constructor (localConfig = {}) {
    // Encapsulate dependencies
    this.rpc = new RPC()
    this.dbBackup = new DbBackup({ addrDb, tokenDb, txDb, statusDb, pTxDb, utxoDb })
    this.cache = new Cache({ txDb })
    this.transaction = new Transaction({ txDb })
    this.filterBlock = new FilterBlock({
      cache: this.cache,
      transaction: this.transaction,
      addrDb,
      tokenDb,
      utxoDb,
      txDb
    })
    this.genesis = new Genesis({ addrDb, tokenDb, utxoDb })
    this.send = new Send({ addrDb, tokenDb, txDb, utxoDb, cache: this.cache })
    this.mint = new Mint({ addrDb, tokenDb, txDb, utxoDb, cache: this.cache })
    this.nftGenesis = new NftGenesis({ addrDb, tokenDb, utxoDb, txDb, cache: this.cache })
    this.startStop = new StartStop()
    this.utils = new Utils()
    this.managePtxdb = new ManagePTXDB({ pTxDb })
    this.blacklist = new Blacklist()

    // State
    this.stopIndexing = false

    _this = this
  }

  async start () {
    try {
      console.log('starting SLP re-indexer...\n')
      wlogger.info('starting SLP re-indexer...')

      // Capture keyboard input to determine when to shut down.
      this.startStop.initStartStop()

      // Sometimes the first entry in tx-map.json is empty.
      let firstBlock = txMap[0].height
      if (!firstBlock) {
        firstBlock = txMap[1].height
      }
      console.log('firstBlock: ', firstBlock)

      const lastBlock = txMap[txMap.length - 1].height

      // Get the current sync status.
      let status
      try {
        status = await statusDb.get('status')
      } catch (err) {
        console.log('Error trying to get status from leveldb')
        // New database, so there is no status. Create it.
        status = {
          startBlockHeight: firstBlock,
          syncedBlockHeight: firstBlock
        }

        await statusDb.put('status', status)
      }
      // console.log('status: ', status)
      console.log(
        `Indexer is currently synced to height ${status.syncedBlockHeight}`
      )

      console.log(`Indexer will sync to a maximum block height of ${lastBlock}`)

      // Get index of current block height.
      const slpTxIndex = txMap.findIndex(
        (x) => x.height === status.syncedBlockHeight
      )
      console.log(`slpTxIndex: ${slpTxIndex}`)

      // Bail out if the block height can not be determined.
      if (slpTxIndex < 0) {
        console.log('tx-map index can not be determined from current block height! Exiting.')
        process.exit(-1)
      }

      // Clean up stale TXs in the pTxDb.
      await this.managePtxdb.cleanPTXDB(status.syncedBlockHeight)

      // const lastBlockIndex = txMap.findIndex(x => x.height === 570650)

      let lastIndex = 0

      // Loop through the block heights and index every block.
      // for (
      //   let blockHeight = status.syncedBlockHeight;
      //   blockHeight < biggestBlockHeight;
      //   // blockHeight < status.syncedBlockHeight + 5;
      //   blockHeight++
      // ) {
      for (let i = slpTxIndex; i < txMap.length; i++) {
      // for (let i = slpTxIndex; i < slpTxIndex + 10; i++) {
      // for (let i = slpTxIndex; i < lastBlockIndex; i++) {
        const blockHeight = txMap[i].height

        // if (blockHeight > 576300) {
        //   console.log('\nTarget block reached.')
        //   process.exit(0)
        // }

        // Update and save the sync status.
        status.syncedBlockHeight = blockHeight
        await statusDb.put('status', status)
        // console.log(`Indexing block ${blockHeight}`)

        // Shut down elegantly if the 'q' key was detected.
        const shouldStop = this.startStop.stopStatus()
        if (shouldStop) {
          console.log(
            `'q' key detected. Stopping indexing. Last block processed was ${
              blockHeight - 1
            }`
          )
          process.exit(0)
        }

        // // Get the block hash for the current block height.
        // const blockHash = await this.rpc.getBlockHash(blockHeight)
        // // console.log("blockHash: ", blockHash);
        //
        // // Now get the actual data stored in that block.
        // const block = await this.rpc.getBlock(blockHash)
        // // console.log('block: ', block)
        //
        // // Transactions in the block.
        // const txs = block.tx

        const txs = txMap[i].txs

        const now = new Date()
        console.log(
          `Indexing block ${blockHeight} with ${
            txs.length
          } transactions. ${now.toLocaleString()}`
        )

        // Create a zip-file backup every 'epoch' of blocks
        if (blockHeight % EPOCH === 0) {
          console.log(
            `Creating zip archive of database at block ${blockHeight}`
          )
          await this.dbBackup.zipDb(blockHeight)
        }

        // Filter and sort block transactions, to make indexing more efficient
        // and easier to debug.
        const slpTxs = await this.filterBlock.filterAndSortSlpTxs2(
          txs,
          blockHeight
        )
        console.log(`slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)
        console.log(`slpTxs.length: ${slpTxs.length}`)

        // Move on to the next block if there are no SLP transactions.
        if (!slpTxs.length) continue

        // Backup the database
        // if (blockHeight % 5 === 0) {
        //   await this.dbBackup.backupDb()
        // }

        // const testAddr =
        //   'bitcoincash:qpq5uuctyf6qhh5nlsdxx8guhf7lxhegnsr0lwx4ev'
        // try {
        //   const testData = await addrDb.get(testAddr)
        //   console.log(`${testAddr}: ${JSON.stringify(testData, null, 2)}`)
        // } catch (err) {
        //   /* exit quietly */
        // }

        // Progressively processes TXs in the array.
        await this.processSlpTxs(slpTxs, blockHeight)

        lastIndex = i
      }

      // Update and save the sync status.
      const blockHeight = txMap[lastIndex + 1].height
      status.syncedBlockHeight = blockHeight
      await statusDb.put('status', status)

      process.exit(0)
    } catch (err) {
      console.log('Error in re-index.js: ', err)
      // Don't throw an error. This is a top-level function.

      // console.log('Restoring backup of database.')
      await this.dbBackup.restoreDb()

      // For debugging purposes, exit if there is an error.
      process.exit(0)
    }
  }

  // This is a replacement for the concurrent processing. This processes each
  // slp tx in-order in the array. If an error is found, the current TX is
  // moved to the back of the queue. Processing continues until the array is
  // is empty, or the same TX has failed to process 5 times in a row.
  async processSlpTxs (slpTxs, blockHeight) {
    try {
      const errors = [] // Track errors

      // Loop through each tx in the slpTxs array.
      // const numTxs = slpTxs.length
      // for (let i = 0; i < numTxs; i++) {
      do {
        // Get the first element in the slpTxs array.
        const tx = slpTxs.shift()
        console.log(`tx: ${JSON.stringify(tx, null, 2)}`)
        console.log(`slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)

        try {
          // Attempt to process TX
          await this.processTx({ tx, blockHeight })
        } catch (err) {
          console.log('----> HANDLING ERROR <----')
          console.log(err)

          // Move the tx to the back of the queue.
          slpTxs.push(tx)

          // Get the error object for this tx.
          const errObj = errors.filter((x) => x.tx === tx)

          // Create a new error object if it doesn't exist.
          if (!errObj.length) {
            const newErrObj = {
              tx,
              cnt: 0
            }

            errors.push(newErrObj)

            errObj.push(newErrObj)
          } else {
            // Increment the error count for this tx.
            errObj[0].cnt++
          }

          console.log(`Error count for ${tx}: ${errObj[0].cnt}`)

          const retryCnt = RETRY_CNT
          if (errObj[0].cnt > retryCnt) {
            await this.handleProcessFailure(blockHeight, tx, err.message)
            throw new Error(
              `Failed to process TXID ${tx} after ${retryCnt} tries.`
            )
          }
        }

        // Loop while there are still elements in the slpTxs array.
      } while (slpTxs.length)
    } catch (err) {
      console.error('Error in processSlpTxs()')
      throw err
    }
  }

  // This function is used to roll back to a previous snapshot, when the indexer
  // get stuck.
  // It determines the block height of the problematic parent transaction, then
  // rolls the database to a block height before that transaction.
  async handleProcessFailure (blockHeight, tx, errMsg) {
    try {
      console.log(`Block height: ${blockHeight}`)
      console.log(`errMsg: ${errMsg}`)

      const txData = await this.cache.get(tx)
      // console.log(
      //   `TX Data for problematic TX: ${JSON.stringify(txData, null, 2)}`
      // )

      // Figure out the block height of the parent transaction.
      let targetBlockHeight = blockHeight // Initial (wrong) value.

      // Loop through each Vin and find the oldest parent with the smallest
      // (oldest) block height.
      for (let i = 0; i < txData.vin.length; i++) {
        const thisVin = txData.vin[i]
        // console.log(`thisVin: ${JSON.stringify(thisVin, null, 2)}`)

        // Skip any non-token inputs.
        if (!thisVin.tokenQty) continue

        // Get parent TX data
        const parentTxData = await this.cache.get(thisVin.txid)

        // Get the block height of that transaction.
        // const parentBlockhash = parentTxData.blockhash
        // const parentBlockHeader = await this.rpc.getBlockHeader(parentBlockhash)

        // Find and track the oldest parent block height.
        // if (parentBlockHeader.height < targetBlockHeight) {
        //   targetBlockHeight = parentBlockHeader.height
        // }
        if (parentTxData.blockheight < targetBlockHeight) {
          targetBlockHeight = parentTxData.blockheight
        }
      }
      console.log(`targetBlockHeight: ${targetBlockHeight}`)

      // Round the hight to the nearest 50
      const rollbackHeight = Math.floor(targetBlockHeight / EPOCH) * EPOCH
      console.log(
        `Rolling database back to this block height: ${rollbackHeight}`
      )

      // Roll back the database to before the parent transaction.
      await this.dbBackup.unzipDb(rollbackHeight)

      // Kill the process, which will allow the app to shut down, and pm2 or Docker can
      // restart it at a block height prior to the problematic parent transaction.
      process.exit(0)
    } catch (err) {
      console.error('Error in handleProcessFailure: ', err)
      // Do not throw an error, as this is an error handlilng function.
    }
  }

  // Process the transactions within a block. Uses p-queue to process TXs in
  // parallel.
  async processTx (inData) {
    try {
      const { tx, blockHeight } = inData

      let dataToProcess = false

      try {
        // Is the TX an SLP TX? If not, it will throw an error.
        const slpData = await this.transaction.decodeOpReturn(tx)
        // console.log('slpData: ', slpData)

        // console.log('height: ', blockHeight)

        // Skip this TX if it is for a token that is in the blacklist.
        const tokenId = slpData.tokenId
        const isInBlacklist = this.blacklist.checkBlacklist(tokenId)
        if (isInBlacklist) {
          console.log(`Skipping TX ${tx}, it contains...\ntoken ${tokenId} which is in the blacklist.`)
          throw new Error('TX is for token in blacklist')
        }

        // Get the transaction information.
        const txData = await _this.cache.get(tx)
        // console.log('txData: ', txData)

        // Combine available data for further processing.
        dataToProcess = {
          slpData,
          blockHeight,
          txData
        }
      } catch (err) {
        /* exit quietly */
        // console.log(err)
      }

      // Process the identified SLP transaction.
      if (dataToProcess) {
        console.log('Inspecting tx: ', tx)
        await this.processData(dataToProcess)
      }

      // console.log(`Completed ${tx}`)
    } catch (err) {
      console.error('Error in processTx()')
      throw err
    }
  }

  // This function routes the data for further processing, based on the type of
  // SLP transaction it is.
  async processData (data) {
    try {
      const { slpData, txData } = data
      // console.log('slpData: ', slpData)

      // Skip tokens with an unknown token type.
      // But mark the TX as 'null', to signal to wallets that the UTXO should
      // be segregated so that it's not burned.
      if (slpData.tokenType !== 1 && slpData.tokenType !== 65 && slpData.tokenType !== 129) {
        console.log(
          `Skipping TX ${txData.txid}, it is tokenType ${slpData.tokenType}, which is not yet supported.`
        )

        // Mark the transaction validity as 'null' to signal that this tx
        // has not been processed and the UTXO should be   ignored.
        txData.isValidSlp = null
        await this.txDb.put(txData.txid, txData)

        return
      }

      // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

      // Route the data for processing, based on the type of transaction.
      if (slpData.txType.includes('GENESIS')) {
        if (slpData.tokenType === 65) {
          // NFT Genesis

          await this.nftGenesis.processTx(data)

          console.log(`NFT Genesis tx processed: ${txData.txid}`)
        } else {
          // Type 1 and Group GENESIS

          await this.genesis.processTx(data)

          console.log(`Genesis tx processed: ${txData.txid}`)
        }
      } else if (slpData.txType.includes('MINT')) {
        console.log('Mint tx')

        // console.log(`Mint data: ${JSON.stringify(data, null, 2)}`)
        await this.mint.processTx(data)

        console.log(`Mint tx processed: ${txData.txid}`)
      } else if (slpData.txType.includes('SEND')) {
        console.log(`Send tx. Block Height: ${data.blockHeight}`)

        await this.send.processTx(data)

        console.log(`Send tx processed: ${txData.txid}`)
      }

      // If a prior library did not explictely mark this TX as invalide,
      if (txData.isValidSlp !== false) {
        // Mark TXID as valid and add the transaction to the database.
        txData.isValidSlp = true
        await txDb.put(txData.txid, txData)
      }

      //
    } catch (err) {
      console.error('Error in processData(): ', err)
      throw err
    }
  }
}

module.exports = SlpReIndexer

// Run the reindexer.
const slpIndexer = new SlpReIndexer()
async function reindex () {
  try {
    await slpIndexer.start()
  } catch (err) {
    console.error(err)
  }
}
reindex()

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/fullstack-jwt.js`:

```js
/*
  A library of utility functions for working with FullStack.cash JWT tokens.

  Feel free to copy this library into your own app, as well as the unit tests
  for this file.
*/

import JwtLib from 'jwt-bch-lib'

import BCHJS from '@psf/bch-js'

class FullStackJWT {
  constructor (localConfig = {}) {
    // Input Validation
    this.authServer = localConfig.authServer
    if (!this.authServer || typeof this.authServer !== 'string') {
      throw new Error(
        'Must pass a url for the AUTH server when instantiating FullStackJWT class.'
      )
    }
    this.apiServer = localConfig.apiServer
    if (!this.apiServer || typeof this.apiServer !== 'string') {
      throw new Error(
        'Must pass a url for the API server when instantiating FullStackJWT class.'
      )
    }
    this.login = localConfig.fullstackLogin
    if (!this.login || typeof this.login !== 'string') {
      throw new Error(
        'Must pass a FullStack.cash login (email) instantiating FullStackJWT class.'
      )
    }
    this.password = localConfig.fullstackPassword
    if (!this.password || typeof this.password !== 'string') {
      throw new Error(
        'Must pass a FullStack.cash account password when instantiating FullStackJWT class.'
      )
    }

    // Encapsulate dependencies
    this.jwtLib = new JwtLib({
      // Overwrite default values with the values in the config file.
      server: this.authServer,
      login: this.login,
      password: this.password
    })

    // State
    this.apiToken = '' // Default value.
    this.bchjs = {}
  }

  // Get's a JWT token from FullStack.cash.
  async getJWT () {
    try {
      // Log into the auth server.
      await this.jwtLib.register()

      this.apiToken = this.jwtLib.userData.apiToken
      if (!this.apiToken) {
        throw new Error('This account does not have a JWT')
      }
      console.log(`Retrieved JWT token: ${this.apiToken}\n`)

      // Ensure the JWT token is valid to use.
      const isValid = await this.jwtLib.validateApiToken()

      // Get a new token with the same API level, if the existing token is not
      // valid (probably expired).
      if (!isValid.isValid) {
        this.apiToken = await this.jwtLib.getApiToken(
          this.jwtLib.userData.apiLevel
        )
        console.log(
          `The JWT token was not valid. Retrieved new JWT token: ${this.apiToken}\n`
        )
      } else {
        console.log('JWT token is valid.\n')
      }

      return this.apiToken
    } catch (err) {
      console.error(
        `Error trying to log into ${this.server} and retrieve JWT token.`
      )
      throw err
    }
  }

  // Create an instance of bchjs with the validated JWT token. Returns this
  // instance of bch-js.
  instanceBchjs () {
    this.bchjs = new BCHJS({
      restURL: this.apiServer,
      apiToken: this.apiToken
    })

    return this.bchjs
  }
}

export default FullStackJWT

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/ipfs/index.js`:

```js
/*
  top-level IPFS library that combines the individual IPFS-based libraries.
*/

// Local libraries
import IpfsAdapter from './ipfs.js'

import IpfsCoordAdapter from './ipfs-coord.js'
import config from '../../../config/index.js'

class IPFS {
  constructor (localConfig = {}) {
    // Encapsulate dependencies
    this.ipfsAdapter = new IpfsAdapter()
    this.IpfsCoordAdapter = IpfsCoordAdapter
    this.process = process
    this.config = config

    this.ipfsCoordAdapter = {} // placeholder

    // Properties of this class instance.
    this.isReady = false
  }

  // Provides a global start() function that triggers the start() function in
  // the underlying libraries.
  async start () {
    try {
      // Start IPFS
      await this.ipfsAdapter.start()
      console.log('IPFS is ready.')

      // this.ipfs is a Promise that will resolve into an instance of an IPFS node.
      this.ipfs = this.ipfsAdapter.ipfs

      // Start ipfs-coord
      this.ipfsCoordAdapter = new this.IpfsCoordAdapter({
        ipfs: this.ipfs,
        tcpPort: this.config.ipfsTcpPort,
        wsPort: this.config.ipfsWsPort
      })
      await this.ipfsCoordAdapter.start()
      console.log('ipfs-coord is ready.')

      // Subscribe to the chat pubsub channel
      await this.ipfsCoordAdapter.subscribeToChat()

      return true
    } catch (err) {
      console.error('Error in adapters/ipfs/index.js/start()')

      // If error is due to a lock file issue. Kill the process, so that
      // Docker or pm2 has a chance to restart the service.
      if (err.message.includes('Lock already being held')) {
        this.process.exit(1)
      }

      throw err
    }
  }
}

export default IPFS

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/ipfs/ipfs-coord.js`:

```js
/*
  Clean Architecture Adapter for ipfs-coord.
  This library deals with ipfs-coord library so that the apps business logic
  doesn't need to have any specific knowledge of the library.
*/

// Global npm libraries
import IpfsCoord from 'ipfs-coord-esm'

// import BCHJS from '@psf/bch-js';
import SlpWallet from 'minimal-slp-wallet'
import publicIp from 'public-ip'

// Local libraries
import config from '../../../config/index.js'

// const JSONRPC = require('../../controllers/json-rpc/')

let _this

class IpfsCoordAdapter {
  constructor (localConfig = {}) {
    // Dependency injection.
    this.ipfs = localConfig.ipfs
    if (!this.ipfs) {
      throw new Error(
        'Instance of IPFS must be passed when instantiating ipfs-coord.'
      )
    }

    // Encapsulate dependencies
    this.IpfsCoord = IpfsCoord
    this.ipfsCoord = {}
    // this.bchjs = new BCHJS()
    this.wallet = new SlpWallet()
    this.config = config
    this.publicIp = publicIp

    // Properties of this class instance.
    this.isReady = false

    _this = this
  }

  async start () {
    const circuitRelayInfo = {}

    // Wait for the BCH wallet to create the wallet.
    await this.wallet.walletInfoPromise

    // If configured as a Circuit Relay, get the public IP addresses for this node.
    if (this.config.isCircuitRelay) {
      try {
        const ip4 = await this.publicIp.v4()
        // const ip6 = await publicIp.v6()

        circuitRelayInfo.ip4 = ip4
        circuitRelayInfo.tcpPort = this.config.ipfsTcpPort

        // Domain used by browser-based secure websocket connections.
        circuitRelayInfo.crDomain = this.config.crDomain
      } catch (err) {
        /* exit quietly */
      }
    }

    const ipfsCoordOptions = {
      ipfs: this.ipfs,
      type: 'node.js',
      // type: 'browser',
      wallet: this.wallet,
      privateLog: console.log, // Default to console.log
      isCircuitRelay: this.config.isCircuitRelay,
      circuitRelayInfo,
      apiInfo: this.config.apiInfo,
      announceJsonLd: this.config.announceJsonLd,
      debugLevel: this.config.debugLevel
    }

    // Production env uses external go-ipfs node.
    if (this.config.isProduction) {
      ipfsCoordOptions.nodeType = 'external'
    }

    this.ipfsCoord = new this.IpfsCoord(ipfsCoordOptions)

    // Wait for the ipfs-coord library to signal that it is ready.
    await this.ipfsCoord.start()

    // Signal that this adapter is ready.
    this.isReady = true

    return this.isReady
  }

  // Expects router to be a function, which handles the input data from the
  // pubsub channel. It's expected to be capable of routing JSON RPC commands.
  attachRPCRouter (router) {
    try {
      _this.ipfsCoord.privateLog = router
      _this.ipfsCoord.adapters.pubsub.privateLog = router
    } catch (err) {
      console.error('Error in attachRPCRouter()')
      throw err
    }
  }

  // Subscribe to the chat pubsub channel
  async subscribeToChat () {
    await this.ipfsCoord.adapters.pubsub.subscribeToPubsubChannel(
      this.config.chatPubSubChan,
      console.log,
      this.ipfsCoord.thisNode
    )
  }
}

export default IpfsCoordAdapter

```

`/home/trout/work/psf/code/psf-slp-indexer/src/adapters/ipfs/ipfs.js`:

```js
/*
  Clean Architecture Adapter for IPFS.
  This library deals with IPFS so that the apps business logic doesn't need
  to have any specific knowledge of the js-ipfs library.

  TODO: Add the external IP address to the list of multiaddrs advertised by
  this node. See this GitHub Issue for details:
  https://github.com/Permissionless-Software-Foundation/ipfs-service-provider/issues/38
*/

// Global npm libraries
// const IPFS = require('ipfs')
// const IPFS = require('@chris.troutner/ipfs')
// import IPFSembedded from 'ipfs';

import { create } from 'ipfs-http-client'
import fs from 'fs'
import http from 'http'

// Local libraries
import config from '../../../config/index.js'

const IPFS_DIR = './.ipfsdata/ipfs'

class IpfsAdapter {
  constructor (localConfig) {
    // Encapsulate dependencies
    this.config = config
    this.fs = fs
    this.create = create

    // Choose the IPFS constructor based on the config settings.
    // this.IPFS = IPFSembedded // default
    // if (this.config.isProduction) {
    //   this.IPFS = IPFSexternal
    // }

    // Properties of this class instance.
    this.isReady = false
  }

  // Start an IPFS node.
  async start () {
    try {
      // Ipfs Options
      const ipfsOptionsEmbedded = {
        repo: IPFS_DIR,
        start: true,
        config: {
          relay: {
            enabled: true, // enable circuit relay dialer and listener
            hop: {
              enabled: config.isCircuitRelay // enable circuit relay HOP (make this node a relay)
            }
          },
          pubsub: true, // enable pubsub
          Swarm: {
            ConnMgr: {
              HighWater: 30,
              LowWater: 10
            }
          },
          Addresses: {
            Swarm: [
              `/ip4/0.0.0.0/tcp/${this.config.ipfsTcpPort}`,
              `/ip4/0.0.0.0/tcp/${this.config.ipfsWsPort}/ws`
            ]
          },
          Datastore: {
            StorageMax: '2GB',
            StorageGCWatermark: 50,
            GCPeriod: '15m'
          }
        }
      }

      const ipfsOptionsExternal = {
        host: this.config.ipfsHost,
        port: this.config.ipfsApiPort,
        agent: http.Agent({ keepAlive: true, maxSockets: 2000 })
      }

      let ipfsOptions = ipfsOptionsEmbedded
      if (this.config.isProduction) {
        ipfsOptions = ipfsOptionsExternal
      }

      // Create a new IPFS node.
      this.ipfs = await this.create(ipfsOptions)

      // Set the 'server' profile so the node does not scan private networks.
      await this.ipfs.config.profiles.apply('server')

      // Debugging: Display IPFS config settings.
      // const configSettings = await this.ipfs.config.getAll()
      // console.log(`configSettings: ${JSON.stringify(configSettings, null, 2)}`)

      // Signal that this adapter is ready.
      this.isReady = true

      return this.ipfs
    } catch (err) {
      console.error('Error in ipfs.js/start()')

      // If IPFS crashes because the /blocks directory is full, wipe the directory.
      // if (err.message.includes('No space left on device')) {
      //   this.rmBlocksDir()
      // }

      throw err
    }
  }

  async stop () {
    await this.ipfs.stop()

    return true
  }

  // Remove the '/blocks' directory that is used to store IPFS data.
  // Dev Note: It's assumed this node is not pinning any data and that
  // everything in this directory is transient. This folder will regularly
  // fill up and prevent IPFS from starting.
  // rmBlocksDir () {
  //  try {
  //    const dir = `${IPFS_DIR}/blocks`
  //    console.log(`Deleting ${dir} directory...`)
  //
  //    this.fs.rmdirSync(dir, { recursive: true })
  //
  //    console.log(`${dir} directory is deleted!`)
  //
  //    return true // Signal successful execution.
  //  } catch (err) {
  //    console.log('Error in rmBlocksDir()')
  //    throw err
  //  }
  // }
}

export default IpfsAdapter

```

`/home/trout/work/psf/code/psf-slp-indexer/src/controllers/index.js`:

```js
/*
  This is a top-level library that encapsulates all the additional Controllers.
  The concept of Controllers comes from Clean Architecture:
  https://troutsblog.com/blog/clean-architecture
*/

// Public npm libraries.

// Local libraries
import Adapters from '../adapters/index.js'
// import JSONRPC from './json-rpc/index.js'
import UseCases from '../use-cases/index.js'
import RESTControllers from './rest-api/index.js'
import TimerControllers from './timer-controllers.js'
import config from '../../config/index.js'

class Controllers {
  constructor (localConfig = {}) {
    // Encapsulate dependencies
    this.adapters = new Adapters()
    this.useCases = new UseCases({ adapters: this.adapters })
    this.timerControllers = new TimerControllers({ adapters: this.adapters, useCases: this.useCases })
    this.config = config
  }

  // Spin up any adapter libraries that have async startup needs.
  async initAdapters () {
    await this.adapters.start()

    return true
  }

  // Run any Use Cases to startup the app.
  async initUseCases () {
    await this.useCases.start()

    return true
  }

  // Top-level function for this library.
  // Start the various Controllers and attach them to the app.
  attachRESTControllers (app) {
    const restControllers = new RESTControllers({
      adapters: this.adapters,
      useCases: this.useCases
    })

    // Attach the REST API Controllers associated with the boilerplate code to the Koa app.
    restControllers.attachRESTControllers(app)

    return true
  }

  // Attach any other controllers other than REST API controllers.
  async attachControllers (app) {
    // Wait for any startup processes to complete for the Adapters libraries.
    // await this.adapters.start()

    if (this.config.useIpfs) {
      // Attach JSON RPC controllers
      this.attachRPCControllers()
    }

    // Attach and start the timer controllers
    this.timerControllers.startTimers()
  }

  // Add the JSON RPC router to the ipfs-coord adapter.
  attachRPCControllers () {
    // const jsonRpcController = new JSONRPC({
    //   adapters: this.adapters,
    //   useCases: this.useCases
    // })
    //
    // // Attach the input of the JSON RPC router to the output of ipfs-coord.
    // this.adapters.ipfs.ipfsCoordAdapter.attachRPCRouter(
    //   jsonRpcController.router
    // )
  }
}

export default Controllers

```

`/home/trout/work/psf/code/psf-slp-indexer/src/controllers/rest-api/index.js`:

```js
/*
  This index file for the Clean Architecture Controllers loads dependencies,
  creates instances, and attaches the controller to REST API endpoints for
  Koa.
*/

// Public npm libraries.

// Local libraries
import ContactRESTController from './contact/index.js'
import LogsRESTController from './logs/index.js'
import SlpRESTController from './slp/index.js'

class RESTControllers {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating REST Controller libraries.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating REST Controller libraries.'
      )
    }

    // console.log('Controllers localConfig: ', localConfig)
  }

  attachRESTControllers (app) {
    const dependencies = {
      adapters: this.adapters,
      useCases: this.useCases
    }

    // Attach the REST API Controllers associated with the /contact route
    const contactRESTController = new ContactRESTController(dependencies)
    contactRESTController.attach(app)

    // Attach the REST API Controllers associated with the /logs route
    const logsRESTController = new LogsRESTController(dependencies)
    logsRESTController.attach(app)

    const slpRESTController = new SlpRESTController(dependencies)
    slpRESTController.attach(app)

    return true
  }
}

export default RESTControllers

```

`/home/trout/work/psf/code/psf-slp-indexer/src/controllers/rest-api/contact/index.js`:

```js
/*
  REST API library for /contact route.
*/

// Public npm libraries.
import Router from 'koa-router'

// Local libraries.
import ContactRESTControllerLib from './controller.js'

class ContactRouter {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating Contact REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating Contact REST Controller.'
      )
    }

    const dependencies = {
      adapters: this.adapters,
      useCases: this.useCases
    }

    // Encapsulate dependencies.
    this.contactRESTController = new ContactRESTControllerLib(dependencies)

    // Instantiate the router and set the base route.
    const baseUrl = '/contact'
    this.router = new Router({ prefix: baseUrl })
  }

  attach (app) {
    if (!app) {
      throw new Error(
        'Must pass app object when attaching REST API controllers.'
      )
    }

    // Define the routes and attach the controller.
    this.router.post('/email', this.contactRESTController.email)

    // Attach the Controller routes to the Koa app.
    app.use(this.router.routes())
    app.use(this.router.allowedMethods())
  }
}

export default ContactRouter

```

`/home/trout/work/psf/code/psf-slp-indexer/src/controllers/rest-api/contact/controller.js`:

```js
/*
  Controller for the /contact REST API endpoints.
*/

/* eslint-disable no-useless-escape */
import ContactLib from '../../../adapters/contact.js'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const contactLib = new ContactLib()

let _this

class ContactController {
  constructor () {
    _this = this
    _this.contactLib = contactLib
  }

  /**
   * @api {post} /contact/email Send Email
   * @apiName SendMail
   * @apiGroup Contact
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X POST -d '{ "obj": { "email": "email@format.com", "formMessage": "a message" } }' localhost:5001/contact/email
   *
   * @apiParam {Object} obj           object (required)
   * @apiParam {String} obj.email Sender Email.
   * @apiParam {String} obj.formMessage Message.
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *
   *        success:true
   *
   *     }
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 422 Unprocessable Entity
   *     {
   *       "status": 422,
   *       "error": "Unprocessable Entity"
   *     }
   */
  async email (ctx) {
    try {
      const data = ctx.request.body
      const emailObj = data.obj
      await _this.contactLib.sendEmail(emailObj)

      ctx.body = {
        success: true
      }
    } catch (err) {
      _this.handleError(ctx, err)
    }
  }

  // DRY error handler
  handleError (ctx, err) {
    // If an HTTP status is specified by the buisiness logic, use that.
    if (err.status) {
      if (err.message) {
        ctx.throw(err.status, err.message)
      } else {
        ctx.throw(err.status)
      }
    } else {
      // By default use a 422 error if the HTTP status is not specified.
      ctx.throw(422, err.message)
    }
  }
}
export default ContactController

```

`/home/trout/work/psf/code/psf-slp-indexer/src/controllers/rest-api/slp/index.js`:

```js
/*
  REST API library for /slp route.
*/

// Public npm libraries.
import Router from 'koa-router'

// Local libraries.
import SlpRESTControllerLib from './controller.js'

// let _this

class SlpRouter {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating SLP REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating SLP REST Controller.'
      )
    }

    const dependencies = {
      adapters: this.adapters,
      useCases: this.useCases
    }

    // Encapsulate dependencies.
    this.slpRESTController = new SlpRESTControllerLib(dependencies)
    // this.validators = new Validators()

    // Instantiate the router and set the base route.
    const baseUrl = '/slp'
    this.router = new Router({ prefix: baseUrl })

    // _this = this
  }

  attach (app) {
    if (!app) {
      throw new Error(
        'Must pass app object when attaching REST API controllers.'
      )
    }

    // Define the routes and attach the controller.
    this.router.get('/status', this.slpRESTController.status)
    this.router.post('/address', this.slpRESTController.address)
    this.router.post('/tx', this.slpRESTController.tx)
    this.router.post('/token', this.slpRESTController.token)

    // Attach the Controller routes to the Koa app.
    app.use(this.router.routes())
    app.use(this.router.allowedMethods())
  }
}

// module.exports = SlpRouter
export default SlpRouter

```

`/home/trout/work/psf/code/psf-slp-indexer/src/controllers/rest-api/slp/controller.js`:

```js
/*
  REST API Controller library for the /slp route
*/

// Local libraries
// const config = require('../../../../config')
import config from '../../../../config/index.js'
// const { wlogger } = require('../../../adapters/wlogger')

let _this

class SlpRESTControllerLib {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating /slp REST Controller.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating /slp REST Controller.'
      )
    }

    // Encapsulate dependencies
    this.config = config
    // this.UserModel = this.adapters.localdb.Users
    // this.userUseCases = this.useCases.user

    _this = this
  }

  /**
   * @api {post} /slp/:address Address Balance
   * @apiPermission public
   * @apiName Address
   * @apiGroup REST SLP
   * @apiDescription Get information about an address and its SLP balances.
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X POST -d '{ "address": "bitcoincash:qqlrzp23w08434twmvr4fxw672whkjy0py26r63g3d" }' localhost:5001/slp/address
   *
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "balance": {
   *       "utxos": [
   *         {
   *           "txid": "a24a6a4abf06fabd799ecea4f8fac6a9ff21e6a8dd6169a3c2ebc03665329db9",
   *           "vout": 1,
   *           "type": "token",
   *           "qty": "1800",
   *           "tokenId": "a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2",
   *           "address": "bitcoincash:qrqy3kj7r822ps6628vwqq5k8hyjl6ey3y4eea2m4s"
   *         }
   *       ],
   *       "txs": [
   *         {
   *           "txid": "078b2c48ed1db0d5d5996f2889b8d847a49200d0a781f6aa6752f740f312688f",
   *           "height": 717796
   *         },
   *         {
   *           "txid": "a24a6a4abf06fabd799ecea4f8fac6a9ff21e6a8dd6169a3c2ebc03665329db9",
   *           "height": 717832
   *         }
   *       ],
   *       "balances": [
   *         {
   *           "tokenId": "a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2",
   *           "qty": "1800"
   *         }
   *       ]
   *     }
   *   }
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 422 Unprocessable Entity
   *     {
   *       "status": 422,
   *       "error": "Unprocessable Entity"
   *     }
   */
  async address (ctx) {
    try {
      const address = ctx.request.body.address

      const result = await _this.adapters.slpIndexer.query.getAddress(address)

      ctx.body = {
        balance: result
      }
    } catch (err) {
      _this.handleError(ctx, err)
    }
  }

  /**
   * @api {post} /slp/:txid Get TX Data
   * @apiPermission public
   * @apiName TX
   * @apiGroup REST SLP
   * @apiDescription Get transaction data, hyrated with token information.
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X POST -d '{ "txid": "f3e14cd871402a766e85045dc552f2c1e87857dd3ea1b15efab6334ccef5e315" }' localhost:5001/slp/tx
   *
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *  {
   *    "txid": "078b2c48ed1db0d5d5996f2889b8d847a49200d0a781f6aa6752f740f312688f",
   *    "hash": "078b2c48ed1db0d5d5996f2889b8d847a49200d0a781f6aa6752f740f312688f",
   *    "version": 2,
   *    "size": 513,
   *    "locktime": 0,
   *    "vin": [
   *      {
   *        "txid": "f3ad7418888fb5344394d511e373b53f99a41bd6ae35176533d7b5b5a6b21452",
   *        "vout": 2,
   *        "scriptSig": {
   *          "asm": "3044022028e19af46c77380c0177c4b3a50de780c54d7da421dfe141d969e5215446933a022049698e74a5c24d6771fb71a9f6f2ee980f5b4236e28c15cbf6112cb6171ea2b1[ALL|FORKID] 033a24d13b45eaf53bebc7da5b7ee79a39615790b4fb16dab048fdcc5abd3764ef",
   *          "hex": "473044022028e19af46c77380c0177c4b3a50de780c54d7da421dfe141d969e5215446933a022049698e74a5c24d6771fb71a9f6f2ee980f5b4236e28c15cbf6112cb6171ea2b14121033a24d13b45eaf53bebc7da5b7ee79a39615790b4fb16dab048fdcc5abd3764ef"
   *         },
   *         "sequence": 4294967295,
   *         "address": "bitcoincash:qqlrzp23w08434twmvr4fxw672whkjy0py26r63g3d",
   *         "value": 0.00000546,
   *         "tokenQtyStr": "865193.81",
   *         "tokenQty": 865193.81,
   *         "tokenId": "a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2"
   *      },
   *      {
   *         "txid": "56ee0149aaa44916cec3c780c06064411016a0c7f1ef37a538f996cbf9f241a7",
   *         "vout": 2,
   *         "scriptSig": {
   *           "asm": "304402204e98cfaa6d98db231733b2e269ef9a5d693c8d37c32671d434ee1db4f9595819022020f9908218a8ea93cbab53334932e433c57c6e4f565997979af40bf979b8e3d3[ALL|FORKID] 033a24d13b45eaf53bebc7da5b7ee79a39615790b4fb16dab048fdcc5abd3764ef",
   *           "hex": "47304402204e98cfaa6d98db231733b2e269ef9a5d693c8d37c32671d434ee1db4f9595819022020f9908218a8ea93cbab53334932e433c57c6e4f565997979af40bf979b8e3d34121033a24d13b45eaf53bebc7da5b7ee79a39615790b4fb16dab048fdcc5abd3764ef"
   *         },
   *         "sequence": 4294967295,
   *         "address": "bitcoincash:qqlrzp23w08434twmvr4fxw672whkjy0py26r63g3d",
   *         "value": 0.02796721,
   *         "tokenQty": 0,
   *         "tokenQtyStr": "0",
   *         "tokenId": null
   *      }
   *    ],
   *    "vout": [
   *      {
   *        "value": 0,
   *        "n": 0,
   *        "scriptPubKey": {
   *          "asm": "OP_RETURN 5262419 1 1145980243 a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2 00000000000007d0 0000000005282685",
   *          "hex": "6a04534c500001010453454e4420a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b20800000000000007d0080000000005282685",
   *          "type": "nulldata"
   *        },
   *        "tokenQty": null,
   *        "tokenQtyStr": null
   *      },
   *      {
   *        "value": 0.00000546,
   *        "n": 1,
   *        "scriptPubKey": {
   *          "asm": "OP_DUP OP_HASH160 c048da5e19d4a0c35a51d8e002963dc92feb2489 OP_EQUALVERIFY OP_CHECKSIG",
   *          "hex": "76a914c048da5e19d4a0c35a51d8e002963dc92feb248988ac",
   *          "reqSigs": 1,
   *          "type": "pubkeyhash",
   *          "addresses": [
   *            "bitcoincash:qrqy3kj7r822ps6628vwqq5k8hyjl6ey3y4eea2m4s"
   *          ]
   *        },
   *        "tokenQtyStr": "20",
   *        "tokenQty": 20
   *      },
   *      {
   *        "value": 0.00000546,
   *        "n": 2,
   *        "scriptPubKey": {
   *          "asm": "OP_DUP OP_HASH160 3e31055173cf58d56edb075499daf29d7b488f09 OP_EQUALVERIFY OP_CHECKSIG",
   *          "hex": "76a9143e31055173cf58d56edb075499daf29d7b488f0988ac",
   *          "reqSigs": 1,
   *          "type": "pubkeyhash",
   *          "addresses": [
   *            "bitcoincash:qqlrzp23w08434twmvr4fxw672whkjy0py26r63g3d"
   *          ]
   *        },
   *        "tokenQtyStr": "865173.81",
   *        "tokenQty": 865173.81
   *      },
   *      {
   *        "value": 0.00002,
   *        "n": 3,
   *        "scriptPubKey": {
   *          "asm": "OP_DUP OP_HASH160 203b64bfbaa9e58333295b621159ddebc591ecb1 OP_EQUALVERIFY OP_CHECKSIG",
   *          "hex": "76a914203b64bfbaa9e58333295b621159ddebc591ecb188ac",
   *          "reqSigs": 1,
   *          "type": "pubkeyhash",
   *          "addresses": [
   *            "bitcoincash:qqsrke9lh257tqen99dkyy2emh4uty0vky9y0z0lsr"
   *          ]
   *        },
   *        "tokenQty": null,
   *        "tokenQtyStr": null
   *      },
   *      {
   *        "value": 0.02793263,
   *        "n": 4,
   *        "scriptPubKey": {
   *          "asm": "OP_DUP OP_HASH160 3e31055173cf58d56edb075499daf29d7b488f09 OP_EQUALVERIFY OP_CHECKSIG",
   *          "hex": "76a9143e31055173cf58d56edb075499daf29d7b488f0988ac",
   *          "reqSigs": 1,
   *          "type": "pubkeyhash",
   *          "addresses": [
   *            "bitcoincash:qqlrzp23w08434twmvr4fxw672whkjy0py26r63g3d"
   *          ]
   *        },
   *        "tokenQty": null,
   *        "tokenQtyStr": null
   *      }
   *    ],
   *    "hex": "02000000025...0988ac00000000",
   *    "blockhash": "00000000000000000302eef092b2c75f5c36c325eadc9d36c16ec05c6ae17a97",
   *    "confirmations": 36,
   *    "time": 1639161638,
   *    "blocktime": 1639161638,
   *    "blockheight": 717796,
   *    "isSlpTx": true,
   *    "tokenTxType": "SEND",
   *    "tokenId": "a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2",
   *    "tokenType": 1,
   *    "tokenTicker": "TROUT",
   *    "tokenName": "Trout's test token",
   *    "tokenDecimals": 2,
   *    "tokenUri": "troutsblog.com",
   *    "tokenDocHash": "",
   *    "isValidSlp": true
   *    }
   *  }
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 422 Unprocessable Entity
   *     {
   *       "status": 422,
   *       "error": "Unprocessable Entity"
   *     }
   */
  // curl -H "Content-Type: application/json" -X POST -d '{ "txid": "f3e14cd871402a766e85045dc552f2c1e87857dd3ea1b15efab6334ccef5e315" }' localhost:5001/slp/tx
  async tx (ctx) {
    try {
      const txid = ctx.request.body.txid

      const result = await _this.adapters.slpIndexer.query.getTx(txid)

      ctx.body = {
        txData: result
      }
    } catch (err) {
      _this.handleError(ctx, err)
    }
  }

  /**
   * @api {post} /slp/:tokenId Token Stats
   * @apiPermission public
   * @apiName Token
   * @apiGroup REST SLP
   * @apiDescription Get statistics about a token.
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X POST -d '{ "tokenId": "a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2" }' localhost:5001/slp/token
   *
   *
   * @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   * {
   *   "tokenData": {
   *     "type": 1,
   *     "ticker": "TROUT",
   *     "name": "Trout's test token",
   *     "tokenId": "a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2",
   *     "documentUri": "troutsblog.com",
   *     "documentHash": "",
   *     "decimals": 2,
   *     "mintBatonIsActive": true,
   *     "tokensInCirculationBN": "100099989900",
   *     "tokensInCirculationStr": "100099989900",
   *     "blockCreated": 622414,
   *     "totalBurned": "10100"
   *   }
   * }
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 422 Unprocessable Entity
   *     {
   *       "status": 422,
   *       "error": "Unprocessable Entity"
   *     }
   */
  // curl -H "Content-Type: application/json" -X POST -d '{ "tokenId": "a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2" }' localhost:5001/slp/token
  async token (ctx) {
    try {
      const tokenId = ctx.request.body.tokenId
      const withTxHistory = ctx.request.body.withTxHistory

      // Intercept if token is in the blacklist.
      const isInBlacklist = _this.adapters.slpIndexer.blacklist.checkBlacklist(tokenId)
      if (isInBlacklist) {
        ctx.body = {
          // ToDo: Create a better mock that aligns better with existing tokens.
          tokenData: {
            tokenId,
            name: 'not-available'
          }
        }
        return
      }

      const result = await _this.adapters.slpIndexer.query.getToken(tokenId)

      // Delete the tx history if the user does not explicitely want it. This
      // significantly reduces the size of the payload going across the internet.
      if (!withTxHistory) {
        delete result.txs
      }

      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      ctx.body = {
        tokenData: result
      }
    } catch (err) {
      _this.handleError(ctx, err)
    }
  }

  /**
   * @api {get} /slp/status Indexer Status
   * @apiPermission public
   * @apiName Status
   * @apiGroup REST SLP
   * @apiDescription Get the indexer status
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X GET localhost:5020/slp/status
   *
   *
   * @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   * {
   *   "status": {
   *     "startBlockHeight": 543376,
   *     "syncedBlockHeight": "543378",
   *     "chainBlockHeight": "722004"
   *   }
   * }
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 422 Unprocessable Entity
   *     {
   *       "status": 422,
   *       "error": "Unprocessable Entity"
   *     }
   */
  async status (ctx) {
    try {
      // const address = ctx.request.body.address

      // const result = await _this.adapters.slpIndexer.query.getAddress(address)

      const status = await _this.adapters.slpIndexer.statusDb.get('status')
      // console.log('status: ', status)

      ctx.body = {
        status
      }
    } catch (err) {
      _this.handleError(ctx, err)
    }
  }

  // DRY error handler
  handleError (ctx, err) {
    // If an HTTP status is specified by the buisiness logic, use that.
    if (err.status) {
      if (err.message) {
        ctx.throw(err.status, err.message)
      } else {
        ctx.throw(err.status)
      }
    } else {
      // By default use a 422 error if the HTTP status is not specified.
      ctx.throw(422, err.message)
    }
  }
}

// module.exports = UserRESTControllerLib
export default SlpRESTControllerLib

```

`/home/trout/work/psf/code/psf-slp-indexer/src/controllers/json-rpc/index.js`:

```js
/*
  This is the parent class library for the RPC controller.
*/

// Public npm libraries
import jsonrpc from 'jsonrpc-lite'

// Local support libraries
import wlogger from '../../adapters/wlogger.js'

import AboutController from './about/index.js'

let _this

class JSONRPC {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating JSON RPC Controllers.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating JSON RPC Controllers.'
      )
    }

    // Encapsulate dependencies
    this.ipfsCoord = this.adapters.ipfs.ipfsCoordAdapter.ipfsCoord
    this.jsonrpc = jsonrpc
    this.aboutController = new AboutController()

    // Cache to store IDs of processed JSON RPC commands. Used to prevent
    // duplicate processing.
    this.msgCache = []
    this.MSG_CACHE_SIZE = 30

    _this = this
  }

  // This method takes a raw string of data from IPFS, parses it, and determins
  // which controller to route the instruction to.
  async router (str, from) {
    try {
      // console.log('router str: ', str)
      console.log('JSON RPC router recieved data from: ', from)

      // Exit quietly if 'from' is not specified.
      if (!from || typeof from !== 'string') {
        wlogger.info(
          'Warning: Can not send JSON RPC response. Can not determine which peer this message came from.'
        )
        return false
      }

      // Attempt to parse the incoming data as a JSON RPC string.
      const parsedData = _this.jsonrpc.parse(str)
      // wlogger.debug(`parsedData: ${JSON.stringify(parsedData, null, 2)}`)

      // Exit quietly if the incoming string is an invalid JSON RPC string.
      if (parsedData.type === 'invalid') {
        wlogger.info('Rejecting invalid JSON RPC command.')
        return false
      }

      // Check for duplicate entries with same 'id' value.
      const alreadyProcessed = _this._checkIfAlreadyProcessed(parsedData)
      if (alreadyProcessed) {
        return false
      } else {
        // console.log(`parsedData: ${JSON.stringify(parsedData, null, 2)}`)

        // This node will regularly ping known circuit relays with an /about
        // JSON RPC call. These will be handled by ipfs-coord, but will percolate
        // up to this library. Ignore these messages.
        if (
          parsedData.type.includes('success') &&
          parsedData.payload.method === undefined
        ) {
          return false
        }

        // Log the incoming JSON RPC command.
        wlogger.info(
          `JSON RPC received from ${from}, ID: ${parsedData.payload.id}, type: ${parsedData.type}, method: ${parsedData.payload.method}`
        )
      }

      // Added the property "from" to the parsedData object;
      // necessary for calculating rate limits (based on the IPFS ID).
      parsedData.from = from

      // Default return string
      let retObj = _this.defaultResponse()

      // Route the command to the appropriate route handler.
      switch (parsedData.payload.method) {
        // case 'users':
        //   retObj = await _this.userController.userRouter(parsedData)
        //   break
        // case 'auth':
        //   retObj = await _this.authController.authRouter(parsedData)
        //   break
        case 'about':
          retObj = await _this.aboutController.aboutRouter(parsedData)
      }

      // console.log('retObj: ', retObj)

      // Convert the returned object into a JSON RPC response string.
      const retJson = _this.jsonrpc.success(parsedData.payload.id, {
        method: parsedData.payload.method,
        reciever: from,
        value: retObj
      })
      const retStr = JSON.stringify(retJson, null, 2)
      // console.log('retStr: ', retStr)

      // Encrypt and publish the response to the originators private OrbitDB,
      // if ipfs-coord has been initialized and the peers ID is registered.

      // console.log('responding to JSON RPC command')
      const thisNode = _this.ipfsCoord.thisNode
      // console.log('thisNode: ', thisNode)

      try {
        await _this.ipfsCoord.useCases.peer.sendPrivateMessage(
          from,
          retStr,
          thisNode
        )
      } catch (err) {
        console.log('sendPrivateMessage() err: ', err)
      }

      // Return the response and originator. Useful for testing.
      return { from, retStr }
    } catch (err) {
      // console.error('Error in rpc router(): ', err)
      wlogger.error('Error in rpc router(): ', err)
      // Do not throw error. This is a top-level function.
    }
  }

  // Checks the ID of the JSON RPC call, to see if the message has already been
  // processed. Returns true if the ID exists in the cache of processed messages.
  // If the ID is new, the function adds it to the cache and return false.
  _checkIfAlreadyProcessed (data) {
    try {
      // console.log('data: ', data)

      const id = data.payload.id

      // Check if the hash is in the array of already processed message.
      const alreadyProcessed = this.msgCache.includes(id)

      // Update the msgCache if this is a new message.
      if (!alreadyProcessed) {
        // Add the hash to the array.
        this.msgCache.push(id)

        // If the array is at its max size, then remove the oldest element.
        if (this.msgCache.length > this.MSG_CACHE_SIZE) {
          this.msgCache.shift()
        }
      }

      return alreadyProcessed
    } catch (err) {
      console.error('Error in _checkIfAlreadyProcessed: ', err)
      return true
    }
  }

  // The default JSON RPC response if the incoming command could not be routed.
  defaultResponse () {
    const errorObj = {
      success: false,
      status: 422,
      message: 'Input does not match routing rules.'
    }

    return errorObj
  }
}

export default JSONRPC

```

`/home/trout/work/psf/code/psf-slp-indexer/src/controllers/json-rpc/rate-limit.js`:

```js
/*
  Rate limit
*/
/* eslint no-useless-catch: 0 */

// Local libraries
import { RateLimit as RateLimitLib } from 'koa2-ratelimit'

class RateLimit {
  constructor (options) {
    // Encapsulate dependencies
    this.RateLimitLib = RateLimitLib

    // Set default rate limit options.
    this.defaultOptions = {
      interval: { min: 1 },
      max: 60,
      onLimitReached: this.onLimitReached
    }

    // ctx obj
    this.context = {
      state: {
        user: ''
      },
      request: {
        ip: ''
      },
      user: '',
      set: () => {}
    }

    // console.log(
    //   `this.defaultOptions: ${JSON.stringify(this.defaultOptions, null, 2)}`
    // )
    // console.log(`options: ${JSON.stringify(options, null, 2)}`)

    // Set rate limit settings. Default values are overwritten if user passes
    // in an options object.
    this.rateLimitOptions = Object.assign({}, this.defaultOptions, options)
    // console.log(
    //   `this.rateLimitOptions: ${JSON.stringify(this.rateLimitOptions, null, 2)}`
    // )
    this.rateLimit = this.RateLimitLib.middleware(this.rateLimitOptions)
  }

  // This function is called when the user hits their rate limits.
  onLimitReached () {
    try {
      const error = new Error() // Establish provided options as the default options.
      error.message = 'Too many requests, please try again later.'
      error.status = 429
      throw error
    } catch (error) {
      // console.log("Error in onLimitReached()", error)
      throw error
    }
  }

  // This is the middleware function called by the router.
  async limiter (from) {
    try {
      if (!from || typeof from !== 'string') {
        throw new Error('from must be a string')
      }

      // Set context.limiter
      // This overrides the default koa behavior and adapts the rate limiter
      // to work with the JSON RPC over IPFS.
      this.context.state.user = from
      this.context.request.ip = from
      this.context.user = from

      await this.rateLimit(this.context, () => {})
      return true
    } catch (error) {
      console.error('Error in rate-limit.js/limiter()')
      throw error
    }
  }
}

export default RateLimit

```

`/home/trout/work/psf/code/psf-slp-indexer/src/controllers/json-rpc/about/index.js`:

```js
/*
  This is the JSON RPC router for the users API

  CT 3/5/22: This library can probably be deleted. Handling of the /about endpoint
  is now directly controlled by the ipfs-coord library.
*/

// Public npm libraries
import jsonrpc from 'jsonrpc-lite'

// Local libraries
import config from '../../../../config/index.js'

class AboutRPC {
  constructor (localConfig) {
    // Encapsulate dependencies
    this.jsonrpc = jsonrpc
  }

  /**
   * @api {JSON} /about About IPFS Node
   * @apiPermission public
   * @apiName About
   * @apiGroup JSON About
   *
   * @apiExample Example usage:
   * {"jsonrpc":"2.0","id":"555","method":"about"}
   *
   * @apiDescription
   * This endpoint can be customized so that users can retrieve information about
   * your IPFS node and Service Provider application. This is a great place to
   * put a website URL, an IPFS hash, an other basic information.
   */

  // This is the top-level router for this library.
  // This is a bit different than other router libraries, because there is
  // only one response, which is a string about this node.
  async aboutRouter (rpcData) {
    console.log('debugging: aboutRouter from ipfs-service-provider triggered')

    return {
      success: true,
      status: 200,
      // message: aboutStr,
      message: JSON.stringify(config.announceJsonLd),
      endpoint: 'about'
    }
  }
}

export default AboutRPC

```

`/home/trout/work/psf/code/psf-slp-indexer/src/controllers/timer-controllers.js`:

```js
/*
  This Controller library is concerned with timer-based functions that are
  kicked off periodicially.
*/

import config from '../../config/index.js'

class TimerControllers {
  constructor (localConfig = {}) {
    // Dependency Injection.
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of Adapters library required when instantiating Timer Controller libraries.'
      )
    }
    this.useCases = localConfig.useCases
    if (!this.useCases) {
      throw new Error(
        'Instance of Use Cases library required when instantiating Timer Controller libraries.'
      )
    }

    this.debugLevel = localConfig.debugLevel

    // Encapsulate dependencies
    this.config = config

    // Bind 'this' object to all subfunctions.
    this.exampleTimerFunc = this.exampleTimerFunc.bind(this)

    // this.startTimers()
  }

  // Start all the time-based controllers.
  startTimers () {
    // Any new timer control functions can be added here. They will be started
    // when the server starts.
    this.optimizeWalletHandle = setInterval(this.exampleTimerFunc, 60000 * 10)

    return true
  }

  stopTimers () {
    clearInterval(this.optimizeWalletHandle)
  }

  // Replace this example function with your own timer handler.
  exampleTimerFunc (negativeTest) {
    try {
      console.log('Example timer controller executed.')

      if (negativeTest) throw new Error('test error')

      return true
    } catch (err) {
      console.error('Error in exampleTimerFunc(): ', err)

      // Note: Do not throw an error. This is a top-level function.
      return false
    }
  }
}

export default TimerControllers

```

`/home/trout/work/psf/code/psf-slp-indexer/src/use-cases/index.js`:

```js
/*
  This is a top-level library that encapsulates all the additional Use Cases.
  The concept of Use Cases comes from Clean Architecture:
  https://troutsblog.com/blog/clean-architecture
*/

class UseCases {
  constructor (localConfig = {}) {
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of adapters must be passed in when instantiating Use Cases library.'
      )
    }
  }

  // Run any startup Use Cases at the start of the app.
  async start () {
    // try {
    console.log('Async Use Cases have been started.')

    return true
  }
}

export default UseCases

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/ipfs.adapter.unit.js`:

```js
/*
  Unit tests for the IPFS Adapter.
*/

import { assert } from 'chai'

import sinon from 'sinon'
import IPFSLib from '../../../src/adapters/ipfs/ipfs.js'
import create from '../mocks/ipfs-mock.js'
import config from '../../../config/index.js'

// config.isProduction =  true;
describe('#IPFS-adapter', () => {
  let uut
  let sandbox

  beforeEach(() => {
    uut = new IPFSLib()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('#constructor', () => {
    it('should instantiate IPFS Lib in dev mode.', async () => {
      const _uut = new IPFSLib()
      assert.exists(_uut)
      assert.isFunction(_uut.start)
      assert.isFunction(_uut.stop)
    })

    it('should instantiate dev IPFS Lib in production mode.', async () => {
      config.isProduction = true
      const _uut = new IPFSLib()
      assert.exists(_uut)
      assert.isFunction(_uut.start)
      assert.isFunction(_uut.stop)
      config.isProduction = false
    })
  })

  describe('#start', () => {
    it('should return a promise that resolves into an instance of IPFS.', async () => {
      // Mock dependencies.
      uut.create = create

      const result = await uut.start()
      // console.log('result: ', result)

      assert.equal(uut.isReady, true)

      assert.property(result, 'config')
    })

    it('should return a promise that resolves into an instance of IPFS in production mode.', async () => {
      // Mock dependencies.
      uut.create = create
      uut.config.isProduction = true
      const result = await uut.start()
      // console.log('result: ', result)

      assert.equal(uut.isReady, true)

      assert.property(result, 'config')
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        sandbox.stub(uut, 'create').rejects(new Error('test error'))

        await uut.start()

        assert.fail('Unexpected code path.')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#stop', () => {
    it('should stop the IPFS node', async () => {
      // Mock dependencies
      uut.ipfs = {
        stop: () => {
        }
      }

      const result = await uut.stop()

      assert.equal(result, true)
    })
  })

// describe('#rmBlocksDir', () => {
//   it('should delete the /blocks directory', () => {
//     const result = uut.rmBlocksDir()
//
//     assert.equal(result, true)
//   })
//
//   it('should catch and throw an error', () => {
//     try {
//       // Force an error
//       sandbox.stub(uut.fs, 'rmdirSync').throws(new Error('test error'))
//
//       uut.rmBlocksDir()
//
//       assert.fail('Unexpected code path')
//     } catch (err) {
//       assert.equal(err.message, 'test error')
//     }
//   })
// })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/ipfs-index.adapter.unit.js`:

```js
/*
  Unit tests for the index.js file for the IPFS and ipfs-coord libraries.
*/

import { assert } from 'chai'

import sinon from 'sinon'
import IPFSLib from '../../../src/adapters/ipfs/index.js'
// import create from '../mocks/ipfs-mock.js'
import IPFSCoordMock from '../mocks/ipfs-coord-mock.js'

describe('#IPFS-adapter-index', () => {
  let uut
  let sandbox

  beforeEach(() => {
    uut = new IPFSLib()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#start', () => {
    it('should return a promise that resolves into an instance of IPFS.', async () => {
      // Mock dependencies.
      uut.ipfsAdapter = {
        start: async () => {}
      }
      uut.IpfsCoordAdapter = IPFSCoordMock

      const result = await uut.start()

      assert.equal(result, true)
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        sandbox.stub(uut.ipfsAdapter, 'start').rejects(new Error('test error'))

        await uut.start()

        assert.fail('Unexpected code path.')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'test error')
      }
    })

    it('should handle lock-file errors', async () => {
      try {
        // Force an error
        sandbox
          .stub(uut.ipfsAdapter, 'start')
          .rejects(new Error('Lock already being held'))

        // Prevent process from exiting
        sandbox.stub(uut.process, 'exit').returns()

        await uut.start()

        assert.fail('Unexpected code path.')
      } catch (err) {
        assert.include(err.message, 'Lock already being held')
      }
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/wlogger.adapter.unit.js`:

```js
import { assert } from 'chai'
import { Wlogger } from '../../../src/adapters/wlogger.js'
import sinon from 'sinon'

let uut
let sandbox

describe('#wlogger', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()

    uut = new Wlogger()
  })

  describe('#constructor', () => {
    it('should create a new wlogger instance', () => {
      uut = new Wlogger()
      // console.log('uut: ', uut)

      assert.property(uut, 'transport')
    })
  })

  describe('#notifyRotation', () => {
    it('should notify of a log rotation', () => {
      uut.notifyRotation()
    })
  })

  describe('#envronment', () => {
    it('should write to console in non-test environment', () => {
      uut.outputToConsole()
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/logapi.adapter.unit.js`:

```js
import { assert } from 'chai'
import sinon from 'sinon'
import util from 'util'

import LogsApiLib from '../../../src/adapters/logapi.js'
import mockData from '../mocks/log-api-mock.js'

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'
util.inspect.defaultOptions = { depth: 1 }
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const context = {}
let sandbox
let uut
describe('#LogsApiLib', () => {
  beforeEach(() => {
    uut = new LogsApiLib()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#getLogs()', () => {
    it('should return false if password is not provided', async () => {
      try {
        const result = await uut.getLogs()
        assert.property(result, 'success')
        assert.isFalse(result.success)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })

    it('should return log', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'generateFileName').returns(`${__dirname.toString()}/../mocks/adapters/fake-log`)

      const pass = 'test'
      const result = await uut.getLogs(pass)
      // console.log('result', result)

      assert.isTrue(result.success)
      assert.isArray(result.data)
      assert.property(result.data[0], 'message')
      assert.property(result.data[0], 'level')
      assert.property(result.data[0], 'timestamp')
    })

    it('should return false if files are not found!', async () => {
      try {
        sandbox.stub(uut, 'generateFileName').resolves('bad router')

        const password = 'test'

        const result = await uut.getLogs(password)
        // console.log(result)

        assert.isFalse(result.success)
        assert.include(result.data, 'file does not exist')
      } catch (err) {
        console.log('ERRROR', err)
        assert.fail('Unexpected result')
      }
    })

    it('should catch and handle errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut.fs, 'existsSync').throws(new Error('test error'))
        const password = 'test'

        await uut.getLogs(password)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should throw unhandled error', async () => {
      try {
        // Force an error
        sandbox.stub(uut.fs, 'existsSync').throws(new Error('Unhandled error'))
        const password = 'test'

        await uut.getLogs(password)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'Unhandled error')
      }
    })
  })

  describe('#filterLogs()', () => {
    it('should throw error if data is not provided', async () => {
      try {
        await uut.filterLogs()

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'Data must be array')
      }
    })

    it('should throw error if data provided is not an array', async () => {
      try {
        const data = 'data'
        await uut.filterLogs(data)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'Data must be array')
      }
    })

    it('should sort the log data', async () => {
      try {
        const data = mockData.data
        const result = await uut.filterLogs(data)
        assert.isArray(result)
        assert.property(result[1], 'message')
        assert.property(result[1], 'level')
        assert.property(result[1], 'timestamp')
      } catch (err) {
        assert.fail('Unexpected result')
      }
    })

    it('should sort the log data with a limit', async () => {
      try {
        const data = mockData.data
        const limit = 1
        const result = await uut.filterLogs(data, limit)
        assert.isArray(result)
        assert.equal(result.length, limit)
        assert.property(result[0], 'message')
        assert.property(result[0], 'level')
        assert.property(result[0], 'timestamp')
      } catch (err) {
        assert.fail('Unexpected result')
      }
    })
  })

  describe('#generateFileName()', () => {
    it('should return file name', async () => {
      try {
        const fileName = await uut.generateFileName()
        assert.isString(fileName)
        context.fileName = fileName
      } catch (err) {
        assert.fail('Unexpected result')
      }
    })

    it('should throw error if something fails', async () => {
      try {
        uut.config = null
        await uut.generateFileName()
        assert.fail('Unexpected result')
      } catch (err) {
        assert.exists(err)
        assert.isString(err.message)
      }
    })
  })

  describe('#readLines()', () => {
    it('should throw error if fileName is not provided', async () => {
      try {
        await uut.readLines()

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'filename must be a string')
      }
    })

    it('should throw error if fileName provided is not string', async () => {
      try {
        const fileName = true
        await uut.readLines(fileName)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'filename must be a string')
      }
    })

    it('should throw error if the file does not exist', async () => {
      try {
        const fileName = 'test/logs/'
        await uut.readLines(fileName)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'file does not exist')
      }
    })

    it('should ignore fileReader callback errors', async () => {
      // https://sinonjs.org/releases/latest/stubs/
      // About yields
      sandbox.stub(uut.lineReader, 'eachLine').yieldsRight({}, true)

      const fileName = `${__dirname.toString()}/../mocks/adapters/fake-log`

      const result = await uut.readLines(fileName)
      assert.isArray(result)
    })

    it('should return data', async () => {
      const fileName = `${__dirname.toString()}/../mocks/adapters/fake-log`

      const result = await uut.readLines(fileName)

      assert.isArray(result)
      assert.property(result[1], 'message')
      assert.property(result[1], 'level')
      assert.property(result[1], 'timestamp')
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/contact.adapter.unit.js`:

```js
import { assert } from 'chai'
import sinon from 'sinon'
import ContactLib from '../../../src/adapters/contact.js'
let uut
let sandbox

describe('Contact', () => {
  beforeEach(() => {
    uut = new ContactLib()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('sendEmail()', () => {
    it('should throw error if email property is not provided', async () => {
      try {
        const data = {
          formMessage: 'test msg'
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'email' must be a string!")
      }
    })

    it('should throw error if formMessage property is not provided', async () => {
      try {
        const data = {
          email: 'test@email.com'
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'formMessage' must be a string!")
      }
    })

    it('should throw error if email list provided is not a array', async () => {
      try {
        sandbox.stub(uut.nodemailer, 'sendEmail').resolves(true)

        const data = {
          formMessage: 'test msg',
          email: 'test@email.com',
          emailList: 'test@email.com'
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(
          err.message,
          "Property 'emailList' must be a array of emails!"
        )
      }
    })

    it('should throw error if email list provided is a empty array', async () => {
      try {
        sandbox.stub(uut.nodemailer, 'sendEmail').resolves(true)

        const data = {
          formMessage: 'test msg',
          email: 'test@email.com',
          emailList: []
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(
          err.message,
          "Property 'emailList' must be a array of emails!"
        )
      }
    })

    it('should send email to default server email', async () => {
      try {
        sandbox.stub(uut.nodemailer, 'sendEmail').resolves(true)

        const data = {
          formMessage: 'test msg',
          email: 'test@email.com'
        }
        const result = await uut.sendEmail(data)
        assert.isTrue(result)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })

    it('should catch and throw nodemailer lib error', async () => {
      try {
        // Force an error with the database.
        sandbox
          .stub(uut.nodemailer, 'sendEmail')
          .throws(new Error('test error'))

        const data = {
          formMessage: 'test msg',
          email: 'test@email.com'
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should send email to specifics email list', async () => {
      try {
        sandbox.stub(uut.nodemailer, 'sendEmail').resolves(true)

        const data = {
          formMessage: 'test msg',
          email: 'test@email.com',
          emailList: ['testcontact@email.com']
        }
        const result = await uut.sendEmail(data)
        assert.isTrue(result)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/nodemailer.adapter.unit.js`:

```js
/*
  Unit tests for the nodemailer.js library.
*/

// Public npm libraries
import { assert } from 'chai'

import sinon from 'sinon'
import NodeMailer from '../../../src/adapters/nodemailer.js'

let sandbox
let uut

describe('NodeMailer', () => {
  beforeEach(() => {
    uut = new NodeMailer()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('sendEmail()', () => {
    it('should throw error if email property is not provided', async () => {
      try {
        const data = {
          formMessage: 'test msg',
          name: 'test name',
          subject: 'test subject',
          to: ['test2@email.com']
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'email' must be a string!")
      }
    })

    it('should throw error if formMessage property is not provided', async () => {
      try {
        const data = {
          email: 'test@email.com',
          name: 'test name',
          subject: 'test subject',
          to: ['test2@email.com']
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'formMessage' must be a string!")
      }
    })

    it('should throw error if <to> property is not provided', async () => {
      try {
        const data = {
          email: 'test@email.com',
          name: 'test name',
          subject: 'test subject'
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'to' must be a array!")
      }
    })

    it('should throw error if  <to> is wrong type', async () => {
      try {
        const data = {
          email: 'test@email.com',
          formMessage: 'test msg',
          name: 'test name',
          subject: 'test subject',
          to: 'test'
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'to' must be a array!")
      }
    })

    it('should throw error if subject Property is not provided', async () => {
      try {
        const data = {
          email: 'test@email.com',
          formMessage: 'test msg',
          name: 'test name',
          to: ['test2@email.com']
        }
        await uut.sendEmail(data)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'subject' must be a string!")
      }
    })

    it('should send email with default html data', async () => {
      try {
        sandbox
          .stub(uut.transporter, 'sendMail')
          .resolves({ messageId: 'messageId' })

        const data = {
          email: 'test@email.com',
          formMessage: 'test msg',
          to: ['test2@email.com'],
          subject: 'test subject'
        }

        const info = await uut.sendEmail(data)

        assert.isObject(info)
        assert.isString(info.messageId)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })

    it('should send email if htmlData is provided', async () => {
      try {
        sandbox
          .stub(uut.transporter, 'sendMail')
          .resolves({ messageId: 'messageId' })
        const data = {
          email: 'test@email.com',
          formMessage: 'test msg',
          name: 'test name',
          to: ['test2@email.com'],
          subject: 'test subject',
          htmlData: '<p> Unit test </p>'
        }
        const info = await uut.sendEmail(data)
        assert.isObject(info)
        assert.isString(info.messageId)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })

  describe('validateEmailArray()', () => {
    it('should throw error if email list is not provided ', async () => {
      try {
        await uut.validateEmailArray()
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'emailList' must be a array!")
      }
    })

    it('should throw error if email list is empty', async () => {
      try {
        const emailList = []
        await uut.validateEmailArray(emailList)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'emailList' cant be empty!")
      }
    })

    it('should return true ', async () => {
      try {
        const emailList = ['test@email.com', 'simple@email.com']
        const result = await uut.validateEmailArray(emailList)
        assert.isTrue(result)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })

  describe('getHtmlFromObject()', () => {
    it('should throw error if the input  is not provided ', async () => {
      try {
        await uut.getHtmlFromObject()
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'objectData' must be a object!")
      }
    })

    it('should throw error if the object is empty', async () => {
      try {
        await uut.getHtmlFromObject({})
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'subject' must be a string!")
      }
    })

    it('should throw error if "formMessage" property is not provided', async () => {
      try {
        const obj = {
          subject: 'unit'
        }
        await uut.getHtmlFromObject(obj)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, "Property 'formMessage' must be a string!")
      }
    })

    it('should return the html', async () => {
      try {
        const obj = {
          subject: 'unit ',
          formMessage: 'test',
          value1: 'value1',
          value2: 'value2',
          value3: 'value3'
        }
        const result = await uut.getHtmlFromObject(obj)
        assert.isString(result)
        assert.include(result, '<p>', 'expect html tag')
        assert.include(result, '</p>', 'expect html tag')
        assert.include(
          result,
          'value1',
          'Expect value 1 is included in the html'
        )
        assert.include(result, 'value2', 'expect is included in the html')
        assert.include(result, 'value3', 'expect is included in the html')
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/json-files.adapter.unit.js`:

```js
import { assert } from 'chai'
import fs from 'fs'
import sinon from 'sinon'
import util from 'util'

import JsonFiles from '../../../src/adapters/json-files.js'

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'
util.inspect.defaultOptions = { depth: 1 }
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const JSON_FILE = 'test-json-file.json'
const JSON_PATH = `${__dirname.toString()}/${JSON_FILE}`

const deleteFile = filepath => {
  try {
    // Delete state if exist
    fs.unlinkSync(filepath)
  } catch (error) {}
}
let sandbox
let uut
describe('JsonFiles', () => {
  const obj = {
    json: 'file'
  }
  beforeEach(() => {
    uut = new JsonFiles()
    sandbox = sinon.createSandbox()
  })
  afterEach(() => sandbox.restore())

  after(() => {
    deleteFile(JSON_PATH)
  })
  describe('writeJSON()', () => {
    it('should throw error if  inputs is not provided', async () => {
      try {
        await uut.writeJSON()
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'obj property is required')
      }
    })
    it('should throw error if  filename property is not provided', async () => {
      try {
        await uut.writeJSON(obj)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'fileName property must be a string')
      }
    })
    it('should throw error if  filename property is not string', async () => {
      try {
        await uut.writeJSON(obj, 1)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'fileName property must be a string')
      }
    })
    it('should throw error if fs library return an error', async () => {
      try {
        // https://sinonjs.org/releases/latest/stubs/
        // About yields
        sandbox.stub(uut.fs, 'writeFile').yields(new Error('test error'))

        await uut.writeJSON(obj, JSON_PATH)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
    it('should write a json file', async () => {
      try {
        await uut.writeJSON(obj, JSON_PATH)

        assert.isTrue(fs.existsSync(JSON_PATH))
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })

  describe('readJSON()', () => {
    it('should throw error if  filename property is not provided', async () => {
      try {
        await uut.readJSON(obj)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'fileName property must be a string')
      }
    })
    it('should throw error if  filename property is not string', async () => {
      try {
        await uut.readJSON(obj, 1)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'fileName property must be a string')
      }
    })
    it('should throw error if fs library return an error', async () => {
      try {
        // https://sinonjs.org/releases/latest/stubs/
        // About yields
        sandbox.stub(uut.fs, 'readFile').yields(new Error('test error'))

        await uut.readJSON(JSON_PATH)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
    it('should throw error if file not found', async () => {
      try {
        const testError = new Error('test error')
        testError.code = 'ENOENT'

        sandbox.stub(uut.fs, 'readFile').yields(testError)

        await uut.readJSON(JSON_PATH)
        assert(false, 'Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should read a json file', async () => {
      try {
        const result = await uut.readJSON(JSON_PATH)

        const objKeys = Object.keys(obj)
        const resultKeys = Object.keys(result)

        assert.isObject(result)
        assert.equal(objKeys.length, resultKeys.length)
      } catch (err) {
        assert(false, 'Unexpected result')
      }
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/adapters-index-unit.js`:

```js
/*
  Unit tests for the adapters index.js library
*/

// Global npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local libraries
import Adapters from '../../../src/adapters/index.js'

describe('#adapters', () => {
  let uut, sandbox

  beforeEach(() => {
    uut = new Adapters()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('#start', () => {
    it('should start the async adapters', async () => {
      // Mock dependencies
      uut.config.getJwtAtStartup = true
      uut.config.useIpfs = true
      uut.config.env = 'not-a-test'
      sandbox.stub(uut.fullStackJwt, 'instanceBchjs').resolves()
      sandbox.stub(uut, 'initIndexer').returns()

      const result = await uut.start()

      assert.equal(result, true)
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        uut.config.getJwtAtStartup = false
        uut.config.env = 'dev'
        sandbox.stub(uut, 'initIndexer').throws(new Error('test error'))

        await uut.start()

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#initIndexer', () => {
    it('should initialize the indexer', () => {
      // Mock dependencies
      sandbox.stub(uut.slpIndexer, 'openDatabases').returns()
      sandbox.stub(uut.slpIndexer, 'encapsulateDeps').returns()

      const result = uut.initIndexer()

      assert.equal(result, true)
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/slp-indexer/tx-types/genesis.unit.js`:

```js
/*
  Unit tests for GENESIS tx indexing library genesis.js
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'
import cloneDeep from 'lodash.clonedeep'
import BigNumber from 'bignumber.js'

// Local libraries
import Genesis from '../../../../../src/adapters/slp-indexer/tx-types/genesis.js'
import MockLevel from '../../../../unit/mocks/leveldb-mock.js'
import mockDataLib from '../../../../unit/mocks/genesis-mock.js'

describe('#genesis.js', () => {
  let uut, sandbox, mockData

  beforeEach(() => {
    const addrDb = new MockLevel()
    const tokenDb = new MockLevel()
    const utxoDb = new MockLevel()

    uut = new Genesis({ addrDb, tokenDb, utxoDb })

    mockData = cloneDeep(mockDataLib)

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw error if address DB is not passed in', () => {
      try {
        uut = new Genesis()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Instance of address DB required when instantiating genesis.js')
      }
    })

    it('should throw error if token DB is not passed in', () => {
      try {
        const addrDb = new MockLevel()

        uut = new Genesis({ addrDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Instance of token DB required when instantiating genesis.js')
      }
    })

    it('should throw error if utxo DB is not passed in', () => {
      try {
        const addrDb = new MockLevel()
        const tokenDb = new MockLevel()

        uut = new Genesis({ addrDb, tokenDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Instance of utxo DB required when instantiating genesis.js')
      }
    })
  })

  describe('#addTokenToDB', () => {
    it('should add a new token to the database', async () => {
      const result = await uut.addTokenToDB(mockData.genesisData01)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that expected values exist.
      assert.equal(result.decimals, 8)
      assert.equal(result.mintBatonIsActive, true)
      assert.equal(result.blockCreated, 543751)
      assert.equal(result.totalBurned, 0)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.addTokenToDB()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })

    it('should handle mint baton is set to 0', async () => {
      const result = await uut.addTokenToDB(mockData.genesisData02)
      console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that expected values exist.
      assert.equal(result.decimals, 8)
      assert.equal(result.mintBatonIsActive, false)
      assert.equal(result.blockCreated, 600518)
      assert.equal(result.totalBurned, 0)
    })

    it('should add an NFT array for Group tokens', async () => {
      mockData.genesisData01.slpData.tokenType = 129
      const result = await uut.addTokenToDB(mockData.genesisData01)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that expected values exist.
      assert.property(result, 'nfts')
      assert.isArray(result.nfts)
    })
  })

  describe('#updateBalanceFromGenesis', () => {
    it('should update addr object', () => {
      // Convert slpData to BigNumber
      mockData.genesisData01.slpData.qty = new BigNumber(mockData.genesisData01.slpData.qty)

      const result = uut.updateBalanceFromGenesis(mockData.addrMock, mockData.genesisData01.slpData)
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should skip token not associated with this tx', () => {
      // Convert slpData to BigNumber
      mockData.genesisData01.slpData.qty = new BigNumber(mockData.genesisData01.slpData.qty)

      // Force function to skip this token entry.
      mockData.addrMock.balances.unshift({
        tokenId: '12345',
        qty: '10000000000000000'
      })

      const result = uut.updateBalanceFromGenesis(mockData.addrMock, mockData.genesisData01.slpData)
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.updateBalanceFromGenesis()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })

  describe('#addReceiverAddress', () => {
    it('should add reciever addresses to database', async () => {
      // Force code to generate new address.
      sandbox.stub(uut.addrDb, 'get').rejects(new Error('not in db'))

      const result = await uut.addReceiverAddress(mockData.genesisData01)
      // console.log('result: ', result)

      assert.equal(result.utxos.length, 1)
      assert.equal(result.txs.length, 1)
      assert.equal(result.balances.length, 1)
    })

    // Corner case based on TXID:
    // 8a2aa5bb691a0ba15cce0d2a5b4aade6f43d39e10dc0a10d89dd6e7938a10c63
    it('should handle corner case', async () => {
      // Force code to generate new address.
      sandbox.stub(uut.addrDb, 'get').rejects(new Error('not in db'))

      // Force corner case by deleting scriptPubKey.
      delete mockData.genesisData01.txData.vout[1].scriptPubKey

      const result = await uut.addReceiverAddress(mockData.genesisData01)
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.addReceiverAddress()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })

  describe('#addBatonAddress', () => {
    it('should add baton address to DB', async () => {
      // Force code to generate new address.
      sandbox.stub(uut.addrDb, 'get').rejects(new Error('not in db'))

      const result = await uut.addBatonAddress(mockData.genesisData01)
      // console.log('result: ', result)

      assert.equal(result.utxos.length, 1)
      assert.equal(result.txs.length, 1)
      assert.equal(result.balances.length, 0)
    })

    it('should exit if mint baton is dead-ended', async () => {
      // Force mint baton to be null.
      mockData.genesisData01.slpData.mintBatonVout = null

      const result = await uut.addBatonAddress(mockData.genesisData01)
      // console.log('result: ', result)

      assert.equal(result, undefined)
    })

    it('should handle corner-case of mint vout = 1', async () => {
      // Force mint baton to be null.
      mockData.genesisData01.slpData.mintBatonVout = 1

      const result = await uut.addBatonAddress(mockData.genesisData01)
      // console.log('result: ', result)

      assert.equal(result, undefined)
    })

    it('should handle corner-case of mint vout does not exist', async () => {
      // Force mint baton to be null.
      mockData.genesisData01.slpData.mintBatonVout = 10

      const result = await uut.addBatonAddress(mockData.genesisData01)
      // console.log('result: ', result)

      assert.equal(result, undefined)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.addBatonAddress()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })

  describe('#processTx', () => {
    it('should execute lower functions', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'addTokenToDB').resolves()
      sandbox.stub(uut, 'addReceiverAddress').resolves()
      sandbox.stub(uut, 'addBatonAddress').resolves()

      const result = await uut.processTx(mockData.genesisData01)
      assert.equal(result, true)
    })

    it('should catch and throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut, 'addTokenToDB').rejects(new Error('test error'))

        await uut.processTx(mockData.genesisData01)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'test error')
      }
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/slp-indexer/tx-types/nft-genesis.unit.js`:

```js
/*
  Unit tests for NFT GENESIS tx indexing library nft-genesis.js
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'
import cloneDeep from 'lodash.clonedeep'
import BigNumber from 'bignumber.js'

// Local libraries
import NftGenesis from '../../../../../src/adapters/slp-indexer/tx-types/nft-genesis.js'
import MockLevel from '../../../../unit/mocks/leveldb-mock.js'
import mockDataLib from '../../../../unit/mocks/nft-genesis-mock.js'
import Cache from '../../../../../src/adapters/slp-indexer/lib/cache.js'

describe('#nft-genesis.js', () => {
  let uut, sandbox, mockData

  beforeEach(() => {
    const addrDb = new MockLevel()
    const tokenDb = new MockLevel()
    const utxoDb = new MockLevel()
    const txDb = new MockLevel()

    const cache = new Cache({ txDb })

    uut = new NftGenesis({ addrDb, tokenDb, utxoDb, cache, txDb })

    mockData = cloneDeep(mockDataLib)

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw error if address DB is not passed in', () => {
      try {
        uut = new NftGenesis()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Instance of address DB required when instantiating nft-genesis.js')
      }
    })

    it('should throw error if token DB is not passed in', () => {
      try {
        const addrDb = new MockLevel()

        uut = new NftGenesis({ addrDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Instance of token DB required when instantiating nft-genesis.js')
      }
    })

    it('should throw error if utxo DB is not passed in', () => {
      try {
        const addrDb = new MockLevel()
        const tokenDb = new MockLevel()

        uut = new NftGenesis({ addrDb, tokenDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Instance of utxo DB required when instantiating nft-genesis.js')
      }
    })

    it('should throw error if cache is not passed in', () => {
      try {
        const addrDb = new MockLevel()
        const tokenDb = new MockLevel()
        const utxoDb = new MockLevel()

        uut = new NftGenesis({ addrDb, tokenDb, utxoDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Must pass cache instance when instantiating nft-genesis.js')
      }
    })

    it('should throw error if tx DB is not passed in', () => {
      try {
        const addrDb = new MockLevel()
        const tokenDb = new MockLevel()
        const utxoDb = new MockLevel()
        const txDb = new MockLevel()
        const cache = new Cache({ txDb })

        uut = new NftGenesis({ addrDb, tokenDb, utxoDb, cache })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Must pass transaction DB instance when instantiating nft-genesis.js')
      }
    })
  })

  describe('#validateInputs', () => {
    it('should return true for valid transaction', async () => {
      // Mock dependencies
      sandbox.stub(uut.cache, 'get').resolves(mockData.groupTx01)

      const data = {
        txData: mockData.nftGenesisTx01
      }

      const result = await uut.validateInputs(data)
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should return false if vin[0] does not include a Group token', async () => {
      // Force code path
      mockData.nftGenesisTx01.vin[0].tokenQty = 0

      const data = {
        txData: mockData.nftGenesisTx01
      }

      const result = await uut.validateInputs(data)
      // console.log('result: ', result)

      assert.equal(result, false)
    })

    it('should return false if vin[0] does not include a Group token', async () => {
      // Force code path
      mockData.groupTx01.tokenType = 1
      sandbox.stub(uut.cache, 'get').resolves(mockData.groupTx01)

      const data = {
        txData: mockData.nftGenesisTx01
      }

      const result = await uut.validateInputs(data)
      // console.log('result: ', result)

      assert.equal(result, false)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.validateInputs()

        assert.fail('Unexpected code result')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot destructure')
      }
    })
  })

  describe('#subtractBalanceFromSend', () => {
    it('should subtract a balance from an address object', () => {
      let result = uut.subtractBalanceFromSend(
        mockData.addrData01,
        mockData.utxo01
      )
      result = result.toString()
      // console.log('result: ', result)

      assert.equal(result, '234123')
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.subtractBalanceFromSend()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })

  describe('#subtractTokensFromInputAddr', () => {
    it('should subtract tokens from the input address', async () => {
      // Force database to return previous address data
      sandbox.stub(uut.addrDb, 'get').resolves(mockData.addrData02)

      const data = {
        txData: mockData.nftGenesisTx01,
        blockHeight: 730295
      }

      const { spentBN, groupTokenId } = await uut.subtractTokensFromInputAddr(data)
      // result = result.toString()
      // console.log('groupTokenId: ', groupTokenId)

      assert.equal(spentBN.toString(), '5')
      assert.equal(groupTokenId, '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59')
    })

    it('should throw an error if there are no UTXOs to delete', async () => {
      try {
        // Force DAG validation to succeed
        // sandbox.stub(uut.dag, 'crawlDag').resolves({ isValid: true })

        // Force UTXO to fail filter
        mockData.addrData02.utxos[0].txid = 'bad-txid'

        // Force database to return previous address data
        sandbox.stub(uut.addrDb, 'get').resolves(mockData.addrData02)

        const data = {
          txData: mockData.nftGenesisTx01,
          blockHeight: 730295
        }

        await uut.subtractTokensFromInputAddr(data)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Input UTXO with TXID')
      }
    })

    it('should throw error if NFT does not have Group token as input', async () => {
      try {
        // Force error
        mockData.nftGenesisTx01.vin[0].tokenQty = 0

        const data = {
          txData: mockData.nftGenesisTx01,
          blockHeight: 730295
        }

        await uut.subtractTokensFromInputAddr(data)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)

        assert.include(err.message, 'NFT does not have Group token as input.')
      }
    })

    it('should throw an error if utxo can not be found in database', async () => {
      try {
        // Force UTXO to fail filter
        const badAddrData = cloneDeep(mockData.addrData02)
        badAddrData.utxos[0].txid = 'bad-txid'

        // Mock response from addr database
        sandbox
          .stub(uut.addrDb, 'get')
          .onCall(0)
          .resolves(mockData.addrData02)
          .onCall(1)
          .resolves(badAddrData)

        const data = {
          txData: mockData.nftGenesisTx01,
          blockHeight: 730295
        }

        await uut.subtractTokensFromInputAddr(data)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Could not find UTXO in address')
      }
    })
  })

  describe('#addTokenToDB', () => {
    it('should add a new token to the database', async () => {
      // Mock input data
      const data = {
        slpData: mockData.slpData01,
        blockHeight: 730295
      }

      // Mock Group token from database
      sandbox.stub(uut.tokenDb, 'get').resolves({ nfts: [] })

      const result = await uut.addTokenToDB(data, '123')
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that expected values exist.
      assert.equal(result.decimals, 0)
      assert.equal(result.mintBatonIsActive, false)
      assert.equal(result.blockCreated, 730295)
      assert.equal(result.totalBurned, 0)
      assert.equal(result.totalMinted, 1)
      assert.equal(result.tokensInCirculationStr, '1')
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.addTokenToDB()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })

  describe('#updateBalanceFromGenesis', () => {
    it('should update addr object', () => {
      // Convert slpData to BigNumber
      mockData.slpData01.qty = new BigNumber(mockData.slpData01.qty)

      const result = uut.updateBalanceFromGenesis(mockData.addrData02, mockData.slpData01)
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.updateBalanceFromGenesis()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })

  describe('#addReceiverAddress', () => {
    it('should add reciever addresses to database', async () => {
      // Force code to generate new address.
      sandbox.stub(uut.addrDb, 'get').rejects(new Error('not in db'))

      const data = {
        slpData: mockData.slpData01,
        blockHeight: 730295,
        txData: mockData.nftGenesisTx01
      }

      const result = await uut.addReceiverAddress(data)
      // console.log('result: ', result)

      assert.equal(result.utxos.length, 1)
      assert.equal(result.txs.length, 1)
      assert.equal(result.balances.length, 1)
    })

    // Corner case based on TXID:
    // 8a2aa5bb691a0ba15cce0d2a5b4aade6f43d39e10dc0a10d89dd6e7938a10c63
    it('should handle corner case', async () => {
      // Force code to generate new address.
      sandbox.stub(uut.addrDb, 'get').rejects(new Error('not in db'))

      // Force corner case by deleting scriptPubKey.
      delete mockData.nftGenesisTx01.vout[1].scriptPubKey

      const data = {
        slpData: mockData.slpData01,
        blockHeight: 730295,
        txData: mockData.nftGenesisTx01
      }

      const result = await uut.addReceiverAddress(data)
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.addReceiverAddress()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })

    it('should get reciever addresses from database', async () => {
      // Force code to generate new address.
      sandbox.stub(uut.addrDb, 'get').resolves({
        utxos: [],
        txs: [],
        balances: []
      })

      const data = {
        slpData: mockData.slpData01,
        blockHeight: 730295,
        txData: mockData.nftGenesisTx01
      }

      const result = await uut.addReceiverAddress(data)
      // console.log('result: ', result)

      assert.equal(result.utxos.length, 1)
      assert.equal(result.txs.length, 1)
      assert.equal(result.balances.length, 1)
    })
  })

  describe('#processTx', () => {
    it('should execute lower functions', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'validateInputs').resolves(true)
      sandbox.stub(uut, 'subtractTokensFromInputAddr').resolves({ spentBN: '1', groupTokenId: 'fakeId' })
      sandbox.stub(uut, 'addTokenToDB').resolves()
      sandbox.stub(uut, 'addReceiverAddress').resolves()

      const data = {
        slpData: mockData.slpData01,
        blockHeight: 730295,
        txData: mockData.nftGenesisTx01
      }

      const result = await uut.processTx(data)

      assert.equal(result, true)
    })

    it('should return false for invalid tx inputs', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'validateInputs').resolves(false)

      const data = {
        slpData: mockData.slpData01,
        blockHeight: 730295,
        txData: mockData.nftGenesisTx01
      }

      const result = await uut.processTx(data)

      assert.equal(result, false)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.processTx()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/slp-indexer/tx-types/mint.unit.js`:

```js
/*
  Unit tests for GENESIS tx indexing library genesis.js
*/

// Public npm libraries
// const assert = require('chai').assert
// const sinon = require('sinon')
// const cloneDeep = require('lodash.clonedeep')
// const BigNumber = require('bignumber.js')
import { assert } from 'chai'
import sinon from 'sinon'
import cloneDeep from 'lodash.clonedeep'
import BigNumber from 'bignumber.js'

// Local libraries
// const Mint = require('../../../../../src/adapters/slp-indexer/tx-types/mint')
// const Cache = require('../../../../../src/adapters/slp-indexer/lib/cache')
// const MockLevel = require('../../../../unit/mocks/leveldb-mock')
// const mockDataLib = require('../../../../unit/mocks/mint-mock')
import Mint from '../../../../../src/adapters/slp-indexer/tx-types/mint.js'
import Cache from '../../../../../src/adapters/slp-indexer/lib/cache.js'
import MockLevel from '../../../../unit/mocks/leveldb-mock.js'
import mockDataLib from '../../../../unit/mocks/mint-mock.js'

describe('#mint.js', () => {
  let uut, sandbox, mockData

  beforeEach(() => {
    const addrDb = new MockLevel()
    const tokenDb = new MockLevel()
    const txDb = new MockLevel()
    const utxoDb = new MockLevel()
    txDb.get = () => {
      throw new Error('not in db')
    }

    const cache = new Cache({ txDb })

    uut = new Mint({ cache, addrDb, tokenDb, txDb, utxoDb })

    mockData = cloneDeep(mockDataLib)

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw error if cache is not passed in', () => {
      try {
        uut = new Mint()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Must pass cache instance when instantiating mint.js')
      }
    })

    it('should throw error if address DB is not passed in', () => {
      try {
        const txDb = new MockLevel()
        const cache = new Cache({ txDb })

        uut = new Mint({ cache })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Must pass address DB instance when instantiating mint.js')
      }
    })

    it('should throw error if token DB is not passed in', () => {
      try {
        const txDb = new MockLevel()
        const cache = new Cache({ txDb })
        const addrDb = new MockLevel()

        uut = new Mint({ cache, addrDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Must pass token DB instance when instantiating mint.js')
      }
    })

    it('should throw error if transaction DB is not passed in', () => {
      try {
        const txDb = new MockLevel()
        const cache = new Cache({ txDb })
        const addrDb = new MockLevel()
        const tokenDb = new MockLevel()

        uut = new Mint({ cache, addrDb, tokenDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Must pass transaction DB instance when instantiating mint.js')
      }
    })

    it('should throw error if utxo DB is not passed in', () => {
      try {
        const txDb = new MockLevel()
        const cache = new Cache({ txDb })
        const addrDb = new MockLevel()
        const tokenDb = new MockLevel()

        uut = new Mint({ cache, addrDb, tokenDb, txDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Must pass utxo DB instance when instantiating mint.js')
      }
    })
  })

  describe('#removeBatonInAddr', () => {
    it('should remove mint baton from input address', async () => {
      // Mock database
      sandbox.stub(uut.addrDb, 'get')
      // First call should throw an error
        .onCall(0).rejects(new Error('not found'))
      // Second call returns baton input data.
        .onCall(1).resolves(mockData.mintAddrDb01)

      const result = await uut.removeBatonInAddr(mockData.mintData)

      assert.equal(result, true)
    })

    it('should throw error if baton is not found', async () => {
      try {
      // Change the token ID of the mock data, to force the desired code path.
        mockData.mintAddrDb01.utxos[0].txid = 'fake-txid'

        // Mock database
        sandbox.stub(uut.addrDb, 'get')
        // First call should throw an error
          .onCall(0).rejects(new Error('not found'))
        // Second call returns baton input data.
          .onCall(1).resolves(mockData.mintAddrDb01)

        await uut.removeBatonInAddr(mockData.mintData)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Minting baton not found. UTXO is not in database.')
      }
    })
  })

  describe('#addTokensFromOutput', () => {
    it('should update address balance with newly minted tokens', async () => {
      // Force generation of a new address
      sandbox.stub(uut.addrDb, 'get').rejects(new Error('not found'))

      const result = await uut.addTokensFromOutput(mockData.mintData)
      assert.equal(result, true)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.addTokensFromOutput()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })

  describe('#updateBalanceFromMint', () => {
    it('should add new balances to the address', async () => {
      const result = await uut.updateBalanceFromMint(mockData.mintAddrDb02, mockData.mintData.slpData)
      // console.log(`mockData.mintAddrDb02: ${JSON.stringify(mockData.mintAddrDb02, null, 2)}`)

      assert.equal(result, true)
      assert.equal(mockData.mintAddrDb02.balances[0].qty, '234123')
    })

    it('should add new tokens to existing balance', async () => {
      // Force address to have a balance of a different token
      mockData.mintAddrDb02.balances.push({
        tokenId: 'abc123'
      })
      // Force address to have an existing balance
      mockData.mintAddrDb02.balances.push({
        tokenId: mockData.mintData.slpData.tokenId,
        qty: new BigNumber(10)
      })

      const result = await uut.updateBalanceFromMint(mockData.mintAddrDb02, mockData.mintData.slpData)
      // console.log(`mockData.mintAddrDb02: ${JSON.stringify(mockData.mintAddrDb02, null, 2)}`)

      assert.equal(result, true)
      assert.equal(mockData.mintAddrDb02.balances[1].qty, '234133')
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.updateBalanceFromMint()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })

  describe('#updateTokenStats', () => {
    it('should update token stats', async () => {
      // Simulate token stats in the database
      sandbox.stub(uut.tokenDb, 'get').resolves({
        tokensInCirculationBN: new BigNumber(1),
        tokensInCirculationStr: '1',
        txs: []
      })

      const result = await uut.updateTokenStats(mockData.mintData)
      // console.log('result: ', result)

      assert.equal(result.tokensInCirculationStr, '234124')
      assert.equal(result.mintBatonIsActive, true)
    })

    it('should mark baton as inactive', async () => {
      // Simulate token stats in the database
      sandbox.stub(uut.tokenDb, 'get').resolves({
        tokensInCirculationBN: new BigNumber(1),
        tokensInCirculationStr: '1',
        txs: []
      })

      // Force mint baton to be inactive
      mockData.mintData.slpData.mintBatonVout = 0

      const result = await uut.updateTokenStats(mockData.mintData)
      // console.log('result: ', result)

      assert.equal(result.tokensInCirculationStr, '234124')
      assert.equal(result.mintBatonIsActive, false)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.updateTokenStats()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })

  describe('#addBatonOutAddr', () => {
    it('should add the baton to the output address', async () => {
      // Force generation of a new address
      sandbox.stub(uut.addrDb, 'get').rejects(new Error('not found'))

      const result = await uut.addBatonOutAddr(mockData.mintData)
      // console.log('result: ', result)

      // Assert that the baton was placed in the new output address.
      assert.equal(result.utxos[0].type, 'baton')
    })

    it('should return if the mint baton is null', async () => {
      // Force mint baton to be dead ended.
      mockData.mintData.slpData.mintBatonVout = 0

      const result = await uut.addBatonOutAddr(mockData.mintData)

      assert.equal(result, undefined)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.addBatonOutAddr()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })

  describe('#processTx', () => {
    it('should exit if SLP tx fails DAG validation', async () => {
      // Force DAG validation to fail
      sandbox.stub(uut.dag, 'crawlDag').resolves({ isValid: false })

      const result = await uut.processTx(mockData.mintData)

      assert.equal(result, false)
    })

    it('should successfully process Mint TX', async () => {
      // Mock dependencies
      sandbox.stub(uut.dag, 'crawlDag').resolves({ isValid: true })
      sandbox.stub(uut, 'removeBatonInAddr').resolves()
      sandbox.stub(uut, 'addTokensFromOutput').resolves()
      sandbox.stub(uut, 'updateTokenStats').resolves()
      sandbox.stub(uut, 'addBatonOutAddr').resolves()

      const result = await uut.processTx(mockData.mintData)

      assert.equal(result, true)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.processTx()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot read')
      }
    })

    it('should exit if input tx has invalid mint baton', async () => {
      // Force DAG validation to pass
      sandbox.stub(uut.dag, 'crawlDag').resolves({ isValid: true })

      // Force baton input to fail
      sandbox.stub(uut, 'findBatonInput').returns(null)

      const result = await uut.processTx(mockData.mintData)

      assert.equal(result, false)
    })
  })

  describe('#findBatonInput', () => {
    it('should return baton vin', () => {
      const result = uut.findBatonInput(mockData.mintData)
      // console.log('result: ', result)

      assert.equal(result, 1)
    })

    it('should return null for invalid mint tx', () => {
      const result = uut.findBatonInput(mockData.invalidMintData01)
      // console.log('result: ', result)

      assert.equal(result, null)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.findBatonInput()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/slp-indexer/tx-types/send.unit.js`:

```js
/*
  Unit tests for SEND tx indexing library send.js
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'
import cloneDeep from 'lodash.clonedeep'
import BigNumber from 'bignumber.js'

// Local libraries
import Send from '../../../../../src/adapters/slp-indexer/tx-types/send.js'
import Cache from '../../../../../src/adapters/slp-indexer/lib/cache.js'
import MockLevel from '../../../../unit/mocks/leveldb-mock.js'
import mockDataLib from '../../../../unit/mocks/send-mock.js'

describe('#send.js', () => {
  let uut, sandbox, mockData

  beforeEach(() => {
    const addrDb = new MockLevel()
    const tokenDb = new MockLevel()
    const txDb = new MockLevel()
    const utxoDb = new MockLevel()
    txDb.get = () => {
      throw new Error('not in db')
    }

    const cache = new Cache({ txDb })

    uut = new Send({ cache, addrDb, tokenDb, txDb, utxoDb })

    mockData = cloneDeep(mockDataLib)

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw error if cache is not passed in', () => {
      try {
        uut = new Send()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(
          err.message,
          'Must pass cache instance when instantiating send.js'
        )
      }
    })

    it('should throw error if address DB is not passed in', () => {
      try {
        const txDb = new MockLevel()
        const cache = new Cache({ txDb })

        uut = new Send({ cache })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(
          err.message,
          'Must pass address DB instance when instantiating send.js'
        )
      }
    })

    it('should throw error if token DB is not passed in', () => {
      try {
        const txDb = new MockLevel()
        const cache = new Cache({ txDb })
        const addrDb = new MockLevel()

        uut = new Send({ cache, addrDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(
          err.message,
          'Must pass token DB instance when instantiating send.js'
        )
      }
    })

    it('should throw error if transaction DB is not passed in', () => {
      try {
        const txDb = new MockLevel()
        const cache = new Cache({ txDb })
        const addrDb = new MockLevel()
        const tokenDb = new MockLevel()

        uut = new Send({ cache, addrDb, tokenDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(
          err.message,
          'Must pass transaction DB instance when instantiating send.js'
        )
      }
    })

    it('should throw error if utxo DB is not passed in', () => {
      try {
        const txDb = new MockLevel()
        const cache = new Cache({ txDb })
        const addrDb = new MockLevel()
        const tokenDb = new MockLevel()

        uut = new Send({ cache, addrDb, tokenDb, txDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(
          err.message,
          'Must pass utxo DB instance when instantiating send.js'
        )
      }
    })
  })

  describe('#subtractBalanceFromSend', () => {
    it('should subtract a balance from an address object', () => {
      let result = uut.subtractBalanceFromSend(
        mockData.addrData01,
        mockData.utxo01
      )
      result = result.toString()
      // console.log('result: ', result)

      assert.equal(result, '234123')
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.subtractBalanceFromSend()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })

  describe('#subtractTokensFromInputAddr', () => {
    it('should subtract tokens from the input address', async () => {
      // Force DAG validation to succeed
      sandbox.stub(uut.dag, 'crawlDag').resolves({ isValid: true })

      // Force database to return previous address data
      sandbox.stub(uut.addrDb, 'get').resolves(mockData.addrData01)

      let result = await uut.subtractTokensFromInputAddr(mockData.sendData01)
      result = result.toString()
      // console.log('result: ', result)

      assert.equal(result, '234123')
    })

    it('should skip inputs without a matching token ID', async () => {
      // Force input token ID to be different
      mockData.sendData01.txData.vin[1].tokenId = 'fake-token-id'

      let result = await uut.subtractTokensFromInputAddr(mockData.sendData01)
      result = result.toString()
      // console.log('result: ', result)

      assert.equal(result, '0')
    })

    it('should mark token qty as 0 if input fails DAG validation', async () => {
      // Force DAG validation to fail
      sandbox.stub(uut.dag, 'crawlDag').resolves({ isValid: false })

      const result = await uut.subtractTokensFromInputAddr(mockData.sendData01)
      console.log('result: ', result)
    })

    it('should throw an error if there are no UTXOs to delete', async () => {
      try {
        // Force DAG validation to succeed
        sandbox.stub(uut.dag, 'crawlDag').resolves({ isValid: true })

        // Force UTXO to fail filter
        mockData.addrData01.utxos[0].txid = 'bad-txid'

        // Force database to return previous address data
        sandbox.stub(uut.addrDb, 'get').resolves(mockData.addrData01)

        await uut.subtractTokensFromInputAddr(mockData.sendData01)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Input UTXO with TXID')
      }
    })

    it('should throw an error if utxo can not be found in database', async () => {
      try {
        // Force DAG validation to succeed
        sandbox.stub(uut.dag, 'crawlDag').resolves({ isValid: true })

        // Force UTXO to fail filter
        const badAddrData = cloneDeep(mockData.addrData01)
        badAddrData.utxos[0].txid = 'bad-txid'

        // Mock response from addr database
        sandbox
          .stub(uut.addrDb, 'get')
          .onCall(0)
          .resolves(mockData.addrData01)
          .onCall(1)
          .resolves(badAddrData)

        await uut.subtractTokensFromInputAddr(mockData.sendData01)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Could not find UTXO in address')
      }
    })

    // This test comes from real-world data and a bug where it was noticed that
    // send after genesis was not properly deleting the original UTXO.
    it('should subtract tokens using real-world data', async () => {
      // Force DAG validation to succeed
      sandbox.stub(uut.dag, 'crawlDag').resolves({ isValid: true })

      // Force database to return previous address data
      sandbox.stub(uut.addrDb, 'get').resolves(mockData.addrData02)

      let result = await uut.subtractTokensFromInputAddr(mockData.sendData02)
      result = result.toString()
      // console.log('result: ', result)

      assert.equal(result, '0')
    })

    it('should skip an input if it was marked invalid', async () => {
      // Force DAG validation to succeed
      sandbox.stub(uut.dag, 'crawlDag').resolves({ isValid: true })

      // Force database to return a TX from the database.
      sandbox.stub(uut.txDb, 'get').resolves(mockData.invalidTxFromDb01)

      // Force database to return previous address data
      sandbox.stub(uut.addrDb, 'get').resolves(mockData.addrData01)

      let result = await uut.subtractTokensFromInputAddr(mockData.sendData01)
      result = result.toString()
      // console.log('result: ', result)

      assert.equal(result, '0')
    })
  })

  describe('#addUtxoToOutputAddr', () => {
    it('should return a new UTXO', async () => {
      const recvrAddr = 'bitcoincash:qqzewa0ljnm9cp8g56z8ua8tnqya3nthnvhv5hpu8y'
      const voutIndex = 1
      const slpAmountStr = '4354768657'
      const result = await uut.addUtxoToOutputAddr(
        mockData.sendData01,
        recvrAddr,
        voutIndex,
        slpAmountStr
      )
      // console.log('result: ', result)

      assert.hasAllKeys(result, [
        'txid',
        'vout',
        'type',
        'qty',
        'tokenId',
        'address',
        'tokenType',
        'value',
        'decimals',
        'effectiveQty',
        'name',
        'ticker'
      ])
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.addUtxoToOutputAddr()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })

  describe('#updateBalanceFromSend', () => {
    it('should update the balance of an address', () => {
      const startVal = parseInt(mockData.addrData01.balances[0].qty.toString())

      // console.log(`starting mockData.addrData01: ${JSON.stringify(mockData.addrData01, null, 2)}`)
      let result = uut.updateBalanceFromSend(
        mockData.addrData01,
        mockData.sendData01.slpData,
        0
      )
      result = result.toString()
      // console.log('result: ', result)

      const endVal = parseInt(mockData.addrData01.balances[0].qty.toString())

      assert.equal(result, '4354768657')

      // Assert that the balance of the address is greater after the function
      // completes.
      assert.isAbove(endVal, startVal)
    })

    it('should add new balance if token does not exist in address', () => {
      // Force existing balance to be for a different token
      mockData.addrData01.balances[0].tokenId = 'other-token'

      let result = uut.updateBalanceFromSend(
        mockData.addrData01,
        mockData.sendData01.slpData,
        0
      )
      result = result.toString()
      // console.log('result: ', result)

      assert.equal(result, '4354768657')

      // console.log(`addrData: ${JSON.stringify(mockData.addrData01, null, 2)}`)
      assert.equal(mockData.addrData01.balances[0].qty, '234123')
      assert.equal(mockData.addrData01.balances[1].qty, '4354768657')
    })

    it('should ignore existing tokens', () => {
      // Add different token to starting balance
      mockData.addrData01.balances.unshift({
        tokenId: 'other-token',
        qty: new BigNumber('10000')
      })

      let result = uut.updateBalanceFromSend(
        mockData.addrData01,
        mockData.sendData01.slpData,
        0
      )
      result = result.toString()
      // console.log('result: ', result)

      assert.equal(result, '4354768657')

      // console.log(`addrData: ${JSON.stringify(mockData.addrData01, null, 2)}`)
      assert.equal(mockData.addrData01.balances[0].qty, '10000')
      assert.equal(mockData.addrData01.balances[1].qty, '4355002780')
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.updateBalanceFromSend()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })

  describe('#updateOutputAddr', () => {
    it('should update the output address', async () => {
      // Force creation of new address object
      sandbox.stub(uut.addrDb, 'get').rejects(new Error('not found'))

      let result = await uut.updateOutputAddr(mockData.sendData01, 1)
      result = result.toString()
      // console.log('result: ', result)

      assert.equal(result, '4354768657')
    })

    it('should handle corner-case where scriptPubKey does not exist', async () => {
      // Force corner case
      delete mockData.sendData01.txData.vout[1].scriptPubKey

      const result = await uut.updateOutputAddr(mockData.sendData01, 1)
      // console.log('result: ', result)

      assert.equal(result, undefined)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.updateOutputAddr()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })

  describe('#addTokensFromOutput', () => {
    it('should add tokens to output address', async () => {
      // Force creation of new address object
      sandbox.stub(uut.addrDb, 'get').rejects(new Error('not found'))

      let result = await uut.addTokensFromOutput(mockData.sendData01)
      result = result.toString()
      // console.log('result: ', result)

      assert.equal(result, '4354768657')
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.addTokensFromOutput()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })

  describe('#processTx', () => {
    it('should process SEND data', async () => {
      // Mock dependencies
      sandbox.stub(uut.dag, 'crawlDag').resolves({ isValid: true })
      sandbox
        .stub(uut, 'subtractTokensFromInputAddr')
        .resolves(new BigNumber(10))
      sandbox.stub(uut, 'addTokensFromOutput').resolves(new BigNumber(10))
      sandbox.stub(uut, 'processBurn').resolves(new BigNumber(0))
      sandbox.stub(uut, 'updateTokenStats').resolves()

      const result = await uut.processTx(mockData.sendData01)
      console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should mark tx as invalid if it fails DAG validation', async () => {
      // Mock dependencies
      sandbox.stub(uut.dag, 'crawlDag').resolves({ isValid: false })

      const result = await uut.processTx(mockData.sendData01)
      // console.log('result: ', result)

      assert.equal(result, undefined)
    })

    it('should catch and throw errors', async () => {
      try {
        await uut.processTx()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })

  describe('#processBurn', () => {
    it('should detect a controlled burn and update token stats', async () => {
      // Mock data
      const tokenData = {
        tokensInCirculationBN: new BigNumber(10000),
        totalBurned: new BigNumber(0)
      }

      // Mock databases
      sandbox.stub(uut.tokenDb, 'get').resolves(tokenData)
      sandbox.stub(uut.tokenDb, 'put').resolves()

      const spentBN = new BigNumber(1000)
      const sentBN = new BigNumber(900)

      const result = await uut.processBurn(
        spentBN,
        sentBN,
        mockData.sendData01
      )
      // console.log('result: ', result.toString())

      assert.equal(result.toString(), '100')
      assert.equal(tokenData.totalBurned.toString(), '100')
    })

    it('should detect an uncontrolled burn and update token stats', async () => {
      // Mock data
      const tokenData = {
        tokensInCirculationBN: new BigNumber(10000),
        totalBurned: new BigNumber(0)
      }

      // Mock databases
      sandbox.stub(uut.tokenDb, 'get').resolves(tokenData)
      sandbox.stub(uut.tokenDb, 'put').resolves()
      sandbox.stub(uut, 'reverseAddTokenFromOutput').resolves()

      const spentBN = new BigNumber(900)
      const sentBN = new BigNumber(1000)

      const result = await uut.processBurn(
        spentBN,
        sentBN,
        mockData.sendData01
      )
      // console.log('result: ', result.toString())

      assert.equal(result.toString(), '-100')
      assert.equal(tokenData.totalBurned.toString(), '900')
    })

    it('should catch and throw an error', async () => {
      try {
        await uut.processBurn()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })

  describe('#updateTokenStats', () => {
    it('should update token stats with a normal send', async () => {
      // Mock data
      const tokenData = {
        tokensInCirculationBN: new BigNumber(10000),
        totalBurned: new BigNumber(0),
        txs: []
      }

      // Mock databases
      sandbox.stub(uut.tokenDb, 'get').resolves(tokenData)
      sandbox.stub(uut.tokenDb, 'put').resolves()

      const diffBN = new BigNumber(0)
      const sentBN = new BigNumber(1000)
      const spentBN = new BigNumber(1000)

      const result = await uut.updateTokenStats(
        mockData.sendData01,
        diffBN,
        spentBN,
        sentBN
      )
      // console.log('result: ', result)

      // Assert expected values
      assert.equal(result.txs[0].type, 'SEND')
      assert.equal(result.txs[0].qty, '1000')
    })

    it('should update token stats with a controlled burn', async () => {
      // Mock data
      const tokenData = {
        tokensInCirculationBN: new BigNumber(10000),
        totalBurned: new BigNumber(100),
        txs: [],
        type: 65
      }

      // Mock databases
      sandbox.stub(uut.tokenDb, 'get').resolves(tokenData)
      sandbox.stub(uut.tokenDb, 'put').resolves()

      const diffBN = new BigNumber(100)
      const spentBN = new BigNumber(1100)
      const sentBN = new BigNumber(1000)

      const result = await uut.updateTokenStats(
        mockData.sendData01,
        diffBN,
        spentBN,
        sentBN
      )
      // console.log('result: ', result)

      // Assert expected values
      assert.equal(result.txs[0].type, 'SEND-BURN')
      assert.equal(result.txs[0].qty, '1000')
      assert.equal(result.txs[0].burned, '100')
    })

    it('should update token data for type 65 NFT send controlled burn', async () => {
      // Mock data
      const tokenData = {
        tokensInCirculationBN: new BigNumber(1),
        totalBurned: new BigNumber(0),
        txs: [],
        type: 65
      }

      // Mock databases
      sandbox.stub(uut.tokenDb, 'get').resolves(tokenData)
      sandbox.stub(uut.tokenDb, 'put').resolves()

      const diffBN = new BigNumber(1)
      const sentBN = new BigNumber(1)
      const spentBN = new BigNumber(1)

      const result = await uut.updateTokenStats(
        mockData.nftSendData01,
        diffBN,
        spentBN,
        sentBN
      )
      // console.log('result: ', result)

      // Assert expected values
      assert.equal(result.txs[0].type, 'SEND-BURN')
      assert.equal(result.txs[0].qty, '1')
    })

    it('should update token data for type 65 NFT send', async () => {
      // Mock data
      const tokenData = {
        tokensInCirculationBN: new BigNumber(1),
        totalBurned: new BigNumber(0),
        txs: [],
        type: 65
      }

      // Mock databases
      sandbox.stub(uut.tokenDb, 'get').resolves(tokenData)
      sandbox.stub(uut.tokenDb, 'put').resolves()

      const diffBN = new BigNumber(0)
      const sentBN = new BigNumber(1)
      const spentBN = new BigNumber(1)

      const result = await uut.updateTokenStats(
        mockData.nftSendData01,
        diffBN,
        spentBN,
        sentBN
      )
      // console.log('result: ', result)

      // Assert expected values
      assert.equal(result.txs[0].type, 'SEND')
      assert.equal(result.txs[0].qty, '1')
    })

    it('should update token data for type 65 NFT uncontrolled burn', async () => {
      // Mock data
      const tokenData = {
        tokensInCirculationBN: new BigNumber(1),
        totalBurned: new BigNumber(0),
        txs: [],
        type: 65
      }

      // Mock databases
      sandbox.stub(uut.tokenDb, 'get').resolves(tokenData)
      sandbox.stub(uut.tokenDb, 'put').resolves()

      const diffBN = new BigNumber(-1)
      const sentBN = new BigNumber(1)
      const spentBN = new BigNumber(1)

      const result = await uut.updateTokenStats(
        mockData.nftSendData01,
        diffBN,
        spentBN,
        sentBN
      )
      // console.log('result: ', result)

      // Assert expected values
      assert.equal(result.txs[0].type, 'BURN-UNCONTROLLED')
      assert.equal(result.txs[0].qty, '0')
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        // sandbox.stub(uut.tokenDb, 'get').resolves(tokenData)

        await uut.updateTokenStats()

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })

  describe('#reverseAddTokenFromOutput', () => {
    // This test uses the txid of a token tx that spent more outputs than inputs,
    // which results in a complete burn.
    it('should delete database entries', async () => {
      // Mock dependencies
      sandbox
        .stub(uut.addrDb, 'get')
        .onCall(0)
        .resolves(mockData.greaterOutputAddr01)
        .onCall(1)
        .resolves(mockData.greaterOutputAddr02)
      sandbox.stub(uut, 'subtractBalanceFromSend').resolves(new BigNumber(10))

      const data = mockData.greaterOutputBurn

      const result = await uut.reverseAddTokenFromOutput(data)
      // console.log('result: ', result.toString())

      assert.equal(result.toString(), '20')
    })

    it('should catch and throw an error', async () => {
      try {
        await uut.reverseAddTokenFromOutput()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot destructure property')
      }
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/slp-indexer/lib/cache-unit.js`:

```js
/*
  unit tests for the Cache library
*/

// Global npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

import Cache from '../../../../../src/adapters/slp-indexer/lib/cache.js'
import MockLevel from '../../../mocks/leveldb-mock.js'

describe('#cache.js', () => {
  let uut, sandbox

  beforeEach(() => {
    // const addrDb = new MockLevel()
    // const tokenDb = new MockLevel()
    const txDb = new MockLevel()

    // Restore the sandbox before each test.
    sandbox = sinon.createSandbox()

    uut = new Cache({ txDb })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw error if txDb is not included', () => {
      try {
        uut = new Cache()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'Must include txDb when instantiationg Transaction library')
      }
    })
  })

  describe('#put', () => {
    it('should throw an error if input is not a string', async () => {
      try {
        uut.put(1234)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'key must be a string')
      }
    })
  })

  describe('#get', () => {
    it('should get tx data cache on second call', async () => {
      sandbox.stub(uut.txDb, 'get').rejects(new Error('not in db'))

      // Mock devDependencies
      sandbox
        .stub(uut.transaction, 'get')
        .onCall(0)
        .resolves({ blockheight: 543957 })
        .onCall(1)
        .rejects(new Error('Unexpected code path'))

      const txid =
        '6bc111fbf5b118021d68355ca19a0e77fa358dd931f284b2550f79a51ab4792a'

      let result = await uut.get(txid)
      // console.log('result: ', result)

      result = await uut.get(txid)

      assert.equal(result.blockheight, 543957)

      // If data doesn't come from the cache on the second call, the mock above
      // will throw an error.
    })

    it('should get tx data from DB on first call', async () => {
      // Force tx DB to return data
      sandbox.stub(uut.txDb, 'get').resolves({ blockheight: 543957 })

      const txid =
        '6bc111fbf5b118021d68355ca19a0e77fa358dd931f284b2550f79a51ab4792a'

      const result = await uut.get(txid)
      // console.log('result: ', result)

      assert.equal(result.blockheight, 543957)
    })

    it('should increment and report the cacheCnt', async () => {
      sandbox.stub(uut.txDb, 'get').rejects(new Error('not in db'))

      // Mock devDependencies
      sandbox
        .stub(uut.transaction, 'get')
        .onCall(0)
        .resolves({ blockheight: 543957 })
        .onCall(1)
        .rejects(new Error('Unexpected code path'))

      const txid =
        '6bc111fbf5b118021d68355ca19a0e77fa358dd931f284b2550f79a51ab4792a'

      // Force count to be 99, so that it rolls over to 100.
      uut.cacheCnt = 99

      await uut.get(txid)
      // const result = await uut.get(txid)
      // console.log('result: ', result)

      // console.log(`uut.cacheCnt: ${uut.cacheCnt}`)
      assert.equal(uut.cacheCnt, 100)
    })

    it('should clear the cache when it gets too big', async () => {
      sandbox.stub(uut.txDb, 'get').rejects(new Error('not in db'))

      // Mock devDependencies
      sandbox
        .stub(uut.transaction, 'get')
        .onCall(0)
        .resolves({ blockheight: 543957 })
        .onCall(1)
        .rejects(new Error('Unexpected code path'))

      const txid =
        '6bc111fbf5b118021d68355ca19a0e77fa358dd931f284b2550f79a51ab4792a'

      // Force count to be 99, so that it rolls over to 100.
      uut.cacheCnt = 9999999999

      await uut.get(txid)
      // const result = await uut.get(txid)
      // console.log('result: ', result)

      // console.log(`uut.cacheCnt: ${uut.cacheCnt}`)
      assert.equal(uut.cacheCnt, 0)
    })
  })

  describe('#delete', () => {
    it('should delete key from cache', () => {
      uut.delete('test')

      assert.isOk('Not throwing an error is a pass')
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/slp-indexer/lib/db-backup.unit.js`:

```js
/*
  Unit tests for the db-backup.js library
*/

import { assert } from 'chai'
import sinon from 'sinon'

import DbBackup from '../../../../../src/adapters/slp-indexer/lib/db-backup.js'
import MockLevel from '../../../../unit/mocks/leveldb-mock.js'

describe('#db-backup', () => {
  let uut, sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    const addrDb = new MockLevel()
    const tokenDb = new MockLevel()
    const txDb = new MockLevel()
    const statusDb = new MockLevel()
    const pTxDb = new MockLevel()
    const utxoDb = new MockLevel()
    const localConfig = { addrDb, tokenDb, txDb, statusDb, pTxDb, utxoDb }

    uut = new DbBackup(localConfig)
  })

  afterEach(() => sandbox.restore())

  describe('#backupDb', () => {
    it('should backup the databases', async () => {
      // Mock dependencies
      sandbox.stub(uut.shell, 'rm').returns()
      sandbox.stub(uut.shell, 'mkdir').returns()
      sandbox.stub(uut.shell, 'cp').returns()

      const result = await uut.backupDb()
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should catch and throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut.addrDb, 'close').rejects(new Error('test error'))

        await uut.backupDb()
        // console.log('result: ', result)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.message, 'test error')
      }
    })
  })

  describe('#restoreDb', () => {
    it('should restore databases', async () => {
      // Mock dependencies
      sandbox.stub(uut.shell, 'rm').returns()
      sandbox.stub(uut.shell, 'cp').returns()

      const result = await uut.restoreDb()

      assert.equal(result, true)
    })

    it('should catch and throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut.addrDb, 'close').rejects(new Error('test error'))

        await uut.restoreDb()
        // console.log('result: ', result)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.message, 'test error')
      }
    })
  })

  describe('#zipDb', () => {
    it('should zip databases', async () => {
      // Mock dependencies
      sandbox.stub(uut.shell, 'rm').returns()
      sandbox.stub(uut.shell, 'exec').returns()

      const result = await uut.zipDb()

      assert.equal(result, true)
    })

    it('should delete old zip database', async () => {
      // Mock dependencies
      sandbox.stub(uut.shell, 'rm').returns()
      sandbox.stub(uut.shell, 'exec').returns()

      const result = await uut.zipDb(1, 1)

      assert.equal(result, true)
    })

    it('should catch and throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut.addrDb, 'close').rejects(new Error('test error'))

        await uut.zipDb()
        // console.log('result: ', result)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.message, 'test error')
      }
    })
  })

  describe('#unzipDb', () => {
    it('should unzip databases', async () => {
      // Mock dependencies
      sandbox.stub(uut.shell, 'rm').returns()
      sandbox.stub(uut.shell, 'exec').returns()
      sandbox.stub(uut.shell, 'cd').returns()

      const result = await uut.unzipDb()

      assert.equal(result, true)
    })

    it('should return false if there is an error', async () => {
      // Force an error
      sandbox.stub(uut.addrDb, 'close').rejects(new Error('test error'))

      const result = await uut.unzipDb()
      // console.log('result: ', result)

      assert.equal(result, false)
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/slp-indexer/lib/rpc.unit.js`:

```js
/*
  Unit tests for rpc.js library
*/

// const assert = require('chai').assert
// const sinon = require('sinon')
import { assert } from 'chai'
import sinon from 'sinon'

// const RPC = require('../../../../../src/adapters/slp-indexer/lib/rpc')
import RPC from '../../../../../src/adapters/slp-indexer/lib/rpc.js'

let uut
let sandbox

describe('#rpc.js', () => {
  beforeEach(() => {
    uut = new RPC()

    sandbox = sinon.createSandbox()

    // Suppress winston logs during test.
    uut.wlogger.error = () => {}
    uut.wlogger.info = () => {}
    uut.wlogger.debug = () => {}
    uut.wlogger.silly = () => {}
  })

  afterEach(() => sandbox.restore())

  describe('#getBlockCount', () => {
    it('should get current block height', async () => {
      // Mock the RPC call for unit tests.
      sandbox.stub(uut.axios, 'request').resolves({ data: { result: 126769 } })

      const result = await uut.getBlockCount()
      // console.log(`result: ${util.inspect(result)}`)

      assert.isNumber(result)
    })

    it('should log then throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut, 'getAxiosOptions').throws(new Error('test error'))

        await uut.getBlockCount()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#getBlockHeader', () => {
    it('should get block header', async () => {
      // Mock the RPC call for unit tests.
      sandbox
        .stub(uut.axios, 'request')
        .resolves({ data: { result: { height: 600000 } } })

      const hash =
        '0000000000000000008e8d83cba6d45a9314bc2ef4538d4e0577c6bed8593536'

      const result = await uut.getBlockHeader(hash)
      // console.log(`result: ${util.inspect(result)}`)

      assert.equal(result.height, 600000)
    })

    it('should log then throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut, 'getAxiosOptions').throws(new Error('test error'))

        const hash =
          '0000000000000000008e8d83cba6d45a9314bc2ef4538d4e0577c6bed8593536'

        await uut.getBlockHeader(hash)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should throw error if hash is not provided', async () => {
      try {
        await uut.getBlockHeader()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Block hash must be provided')
      }
    })
  })

  describe('#getBlock', () => {
    it('should get the contents of a block', async () => {
      // Mock the RPC call for unit tests.
      sandbox
        .stub(uut.axios, 'request')
        .resolves({ data: { result: { height: 600000 } } })

      const hash =
        '0000000000000000008e8d83cba6d45a9314bc2ef4538d4e0577c6bed8593536'

      const result = await uut.getBlock(hash)
      // console.log(`result: ${util.inspect(result)}`)

      assert.equal(result.height, 600000)
    })

    it('should log then throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut, 'getAxiosOptions').throws(new Error('test error'))

        const hash =
          '0000000000000000008e8d83cba6d45a9314bc2ef4538d4e0577c6bed8593536'

        await uut.getBlock(hash)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should throw error if hash is not provided', async () => {
      try {
        await uut.getBlock()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Block hash must be provided')
      }
    })
  })

  describe('#getBlockHash', () => {
    it('should get the hash of a block', async () => {
      // const height = 600000
      const hash =
        '0000000000000000008e8d83cba6d45a9314bc2ef4538d4e0577c6bed8593536'

      // Mock the RPC call for unit tests.
      sandbox.stub(uut.axios, 'request').resolves({ data: { result: hash } })

      const result = await uut.getBlockHash(hash)
      // console.log(`result: ${util.inspect(result)}`)

      assert.equal(result, hash)
    })

    it('should log then throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut, 'getAxiosOptions').throws(new Error('test error'))

        const height = 600000

        await uut.getBlockHash(height)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should throw error if hash is not provided', async () => {
      try {
        await uut.getBlockHash()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Block height must be provided')
      }
    })
  })

  describe('#getRawTransaction', () => {
    it('should get tx details', async () => {
      const txid =
        'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34'

      // Mock the RPC call for unit tests.
      sandbox
        .stub(uut.axios, 'request')
        .resolves({ data: { result: { txid } } })

      const result = await uut.getRawTransaction(txid)
      // console.log(`result: ${util.inspect(result)}`)

      assert.equal(result.txid, txid)
    })

    it('should log then throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut, 'getAxiosOptions').throws(new Error('test error'))

        const txid =
          'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34'

        await uut.getRawTransaction(txid)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should throw error if txid is not provided', async () => {
      try {
        await uut.getRawTransaction()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'txid must be provided')
      }
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/slp-indexer/lib/dag.unit.js`:

```js
/*
  Unit tests for the dag.js library
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'
import BCHJS from '@psf/bch-js'
import cloneDeep from 'lodash.clonedeep'

// Local libraries
import DAG from '../../../../../src/adapters/slp-indexer/lib/dag.js'
import Cache from '../../../../../src/adapters/slp-indexer/lib/cache.js'
import MockLevel from '../../../../unit/mocks/leveldb-mock.js'
import mockDataLib from '../../../../unit/mocks/dag-mock.js'

const bchjs = new BCHJS()

describe('#dag.js', () => {
  let uut, sandbox, mockData

  // Mock txDb and force mock to return error.
  const txDb = new MockLevel()
  txDb.get = () => {
    throw new Error('not in db')
  }

  const cache = new Cache({ bchjs, txDb })

  beforeEach(() => {
    // Mock test data
    mockData = cloneDeep(mockDataLib)

    // Restore the sandbox before each test.
    sandbox = sinon.createSandbox()

    uut = new DAG({ cache, txDb })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor()', () => {
    it('should throw an error if cache instance is not provided', () => {
      try {
        uut = new DAG()

        assert.fail('Unexpected code path')
        console.log(uut)
      } catch (err) {
        assert.equal(
          err.message,
          'instance of cache required when instantiating DAG'
        )
      }
    })

    it('should throw an error if tx database instance is not provided', () => {
      try {
        uut = new DAG({ cache })

        assert.fail('Unexpected code path')
        console.log(uut)
      } catch (err) {
        assert.equal(err.message, 'TX DB required')
      }
    })
  })

  describe('#crawlDag()', () => {
    it('should throw an error if txid is not included', async () => {
      try {
        await uut.crawlDag()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'txid required to crawl DAG')
      }
    })

    it('should throw an error if tokenId is not included', async () => {
      try {
        const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'

        await uut.crawlDag(txid)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'tokenId required to crawl DAG')
      }
    })

    it('should catch and throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut.cache, 'get').rejects(new Error('test error'))

        const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
        const tokenId =
            '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

        await uut.crawlDag(txid, tokenId)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    // Happy path - simple two-tx DAG.
    it('should return true for valid SEND', async () => {
      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.slpSendTxData01)
        .onCall(1).resolves(mockData.slpGenesisTxData01)

      const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      const result = await uut.crawlDag(txid, tokenId)
      // console.log('result: ', result)

      assert.equal(result.isValid, true)
      assert.equal(result.dag.length, 2)
    })

    it('should return false if tx has no inputs', async () => {
      // Force token quantity to be zero.
      mockData.slpSendTxData01.vin[0].tokenQty = 0

      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.slpSendTxData01)
        .onCall(1).resolves(mockData.slpGenesisTxData01)

      const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      const result = await uut.crawlDag(txid, tokenId)
      // console.log('result: ', result)

      assert.equal(result.isValid, false)
      assert.equal(result.dag.length, 1)
    })

    it('should return true for a mint baton', async () => {
      // Force token quantity to be zero
      mockData.slpSendTxData01.vin[0].tokenQty = 0

      // Force input to have mint baton
      mockData.slpSendTxData01.vin[0].isMintBaton = true

      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.slpSendTxData01)
        .onCall(1).resolves(mockData.slpGenesisTxData01)

      const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      const result = await uut.crawlDag(txid, tokenId)
      // console.log('result: ', result)

      assert.equal(result.isValid, true)
      assert.equal(result.dag.length, 2)
    })

    it('should return false if parent has different token type', async () => {
      // Force parent TX to have a different token type.
      mockData.slpGenesisTxData01.tokenType = 45

      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.slpSendTxData01)
        .onCall(1).resolves(mockData.slpGenesisTxData01)

      const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      const result = await uut.crawlDag(txid, tokenId)
      // console.log('result: ', result)

      assert.equal(result.isValid, false)
      assert.equal(result.dag.length, 1)
    })

    // CT 12-21-21 - Commented out because the part of the code tested by this
    // test case, was leading to false negatives.
    // Simulates parent tx being marked isValid=true from the DB.
    // it('should return true for cached valid parent', async () => {
    //   // Force parent tx to be valid.
    //   mockData.slpGenesisTxData01.isValidSlp = true
    //
    //   // Mock dependencies
    //   sandbox.stub(uut.cache, 'get')
    //     .onCall(0).resolves(mockData.slpSendTxData01)
    //     .onCall(1).resolves(mockData.slpGenesisTxData01)
    //
    //   const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
    //   const tokenId =
    //     '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'
    //
    //   const result = await uut.crawlDag(txid, tokenId)
    //   // console.log('result: ', result)
    //
    //   assert.equal(result.isValid, true)
    //   assert.equal(result.dag.length, 2)
    // })

    // Simulates parent tx being marked isValid=false from the DB.
    // CT 12-21-21 - Commented out because the part of the code tested by this
    // test case, was leading to false negatives.
    // it('should return false for cached invalid parent', async () => {
    //   // Force parent tx to be valid.
    //   mockData.slpGenesisTxData01.isValidSlp = false
    //
    //   // Mock dependencies
    //   sandbox.stub(uut.cache, 'get')
    //     .onCall(0).resolves(mockData.slpSendTxData01)
    //     .onCall(1).resolves(mockData.slpGenesisTxData01)
    //
    //   const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
    //   const tokenId =
    //     '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'
    //
    //   const result = await uut.crawlDag(txid, tokenId)
    //   console.log('result: ', result)
    //
    //   assert.equal(result.isValid, false)
    //   assert.equal(result.dag.length, 1)
    // })

    it('should throw an error if parent has different tokenId', async () => {
      // Force parent to have different token ID
      mockData.slpGenesisTxData01.tokenId =
        'aaaaae35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.slpSendTxData01)
        .onCall(1).resolves(mockData.slpGenesisTxData01)

      const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      try {
        await uut.crawlDag(txid, tokenId)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'TokenID does not match')
      }
    })

    it('should return true if endFound is true', async () => {
      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.slpSendTxData01)
        .onCall(1).resolves(mockData.slpGenesisTxData01)

      const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      const result = await uut.crawlDag(txid, tokenId, [], true)
      // console.log('result: ', result)

      assert.equal(result.isValid, true)
      assert.equal(result.dag.length, 0)
    })

    it('should return false if endFound is false', async () => {
      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.slpSendTxData01)
        .onCall(1).resolves(mockData.slpGenesisTxData01)

      const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      const result = await uut.crawlDag(txid, tokenId, [], false)
      // console.log('result: ', result)

      assert.equal(result.isValid, false)
      assert.equal(result.dag.length, 0)
    })

    it('should validate 3-tx DAG', async () => {
      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.threeTxTestData01)
        .onCall(1).resolves(mockData.threeTxTestData02)
        .onCall(2).resolves(mockData.threeTxTestData02)
        .onCall(3).resolves(mockData.threeTxTestData03)

      const txid =
        '4e52e0ec21d26feb8bdcafdbe48d0f15662f1ba2b3bea8200bcf0a90d7c209ee'
      const tokenId =
        'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501'

      const result = await uut.crawlDag(txid, tokenId)
      // console.log('result: ', result)

      assert.equal(result.isValid, true)
      assert.equal(result.dag.length, 3)
    })

    it('should use pre-cached, pre-validated parent TXs', async () => {
      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.cachedTx01)
        .onCall(1).resolves(mockData.cachedTxParent01)

      const txid = '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      const result = await uut.crawlDag(txid, tokenId)
      // console.log('result: ', result)

      assert.equal(result.isValid, true)
      assert.equal(result.dag.length, 2)
    })

    it('should exit immediately for genesis TX', async () => {
      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.slpGenesisTxData01)

      const txid = '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'
      const tokenId =
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'

      const result = await uut.crawlDag(txid, tokenId)
      // console.log('result: ', result)

      assert.equal(result.isValid, true)
      assert.equal(result.dag.length, 1)
    })

    it('should invalidate NFT if Genesis does not originate from a Group token.', async () => {
      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockData.invalidNftTx01)
        .onCall(1).resolves(mockData.invlidNftParentTx01)

      const txid = '6d68a7ffbb63ef851c43025f801a1d365cddda50b00741bca022c743d74cd61a'
      const tokenId =
        '9b6db26b64aedcedc0bd9a3037b29b3598573ec5cea99eec03faa838616cd683'

      const result = await uut.crawlDag(txid, tokenId)
      // console.log('result: ', result)

      assert.equal(result.isValid, false)
      assert.isArray(result.dag)
      assert.equal(result.dag.length, 0)
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/slp-indexer/lib/zmq.unit.js`:

```js
/*
  Unit tests for the zmq.js library
*/

import { assert } from 'chai'
import sinon from 'sinon'

import ZMQ from '../../../../../src/adapters/slp-indexer/lib/zmq.js'
import mockData from '../../../mocks/zmq-mocks.js'

describe('#zmq.js', () => {
  let uut, sandbox

  beforeEach(() => {
    uut = new ZMQ()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    // uut.disconnect() // Ensure the socket is disconnected.

    sandbox.restore()
  })

  describe('#connect', () => {
    it('should initialize a connection', async () => {
      console.log('uut.sock: ', uut.sock)

      // Mock network calls.
      uut.sock = {
        connect: () => {},
        subscribe: () => {}
      }
      sandbox.stub(uut, 'monitorZmq').returns()

      const result = await uut.connect()

      assert.equal(result, true)
    })

    it('should catch and throw an error', async () => {
      try {
        // Force and error
        uut.sock = {
          connect: () => { throw new Error('test error') }
        }

        await uut.connect()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'test error')
      }
    })
  })

  describe('#decodeMsg', () => {
    it('should decode an SLP transaction', () => {
      // Assert that the TX queue is empty at the start of the test.
      assert.equal(uut.txQueue.length, 0)

      const topic = Buffer.from(mockData.topic01, 'hex')
      const message = Buffer.from(mockData.msg01, 'hex')

      const result = uut.decodeMsg(topic, message)

      assert.equal(result, true)

      // Assert that the queue now has a transaction in it.
      assert.equal(uut.txQueue.length, 1)
    })

    it('should decode a new block', () => {
      // Assert that the TX queue is empty at the start of the test.
      assert.equal(uut.txQueue.length, 0)

      const topic = Buffer.from(mockData.blockTopic, 'hex')
      const message = Buffer.from(mockData.blockMsg, 'hex')

      const result = uut.decodeMsg(topic, message)

      assert.equal(result, true)

      // Assert that the queue now has a transaction in it.
      assert.equal(uut.blockQueue.length, 1)
    })

    it('should catch errors and return false', async () => {
      const topic = Buffer.from(mockData.topic01, 'hex')
      const message = Buffer.from(mockData.msg01, 'hex')

      // Force an error
      sandbox.stub(uut.bchZmqDecoder, 'decodeTransaction').throws(new Error('test error'))

      const result = uut.decodeMsg(topic, message)

      assert.equal(result, false)
    })
  })

  describe('#getTx', () => {
    it('should return false if the queue is empty', () => {
      const result = uut.getTx()
      // console.log('result: ', result)

      assert.equal(result, false)
    })

    it('should return the oldest element in the queue', () => {
      uut.txQueue.push('a')
      uut.txQueue.push('b')
      uut.txQueue.push('c')

      const result = uut.getTx()

      assert.equal(result, 'a')
    })
  })

  describe('#getBlock', () => {
    it('should return false if the queue is empty', () => {
      const result = uut.getBlock()
      // console.log('result: ', result)

      assert.equal(result, false)
    })

    it('should return the oldest element in the queue', () => {
      uut.blockQueue.push('a')
      uut.blockQueue.push('b')
      uut.blockQueue.push('c')

      const result = uut.getBlock()

      assert.equal(result, 'a')
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/slp-indexer/lib/ptxdb.unit.js`:

```js
/*
  Unit tests for the start-stop.js library
*/

import { assert } from 'chai'
import sinon from 'sinon'

import ManagePTXDB from '../../../../../src/adapters/slp-indexer/lib/ptxdb.js'
import MockLevel from '../../../mocks/leveldb-mock.js'

describe('#ManagePTXDB', () => {
  let uut, sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    const pTxDb = new MockLevel()
    const localConfig = { pTxDb }

    uut = new ManagePTXDB(localConfig)
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw error pTxDb instance is not included', () => {
      try {
        uut = new ManagePTXDB({})

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.message, 'Must pass instance of pTxDb when instantiating ManagePTXDB lib')
      }
    })
  })

  describe('#getAllTxs', () => {
    it('should get all transactions in the database', async () => {
      const isTest = true
      const result = await uut.getAllTxs(isTest)

      assert.equal(result, true)
    })
  })

  describe('#readFromStream', () => {
    it('should add key to the keys array', () => {
      const data = {
        key: 'a',
        value: 'b'
      }

      uut.readFromStream(data)

      assert.equal(uut.keys[0], 'a')
    })
  })

  describe('#endStream', () => {
    it('should call promise resolve() function', () => {
      const resolve = () => true

      const result = uut.endStream(resolve)

      assert.equal(result, true)
    })
  })

  describe('#cleanPTXDB', () => {
    it('should clean entries from the ptxdb', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getAllTxs').resolves()
      uut.keys.push({
        key: 'a',
        value: 'b'
      })
      sandbox.stub(uut.pTxDb, 'get').resolves(100)

      const result = await uut.cleanPTXDB(110)

      assert.equal(result, true)
    })

    it('should throw error if key is not found in pTxDb', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getAllTxs').resolves()
      uut.keys.push({
        key: 'a',
        value: 'b'
      })
      sandbox.stub(uut.pTxDb, 'get').rejects(new Error('entry not found'))

      const result = await uut.cleanPTXDB(110)

      assert.equal(result, true)
    })

    it('should throw error if entry can not be deleted from the database', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getAllTxs').resolves()
      uut.keys.push({
        key: 'a',
        value: 'b'
      })
      sandbox.stub(uut.pTxDb, 'get').resolves(100)

      // Force error
      sandbox.stub(uut.pTxDb, 'del').rejects(new Error('Could not delete entry'))

      const result = await uut.cleanPTXDB(110)

      assert.equal(result, true)
    })

    it('should catch and throw unhandled errors', async () => {
      try {
        // Force error
        sandbox.stub(uut, 'getAllTxs').rejects(new Error('test error'))

        await uut.cleanPTXDB(110)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.message, 'test error')
      }
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/slp-indexer/lib/transaction.unit.js`:

```js
/*
  Unit tests for the transaction.js library.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'
import cloneDeep from 'lodash.clonedeep'

import Transaction from '../../../../../src/adapters/slp-indexer/lib/transaction.js'
import mockDataLib from '../../../mocks/transaction-mock.js'

describe('#Transaction', () => {
  let uut
  let sandbox
  let mockData

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    mockData = cloneDeep(mockDataLib)

    uut = new Transaction()
  })
  afterEach(() => sandbox.restore())

  describe('#decodeOpReturn', () => {
    it('should throw an error for a non-string input', async () => {
      try {
        const txid = 53423 // Not a string.

        await uut.decodeOpReturn(txid)

        assert.equal(true, false, 'Unexpected result.')
      } catch (err) {
        // console.log(`err: ${util.inspect(err)}`)
        assert.include(err.message, 'txid string must be included')
      }
    })

    it('should throw an error for non-SLP transaction', async () => {
      try {
        // Mock dependencies
        sandbox
          .stub(uut.rpc, 'getRawTransaction')
          .resolves(mockData.nonSlpTxDetails)

        const txid =
          '3793d4906654f648e659f384c0f40b19c8f10c1e9fb72232a9b8edd61abaa1ec'

        await uut.decodeOpReturn(txid)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'scriptpubkey not op_return')
      }
    })

    it('should throw an error for non-SLP transaction with OP_RETURN', async () => {
      try {
        // Mock dependencies
        sandbox
          .stub(uut.rpc, 'getRawTransaction')
          .resolves(mockData.nonSLPTxDetailsWithOpReturn)

        const txid =
          '2ff74c48a5d657cf45f699601990bffbbe7a2a516d5480674cbf6c6a4497908f'

        await uut.decodeOpReturn(txid)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(`err: ${util.inspect(err)}`)
        assert.include(err.message, 'SLP not in first chunk')
      }
    })

    it('should decode a genesis transaction', async () => {
      // Mock dependencies
      sandbox
        .stub(uut.rpc, 'getRawTransaction')
        .resolves(mockData.genesisTestInputTx02)

      const txid =
        '4de69e374a8ed21cbddd47f2338cc0f479dc58daa2bbe11cd604ca488eca0ddf'

      const result = await uut.decodeOpReturn(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert the expected properties exist
      assert.hasAllKeys(result, [
        'tokenType',
        'txType',
        'tokenId',
        'ticker',
        'name',
        'documentUri',
        'documentHash',
        'decimals',
        'mintBatonVout',
        'qty'
      ])
    })

    it('should decode a mint transaction', async () => {
      // Mock dependencies
      sandbox
        .stub(uut.rpc, 'getRawTransaction')
        .resolves(mockData.mintTestInputTx02)

      const txid =
        'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34'

      const result = await uut.decodeOpReturn(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.hasAllKeys(result, [
        'tokenType',
        'txType',
        'tokenId',
        'mintBatonVout',
        'qty'
      ])
    })

    it('should decode a send transaction', async () => {
      // Mock dependencies
      sandbox
        .stub(uut.rpc, 'getRawTransaction')
        .resolves(mockData.sendTestInputTx01)

      const txid =
        '6bc111fbf5b118021d68355ca19a0e77fa358dd931f284b2550f79a51ab4792a'

      const result = await uut.decodeOpReturn(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.hasAllKeys(result, ['tokenType', 'txType', 'tokenId', 'amounts'])
    })

    it('should properly decode a Genesis transaction with no minting baton', async () => {
      // Mock dependencies
      sandbox
        .stub(uut.rpc, 'getRawTransaction')
        .resolves(mockData.txDetailsSLPGenesisNoBaton)

      const txid =
        '497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7'

      const data = await uut.decodeOpReturn(txid)
      // console.log(`data: ${JSON.stringify(data, null, 2)}`)

      assert.equal(data.mintBatonVout, 0)
    })

    it('should decode a send transaction with alternate encoding', async () => {
      // Mock dependencies
      sandbox
        .stub(uut.rpc, 'getRawTransaction')
        .resolves(mockData.txDetailsSLPSendAlt)

      const txid =
        'd94357179775425ebc59c93173bd6dc9854095f090a2eb9dcfe9797398bc8eae'

      const data = await uut.decodeOpReturn(txid)
      // console.log(`data: ${JSON.stringify(data, null, 2)}`)

      assert.hasAnyKeys(data, [
        'transactionType',
        'txType',
        'tokenId',
        'amounts'
      ])
    })

    // Note: This TX is interpreted as valid by the original decodeOpReturn().
    // Fixing this issue and related issues was the reason for creating the
    // decodeOpReturn2() method using the slp-parser library.
    it('should throw error for invalid SLP transaction', async () => {
      try {
        // Mock dependencies
        sandbox
          .stub(uut.rpc, 'getRawTransaction')
          .resolves(mockData.mockInvalidSlpSend)

        const txid =
          'a60a522cc11ad7011b74e57fbabbd99296e4b9346bcb175dcf84efb737030415'

        await uut.decodeOpReturn(txid)
        // console.log(`result: ${JSON.stringify(result, null, 2)}`)
      } catch (err) {
        // console.log(`err: `, err)
        assert.include(err.message, 'amount string size not 8 bytes')
      }
    })

    it('should decode a NFT Parent transaction', async () => {
      // Mock dependencies
      sandbox
        .stub(uut.rpc, 'getRawTransaction')
        .resolves(mockData.txDetailsSLPNftGenesis)

      const txid =
        '4ef6eb92950a13a69e97c2c02c7967d806aa874c0e2a6b5546a8880f2cd14bc4'

      const data = await uut.decodeOpReturn(txid)
      // console.log(`data: ${JSON.stringify(data, null, 2)}`)

      assert.property(data, 'tokenType')
      assert.property(data, 'txType')
      assert.property(data, 'ticker')
      assert.property(data, 'name')
      assert.property(data, 'tokenId')
      assert.property(data, 'documentUri')
      assert.property(data, 'documentHash')
      assert.property(data, 'decimals')
      assert.property(data, 'mintBatonVout')
      assert.property(data, 'qty')

      assert.equal(data.tokenType, 129)
      assert.equal(data.mintBatonVout, 2)
      assert.equal(data.qty, 1)
    })

    it('should decode a NFT Child transaction', async () => {
      // Mock dependencies
      sandbox
        .stub(uut.rpc, 'getRawTransaction')
        .resolves(mockData.txDetailsSLPNftChild)

      const txid =
        'eeddccc4d716f04157ea132ac93a48040fea34a6b57f3d8f0cccb7d1a731ab2b'

      const data = await uut.decodeOpReturn(txid)
      // console.log(`data: ${JSON.stringify(data, null, 2)}`)

      assert.property(data, 'tokenType')
      assert.property(data, 'txType')
      assert.property(data, 'ticker')
      assert.property(data, 'name')
      assert.property(data, 'tokenId')
      assert.property(data, 'documentUri')
      assert.property(data, 'documentHash')
      assert.property(data, 'decimals')
      assert.property(data, 'mintBatonVout')
      assert.property(data, 'qty')

      assert.equal(data.tokenType, 65)
      assert.equal(data.mintBatonVout, 0)
      assert.equal(data.qty, '1')
    })

    it('should clear the cache when it gets too big', async () => {
      // Mock dependencies
      sandbox
        .stub(uut.rpc, 'getRawTransaction')
        .resolves(mockData.sendTestInputTx01)

      const txid =
        '6bc111fbf5b118021d68355ca19a0e77fa358dd931f284b2550f79a51ab4792a'

      // Force cache to be too big.
      uut.tokenCacheCnt = 9999999

      const result = await uut.decodeOpReturn(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.hasAllKeys(result, ['tokenType', 'txType', 'tokenId', 'amounts'])
    })
  })

  describe('#_getInputAddrs', () => {
    it('should return an array of input addresses', async () => {
      // Mock dependencies
      sandbox
        .stub(uut.rpc, 'getRawTransaction')
        .resolves(mockData.mockParentTx1)

      const result = await uut._getInputAddrs(mockData.mockTxIn)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.isArray(result)
      assert.equal(result.length, 1)
      assert.property(result[0], 'vin')
      assert.property(result[0], 'address')
    })

    it('should catch and throw and error', async () => {
      try {
        // Force an error
        sandbox.stub(uut, 'getTxWithRetry').rejects(new Error('test error'))

        await uut._getInputAddrs(mockData.mockTxIn)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)

        assert.equal(err.message, 'test error')
      }
    })

    it('should return an empty array when there is no txid', async () => {
      // Force corner-case error
      sandbox.stub(uut, 'getTxWithRetry').rejects(new Error('txid must be provided'))

      const result = await uut._getInputAddrs(mockData.mockTxIn)

      assert.isArray(result)
      assert.equal(result.length, 0)
    })
  })

  describe('#getTxData', () => {
    it('should return tx data with input addresses', async () => {
      // Mock dependencies
      sandbox
        .stub(uut, 'getTxWithRetry')
        .resolves(mockData.nonSlpTxDetails)
      sandbox.stub(uut, '_getInputAddrs').resolves([
        {
          vin: 0,
          address: 'bitcoincash:qr2jtznnkhy0jnynn4l7jmmce6teqcyrhc8herhlgt'
        }
      ])

      const txid =
        '05f7d4a4e25f53d63a360434eb54f221abf159112b7fffc91da1072a079cded3'

      const result = await uut.getTxData(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.property(result.vin[0], 'address')
    })

    it('should throw an error for a non-txid input', async () => {
      try {
        await uut.getTxData()

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)

        assert.include(
          err.message,
          'must be a string containg a TXID'
        )
      }
    })

    it('should catch and throw an error', async () => {
      try {
        // Force a network error.
        sandbox
          .stub(uut, 'getTxWithRetry')
          .rejects(new Error('test error'))

        const txid =
          '05f7d4a4e25f53d63a360434eb54f221abf159112b7fffc91da1072a079cded3'

        await uut.getTxData(txid)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)

        assert.equal(err.message, 'test error')
      }
    })
  })

  describe('#getTokenInfo', () => {
    it('should return data from decodeOpReturn()', async () => {
      sandbox.stub(uut, 'decodeOpReturn').resolves({ txid: 'sometxid', tokenId: 'sometokenid' })

      const result = await uut.getTokenInfo('input-txid')

      assert.equal(result.txid, 'sometxid')
    })

    it('should return false when decodeOpReturn() throws an error', async () => {
      sandbox.stub(uut, 'decodeOpReturn').rejects(new Error('test error'))

      const result = await uut.getTokenInfo('input-txid')

      assert.equal(result, false)
    })

    it('should return false when token ID contains too many zeros', async () => {
      sandbox.stub(uut, 'decodeOpReturn').resolves({ txid: 'sometxid', tokenId: '00000000' })

      const result = await uut.getTokenInfo('input-txid')

      assert.equal(result, false)
    })
  })

  describe('#getNftTx', () => {
    it('should hydrate an NFT (child) Genesis Tx', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getTokenInfo').resolves(mockData.nftGenesisTokenData02)

      const txDetails = mockData.nftGenesisTx01
      const txTokenData = mockData.nftGenesisTokenData01

      const result = await uut.getNftTx(txDetails, txTokenData)
      // console.log('result: ', result)

      // Assert that properties unique to an NFT Genesis TX exist in the output.
      assert.equal(result.vin[0].tokenQty, 5)
      assert.equal(result.vin[0].tokenId, mockData.nftGenesisTokenData02.tokenId)
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenId, null)
      assert.equal(result.vout[0].isMintBaton, true)
      assert.equal(result.vout[1].tokenQty, 1)
      assert.equal(result.vout[2].tokenQty, 0)
    })

    it('should hydrate an NFT (child/type 65) Send Tx', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getTokenInfo')
        .onCall(0).resolves({
          tokenType: 65,
          txType: 'GENESIS',
          ticker: 'test',
          name: 'test',
          tokenId: 'c2ab27687de886ade3237d38c5f7b2af9b60ec5ca8c89623cd0b81ac7efec36d',
          documentUri: 'ipfs://bafybeidy4nrqgsgcl44jlyvehnulngfzq564kc4bz6ni3cldoupwhwzzy4',
          documentHash: '5126528223a04a49b8586608f8677ef0af0df9bc14f0044bd7395c76f5d1c039',
          decimals: 0,
          mintBatonVout: 0,
          qty: '1'
        })
        .onCall(1).resolves({
          tokenType: 65,
          txType: 'SEND',
          tokenId: '2adfd8afa3511725e0b882949c671f3fa234d9da848a900b819cc68e93af376f',
          amounts: [
            '1'
          ]
        })

      const txDetails = mockData.nftSendTxDetails01
      const txTokenData = mockData.nftSendTxTokenData01

      const result = await uut.getNftTx(txDetails, txTokenData)
      // console.log('result: ', result)

      // Assert expected properties and values exist.
      assert.equal(result.isSlpTx, true)
      assert.equal(result.tokenTxType, 'SEND')
      assert.equal(result.tokenType, 65)
      assert.equal(result.tokenDecimals, 0)
      assert.property(result, 'tokenUri')
      assert.property(result, 'tokenDocHash')
      assert.property(result, 'tokenName')
      assert.property(result, 'tokenTicker')
    })

    it('should throw error for unknown token type', async () => {
      try {
        const txDetails = mockData.nftSendTxDetails01
        const txTokenData = mockData.nftSendTxTokenData01

        // Force unknown token type
        txTokenData.txType = 'UNKNOWN'

        await uut.getNftTx(txDetails, txTokenData)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.message, 'Unknown SLP TX type for TX')
      }
    })

    it('should throw error for unknown token input', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut, 'getTokenInfo')
          .onCall(0).resolves({
            tokenType: 65,
            txType: 'UNKNOWN',
            ticker: 'test',
            name: 'test',
            tokenId: 'c2ab27687de886ade3237d38c5f7b2af9b60ec5ca8c89623cd0b81ac7efec36d',
            documentUri: 'ipfs://bafybeidy4nrqgsgcl44jlyvehnulngfzq564kc4bz6ni3cldoupwhwzzy4',
            documentHash: '5126528223a04a49b8586608f8677ef0af0df9bc14f0044bd7395c76f5d1c039',
            decimals: 0,
            mintBatonVout: 0,
            qty: '1'
          })

        const txDetails = mockData.nftSendTxDetails01
        const txTokenData = mockData.nftSendTxTokenData01

        await uut.getNftTx(txDetails, txTokenData)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.message, 'Unknown token type in input')
      }
    })

    it('should hydrate an NFT (child) Genesis Tx when Group token was a result of a SEND TX', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getTokenInfo').resolves(mockData.nftGenesisVinData03)

      const txDetails = mockData.nftGenesisTx03
      const txTokenData = mockData.nftGenesisTokenData03

      const result = await uut.getNftTx(txDetails, txTokenData)
      // console.log('result: ', result)

      // Assert that properties unique to an NFT Genesis TX exist in the output.
      assert.equal(result.vin[0].tokenQty, 1)
      assert.equal(result.vin[0].tokenId, 'b31704bfd4beb029bf29bed36599745b3b20dbb0ce1ad4efe9aaa15d3719c44e')
      assert.equal(result.vin[1].tokenQty, 1)
      assert.equal(result.vin[1].tokenId, 'b31704bfd4beb029bf29bed36599745b3b20dbb0ce1ad4efe9aaa15d3719c44e')
      assert.equal(result.vout[0].isMintBaton, true)
      assert.equal(result.vout[1].tokenQty, 1)
      assert.equal(result.vout[2].tokenQty, 0)
    })

    it('should hydrate an NFT (child) Genesis Tx when Group token was a result of a MINT TX', async () => {
      // Example TX: b219ba0a7e712345abeadd979db1783b19f4643374a6efc6ad61c7913de9528e
      // Using Group Token ID: 112f967519e18083c8e4bd7ba67ebc04d72aaaa941826d38655c53d677e6a5be

      // Mock dependencies
      sandbox.stub(uut, 'getTokenInfo')
        .onCall(0).resolves(mockData.nftGenesisFromGroupMintVin01)
        .onCall(1).resolves(mockData.nftGenesisFromGroupMintVin02)

      const txDetails = mockData.nftGenesisFromGroupMintTokenDetails01
      const txTokenData = mockData.nftGenesisFromGroupMintTokenData01

      const result = await uut.getNftTx(txDetails, txTokenData)
      // console.log('result: ', result)

      // Assert that properties unique to an NFT Genesis TX exist in the output.
      assert.equal(result.vin[0].tokenQty, 1)
      assert.equal(result.vin[0].tokenId, '112f967519e18083c8e4bd7ba67ebc04d72aaaa941826d38655c53d677e6a5be')
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenId, null)
      assert.equal(result.vout[0].isMintBaton, true)
      assert.equal(result.vout[1].tokenQty, 1)
      assert.equal(result.vout[2].tokenQty, 0)
    })

    it('should hydrate an NFT (child) Genesis Tx when Group token has a mint baton', async () => {
      // This is not a real-world test. It's simply exercising the different code paths.

      // Customizine mock data to force the desired code path
      mockData.nftGenesisFromGroupMintVin02.mintBatonVout = 3
      mockData.nftGenesisFromGroupMintVin01.txType = 'MINT'

      // Mock dependencies
      sandbox.stub(uut, 'getTokenInfo')
        .onCall(0).resolves(mockData.nftGenesisFromGroupMintVin01)
        .onCall(1).resolves(mockData.nftGenesisFromGroupMintVin02)

      const txDetails = mockData.nftGenesisFromGroupMintTokenDetails01
      const txTokenData = mockData.nftGenesisFromGroupMintTokenData01

      const result = await uut.getNftTx(txDetails, txTokenData)
      // console.log('result: ', result)

      // Assert that properties unique to an NFT Genesis TX exist in the output.
      assert.isNaN(result.vin[0].tokenQty)
      assert.equal(result.vin[0].tokenId, '112f967519e18083c8e4bd7ba67ebc04d72aaaa941826d38655c53d677e6a5be')
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenId, '112f967519e18083c8e4bd7ba67ebc04d72aaaa941826d38655c53d677e6a5be')
      assert.equal(result.vout[0].isMintBaton, true)
      assert.equal(result.vout[1].tokenQty, 1)
      assert.equal(result.vout[2].tokenQty, 0)
    })
  })

  describe('#get', () => {
    it('should throw an error if txid is not specified', async () => {
      try {
        await uut.get()

        assert.fail('Unexpected code path!')
      } catch (err) {
        assert.include(
          err.message,
          'Input to Transaction.get() must be a string containing a TXID.'
        )
      }
    })

    it('should get details about a non-SLP transaction', async () => {
      const txid =
        '2b37bdb3b63dd0bca720437754a36671431a950e684b64c44ea910ea9d5297c7'

      // Mock dependencies
      sandbox.stub(uut, 'getTxData').resolves(mockData.nonSlpTxDetails)
      sandbox.stub(uut.rpc, 'getBlockHeader').resolves({ height: 602405 })
      sandbox.stub(uut, 'getTokenInfo').resolves(false)

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that there are stanardized properties.
      assert.property(result, 'txid')
      assert.property(result, 'vin')
      assert.property(result, 'vout')
      assert.property(result.vout[0], 'value')
      assert.property(result.vout[0].scriptPubKey, 'addresses')

      // Assert that added properties exist.
      assert.property(result.vin[0], 'address')
      assert.property(result.vin[0], 'value')

      // Assert blockheight is added
      assert.equal(result.blockheight, 602405)
      assert.equal(result.isSlpTx, false)
    })

    it('should get details about a SLP SEND tx with SEND input', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getTxData').resolves(mockData.slpTxDetails)
      sandbox.stub(uut.rpc, 'getBlockHeader').resolves({ height: 603424 })
      sandbox
        .stub(uut, 'getTokenInfo')
        .onCall(0)
        .resolves(mockData.mockOpReturnData01)
        .onCall(1)
        .resolves(mockData.mockOpReturnData02)
        .onCall(2)
        .resolves(mockData.mockOpReturnData03)
        .onCall(3)
        .resolves(false)

      const txid =
        '266844d53e46bbd7dd37134688dffea6e54d944edff27a0add63dd0908839bc1'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that there are stanardized properties.
      assert.property(result, 'txid')
      assert.property(result, 'vin')
      assert.property(result, 'vout')
      assert.property(result.vout[0], 'value')
      assert.property(result.vout[1].scriptPubKey, 'addresses')

      // Assert outputs have expected properties
      assert.equal(result.vout[0].tokenQty, null)
      assert.equal(result.vout[0].tokenQtyStr, null)
      assert.equal(result.vout[1].tokenQty, 1)
      assert.equal(result.vout[1].tokenQtyStr, '1')
      assert.equal(result.vout[2].tokenQty, 998833)
      assert.equal(result.vout[2].tokenQtyStr, '998833')
      assert.equal(result.vout[3].tokenQty, null)
      assert.equal(result.vout[3].tokenQtyStr, null)

      // Assert that inputs have expected properties
      assert.equal(result.vin[0].tokenQtyStr, '998834')
      assert.equal(result.vin[0].tokenQty, 998834)
      assert.equal(
        result.vin[0].tokenId,
        '497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7'
      )
      assert.equal(result.vin[1].tokenQtyStr, '0')
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenId, null)

      // Assert blockheight is added
      assert.equal(result.blockheight, 603424)
      assert.equal(result.isSlpTx, true)
    })

    it('should catch and throw error on network error', async () => {
      try {
        const txid =
            '2b37bdb3b63dd0bca720437754a36671431a950e684b64c44ea910ea9d5297c7'

        // Force an error
        sandbox
          .stub(uut, 'getTxData')
          .rejects(new Error('test error'))

        await uut.get(txid)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    // This test case was created in response to a bug. When the input TX
    // was a Genesis SLP transaction, the inputs of the transaction were not
    // being hydrated properly.
    it('should get details about a SLP SEND tx with GENSIS input', async () => {
      // Mock dependencies
      sandbox
        .stub(uut, 'getTxData')
        .resolves(mockData.genesisTestInputTx)
      sandbox
        .stub(uut.rpc, 'getBlockHeader')
        .resolves({ height: 543409 })
      sandbox
        .stub(uut, 'getTokenInfo')
        .onCall(0)
        .resolves(mockData.genesisTestOpReturnData01)
        .onCall(1)
        .resolves(mockData.genesisTestOpReturnData02)
        .onCall(2)
        .resolves(mockData.genesisTestOpReturnData02)
        .onCall(3)
        .resolves(mockData.genesisTestOpReturnData02)

      const txid =
          '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that there are stanardized properties.
      assert.property(result, 'txid')
      assert.property(result, 'vin')
      assert.property(result, 'vout')
      assert.property(result.vout[0], 'value')
      assert.property(result.vout[1].scriptPubKey, 'addresses')

      // Assert outputs have expected properties and values
      assert.equal(result.vout[0].tokenQty, null)
      assert.equal(result.vout[0].tokenQtyStr, null)
      assert.equal(result.vout[1].tokenQty, 5000000)
      assert.equal(result.vout[1].tokenQtyStr, '5000000')
      assert.equal(result.vout[2].tokenQty, 5000000)
      assert.equal(result.vout[2].tokenQtyStr, '5000000')
      assert.equal(result.vout[3].tokenQty, null)
      assert.equal(result.vout[3].tokenQtyStr, null)

      // Assert inputs have expected properties and values
      assert.equal(result.vin[0].tokenQty, 10000000)
      assert.equal(result.vin[0].tokenQtyStr, '10000000')
      assert.equal(
        result.vin[0].tokenId,
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'
      )
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenQtyStr, '0')
      assert.equal(result.vin[1].tokenId, null)

      // Assert blockheight is added
      assert.equal(result.blockheight, 543409)
      assert.equal(result.isSlpTx, true)
    })

    it('should get details about a SLP SEND tx with MINT (and GENESIS) input', async () => {
      // Mock dependencies
      sandbox
        .stub(uut, 'getTxData')
        .resolves(mockData.mintTestInputTx)
      sandbox
        .stub(uut.rpc, 'getBlockHeader')
        .resolves({ height: 543614 })
      sandbox
        .stub(uut, 'getTokenInfo')
        .onCall(0)
        .resolves(mockData.mintTestOpReturnData01)
        .onCall(1)
        .resolves(mockData.mintTestOpReturnData02)
        .onCall(2)
        .resolves(mockData.mintTestOpReturnData02)
        .onCall(3)
        .resolves(mockData.mintTestOpReturnData03)
        .onCall(4)
        .resolves(mockData.mintTestOpReturnData03)

      const txid =
        '4640a734063ea79fa587a3cac38a70a2f6f3db0011e23514024185982110d0fa'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that there are stanardized properties.
      assert.property(result, 'txid')
      assert.property(result, 'vin')
      assert.property(result, 'vout')
      assert.property(result.vout[0], 'value')
      assert.property(result.vout[1].scriptPubKey, 'addresses')

      // Assert expected output properties and values exist.
      assert.equal(result.vout[0].tokenQty, null)
      assert.equal(result.vout[1].tokenQty, 43547.68657)
      assert.equal(result.vout[1].tokenQtyStr, '43547.68657')
      assert.equal(result.vout[2].tokenQty, null)

      // Assert expected input properties and values exist.
      assert.equal(result.vin[0].tokenQty, 43545.34534)
      assert.equal(result.vin[0].tokenQtyStr, '43545.34534')
      assert.equal(
        result.vin[0].tokenId,
        '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8'
      )
      assert.equal(result.vin[1].tokenQty, 2.34123)
      assert.equal(result.vin[1].tokenQtyStr, '2.34123')
      assert.equal(
        result.vin[1].tokenId,
        '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8'
      )
      assert.equal(result.vin[2].tokenQty, 0)
      assert.equal(result.vin[2].tokenQtyStr, '0')
      assert.equal(result.vin[2].tokenId, null)

      // Assert blockheight is added
      assert.equal(result.blockheight, 543614)
      assert.equal(result.isSlpTx, true)
    })

    // This test case was generated from the problematic transaction that
    // used inputs in a 'non-standard' way.
    it('should get details about a SLP SEND tx with MINT (and SEND) input', async () => {
      // Mock dependencies
      sandbox
        .stub(uut, 'getTxData')
        .resolves(mockData.sendTestInputTx01)
      sandbox
        .stub(uut.rpc, 'getBlockHeader')
        .resolves({ height: 543957 })
      sandbox
        .stub(uut, 'getTokenInfo')
        .onCall(0)
        .resolves(mockData.sendTestOpReturnData01)
        .onCall(1)
        .resolves(mockData.sendTestOpReturnData02)
        .onCall(2)
        .resolves(mockData.sendTestOpReturnData03)
        .onCall(3)
        .resolves(mockData.sendTestOpReturnData03)
        .onCall(4)
        .resolves(mockData.sendTestOpReturnData04)

      const txid =
        '6bc111fbf5b118021d68355ca19a0e77fa358dd931f284b2550f79a51ab4792a'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that there are stanardized properties.
      assert.property(result, 'txid')
      assert.property(result, 'vin')
      assert.property(result, 'vout')
      assert.property(result.vout[0], 'value')
      assert.property(result.vout[1].scriptPubKey, 'addresses')

      // Assert the outputs have expected properties and values.
      assert.equal(result.vout[0].tokenQty, null)
      assert.equal(result.vout[1].tokenQty, 1000000)
      assert.equal(result.vout[1].tokenQtyStr, '1000000')
      assert.equal(result.vout[2].tokenQty, 198000000)
      assert.equal(result.vout[2].tokenQtyStr, '198000000')
      assert.equal(result.vout[3].tokenQty, null)

      // Assert the inputs have expected properties and values.
      assert.equal(result.vin[0].tokenQty, 100000000)
      assert.equal(result.vin[0].tokenQtyStr, '100000000')
      assert.equal(
        result.vin[0].tokenId,
        '550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b35'
      )
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenQtyStr, 0)
      assert.equal(result.vin[1].tokenId, null)
      assert.equal(result.vin[2].tokenQty, 99000000)
      assert.equal(result.vin[2].tokenQtyStr, '99000000')
      assert.equal(
        result.vin[2].tokenId,
        '550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b35'
      )

      // Assert blockheight is added
      assert.equal(result.blockheight, 543957)
      assert.equal(result.isSlpTx, true)
    })

    // This was a problematic TX
    it('should process MINT TX with GENESIS input', async () => {
      // Mock dependencies
      sandbox
        .stub(uut, 'getTxData')
        .resolves(mockData.mintTestInputTx02)
      sandbox
        .stub(uut.rpc, 'getBlockHeader')
        .resolves({ height: 543614 })
      sandbox
        .stub(uut, 'getTokenInfo')
        .onCall(0)
        .resolves(mockData.mintTestOpReturnData04)
        .onCall(1)
        .resolves(mockData.mintTestOpReturnData05)
        .onCall(2)
        .resolves(mockData.mintTestOpReturnData05)
        .onCall(3)
        .resolves(mockData.mintTestOpReturnData05)
        .onCall(4)
        .resolves(mockData.mintTestOpReturnData05)
        .onCall(5)
        .resolves(mockData.mintTestOpReturnData05)

      const txid =
          'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that there are stanardized properties.
      assert.property(result, 'txid')
      assert.property(result, 'vin')
      assert.property(result, 'vout')
      assert.property(result.vout[0], 'value')
      assert.property(result.vout[1].scriptPubKey, 'addresses')

      // Assert outputs have expected properties and values
      assert.equal(result.vout[0].tokenQty, 0)
      assert.equal(result.vout[0].tokenQty, '0')
      assert.equal(result.vout[1].tokenQty, 2.34123)
      assert.equal(result.vout[1].tokenQty, '2.34123')
      assert.equal(result.vout[2].tokenQty, 0)
      assert.equal(result.vout[2].tokenQty, '0')
      assert.equal(result.vout[2].isMintBaton, true)
      assert.equal(result.vout[3].tokenQty, 0)
      assert.equal(result.vout[3].tokenQty, '0')

      // Assert inputs have expected properties and values
      assert.equal(result.vin[0].tokenQty, 0)
      assert.equal(result.vin[0].tokenQtyStr, '0')
      assert.equal(result.vin[0].tokenId, null)
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenQtyStr, '0')
      assert.equal(
        result.vin[1].tokenId,
        '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8'
      )
      assert.equal(result.vin[1].isMintBaton, true)

      // Assert added TX data exists.
      assert.equal(result.blockheight, 543614)
      assert.equal(result.isSlpTx, true)
    })

    it('should throw an error for unknown tx type', async () => {
      try {
      // Mock dependencies
        sandbox
          .stub(uut, 'getTxData')
          .resolves(mockData.genesisTestInputTx02)
        sandbox
          .stub(uut.rpc, 'getBlockHeader')
          .resolves({ height: 571212 })

        // Force token type to be an unknown type
        mockData.genesisTestOpReturn03.txType = 'UNKNOWN'
        sandbox
          .stub(uut, 'getTokenInfo')
          .onCall(0)
          .resolves(mockData.genesisTestOpReturn03)
          .onCall(1)
          .resolves(mockData.genesisTestOpReturn03)
          .onCall(2)
          .resolves(false)
          .onCall(3)
          .resolves(false)
          .onCall(4)
          .resolves(false)

        const txid =
          '4de69e374a8ed21cbddd47f2338cc0f479dc58daa2bbe11cd604ca488eca0ddf'

        await uut.get(txid)
        // const result = await uut.get(txid)
        // console.log(`result: ${JSON.stringify(result, null, 2)}`)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Unknown SLP TX type for TX')
      }
    })

    // It should process a GENESIS tx
    it('should process a GENESIS tx', async () => {
      // Mock dependencies
      sandbox
        .stub(uut, 'getTxData')
        .resolves(mockData.genesisTestInputTx02)
      sandbox
        .stub(uut.rpc, 'getBlockHeader')
        .resolves({ height: 571212 })
      sandbox
        .stub(uut, 'getTokenInfo')
        .onCall(0)
        .resolves(mockData.genesisTestOpReturn03)
        .onCall(1)
        .resolves(mockData.genesisTestOpReturn03)
        .onCall(2)
        .resolves(false)
        .onCall(3)
        .resolves(false)
        .onCall(4)
        .resolves(false)

      const txid =
          '4de69e374a8ed21cbddd47f2338cc0f479dc58daa2bbe11cd604ca488eca0ddf'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that there are stanardized properties.
      assert.property(result, 'txid')
      assert.property(result, 'vin')
      assert.property(result, 'vout')
      assert.property(result.vout[0], 'value')
      assert.property(result.vout[1].scriptPubKey, 'addresses')

      // Assert output have expected properties and values
      assert.equal(result.vout[0].tokenQty, 0)
      assert.equal(result.vout[0].tokenQtyStr, '0')
      assert.equal(result.vout[0].isMintBaton, true)
      assert.equal(result.vout[1].tokenQty, 1000000000)
      assert.equal(result.vout[1].tokenQtyStr, '1000000000')
      assert.equal(result.vout[2].tokenQty, 0)
      assert.equal(result.vout[2].tokenQtyStr, '0')

      // Assert input have expected properties and values
      assert.equal(result.vin[0].tokenQty, 0)
      assert.equal(result.vin[0].tokenQtyStr, '0')
      assert.equal(result.vin[0].tokenId, null)
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenQtyStr, '0')
      assert.equal(result.vin[1].tokenId, null)

      // Assert added TX data exists.
      assert.equal(result.blockheight, 571212)
      assert.equal(result.isSlpTx, true)
    })

    // Forces this mint tx to have a mint baton as input
    it('should process TX with MINT baton input', async () => {
      // Mock dependencies
      sandbox
        .stub(uut, 'getTxData')
        .resolves(mockData.mintTestInputTx02)
      sandbox
        .stub(uut.rpc, 'getBlockHeader')
        .resolves({ height: 543614 })

      // Force input TX to be a mint baton.
      sandbox
        .stub(uut, 'getTokenInfo')
        .onCall(0)
        .resolves(mockData.mintTestOpReturnData04)
        .onCall(1)
        .resolves(mockData.mintTestOpReturnData04)
        .onCall(2)
        .resolves(mockData.mintTestOpReturnData04)
        .onCall(3)
        .resolves(mockData.mintTestOpReturnData04)
        .onCall(4)
        .resolves(mockData.mintTestOpReturnData04)
        .onCall(5)
        .resolves(mockData.mintTestOpReturnData04)

      const txid =
          'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.equal(result.vin[1].tokenQtyStr, '0')
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].isMintBaton, true)
    })

    // I believe this use-case happens when the indexer is tracking transactions
    // comming in on the ZMQ in real time. They have not been mined, so they
    // have no blockhash.
    it('should calculate block height if TX has no blockhash', async () => {
      // For TX to not have a blockhash
      mockData.slpTxDetails.blockhash = undefined

      // Mock dependencies
      sandbox.stub(uut, 'getTxData').resolves(mockData.slpTxDetails)
      sandbox.stub(uut.rpc, 'getBlockCount').resolves(603423)
      // sandbox.stub(uut.rpc, 'getBlockHeader').resolves({ height: 603424 })
      sandbox
        .stub(uut, 'getTokenInfo')
        .onCall(0)
        .resolves(mockData.mockOpReturnData01)
        .onCall(1)
        .resolves(mockData.mockOpReturnData02)
        .onCall(2)
        .resolves(mockData.mockOpReturnData03)
        .onCall(3)
        .resolves(false)

      const txid =
        '266844d53e46bbd7dd37134688dffea6e54d944edff27a0add63dd0908839bc1'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that there are stanardized properties.
      assert.property(result, 'txid')
      assert.property(result, 'vin')
      assert.property(result, 'vout')
      assert.property(result.vout[0], 'value')
      assert.property(result.vout[1].scriptPubKey, 'addresses')

      // Assert outputs have expected properties
      assert.equal(result.vout[0].tokenQty, null)
      assert.equal(result.vout[0].tokenQtyStr, null)
      assert.equal(result.vout[1].tokenQty, 1)
      assert.equal(result.vout[1].tokenQtyStr, '1')
      assert.equal(result.vout[2].tokenQty, 998833)
      assert.equal(result.vout[2].tokenQtyStr, '998833')
      assert.equal(result.vout[3].tokenQty, null)
      assert.equal(result.vout[3].tokenQtyStr, null)

      // Assert that inputs have expected properties
      assert.equal(result.vin[0].tokenQtyStr, '998834')
      assert.equal(result.vin[0].tokenQty, 998834)
      assert.equal(
        result.vin[0].tokenId,
        '497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7'
      )
      assert.equal(result.vin[1].tokenQtyStr, '0')
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenId, null)

      // Assert blockheight is added
      assert.equal(result.blockheight, 603424)
      assert.equal(result.isSlpTx, true)
    })

    it('should get TX details for an NFT', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getTxData').resolves(mockData.nftTxDetails01)
      sandbox.stub(uut.rpc, 'getBlockHeader').resolves({ height: 613542 })
      sandbox
        .stub(uut, 'getTokenInfo')
        .onCall(0)
        .resolves(mockData.nftTxTokenData01)
        .onCall(1)
        .resolves(mockData.nftGenesisData01)
      sandbox.stub(uut, 'getNftTx').resolves(mockData.nftFinalTxDetails01)

      const txid =
        'd9eee23870c82ac0054442146c7de9e3985d70096ba2b913a29672b0376b8456'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that there are stanardized properties.
      assert.property(result, 'txid')
      assert.property(result, 'vin')
      assert.property(result, 'vout')
      assert.property(result.vout[0], 'value')
      // assert.property(result.vout[1].scriptPubKey, 'addresses')

      // Assert outputs have expected properties
      assert.equal(result.vout[0].tokenQty, null)
      assert.equal(result.vout[0].tokenQtyStr, null)
      assert.equal(result.vout[1].tokenQty, 1)
      assert.equal(result.vout[1].tokenQtyStr, '1')
      assert.equal(result.vout[2].tokenQty, null)
      assert.equal(result.vout[2].tokenQtyStr, null)

      // Assert that inputs have expected properties
      assert.equal(result.vin[0].tokenQtyStr, '1')
      assert.equal(result.vin[0].tokenQty, 1)
      assert.equal(
        result.vin[0].tokenId,
        'da879a9b4d54372db011f254554172a0b4b81a8124bfdfd06ec916f5326948e0'
      )
      assert.equal(result.vin[1].tokenQtyStr, '0')
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenId, 'da879a9b4d54372db011f254554172a0b4b81a8124bfdfd06ec916f5326948e0')

      // Assert blockheight is added
      assert.equal(result.blockheight, 613542)
      assert.equal(result.isSlpTx, true)
    })
  })

  describe('#getTxWithRetry', () => {
    it('should return tx data', async () => {
      // Mock dependencies
      sandbox.stub(uut.queue, 'addToQueue').resolves({ key: 'value' })

      const result = await uut.getTxWithRetry('txid')
      // console.log('result: ', result)

      assert.property(result, 'key')
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        sandbox.stub(uut.queue, 'addToQueue').rejects(new Error('test error'))

        await uut.getTxWithRetry('txid')

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'test error')
      }
    })

    it('should throw an error if txid is not provided', async () => {
      try {
        // Force an error
        // sandbox.stub(uut.queue, 'addToQueue').rejects(new Error('test error'))

        await uut.getTxWithRetry()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'txid string must be included.')
      }
    })

    it('should clear tx cache when it gets too large', async () => {
      // Mock dependencies
      sandbox.stub(uut.queue, 'addToQueue').resolves({ key: 'value' })

      // Force cache count to be too large
      uut.txCacheCnt = 9999999999

      const result = await uut.getTxWithRetry('txid')
      // console.log('result: ', result)

      assert.property(result, 'key')
    })
  })

  describe('#getTx01', () => {
    it('should get details on a normal SEND type 1 TX', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getTokenInfo')
        .onCall(0).resolves(mockData.sendVinTokenData01)
        .onCall(1).resolves(false)

      const txDetails = mockData.sendTxTokenDetails01
      const txTokenData = mockData.sendTxTokenData01

      const result = await uut.getTx01(txDetails, txTokenData)
      // console.log('result: ', result)

      // Assert that the result has expected properties and values
      assert.equal(result.vout[0].tokenQty, null)
      assert.equal(result.vout[0].tokenQtyStr, null)
      assert.equal(result.vout[1].tokenQty, 10000)
      assert.equal(result.vout[1].tokenQtyStr, '10000')
      assert.equal(result.vout[2].tokenQty, 9223372036854766000)
      assert.equal(result.vout[2].tokenQtyStr, '9223372036854765808')
      assert.equal(result.vout[3].tokenQty, null)
      assert.equal(result.vout[3].tokenQtyStr, null)

      assert.equal(result.vin[0].tokenQtyStr, '9223372036854775808')
      assert.equal(result.vin[0].tokenQty, 9223372036854776000)
      assert.equal(result.vin[0].tokenId, '792ff3fc9a708d5facb28427601a423aedfe96c1863ada303a4a22968781ad70')
      assert.equal(result.vin[1].tokenQtyStr, '0')
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenId, null)
    })

    it('should throw error for unknown token type', async () => {
      // Force unknown token type
      mockData.sendVinTokenData01.txType = 'UNKNOWN'

      // Mock dependencies
      sandbox.stub(uut, 'getTokenInfo')
        .onCall(0).resolves(mockData.sendVinTokenData01)
        .onCall(1).resolves(false)

      const txDetails = mockData.sendTxTokenDetails01
      const txTokenData = mockData.sendTxTokenData01

      try {
        await uut.getTx01(txDetails, txTokenData)
        // console.log('result: ', result)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.message, 'Unknown token type in input')
      }
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/slp-indexer/lib/utils.unit.js`:

```js
/*
  Unit tests for the utils.js library.
*/

// Global npm libraries
import { assert } from 'chai'
import sinon from 'sinon'
import cloneDeep from 'lodash.clonedeep'

// local libraries
import IndexerUtils from '../../../../../src/adapters/slp-indexer/lib/utils.js'
import mockDataLib from '../../../mocks/utils-mock.js'

describe('#utils.js', () => {
  let uut, sandbox, mockData

  beforeEach(() => {
    uut = new IndexerUtils()

    mockData = cloneDeep(mockDataLib)

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#getNewAddrObj', () => {
    it('should generate a new address object', () => {
      const result = uut.getNewAddrObj()

      assert.isArray(result.utxos)
      assert.isArray(result.txs)
      assert.isArray(result.balances)
    })
  })

  describe('#addTxWithoutDuplicate', () => {
    it('should add a TX to the array', () => {
      const txObj = {
        txid: 'fake-txid'
      }
      const testAry = []

      uut.addTxWithoutDuplicate(txObj, testAry)

      assert.equal(testAry.length, 1)
    })

    it('should not add a duplicte TX to the array', () => {
      const txObj = {
        txid: 'fake-txid'
      }
      const testAry = []

      uut.addTxWithoutDuplicate(txObj, testAry)
      uut.addTxWithoutDuplicate(txObj, testAry)

      assert.equal(testAry.length, 1)
    })

    it('should catch and throw errors', () => {
      try {
        uut.addTxWithoutDuplicate()
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })

  describe('#removeUtxoFromArray', () => {
    it('should remove a UTXO from the array', () => {
      const utxoObj = {
        txid: 'fake-txid',
        vout: 0
      }
      const testArray = []
      testArray.push(utxoObj)

      const result = uut.removeUtxoFromArray(utxoObj, testArray)

      assert.equal(result.length, 0)
    })

    it('should catch and throw errors', () => {
      try {
        uut.removeUtxoFromArray()

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })

  describe('#subtractUtxoBalance', () => {
    it('should subtract the UTXO balance from the address balance with a single token', () => {
      const utxo = mockData.balance01.utxos[0]
      const balancesArray = mockData.balance01.balances
      const tokenId = 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2'

      const result = uut.subtractUtxoBalance(utxo, balancesArray, tokenId)
      // console.log('result: ', result)

      assert.isArray(result)
      assert.equal(result.length, 0)
    })

    it('should subtract the UTXO balance from the address balance with multiple tokens', () => {
      const utxo = mockData.balance01.utxos[0]
      const tokenId = 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2'

      const balancesArray = mockData.balance01.balances
      balancesArray.unshift({ tokenId: 'abc', qty: 4 })
      balancesArray.push({ tokenId: 'xyz', qty: 5 })

      const result = uut.subtractUtxoBalance(utxo, balancesArray, tokenId)
      // console.log('result: ', result)

      assert.isArray(result)
      assert.equal(result.length, 2)
    })

    it('should subtract the UTXO balance from a balance with a larger quantity than the utxo', () => {
      const utxo = mockData.balance01.utxos[0]
      const balancesArray = mockData.balance01.balances
      const tokenId = 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2'

      // Force balance to be larger than the utxo.
      balancesArray[0].qty = '19900'

      const result = uut.subtractUtxoBalance(utxo, balancesArray, tokenId)
      // console.log('result: ', result)

      assert.isArray(result)
      assert.equal(result.length, 1)
      assert.equal(result[0].qty, '10000')
    })

    it('should catch and throw errors', () => {
      try {
        uut.subtractUtxoBalance()

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })

  describe('#subtractBurnedTokens', () => {
    it('should updated token info with burned token data', () => {
      const utxoObj = mockData.balance01.utxos[0]
      const tokenData = mockData.tokenData01

      const result = uut.subtractBurnedTokens(utxoObj, tokenData)
      // console.log('result: ', result)

      assert.equal(result.tokensInCirculationStr, '10100')
      assert.equal(result.totalBurned, '9900')
    })

    it('should handle a mint baton', () => {
      const utxoObj = mockData.balance01.utxos[0]
      const tokenData = mockData.tokenData01

      // Force mint baton
      utxoObj.type = 'baton'

      const result = uut.subtractBurnedTokens(utxoObj, tokenData)
      // console.log('result: ', result)

      assert.equal(result.mintBatonIsActive, false)
    })

    it('should catch and throw errors', () => {
      try {
        uut.subtractBurnedTokens()

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })

  describe('#sleep', () => {
    it('should sleep for 1 ms', async () => {
      await uut.sleep(1)

      // Resolving without an error is a pass.
      assert.isOk(true)
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/slp-indexer/lib/filter-block.unit.js`:

```js
/*
  Unit tests for the filter-block.js library
*/

import { assert } from 'chai'
import sinon from 'sinon'
import cloneDeep from 'lodash.clonedeep'

import MockLevel from '../../../../unit/mocks/leveldb-mock.js'
import mockDataLib from '../../../../unit/mocks/filter-block-mock.js'
import Cache from '../../../../../src/adapters/slp-indexer/lib/cache.js'
import Transaction from '../../../../../src/adapters/slp-indexer/lib/transaction.js'
import FilterBlock from '../../../../../src/adapters/slp-indexer/lib/filter-block.js'

describe('#filter-block.js', () => {
  let uut, sandbox, mockData

  beforeEach(() => {
    // Restore the sandbox before each test.
    sandbox = sinon.createSandbox()

    mockData = cloneDeep(mockDataLib)

    // Mock txDb and force mock to return error.
    const txDb = new MockLevel()
    txDb.get = () => {
      throw new Error('not in db')
    }
    const addrDb = new MockLevel()
    const tokenDb = new MockLevel()
    const utxoDb = new MockLevel()

    const cache = new Cache({ txDb })
    const transaction = new Transaction()

    uut = new FilterBlock({ cache, transaction, addrDb, tokenDb, utxoDb, txDb })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw error if cache lib is not passed', () => {
      try {
        uut = new FilterBlock()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(
          err.message,
          'Must include instance of tx cache when instantiating filter-block.js'
        )
      }
    })

    it('should throw error if transaction lib is not passed', () => {
      try {
        const txDb = new MockLevel()
        const cache = new Cache({ txDb })

        uut = new FilterBlock({ cache })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(
          err.message,
          'Must include instance of transaction lib when instantiating filter-block.js'
        )
      }
    })

    it('should throw error if address DB is not passed in', () => {
      try {
        const txDb = new MockLevel()
        const cache = new Cache({ txDb })
        const transaction = new Transaction()

        uut = new FilterBlock({ cache, transaction })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(
          err.message,
          'Must pass address DB instance when instantiating filter-block.js'
        )
      }
    })

    it('should throw error if token DB is not passed in', () => {
      try {
        const txDb = new MockLevel()
        const addrDb = new MockLevel()
        const cache = new Cache({ txDb })
        const transaction = new Transaction()

        uut = new FilterBlock({ cache, transaction, addrDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(
          err.message,
          'Must pass token DB instance when instantiating filter-block.js'
        )
      }
    })

    it('should throw error if utxo DB is not passed in', () => {
      try {
        const txDb = new MockLevel()
        const addrDb = new MockLevel()
        const tokenDb = new MockLevel()
        const cache = new Cache({ txDb })
        const transaction = new Transaction()

        uut = new FilterBlock({ cache, transaction, addrDb, tokenDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(
          err.message,
          'Must pass utxo DB instance when instantiating filter-block.js'
        )
      }
    })

    it('should throw error if tx DB is not passed in', () => {
      try {
        const txDb = new MockLevel()
        const addrDb = new MockLevel()
        const tokenDb = new MockLevel()
        const utxoDb = new MockLevel()
        const cache = new Cache({ txDb })
        const transaction = new Transaction()

        uut = new FilterBlock({ cache, transaction, addrDb, tokenDb, utxoDb })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(
          err.message,
          'Must pass transaction DB instance when instantiating filter-block.js'
        )
      }
    })
  })

  describe('#_retryWrapper', () => {
    it('should throw an error if function handler is not provided', async () => {
      try {
        await uut.retryWrapper()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'function handler is required')
      }
    })

    it('should throw an error if input object  is not provided', async () => {
      try {
        const funcHandler = () => {}
        await uut.retryWrapper(funcHandler)
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'input object is required')
      }
    })

    it('should execute the given function.', async () => {
      const inputTest = 'test'
      // func mock to execute into the retry wrapper
      const funcHandle = sinon.spy()

      await uut.retryWrapper(funcHandle, inputTest)

      assert.equal(inputTest, funcHandle.getCall(0).args[0])
      assert.equal(funcHandle.callCount, 1)
    })

    it('should call handleValidationError() when p-retry error is thrown', async () => {
      try {
        const inputTest = 'test'
        const funcHandle = () => {
          throw new Error('test error')
        }
        uut.attempts = 1

        await uut.retryWrapper(funcHandle, inputTest)

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should retry the specific number of times before giving up', async () => {
      const inputTest = 'test'
      const funcHandle = () => {
        throw new Error('test error')
      }
      // func handler
      const spy = sinon.spy(funcHandle)

      // p-retry attempts
      const attempts = 1

      try {
        uut.attempts = attempts

        await uut.retryWrapper(spy, inputTest)

        assert.fail('unexpected code path')
      } catch (error) {
        assert.equal(spy.callCount, attempts + 1)
      }
    })
  })

  describe('#filterSlpTxs', () => {
    it('should filter SLP txs from block', async () => {
      // From block 652,276
      const txs = [
        '5d7001c04bfb21a3d45bb084269ce811bf11269bc020eb4146440ebd66057d4a',
        '01b2118775d84a48dec3d31c760fddd8abc44dad6073b26f72d57fbc636d912d',
        '38d5f98dbe7ff2f0205c1a370d5d587d8d98aa65ad60d7026e381e7ba559d5d0',
        'a0b18e78d60b8ead3a5c45a00a964d04c2a8c268d62043fccc644b0efdcf5dd8',
        'e05035a3719559fa4627016fd1edb2cc490092c906a3415394a16b0d0add8178'
      ]

      // The first 4 blocks are not SLP. The 5th is.
      sandbox
        .stub(uut.transaction, 'getTokenInfo')
        .onCall(0)
        .resolves(false)
        .onCall(1)
        .resolves(false)
        .onCall(2)
        .resolves(false)
        .onCall(3)
        .resolves(false)
        .onCall(4)
        .resolves(true)
      sandbox.stub(uut, 'deleteBurnedUtxos').resolves(true)

      const { slpTxs, nonSlpTxs } = await uut.filterSlpTxs(txs)
      // console.log(slpTxs)

      assert.isArray(slpTxs)
      assert.isArray(nonSlpTxs)
      assert.equal(slpTxs.length, 1)
      assert.equal(slpTxs[0], txs[4])
    })

    it('should catch and throw errors', async () => {
      try {
        // From block 652,276
        const txs = [
          '5d7001c04bfb21a3d45bb084269ce811bf11269bc020eb4146440ebd66057d4a',
          '01b2118775d84a48dec3d31c760fddd8abc44dad6073b26f72d57fbc636d912d',
          '38d5f98dbe7ff2f0205c1a370d5d587d8d98aa65ad60d7026e381e7ba559d5d0',
          'a0b18e78d60b8ead3a5c45a00a964d04c2a8c268d62043fccc644b0efdcf5dd8',
          'e05035a3719559fa4627016fd1edb2cc490092c906a3415394a16b0d0add8178'
        ]

        // Force an error
        sandbox
          .stub(uut.transaction, 'getTokenInfo')
          .rejects(new Error('test error'))

        // Force retry to be 0.
        uut.attempts = 0

        await uut.filterSlpTxs(txs)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'test error')
      }
    })
  })

  describe('#checkForParent2', () => {
    it('should return 2-tx DAG', async () => {
      // Mock dependencies
      sandbox
        .stub(uut.cache, 'get')
        .onCall(0)
        .resolves(mockData.twoTxDag01)
        .onCall(1)
        .resolves(mockData.twoTxDag02)
        .onCall(2)
        .resolves(mockData.twoTxDag02)
        .onCall(3)
        .resolves(mockData.twoTxDag03)

      const txid =
        'e5ff3083cd2dcf87a40a4a4a478349a394c1a1eeffe4857c2a173b183fdd42a2'

      const result = await uut.checkForParent2(txid, 543413)
      // console.log('result: ', result)

      assert.equal(result.hasParent, true)
      assert.equal(result.dag.length, 2)
    })

    it('should catch and throw errors', async () => {
      try {
        // Force error
        sandbox.stub(uut.cache, 'get').rejects(new Error('test error'))

        const txid =
          'e5ff3083cd2dcf87a40a4a4a478349a394c1a1eeffe4857c2a173b183fdd42a2'

        await uut.checkForParent2(txid, 543413)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.equal(err.message, 'test error')
      }
    })

    it('should skip a TX if the TXID already exists in the array', async () => {
      // Mock dependencies
      sandbox
        .stub(uut.cache, 'get')
        .onCall(0)
        .resolves(mockData.twoTxDag01)
        .onCall(1)
        .resolves(mockData.twoTxDag01)

      const txid =
        'e5ff3083cd2dcf87a40a4a4a478349a394c1a1eeffe4857c2a173b183fdd42a2'

      const result = await uut.checkForParent2(txid, 543413)
      // console.log('result: ', result)

      assert.equal(result.hasParent, true)
      assert.equal(result.dag.length, 1)
    })
  })

  describe('#forwardDag', () => {
    it('should add forward TXID to DAG', async () => {
      // force cache to get data from the full node.
      sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))

      // Mock dependencies
      sandbox
        .stub(uut.cache, 'get')
        .onCall(0)
        .resolves(mockData.forwardDagTx01)
        .onCall(1)
        .resolves(mockData.forwardDagTx02)
        .onCall(2)
        .resolves(mockData.forwardDagTx03)
        .onCall(3)
        .resolves(mockData.forwardDagTx02)
        .onCall(4)
        .resolves(mockData.forwardDagTx03)

      const chainedArray = [
        '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2',
        'e5ff3083cd2dcf87a40a4a4a478349a394c1a1eeffe4857c2a173b183fdd42a2',
        'f56121d5a21a319204cf26ce68a6d607fefa02ba6ac42b4647fcad813b32d8b3',
        '660057b446cc4c930493607aa02e943e4fe7c38ae0816797ff7234ba72fea50f'
      ]
      const unsortedArray = [
        '234893177b18a95dbfc1eb855d69f1c9cc256a317a6c51be8fd1b9a38ae072ce',
        '82a9c47118dd221bf528e8b9ee9daef626ca52fb824b92cbe52a83e87afb0fac',
        '483d0198ed272bd0be7c6bbaf0e60340cce926f7d32143e2b09c5513922eaf87'
      ]

      const result = await uut.forwardDag(chainedArray, unsortedArray)
      // console.log('result: ', result)

      assert.equal(result.success, true)
      assert.equal(result.chainedArray.length, 5)
      assert.equal(result.unsortedArray.length, 2)
    })

    it('should catch and throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut.cache, 'get').rejects(new Error('test error'))

        await uut.forwardDag(['fake-txid'], ['fake-txid'])

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#filterAndSortSlpTxs2', () => {
    it('should filter and sort a combination of independent and chained txs', async () => {
      // force cache to get data from the full node.
      sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))

      const blockHeight = 543413
      const txs = [
        '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2',
        '82a9c47118dd221bf528e8b9ee9daef626ca52fb824b92cbe52a83e87afb0fac',
        'e5ff3083cd2dcf87a40a4a4a478349a394c1a1eeffe4857c2a173b183fdd42a2'
      ]

      // Mock dependencies
      sandbox.stub(uut, 'filterSlpTxs').resolves({ slpTxs: txs, nonSlpTxs: [] })
      sandbox
        .stub(uut, 'checkForParent2')
        .onCall(0)
        .resolves({ hasParent: false, dag: [txs[0]] })
        .onCall(1)
        .resolves({ hasParent: false, dag: [txs[1]] })
      sandbox
        .stub(uut, 'forwardDag')
        .onCall(0)
        .resolves({
          success: true,
          chainedArray: [txs[0], txs[2]],
          unsortedArray: [txs[1]]
        })

      const { combined, nonSlpTxs } = await uut.filterAndSortSlpTxs2(txs, blockHeight)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.equal(combined.length, 3)
      assert.include(combined[0], '82a9') // Independent tx
      assert.include(combined[2], 'e5ff') // newest chained tx
      assert.isArray(nonSlpTxs)
    })

    it('should return an empty array if given an empty array', async () => {
      const blockHeight = 543413
      const txs = []

      const result = await uut.filterAndSortSlpTxs2(txs, blockHeight)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.isArray(result)
      assert.equal(result.length, 0)
    })

    it('should catch and throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut, 'filterSlpTxs').rejects(new Error('test error'))

        const blockHeight = 543413
        const txs = []

        await uut.filterAndSortSlpTxs2(txs, blockHeight)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should remove independent TXs from the slp tx array', async () => {
      // force cache to get data from the full node.
      sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))

      const blockHeight = 543413
      const txs = [
        '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2',
        '82a9c47118dd221bf528e8b9ee9daef626ca52fb824b92cbe52a83e87afb0fac',
        'e5ff3083cd2dcf87a40a4a4a478349a394c1a1eeffe4857c2a173b183fdd42a2'
      ]

      // Mock dependencies
      sandbox.stub(uut, 'filterSlpTxs').resolves({ slpTxs: mockData.slpTxs01, nonSlpTxs: [] })
      sandbox
        .stub(uut, 'checkForParent2')
        .onCall(0)
        .resolves({ hasParent: false, dag: ['82a9c47118dd221bf528e8b9ee9daef626ca52fb824b92cbe52a83e87afb0fac'] })
        .onCall(1)
        .resolves({ hasParent: false, dag: ['170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'] })
      sandbox
        .stub(uut, 'forwardDag')
        .onCall(0)
        .resolves({
          success: false,
          chainedArray: ['82a9c47118dd221bf528e8b9ee9daef626ca52fb824b92cbe52a83e87afb0fac']
        })
        .onCall(1)
        .resolves({
          success: true,
          chainedArray: [
            '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2',
            'e5ff3083cd2dcf87a40a4a4a478349a394c1a1eeffe4857c2a173b183fdd42a2',
            'f56121d5a21a319204cf26ce68a6d607fefa02ba6ac42b4647fcad813b32d8b3',
            '660057b446cc4c930493607aa02e943e4fe7c38ae0816797ff7234ba72fea50f',
            '483d0198ed272bd0be7c6bbaf0e60340cce926f7d32143e2b09c5513922eaf87',
            '234893177b18a95dbfc1eb855d69f1c9cc256a317a6c51be8fd1b9a38ae072ce',
            'a333e7ebd34f0e24b567e99ed27241e3cfda5e9952cacdaa8fab31a7ee7e544d'
          ]
        })

      const { combined, nonSlpTxs } = await uut.filterAndSortSlpTxs2(txs, blockHeight)
      // console.log('combined: ', combined)
      // console.log('nonSlpTxs: ', nonSlpTxs)

      assert.equal(combined.length, 8)
      assert.include(combined[0], '82a9') // Independent tx
      assert.include(combined[2], 'e5ff') // newest chained tx
      assert.isArray(nonSlpTxs)
    })
  })

  describe('#getAddressFromTxid', () => {
    it('should return data from the utxo database', async () => {
      // Mock dependencies
      sandbox.stub(uut.utxoDb, 'get').resolves({ address: 'addr' })

      const result = await uut.getAddressFromTxid('fake-txid', 0)

      assert.equal(result, 'addr')
    })

    it('should return false if UTXO is not in database', async () => {
      // Mock dependencies
      sandbox.stub(uut.utxoDb, 'get').rejects(new Error('not found'))

      const result = await uut.getAddressFromTxid('fake-txid', 0)

      assert.equal(result, false)
    })
  })

  describe('#deleteBurnedUtxos', () => {
    it('should update address and token data from burn TXID', async () => {
      // Mock dependencies
      sandbox.stub(uut.transaction, 'getTxWithRetry').resolves(mockData.burnTx01)
      sandbox.stub(uut, 'getAddressFromTxid').resolves('bitcoincash:qp3t5cuncq2czduh27ps3jmz08m37ey3s5le8qca2f')
      sandbox
        .stub(uut.addrDb, 'get')
        .onCall(0)
        .rejects(new Error('not found'))
        .onCall(1)
        .resolves(mockData.addrData01)
      sandbox.stub(uut.cache, 'get').resolves(mockData.burnTx01)
      sandbox.stub(uut.tokenDb, 'get').resolves(mockData.tokenData01)
      sandbox.stub(uut.addrDb, 'put').resolves()
      sandbox.stub(uut.utxoDb, 'del').resolves()
      sandbox.stub(uut.tokenDb, 'put').resolves()

      const txid =
        '70d69e0f3d58e52526ef8136b20993b5b4d3f7c936771fd2f490ccfc5c019372'

      const result = await uut.deleteBurnedUtxos(txid)

      assert.equal(result, true)
    })

    it('should return true after processing non-token tx', async () => {
      // Mock dependencies
      sandbox.stub(uut.transaction, 'getTxWithRetry').resolves(mockData.burnTx01)
      // Force utxo DB to not have the UTXOs in question. This simulates a non-
      // slp transaction.
      sandbox.stub(uut, 'getAddressFromTxid').resolves(false)

      const txid =
        '70d69e0f3d58e52526ef8136b20993b5b4d3f7c936771fd2f490ccfc5c019372'

      const result = await uut.deleteBurnedUtxos(txid)

      assert.equal(result, true)
    })

    it('should return false on a processing error', async () => {
      // Force error
      sandbox.stub(uut.transaction, 'getTxWithRetry').rejects(new Error('test error'))

      const result = await uut.deleteBurnedUtxos()

      assert.equal(result, false)
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/slp-indexer/lib/start-stop.unit.js`:

```js
/*
  Unit tests for the start-stop.js library
*/

import { assert } from 'chai'
import sinon from 'sinon'

import StartStop from '../../../../../src/adapters/slp-indexer/lib/start-stop.js'

describe('#start-stop', () => {
  let uut, sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new StartStop()
  })

  afterEach(() => sandbox.restore())

  describe('#stopStatus', () => {
    it('should return false by default', () => {
      const result = uut.stopStatus()

      assert.equal(result, false)
    })

    it('should return true if stopIndexing is true', () => {
      uut.stopIndexing = true

      const result = uut.stopStatus()

      assert.equal(result, true)
    })
  })

  describe('#initStartStop', () => {
    it('should initialize stdin hooks', () => {
      // mock process so that test completes.
      // sandbox.stub(process.stdin, 'setRawMode').returns()
      // sandbox.stub(process.stdin, 'on').returns()
      uut.process = mockProcess

      const result = uut.initStartStop()

      assert.equal(result, true)
    })

    it('should set raw mode if stdin is TTY', () => {
      // mock process so that test completes.
      uut.process = mockProcess
      uut.process.stdin.isTTY = true

      const result = uut.initStartStop()

      assert.equal(result, true)
    })
  })

  describe('#qDetected', () => {
    it('should set the stop flag if the q key is detected', () => {
      const key = {
        name: 'q'
      }

      const result = uut.qDetected('', key)

      assert.equal(result, true)
      assert.equal(uut.stopIndexing, true)
    })

    it('should exit immediately if ctrl-c is detected', () => {
      uut.process = mockProcess

      const key = {
        name: 'c',
        ctrl: true
      }

      const result = uut.qDetected('', key)

      assert.equal(result, true)
    })
  })
})

const mockProcess = {
  stdin: {
    setRawMode: () => {},
    on: () => {}
  },
  exit: () => {}
}

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/slp-indexer/lib/blacklist.unit.js`:

```js
/*
  unit tests for the Cache library
*/

// Global npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

import Blacklist from '../../../../../src/adapters/slp-indexer/lib/blacklist.js'

describe('#blacklist', () => {
  let uut, sandbox

  beforeEach(() => {
    // Restore the sandbox before each test.
    sandbox = sinon.createSandbox()

    uut = new Blacklist()
  })

  afterEach(() => sandbox.restore())

  describe('#checkBlacklist', () => {
    it('should return true if a token ID is on the blacklist', () => {
      // Use a token ID that is on the blacklist (FlexUSD)
      const tokenId = 'dd21be4532d93661e8ffe16db6535af0fb8ee1344d1fef81a193e2b4cfa9fbc9'

      const result = uut.checkBlacklist(tokenId)

      assert.equal(result, true)
    })

    it('should return false if a token ID is not in the blacklist', () => {
      // Use a token ID that is on the blacklist (FlexUSD)
      const tokenId = 'dd21be4532d93661e8ffe16db6535af0fb8ee1344d1fef81a193e2b4cfa9faaa'

      const result = uut.checkBlacklist(tokenId)

      assert.equal(result, false)
    })

    it('should catch and throw errors', () => {
      try {
        // Force an error
        uut.blacklist = null

        uut.checkBlacklist()

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log('err: ', err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/slp-indexer/lib/query.unit.js`:

```js
/*
  Unit tests for the start-stop.js library
*/

import { assert } from 'chai'
import sinon from 'sinon'

import Query from '../../../../../src/adapters/slp-indexer/lib/query.js'
import MockLevel from '../../../../unit/mocks/leveldb-mock.js'

describe('#query', () => {
  let uut, sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    const addrDb = new MockLevel()
    const tokenDb = new MockLevel()
    const txDb = new MockLevel()
    const statusDb = new MockLevel()
    const pTxDb = new MockLevel()
    const localConfig = { addrDb, tokenDb, txDb, statusDb, pTxDb }

    uut = new Query(localConfig)
  })

  afterEach(() => sandbox.restore())

  describe('#getAddress', () => {
    it('should get an address from the database', async () => {
      sandbox.stub(uut.addrDb, 'get').resolves(true)

      const result = await uut.getAddress('fake-addr')

      assert.equal(result, true)
    })

    it('should throw an error if address is not passed in', async () => {
      try {
        await uut.getAddress()

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.message, 'Address required when calling getAddress()')
      }
    })
  })

  describe('#getTx', () => {
    it('should get a transaction from the database', async () => {
      sandbox.stub(uut.txDb, 'get').resolves(true)

      const result = await uut.getTx('fake-txid')

      assert.equal(result, true)
    })

    it('should throw an error if txid is not passed in', async () => {
      try {
        await uut.getTx()

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.message, 'txid required when calling getTx()')
      }
    })
  })

  describe('#getToken', () => {
    it('should get a token from the database', async () => {
      sandbox.stub(uut.tokenDb, 'get').resolves(true)

      const result = await uut.getToken('fake-token-id')

      assert.equal(result, true)
    })

    it('should throw an error if token ID is not passed in', async () => {
      try {
        await uut.getToken()

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.message, 'tokenId required when calling getToken()')
      }
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/slp-indexer/lib/level-db.unit.js`:

```js
/*
  Unit tests for the level-db.js adapter library.
*/

// Global npm libraries
import { assert } from 'chai'

// const LevelDb = require('../../../../../src/adapters/slp-indexer/lib/level-db')
import LevelDb from '../../../../../src/adapters/slp-indexer/lib/level-db.js'

describe('#level-db', () => {
  let uut

  beforeEach(() => {
    uut = new LevelDb()
  })

  afterEach(async () => {
    await uut.closeDbs()
  })

  describe('#openDbs', () => {
    it('should open the databases and return handles', () => {
      const { addrDb, txDb, tokenDb, statusDb, pTxDb, utxoDb } = uut.openDbs()
      // console.log('addrDb: ', addrDb)
      // console.log('addrDb.db.status: ', addrDb.db.status)

      assert.equal(addrDb.db.status, 'opening')
      assert.equal(txDb.db.status, 'opening')
      assert.equal(tokenDb.db.status, 'opening')
      assert.equal(statusDb.db.status, 'opening')
      assert.equal(pTxDb.db.status, 'opening')
      assert.equal(utxoDb.db.status, 'opening')
    })
  })

  // describe('#closeDbs', () => {
  //   it('should close all DBs', async () => {

  //     const result = await uut.closeDbs()

  //     assert.equal(result, true)
  //   })
  // })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/slp-indexer/lib/retry-queue.unit.js`:

```js
/*
  Unit tests for the retry-queue library.
*/

// const assert = require('chai').assert
// const sinon = require('sinon')
import { assert } from 'chai'
import sinon from 'sinon'

import RetryQueue from '../../../../../src/adapters/slp-indexer/lib/retry-queue.js'

let uut
let sandbox

describe('#retry-queue.js', () => {
  beforeEach(() => {
    uut = new RetryQueue()

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#_retryWrapper', () => {
    it('should throw an error if function handler is not provided', async () => {
      try {
        await uut.retryWrapper()
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'function handler is required')
      }
    })

    it('should throw an error if input object  is not provided', async () => {
      try {
        const funcHandler = () => {}
        await uut.retryWrapper(funcHandler)
        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'input object is required')
      }
    })

    it('should execute the given function.', async () => {
      const inputTest = 'test'
      // func mock to execute into the retry wrapper
      const funcHandle = sinon.spy()

      await uut.retryWrapper(funcHandle, inputTest)

      assert.equal(inputTest, funcHandle.getCall(0).args[0])
      assert.equal(funcHandle.callCount, 1)
    })

    it('should call handleValidationError() when p-retry error is thrown', async () => {
      try {
        // Mock for ignore sleep time
        sandbox.stub(uut, 'sleep').resolves({})

        const inputTest = 'test'
        const funcHandle = () => {
          throw new Error('test error')
        }
        uut.attempts = 1

        await uut.retryWrapper(funcHandle, inputTest)

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should retry the specific number of times before giving up', async () => {
      // Mock for ignore sleep time
      sandbox.stub(uut, 'sleep').resolves({})

      const inputTest = 'test'
      const funcHandle = () => {
        throw new Error('test error')
      }
      // func handler
      const spy = sinon.spy(funcHandle)

      // p-retry attempts
      const attempts = 1

      try {
        uut.attempts = attempts

        await uut.retryWrapper(spy, inputTest)

        assert.fail('unexpected code path')
      } catch (error) {
        assert.equal(spy.callCount, attempts + 1)
      }
    })
  })

  describe('#addToQueue', () => {
    it('should throw an error if function handler is not provided', async () => {
      try {
        await uut.addToQueue()

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'function handler is required')
      }
    })

    it('should throw an error if input object  is not provided', async () => {
      try {
        const funcHandler = () => {}

        await uut.addToQueue(funcHandler)

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, 'input object is required')
      }
    })

    it('should add a function and input object to the queue and execute them', async () => {
      const inputTest = 'test'
      // func mock to execute into the retry wrapper
      const funcHandle = sinon.spy()

      await uut.addToQueue(funcHandle, inputTest)

      assert.equal(inputTest, funcHandle.getCall(0).args[0])
      assert.equal(funcHandle.callCount, 1)
    })

    it('should handle http 500 error when TXID does not exist', async () => {
      try {
        // Mock for ignore sleep time
        sandbox.stub(uut, 'sleep').resolves({})

        const inputTest = 'test'

        const funcHandle = () => {
          throw new Error('some error 500 http status')
        }

        sandbox.stub(uut.queue, 'add').rejects(new Error('some error 500 http status'))

        uut.attempts = 1
        await uut.addToQueue(funcHandle, inputTest)

        assert.fail('unexpected code path')
      } catch (err) {
        assert.include(err.message, '500')
      }
    })
  })

  describe('#handleValidationError', () => {
    it('should catch and throw an error', async () => {
      try {
        await uut.handleValidationError()

        assert.fail('unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'Cannot read')
      }
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/slp-indexer/slp-indexer.unit.js`:

```js
/*
  Unit tests for the main slp-indexer/index.js library
*/

// Global npm libraries
import { assert } from 'chai'
import sinon from 'sinon'
import cloneDeep from 'lodash.clonedeep'

// Local libraries
import SlpIndexer from '../../../../src/adapters/slp-indexer/index.js'
import MockLevel from '../../../unit/mocks/leveldb-mock.js'
import mockTxLib from '../../mocks/transaction-mock.js'

describe('#slpIndexer', () => {
  let uut, sandbox, mockTxData

  // Generate mock databases.
  function openMockDbs () {
    const addrDb = new MockLevel()
    const tokenDb = new MockLevel()
    const txDb = new MockLevel()
    const statusDb = new MockLevel()
    const pTxDb = new MockLevel()
    const utxoDb = new MockLevel()

    uut.addrDb = addrDb
    uut.tokenDb = tokenDb
    uut.txDb = txDb
    uut.statusDb = statusDb
    uut.pTxDb = pTxDb
    uut.utxoDb = utxoDb

    return { addrDb, tokenDb, txDb, statusDb, pTxDb, utxoDb }
  }

  beforeEach(() => {
    uut = new SlpIndexer()
    const dbs = openMockDbs()
    uut.encapsulateDeps(dbs)

    mockTxData = cloneDeep(mockTxLib)

    // Restore the sandbox before each test.
    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#openDatabases', () => {
    it('should open and then close databases', async () => {
      const { addrDb, tokenDb, txDb, statusDb, pTxDb, utxoDb } = uut.openDatabases()

      await addrDb.close()
      await tokenDb.close()
      await txDb.close()
      await statusDb.close()
      await pTxDb.close()
      await utxoDb.close()
    })
  })

  // Note: This test completes right away but causes the process to stay open
  // for a few seconds while all the support libraries do their thing.
  describe('#encapsulateDeps', () => {
    it('should instantiate all support libraries and encapsulate them', () => {
      const dbs = openMockDbs()

      const result = uut.encapsulateDeps(dbs)

      assert.equal(result, true)
    })
  })

  describe('#getStatus()', () => {
    it('should get status from the database', async () => {
      uut.statusDb = new MockLevel()
      sandbox.stub(uut.statusDb, 'get').resolves('test data')

      const result = await uut.getStatus()

      assert.equal(result, 'test data')
    })

    it('should initialze the status DB on error', async () => {
      uut.statusDb = new MockLevel()

      // Force an error
      sandbox.stub(uut.statusDb, 'get').rejects(new Error('test error'))

      const result = await uut.getStatus()
      // console.log('result: ', result)

      assert.equal(result.startBlockHeight, 543376)
      assert.equal(result.syncedBlockHeight, 543376)
    })
  })

  describe('#processData', () => {
    it('should skip tokens with unknown token type', async () => {
      const data = {
        slpData: {
          tokenType: 42
        },
        txData: {
          txid: 'fake-txid'
        }
      }

      const result = await uut.processData(data)

      assert.equal(result, false)
    })

    it('should route NFT Genesis tx', async () => {
      // Mock dependencies
      sandbox.stub(uut.nftGenesis, 'processTx').resolves()

      const data = {
        slpData: {
          tokenType: 65,
          txType: 'GENESIS'
        },
        txData: {
          txid: 'fake-txid'
        }
      }

      const result = await uut.processData(data)

      assert.equal(result, true)
    })

    it('should route Type 1 Genesis tx', async () => {
      // Mock dependencies
      sandbox.stub(uut.genesis, 'processTx').resolves()

      const data = {
        slpData: {
          tokenType: 1,
          txType: 'GENESIS'
        },
        txData: {
          txid: 'fake-txid'
        }
      }

      const result = await uut.processData(data)

      assert.equal(result, true)
    })

    it('should route a mint tx', async () => {
      // Mock dependencies
      sandbox.stub(uut.mint, 'processTx').resolves()

      const data = {
        slpData: {
          tokenType: 1,
          txType: 'MINT',
          tokenId: 'fake-token-ID'
        },
        txData: {
          txid: 'fake-txid'
        }
      }

      const result = await uut.processData(data)

      assert.equal(result, true)
    })

    it('should route a send tx', async () => {
      // Mock dependencies
      sandbox.stub(uut.send, 'processTx').resolves()

      const data = {
        slpData: {
          tokenType: 1,
          txType: 'SEND',
          tokenId: 'fake-token-ID'
        },
        txData: {
          txid: 'fake-txid'
        }
      }

      const result = await uut.processData(data)

      assert.equal(result, true)
    })

    it('should catch, report, and throw errors', async () => {
      try {
        const data = {
          slpData: {
            tokenType: 42
          },
          txData: {
            txid: 'fake-txid'
          }
        }

        // Force an error
        sandbox.stub(uut.txDb, 'put').rejects(new Error('test error'))

        await uut.processData(data)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#processTx', () => {
    it('should skip transactions that have already been processed', async () => {
      const inData = {
        tx: 'fake-txid',
        blockHeight: 600000
      }

      sandbox.stub(uut.pTxDb, 'get').resolves('fake result')

      const result = await uut.processTx(inData)

      assert.equal(result, false)
    })

    it('should mark blacklist tokens with isValidSlp = null in txDb', async () => {
      // Mock dependencies
      sandbox.stub(uut.pTxDb, 'get').rejects(new Error('Entry not found'))
      sandbox.stub(uut.transaction, 'decodeOpReturn').resolves({ tokenId: 'fake-tokenid' })
      sandbox.stub(uut.blacklist, 'checkBlacklist').returns(true)

      const inData = {
        tx: 'fake-txid',
        blockHeight: 600000
      }

      const result = await uut.processTx(inData)

      assert.equal(result.isValidSlp, null)
    })

    it('should exit quietly if there is an error checking the blacklist', async () => {
      // Mock dependencies
      sandbox.stub(uut.pTxDb, 'get').rejects(new Error('Entry not found'))
      sandbox.stub(uut.transaction, 'decodeOpReturn').rejects(new Error('test error'))
      // sandbox.stub(uut.blacklist, 'checkBlacklist').returns(true)

      const inData = {
        tx: 'fake-txid',
        blockHeight: 600000
      }

      const result = await uut.processTx(inData)

      assert.equal(result.isValidSlp, null)
    })

    it('should identify SLP txs and route them to processData()', async () => {
      // Mock dependencies
      sandbox.stub(uut.pTxDb, 'get').rejects(new Error('Entry not found'))
      sandbox.stub(uut.transaction, 'decodeOpReturn').resolves({ tokenId: 'fake-tokenid' })
      sandbox.stub(uut.blacklist, 'checkBlacklist').returns(false)
      sandbox.stub(uut.cache, 'get').resolves({})
      sandbox.stub(uut, 'processData').resolves()

      const inData = {
        tx: 'fake-txid',
        blockHeight: 600000
      }

      const result = await uut.processTx(inData)

      assert.equal(result, true)
    })

    it('should catch, report, and throw errors', async () => {
      try {
        await uut.processTx()

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'Cannot destructure')
      }
    })
  })

  describe('#handleProcessFailure', () => {
    it('should roll back to the oldest parent TX blockhight', async () => {
      // Mock dependencies
      sandbox.stub(uut.cache, 'get').resolves(mockTxData.genesisTestInputTx02)
      sandbox.stub(uut.dbBackup, 'unzipDb').resolves()
      sandbox.stub(uut.process, 'exit').returns()

      const result = await uut.handleProcessFailure(603424, 'fake-txid', 'some error')

      assert.equal(result, true)
    })

    it('should catch and report errors', async () => {
      // Force error
      sandbox.stub(uut.cache, 'get').rejects(new Error('test error'))

      const result = await uut.handleProcessFailure()

      assert.equal(result, false)
    })

    it('should loop through parent txs', async () => {
      // Force desired code path
      mockTxData.genesisTestInputTx02.vin[0].tokenQty = 5
      mockTxData.nftGenesisTx01.blockheight = 602345

      // Mock dependencies
      sandbox.stub(uut.cache, 'get')
        .onCall(0).resolves(mockTxData.genesisTestInputTx02)
        .onCall(1).resolves(mockTxData.nftGenesisTx01)
      sandbox.stub(uut.dbBackup, 'unzipDb').resolves()
      sandbox.stub(uut.process, 'exit').returns()

      const result = await uut.handleProcessFailure(603424, 'fake-txid', 'some error')

      assert.equal(result, true)
    })
  })

  describe('#processSlpTxs', () => {
    it('should process slp TXs in a block', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'processTx').resolves()

      const blockHeight = 543413
      const slpTxs = [
        '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
      ]

      const result = await uut.processSlpTxs(slpTxs, blockHeight)

      assert.equal(result, true)
    })

    it('should skip errors in phase 2', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'processTx').rejects(new Error('test error'))
      uut.indexState = 'phase2'

      const blockHeight = 543413
      const slpTxs = [
        '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
      ]

      const result = await uut.processSlpTxs(slpTxs, blockHeight)

      assert.equal(result, null)
    })

    it('should throw error for unprocessible transactions', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'processTx').rejects(new Error('test error'))
      sandbox.stub(uut, 'handleProcessFailure').resolves()
      uut.RETRY_CNT = 0
      uut.indexState = 'phase1'

      const blockHeight = 543413
      const slpTxs = [
        '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
      ]

      try {
        await uut.processSlpTxs(slpTxs, blockHeight)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'Failed to process TXID')
      }
    })

    it('should catch, report, and throw errors', async () => {
      try {
        await uut.processSlpTxs()

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'Cannot read')
      }
    })
  })

  describe('#processBlock', () => {
    it('should process txs in a block', async () => {
      // Mock dependencies
      const block = {
        tx: [
          '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
        ]
      }
      sandbox.stub(uut.rpc, 'getBlockHash').resolves()
      sandbox.stub(uut.rpc, 'getBlock').resolves(block)
      sandbox.stub(uut.filterBlock, 'filterAndSortSlpTxs2').resolves({
        combined: ['170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'],
        nonSlpTxs: ['170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2']
      })
      sandbox.stub(uut, 'processSlpTxs').resolves()
      sandbox.stub(uut.filterBlock, 'deleteBurnedUtxos').resolves(false)
      sandbox.stub(uut.managePtxdb, 'cleanPTXDB').resolves()

      const result = await uut.processBlock(600000)

      assert.equal(result, 1)
    })

    it('should create a backup every epoch', async () => {
      // Mock dependencies
      const block = {
        tx: [
          '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
        ]
      }
      sandbox.stub(uut.rpc, 'getBlockHash').resolves()
      sandbox.stub(uut.rpc, 'getBlock').resolves(block)
      sandbox.stub(uut.filterBlock, 'filterAndSortSlpTxs2').resolves({
        combined: ['170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'],
        nonSlpTxs: ['170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2']
      })
      sandbox.stub(uut, 'processSlpTxs').resolves()
      sandbox.stub(uut.filterBlock, 'deleteBurnedUtxos').resolves(false)
      sandbox.stub(uut.managePtxdb, 'cleanPTXDB').resolves()
      sandbox.stub(uut.dbBackup, 'zipDb').resolves()

      uut.indexState = 'phase1'

      const result = await uut.processBlock(600000)

      assert.equal(result, 2)
    })

    it('should rollback to last ephoch when in phase 2 indexing', async () => {
      // Mock dependencies
      const block = {
        tx: [
          '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
        ]
      }
      sandbox.stub(uut.rpc, 'getBlockHash').resolves()
      sandbox.stub(uut.rpc, 'getBlock').resolves(block)
      sandbox.stub(uut.filterBlock, 'filterAndSortSlpTxs2').resolves({
        combined: ['170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'],
        nonSlpTxs: ['170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2']
      })
      sandbox.stub(uut, 'processSlpTxs').resolves()
      sandbox.stub(uut.filterBlock, 'deleteBurnedUtxos').resolves(false)
      sandbox.stub(uut.managePtxdb, 'cleanPTXDB').resolves()
      sandbox.stub(uut.dbBackup, 'unzipDb').resolves()
      sandbox.stub(uut.process, 'exit').returns()

      uut.indexState = 'phase2'

      const result = await uut.processBlock(600001)

      assert.equal(result, 3)
    })

    it('should catch, report, and throw errors', async () => {
      try {
        // Force an error
        sandbox.stub(uut.rpc, 'getBlockHash').rejects(new Error('test error'))

        await uut.processBlock(588923)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })

  describe('#start', () => {
    it('should start indexing in phase1', async () => {
      // Mock dependencies
      sandbox.stub(uut.startStop, 'initStartStop').returns()
      sandbox.stub(uut, 'getStatus').resolves({
        syncedBlockHeight: 566777,
        chainBlockHeight: 566778
      })
      sandbox.stub(uut.rpc, 'getBlockCount').resolves(566778)
      sandbox.stub(uut, 'processBlock').resolves()
      sandbox.stub(uut.zmq, 'connect').resolves()
      sandbox.stub(uut.zmq, 'getTx').returns(false)
      sandbox.stub(uut.zmq, 'getBlock').returns(false)
      sandbox.stub(uut.process, 'exit').returns()

      // Force an error to exit the loop
      sandbox.stub(uut.utils, 'sleep').rejects(new Error('test error'))

      const result = await uut.start()

      assert.equal(result, 0)
    })

    it('should stop indexing if the user hits the q button', async () => {
      // Mock dependencies
      sandbox.stub(uut.startStop, 'initStartStop').returns()
      sandbox.stub(uut, 'getStatus').resolves({
        syncedBlockHeight: 566777,
        chainBlockHeight: 566778
      })
      sandbox.stub(uut.rpc, 'getBlockCount').resolves(566778)
      sandbox.stub(uut.startStop, 'stopStatus').returns(true)

      sandbox.stub(uut.process, 'exit')
        .onCall(0).throws(new Error('test error'))
        .onCall(1).returns()

      const result = await uut.start()

      assert.equal(result, 0)
    })

    it('should process a ZMQ transaction in phase 2', async () => {
      // Mock dependencies
      sandbox.stub(uut.startStop, 'initStartStop').returns()
      sandbox.stub(uut, 'getStatus').resolves({
        syncedBlockHeight: 566777,
        chainBlockHeight: 566778
      })
      sandbox.stub(uut.rpc, 'getBlockCount').resolves(566778)
      sandbox.stub(uut, 'processBlock').resolves()
      sandbox.stub(uut.zmq, 'connect').resolves()
      sandbox.stub(uut.zmq, 'getTx').returns({})
      sandbox.stub(uut, 'processTx').resolves()
      sandbox.stub(uut.zmq, 'getBlock').returns(false)
      sandbox.stub(uut.process, 'exit').returns()

      // Force an error to exit the loop
      sandbox.stub(uut.utils, 'sleep').rejects(new Error('test error'))

      const result = await uut.start()

      assert.equal(result, 0)
    })

    it('should exit quiety if there is an error processes a ZMQ transaction in phase 2', async () => {
      // Mock dependencies
      sandbox.stub(uut.startStop, 'initStartStop').returns()
      sandbox.stub(uut, 'getStatus').resolves({
        syncedBlockHeight: 566777,
        chainBlockHeight: 566778
      })
      sandbox.stub(uut.rpc, 'getBlockCount').resolves(566778)
      sandbox.stub(uut, 'processBlock').resolves()
      sandbox.stub(uut.zmq, 'connect').resolves()
      sandbox.stub(uut.zmq, 'getTx').returns({})
      sandbox.stub(uut, 'processTx').rejects(new Error('test error'))
      sandbox.stub(uut.zmq, 'getBlock').returns(false)
      sandbox.stub(uut.process, 'exit').returns()

      // Force an error to exit the loop
      sandbox.stub(uut.utils, 'sleep').rejects(new Error('test error'))

      const result = await uut.start()

      assert.equal(result, 0)
    })

    it('should process a ZMQ block in phase 2', async () => {
      // Mock dependencies
      sandbox.stub(uut.startStop, 'initStartStop').returns()
      sandbox.stub(uut, 'getStatus').resolves({
        syncedBlockHeight: 566777,
        chainBlockHeight: 566778
      })
      sandbox.stub(uut.rpc, 'getBlockCount').resolves(566778)
      sandbox.stub(uut, 'processBlock').resolves()
      sandbox.stub(uut.zmq, 'connect').resolves()
      sandbox.stub(uut.zmq, 'getTx').returns(false)
      sandbox.stub(uut.zmq, 'getBlock').returns({ hash: 'fake-hash' })
      sandbox.stub(uut.rpc, 'getBlockHeader').resolves({ height: 566778 })
      sandbox.stub(uut.process, 'exit').returns()

      // Force an error to exit the loop
      sandbox.stub(uut.utils, 'sleep').rejects(new Error('test error'))

      const result = await uut.start()

      assert.equal(result, 0)
    })

    it('In phase 2, it should report every 100 checks of the ZMQ queue', async () => {
      // Mock dependencies
      sandbox.stub(uut.startStop, 'initStartStop').returns()
      sandbox.stub(uut, 'getStatus').resolves({
        syncedBlockHeight: 566777,
        chainBlockHeight: 566778
      })
      sandbox.stub(uut.rpc, 'getBlockCount').resolves(566778)
      sandbox.stub(uut, 'processBlock').resolves()
      sandbox.stub(uut.zmq, 'connect').resolves()
      sandbox.stub(uut.zmq, 'getTx').returns(false)
      sandbox.stub(uut, 'processTx').resolves()
      sandbox.stub(uut.zmq, 'getBlock').returns(false)
      sandbox.stub(uut.process, 'exit').returns()

      // Force an error to exit the loop
      sandbox.stub(uut.utils, 'sleep').rejects(new Error('test error'))

      uut.loopCnt = 100

      const result = await uut.start()

      assert.equal(result, 0)
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/fullstack-jwt.adapter.unit.js`:

```js
/*
  Unit tests for the jwt-bch-lib and fullstack-jwt.js adapter library.

*/

import { assert } from 'chai'

import sinon from 'sinon'
import FullStackJWT from '../../../src/adapters/fullstack-jwt.js'

describe('#FullStackJWT', () => {
  let sandbox
  let uut

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    const localConfig = {
      authServer: 'someserver',
      apiServer: 'someserver',
      fullstackLogin: 'somelogin',
      fullstackPassword: 'somepassword'
    }
    uut = new FullStackJWT(localConfig)
  })
  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if auth server is not specified', () => {
      try {
        uut = new FullStackJWT()

        assert.fail('Unexpected code path')
        console.log(uut) // For linting.
      } catch (err) {
        assert.include(
          err.message,
          'Must pass a url for the AUTH server when instantiating FullStackJWT class.'
        )
      }
    })

    it('should throw an error if api server is not specified', () => {
      try {
        const localConfig = {
          authServer: 'someserver'
        }

        uut = new FullStackJWT(localConfig)

        assert.fail('Unexpected code path')
        console.log(uut) // For linting.
      } catch (err) {
        assert.include(
          err.message,
          'Must pass a url for the API server when instantiating FullStackJWT class.'
        )
      }
    })

    it('should throw an error if login is not specified', () => {
      try {
        const localConfig = {
          authServer: 'someserver',
          apiServer: 'someserver'
        }
        uut = new FullStackJWT(localConfig)

        assert.fail('Unexpected code path')
        console.log(uut) // For linting.
      } catch (err) {
        assert.include(
          err.message,
          'Must pass a FullStack.cash login (email) instantiating FullStackJWT class.'
        )
      }
    })

    it('should throw an error if login is not specified', () => {
      try {
        const localConfig = {
          authServer: 'someserver',
          apiServer: 'someserver',
          fullstackLogin: 'somelogin'
        }
        uut = new FullStackJWT(localConfig)

        assert.fail('Unexpected code path')
        console.log(uut) // For linting.
      } catch (err) {
        assert.include(
          err.message,
          'Must pass a FullStack.cash account password when instantiating FullStackJWT class.'
        )
      }
    })
  })

  describe('#getJWT', () => {
    it('should return the JWT token', async () => {
      // Mock dependencies to force a code path.
      sandbox.stub(uut.jwtLib, 'register').resolves({})
      uut.jwtLib.userData.apiToken = 'abc123'
      sandbox.stub(uut.jwtLib, 'validateApiToken').resolves({ isValid: true })

      const result = await uut.getJWT()
      // console.log('result: ', result)

      assert.equal(result, 'abc123')
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        sandbox.stub(uut.jwtLib, 'register').rejects(new Error('test error'))

        await uut.getJWT()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    it('should throw an error if user does not have a JWT', async () => {
      try {
        // Mock dependencies to force a code path.
        sandbox.stub(uut.jwtLib, 'register').resolves({})

        await uut.getJWT()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log('err.message: ', err.message)
        assert.include(err.message, 'This account does not have a JWT')
      }
    })

    it('should retrieve a new JWT token if the old one invalid', async () => {
      // Mock dependencies to force a code path.
      sandbox.stub(uut.jwtLib, 'register').resolves({})
      uut.jwtLib.userData.apiToken = 'abc123'
      uut.jwtLib.userData.apiLevel = 30
      sandbox.stub(uut.jwtLib, 'validateApiToken').resolves({ isValid: false })
      sandbox.stub(uut.jwtLib, 'getApiToken').resolves('xyz789')

      const result = await uut.getJWT()
      // console.log('result: ', result)

      assert.equal(result, 'xyz789')
    })
  })

  describe('#instanceBchjs', () => {
    it('should return an instance of bch-js', () => {
      const result = uut.instanceBchjs()
      // console.log('result: ', result)

      assert.property(result, 'restURL')
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/adapters/ipfs-coord.adapter.unit.js`:

```js
/*
  Unit tests for the IPFS Adapter.
*/

import { assert } from 'chai'

import sinon from 'sinon'
import IPFSCoordAdapter from '../../../src/adapters/ipfs/ipfs-coord.js'
import create from '../mocks/ipfs-mock.js'
import IPFSCoordMock from '../mocks/ipfs-coord-mock.js'
import config from '../../../config/index.js'

describe('#IPFS', () => {
  let uut
  let sandbox

  beforeEach(() => {
    const ipfs = create()
    uut = new IPFSCoordAdapter({ ipfs })

    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if ipfs instance is not included', () => {
      try {
        uut = new IPFSCoordAdapter()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of IPFS must be passed when instantiating ipfs-coord.'
        )
      }
    })
  })

  describe('#start', () => {
    it('should return a promise that resolves into an instance of IPFS.', async () => {
      // Mock dependencies.
      uut.IpfsCoord = IPFSCoordMock

      const result = await uut.start()
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should get the public IP address if this node is a Circuit Relay', async () => {
      // Mock dependencies.
      uut.IpfsCoord = IPFSCoordMock
      sandbox.stub(uut.publicIp, 'v4').resolves('123')

      // Force Circuit Relay
      uut.config.isCircuitRelay = true

      const result = await uut.start()
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should exit quietly if this node is a Circuit Relay and there is an issue getting the IP address', async () => {
      // Mock dependencies.
      uut.IpfsCoord = IPFSCoordMock
      sandbox.stub(uut.publicIp, 'v4').rejects(new Error('test error'))

      // Force Circuit Relay
      uut.config.isCircuitRelay = true

      const result = await uut.start()
      // console.log('result: ', result)

      assert.equal(result, true)
    })

    it('should return a promise that resolves into an instance of IPFS in production mode', async () => {
      uut.config.isProduction = true
      // Mock dependencies.
      uut.IpfsCoord = IPFSCoordMock

      const result = await uut.start()
      // console.log('result: ', result)
      assert.equal(result, true)
      config.isProduction = false
    })
  })

  describe('#attachRPCRouter', () => {
    it('should attached a router output', async () => {
      // Mock dependencies
      uut.ipfsCoord = {
        privateLog: {},
        ipfs: {
          orbitdb: {
            privateLog: {}
          }
        },
        adapters: {
          pubsub: {
            privateLog: () => {
            }
          }
        }
      }

      const router = console.log

      uut.attachRPCRouter(router)
    })

    it('should catch and throw an error', () => {
      try {
        // Force an error
        delete uut.ipfsCoord.adapters

        const router = console.log

        uut.attachRPCRouter(router)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Cannot read')
      }
    })
  })

  describe('#subscribeToChat', () => {
    it('should subscribe to the chat channel', async () => {
      // Mock dependencies
      uut.ipfsCoord = {
        adapters: {
          pubsub: {
            subscribeToPubsubChannel: async () => {
            }
          }
        }
      }

      await uut.subscribeToChat()
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/README.md`:

```md
# Unit Tests
Unit tests are defined as testing the smallest possible unit of a function. They also do not make any live network calls.

Unit tests are broken up by directory:

- [biz-logic](./biz-logic) tests the business logic libraries.
- [rest-api](./rest-api) tests the REST API specific handling of the router.
- json-rpc (coming soon) tests the JSON-RPC routing using ipfs-coord library.

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/misc/config.js`:

```js
/*
  Unit tests for the config directory
*/

import { assert } from 'chai'

let currentEnv

describe('#config', () => {
  before(() => {
    // Backup the current environment setting.
    currentEnv = process.env.SVC_ENV
  })

  after(() => {
    // Restore the environment setting before starting these tests.
    process.env.SVC_ENV = currentEnv
  })

  it('Should return development environment config by default', async () => {
    const importedConfig = await import('../../../config/index.js')
    const config = importedConfig.default
    // console.log('config: ', config)

    assert.equal(config.env, 'dev')
  })

  it('Should return test environment config', async () => {
    // Hack to dynamically import a library multiple times:
    // https://github.com/denoland/deno/issues/6946

    process.env.SVC_ENV = 'test'

    const importedConfig2 = await import('../../../config/index.js?foo=bar1')
    const config = importedConfig2.default
    // console.log('config: ', config)

    assert.equal(config.env, 'test')
  })

  it('Should return test environment config', async () => {
    process.env.SVC_ENV = 'prod'

    const importedConfig3 = await import('../../../config/index.js?foo=bar2')
    const config = importedConfig3.default
    // console.log('config: ', config)

    assert.equal(config.env, 'prod')
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/misc/server-unit.js`:

```js
/*
  Unit tests for the bin/server.js file
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local libraries
import Server from '../../../bin/server.js'

describe('#server', () => {
  let uut, sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new Server()
  })

  afterEach(() => sandbox.restore())

  describe('#startServer', () => {
    it('should start the server', async () => {
      // Mock dependencies
      sandbox.stub(uut.controllers, 'initAdapters').resolves()
      sandbox.stub(uut.controllers, 'initUseCases').resolves()
      sandbox.stub(uut.controllers, 'attachRESTControllers').resolves()
      sandbox.stub(uut.controllers, 'attachControllers').resolves()
      sandbox.stub(uut.controllers.adapters.slpIndexer, 'start').resolves()
      uut.config.env = 'dev'

      const result = await uut.startServer()
      // console.log('result: ', result)

      assert.property(result, 'env')

      // Turn off the server.
      uut.server.close()

      // Restor config env
      uut.config.env = 'test'
    })

    it('should exit on failure', async () => {
      // Force an error
      sandbox.stub(uut.controllers, 'initAdapters').rejects(new Error('test error'))

      // Prevent default behavior of exiting the program.
      sandbox.stub(uut, 'sleep').resolves()
      sandbox.stub(uut.process, 'exit').returns()

      await uut.startServer()

      // Not throwing an error is a success
    })
  })

  describe('#sleep', () => {
    it('should execute', async () => {
      await uut.sleep(1)
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/controllers/rest-api/contact/contact.rest.controller.unit.js`:

```js
/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
import { assert } from 'chai'

import sinon from 'sinon'
import ContactController from '../../../../../src/controllers/rest-api/contact/controller.js'

import { context as mockContext } from '../../../../unit/mocks/ctx-mock.js'
let uut
let sandbox
let ctx

describe('Contact', () => {
  before(async () => {
  })

  beforeEach(() => {
    uut = new ContactController()

    sandbox = sinon.createSandbox()

    // Mock the context object.
    ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#POST /contact', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        await uut.email(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'Cannot read')
      }
    })

    it('should return 200 status on success', async () => {
      sandbox.stub(uut.contactLib, 'sendEmail').resolves(true)

      ctx.request.body = {
        email: 'test02@test.com',
        formMessage: 'test'
      }

      await uut.email(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      // Assert that expected properties exist in the returned data.
      assert.property(ctx.response.body, 'success')
      assert.isTrue(ctx.response.body.success)
    })
  })

  describe('#handleError', () => {
    it('should pass an error message', () => {
      try {
        const err = {
          status: 422,
          message: 'Unprocessable Entity'
        }

        uut.handleError(ctx, err)
      } catch (err) {
        assert.include(err.message, 'Unprocessable Entity')
      }
    })

    it('should still throw error if there is no message', () => {
      try {
        const err = {
          status: 404
        }

        uut.handleError(ctx, err)
      } catch (err) {
        assert.include(err.message, 'Not Found')
      }
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/controllers/rest-api/contact/contact.rest.router.unit.js`:

```js
/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
import { assert } from 'chai'

import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'

import UseCasesMock from '../../../mocks/use-cases/index.js'

// const app = require('../../../mocks/app-mock')

import ContactRouter from '../../../../../src/controllers/rest-api/contact/index.js'

let uut
let sandbox
// let ctx

// const mockContext = require('../../../../unit/mocks/ctx-mock').context

describe('#Contact-REST-Router', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new ContactRouter({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    // ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new ContactRouter()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating Contact REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new ContactRouter({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating Contact REST Controller.'
        )
      }
    })
  })

  describe('#attach', () => {
    it('should throw an error if app is not passed in.', () => {
      try {
        uut.attach()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Must pass app object when attaching REST API controllers.'
        )
      }
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/controllers/rest-api/rest.controller.unit.js`:

```js
/*
  Unit tests for the REST API controllers/rest-api/index.js library.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local libraries
import RESTControllers from '../../../../src/controllers/rest-api/index.js'
import adapters from '../../mocks/adapters/index.js'
import UseCasesMock from '../../mocks/use-cases/index.js'

describe('#RESTControllers', () => {
  let uut
  let sandbox
  // let ctx

  before(async () => {})

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new RESTControllers({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    // ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new RESTControllers()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating REST Controller libraries.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new RESTControllers({ adapters })

        assert.fail('Unexpected code path')

        // use to prevent complaints from linter.
        console.log('uut: ', uut)
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating REST Controller libraries.'
        )
      }
    })
  })

  describe('#attachRESTControllers', () => {
    it('should attach controllers to the app', () => {
      const app = {
        use: () => {}
      }

      const result = uut.attachRESTControllers(app)

      assert.equal(result, true)
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/controllers/rest-api/README.md`:

```md
# REST API Unit Tests

The tests in this directory are unit tests of REST API. These tests are not
concerned with the business logic behind the endpoints. They are only concerned
with the handling of the REST API endpoint. These tests answer questions like:

- Is the endpoint responding properly when the business logic throws an error?
- When returning an error, is it returning the proper HTTP response?
- When returning success, is it returning the correct payload?

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/controllers/rest-api/slp/slp.rest.router.unit.js`:

```js
/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
// const assert = require('chai').assert
// const sinon = require('sinon')
import { assert } from 'chai'
import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'
import UseCasesMock from '../../../mocks/use-cases/index.js'
// const app = require('../../../mocks/app-mock')

import SlpRouter from '../../../../../src/controllers/rest-api/slp/index.js'
let uut
let sandbox
// let ctx

// const mockContext = require('../../../../unit/mocks/ctx-mock').context

describe('#SLP-REST-Router', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new SlpRouter({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    // ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new SlpRouter()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating SLP REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new SlpRouter({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating SLP REST Controller.'
        )
      }
    })
  })

  describe('#attach', () => {
    it('should throw an error if app is not passed in.', () => {
      try {
        uut.attach()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Must pass app object when attaching REST API controllers.'
        )
      }
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/controllers/rest-api/slp/slp.rest.controller.unit.js`:

```js
/*
  Unit tests for the REST API handler for the /users endpoints.
*/

// Public npm libraries
// const assert = require('chai').assert
// const sinon = require('sinon')
import { assert } from 'chai'
import sinon from 'sinon'

// Local support libraries
import adapters from '../../../mocks/adapters/index.js'
import UseCasesMock from '../../../mocks/use-cases/index.js'

import SlpController from '../../../../../src/controllers/rest-api/slp/controller.js'

import { context } from '../../../../unit/mocks/ctx-mock.js'
let uut
let sandbox
let ctx
const mockContext = context

describe('#Slp-REST-Controller', () => {
  // const testUser = {}

  beforeEach(() => {
    const useCases = new UseCasesMock()
    uut = new SlpController({ adapters, useCases })

    sandbox = sinon.createSandbox()

    // Mock the context object.
    ctx = mockContext()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new SlpController()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating /slp REST Controller.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new SlpController({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating /slp REST Controller.'
        )
      }
    })
  })

  describe('#POST /address', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        await uut.address(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'Cannot read')
      }
    })

    it('should return 200 status on success', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.slpIndexer.query, 'getAddress').resolves({ key: 'value' })

      ctx.request.body = {
        address: 'fake-address'
      }

      await uut.address(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      // Assert that expected properties exist in the returned data.
      assert.property(ctx.response.body, 'balance')
    })
  })

  describe('#POST /tx', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        await uut.tx(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'Cannot read')
      }
    })

    it('should return 200 status on success', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.slpIndexer.query, 'getTx').resolves({ key: 'value' })

      ctx.request.body = {
        txData: 'fake-address'
      }

      await uut.tx(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      // Assert that expected properties exist in the returned data.
      assert.property(ctx.response.body, 'txData')
    })
  })

  describe('#POST /token', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        await uut.token(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'Cannot read')
      }
    })

    it('should return 200 status on success', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.slpIndexer.query, 'getToken').resolves({ key: 'value' })

      ctx.request.body = {
        tokenData: 'fake-address'
      }

      await uut.token(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      // Assert that expected properties exist in the returned data.
      assert.property(ctx.response.body, 'tokenData')
    })

    it('should return not-available if token is in blacklist', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters.slpIndexer.blacklist, 'checkBlacklist').returns(true)

      ctx.request.body = {
        tokenData: 'fake-token-id'
      }

      await uut.token(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      // Assert that 'not-available' is returned for tokens in the blacklist.
      assert.equal(ctx.response.body.tokenData.name, 'not-available')
    })
  })

  describe('#GET /status', () => {
    it('should return 422 status on biz logic error', async () => {
      try {
        await uut.status(ctx)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)
        assert.equal(err.status, 422)
        assert.include(err.message, 'Cannot read')
      }
    })

    it('should return 200 status on success', async () => {
      // Mock dependencies
      uut.adapters.slpIndexer.statusDb = {
        get: async () => {}
      }
      sandbox.stub(uut.adapters.slpIndexer.statusDb, 'get').resolves({ status: { startBlockHeight: 543376 } })

      await uut.status(ctx)

      // Assert the expected HTTP response
      assert.equal(ctx.status, 200)

      // Assert that expected properties exist in the returned data.
      assert.property(ctx.response.body, 'status')
    })
  })

  describe('#handleError', () => {
    it('should still throw error if there is no message', () => {
      try {
        const err = {
          status: 404
        }

        uut.handleError(ctx, err)
      } catch (err) {
        assert.include(err.message, 'Not Found')
      }
    })

    it('should still throw error if there is a message', () => {
      try {
        const err = {
          status: 404,
          message: 'test error'
        }

        uut.handleError(ctx, err)
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/controllers/controllers.unit.js`:

```js
/*
  Unit tests for controllers index.js file.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

import Controllers from '../../../src/controllers/index.js'

describe('#Controllers', () => {
  let uut
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new Controllers()
  })

  afterEach(() => sandbox.restore())

  describe('#attachControllers', () => {
    it('should attach the controllers', async () => {
      // mock IPFS
      sandbox.stub(uut.adapters, 'start').resolves({})
      uut.adapters.ipfs.ipfsCoordAdapter = {
        attachRPCRouter: () => {}
      }

      // Mock the timer controllers
      sandbox.stub(uut.timerControllers, 'startTimers').returns()

      const app = {
        use: () => {}
      }

      await uut.attachControllers(app)
    })
  })

  describe('#initAdapters', () => {
    it('should initialize adapters', async () => {
      // Mock dependencies
      sandbox.stub(uut.adapters, 'start').resolves()

      const result = await uut.initAdapters()

      assert.equal(result, true)
    })
  })

  describe('#initUseCases', () => {
    it('should initialize use cases', async () => {
      // Mock dependencies
      sandbox.stub(uut.useCases, 'start').resolves()

      const result = await uut.initUseCases()

      assert.equal(result, true)
    })
  })

  describe('#attachRESTControllers', () => {
    it('should attach REST controllers', () => {
      const app = {
        use: () => {}
      }

      const result = uut.attachRESTControllers(app)

      assert.equal(result, true)
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/controllers/json-rpc/a14-rate-limits.js`:

```js
/*
  Unit tests for the JSON RPC validator middleware.

  TODO: ensureTargetUserOrAdmin: it should exit quietly if user is an admin.
*/

// Public npm libraries
import sinon from 'sinon'

import { assert } from 'chai'

// Local libraries
import RateLimit from '../../../../src/controllers/json-rpc/rate-limit.js'

// Set the environment variable to signal this is a test.
process.env.SVC_ENV = 'test'

describe('#rate-limit', () => {
  let uut
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new RateLimit()
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should use the options provided', async () => {
      try {
        const options = {
          interval: { min: 10 },
          delayAfter: 1,
          timeWait: { sec: 5 },
          max: 2,
          onLimitReached: () => {
            throw new Error('custom message error')
          }
        }
        const _uut = new RateLimit(options)

        // Assert  options
        assert.equal(_uut.rateLimitOptions.interval.min, options.interval.min)
        assert.equal(_uut.rateLimitOptions.delayAfter, options.delayAfter)
        assert.equal(_uut.rateLimitOptions.timeWait.sec, options.timeWait.sec)

        const from = 'constructor test'
        const firstRequest = await _uut.limiter(from)
        assert.isTrue(firstRequest)

        const secondRequest = await _uut.limiter(from)
        assert.isTrue(secondRequest)

        await _uut.limiter(from)
        assert.fail('unexpected error')
      } catch (error) {
        assert.include(error.message, 'custom message error')
      }
    })
  })

  describe('#onLimitReached', () => {
    it('should throw error', async () => {
      try {
        uut.onLimitReached()
        assert.fail('unexpected error')
      } catch (error) {
        assert.equal(error.status, 429)
        assert.include(
          error.message,
          'Too many requests, please try again later.'
        )
      }
    })
  })

  describe('#limiter', () => {
    it('should throw error if "from" input is not provider', async () => {
      try {
        await uut.limiter()
        assert.fail('unexpected error')
      } catch (error) {
        assert.include(error.message, 'from must be a string')
      }
    })

    it('should throw error 429', async () => {
      try {
        const _uut = new RateLimit({ max: 1 })
        const from = 'Origin request'

        const firstRequest = await _uut.limiter(from)
        assert.isTrue(firstRequest)

        const secondRequest = await _uut.limiter(from)
        assert.isTrue(secondRequest)

        await _uut.limiter(from)
        assert.fail('unexpected error')
      } catch (error) {
        assert.include(
          error.message,
          'Too many requests, please try again later.'
        )
      }
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/controllers/json-rpc/a10-rpc.unit.js`:

```js
/*
  Unit tests for the rpc/index.js library.
*/

// Public npm libraries
import { assert } from 'chai'

import jsonrpc from 'jsonrpc-lite'
import sinon from 'sinon'
import { v4 as uid } from 'uuid'

// Local libraries.
import JSONRPC from '../../../../src/controllers/json-rpc/index.js'

import adapters from '../../mocks/adapters/index.js'
import UseCasesMock from '../../mocks/use-cases/index.js'

// Set the environment variable to signal this is a test.
process.env.SVC_ENV = 'test'

describe('#JSON RPC', () => {
  let uut
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    const useCases = new UseCasesMock()
    uut = new JSONRPC({ adapters, useCases })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new JSONRPC()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating JSON RPC Controllers.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new JSONRPC({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating JSON RPC Controllers.'
        )
      }
    })
  })

  describe('#router', () => {
    it('should exit quietly if given a random string', async () => {
      const str = 'random string message'
      await uut.router(str)

      assert.isOk('Not throwing an error is a pass.')
    })

    it('should exit quietly if invalid JSON RPC message received', async () => {
      const malformedRpc = '{"jsonrpc":"2.0"}'

      await uut.router(malformedRpc, 'peerA')

      assert.isOk('Not throwing an error is a pass.')
    })

    it('should return default response if routing is not possible', async () => {
      const id = uid()
      const json = jsonrpc.request(id, 'unknownMethod', {})

      const str = JSON.stringify(json)

      const result = await uut.router(str, 'peerA')
      // console.log('result: ', result)

      const jsonObj = jsonrpc.parse(result.retStr)
      // console.log(`jsonObj: ${JSON.stringify(jsonObj, null, 2)}`)

      // Assert the expected properties exist on the returned object.
      assert.property(jsonObj, 'payload')
      assert.property(jsonObj, 'type')
      assert.property(jsonObj.payload, 'jsonrpc')
      assert.property(jsonObj.payload, 'id')
      assert.property(jsonObj.payload, 'result')
      assert.property(jsonObj.payload.result, 'reciever')
      assert.property(jsonObj.payload.result.value, 'success')
      assert.property(jsonObj.payload.result.value, 'message')

      // Assert the expected values exist.
      assert.equal(jsonObj.payload.id, id)
      assert.equal(jsonObj.payload.result.value.success, false)
      assert.equal(jsonObj.payload.result.value.status, 422)
      assert.equal(
        jsonObj.payload.result.value.message,
        'Input does not match routing rules.'
      )
    })

    it('should catch and handle errors', async () => {
      // Force an error
      sandbox.stub(uut.jsonrpc, 'parse').throws(new Error('test error'))

      const malformedRpc = '{"jsonrpc":"2.0"}'

      await uut.router(malformedRpc, 'peerA')

      assert.isOk('Not throwing an error is a pass.')
    })

    it('should route to about handler', async () => {
      const id = uid()
      const userCall = jsonrpc.request(id, 'about', { endpoint: 'getAll' })
      const jsonStr = JSON.stringify(userCall, null, 2)

      // Mock the controller.
      sandbox.stub(uut.aboutController, 'aboutRouter').resolves('true')

      // Force ipfs-coord communication.
      uut.ipfsCoord.ipfs = {
        orbitdb: {
          sendToDb: () => {}
        }
      }

      const result = await uut.router(jsonStr, 'peerA')
      // console.log(result)

      const obj = JSON.parse(result.retStr)
      // console.log('obj: ', obj)

      assert.equal(obj.result.value, 'true')
      assert.equal(obj.result.method, 'about')
      assert.equal(obj.id, id)
    })

    it('should exit quietly for duplicate RPC message', async () => {
      const id = uid()
      const json = jsonrpc.request(id, 'unknownMethod', {})

      const str = JSON.stringify(json)

      // Call router once.
      await uut.router(str, 'peerA')

      // Call the router again with the same input.
      const result = await uut.router(str, 'peerA')

      assert.equal(result, false)
    })

    it('should ignore metric queries from ipfs-coord', async () => {
      const id = uid()
      const json = jsonrpc.request(id, 'unknownMethod', {})

      const str = JSON.stringify(json)

      // Force the RPC type to be 'success', to indicate an RPC that was
      // processed internal to ipfs-coord.
      sandbox.stub(uut.jsonrpc, 'parse').returns({
        payload: {},
        type: 'success'
      })

      // Call the router again with the same input.
      const result = await uut.router(str, 'peerA')

      assert.equal(result, false)
    })

    it('should report errors when trying to send messages to peers', async () => {
      const id = uid()
      const json = jsonrpc.request(id, 'unknownMethod', {})

      const str = JSON.stringify(json)

      // Force issue with sendPrivateMessage()
      sandbox
        .stub(uut.ipfsCoord.useCases.peer, 'sendPrivateMessage')
        .rejects('test error')

      // Call the router again with the same input.
      const result = await uut.router(str, 'peerA')
      // console.log('result: ', result)

      assert.property(result, 'from')
      assert.property(result, 'retStr')
    })
  })

  describe('#_checkIfAlreadyProcessed', () => {
    it('should return false the first time an RPC command is seen', () => {
      const data = {
        payload: {
          jsonrpc: '2.0',
          id: '6c515f3c-cf8a-42ec-870e-e416edd4923f',
          method: 'unknownMethod',
          params: {}
        },
        type: 'request'
      }

      const result = uut._checkIfAlreadyProcessed(data)

      assert.equal(result, false)
    })

    it('should return true the second time an RPC command is seen', () => {
      const data = {
        payload: {
          jsonrpc: '2.0',
          id: '6c515f3c-cf8a-42ec-870e-e416edd4923f',
          method: 'unknownMethod',
          params: {}
        },
        type: 'request'
      }

      // First call.
      uut._checkIfAlreadyProcessed(data)

      // Second call.
      const result = uut._checkIfAlreadyProcessed(data)

      assert.equal(result, true)
    })

    it('should push out old data from the cache for new data', () => {
      const data = {
        payload: {
          jsonrpc: '2.0',
          id: '6c515f3c-cf8a-42ec-870e-e416edd4923f',
          method: 'unknownMethod',
          params: {}
        },
        type: 'request'
      }

      uut.MSG_CACHE_SIZE = 0

      const result = uut._checkIfAlreadyProcessed(data)

      assert.equal(result, false)
    })

    it('should return true on error', () => {
      const result = uut._checkIfAlreadyProcessed()

      assert.equal(result, true)
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/controllers/json-rpc/about.json-rpc.controller.unit.js`:

```js
/*
  Unit tests for the json-rpc/about/index.js file.
*/

// Public npm libraries
import sinon from 'sinon'

import { assert } from 'chai'

// Local libraries
import AboutRPC from '../../../../src/controllers/json-rpc/about/index.js'

describe('#AboutRPC', () => {
  let uut
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new AboutRPC()
  })

  afterEach(() => sandbox.restore())

  describe('#aboutRouter', () => {
    it('should return information about the service', async () => {
      const result = await uut.aboutRouter()
      // console.log('result: ', result)

      assert.property(result, 'success')
      assert.equal(result.success, true)
      assert.property(result, 'status')
      assert.equal(result.status, 200)
      assert.property(result, 'message')
      assert.property(result, 'endpoint')
      assert.equal(result.endpoint, 'about')
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/controllers/timer-controllers.unit.js`:

```js
/*
  Unit tests for the timer-controller.js Controller library
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local libraries
import TimerControllers from '../../../src/controllers/timer-controllers.js'
import adapters from '../mocks/adapters/index.js'
import UseCasesMock from '../mocks/use-cases/index.js'

describe('#Timer-Controllers', () => {
  let uut
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    const useCases = new UseCasesMock()
    uut = new TimerControllers({ adapters, useCases })
  })

  afterEach(() => {
    sandbox.restore()

    uut.stopTimers()
  })

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new TimerControllers()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Adapters library required when instantiating Timer Controller libraries.'
        )
      }
    })

    it('should throw an error if useCases are not passed in', () => {
      try {
        uut = new TimerControllers({ adapters })

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(
          err.message,
          'Instance of Use Cases library required when instantiating Timer Controller libraries.'
        )
      }
    })
  })

  describe('#startTimers', () => {
    it('should start the timers', () => {
      const result = uut.startTimers()

      uut.stopTimers()

      assert.equal(result, true)
    })
  })

  describe('#exampleTimerFunc', () => {
    it('should kick off the Use Case', async () => {
      const result = await uut.exampleTimerFunc()

      assert.equal(result, true)
    })

    it('should return false on error', async () => {
      const result = await uut.exampleTimerFunc(true)

      assert.equal(result, false)
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/use-cases/index.use-case.unit.js`:

```js
/*
  Unit tests for the index.js file that aggregates all use-cases.
*/

// Public npm libraries
import { assert } from 'chai'

import sinon from 'sinon'

// Local support libraries
// const testUtils = require('../../utils/test-utils')

// Unit under test (uut)
import UseCases from '../../../src/use-cases/index.js'

import adapters from '../mocks/adapters/index.js'

describe('#use-cases', () => {
  let uut
  let sandbox

  before(async () => {
    // Delete all previous users in the database.
    // await testUtils.deleteAllUsers()
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new UseCases({ adapters })
  })

  afterEach(() => sandbox.restore())

  describe('#constructor', () => {
    it('should throw an error if adapters are not passed in', () => {
      try {
        uut = new UseCases()

        assert.fail('Unexpected code path')

        // This is here to prevent the linter from complaining.
        assert.isOk(uut)
      } catch (err) {
        assert.include(
          err.message,
          'Instance of adapters must be passed in when instantiating Use Cases library.'
        )
      }
    })
  })

  describe('#start', () => {
    it('should initialize async use cases', async () => {
      const result = await uut.start()

      assert.equal(result, true)
    })

    // it('should catch and throw errors', async () => {
    //   // Force an error
    //   sandbox.stub()
    // })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/mocks/ipfs-mock.js`:

```js
/*
  Mocks for the js-ipfs
*/

// class IPFS {
//   constructor () {
//     this.ipfs = {}
//   }
//
//   static create () {
//     const mockIpfs = new MockIpfsInstance()
//
//     return mockIpfs
//   }
//
//   async start () {}
// }

function create () {
  const mockIpfs = new MockIpfsInstance()

  return mockIpfs
}

class MockIpfsInstance {
  constructor () {
    this.config = {
      profiles: {
        apply: () => {}
      }
    }
  }

  stop () {}
}

export default create;

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/mocks/send-mock.js`:

```js
/*
  Mock data for send-unit.js
*/
import BigNumber from 'bignumber.js'

const sendData01 = {
  slpData: {
    tokenType: 1,
    txType: 'SEND',
    tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
    amounts: [new BigNumber('4354768657')]
  },
  blockHeight: 543614,
  txData: {
    txid: '4640a734063ea79fa587a3cac38a70a2f6f3db0011e23514024185982110d0fa',
    hash: '4640a734063ea79fa587a3cac38a70a2f6f3db0011e23514024185982110d0fa',
    version: 1,
    size: 585,
    locktime: 543613,
    vin: [
      {
        txid: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
        vout: 1,
        scriptSig: {
          asm: '3045022100e3d5f9a48f9aa1cf7e9ed1992e0281e7300b734ba0e4bd5bb9265b2be60bd71002200ccde53ce7ea9da9df3e834f234f3bea65c2e58c96f8436f93333fd8946a1db2[ALL|FORKID] 02056220984cc2cf5261a27d4f66d31c9ef601a688ca1a5ab81e55b6f0d311be74',
          hex: '483045022100e3d5f9a48f9aa1cf7e9ed1992e0281e7300b734ba0e4bd5bb9265b2be60bd71002200ccde53ce7ea9da9df3e834f234f3bea65c2e58c96f8436f93333fd8946a1db2412102056220984cc2cf5261a27d4f66d31c9ef601a688ca1a5ab81e55b6f0d311be74'
        },
        sequence: 4294967294,
        address: 'bitcoincash:qpaf9wltgmpjlg2vxwwu7zdw5y4z7m277ckxn8cufl',
        value: 0.00000546,
        tokenQtyStr: '0',
        tokenQty: 0,
        tokenId: null
      },
      {
        txid: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
        vout: 1,
        scriptSig: {
          asm: '3045022100bb90d52be9b568f643fdb1a302e9f063be27a9f914e2a6b192cbabf2cbdeaf9302203c275fc8d1b82390bc1726390d361c5266056bddd54dec23efa207c79eacea4a[ALL|FORKID] 024146cfcd0c02e99d6451dc48ad0f97114aeda18fe55c52a10bfc0490f314e6a2',
          hex: '483045022100bb90d52be9b568f643fdb1a302e9f063be27a9f914e2a6b192cbabf2cbdeaf9302203c275fc8d1b82390bc1726390d361c5266056bddd54dec23efa207c79eacea4a4121024146cfcd0c02e99d6451dc48ad0f97114aeda18fe55c52a10bfc0490f314e6a2'
        },
        sequence: 4294967294,
        address: 'bitcoincash:qqf89zzwd0fqc3npkks997r5l7dpfjf9kgx2rqu500',
        value: 0.00000546,
        tokenQtyStr: '2.34123',
        tokenQty: 2.34123,
        tokenId:
          '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8'
      },
      {
        txid: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
        vout: 3,
        scriptSig: {
          asm: '3044022029ab770c249f467b40bb90410429f6d657f9be299baa19a6838d04d972436b450220143660297e8e836bc16d317649fad8c310bdadb4fb61d4e9f6ba11203abe5dae[ALL|FORKID] 02eed4ac9dda3405d9b1ccbbf09f8056f3e7c615924274bd5643238b543d0a1d56',
          hex: '473044022029ab770c249f467b40bb90410429f6d657f9be299baa19a6838d04d972436b450220143660297e8e836bc16d317649fad8c310bdadb4fb61d4e9f6ba11203abe5dae412102eed4ac9dda3405d9b1ccbbf09f8056f3e7c615924274bd5643238b543d0a1d56'
        },
        sequence: 4294967294,
        address: 'bitcoincash:qqt30r33k0jx3sxe34tmupaujpaljnglmvqgrrfp2x',
        value: 0.00054848,
        tokenQtyStr: '0',
        tokenQty: 0,
        tokenId: null
      }
    ],
    vout: [
      {
        value: 0,
        n: 0,
        scriptPubKey: {
          asm: 'OP_RETURN 5262419 1 1145980243 938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8 0000000103907f11',
          hex: '6a04534c500001010453454e4420938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8080000000103907f11',
          type: 'nulldata'
        },
        tokenQty: null,
        tokenQtyStr: null
      },
      {
        value: 0.00000546,
        n: 1,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 059775ff94f65c04e8a6847e74eb9809d8cd779b OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a914059775ff94f65c04e8a6847e74eb9809d8cd779b88ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: ['bitcoincash:qqzewa0ljnm9cp8g56z8ua8tnqya3nthnvhv5hpu8y']
        },
        tokenQtyStr: '43547.68657',
        tokenQty: 43547.68657
      },
      {
        value: 0.00054808,
        n: 2,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 0e330dc9009e1e07831f5a22d4ade8977ab674c8 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a9140e330dc9009e1e07831f5a22d4ade8977ab674c888ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: ['bitcoincash:qq8rxrwfqz0pupurradz949dazth4dn5eqs3mhrucv']
        },
        tokenQty: null,
        tokenQtyStr: null
      }
    ],
    hex: '0100000003f8cda53b43b0ea49991a9bc6c74eb901d2a8b964bc7b8987d76789618ec18c93010000006b483045022100e3d5f9a48f9aa1cf7e9ed1992e0281e7300b734ba0e4bd5bb9265b2be60bd71002200ccde53ce7ea9da9df3e834f234f3bea65c2e58c96f8436f93333fd8946a1db2412102056220984cc2cf5261a27d4f66d31c9ef601a688ca1a5ab81e55b6f0d311be74feffffff34dbf62a45295ae11c2a45f44368218ec64498ac3f7e1434c1993515f53c9dee010000006b483045022100bb90d52be9b568f643fdb1a302e9f063be27a9f914e2a6b192cbabf2cbdeaf9302203c275fc8d1b82390bc1726390d361c5266056bddd54dec23efa207c79eacea4a4121024146cfcd0c02e99d6451dc48ad0f97114aeda18fe55c52a10bfc0490f314e6a2feffffff34dbf62a45295ae11c2a45f44368218ec64498ac3f7e1434c1993515f53c9dee030000006a473044022029ab770c249f467b40bb90410429f6d657f9be299baa19a6838d04d972436b450220143660297e8e836bc16d317649fad8c310bdadb4fb61d4e9f6ba11203abe5dae412102eed4ac9dda3405d9b1ccbbf09f8056f3e7c615924274bd5643238b543d0a1d56feffffff030000000000000000376a04534c500001010453454e4420938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8080000000103907f1122020000000000001976a914059775ff94f65c04e8a6847e74eb9809d8cd779b88ac18d60000000000001976a9140e330dc9009e1e07831f5a22d4ade8977ab674c888ac7d4b0800',
    blockhash:
      '00000000000000000140f0d813052da59c811a936494a8d8b2d60b215d19e3dc',
    confirmations: 171159,
    time: 1534391953,
    blocktime: 1534391953,
    blockheight: 543614,
    isSlpTx: true,
    tokenTxType: 'SEND',
    tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
    tokenType: 1,
    tokenTicker: 'Bubb2',
    tokenName: 'the new bubbles!',
    tokenDecimals: 5,
    tokenUri: '',
    tokenDocHash: ''
  }
}

const addrData01 = {
  utxos: [
    {
      txid: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
      vout: 1,
      type: 'token',
      qty: '234123',
      tokenId:
        '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
      address: 'bitcoincash:qqf89zzwd0fqc3npkks997r5l7dpfjf9kgx2rqu500'
    }
  ],
  txs: [
    {
      txid: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
      height: 543614
    }
  ],
  balances: [
    {
      tokenId:
        '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
      qty: new BigNumber('234123')
    }
  ]
}

const utxo01 = {
  txid: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
  vout: 1,
  type: 'token',
  qty: '234123',
  tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
  address: 'bitcoincash:qqf89zzwd0fqc3npkks997r5l7dpfjf9kgx2rqu500'
}

const addrData02 = {
  utxos: [
    {
      txid: '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170',
      vout: 1,
      type: 'token',
      qty: '100',
      tokenId:
        '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170',
      address: 'bitcoincash:qq59p3sway2l5gxkv0dezf57xn4t85d2lyaa2jptwx'
    }
  ],
  txs: [
    {
      txid: '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170',
      height: 716085
    }
  ],
  balances: [
    {
      tokenId:
        '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170',
      qty: '100'
    }
  ]
}

const utxo02 = {
  txid: '401aae1bef9246c42916808c9595d2834791384dcf2e298d2fc294e27b6f5273',
  vout: 2,
  type: 'token',
  qty: '99',
  tokenId: '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170',
  address: 'bitcoincash:qq59p3sway2l5gxkv0dezf57xn4t85d2lyaa2jptwx'
}

const sendData02 = {
  slpData: {
    tokenType: 1,
    txType: 'SEND',
    tokenId: '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170',
    amounts: [new BigNumber('1')]
  },
  blockHeight: 716089,
  txData: {
    txid: '401aae1bef9246c42916808c9595d2834791384dcf2e298d2fc294e27b6f5273',
    hash: '401aae1bef9246c42916808c9595d2834791384dcf2e298d2fc294e27b6f5273',
    version: 2,
    size: 481,
    locktime: 0,
    vin: [
      {
        txid: '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170',
        vout: 3,
        scriptSig: {
          asm: '3045022100c4eeff10549ad63e8cea17df1516c6b124234c200b0c43dc382b429faafa848e02201881b92c0530ea2645ed21104d7beb2d56deecfba8ebb36b7a147c26a61fdf8f[ALL|FORKID] 033dd792cf506a8f2d2bbbf70ddce529f11c5ff2e4fe5a1fc139c82af7f5285a0b',
          hex: '483045022100c4eeff10549ad63e8cea17df1516c6b124234c200b0c43dc382b429faafa848e02201881b92c0530ea2645ed21104d7beb2d56deecfba8ebb36b7a147c26a61fdf8f4121033dd792cf506a8f2d2bbbf70ddce529f11c5ff2e4fe5a1fc139c82af7f5285a0b'
        },
        sequence: 4294967295,
        address: 'bitcoincash:qq59p3sway2l5gxkv0dezf57xn4t85d2lyaa2jptwx',
        value: 0.00016329,
        tokenQtyStr: '0',
        tokenQty: 0,
        tokenId: null
      },
      {
        txid: '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170',
        vout: 1,
        scriptSig: {
          asm: '3045022100964354f4316ce4d580dd8dafe5c459c76389327560b8c7f167c594365e4f6b6302202a3a371d00c5cf712c17425a5e7e383fd952c0b92955598b9d90c5b96ce2fbdc[ALL|FORKID] 033dd792cf506a8f2d2bbbf70ddce529f11c5ff2e4fe5a1fc139c82af7f5285a0b',
          hex: '483045022100964354f4316ce4d580dd8dafe5c459c76389327560b8c7f167c594365e4f6b6302202a3a371d00c5cf712c17425a5e7e383fd952c0b92955598b9d90c5b96ce2fbdc4121033dd792cf506a8f2d2bbbf70ddce529f11c5ff2e4fe5a1fc139c82af7f5285a0b'
        },
        sequence: 4294967295,
        address: 'bitcoincash:qq59p3sway2l5gxkv0dezf57xn4t85d2lyaa2jptwx',
        value: 0.00000546,
        tokenQtyStr: '0',
        tokenQty: 0,
        tokenId: null
      }
    ],
    vout: [
      {
        value: 0,
        n: 0,
        scriptPubKey: {
          asm: 'OP_RETURN 5262419 1 1145980243 59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170 0000000000000001 0000000000000063',
          hex: '6a04534c500001010453454e442059cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170080000000000000001080000000000000063',
          type: 'nulldata'
        },
        tokenQty: null,
        tokenQtyStr: null
      },
      {
        value: 0.00000546,
        n: 1,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 f0d67d9f7e5a63a52961cb3a4f2cb98a1c4d0c03 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a914f0d67d9f7e5a63a52961cb3a4f2cb98a1c4d0c0388ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: ['bitcoincash:qrcdvlvl0edx8fffv89n5nevhx9pcngvqv86wvksj3']
        },
        tokenQtyStr: '1',
        tokenQty: 1
      },
      {
        value: 0.00000546,
        n: 2,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 2850c60ee915fa20d663db91269e34eab3d1aaf9 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a9142850c60ee915fa20d663db91269e34eab3d1aaf988ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: ['bitcoincash:qq59p3sway2l5gxkv0dezf57xn4t85d2lyaa2jptwx']
        },
        tokenQtyStr: '99',
        tokenQty: 99
      },
      {
        value: 0.00014987,
        n: 3,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 2850c60ee915fa20d663db91269e34eab3d1aaf9 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a9142850c60ee915fa20d663db91269e34eab3d1aaf988ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: ['bitcoincash:qq59p3sway2l5gxkv0dezf57xn4t85d2lyaa2jptwx']
        },
        tokenQty: null,
        tokenQtyStr: null
      }
    ],
    hex: '020000000270f13dcb618aad340038b07f053a517459c200374262b8e955b94869b83acd59030000006b483045022100c4eeff10549ad63e8cea17df1516c6b124234c200b0c43dc382b429faafa848e02201881b92c0530ea2645ed21104d7beb2d56deecfba8ebb36b7a147c26a61fdf8f4121033dd792cf506a8f2d2bbbf70ddce529f11c5ff2e4fe5a1fc139c82af7f5285a0bffffffff70f13dcb618aad340038b07f053a517459c200374262b8e955b94869b83acd59010000006b483045022100964354f4316ce4d580dd8dafe5c459c76389327560b8c7f167c594365e4f6b6302202a3a371d00c5cf712c17425a5e7e383fd952c0b92955598b9d90c5b96ce2fbdc4121033dd792cf506a8f2d2bbbf70ddce529f11c5ff2e4fe5a1fc139c82af7f5285a0bffffffff040000000000000000406a04534c500001010453454e442059cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df17008000000000000000108000000000000006322020000000000001976a914f0d67d9f7e5a63a52961cb3a4f2cb98a1c4d0c0388ac22020000000000001976a9142850c60ee915fa20d663db91269e34eab3d1aaf988ac8b3a0000000000001976a9142850c60ee915fa20d663db91269e34eab3d1aaf988ac00000000',
    blockheight: 716088,
    isSlpTx: true,
    tokenTxType: 'SEND',
    tokenId: '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170',
    tokenType: 1,
    tokenTicker: 'SLPTEST',
    tokenName: 'SLP Test Token',
    tokenDecimals: 0,
    tokenUri: 'https://FullStack.cash',
    tokenDocHash: '',
    isValidSlp: true
  }
}

const greaterOutputBurn = {
  slpData: {
    tokenType: 1,
    txType: 'SEND',
    tokenId: '01e34c1524c523380707570ced7217024f644fd6f228c13413b12e97e4ca13e8',
    amounts: ['133700', '123323087']
  },
  txData: {
    txid: '8e577799f9366f41880f53fb4dcca12af3a69cae5f4a6c6bf6f8dd7dc43ef564',
    hash: '8e577799f9366f41880f53fb4dcca12af3a69cae5f4a6c6bf6f8dd7dc43ef564',
    version: 1,
    size: 479,
    locktime: 0,
    vin: [
      {
        txid: '1a8e0fb428fefe6c7413dba30c15e2814947f7efb7978de526c514d9128b266c',
        vout: 2,
        scriptSig: {
          asm: '3044022033c488739e6ea1fdf063a4dd751f23bf31b8fae0938aff8f33b7c8a8c7b8f71702203d6519a4869ad699ece7153aad0393dfafbf7d97d2a2f36bf4b8f6e399429de3[ALL|FORKID] 0329d5ffda1250d97614cfd3a5cb1c89d0a255c59584c091915b21b3e64137fe7a',
          hex: '473044022033c488739e6ea1fdf063a4dd751f23bf31b8fae0938aff8f33b7c8a8c7b8f71702203d6519a4869ad699ece7153aad0393dfafbf7d97d2a2f36bf4b8f6e399429de341210329d5ffda1250d97614cfd3a5cb1c89d0a255c59584c091915b21b3e64137fe7a'
        },
        sequence: 4294967295,
        address: 'bitcoincash:qzk92nt0xdxc9qy3yj53h9rjw8dk0s9cqqucfqpcd6',
        value: 0.00000546,
        tokenQtyStr: '1228567.88',
        tokenQty: 1228567.88,
        tokenId:
          '01e34c1524c523380707570ced7217024f644fd6f228c13413b12e97e4ca13e8'
      },
      {
        txid: 'f63cfef445757d9b9a54fc595ac22518b8a2751ed6bb942f540f0226668f74c3',
        vout: 3,
        scriptSig: {
          asm: '3044022021f5f300a51ff9d858b9441d34d4af9b9dfe28c2e9a77eacf64fa7606735c6da0220086142b5ae9da5ef5617676b52291b74ac07ba5f502c00b020b680eda8b59cd9[ALL|FORKID] 0329d5ffda1250d97614cfd3a5cb1c89d0a255c59584c091915b21b3e64137fe7a',
          hex: '473044022021f5f300a51ff9d858b9441d34d4af9b9dfe28c2e9a77eacf64fa7606735c6da0220086142b5ae9da5ef5617676b52291b74ac07ba5f502c00b020b680eda8b59cd941210329d5ffda1250d97614cfd3a5cb1c89d0a255c59584c091915b21b3e64137fe7a'
        },
        sequence: 4294967295,
        address: 'bitcoincash:qzk92nt0xdxc9qy3yj53h9rjw8dk0s9cqqucfqpcd6',
        value: 0.00733515,
        tokenQty: 0,
        tokenQtyStr: '0',
        tokenId: null
      }
    ],
    vout: [
      {
        value: 0,
        n: 0,
        scriptPubKey: {
          asm: 'OP_RETURN 5262419 1 1145980243 01e34c1524c523380707570ced7217024f644fd6f228c13413b12e97e4ca13e8 0000000000020a44 000000000759c2cf',
          hex: '6a04534c500001010453454e442001e34c1524c523380707570ced7217024f644fd6f228c13413b12e97e4ca13e8080000000000020a4408000000000759c2cf',
          type: 'nulldata'
        },
        tokenQty: null,
        tokenQtyStr: null
      },
      {
        value: 0.00000546,
        n: 1,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 ac554d6f334d82809124a91b947271db67c0b800 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a914ac554d6f334d82809124a91b947271db67c0b80088ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: ['bitcoincash:qzk92nt0xdxc9qy3yj53h9rjw8dk0s9cqqucfqpcd6']
        },
        tokenQtyStr: '1337',
        tokenQty: 1337
      },
      {
        value: 0.00000546,
        n: 2,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 ac554d6f334d82809124a91b947271db67c0b800 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a914ac554d6f334d82809124a91b947271db67c0b80088ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: ['bitcoincash:qzk92nt0xdxc9qy3yj53h9rjw8dk0s9cqqucfqpcd6']
        },
        tokenQtyStr: '1233230.87',
        tokenQty: 1233230.87
      },
      {
        value: 0.00732424,
        n: 3,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 ac554d6f334d82809124a91b947271db67c0b800 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a914ac554d6f334d82809124a91b947271db67c0b80088ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: ['bitcoincash:qzk92nt0xdxc9qy3yj53h9rjw8dk0s9cqqucfqpcd6']
        },
        tokenQty: null,
        tokenQtyStr: null
      }
    ],
    hex: '01000000026c268b12d914c526e58d97b7eff7474981e2150ca3db13746cfefe28b40f8e1a020000006a473044022033c488739e6ea1fdf063a4dd751f23bf31b8fae0938aff8f33b7c8a8c7b8f71702203d6519a4869ad699ece7153aad0393dfafbf7d97d2a2f36bf4b8f6e399429de341210329d5ffda1250d97614cfd3a5cb1c89d0a255c59584c091915b21b3e64137fe7affffffffc3748f6626020f542f94bbd61e75a2b81825c25a59fc549a9b7d7545f4fe3cf6030000006a473044022021f5f300a51ff9d858b9441d34d4af9b9dfe28c2e9a77eacf64fa7606735c6da0220086142b5ae9da5ef5617676b52291b74ac07ba5f502c00b020b680eda8b59cd941210329d5ffda1250d97614cfd3a5cb1c89d0a255c59584c091915b21b3e64137fe7affffffff040000000000000000406a04534c500001010453454e442001e34c1524c523380707570ced7217024f644fd6f228c13413b12e97e4ca13e8080000000000020a4408000000000759c2cf22020000000000001976a914ac554d6f334d82809124a91b947271db67c0b80088ac22020000000000001976a914ac554d6f334d82809124a91b947271db67c0b80088ac082d0b00000000001976a914ac554d6f334d82809124a91b947271db67c0b80088ac00000000',
    blockhash:
      '000000000000000002fdeb2b410b81c4bed56adf46abe78ba701e198e47f91b6',
    confirmations: 146262,
    time: 1551713139,
    blocktime: 1551713139,
    blockheight: 572321,
    isSlpTx: true,
    tokenTxType: 'SEND',
    tokenId: '01e34c1524c523380707570ced7217024f644fd6f228c13413b12e97e4ca13e8',
    tokenType: 1,
    tokenTicker: 'JBC',
    tokenName: 'JB Coin',
    tokenDecimals: 2,
    tokenUri: 'jb@bitcoin.com',
    tokenDocHash: ''
  },
  blockHeight: 572321
}

const greaterOutputAddr01 = {
  utxos: [
    {
      txid: '8e577799f9366f41880f53fb4dcca12af3a69cae5f4a6c6bf6f8dd7dc43ef564',
      vout: 1,
      type: 'token',
      qty: '133700',
      tokenId: '01e34c1524c523380707570ced7217024f644fd6f228c13413b12e97e4ca13e8',
      address: 'bitcoincash:qzk92nt0xdxc9qy3yj53h9rjw8dk0s9cqqucfqpcd6'
    }
  ]
}

const greaterOutputAddr02 = {
  utxos: [
    {
      txid: '8e577799f9366f41880f53fb4dcca12af3a69cae5f4a6c6bf6f8dd7dc43ef564',
      vout: 2,
      type: 'token',
      qty: '123323087',
      tokenId: '01e34c1524c523380707570ced7217024f644fd6f228c13413b12e97e4ca13e8',
      address: 'bitcoincash:qzk92nt0xdxc9qy3yj53h9rjw8dk0s9cqqucfqpcd6'
    }
  ]
}

const nftSendData01 = {
  "slpData": {
    "tokenType": 65,
    "txType": "SEND",
    "tokenId": "90b8d1248b70ba0fcbe1a02261f3d18e17bdd499030d7879fe91604070809674",
    "amounts": [
      "1"
    ]
  },
  "blockHeight": 812387,
  "txData": {
    "txid": "3508ea57787f0444dcbcbd9280bb0825c35ef2edc22c514292df21ace938ec77",
    "hash": "3508ea57787f0444dcbcbd9280bb0825c35ef2edc22c514292df21ace938ec77",
    "version": 2,
    "size": 437,
    "locktime": 0,
    "vin": [
      {
        "txid": "e7974ab92006d19767ca383ac4834fd7a72605f5ef7745e48b3be6b3cfaabbf0",
        "vout": 2,
        "scriptSig": {
          "asm": "3044022045d8d7f143d2ce5c313af80fac1963dd7cabbe01dce26a65bf3ce06654f1e46602204739c27a43e99893bd7e98fd32af43b7deaf516fc0dc13058d919ffcde0dcdf1[ALL|FORKID] 023ed189c1d4c5a89f25ba53cc9d5d06c3e3abfcd323043bad67bdbb8b1a078c94",
          "hex": "473044022045d8d7f143d2ce5c313af80fac1963dd7cabbe01dce26a65bf3ce06654f1e46602204739c27a43e99893bd7e98fd32af43b7deaf516fc0dc13058d919ffcde0dcdf14121023ed189c1d4c5a89f25ba53cc9d5d06c3e3abfcd323043bad67bdbb8b1a078c94"
        },
        "sequence": 4294967295,
        "address": "bitcoincash:qzcrcjuqpwc9whmvpug7z425rnqxvx50ngl60rrjst",
        "value": 0.04220655,
        "tokenQty": 0,
        "tokenQtyStr": "0",
        "tokenId": null
      },
      {
        "txid": "90b8d1248b70ba0fcbe1a02261f3d18e17bdd499030d7879fe91604070809674",
        "vout": 1,
        "scriptSig": {
          "asm": "3045022100f6ea20cea2b6cf58cb3666bd4550e3405ef9b48fd856d9122fe821e713490e9102204bb40ae39128d9fb3957267be23130fcb1147fd1416870209112a1cea130b51b[ALL|FORKID] 037a22c03e02f20d0e10f1dfe5ff0eae8da67da1d5862c7a7fe6e889f6da7d62f6",
          "hex": "483045022100f6ea20cea2b6cf58cb3666bd4550e3405ef9b48fd856d9122fe821e713490e9102204bb40ae39128d9fb3957267be23130fcb1147fd1416870209112a1cea130b51b4121037a22c03e02f20d0e10f1dfe5ff0eae8da67da1d5862c7a7fe6e889f6da7d62f6"
        },
        "sequence": 4294967295,
        "address": "bitcoincash:qpymkr6as34a7rxarlupa387m4azjl3tnv8649xu5j",
        "value": 0.00000546,
        "tokenQtyStr": "1",
        "tokenQty": 1,
        "tokenId": "90b8d1248b70ba0fcbe1a02261f3d18e17bdd499030d7879fe91604070809674"
      }
    ],
    "vout": [
      {
        "value": 0,
        "n": 0,
        "scriptPubKey": {
          "asm": "OP_RETURN 5262419 65 1145980243 90b8d1248b70ba0fcbe1a02261f3d18e17bdd499030d7879fe91604070809674 72057594037927936",
          "hex": "6a04534c500001410453454e442090b8d1248b70ba0fcbe1a02261f3d18e17bdd499030d7879fe91604070809674080000000000000001",
          "type": "nulldata"
        },
        "tokenQty": null,
        "tokenQtyStr": null
      },
      {
        "value": 0.00000546,
        "n": 1,
        "scriptPubKey": {
          "asm": "OP_DUP OP_HASH160 3fb679e9e8301eb4ec14321216f89e7e4fd8dea1 OP_EQUALVERIFY OP_CHECKSIG",
          "hex": "76a9143fb679e9e8301eb4ec14321216f89e7e4fd8dea188ac",
          "reqSigs": 1,
          "type": "pubkeyhash",
          "addresses": [
            "bitcoincash:qqlmv70faqcpad8vzsepy9hcnelylkx75yl5998sr8"
          ]
        },
        "tokenQtyStr": "1",
        "tokenQty": 1
      },
      {
        "value": 0.04218679,
        "n": 2,
        "scriptPubKey": {
          "asm": "OP_DUP OP_HASH160 b03c4b800bb0575f6c0f11e155541cc0661a8f9a OP_EQUALVERIFY OP_CHECKSIG",
          "hex": "76a914b03c4b800bb0575f6c0f11e155541cc0661a8f9a88ac",
          "reqSigs": 1,
          "type": "pubkeyhash",
          "addresses": [
            "bitcoincash:qzcrcjuqpwc9whmvpug7z425rnqxvx50ngl60rrjst"
          ]
        },
        "tokenQty": null,
        "tokenQtyStr": null
      }
    ],
    "hex": "0200000002f0bbaacfb3e63b8be44577eff50526a7d74f83c43a38ca6797d10620b94a97e7020000006a473044022045d8d7f143d2ce5c313af80fac1963dd7cabbe01dce26a65bf3ce06654f1e46602204739c27a43e99893bd7e98fd32af43b7deaf516fc0dc13058d919ffcde0dcdf14121023ed189c1d4c5a89f25ba53cc9d5d06c3e3abfcd323043bad67bdbb8b1a078c94ffffffff74968070406091fe79780d0399d4bd178ed1f36122a0e1cb0fba708b24d1b890010000006b483045022100f6ea20cea2b6cf58cb3666bd4550e3405ef9b48fd856d9122fe821e713490e9102204bb40ae39128d9fb3957267be23130fcb1147fd1416870209112a1cea130b51b4121037a22c03e02f20d0e10f1dfe5ff0eae8da67da1d5862c7a7fe6e889f6da7d62f6ffffffff030000000000000000376a04534c500001410453454e442090b8d1248b70ba0fcbe1a02261f3d18e17bdd499030d7879fe9160407080967408000000000000000122020000000000001976a9143fb679e9e8301eb4ec14321216f89e7e4fd8dea188ac375f4000000000001976a914b03c4b800bb0575f6c0f11e155541cc0661a8f9a88ac00000000",
    "blockhash": "0000000000000000026845b659097c102817ada02a2217bcfc7efb1fad8913a9",
    "confirmations": 259,
    "time": 1695720407,
    "blocktime": 1695720407,
    "blockheight": 812387,
    "isSlpTx": true,
    "tokenTxType": "SEND",
    "tokenId": "90b8d1248b70ba0fcbe1a02261f3d18e17bdd499030d7879fe91604070809674",
    "tokenType": 65,
    "tokenTicker": "SWEDC",
    "tokenName": "Don't Matter Now Coin No. 958",
    "tokenDecimals": 0,
    "tokenUri": "https://collectible.sweet.io/series/31/958",
    "tokenDocHash": "81eba18f950d91a09c7ffb4dc7b4a986580c9d1bab456a2daef51de712415489"
  }
}

const invalidTxFromDb01 = {
  txid: 'b4f7b84eb8c69b8a62140610ad51f8e0fcb310263afa9d0bc740fe7451ceddb9',
  hash: 'b4f7b84eb8c69b8a62140610ad51f8e0fcb310263afa9d0bc740fe7451ceddb9',
  version: 1,
  size: 479,
  locktime: 0,
  vin: [
    {
      txid: 'c2fab06e94fd87b3509484e56315b9914167d3227fd63f480b756cf79502760f',
      vout: 2,
      scriptSig: [Object],
      sequence: 4294967295,
      address: 'bitcoincash:qrqac0du3cmc96y2nre7673ukzq8lm3udqcp78y339',
      value: 0.00000546,
      tokenQtyStr: '18998128',
      tokenQty: 18998128,
      tokenId: '07f5055b743215f55c0115d287f314134b9d3c31608cbbe6c81f17b9d9f80701'
    },
    {
      txid: 'c0dd111d203e2cace8b2f39eca87e6c3b3f0e8ac7551ca0c023fd325d0c9340b',
      vout: 1,
      scriptSig: [Object],
      sequence: 4294967295,
      address: 'bitcoincash:qq2dhpgnfh57g7g52zcadjlxnt99kcr68uenlrkf2d',
      value: 0.00143271,
      tokenQty: 0,
      tokenQtyStr: '0',
      tokenId: null
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: [Object],
      tokenQty: null,
      tokenQtyStr: null
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: [Object],
      tokenQtyStr: '20',
      tokenQty: 20
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: [Object],
      tokenQtyStr: '18998108',
      tokenQty: 18998108
    },
    {
      value: 0.00142244,
      n: 3,
      scriptPubKey: [Object],
      tokenQty: null,
      tokenQtyStr: null
    }
  ],
  hex: '01000000020f760295f76c750b483fd67f22d3674191b91563e5849450b387fd946eb0fac2020000006a47304402200ccc9635d8f582814dbb79b10adf4c06fc058b18661a6e882e6577e987d7354d022000d9092394f47bd96275fb2eb9b396f83b750c8760d6160e0f310407287f163c4121020985608c75bb06ab0b76e60e48e2a660c687cea19e0fb9e11ead98111e7e34efffffffff0b34c9d025d33f020cca5175ace8f0b3c3e687ca9ef3b2e8ac2c3e201d11ddc0010000006a473044022003bd77f59f3148abc018ffa85e7d164f5219e2283576fa4aa63343be4709ed27022053c1a1e8fc0dfd461d1b248c26205d851b49f262c1515362a0bf55fe95a091ab412102fd3dce09147e95872aaad1a1a295d412d0977936a358a640f0e1a3c31523f4beffffffff040000000000000000406a04534c500001010453454e442007f5055b743215f55c0115d287f314134b9d3c31608cbbe6c81f17b9d9f8070108000000000bebc200080000acc96ac9960022020000000000001976a914c1dc3dbc8e3782e88a98f3ed7a3cb0807fee3c6888ac22020000000000001976a914c1dc3dbc8e3782e88a98f3ed7a3cb0807fee3c6888aca42b0200000000001976a91414db85134de9e4791450b1d6cbe69aca5b607a3f88ac00000000',
  blockhash: '000000000000000001369f5383a456b0ce68b701a9f4ba630bd31d716ff72df7',
  confirmations: 6549,
  time: 1691704347,
  blocktime: 1691704347,
  blockheight: 805638,
  isSlpTx: true,
  tokenTxType: 'SEND',
  tokenId: '07f5055b743215f55c0115d287f314134b9d3c31608cbbe6c81f17b9d9f80701',
  tokenType: 1,
  tokenTicker: 'SMPLUS',
  tokenName: 'SM Plus',
  tokenDecimals: 7,
  tokenUri: 'https://metaversestudiosla.vhx.tv/',
  tokenDocHash: '',
  isValidSlp: false
}


export default {
  sendData01,
  addrData01,
  utxo01,
  addrData02,
  utxo02,
  sendData02,
  greaterOutputBurn,
  greaterOutputAddr01,
  greaterOutputAddr02,
  nftSendData01,
  invalidTxFromDb01
}

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/mocks/utils-mock.js`:

```js
/*
  Mocked testing data for utils.unit.js
*/

const balance01 = {
  utxos: [
    {
      txid: 'be7ebc3143e6f020cfc7a6b225ff0c291b8b22f51b391695bf409676cd501c5e',
      vout: 1,
      type: 'token',
      qty: '9900',
      tokenId:
        'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
      address: 'bitcoincash:qp3t5cuncq2czduh27ps3jmz08m37ey3s5le8qca2f'
    }
  ],
  txs: [
    {
      txid: 'f3ad7418888fb5344394d511e373b53f99a41bd6ae35176533d7b5b5a6b21452',
      height: 717542
    },
    {
      txid: '06fff9287c909617720ab002f12a05cd2d6f314f2e1e888df8e44bffd848b905',
      height: 717546
    },
    {
      txid: 'be7ebc3143e6f020cfc7a6b225ff0c291b8b22f51b391695bf409676cd501c5e',
      height: 717555
    }
  ],
  balances: [
    {
      tokenId:
        'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
      qty: '9900'
    }
  ]
}

const tokenData01 = {
  type: 1,
  ticker: 'SLPTEST',
  name: 'SLP Test Token',
  tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
  documentUri: 'https://FullStack.cash',
  documentHash: '',
  decimals: 0,
  mintBatonIsActive: true,
  tokensInCirculationBN: '20000',
  tokensInCirculationStr: '20000',
  blockCreated: 716085
}

export default {
  balance01,
  tokenData01
}

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/mocks/nft-genesis-mock.js`:

```js
/*
  Mock data for nft-genesis.unit.js
*/

import BigNumber from 'bignumber.js'

const nftGenesisTx01 = {
  txid: '91884ea8e320ac9d133c09cfed84c1d7c063f07f5f2370d018f41018dc68a3e6',
  hash: '91884ea8e320ac9d133c09cfed84c1d7c063f07f5f2370d018f41018dc68a3e6',
  version: 2,
  size: 453,
  locktime: 0,
  vin: [
    {
      txid: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
      vout: 1,
      scriptSig: {
        asm: '304402203e5d90af6f76b90f56b7bdea2d3da1b90e3ad30b7ac52b65d8970f7c31be40a902201f401fdd6c8039887be3d0f15723caa5acc6079008d183657e2fb7c4d681ef13[ALL|FORKID] 02b2d61d3af3a76ac101de91ed70bd620041c3bb0a930af229defcbc0a06a4a881',
        hex: '47304402203e5d90af6f76b90f56b7bdea2d3da1b90e3ad30b7ac52b65d8970f7c31be40a902201f401fdd6c8039887be3d0f15723caa5acc6079008d183657e2fb7c4d681ef13412102b2d61d3af3a76ac101de91ed70bd620041c3bb0a930af229defcbc0a06a4a881'
      },
      sequence: 4294967295,
      address: 'bitcoincash:qz90rpanj52tvwu8wqs8cyf7f48a95wgf5y9u3uvq2',
      value: 0.00000546,
      tokenQty: 5,
      tokenQtyStr: '5',
      tokenId: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59'
    },
    {
      txid: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
      vout: 3,
      scriptSig: {
        asm: '3045022100dee2efc8b83801de379eeced56cd50ed25b10a94141d9835813c362aff917d7f02206ee5854b35979d03202d15c8cbeee3c2bff16f0a91fddb7e4b05eb1126e6f16a[ALL|FORKID] 02b2d61d3af3a76ac101de91ed70bd620041c3bb0a930af229defcbc0a06a4a881',
        hex: '483045022100dee2efc8b83801de379eeced56cd50ed25b10a94141d9835813c362aff917d7f02206ee5854b35979d03202d15c8cbeee3c2bff16f0a91fddb7e4b05eb1126e6f16a412102b2d61d3af3a76ac101de91ed70bd620041c3bb0a930af229defcbc0a06a4a881'
      },
      sequence: 4294967295,
      address: 'bitcoincash:qz90rpanj52tvwu8wqs8cyf7f48a95wgf5y9u3uvq2',
      value: 0.00050444,
      tokenQty: 0,
      tokenQtyStr: '0',
      tokenId: null
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 65 47454e45534953 4e4654303031 4e4654204368696c64 68747470733a2f2f46756c6c537461636b2e63617368 0 0 0 0000000000000001',
        hex: '6a04534c500001410747454e45534953064e4654303031094e4654204368696c641668747470733a2f2f46756c6c537461636b2e636173684c0001004c00080000000000000001',
        type: 'nulldata'
      },
      opReturnData: {
        tokenType: 65,
        txType: 'GENESIS',
        ticker: 'NFT001',
        name: 'NFT Child',
        tokenId: '91884ea8e320ac9d133c09cfed84c1d7c063f07f5f2370d018f41018dc68a3e6',
        documentUri: 'https://FullStack.cash',
        documentHash: '',
        decimals: 0,
        mintBatonVout: 0,
        qty: '1'
      },
      tokenQtyStr: '0',
      tokenQty: 0,
      isMintBaton: true
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 8af187b39514b63b8770207c113e4d4fd2d1c84d OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9148af187b39514b63b8770207c113e4d4fd2d1c84d88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qz90rpanj52tvwu8wqs8cyf7f48a95wgf5y9u3uvq2'
        ]
      },
      tokenQtyStr: '1',
      tokenQty: 1
    },
    {
      value: 0.00049894,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 8af187b39514b63b8770207c113e4d4fd2d1c84d OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9148af187b39514b63b8770207c113e4d4fd2d1c84d88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qz90rpanj52tvwu8wqs8cyf7f48a95wgf5y9u3uvq2'
        ]
      },
      tokenQtyStr: '0',
      tokenQty: 0
    }
  ],
  hex: '0200000002594e3a9604a7676045b486bfbb0cdc2ab65c67f8c4d520c30c93c58263686c04010000006a47304402203e5d90af6f76b90f56b7bdea2d3da1b90e3ad30b7ac52b65d8970f7c31be40a902201f401fdd6c8039887be3d0f15723caa5acc6079008d183657e2fb7c4d681ef13412102b2d61d3af3a76ac101de91ed70bd620041c3bb0a930af229defcbc0a06a4a881ffffffff594e3a9604a7676045b486bfbb0cdc2ab65c67f8c4d520c30c93c58263686c04030000006b483045022100dee2efc8b83801de379eeced56cd50ed25b10a94141d9835813c362aff917d7f02206ee5854b35979d03202d15c8cbeee3c2bff16f0a91fddb7e4b05eb1126e6f16a412102b2d61d3af3a76ac101de91ed70bd620041c3bb0a930af229defcbc0a06a4a881ffffffff030000000000000000476a04534c500001410747454e45534953064e4654303031094e4654204368696c641668747470733a2f2f46756c6c537461636b2e636173684c0001004c0008000000000000000122020000000000001976a9148af187b39514b63b8770207c113e4d4fd2d1c84d88ace6c20000000000001976a9148af187b39514b63b8770207c113e4d4fd2d1c84d88ac00000000',
  blockhash: '0000000000000000022c0cb70f3fb47bd2e05513941b8487ced9cf4da5efccd7',
  confirmations: 10,
  time: 1646666703,
  blocktime: 1646666703,
  blockheight: 730295,
  isSlpTx: true,
  tokenTxType: 'GENESIS',
  tokenId: '91884ea8e320ac9d133c09cfed84c1d7c063f07f5f2370d018f41018dc68a3e6',
  tokenType: 65,
  tokenTicker: 'NFT001',
  tokenName: 'NFT Child',
  tokenDecimals: 0,
  tokenUri: 'https://FullStack.cash',
  tokenDocHash: ''
}

const groupTx01 = {
  txid: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
  hash: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
  version: 2,
  size: 344,
  locktime: 0,
  vin: [
    {
      txid: '7fe3e2dc5cc052435c2a61ad47014caf807329eb09aab6e512e047e703ed91eb',
      vout: 0,
      scriptSig: {
        asm: '3045022100f8ce4d404801149cdc4772d97a7e3af7b106357ec0d3acc4d56d9b1c9153a83102206c06c794d06424f36ed49c3a59cfab19b092bf734c7edc772d21c1dc4db1f004[ALL|FORKID] 02b2d61d3af3a76ac101de91ed70bd620041c3bb0a930af229defcbc0a06a4a881',
        hex: '483045022100f8ce4d404801149cdc4772d97a7e3af7b106357ec0d3acc4d56d9b1c9153a83102206c06c794d06424f36ed49c3a59cfab19b092bf734c7edc772d21c1dc4db1f004412102b2d61d3af3a76ac101de91ed70bd620041c3bb0a930af229defcbc0a06a4a881'
      },
      sequence: 4294967295,
      address: 'bitcoincash:qz90rpanj52tvwu8wqs8cyf7f48a95wgf5y9u3uvq2',
      value: 0.00052086,
      tokenQty: 0,
      tokenQtyStr: '0',
      tokenId: null
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 -1 47454e45534953 4e46545454 4e4654205465737420546f6b656e 68747470733a2f2f46756c6c537461636b2e63617368 0 0 2 0000000000000005',
        hex: '6a04534c500001810747454e45534953054e465454540e4e4654205465737420546f6b656e1668747470733a2f2f46756c6c537461636b2e636173684c0001000102080000000000000005',
        type: 'nulldata'
      },
      opReturnData: {
        tokenType: 129,
        txType: 'GENESIS',
        ticker: 'NFTTT',
        name: 'NFT Test Token',
        tokenId: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
        documentUri: 'https://FullStack.cash',
        documentHash: '',
        decimals: 0,
        mintBatonVout: 2,
        qty: '5'
      },
      tokenQtyStr: '0',
      tokenQty: 0
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 8af187b39514b63b8770207c113e4d4fd2d1c84d OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9148af187b39514b63b8770207c113e4d4fd2d1c84d88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qz90rpanj52tvwu8wqs8cyf7f48a95wgf5y9u3uvq2'
        ]
      },
      tokenQtyStr: '5',
      tokenQty: 5
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 8af187b39514b63b8770207c113e4d4fd2d1c84d OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9148af187b39514b63b8770207c113e4d4fd2d1c84d88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qz90rpanj52tvwu8wqs8cyf7f48a95wgf5y9u3uvq2'
        ]
      },
      tokenQtyStr: '0',
      tokenQty: 0,
      isMintBaton: true
    },
    {
      value: 0.00050444,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 8af187b39514b63b8770207c113e4d4fd2d1c84d OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9148af187b39514b63b8770207c113e4d4fd2d1c84d88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qz90rpanj52tvwu8wqs8cyf7f48a95wgf5y9u3uvq2'
        ]
      },
      tokenQtyStr: '0',
      tokenQty: 0
    }
  ],
  hex: '0200000001eb91ed03e747e012e5b6aa09eb297380af4c0147ad612a5c4352c05cdce2e37f000000006b483045022100f8ce4d404801149cdc4772d97a7e3af7b106357ec0d3acc4d56d9b1c9153a83102206c06c794d06424f36ed49c3a59cfab19b092bf734c7edc772d21c1dc4db1f004412102b2d61d3af3a76ac101de91ed70bd620041c3bb0a930af229defcbc0a06a4a881ffffffff0400000000000000004b6a04534c500001810747454e45534953054e465454540e4e4654205465737420546f6b656e1668747470733a2f2f46756c6c537461636b2e636173684c000100010208000000000000000522020000000000001976a9148af187b39514b63b8770207c113e4d4fd2d1c84d88ac22020000000000001976a9148af187b39514b63b8770207c113e4d4fd2d1c84d88ac0cc50000000000001976a9148af187b39514b63b8770207c113e4d4fd2d1c84d88ac00000000',
  blockhash: '0000000000000000045210262f68de7eca49e36e18080b4eae057acb854071db',
  confirmations: 1,
  time: 1646665685,
  blocktime: 1646665685,
  blockheight: 730293,
  isSlpTx: true,
  tokenTxType: 'GENESIS',
  tokenId: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
  tokenType: 129,
  tokenTicker: 'NFTTT',
  tokenName: 'NFT Test Token',
  tokenDecimals: 0,
  tokenUri: 'https://FullStack.cash',
  tokenDocHash: '',
  isValidSlp: true
}

const addrData01 = {
  utxos: [
    {
      txid: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
      vout: 1,
      type: 'token',
      qty: '234123',
      tokenId:
        '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
      address: 'bitcoincash:qqf89zzwd0fqc3npkks997r5l7dpfjf9kgx2rqu500'
    }
  ],
  txs: [
    {
      txid: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
      height: 543614
    }
  ],
  balances: [
    {
      tokenId:
        '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
      qty: new BigNumber('234123')
    }
  ]
}

const utxo01 = {
  txid: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
  vout: 1,
  type: 'token',
  qty: '234123',
  tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
  address: 'bitcoincash:qqf89zzwd0fqc3npkks997r5l7dpfjf9kgx2rqu500'
}

const addrData02 = {
  utxos: [
    {
      txid: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
      vout: 1,
      type: 'token',
      qty: '5',
      tokenId: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
      tokenType: 129,
      address: 'bitcoincash:qz90rpanj52tvwu8wqs8cyf7f48a95wgf5y9u3uvq2',
      effectiveQty: '5',
      decimals: 0,
      value: 0.00000546
    },
    {
      txid: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
      vout: 2,
      type: 'baton',
      tokenId: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
      address: 'bitcoincash:qz90rpanj52tvwu8wqs8cyf7f48a95wgf5y9u3uvq2'
    }
  ],
  txs: [
    {
      txid: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
      height: 730293
    }
  ],
  balances: [
    {
      tokenId: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
      qty: '5'
    }
  ]
}

const slpData01 = {
  tokenType: 65,
  txType: 'GENESIS',
  ticker: 'NFT001',
  name: 'NFT Child',
  tokenId: '91884ea8e320ac9d133c09cfed84c1d7c063f07f5f2370d018f41018dc68a3e6',
  documentUri: 'https://FullStack.cash',
  documentHash: '',
  decimals: 0,
  mintBatonVout: 0,
  qty: '1'
}

export default {
  nftGenesisTx01,
  groupTx01,
  addrData01,
  utxo01,
  addrData02,
  slpData01
}

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/mocks/leveldb-mock.js`:

```js
/*
  Mocks for LevelDB.
*/

class MockLevel {
  get () {
    return {}
  }

  put () {
    return {}
  }

  del () {
    return {}
  }

  createReadStream () {
    const stream = {
      on: () => {}
    }

    return stream
  }

  async close() {
    return {}
  }

  async open() {
    return {}
  }
}

export default MockLevel

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/mocks/mint-mock.js`:

```js
/*
  Mock data for the mint.js library and mint.unit.js unit tests.
*/

import BigNumber from 'bignumber.js'

const mintData = {
  slpData: {
    tokenType: 1,
    txType: 'MINT',
    tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
    mintBatonVout: 2,
    qty: new BigNumber('234123')
  },
  blockHeight: 543614,
  txData: {
    txid: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
    hash: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
    version: 1,
    size: 473,
    locktime: 543613,
    vin: [
      {
        txid: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
        vout: 3,
        scriptSig: {
          asm: '3045022100ac43a871e0f84787001db745e4801b789fd9cd7efa247727ebb5c0c7b66d597302205316328b6501759e9a15ec65202219a433172d153f9f1b68f65f3a63494ba6f0[ALL|FORKID] 0345a5f5dd11c987b346c18c245f0df6d305369984b9b3c7ba465c29875466e374',
          hex: '483045022100ac43a871e0f84787001db745e4801b789fd9cd7efa247727ebb5c0c7b66d597302205316328b6501759e9a15ec65202219a433172d153f9f1b68f65f3a63494ba6f041210345a5f5dd11c987b346c18c245f0df6d305369984b9b3c7ba465c29875466e374'
        },
        sequence: 4294967294,
        address: 'bitcoincash:qqj0durd4qzdddvl2u6sen8n8h6mljtywugqctt9km',
        value: 0.00056266,
        tokenQtyStr: '0',
        tokenQty: 0,
        tokenId: null
      },
      {
        txid: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
        vout: 2,
        scriptSig: {
          asm: '304402202ce2d9d63bc6ab7765d267540fd3429bf7a8d1b50e975391fff3a4506289461a02205daf3f761a9b02d141f22136a6fe019062182c9da1b1d3a5245ff745f1236e45[ALL|FORKID] 02c00b05bc633a48e074bc54dd195b19a470ad6252ac8d306c82a2bd729c1c4c69',
          hex: '47304402202ce2d9d63bc6ab7765d267540fd3429bf7a8d1b50e975391fff3a4506289461a02205daf3f761a9b02d141f22136a6fe019062182c9da1b1d3a5245ff745f1236e45412102c00b05bc633a48e074bc54dd195b19a470ad6252ac8d306c82a2bd729c1c4c69'
        },
        sequence: 4294967294,
        address: 'bitcoincash:qzf72qccdgjrpjpewq8dazlze6jyxzku8q3cauna4t',
        value: 0.00000546,
        tokenQtyStr: '0',
        tokenQty: 0,
        tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
        isMintBaton: true
      }
    ],
    vout: [
      {
        value: 0,
        n: 0,
        scriptPubKey: {
          asm: 'OP_RETURN 5262419 1 1414416717 938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8 2 000000000003928b',
          hex: '6a04534c50000101044d494e5420938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8010208000000000003928b',
          type: 'nulldata'
        },
        tokenQtyStr: '0',
        tokenQty: 0
      },
      {
        value: 0.00000546,
        n: 1,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 1272884e6bd20c4661b5a052f874ff9a14c925b2 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a9141272884e6bd20c4661b5a052f874ff9a14c925b288ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: [
            'bitcoincash:qqf89zzwd0fqc3npkks997r5l7dpfjf9kgx2rqu500'
          ]
        },
        tokenQtyStr: '2.34123',
        tokenQty: 2.34123
      },
      {
        value: 0.00000546,
        n: 2,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 d1eaebf8d1face5bd866e36bd94f43e2ffceef71 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a914d1eaebf8d1face5bd866e36bd94f43e2ffceef7188ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: [
            'bitcoincash:qrg746lc68avuk7cvm3khk20g030lnh0wy5h2k2fqr'
          ]
        },
        tokenQtyStr: '0',
        tokenQty: 0,
        isMintBaton: true
      },
      {
        value: 0.00054848,
        n: 3,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 17178e31b3e468c0d98d57be07bc907bf94d1fdb OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a91417178e31b3e468c0d98d57be07bc907bf94d1fdb88ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: [
            'bitcoincash:qqt30r33k0jx3sxe34tmupaujpaljnglmvqgrrfp2x'
          ]
        },
        tokenQtyStr: '0',
        tokenQty: 0
      }
    ],
    hex: '0100000002f8cda53b43b0ea49991a9bc6c74eb901d2a8b964bc7b8987d76789618ec18c93030000006b483045022100ac43a871e0f84787001db745e4801b789fd9cd7efa247727ebb5c0c7b66d597302205316328b6501759e9a15ec65202219a433172d153f9f1b68f65f3a63494ba6f041210345a5f5dd11c987b346c18c245f0df6d305369984b9b3c7ba465c29875466e374fefffffff8cda53b43b0ea49991a9bc6c74eb901d2a8b964bc7b8987d76789618ec18c93020000006a47304402202ce2d9d63bc6ab7765d267540fd3429bf7a8d1b50e975391fff3a4506289461a02205daf3f761a9b02d141f22136a6fe019062182c9da1b1d3a5245ff745f1236e45412102c00b05bc633a48e074bc54dd195b19a470ad6252ac8d306c82a2bd729c1c4c69feffffff040000000000000000396a04534c50000101044d494e5420938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8010208000000000003928b22020000000000001976a9141272884e6bd20c4661b5a052f874ff9a14c925b288ac22020000000000001976a914d1eaebf8d1face5bd866e36bd94f43e2ffceef7188ac40d60000000000001976a91417178e31b3e468c0d98d57be07bc907bf94d1fdb88ac7d4b0800',
    blockhash: '00000000000000000140f0d813052da59c811a936494a8d8b2d60b215d19e3dc',
    confirmations: 171061,
    time: 1534391953,
    blocktime: 1534391953,
    blockheight: 543614,
    isSlpTx: true,
    tokenTxType: 'MINT',
    tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
    tokenType: 1,
    tokenTicker: 'Bubb2',
    tokenName: 'the new bubbles!',
    tokenDecimals: 5,
    tokenUri: '',
    tokenDocHash: ''
  }
}

const mintAddrDb01 = {
  utxos: [
    {
      txid: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
      vout: 2,
      type: 'baton',
      tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
      address: 'bitcoincash:qzf72qccdgjrpjpewq8dazlze6jyxzku8q3cauna4t'
    }
  ],
  txs: [
    {
      txid: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
      height: 543614
    }
  ],
  balances: []
}

const mintAddrDb02 = {
  utxos: [
    {
      txid: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
      vout: 1,
      type: 'token',
      qty: '234123',
      tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
      address: 'bitcoincash:qqf89zzwd0fqc3npkks997r5l7dpfjf9kgx2rqu500'
    }
  ],
  txs: [
    {
      txid: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
      height: 543614
    }
  ],
  balances: []
}

const invalidMintData01 = {
  slpData: {
    tokenType: 1,
    txType: 'MINT',
    tokenId: 'd912758f9f2c9c365e31f4d87e1c79675ec09b35364db2484061413651d0ccd4',
    mintBatonVout: 3,
    qty: '25000'
  },
  blockHeight: 657508,
  txData: {
    txid: 'a98686df3ced24b5ce7f47762631b8a8dc87086aa7b9ee2be59bcdde7886264a',
    hash: 'a98686df3ced24b5ce7f47762631b8a8dc87086aa7b9ee2be59bcdde7886264a',
    version: 2,
    size: 772,
    locktime: 657505,
    vin: [
      {
        txid: '7fd154aac152f840a5387f0d418909353e1fbbf39daf10372ccfd962321a0841',
        vout: 0,
        scriptSig: {
          asm: '17c4c559f7f52da668c23283734151ac7693b5e5e9fa71cdf8625ac7af26b0dc49921edd6322f78ba75e1b3ec8f74c932c3ca74f789354a55bb48e7cf9881f7a[ALL|FORKID] 03db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354a',
          hex: '4117c4c559f7f52da668c23283734151ac7693b5e5e9fa71cdf8625ac7af26b0dc49921edd6322f78ba75e1b3ec8f74c932c3ca74f789354a55bb48e7cf9881f7a412103db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354a'
        },
        sequence: 4294967294,
        address: 'bitcoincash:qq39p58k3rtxjgtfw2edfdvrde7jx68xqsx939f37a',
        value: 0.00001,
        tokenQty: 0,
        tokenQtyStr: '0',
        tokenId: null
      },
      {
        txid: 'ca7c7111fed2a24a89bcbf28e5bd1db8c78c92797d395992000f87e43d8bde85',
        vout: 1,
        scriptSig: {
          asm: 'd8efea90f2885765014cace48d52a2024b6a9c3b29123292400a445c70510ca12e8f30c7d81178591c4d572ba888a7e3fdf37c8a91c071e98e8d3f7e79bbf93e[ALL|FORKID] 03db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354a',
          hex: '41d8efea90f2885765014cace48d52a2024b6a9c3b29123292400a445c70510ca12e8f30c7d81178591c4d572ba888a7e3fdf37c8a91c071e98e8d3f7e79bbf93e412103db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354a'
        },
        sequence: 4294967294,
        address: 'bitcoincash:qq39p58k3rtxjgtfw2edfdvrde7jx68xqsx939f37a',
        value: 0.00000546,
        tokenQtyStr: '250',
        tokenQty: 250,
        tokenId: 'd912758f9f2c9c365e31f4d87e1c79675ec09b35364db2484061413651d0ccd4'
      },
      {
        txid: 'cb510b1b4d962896b7a1c21e9db79dd56e703c6b4312a3a05fd9deb22c83a5b4',
        vout: 1,
        scriptSig: {
          asm: '67523587e9d62ec32dedf0e33c32e93c7dc111d57ce6b98440251c02e14c968a94728821dd30fdecae5908207ccbb922ed5149a2bf0cfe38e437056d9d69de98[ALL|FORKID] 03db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354a',
          hex: '4167523587e9d62ec32dedf0e33c32e93c7dc111d57ce6b98440251c02e14c968a94728821dd30fdecae5908207ccbb922ed5149a2bf0cfe38e437056d9d69de98412103db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354a'
        },
        sequence: 4294967294,
        address: 'bitcoincash:qq39p58k3rtxjgtfw2edfdvrde7jx68xqsx939f37a',
        value: 0.00000546,
        tokenQtyStr: '250',
        tokenQty: 250,
        tokenId: 'd912758f9f2c9c365e31f4d87e1c79675ec09b35364db2484061413651d0ccd4'
      },
      {
        txid: '1831935aeef250d0cb8b33a63ed31f65b684e490e69b8d2c48caefddc064d01d',
        vout: 0,
        scriptSig: {
          asm: '7ad2217363924bc16a2dca4a1770bfa6a2049c6a2a54b12e10ff64f0a40f66f83d34e7742ea2f5346906634eaaa51adf09072ae851b77b3caa5630c5b5ae2967[ALL|FORKID] 03db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354a',
          hex: '417ad2217363924bc16a2dca4a1770bfa6a2049c6a2a54b12e10ff64f0a40f66f83d34e7742ea2f5346906634eaaa51adf09072ae851b77b3caa5630c5b5ae2967412103db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354a'
        },
        sequence: 4294967294,
        address: 'bitcoincash:qq39p58k3rtxjgtfw2edfdvrde7jx68xqsx939f37a',
        value: 0.00005,
        tokenQty: 0,
        tokenQtyStr: '0',
        tokenId: null
      }
    ],
    vout: [
      {
        value: 0,
        n: 0,
        scriptPubKey: {
          asm: 'OP_RETURN 5262419 1 1414416717 d912758f9f2c9c365e31f4d87e1c79675ec09b35364db2484061413651d0ccd4 3 00000000000061a8',
          hex: '6a04534c50000101044d494e5420d912758f9f2c9c365e31f4d87e1c79675ec09b35364db2484061413651d0ccd401030800000000000061a8',
          type: 'nulldata'
        },
        tokenQtyStr: '0',
        tokenQty: 0
      },
      {
        value: 0.00000546,
        n: 1,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 2250d0f688d669216972b2d4b5836e7d2368e604 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a9142250d0f688d669216972b2d4b5836e7d2368e60488ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: [
            'bitcoincash:qq39p58k3rtxjgtfw2edfdvrde7jx68xqsx939f37a'
          ]
        },
        tokenQtyStr: '250',
        tokenQty: 250
      },
      {
        value: 0.000012,
        n: 2,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 133e7e8b5ec101c5567323bcef09ba782dba15a8 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a914133e7e8b5ec101c5567323bcef09ba782dba15a888ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: [
            'bitcoincash:qqfnul5ttmqsr32kwv3memcfhfuzmws44q3aapks67'
          ]
        },
        tokenQtyStr: '0',
        tokenQty: 0
      },
      {
        value: 0.00001,
        n: 3,
        scriptPubKey: {
          asm: 'OP_HASH160 db4a7b2bed469b98f610bf99c4beeb9401e125c1 OP_EQUAL',
          hex: 'a914db4a7b2bed469b98f610bf99c4beeb9401e125c187',
          reqSigs: 1,
          type: 'scripthash',
          addresses: [
            'bitcoincash:prd557eta4rfhx8kzzlen397aw2qrcf9cy2nuy0u9a'
          ]
        },
        tokenQtyStr: '0',
        tokenQty: 0,
        isMintBaton: true
      },
      {
        value: 0.00003346,
        n: 4,
        scriptPubKey: {
          asm: 'OP_HASH160 db4a7b2bed469b98f610bf99c4beeb9401e125c1 OP_EQUAL',
          hex: 'a914db4a7b2bed469b98f610bf99c4beeb9401e125c187',
          reqSigs: 1,
          type: 'scripthash',
          addresses: [
            'bitcoincash:prd557eta4rfhx8kzzlen397aw2qrcf9cy2nuy0u9a'
          ]
        },
        tokenQtyStr: '0',
        tokenQty: 0
      }
    ],
    hex: '020000000441081a3262d9cf2c3710af9df3bb1f3e350989410d7f38a540f852c1aa54d17f00000000644117c4c559f7f52da668c23283734151ac7693b5e5e9fa71cdf8625ac7af26b0dc49921edd6322f78ba75e1b3ec8f74c932c3ca74f789354a55bb48e7cf9881f7a412103db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354afeffffff85de8b3de4870f009259397d79928cc7b81dbde528bfbc894aa2d2fe11717cca010000006441d8efea90f2885765014cace48d52a2024b6a9c3b29123292400a445c70510ca12e8f30c7d81178591c4d572ba888a7e3fdf37c8a91c071e98e8d3f7e79bbf93e412103db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354afeffffffb4a5832cb2ded95fa0a312436b3c706ed59db79d1ec2a1b79628964d1b0b51cb01000000644167523587e9d62ec32dedf0e33c32e93c7dc111d57ce6b98440251c02e14c968a94728821dd30fdecae5908207ccbb922ed5149a2bf0cfe38e437056d9d69de98412103db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354afeffffff1dd064c0ddefca482c8d9be690e484b6651fd33ea6338bcbd050f2ee5a9331180000000064417ad2217363924bc16a2dca4a1770bfa6a2049c6a2a54b12e10ff64f0a40f66f83d34e7742ea2f5346906634eaaa51adf09072ae851b77b3caa5630c5b5ae2967412103db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354afeffffff050000000000000000396a04534c50000101044d494e5420d912758f9f2c9c365e31f4d87e1c79675ec09b35364db2484061413651d0ccd401030800000000000061a822020000000000001976a9142250d0f688d669216972b2d4b5836e7d2368e60488acb0040000000000001976a914133e7e8b5ec101c5567323bcef09ba782dba15a888ace80300000000000017a914db4a7b2bed469b98f610bf99c4beeb9401e125c187120d00000000000017a914db4a7b2bed469b98f610bf99c4beeb9401e125c18761080a00',
    blockhash: '000000000000000001d13782fe274e8b35970d169adb8d59aaa64038f40ff30a',
    confirmations: 62634,
    time: 1602923089,
    blocktime: 1602923089,
    blockheight: 657508,
    isSlpTx: true,
    tokenTxType: 'MINT',
    tokenId: 'd912758f9f2c9c365e31f4d87e1c79675ec09b35364db2484061413651d0ccd4',
    tokenType: 1,
    tokenTicker: 'UNI',
    tokenName: 'Fake Uni Token',
    tokenDecimals: 2,
    tokenUri: 'https://signup.cash/yield',
    tokenDocHash: ''
  }
}

export default {
  mintData,
  mintAddrDb01,
  mintAddrDb02,
  invalidMintData01
}

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/mocks/adapters/index.js`:

```js
/*
  Mocks for the Adapter library.
*/

class IpfsAdapter {
  constructor () {
    this.ipfs = {
      files: {
        stat: () => {}
      }
    }
  }
}

class IpfsCoordAdapter {
  constructor () {
    this.ipfsCoord = {
      useCases: {
        peer: {
          sendPrivateMessage: () => {}
        }
      }
    }
  }
}

const ipfs = {
  ipfsAdapter: new IpfsAdapter(),
  ipfsCoordAdapter: new IpfsCoordAdapter()
}
ipfs.ipfs = ipfs.ipfsAdapter.ipfs

const localdb = {
  Users: class Users {
    static findById () {}
    static find () {}
    static findOne () {
      return {
        validatePassword: localdb.validatePassword
      }
    }

    async save () {
      return {}
    }

    generateToken () {
      return '123'
    }

    toJSON () {
      return {}
    }

    async remove () {
      return true
    }

    async validatePassword () {
      return true
    }
  },

  validatePassword: () => {
    return true
  }
}

const slpIndexer = {
  query: {
    getAddress: () => {},
    getTx: () => {},
    getToken: () => {}
  },
  blacklist: {
    checkBlacklist: () => {}
  }
}

export default { ipfs, localdb, slpIndexer }

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/mocks/adapters/fake-log`:

```
{"level":"error","message":"Error in lib/contact.js/sendEmail()","timestamp":"2022-06-27T17:36:43.907Z"}
{"level":"error","message":"Error in lib/contact.js/sendEmail()","timestamp":"2022-06-27T17:36:43.909Z"}
{"level":"error","message":"Error in lib/contact.js/sendEmail()","timestamp":"2022-06-27T17:36:43.910Z"}
{"level":"error","message":"Error in lib/contact.js/sendEmail()","timestamp":"2022-06-27T17:36:43.912Z"}
{"level":"error","message":"Error in lib/contact.js/sendEmail()","timestamp":"2022-06-27T17:36:43.915Z"}
{"level":"error","message":"Error in lib/nodemailer.js/sendEmail()","timestamp":"2022-06-27T17:36:58.979Z"}
{"level":"error","message":"Error in lib/nodemailer.js/sendEmail()","timestamp":"2022-06-27T17:36:58.980Z"}
{"level":"error","message":"Error in lib/nodemailer.js/sendEmail()","timestamp":"2022-06-27T17:36:58.981Z"}
{"level":"error","message":"Error in lib/nodemailer.js/sendEmail()","timestamp":"2022-06-27T17:36:58.982Z"}
{"level":"error","message":"Error in lib/nodemailer.js/sendEmail()","timestamp":"2022-06-27T17:36:58.983Z"}
{"level":"error","message":"Error in lib/nodemailer.js/validateEmailArray()","timestamp":"2022-06-27T17:36:59.002Z"}
{"level":"error","message":"Error in lib/nodemailer.js/validateEmailArray()","timestamp":"2022-06-27T17:36:59.003Z"}
{"level":"error","message":"Error in lib/nodemailer.js/getHtmlFromObject()","timestamp":"2022-06-27T17:36:59.005Z"}
{"level":"error","message":"Error in lib/nodemailer.js/getHtmlFromObject()","timestamp":"2022-06-27T17:36:59.006Z"}
{"level":"error","message":"Error in lib/nodemailer.js/getHtmlFromObject()","timestamp":"2022-06-27T17:36:59.008Z"}
{"level":"info","message":"Warning: Can not send JSON RPC response. Can not determine which peer this message came from.","timestamp":"2022-06-27T17:36:59.353Z"}
{"level":"info","message":"Rejecting invalid JSON RPC command.","timestamp":"2022-06-27T17:36:59.354Z"}
{"level":"info","message":"JSON RPC received from peerA, ID: ea442e78-2297-466a-823b-9cbb12c8ddd9, type: request, method: unknownMethod","timestamp":"2022-06-27T17:36:59.355Z"}
{"level":"error","message":"Error in rpc router():  test error","stack":"Error: test error\n    at Context.<anonymous> (/home/trout/work/psf/code/ipfs-service-provider/test/unit/controllers/json-rpc/a10-rpc.unit.js:110:49)\n    at callFn (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runnable.js:366:21)\n    at Test.Runnable.run (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runnable.js:354:5)\n    at Runner.runTest (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:666:10)\n    at /home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:789:12\n    at next (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:581:14)\n    at /home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:591:7\n    at next (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:474:14)\n    at Immediate._onImmediate (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:559:5)\n    at processImmediate (node:internal/timers:466:21)","timestamp":"2022-06-27T17:36:59.357Z"}
{"level":"info","message":"JSON RPC received from peerA, ID: 9ef6ad90-7fc3-4cb3-8769-4498e5512b3d, type: request, method: users","timestamp":"2022-06-27T17:36:59.358Z"}
{"level":"info","message":"JSON RPC received from peerA, ID: bd57a1cf-7f2f-4ff2-93d4-6727eec4d778, type: request, method: auth","timestamp":"2022-06-27T17:36:59.359Z"}
{"level":"info","message":"JSON RPC received from peerA, ID: 8fd9edc8-6a45-4042-ac06-9ace60567cbf, type: request, method: about","timestamp":"2022-06-27T17:36:59.361Z"}
{"level":"info","message":"JSON RPC received from peerA, ID: 1b27624a-e698-4bbe-9183-b860a1a0d78d, type: request, method: unknownMethod","timestamp":"2022-06-27T17:36:59.363Z"}
{"level":"info","message":"JSON RPC received from peerA, ID: 40fabddf-59c6-4910-a22c-63da7387f99a, type: request, method: unknownMethod","timestamp":"2022-06-27T17:36:59.365Z"}
{"level":"error","message":"Error in authUser():  Login credential do not match","stack":"Error: Login credential do not match\n    at Context.<anonymous> (/home/trout/work/psf/code/ipfs-service-provider/test/unit/controllers/json-rpc/auth.json-rpc.controller.unit.js:144:18)\n    at callFn (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runnable.js:366:21)\n    at Test.Runnable.run (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runnable.js:354:5)\n    at Runner.runTest (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:666:10)\n    at /home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:789:12\n    at next (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:581:14)\n    at /home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:591:7\n    at next (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:474:14)\n    at Immediate.<anonymous> (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:559:5)\n    at processImmediate (node:internal/timers:466:21)","timestamp":"2022-06-27T17:37:04.421Z"}
{"level":"error","message":"Error in authUser():  login must be specified","stack":"Error: login must be specified\n    at AuthRPC.authUser (/home/trout/work/psf/code/ipfs-service-provider/src/controllers/json-rpc/auth/index.js:78:93)\n    at Context.<anonymous> (/home/trout/work/psf/code/ipfs-service-provider/test/unit/controllers/json-rpc/auth.json-rpc.controller.unit.js:165:34)\n    at callFn (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runnable.js:366:21)\n    at Test.Runnable.run (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runnable.js:354:5)\n    at Runner.runTest (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:666:10)\n    at /home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:789:12\n    at next (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:581:14)\n    at /home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:591:7\n    at next (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:474:14)\n    at Immediate._onImmediate (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:559:5)\n    at processImmediate (node:internal/timers:466:21)","timestamp":"2022-06-27T17:37:04.423Z"}
{"level":"error","message":"Error in authUser():  password must be specified","stack":"Error: password must be specified\n    at AuthRPC.authUser (/home/trout/work/psf/code/ipfs-service-provider/src/controllers/json-rpc/auth/index.js:78:284)\n    at Context.<anonymous> (/home/trout/work/psf/code/ipfs-service-provider/test/unit/controllers/json-rpc/auth.json-rpc.controller.unit.js:185:34)\n    at callFn (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runnable.js:366:21)\n    at Test.Runnable.run (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runnable.js:354:5)\n    at Runner.runTest (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:666:10)\n    at /home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:789:12\n    at next (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:581:14)\n    at /home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:591:7\n    at next (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:474:14)\n    at Immediate._onImmediate (/home/trout/work/psf/code/ipfs-service-provider/node_modules/mocha/lib/runner.js:559:5)\n    at processImmediate (node:internal/timers:466:21)","timestamp":"2022-06-27T17:37:04.425Z"}
{"level":"error","timestamp":"2022-06-27T17:37:04.466Z"}
{"level":"info","message":"Running server in environment: dev","timestamp":"2022-06-27T17:37:04.487Z"}
{"level":"error","message":"Error in lib/users.js/createUser()","timestamp":"2022-06-27T17:37:04.495Z"}
{"level":"error","message":"Error in lib/users.js/createUser()","timestamp":"2022-06-27T17:37:04.495Z"}
{"level":"error","message":"Error in lib/users.js/createUser()","timestamp":"2022-06-27T17:37:04.496Z"}
{"level":"error","message":"Error in lib/users.js/createUser()","timestamp":"2022-06-27T17:37:04.497Z"}
{"level":"error","message":"Error in lib/users.js/createUser()","timestamp":"2022-06-27T17:37:04.497Z"}
{"level":"error","message":"Error in lib/users.js/getAllUsers()","timestamp":"2022-06-27T17:37:04.499Z"}
{"level":"error","message":"Error in lib/users.js/updateUser()","timestamp":"2022-06-27T17:37:04.502Z"}
{"level":"error","message":"Error in lib/users.js/updateUser()","timestamp":"2022-06-27T17:37:04.503Z"}
{"level":"error","message":"Error in lib/users.js/updateUser()","timestamp":"2022-06-27T17:37:04.503Z"}
{"level":"error","message":"Error in lib/users.js/updateUser()","timestamp":"2022-06-27T17:37:04.504Z"}
{"level":"error","message":"Error in lib/users.js/updateUser()","timestamp":"2022-06-27T17:37:04.505Z"}
{"level":"error","message":"Error in lib/users.js/updateUser()","timestamp":"2022-06-27T17:37:04.506Z"}
{"level":"error","message":"Error in lib/users.js/deleteUser()","timestamp":"2022-06-27T17:37:04.508Z"}
{"level":"info","message":"Running server in environment: test","timestamp":"2022-06-27T17:37:04.514Z"}
{"level":"error","message":"Error in lib/users.js/createUser()","timestamp":"2022-06-27T17:37:04.638Z"}
{"level":"error","message":"Error in lib/users.js/createUser()","timestamp":"2022-06-27T17:37:05.273Z"}
{"level":"error","message":"Error in lib/users.js/createUser()","timestamp":"2022-06-27T17:37:05.277Z"}
{"level":"error","message":"Error in lib/users.js/createUser()","timestamp":"2022-06-27T17:37:05.280Z"}
{"level":"error","message":"Error in lib/users.js/createUser()","timestamp":"2022-06-27T17:37:05.286Z"}
{"level":"error","timestamp":"2022-06-27T17:37:05.412Z"}
{"level":"verbose","message":"Calling user and target user do not match! Calling user: 62b9eac1b4f08950b955d27f, Target user: 1","timestamp":"2022-06-27T17:37:05.441Z"}
{"level":"error","message":"Error in lib/users.js/updateUser()","timestamp":"2022-06-27T17:37:05.448Z"}
{"level":"verbose","message":"Calling user and target user do not match! Calling user: 62b9eac1b4f08950b955d27f, Target user: 62b9eac1b4f08950b955d27d","timestamp":"2022-06-27T17:37:05.452Z"}
{"level":"error","message":"Error in lib/users.js/updateUser()","timestamp":"2022-06-27T17:37:05.457Z"}
{"level":"error","message":"Error in lib/users.js/updateUser()","timestamp":"2022-06-27T17:37:05.463Z"}
{"level":"error","message":"Error in lib/users.js/updateUser()","timestamp":"2022-06-27T17:37:05.467Z"}
{"level":"error","message":"Error in lib/users.js/updateUser()","timestamp":"2022-06-27T17:37:05.473Z"}
{"level":"verbose","message":"Calling user and target user do not match! Calling user: 62b9eac0b4f08950b955d274, Target user: 62b9eac1b4f08950b955d27d","timestamp":"2022-06-27T17:37:05.478Z"}
{"level":"verbose","message":"It's ok. The user is an admin.","timestamp":"2022-06-27T17:37:05.478Z"}
{"level":"verbose","message":"Calling user and target user do not match! Calling user: 62b9eac1b4f08950b955d27f, Target user: 1","timestamp":"2022-06-27T17:37:05.600Z"}
{"level":"verbose","message":"Calling user and target user do not match! Calling user: 62b9eac1b4f08950b955d27f, Target user: 62b9eac1b4f08950b955d27d","timestamp":"2022-06-27T17:37:05.603Z"}
{"level":"verbose","message":"Calling user and target user do not match! Calling user: 62b9eac0b4f08950b955d274, Target user: 62b9eac1b4f08950b955d27d","timestamp":"2022-06-27T17:37:05.615Z"}
{"level":"verbose","message":"It's ok. The user is an admin.","timestamp":"2022-06-27T17:37:05.615Z"}
{"level":"error","message":"Error in lib/contact.js/sendEmail()","timestamp":"2022-06-27T17:37:05.619Z"}
{"level":"error","message":"Error in lib/contact.js/sendEmail()","timestamp":"2022-06-27T17:37:05.622Z"}
{"level":"error","message":"Error in lib/contact.js/sendEmail()","timestamp":"2022-06-27T17:37:05.624Z"}
{"level":"error","message":"Error in lib/contact.js/sendEmail()","timestamp":"2022-06-27T17:37:05.627Z"}
{"level":"verbose","message":"Calling user and target user do not match! Calling user: 62b9eac1b4f08950b955d2a6, Target user: Target Id","timestamp":"2022-06-27T17:37:05.754Z"}
{"level":"verbose","message":"Calling user and target user do not match! Calling user: 62b9eac0b4f08950b955d274, Target user: 62b9eac1b4f08950b955d2a6","timestamp":"2022-06-27T17:37:05.756Z"}
{"level":"verbose","message":"It's ok. The user is an admin.","timestamp":"2022-06-27T17:37:05.756Z"}
{"level":"error","message":"Error in lib/users.js/createUser()","timestamp":"2022-06-27T17:37:06.060Z"}

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/mocks/dag-mock.js`:

```js
/*
  Mock data for dag.unit.js tests
*/

const slpSendTxData01 = {
  txid: '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e',
  hash: '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e',
  version: 1,
  size: 480,
  locktime: 543408,
  vin: [
    {
      txid: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
      vout: 1,
      scriptSig: {
        asm: '30440220268dacee1117975d904dd0d45ef8de42b86030d825a9522bae196a38bbf6b271022001ae1ce2536ab300040e597bcfaa8ef9fb2beaf702d0842f3161aae8e9867f55[ALL|FORKID] 028ff9e32b0dbc82c1d5e0fc945b2537b00420513b10684726f312f1b717c0ae11',
        hex: '4730440220268dacee1117975d904dd0d45ef8de42b86030d825a9522bae196a38bbf6b271022001ae1ce2536ab300040e597bcfaa8ef9fb2beaf702d0842f3161aae8e9867f554121028ff9e32b0dbc82c1d5e0fc945b2537b00420513b10684726f312f1b717c0ae11'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qp2jesd06k8ycj4wvkpl9lcwaemtr04f5yphjsa07v',
      value: 0.00000546,
      tokenQtyStr: '10000000',
      tokenQty: 10000000,
      tokenId: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'
    },
    {
      txid: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
      vout: 3,
      scriptSig: {
        asm: '3045022100fa241bb2de46f68688451bfcae3f165b724e3ccf13b219e7bf2d8d2df7712ad60220353017d6e581a06efce478adfcd2047cea2f92531e283845f3d0a345ef101519[ALL|FORKID] 02cc48ad10516f97e914b8836ff25448d07ad96ebb4704c6a828339880280831bc',
        hex: '483045022100fa241bb2de46f68688451bfcae3f165b724e3ccf13b219e7bf2d8d2df7712ad60220353017d6e581a06efce478adfcd2047cea2f92531e283845f3d0a345ef101519412102cc48ad10516f97e914b8836ff25448d07ad96ebb4704c6a828339880280831bc'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qppj3euc36x5u6twr5cxrrea2rca53vsfu3dxwr86j',
      value: 0.00172192,
      tokenQtyStr: '0',
      tokenQty: 0,
      tokenId: null
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 1 1145980243 323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35 00000000004c4b40 00000000004c4b40',
        hex: '6a04534c500001010453454e4420323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d350800000000004c4b400800000000004c4b40',
        type: 'nulldata'
      },
      tokenQty: null,
      tokenQtyStr: null
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 0a74cf9c0fb3f6dd62c3f5eecd1ed6e1051428e0 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9140a74cf9c0fb3f6dd62c3f5eecd1ed6e1051428e088ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qq98fnuup7eldhtzc067ang76mss29pguqh7qv9eac'
        ]
      },
      tokenQtyStr: '5000000',
      tokenQty: 5000000
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 d4548261e1be0de7e50b7511597799ec4af2b173 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914d4548261e1be0de7e50b7511597799ec4af2b17388ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qr29fqnpuxlqmel9pd63zkthn8ky4u43wv0v7pg5mn'
        ]
      },
      tokenQtyStr: '5000000',
      tokenQty: 5000000
    },
    {
      value: 0.00171165,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 d4548261e1be0de7e50b7511597799ec4af2b173 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914d4548261e1be0de7e50b7511597799ec4af2b17388ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qr29fqnpuxlqmel9pd63zkthn8ky4u43wv0v7pg5mn'
        ]
      },
      tokenQty: null,
      tokenQtyStr: null
    }
  ],
  hex: '0100000002359dab0d9c8ddc788b14c0b51493d195c9fbd9f2203d091663350bae351e3a32010000006a4730440220268dacee1117975d904dd0d45ef8de42b86030d825a9522bae196a38bbf6b271022001ae1ce2536ab300040e597bcfaa8ef9fb2beaf702d0842f3161aae8e9867f554121028ff9e32b0dbc82c1d5e0fc945b2537b00420513b10684726f312f1b717c0ae11feffffff359dab0d9c8ddc788b14c0b51493d195c9fbd9f2203d091663350bae351e3a32030000006b483045022100fa241bb2de46f68688451bfcae3f165b724e3ccf13b219e7bf2d8d2df7712ad60220353017d6e581a06efce478adfcd2047cea2f92531e283845f3d0a345ef101519412102cc48ad10516f97e914b8836ff25448d07ad96ebb4704c6a828339880280831bcfeffffff040000000000000000406a04534c500001010453454e4420323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d350800000000004c4b400800000000004c4b4022020000000000001976a9140a74cf9c0fb3f6dd62c3f5eecd1ed6e1051428e088ac22020000000000001976a914d4548261e1be0de7e50b7511597799ec4af2b17388ac9d9c0200000000001976a914d4548261e1be0de7e50b7511597799ec4af2b17388acb04a0800',
  blockhash: '000000000000000000292a9c6150fce48e2edd8df346948494fe6249e6e7f63b',
  confirmations: 170678,
  time: 1534271330,
  blocktime: 1534271330,
  blockheight: 543409,
  isSlpTx: true,
  tokenTxType: 'SEND',
  tokenId: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
  tokenType: 1,
  tokenTicker: '',
  tokenName: '',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: ''
}

const slpGenesisTxData01 = {
  txid: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
  hash: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
  version: 1,
  size: 306,
  locktime: 543403,
  vin: [
    {
      txid: '4f035d656ed5b6e94a884c88c09a8d2dee9c7e97901cce3adec966115e2a1ba5',
      vout: 2,
      scriptSig: {
        asm: '3045022100baeb639ca78e399a14b942d82b2e516dca90d20d2f87f0ec12f1c068880afd930220587369dc0dd2282a25ae24db08b7e52c1e26e4ddda6e8b9ec9d8350562283b21[ALL|FORKID] 039e4b148421503560104fea3ac85afc88e418566edfd7dd6089179053449e0144',
        hex: '483045022100baeb639ca78e399a14b942d82b2e516dca90d20d2f87f0ec12f1c068880afd930220587369dc0dd2282a25ae24db08b7e52c1e26e4ddda6e8b9ec9d8350562283b214121039e4b148421503560104fea3ac85afc88e418566edfd7dd6089179053449e0144'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qpwz6zycq3j5rhq40av6w7q3cvc04h0xhuv6xfsn6n',
      value: 0.0017359,
      tokenQty: 0,
      tokenQtyStr: '0',
      tokenId: null
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 1 47454e45534953 0 0 0 0 0 2 0000000000989680',
        hex: '6a04534c500001010747454e455349534c004c004c004c0001000102080000000000989680',
        type: 'nulldata'
      },
      tokenQtyStr: '0',
      tokenQty: 0
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 552cc1afd58e4c4aae6583f2ff0eee76b1bea9a1 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914552cc1afd58e4c4aae6583f2ff0eee76b1bea9a188ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qp2jesd06k8ycj4wvkpl9lcwaemtr04f5yphjsa07v'
        ]
      },
      tokenQtyStr: '10000000',
      tokenQty: 10000000
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 552cc1afd58e4c4aae6583f2ff0eee76b1bea9a1 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914552cc1afd58e4c4aae6583f2ff0eee76b1bea9a188ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qp2jesd06k8ycj4wvkpl9lcwaemtr04f5yphjsa07v'
        ]
      },
      tokenQtyStr: '0',
      tokenQty: 0,
      isMintBaton: true
    },
    {
      value: 0.00172192,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 4328e7988e8d4e696e1d30618f3d50f1da45904f OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9144328e7988e8d4e696e1d30618f3d50f1da45904f88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qppj3euc36x5u6twr5cxrrea2rca53vsfu3dxwr86j'
        ]
      },
      tokenQtyStr: '0',
      tokenQty: 0
    }
  ],
  hex: '0100000001a51b2a5e1166c9de3ace1c90977e9cee2d8d9ac0884c884ae9b6d56e655d034f020000006b483045022100baeb639ca78e399a14b942d82b2e516dca90d20d2f87f0ec12f1c068880afd930220587369dc0dd2282a25ae24db08b7e52c1e26e4ddda6e8b9ec9d8350562283b214121039e4b148421503560104fea3ac85afc88e418566edfd7dd6089179053449e0144feffffff040000000000000000256a04534c500001010747454e455349534c004c004c004c000100010208000000000098968022020000000000001976a914552cc1afd58e4c4aae6583f2ff0eee76b1bea9a188ac22020000000000001976a914552cc1afd58e4c4aae6583f2ff0eee76b1bea9a188aca0a00200000000001976a9144328e7988e8d4e696e1d30618f3d50f1da45904f88acab4a0800',
  blockhash: '000000000000000001d94aa156f4cdcec70b06d2aa8fb0d63ff218f7ac3d955c',
  confirmations: 170709,
  time: 1534269216,
  blocktime: 1534269216,
  blockheight: 543404,
  isSlpTx: true,
  tokenTxType: 'GENESIS',
  tokenId: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
  tokenType: 1,
  tokenTicker: '',
  tokenName: '',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: ''
}

const threeTxTestData01 = {
  txid: '4e52e0ec21d26feb8bdcafdbe48d0f15662f1ba2b3bea8200bcf0a90d7c209ee',
  hash: '4e52e0ec21d26feb8bdcafdbe48d0f15662f1ba2b3bea8200bcf0a90d7c209ee',
  version: 1,
  size: 481,
  locktime: 545432,
  vin: [
    {
      txid: 'f55373b8e7d1d139981acbe818bf6de07c03f5a325a6dbab1fe724590fbdac46',
      vout: 2,
      scriptSig: {
        asm: '30450221008f8c8045f1244d94084dc38a5cbdac1cfb21b0f25d8db0a0288606c07256c3a002205c7be38fd72967b9cd833100e99acc95ff933e9e89273c5816049b054a4b45e3[ALL|FORKID] 02536185f1e3406386865af715e27688c9b06e53fd022ec0cfbe45a937c6859095',
        hex: '4830450221008f8c8045f1244d94084dc38a5cbdac1cfb21b0f25d8db0a0288606c07256c3a002205c7be38fd72967b9cd833100e99acc95ff933e9e89273c5816049b054a4b45e3412102536185f1e3406386865af715e27688c9b06e53fd022ec0cfbe45a937c6859095'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qqlqlsw473np86d5uganw4aw6fgxvpu5sct3hv8we7',
      value: 0.00000546,
      tokenQtyStr: '3999999',
      tokenQty: 3999999,
      tokenId: 'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501'
    },
    {
      txid: 'f55373b8e7d1d139981acbe818bf6de07c03f5a325a6dbab1fe724590fbdac46',
      vout: 3,
      scriptSig: {
        asm: '304502210092643cb66c6ac55c32948e66d22d158cfad2facb5da021a3fca818ab96280c5a02207926b5ed4534eb98b5416d6e092e77e5ff9870c4d3a5e342bdd45b297f5f191a[ALL|FORKID] 02536185f1e3406386865af715e27688c9b06e53fd022ec0cfbe45a937c6859095',
        hex: '48304502210092643cb66c6ac55c32948e66d22d158cfad2facb5da021a3fca818ab96280c5a02207926b5ed4534eb98b5416d6e092e77e5ff9870c4d3a5e342bdd45b297f5f191a412102536185f1e3406386865af715e27688c9b06e53fd022ec0cfbe45a937c6859095'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qqlqlsw473np86d5uganw4aw6fgxvpu5sct3hv8we7',
      value: 0.00003372,
      tokenQtyStr: 'NaN',
      tokenQty: null,
      tokenId: 'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501'
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 1 1145980243 d9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501 0000000000000190 00000000003d076f',
        hex: '6a04534c500001010453454e4420d9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc75010800000000000001900800000000003d076f',
        type: 'nulldata'
      },
      tokenQty: null,
      tokenQtyStr: null
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 5ac6f426c25771a63777e006ce0fb932a9d46e65 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9145ac6f426c25771a63777e006ce0fb932a9d46e6588ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qpdvdapxcfthrf3hwlsqdns0hye2n4rwv5ag33vwgx'
        ]
      },
      tokenQtyStr: '400',
      tokenQty: 400
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 faf0ed0f75ff7bdc142126a772a84a7d3a7c6085 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914faf0ed0f75ff7bdc142126a772a84a7d3a7c608588ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qra0pmg0whlhhhq5yyn2wu4gff7n5lrqs5s4qcz6dd'
        ]
      },
      tokenQtyStr: '3999599',
      tokenQty: 3999599
    },
    {
      value: 0.00001864,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 faf0ed0f75ff7bdc142126a772a84a7d3a7c6085 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914faf0ed0f75ff7bdc142126a772a84a7d3a7c608588ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qra0pmg0whlhhhq5yyn2wu4gff7n5lrqs5s4qcz6dd'
        ]
      },
      tokenQty: null,
      tokenQtyStr: null
    }
  ],
  hex: '010000000246acbd0f5924e71fabdba625a3f5037ce06dbf18e8cb1a9839d1d1e7b87353f5020000006b4830450221008f8c8045f1244d94084dc38a5cbdac1cfb21b0f25d8db0a0288606c07256c3a002205c7be38fd72967b9cd833100e99acc95ff933e9e89273c5816049b054a4b45e3412102536185f1e3406386865af715e27688c9b06e53fd022ec0cfbe45a937c6859095feffffff46acbd0f5924e71fabdba625a3f5037ce06dbf18e8cb1a9839d1d1e7b87353f5030000006b48304502210092643cb66c6ac55c32948e66d22d158cfad2facb5da021a3fca818ab96280c5a02207926b5ed4534eb98b5416d6e092e77e5ff9870c4d3a5e342bdd45b297f5f191a412102536185f1e3406386865af715e27688c9b06e53fd022ec0cfbe45a937c6859095feffffff040000000000000000406a04534c500001010453454e4420d9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc75010800000000000001900800000000003d076f22020000000000001976a9145ac6f426c25771a63777e006ce0fb932a9d46e6588ac22020000000000001976a914faf0ed0f75ff7bdc142126a772a84a7d3a7c608588ac48070000000000001976a914faf0ed0f75ff7bdc142126a772a84a7d3a7c608588ac98520800',
  blockhash: '000000000000000000fc8cea3b24cb5be5446c6ee17e06c0c47876a66a221fe3',
  confirmations: 168938,
  time: 1535488058,
  blocktime: 1535488058,
  blockheight: 545433,
  isSlpTx: true,
  tokenTxType: 'SEND',
  tokenId: 'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501',
  tokenType: 1,
  tokenTicker: 'TRACY',
  tokenName: 'TRACYSPACY',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: ''
}

const threeTxTestData02 = {
  txid: 'f55373b8e7d1d139981acbe818bf6de07c03f5a325a6dbab1fe724590fbdac46',
  hash: 'f55373b8e7d1d139981acbe818bf6de07c03f5a325a6dbab1fe724590fbdac46',
  version: 1,
  size: 479,
  locktime: 545432,
  vin: [
    {
      txid: 'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501',
      vout: 1,
      scriptSig: {
        asm: '3044022064ecace59274f36a1fbc9a467ee024614a72c3e9310cac660f18f2d72e5aec2b022060f465096661326bc327a21b14d0fbb5664b9175214bfd9d05d039ee6c253120[ALL|FORKID] 02b01fa126d266a040e581b58e1f5faf8908d842475d834d8885c475d7e7f7152e',
        hex: '473044022064ecace59274f36a1fbc9a467ee024614a72c3e9310cac660f18f2d72e5aec2b022060f465096661326bc327a21b14d0fbb5664b9175214bfd9d05d039ee6c253120412102b01fa126d266a040e581b58e1f5faf8908d842475d834d8885c475d7e7f7152e'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qpuac0a5wn7lnjfrhj40ghwzde7ay8adfu57n79kzn',
      value: 0.00000546,
      tokenQtyStr: '4000000',
      tokenQty: 4000000,
      tokenId: 'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501'
    },
    {
      txid: 'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501',
      vout: 2,
      scriptSig: {
        asm: '3044022046699889b53a69982d85ad934f4b4bbd45ef4fbdd8bcee437ece5dfd9224a60802202471196f93beeac7ba290ee2bfc822cea09b48dd8d4126d8e23808928164690c[ALL|FORKID] 03c47d7f2515b5092f6523cb07e10aafcadfed142c116c9f7e172dc61e71be91ea',
        hex: '473044022046699889b53a69982d85ad934f4b4bbd45ef4fbdd8bcee437ece5dfd9224a60802202471196f93beeac7ba290ee2bfc822cea09b48dd8d4126d8e23808928164690c412103c47d7f2515b5092f6523cb07e10aafcadfed142c116c9f7e172dc61e71be91ea'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qruqv0jzqdy6zd656zq2awqdsmsq9sht5qxp6zrnd8',
      value: 0.00006323,
      tokenQtyStr: '0',
      tokenQty: 0,
      tokenId: null
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 1 1145980243 d9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501 0000000000000001 00000000003d08ff',
        hex: '6a04534c500001010453454e4420d9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc75010800000000000000010800000000003d08ff',
        type: 'nulldata'
      },
      tokenQty: null,
      tokenQtyStr: null
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 f4f0d52af68f1eb2b13ea3db72e39cfe56ddc244 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914f4f0d52af68f1eb2b13ea3db72e39cfe56ddc24488ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qr60p4f27683av43863akuhrnnl9dhwzgs9x9lujwl'
        ]
      },
      tokenQtyStr: '1',
      tokenQty: 1
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 3e0fc1d5f46613e9b4e23b3757aed25066079486 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9143e0fc1d5f46613e9b4e23b3757aed2506607948688ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qqlqlsw473np86d5uganw4aw6fgxvpu5sct3hv8we7'
        ]
      },
      tokenQtyStr: '3999999',
      tokenQty: 3999999
    },
    {
      value: 0.00003372,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 3e0fc1d5f46613e9b4e23b3757aed25066079486 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9143e0fc1d5f46613e9b4e23b3757aed2506607948688ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qqlqlsw473np86d5uganw4aw6fgxvpu5sct3hv8we7'
        ]
      },
      tokenQty: null,
      tokenQtyStr: null
    }
  ],
  hex: '01000000020175cc212f0e49c3fb22798ae6a392033146054056583f54458957042716aad9010000006a473044022064ecace59274f36a1fbc9a467ee024614a72c3e9310cac660f18f2d72e5aec2b022060f465096661326bc327a21b14d0fbb5664b9175214bfd9d05d039ee6c253120412102b01fa126d266a040e581b58e1f5faf8908d842475d834d8885c475d7e7f7152efeffffff0175cc212f0e49c3fb22798ae6a392033146054056583f54458957042716aad9020000006a473044022046699889b53a69982d85ad934f4b4bbd45ef4fbdd8bcee437ece5dfd9224a60802202471196f93beeac7ba290ee2bfc822cea09b48dd8d4126d8e23808928164690c412103c47d7f2515b5092f6523cb07e10aafcadfed142c116c9f7e172dc61e71be91eafeffffff040000000000000000406a04534c500001010453454e4420d9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc75010800000000000000010800000000003d08ff22020000000000001976a914f4f0d52af68f1eb2b13ea3db72e39cfe56ddc24488ac22020000000000001976a9143e0fc1d5f46613e9b4e23b3757aed2506607948688ac2c0d0000000000001976a9143e0fc1d5f46613e9b4e23b3757aed2506607948688ac98520800',
  blockhash: '000000000000000000fc8cea3b24cb5be5446c6ee17e06c0c47876a66a221fe3',
  confirmations: 168938,
  time: 1535488058,
  blocktime: 1535488058,
  blockheight: 545433,
  isSlpTx: true,
  tokenTxType: 'SEND',
  tokenId: 'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501',
  tokenType: 1,
  tokenTicker: 'TRACY',
  tokenName: 'TRACYSPACY',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: ''
}

const threeTxTestData03 = {
  txid: 'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501',
  hash: 'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501',
  version: 1,
  size: 285,
  locktime: 508031,
  vin: [
    {
      txid: '25b2cf364d42dd5baa313707a9e2ff633dcf4a260edd6d8304911b87321017e2',
      vout: 3,
      scriptSig: {
        asm: '3045022100f158d1bf77d68dbad54f90313cef1abaeb7dd793d8410bcc7298d8c5ffcf2dd702206bcd3a057808f683cb8464a29d5c9ed744fd4c8b2bbc3e11e887127fd6daa98f[ALL|FORKID] 0336d05aac73f4288e2b20803a5a5bd8dcc00c0e8350db9f65eebe038ea6bb8e59',
        hex: '483045022100f158d1bf77d68dbad54f90313cef1abaeb7dd793d8410bcc7298d8c5ffcf2dd702206bcd3a057808f683cb8464a29d5c9ed744fd4c8b2bbc3e11e887127fd6daa98f41210336d05aac73f4288e2b20803a5a5bd8dcc00c0e8350db9f65eebe038ea6bb8e59'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qq0cm6k2d7lwdxthwv7rcfxfne677ezvavpsssw0wv',
      value: 0.00007154,
      tokenQty: 0,
      tokenQtyStr: '0',
      tokenId: null
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 1 47454e45534953 5452414359 54524143595350414359 0 0 0 0 00000000003d0900',
        hex: '6a04534c500001010747454e455349530554524143590a545241435953504143594c004c0001004c000800000000003d0900',
        type: 'nulldata'
      },
      tokenQtyStr: '0',
      tokenQty: 0,
      isMintBaton: true
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 79dc3fb474fdf9c923bcaaf45dc26e7dd21fad4f OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a91479dc3fb474fdf9c923bcaaf45dc26e7dd21fad4f88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qpuac0a5wn7lnjfrhj40ghwzde7ay8adfu57n79kzn'
        ]
      },
      tokenQtyStr: '4000000',
      tokenQty: 4000000
    },
    {
      value: 0.00006323,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 f8063e420349a13754d080aeb80d86e002c2eba0 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914f8063e420349a13754d080aeb80d86e002c2eba088ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qruqv0jzqdy6zd656zq2awqdsmsq9sht5qxp6zrnd8'
        ]
      },
      tokenQtyStr: '0',
      tokenQty: 0
    }
  ],
  hex: '0100000001e2171032871b9104836ddd0e264acf3d63ffe2a9073731aa5bdd424d36cfb225030000006b483045022100f158d1bf77d68dbad54f90313cef1abaeb7dd793d8410bcc7298d8c5ffcf2dd702206bcd3a057808f683cb8464a29d5c9ed744fd4c8b2bbc3e11e887127fd6daa98f41210336d05aac73f4288e2b20803a5a5bd8dcc00c0e8350db9f65eebe038ea6bb8e59feffffff030000000000000000326a04534c500001010747454e455349530554524143590a545241435953504143594c004c0001004c000800000000003d090022020000000000001976a91479dc3fb474fdf9c923bcaaf45dc26e7dd21fad4f88acb3180000000000001976a914f8063e420349a13754d080aeb80d86e002c2eba088ac7fc00700',
  blockhash: '0000000000000000010ae5d428cbe866bbed91f528f91732fbf5ce8649ef2ea4',
  confirmations: 168940,
  time: 1535486440,
  blocktime: 1535486440,
  blockheight: 545431,
  isSlpTx: true,
  tokenTxType: 'GENESIS',
  tokenId: 'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501',
  tokenType: 1,
  tokenTicker: 'TRACY',
  tokenName: 'TRACYSPACY',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: ''
}

const cachedTxParent01 = {
  txid: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
  hash: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
  version: 1,
  size: 306,
  locktime: 543403,
  vin: [
    {
      txid: '4f035d656ed5b6e94a884c88c09a8d2dee9c7e97901cce3adec966115e2a1ba5',
      vout: 2,
      scriptSig: [Object],
      sequence: 4294967294,
      address: 'bitcoincash:qpwz6zycq3j5rhq40av6w7q3cvc04h0xhuv6xfsn6n',
      value: 0.0017359,
      tokenQty: 0,
      tokenQtyStr: '0',
      tokenId: null
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: [Object],
      opReturnData: [Object],
      tokenQtyStr: '0',
      tokenQty: 0
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: [Object],
      tokenQtyStr: '10000000',
      tokenQty: 10000000
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: [Object],
      tokenQtyStr: '0',
      tokenQty: 0,
      isMintBaton: true
    },
    {
      value: 0.00172192,
      n: 3,
      scriptPubKey: [Object],
      tokenQtyStr: '0',
      tokenQty: 0
    }
  ],
  hex: '0100000001a51b2a5e1166c9de3ace1c90977e9cee2d8d9ac0884c884ae9b6d56e655d034f020000006b483045022100baeb639ca78e399a14b942d82b2e516dca90d20d2f87f0ec12f1c068880afd930220587369dc0dd2282a25ae24db08b7e52c1e26e4ddda6e8b9ec9d8350562283b214121039e4b148421503560104fea3ac85afc88e418566edfd7dd6089179053449e0144feffffff040000000000000000256a04534c500001010747454e455349534c004c004c004c000100010208000000000098968022020000000000001976a914552cc1afd58e4c4aae6583f2ff0eee76b1bea9a188ac22020000000000001976a914552cc1afd58e4c4aae6583f2ff0eee76b1bea9a188aca0a00200000000001976a9144328e7988e8d4e696e1d30618f3d50f1da45904f88acab4a0800',
  blockhash: '000000000000000001d94aa156f4cdcec70b06d2aa8fb0d63ff218f7ac3d955c',
  confirmations: 270175,
  time: 1534269216,
  blocktime: 1534269216,
  blockheight: 543404,
  isSlpTx: true,
  tokenTxType: 'GENESIS',
  tokenId: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
  tokenType: 1,
  tokenTicker: '',
  tokenName: '',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: '',
  isValidSlp: true
}

const cachedTx01 = {
  txid: '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e',
  hash: '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e',
  version: 1,
  size: 480,
  locktime: 543408,
  vin: [
    {
      txid: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
      vout: 1,
      scriptSig: [Object],
      sequence: 4294967294,
      address: 'bitcoincash:qp2jesd06k8ycj4wvkpl9lcwaemtr04f5yphjsa07v',
      value: 0.00000546,
      tokenQtyStr: '10000000',
      tokenQty: 10000000,
      tokenId: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'
    },
    {
      txid: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
      vout: 3,
      scriptSig: [Object],
      sequence: 4294967294,
      address: 'bitcoincash:qppj3euc36x5u6twr5cxrrea2rca53vsfu3dxwr86j',
      value: 0.00172192,
      tokenQtyStr: '0',
      tokenQty: 0,
      tokenId: null
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: [Object],
      tokenQty: null,
      tokenQtyStr: null
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: [Object],
      tokenQtyStr: '5000000',
      tokenQty: 5000000
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: [Object],
      tokenQtyStr: '5000000',
      tokenQty: 5000000
    },
    {
      value: 0.00171165,
      n: 3,
      scriptPubKey: [Object],
      tokenQty: null,
      tokenQtyStr: null
    }
  ],
  hex: '0100000002359dab0d9c8ddc788b14c0b51493d195c9fbd9f2203d091663350bae351e3a32010000006a4730440220268dacee1117975d904dd0d45ef8de42b86030d825a9522bae196a38bbf6b271022001ae1ce2536ab300040e597bcfaa8ef9fb2beaf702d0842f3161aae8e9867f554121028ff9e32b0dbc82c1d5e0fc945b2537b00420513b10684726f312f1b717c0ae11feffffff359dab0d9c8ddc788b14c0b51493d195c9fbd9f2203d091663350bae351e3a32030000006b483045022100fa241bb2de46f68688451bfcae3f165b724e3ccf13b219e7bf2d8d2df7712ad60220353017d6e581a06efce478adfcd2047cea2f92531e283845f3d0a345ef101519412102cc48ad10516f97e914b8836ff25448d07ad96ebb4704c6a828339880280831bcfeffffff040000000000000000406a04534c500001010453454e4420323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d350800000000004c4b400800000000004c4b4022020000000000001976a9140a74cf9c0fb3f6dd62c3f5eecd1ed6e1051428e088ac22020000000000001976a914d4548261e1be0de7e50b7511597799ec4af2b17388ac9d9c0200000000001976a914d4548261e1be0de7e50b7511597799ec4af2b17388acb04a0800',
  blockhash: '000000000000000000292a9c6150fce48e2edd8df346948494fe6249e6e7f63b',
  confirmations: 270171,
  time: 1534271330,
  blocktime: 1534271330,
  blockheight: 543409,
  isSlpTx: true,
  tokenTxType: 'SEND',
  tokenId: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
  tokenType: 1,
  tokenTicker: '',
  tokenName: '',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: ''
}

const invalidNftTx01 = {
  "txid": "6d68a7ffbb63ef851c43025f801a1d365cddda50b00741bca022c743d74cd61a",
  "hash": "6d68a7ffbb63ef851c43025f801a1d365cddda50b00741bca022c743d74cd61a",
  "version": 2,
  "size": 437,
  "locktime": 0,
  "vin": [
    {
      "txid": "9b6db26b64aedcedc0bd9a3037b29b3598573ec5cea99eec03faa838616cd683",
      "vout": 2,
      "scriptSig": {
        "asm": "30440220366735e96aac784656d3a85716ce4a85676227510b09203a79e91b14eceb07db022065910986d3967bf993ad3189f36675cdfe1f7b9fae912ca3a14eadff76e17802[ALL|FORKID] 03d32976c9626cc5b757680885ac37cb5999aec7174eb067a3cbc1113354561a0b",
        "hex": "4730440220366735e96aac784656d3a85716ce4a85676227510b09203a79e91b14eceb07db022065910986d3967bf993ad3189f36675cdfe1f7b9fae912ca3a14eadff76e17802412103d32976c9626cc5b757680885ac37cb5999aec7174eb067a3cbc1113354561a0b"
      },
      "sequence": 4294967295,
      "address": "bitcoincash:qznfrq9rh9qlc4dcqaepmj29wwdfsg0uece4uewyxz",
      "value": 0.00013478,
      "tokenQtyStr": "0",
      "tokenQty": 0,
      "tokenId": null
    },
    {
      "txid": "9b6db26b64aedcedc0bd9a3037b29b3598573ec5cea99eec03faa838616cd683",
      "vout": 1,
      "scriptSig": {
        "asm": "3045022100e934fee33d17ee351ed14c7a25eeb7299271687ecd8e950dc4c68440e46d25e7022071998048274e82f5e4214a7140578f3876568e586cd3324092b7d581eb2374c8[ALL|FORKID] 03d32976c9626cc5b757680885ac37cb5999aec7174eb067a3cbc1113354561a0b",
        "hex": "483045022100e934fee33d17ee351ed14c7a25eeb7299271687ecd8e950dc4c68440e46d25e7022071998048274e82f5e4214a7140578f3876568e586cd3324092b7d581eb2374c8412103d32976c9626cc5b757680885ac37cb5999aec7174eb067a3cbc1113354561a0b"
      },
      "sequence": 4294967295,
      "address": "bitcoincash:qznfrq9rh9qlc4dcqaepmj29wwdfsg0uece4uewyxz",
      "value": 0.00000546,
      "tokenQtyStr": "1",
      "tokenQty": 1,
      "tokenId": "9b6db26b64aedcedc0bd9a3037b29b3598573ec5cea99eec03faa838616cd683"
    }
  ],
  "vout": [
    {
      "value": 0,
      "n": 0,
      "scriptPubKey": {
        "asm": "OP_RETURN 5262419 65 1145980243 9b6db26b64aedcedc0bd9a3037b29b3598573ec5cea99eec03faa838616cd683 72057594037927936",
        "hex": "6a04534c500001410453454e44209b6db26b64aedcedc0bd9a3037b29b3598573ec5cea99eec03faa838616cd683080000000000000001",
        "type": "nulldata"
      },
      "tokenQty": null,
      "tokenQtyStr": null
    },
    {
      "value": 0.00000546,
      "n": 1,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 a69180a3b941fc55b807721dc945739a9821fcce OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a914a69180a3b941fc55b807721dc945739a9821fcce88ac",
        "reqSigs": 1,
        "type": "pubkeyhash",
        "addresses": [
          "bitcoincash:qznfrq9rh9qlc4dcqaepmj29wwdfsg0uece4uewyxz"
        ]
      },
      "tokenQtyStr": "1",
      "tokenQty": 1
    },
    {
      "value": 0.00012136,
      "n": 2,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 a69180a3b941fc55b807721dc945739a9821fcce OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a914a69180a3b941fc55b807721dc945739a9821fcce88ac",
        "reqSigs": 1,
        "type": "pubkeyhash",
        "addresses": [
          "bitcoincash:qznfrq9rh9qlc4dcqaepmj29wwdfsg0uece4uewyxz"
        ]
      },
      "tokenQty": null,
      "tokenQtyStr": null
    }
  ],
  "hex": "020000000283d66c6138a8fa03ec9ea9cec53e5798359bb237309abdc0eddcae646bb26d9b020000006a4730440220366735e96aac784656d3a85716ce4a85676227510b09203a79e91b14eceb07db022065910986d3967bf993ad3189f36675cdfe1f7b9fae912ca3a14eadff76e17802412103d32976c9626cc5b757680885ac37cb5999aec7174eb067a3cbc1113354561a0bffffffff83d66c6138a8fa03ec9ea9cec53e5798359bb237309abdc0eddcae646bb26d9b010000006b483045022100e934fee33d17ee351ed14c7a25eeb7299271687ecd8e950dc4c68440e46d25e7022071998048274e82f5e4214a7140578f3876568e586cd3324092b7d581eb2374c8412103d32976c9626cc5b757680885ac37cb5999aec7174eb067a3cbc1113354561a0bffffffff030000000000000000376a04534c500001410453454e44209b6db26b64aedcedc0bd9a3037b29b3598573ec5cea99eec03faa838616cd68308000000000000000122020000000000001976a914a69180a3b941fc55b807721dc945739a9821fcce88ac682f0000000000001976a914a69180a3b941fc55b807721dc945739a9821fcce88ac00000000",
  "blockhash": "000000000000000001f06e259c14d1845b2c28a8629ff1d706a83b60039b8ec0",
  "confirmations": 175727,
  "time": 1591404534,
  "blocktime": 1591404534,
  "blockheight": 638339,
  "isSlpTx": true,
  "tokenTxType": "SEND",
  "tokenId": "9b6db26b64aedcedc0bd9a3037b29b3598573ec5cea99eec03faa838616cd683",
  "tokenType": 65,
  "tokenTicker": "NFTC",
  "tokenName": "NFT Child",
  "tokenDecimals": 0,
  "tokenUri": "https://FullStack.cash",
  "tokenDocHash": ""
}

const invlidNftParentTx01 = {
  txid: '9b6db26b64aedcedc0bd9a3037b29b3598573ec5cea99eec03faa838616cd683',
  hash: '9b6db26b64aedcedc0bd9a3037b29b3598573ec5cea99eec03faa838616cd683',
  version: 2,
  size: 451,
  locktime: 0,
  vin: [
    {
      txid: '3544ab7dc55c49abc2fb77aa033d39645b5e438d7ce7238eb058be98026c9a83',
      vout: 3,
      scriptSig: [Object],
      sequence: 4294967295,
      address: 'bitcoincash:qznfrq9rh9qlc4dcqaepmj29wwdfsg0uece4uewyxz',
      value: 0.00014028,
      tokenQty: null,
      tokenQtyStr: 'NaN',
      tokenId: 'eee4b82e4bb7113eca433829144363fc45f110693c286494fbf5b5c8043cc981'
    },
    {
      txid: '3544ab7dc55c49abc2fb77aa033d39645b5e438d7ce7238eb058be98026c9a83',
      vout: 1,
      scriptSig: [Object],
      sequence: 4294967295,
      address: 'bitcoincash:qznfrq9rh9qlc4dcqaepmj29wwdfsg0uece4uewyxz',
      value: 0.00000546,
      tokenQty: 1,
      tokenQtyStr: '1',
      tokenId: 'eee4b82e4bb7113eca433829144363fc45f110693c286494fbf5b5c8043cc981'
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: [Object],
      opReturnData: [Object],
      tokenQtyStr: '0',
      tokenQty: 0,
      isMintBaton: true
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: [Object],
      tokenQtyStr: '1',
      tokenQty: 1
    },
    {
      value: 0.00013478,
      n: 2,
      scriptPubKey: [Object],
      tokenQtyStr: '0',
      tokenQty: 0
    }
  ],
  hex: '0200000002839a6c0298be58b08e23e77c8d435e5b64393d03aa77fbc2ab495cc57dab4435030000006b483045022100b110f7100342682471e2fd1217df0d0c824988a6fb26da9c95e7b2b612d6d4590220789f0a64f87b6db06e48db5498c844c2119ac342bf10d1011d7af5c31b1b8e75412103d32976c9626cc5b757680885ac37cb5999aec7174eb067a3cbc1113354561a0bffffffff839a6c0298be58b08e23e77c8d435e5b64393d03aa77fbc2ab495cc57dab4435010000006a47304402202495d20579fa7ab4c576ad560afdcef7183341129ad5fb595605701db2b5e392022030c730954ca2bf2bf3325c35bd2b428ea1a31752b0abf66a0badc4b4cacc6164412103d32976c9626cc5b757680885ac37cb5999aec7174eb067a3cbc1113354561a0bffffffff030000000000000000456a04534c500001410747454e45534953044e465443094e4654204368696c641668747470733a2f2f46756c6c537461636b2e636173684c0001004c0008000000000000000122020000000000001976a914a69180a3b941fc55b807721dc945739a9821fcce88aca6340000000000001976a914a69180a3b941fc55b807721dc945739a9821fcce88ac00000000',
  blockhash: '000000000000000002983ca41a324570a4a2e10df66506dd05282f1b4dbd92bf',
  confirmations: 175729,
  time: 1591404007,
  blocktime: 1591404007,
  blockheight: 638337,
  isSlpTx: true,
  tokenTxType: 'GENESIS',
  tokenId: '9b6db26b64aedcedc0bd9a3037b29b3598573ec5cea99eec03faa838616cd683',
  tokenType: 65,
  tokenTicker: 'NFTC',
  tokenName: 'NFT Child',
  tokenDecimals: 0,
  tokenUri: 'https://FullStack.cash',
  tokenDocHash: '',
  isValidSlp: false
}


export default {
  slpSendTxData01,
  slpGenesisTxData01,
  threeTxTestData01,
  threeTxTestData02,
  threeTxTestData03,
  cachedTxParent01,
  cachedTx01,
  invalidNftTx01,
  invlidNftParentTx01
}

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/mocks/zmq-mocks.js`:

```js
/*
  Mock data for zmq-unit.js file
*/

const topic01 = '7261777478'
const msg01 =
  '02000000036e7b26365e271d2c0c2baf4ef5802595caa1056ba50c8597ef6b403cf6599014010000006b483045022100b4ef16d52f5bc5b458c453b7f9f9a2b22ca1c46573b440d30c9621c47ec0c307022042c9fe14a5b64ecc940322b11b8fa26535d60d2c0e1d2060d502718d5049e3b84121033a24d13b45eaf53bebc7da5b7ee79a39615790b4fb16dab048fdcc5abd3764efffffffff6e7b26365e271d2c0c2baf4ef5802595caa1056ba50c8597ef6b403cf6599014020000006a47304402201203b3e7c8850a3be4492cfd01cd125032e65c3286f209620a63479af3038d5b022057ba1bfd3ca94b82801df236c5e548b8a60758283a73da36ae7d6b71b4ba51694121033a24d13b45eaf53bebc7da5b7ee79a39615790b4fb16dab048fdcc5abd3764efffffffff6e7b26365e271d2c0c2baf4ef5802595caa1056ba50c8597ef6b403cf6599014040000006b483045022100aefa0aa19a09291305dd44f48a501cda8908f40d95f1240f4ace5229226a694a02206494199f8297ffe2ead3f7e62f75e0d88e9d7a9aa7c3d3fd44a756e504be88cd4121033a24d13b45eaf53bebc7da5b7ee79a39615790b4fb16dab048fdcc5abd3764efffffffff040000000000000000376a04534c500001010453454e4420a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b208000000000528a76d22020000000000001976a9143e31055173cf58d56edb075499daf29d7b488f0988acd0070000000000001976a914203b64bfbaa9e58333295b621159ddebc591ecb188ac1c350000000000001976a9143e31055173cf58d56edb075499daf29d7b488f0988ac00000000'

const blockTopic = '726177626c6f636b'
const blockMsg = '00c00020f46cf3f1ebfc1cf5a1922692f6fbecd20597ba66fc4a33000000000000000000605983d7bf851aa75f5bf50486e5493d58c6896e3774f3c3b7c58ad5597d966570861565a33b021864eee5b41701000000010000000000000000000000000000000000000000000000000000000000000000ffffffff5003c3660c0d2f5669614254432f4243484e2f2cfabe6d6d2afe5b2b52fffdc47a184dcf46332003f0b127eb888dd30c7e25aa08ab501b12100000000000000010b6b26500237beaf57d6fe6cf97f70300ffffffff030000000000000000276a257342434800fc609736388585e77dc106885dd401b1dab7be87e61a3597239db9d0483e9a4608594125000000001976a914f1c075a01882ae0972f95d3a4177c86c852b7d9188ac00000000000000002b6a2952534b424c4f434b3a68fe863e7e65c31c5e8a04f8f98ec477ddba95ffba583df0166c3e2a0056a568000000000100000001d5408bc11bad2f28fa600d2a91936ce24bfdd381c9d5714fc5dac1395f2eddb803000000644170a08e7fd39ebba6575a265e7d7e07c0ffc16ec733b80c39d040680f7a298013bf6e61ceab1ddbbd979a65e997d97c17eaca46fa3005717604846386167f43f8412102bd71022b471ff54d33d0730f9ce72758832a6c2e0cab035bdc5ace4df48f2fa6ffffffff039b100000000000001976a914b65e9277da56cc268663e7d35f67f1e5caaaa67688ac9b100000000000001976a914dee676653295f16e52e3c7bf8c1b0c4fb1a80ed388ac81a5eb00000000001976a9145599439512e36aabca88aefd744a8506096c6cb888ac0000000002000000019a70bfd8e7dd2a2bcddb26bf5b845b4764829844c2c2040661d917e0b34da17a010000006b4830450221008ffd44ee1cee3272e46da4ebd48037970b3d7e833a29465ac14a7867327624dc02202f2e672594e9ef9911cba8e37d1f35e9927c8325b940f935a2a7066baa29b4184121021987cc79224dcc9d08b98c247c0c19f17efe8c4d59714c86fea4b2acac216e08ffffffff0300e1f505000000001976a91490679f6cf1918dcd7bf1e7f06319108d89b528f588ac80abac2f000000001976a914520a2ef11a890c259920b5127d3d866112ece63d88ac0000000000000000406a3e3d3a4243482f4243483a74686f723138376c32386c7a686172326463636d726a6439307474677938776c74676835717036736b76323a39343839343535350000000002000000014498a2e83b9c47021e6c9ccfc808cea5a186da0aeb7f94c17bc8d41353a2e224060000006a473044022068e3f4b1d6ce92cf0188d1db4450cca5e90d21e253b736a176eab157528ecbe702205710fa76f9beebe372a3b1bb3e854bdae510b8f14e61d6684aa55d47d8b97485412103c3930b6afbd5d88f4d5ec55c97e119db1f464d20d3d697e8625b41198ce1c7a4ffffffff01b2af0c00000000001976a914fb2b3c30aed050078eeefd966e972e67eddbb58388ac000000000100000001bfda4bad75365b874058d91b5edd3aa109bde4c5f0d447a24aebe671b276b5ab000000006b483045022100fcb361e393caa38fadb986a77000cc69c47f6df818ca656726f2156d3868328e022036fb53c04568c74264a727cfbb67473d39dee58fb7a25aad10d68e578445d513412102f5c9296c0745a956f1bc05dde91e53fe5e6ea7f824bda40cffc064cb9f9e5a82ffffffff0369d2ff0d020000001976a91490f228539519931540f0e1de25dbc0093498c7a588ac5e2e5203000000001976a914b2c66d07f515cc20d862b0282b8cb55d9a68d12c88aca23b6d02000000001976a914580de5d6bb9bce9076a6ff89cda7e6fc58643e9288ac000000000100000001bb8064ff209bb43b46c5e8e8a22a2a07fe754f8b942f7f22ce5205007e77e72b000000006b483045022100b7e0709b42242cb0602a1f545c09c15597d4ebe8c72cb4b82821504a5b81312c0220571516cbeee424ba721acc0f9aa7acc14c80479bd1b9703c31159b6e2ac33f8d412103a34f3a6977387aee0118636f27d2bc5bfda7b997020072e3fb97846ef0f4bac7ffffffff024a644100000000001976a91473181a3ff8efe8a83f7f8637b6fff6cc4937dfc588ac143ac300000000001976a914ff44c376635f2d59a2cae4bf808e8517a983f7b788ac00000000010000000173150ea67d8a441111b8c3b4cb5cb5862430089884459a09939204f97d271031010000006b483045022100fff36c2cb938ba6e206eef94335efb1bd397d45ead743608643d3e85a8ce9ed40220554bc8e17271249c22364e57094eddbd445139f169ef005b7184c10951db3a84412102b394d4aef48a3bf1bb642419fcf1c2858a14efcd0696a85108277cec1715e2cfffffffff029dae2407000000001976a914b094a1945cef6b17bee261ed8e9a77b864b1510388ac5a331601000000001976a91480d0928fe9cfedbf9477945f0ffed917ff11df5e88ac000000000100000004e0d3eabe711a0ad412e5b992d7f1a416b688e12154f31715543efce3cf674e33010000006a47304402207ee5bde6d12d4dd51dbcc8d1103c7b181a5dd4acbbc4f291c296718b7b5d5cf502201e83d73d6c8722855e1ce459b7bbecce8ae0d2cd17fe4015e1bc9f2bd68c2118412102a32cbbfd83ba0626d8b90b0ce09a5688cda3dbe56ee5aedf3a1711dfec1c2163ffffffff63b57bd5dcf167cb3b0330a16d993fdd4da21d8ab3b755ef2b47b693b23972a9000000006b483045022100bd35c7574d1922549bbe5e85a4289b7aaef7a1eb347d3e50c68cdc15c76b253802202526bf9832cd8468f56a81465555a04f5b71777c0fab12b2877f252fca6c7cfc4121032e441b3983d9846431649c8b69bff5ab9d85c109e8be647a98b8c0bffa696fa8ffffffffea39491cda226ae8bd0ddcc25e318420df325e9a07f5d6243b3603a33b44be31000000006a4730440220590e34fa382345dc0b5c9ca76791d8cd407862421a1abdd37fb50dd55e8b5b65022030c7df5eb502fbbe949c6d6b117d6bbcd0a55003a59d12d36baa7a4ddf989257412103f665a54aba74b16b73987f3b504c072c36cff7b9d88891090f4346de782d5bc9ffffffff37f2c3f7af7ec2870c5860679b9fae3d0e75e039eaeff96311aa2ebe87bde95f020000006a47304402206ae0b211429728d5d0442c64b42568cb76442eb9d5fde17f88be2698fcc6ac8d0220046ba0132f1d9bb6133e246bc4f036f464ea821c2edfddb137e86ef7bbaec52441210266a76f46a816297d827e234060dc0a0435adf49c54c65b71e541f3c50dc8588cffffffff0370218c19000000001976a91459dd0e06aed2ebbb69b506ea40ee012bcc39343788ac51bf0201000000001976a9141318a5ed02ebae671ca0afdf1845f70d8867ced488ac22020000000000001976a9147c54bde117cebe15c56c79c44c3a0fa570f3b5fa88ac000000000200000002dcf8c2f51e6261a4a27673b93596ce5956157c8154046a3922213ed760f920fb010000006a47304402205fe9687fe327c2bd395d5566222edf436f3b683339ecae5b0943dd148264361a0220113b3085341b914141a5d0a3bca215ee141e471575b87ab1b6a54b7d7cfee8e94121029d85d284eee29058982188f82b40c8a85482a621a634a556d2605fedf146e212ffffffffa7e3a30e89ee769874aad4498316f22ea67a7525f6b66c8a7371a52a271024a0020000006a47304402202939e65a334c47725561ba4f3621624494bc87804532f92a40150ba95c7233f8022007231d7802ddeccc43f9b111d370e2810a465c91f1abf05f29e7f1673ea3830f4121032eefe0e26155f0ea65d083174606e5a90e3de126e01ce08fb90bce55ca934fffffffffff031a6917010000000017a914b050efba89eb9b83c8e73f3ecd45661d7a5cbfbb87fcefd105000000001976a914c97a42ecb11202e09b3e4f82645adbd4eb90829d88ac50da1100000000001976a91467245a1a445c02e2a835e420c0ff89e1e1f8601888ac0000000002000000021204516ab96bd94b1be5f6512f07644be8fb94ec61c5542621bf5c029a3b3dd8010000006a473044022069d8251020d5bcb44445d4fbb56942ad8d07913c5e1701fec50a9cfb21243c950220789d3495bff84e2dbb337a38da4905cf707f374ff50c26af4e00acf9882db1b4412103c8a0c3ff1f8c09e90616bce91d71e7ed87572b6bd71835fa1623c290fa31cc2efeffffffa60f45f50386e135ccd1026da093b2d5562094f6912c097661bbf56b1d5094f4000000006a47304402205ece7e759d6b3994314c4a3430f4bc5833f0ff95321e75149f161f1fae487f64022047d281aa8275801a2c4a5e62384aee729179bea2ded82dc59db9c9dd4e447f65412103afd0121c034ce1e912656d71c29784efd0befec7119765538ab3146e6599a0b9feffffff0188044100000000001976a91467b0620cc16571d1ad9a4d705baeff13fe7e905e88ac00000000020000000183ab9cf2ca27e024623455892676d166b6314dbe083be2f90c04b7149862f6b80200000064410463e37964b9f803fd0638998ede62ff7ef206af478dc9b56a9afc9ff8ce18c8b2a29e4f3d376abe9f361386ce26cc6bf9664f55136bc3276e6b0214ce6f6340412102e255a6cf59d11f45d931ae07b0360e42924f53ec34a4552afd86e17ec877db520000000002c4100000000000001976a9145c974b351f6b21c01d4bc333fb889b7c09c4e04888acdb743e0e000000001976a914557b18815cdd7b969e6fffefb39f8b943f2dd22c88ac000000000100000001d13cceee6373301bf78fe0c049e8a3a6085b26f4e9b2c60b5e05e5541201e6e8010000006a47304402202b74125d098e204c46639f4eb4643bf3c1ef438b59c5ec9cd1f3c8766ba81086022078809c8c6c85d89558f5dc25c5b3ceb52e7ca1e014c8405fe8bad211899c75a041210250f12d91944ec67c5c91093e6e8660d072775814f7cdf7703c5fca351d66456effffffff02c06ff101000000001976a9144e71d3353d305ad6c03d905f926a7749f5b732f888ac81445e00000000001976a9145ea3cfff9c69374d94e95b0838aea78549fb541a88ac000000000200000001aaccd81b124298591b8af7f422f65287da8531010ed0e3110cddde4ff229dcfb010000006a473044022068ea9d58e04dd2ba67562e77b981e2c2e8f4bb948ccf8ae9ae19d1e1301a3348022041a534958bd463b8ad16bd11106a75ae941f6eebb2070d8d198e8389c541f11c4121031432119349e072f96485753d1ff278ff65d7506818b79e16aa2f931b4d85b912ffffffff01c256f000000000001976a9141e03c40e04756d8805ccf49b1c4d66f6b6c26c3b88ac000000000100000001bf871988dce4824c0af4be9b676be74464e086b8acab5ae0821419c66f185893000000006a47304402207696a81efb55b868bf9cd46602fef07704dad42519315c097bb5e7c324f67b2c022069c6e886becddbf0a84706ee82989f2d312d4836d01d620dcc45c8420c7da42941210249c27048ff2dabedf92c1fc298ac0e5665e5a63f3b8469b544003349b25108dcffffffff02d2544301000000001976a914111d7b46c7a6bbea734f8732ac6ed741a7396ea988acc4d9a708000000001976a9145f8d0620bb217b72efe0d03b8414cf5713d6567d88ac000000000100000002f269a65393cd7954f669b942362672a34394482042a4723b64064acfc8b9263c010000006b48304502210089b415d6cf6692f425cb78b52b8a6f155331a742227a7ceb77bdd9635a6323b102202a4aa0e36ca1472bd673f5466efddce317c8dda712cae0095a2e89828eedd678412102ac122742f909029bfdbd83b177da8e2ee7bdc47c4ccc9b42087454d73bc51fc6ffffffffc38e878695bf7b5b096bfdbdfdd98bc55696a09d99d79416777abfc93546a876000000006b483045022100db1817b26dea7fbf04d455e328aa8a89adb008b06ca0f2065e89422e433eea2c02203ed81f998b9b1683e0bd346cefc81c3682341a2301d34e4a0f72ca7831c30dcd412103419b2e1c2fc1d497c7f3219aece297bba9450798ec34cd3c720cbe5e47ed6e8effffffff02ce522611000000001976a9144fd38e8a9b14da6d9ba29012239518a751f9e11688acc4cd4a00000000001976a914c66cf29c22a1ee2350b97ca20ba163e0e538797788ac000000000100000001e721f0401704991f85f66498e48bbe5dbc069d95872661c1cc8c438082801c0a000000006a473044022005152cf1e44f17ef68e3224e4d11bc08803b2002726c52bbfb60e7cd458ebedb02205dbc1a43cec1b568d179bad7a33a2143873148e518c001bc683e9bda97293f23412102e29f1703b20f1d93cb835e3590a7c2c17baca56c0eb6b17f11522d7107f33d47ffffffff025d578000000000001976a91410ec94e717cb30fc660ff02c1f360faebfad905888ac37ce2899000000001976a9145e7079daa9bc57329bbf494f376e5d50e71b7dd588ac00000000010000000a5df056135c945456a1ba30c3e808c86e20c13ec5c59a45bf784ff168bcdac1a0000000006b483045022100e97b1d29d1f9b96e3555cf442184f044ae0619e8759cfe60b327559769beb2b502207cb2bf60981075196be9c11bd330db28272f44d0624147b15198d21c40d84e9b412102e0505c425360ace56c3bf667f0ff6d59a72084d2e90a1194cea460f7bb6fb7ddffffffff6baa12fc3836d9ce5f7f842cfa2b42f03379227d5197b8b9f2fcdb0fd57fc0bf000000006b483045022100f75c1332d2d669ddbca5f950a02f68dc33c037371e7aa11477761e28f1d9c86e02201e5431766aa6fff78d0bb9399233404000b30f76b795461d2297c2942eed1bd4412102e0505c425360ace56c3bf667f0ff6d59a72084d2e90a1194cea460f7bb6fb7ddffffffff41ced13aa3a539560e29f12fc0f2ad088eacc026a00e54bd5cd0f8c847c016f4000000006b48304502210099520954d7411cc3fed35daefaa1a0bda709cdb2ed3b022cc4f777e582911144022007892cb84fb10e441e4a7929434775b467d33eb7a9f641227b5fcf913d01df33412102e0505c425360ace56c3bf667f0ff6d59a72084d2e90a1194cea460f7bb6fb7ddffffffff29872bf88007ddb20cbe164234e5335cb20142448bb14ccc5aa0060d9e4f3c72000000006b483045022100d7a5d8957dbe308b2908c956a48ce948662d58eec7a8712353865fe6da472d9e0220370bd8563c63b5bd9c552aaebb6ae1c5973f4c63206a49bfe7324476931f7f27412102e0505c425360ace56c3bf667f0ff6d59a72084d2e90a1194cea460f7bb6fb7ddffffffff44691b0304f1cea0ed0de2bca02ca11b92407553333faa3e4b31f9f9fc5c76f6000000006b483045022100ea392d2828be449dec44d1289ae4279e8cdf95fd6bca32a794e7059599409b60022064cef9ca9b3a6dae73c9359e9e4776e6c0fc8fa30aca1125a8b36f67bf1ead6f412102e0505c425360ace56c3bf667f0ff6d59a72084d2e90a1194cea460f7bb6fb7ddffffffff7f4a144048a3d462d039137c238ad90818a6a60c85c612e7cab1e37e04227b03000000006b483045022100806e1f5a103ecb8949bc3b49b71b17f24ab3bc0c086916e9627debf08cd9e96e022075e60f0293df856640e4013a33562740fbc60e08e5cc4d5a87fb8ce218bbc253412102e0505c425360ace56c3bf667f0ff6d59a72084d2e90a1194cea460f7bb6fb7ddffffffff37584de9c2e8aec78152f1a6f4179bf1fa64823a99696dae61559a1604710a12000000006a4730440220019b12dfc5a8f25f5a4e58dfaed648f599d619e375c1d80a59ca2940b455b4190220501f9e7ee3515ba8fb03104fc780d855e259ff0b2d47bdbaff7bc769df43a314412102e0505c425360ace56c3bf667f0ff6d59a72084d2e90a1194cea460f7bb6fb7ddfffffffff844f6e4d15710f5b032d04a8ab73f25d514e0de43b3a023c8ed639010f77119000000006a47304402207d6471ac376d7b84cc3ddc9eadb742d6bb060380d9dc5b7b223ea80a1e34f4fe02206a75cb36b1089e0ab81062ea40156c230b0a235edb4d1809b6f4ad5a854f407f412102e0505c425360ace56c3bf667f0ff6d59a72084d2e90a1194cea460f7bb6fb7ddffffffff2e095e727e3529fb7ed0f1569f0c19fab84321f786b3ba9d38a877ed9da8915a000000006b483045022100d0e15e920e215dda7141600e35bb580af6e5a7d80c9f2ff3edb0c8084de0ba6802203acb158ac360f9920e4c7e3ebe5eda3dade177e8bfd0e428463bdf70fbdc4877412102e0505c425360ace56c3bf667f0ff6d59a72084d2e90a1194cea460f7bb6fb7ddffffffff9a70bfd8e7dd2a2bcddb26bf5b845b4764829844c2c2040661d917e0b34da17a000000006a47304402206205fb979cc1038b0df1840b71ba1cb15a12433a171a95ae0062b3c27c5b09c40220245c6de28dc473c97c8788c8cf9249fb3ca278781eb12e515a434087b12fde37412102e0505c425360ace56c3bf667f0ff6d59a72084d2e90a1194cea460f7bb6fb7ddffffffff02c6ae405e160000001976a914f4c27599353f9c4041096cf7c20f6c1d0ae98d8488ac00000000000000000d6a0b636f6e736f6c6964617465000000000200000001d0fe3dfe7dacaa98279e326a981b8b6ad5261930a6f56cd43d0a5b9de42ab45f000000006a47304402204a0e7153d2121939ab94f272609d69f9ba786e53379c3f390e3cb41e13ed1805022000aeee75662809e37e4af75ff28a78756e350b778fd28d546015a2d9491bd1a7412102b5f173b38c22d2b7b87338334b6b25af63094d1fd8ca54991bf6f40fe9a3e11bffffffff02c0c62d00000000001976a914c1b93d40e80f180c4970f7fe4d13c7ce45fd504f88ac9d8bc200000000001976a914594b4a5e89bc2e4fcd11bb27e5f6213469d2ee4288ac0000000002000000017a4a4fc74d083cd88efc9e063842ba8f992c8852e96074811452024521d30aa0010000006a47304402207bd4c7e53b890a77827e0db5e198d44441fe070b5f47ab430f701516ad2b699702207688d026e41a846ea26038a826e282cf3673ea3514648ca3cd411d10955c6c2f4121035216dae935eb5a65bb7ff61cf9bbdb7dc231caa2d9915e59184cf4ac1b34e8ddfeffffff0273b40100000000001976a9141a67f6515a0c32f803133bba08545ff95925d49588ac0be81800000000001976a91420f69d54ca66daaefe4f3d91e013ebd927f27ff888acc2660c000200000001d915cb0fdb8b38a145c987e1ea8ce3c5211324b5d91732ea8fd23e040a76aa2e010000006a473044022079d92ff410bd82847bd9a6753df2994c065961c6b8f5dd859c1994bbed359f480220087e566252b21705959259b512fda2a533d2a14654f5373d04dc2e4d6d48e9f54121034a2390e3a6aa97b44384b9a588863e3c6e0c86019130ab92146f26d45afef9eaffffffff012d0d7703000000001976a9148c033d3bb0d0e01347cbc1310dcdfe5c88c5005488ac000000000100000002f10c5a4a2b06b4c0ee3acdd925b0b3a5acc652966f161840404d96ed7ed26d34000000006b483045022100851d1f1f87c169f4f14b71f678edc0a56c6f774f716af1bd80d4abbd9ae870a50220739e242502e39f85349d2a385afbdbcadbbbdfbe2a5105f708469f1a74e3a753412103b125d0284fba2918a9d8f0b79196e0592a6ce01243dd9a8c1bbedeb00b3fe42cffffffffc37b4d8d0919a51fc433cc918b8c53612fad5cf6ebaf224d66725fa9e111a1160000000069463043021f247b94ccea2116d99b38b79264c08ff58a362b8b30906524622e0f4fd9333b022018e160aa2eb40d0e9d0b747f1f87f3c4f2c2def0d387d81ada9aa0facf09d7df412103f75737aab63f8597601d9898e62237fdcfc42de351c2212d7e701ca22a5bbcffffffffff0294008707000000001976a9148a12a0f14a53be4131b79ea5be0392311f036f6888acaf4d0100000000001976a9146ae958233aa8037494d1ac2a98ccecbb50c03ce488ac000000000200000001bc30ef27ba484ca52a32bd0b9973c43521bb0fc2e772fd18ea706f735b027e2f000000006a4730440220487c2ef2becee2d91be69c8a1136529586728a0482b8e9a04e2101b5ffc067c902201df50e5a2333190883623ea86661c581ac3253e5df6966bff5bc63658a4b48d04121039e299d71ba45b1537fe53c435a9a7e52a0b2ecf0b3705fbba465725e72fbb81cffffffff02909a0c00000000001976a914e02f6fb2cb11a46f0196c0d466155cb26d63ef9288acbd100000000000001976a914a8862eefb27bda77b4619ceeb4bb2166086b864f88ac00000000020000000107f71cba94c661e216299974af1b8b9c5ac7e5827138f7c4c02547502b57cea2000000006a4730440220782a5cdf40bd2d4dccfdfcc816c0925babf2bb0eca71e306a51c3d2b18cfb395022058fac75b6250ebf7c86608d7895a2b244dec095f030a5ce849df4bb8c9df9af0412103d43a43f43b4168c839352948783f8300246b9957e121971ecb9ee797fc87fcb6ffffffff0248ea5400000000001976a9143146e618b63da8f40ffac0a7eccf5cd4b904f78c88ac801e2203000000001976a9149d494a69d8fcb0df2e9ca2402450234c4d108c6888ac00000000'


export default {
  topic01,
  msg01,
  blockTopic,
  blockMsg
}

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/mocks/ctx-mock.js`:

```js
// Ripped from https://github.com/koajs/koa/blob/master/test/helpers/context.js
// Solution courtesy of user @fl0w. See: https://github.com/koajs/koa/issues/999#issuecomment-309270599
// Take from this gist: https://gist.github.com/emmanuelnk/f1254eed8f947a81e8d715476d9cc92c

// if you want more comprehensive Koa Context object to test stuff like Cookies etc
// then use https://www.npmjs.com/package/@shopify/jest-koa-mocks (requires Jest)

// INSTRUCTIONS:
// Import in test file as below:
//
// const mockContext = require('./mocks/ctx-mock').context
// const ctx = mockContext()
// ...

import Stream from 'stream';

import Koa from 'koa';

const context = (req, res, app) => {
  const socket = new Stream.Duplex()

  req = Object.assign(
    { headers: {}, socket },
    Stream.Readable.prototype,
    req || {}
  )
  res = Object.assign(
    { _headers: {}, socket },
    Stream.Writable.prototype,
    res || {}
  )
  req.socket.remoteAddress = req.socket.remoteAddress || '127.0.0.1'
  app = app || new Koa()
  res.getHeader = k => res._headers[k.toLowerCase()]
  res.setHeader = (k, v) => (res._headers[k.toLowerCase()] = v)
  res.removeHeader = (k, v) => delete res._headers[k.toLowerCase()]

  const retApp = app.createContext(req, res)

  return retApp
}

const request = (req, res, app) => context(req, res, app).request

const response = (req, res, app) => context(req, res, app).response

export {
  context,
  request,
  response
};

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/mocks/filter-block-mock.js`:

```js
/*
  Mocked data used in filter-block.unit.js
*/

const twoTxDag01 = {
  txid: 'e5ff3083cd2dcf87a40a4a4a478349a394c1a1eeffe4857c2a173b183fdd42a2',
  hash: 'e5ff3083cd2dcf87a40a4a4a478349a394c1a1eeffe4857c2a173b183fdd42a2',
  version: 1,
  size: 480,
  locktime: 543412,
  vin: [
    {
      txid: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2',
      vout: 1,
      scriptSig: [Object],
      sequence: 4294967294,
      address: 'bitcoincash:qqwqd3u5xdxpkeqy8gx8hs9z6r9dmaunvyafv9vdv5',
      value: 0.00000546,
      tokenQtyStr: '21000000',
      tokenQty: 21000000,
      tokenId:
        '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
    },
    {
      txid: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2',
      vout: 3,
      scriptSig: [Object],
      sequence: 4294967294,
      address: 'bitcoincash:qzxqjseqseqrxmlsvlfumf7qgn24gjdq4uu9k3rfm2',
      value: 0.00167551,
      tokenQtyStr: '0',
      tokenQty: 0,
      tokenId: null
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: [Object],
      tokenQty: null,
      tokenQtyStr: null
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: [Object],
      tokenQtyStr: '1000000',
      tokenQty: 1000000
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: [Object],
      tokenQtyStr: '20000000',
      tokenQty: 20000000
    },
    {
      value: 0.00166524,
      n: 3,
      scriptPubKey: [Object],
      tokenQty: null,
      tokenQtyStr: null
    }
  ],
  hex: '0100000002e2dd8264c70e8da104b6113457c436096e84e4566c68dfc1e76dad8a54470117010000006a47304402204d135697eb7fb654cd3068838bcd50f8709fedeac9d07325d1497ed474db580a022039161eb454d7c9f31e37b2deff3b06b388835b8591cea9e3494b1cda9bc0f748412102e11b25ad09036672e09612cf14373bca526f976c1113d28e25de5fdedc50f054feffffffe2dd8264c70e8da104b6113457c436096e84e4566c68dfc1e76dad8a54470117030000006b483045022100c6a429638d8001d833fa1724a845e197771cc9b372d90d67336c8fd97070d5ae02204ee95888bbd8b6e08c2c05f3375825d728f8fe88ad74ade410f6b14d68cac82d4121023e2a5b3607199c2c83cae9f4c0eb8c14a062bc267d3c6f991c17b20065130509feffffff040000000000000000406a04534c500001010453454e4420170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde20800000000000f4240080000000001312d0022020000000000001976a9147a6f76875f9a5590824f4380bbd7e9ef9b119b8a88ac22020000000000001976a91453d8bc386bc4238db986e4c6309c35c4b146f38088ac7c8a0200000000001976a91453d8bc386bc4238db986e4c6309c35c4b146f38088acb44a0800',
  blockhash: '0000000000000000015bad75aa35ba272e8fad687c7eb150563ee4a4d0154404',
  confirmations: 170997,
  time: 1534273640,
  blocktime: 1534273640,
  blockheight: 543413,
  isSlpTx: true,
  tokenTxType: 'SEND',
  tokenId: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2',
  tokenType: 1,
  tokenTicker: '',
  tokenName: '',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: ''
}

const twoTxDag02 = {
  txid: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2',
  hash: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2',
  version: 1,
  size: 305,
  locktime: 543412,
  vin: [
    {
      txid: '82a9c47118dd221bf528e8b9ee9daef626ca52fb824b92cbe52a83e87afb0fac',
      vout: 3,
      scriptSig: [Object],
      sequence: 4294967294,
      address: 'bitcoincash:qpnc08pp75hff8h0sxqs8cptd7s58naqmq52jvjugf',
      value: 0.00168949,
      tokenQty: 0,
      tokenQtyStr: '0',
      tokenId: null
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: [Object],
      tokenQtyStr: '0',
      tokenQty: 0
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: [Object],
      tokenQtyStr: '21000000',
      tokenQty: 21000000
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: [Object],
      tokenQtyStr: '0',
      tokenQty: 0,
      isMintBaton: true
    },
    {
      value: 0.00167551,
      n: 3,
      scriptPubKey: [Object],
      tokenQtyStr: '0',
      tokenQty: 0
    }
  ],
  hex: '0100000001ac0ffb7ae8832ae5cb924b82fb52ca26f6ae9deeb9e828f51b22dd1871c4a982030000006a473044022069ce995e0496736dc540d2cf33dc516208a83ef3d6c6dfeedf4616b3f02b6c2d02205f083eb258b2d35ad677c71c96e5911403d24d88c4e4e310dc02cc9f48f970a841210379822f976d94a13bc18d82d81298ac6ee1b18b4c6628bbb5536fd663fb966955feffffff040000000000000000256a04534c500001010747454e455349534c004c004c004c0001000102080000000001406f4022020000000000001976a9141c06c794334c1b64043a0c7bc0a2d0caddf7936188ac22020000000000001976a9141c06c794334c1b64043a0c7bc0a2d0caddf7936188ac7f8e0200000000001976a9148c0943208640336ff067d3cda7c044d55449a0af88acb44a0800',
  blockhash: '0000000000000000015bad75aa35ba272e8fad687c7eb150563ee4a4d0154404',
  confirmations: 170997,
  time: 1534273640,
  blocktime: 1534273640,
  blockheight: 543413,
  isSlpTx: true,
  tokenTxType: 'GENESIS',
  tokenId: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2',
  tokenType: 1,
  tokenTicker: '',
  tokenName: '',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: ''
}

const twoTxDag03 = {
  txid: '82a9c47118dd221bf528e8b9ee9daef626ca52fb824b92cbe52a83e87afb0fac',
  hash: '82a9c47118dd221bf528e8b9ee9daef626ca52fb824b92cbe52a83e87afb0fac',
  version: 1,
  size: 305,
  locktime: 543412,
  vin: [
    {
      txid: '3a574837eaecf701ddf232ab4ad30c541be61061ee5a563d27809dde927d7ecf',
      vout: 2,
      scriptSig: {
        asm: '304402203a5798ab1429029e6dee14f9ec0adec5288f6436d7ab94a8c4269ff7aadc667902207a84a2812b0a80b964335af0e1455ba99e099e132c54247a0af7e12ae0034e62[ALL|FORKID] 0398f6aa8d4c6aa0841ba0e02eb5424008a75f4ac3f30745f2625db8857f2df4ea',
        hex: '47304402203a5798ab1429029e6dee14f9ec0adec5288f6436d7ab94a8c4269ff7aadc667902207a84a2812b0a80b964335af0e1455ba99e099e132c54247a0af7e12ae0034e6241210398f6aa8d4c6aa0841ba0e02eb5424008a75f4ac3f30745f2625db8857f2df4ea'
      },
      sequence: 4294967294
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 1 47454e45534953 0 0 0 0 0 2 00000000000003e8',
        hex: '6a04534c500001010747454e455349534c004c004c004c00010001020800000000000003e8',
        type: 'nulldata'
      }
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 d55be2bdd99f1b5e09f2c3688876da2255535fca OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914d55be2bdd99f1b5e09f2c3688876da2255535fca88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qr24hc4amx03khsf7tpk3zrkmg39256legaktp8eeh'
        ]
      }
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 d55be2bdd99f1b5e09f2c3688876da2255535fca OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914d55be2bdd99f1b5e09f2c3688876da2255535fca88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qr24hc4amx03khsf7tpk3zrkmg39256legaktp8eeh'
        ]
      }
    },
    {
      value: 0.00168949,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 67879c21f52e949eef818103e02b6fa143cfa0d8 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a91467879c21f52e949eef818103e02b6fa143cfa0d888ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qpnc08pp75hff8h0sxqs8cptd7s58naqmq52jvjugf'
        ]
      }
    }
  ],
  hex: '0100000001cf7e7d92de9d80273d565aee6110e61b540cd34aab32f2dd01f7ecea3748573a020000006a47304402203a5798ab1429029e6dee14f9ec0adec5288f6436d7ab94a8c4269ff7aadc667902207a84a2812b0a80b964335af0e1455ba99e099e132c54247a0af7e12ae0034e6241210398f6aa8d4c6aa0841ba0e02eb5424008a75f4ac3f30745f2625db8857f2df4eafeffffff040000000000000000256a04534c500001010747454e455349534c004c004c004c00010001020800000000000003e822020000000000001976a914d55be2bdd99f1b5e09f2c3688876da2255535fca88ac22020000000000001976a914d55be2bdd99f1b5e09f2c3688876da2255535fca88acf5930200000000001976a91467879c21f52e949eef818103e02b6fa143cfa0d888acb44a0800',
  blockhash: '0000000000000000015bad75aa35ba272e8fad687c7eb150563ee4a4d0154404',
  confirmations: 171001,
  time: 1534273640,
  blocktime: 1534273640
}

const forwardDagTx01 = {
  txid: '234893177b18a95dbfc1eb855d69f1c9cc256a317a6c51be8fd1b9a38ae072ce',
  hash: '234893177b18a95dbfc1eb855d69f1c9cc256a317a6c51be8fd1b9a38ae072ce',
  version: 1,
  size: 480,
  locktime: 543412,
  vin: [
    {
      txid: '483d0198ed272bd0be7c6bbaf0e60340cce926f7d32143e2b09c5513922eaf87',
      vout: 2,
      scriptSig: {
        asm: '3044022067af88306a77fa565ad5ab572527604b542bf89610b06b2f471ec978f336add60220480dbfd0f9e5726b01574c3195f81fc30753be93a4d1aa303aa14c646223562f[ALL|FORKID] 0303fc93e2f60f2b2cab27e3b47bb01e6fbd30f16a6838267eef8c31508ac3a505',
        hex: '473044022067af88306a77fa565ad5ab572527604b542bf89610b06b2f471ec978f336add60220480dbfd0f9e5726b01574c3195f81fc30753be93a4d1aa303aa14c646223562f41210303fc93e2f60f2b2cab27e3b47bb01e6fbd30f16a6838267eef8c31508ac3a505'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qpn5tljn4wjy494kjwltvgy2j8gja5mtaumk070tde',
      value: 0.00000546,
      tokenQtyStr: '20990000',
      tokenQty: 20990000,
      tokenId: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
    },
    {
      txid: '483d0198ed272bd0be7c6bbaf0e60340cce926f7d32143e2b09c5513922eaf87',
      vout: 3,
      scriptSig: {
        asm: '3045022100c434841de277ce31fa741cd62d682096aa95effafa7de4df023fc40e557801ff02203bf5d783b5194cf6990fb6893d4fa6fb066639f2a925cacb36b55559c8b25d4e[ALL|FORKID] 0303fc93e2f60f2b2cab27e3b47bb01e6fbd30f16a6838267eef8c31508ac3a505',
        hex: '483045022100c434841de277ce31fa741cd62d682096aa95effafa7de4df023fc40e557801ff02203bf5d783b5194cf6990fb6893d4fa6fb066639f2a925cacb36b55559c8b25d4e41210303fc93e2f60f2b2cab27e3b47bb01e6fbd30f16a6838267eef8c31508ac3a505'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qpn5tljn4wjy494kjwltvgy2j8gja5mtaumk070tde',
      value: 0.00164239,
      tokenQtyStr: 'NaN',
      tokenQty: null,
      tokenId: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 1 1145980243 170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2 0000000000000001 000000000140482f',
        hex: '6a04534c500001010453454e4420170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde208000000000000000108000000000140482f',
        type: 'nulldata'
      },
      tokenQty: null,
      tokenQtyStr: null
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 ed9026c379d71eb3d07f70d4e608075dc471deb6 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914ed9026c379d71eb3d07f70d4e608075dc471deb688ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qrkeqfkr08t3av7s0acdfesgqawuguw7kckw4c5d99'
        ]
      },
      tokenQtyStr: '1',
      tokenQty: 1
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 404671891bdb3ffbdc91edbc31ea9c023f9a11e2 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914404671891bdb3ffbdc91edbc31ea9c023f9a11e288ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qpqyvuvfr0dnl77uj8kmcv02nsprlxs3uggc90uhhd'
        ]
      },
      tokenQtyStr: '20989999',
      tokenQty: 20989999
    },
    {
      value: 0.00163212,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 404671891bdb3ffbdc91edbc31ea9c023f9a11e2 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914404671891bdb3ffbdc91edbc31ea9c023f9a11e288ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qpqyvuvfr0dnl77uj8kmcv02nsprlxs3uggc90uhhd'
        ]
      },
      tokenQty: null,
      tokenQtyStr: null
    }
  ],
  hex: '010000000287af2e9213559cb0e24321d3f726e9cc4003e6f0ba6b7cbed02b27ed98013d48020000006a473044022067af88306a77fa565ad5ab572527604b542bf89610b06b2f471ec978f336add60220480dbfd0f9e5726b01574c3195f81fc30753be93a4d1aa303aa14c646223562f41210303fc93e2f60f2b2cab27e3b47bb01e6fbd30f16a6838267eef8c31508ac3a505feffffff87af2e9213559cb0e24321d3f726e9cc4003e6f0ba6b7cbed02b27ed98013d48030000006b483045022100c434841de277ce31fa741cd62d682096aa95effafa7de4df023fc40e557801ff02203bf5d783b5194cf6990fb6893d4fa6fb066639f2a925cacb36b55559c8b25d4e41210303fc93e2f60f2b2cab27e3b47bb01e6fbd30f16a6838267eef8c31508ac3a505feffffff040000000000000000406a04534c500001010453454e4420170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde208000000000000000108000000000140482f22020000000000001976a914ed9026c379d71eb3d07f70d4e608075dc471deb688ac22020000000000001976a914404671891bdb3ffbdc91edbc31ea9c023f9a11e288ac8c7d0200000000001976a914404671891bdb3ffbdc91edbc31ea9c023f9a11e288acb44a0800',
  blockhash: '0000000000000000015bad75aa35ba272e8fad687c7eb150563ee4a4d0154404',
  confirmations: 171006,
  time: 1534273640,
  blocktime: 1534273640,
  blockheight: 543413,
  isSlpTx: true,
  tokenTxType: 'SEND',
  tokenId: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2',
  tokenType: 1,
  tokenTicker: '',
  tokenName: '',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: ''
}

const forwardDagTx02 = {
  txid: '82a9c47118dd221bf528e8b9ee9daef626ca52fb824b92cbe52a83e87afb0fac',
  hash: '82a9c47118dd221bf528e8b9ee9daef626ca52fb824b92cbe52a83e87afb0fac',
  version: 1,
  size: 305,
  locktime: 543412,
  vin: [
    {
      txid: '3a574837eaecf701ddf232ab4ad30c541be61061ee5a563d27809dde927d7ecf',
      vout: 2,
      scriptSig: {
        asm: '304402203a5798ab1429029e6dee14f9ec0adec5288f6436d7ab94a8c4269ff7aadc667902207a84a2812b0a80b964335af0e1455ba99e099e132c54247a0af7e12ae0034e62[ALL|FORKID] 0398f6aa8d4c6aa0841ba0e02eb5424008a75f4ac3f30745f2625db8857f2df4ea',
        hex: '47304402203a5798ab1429029e6dee14f9ec0adec5288f6436d7ab94a8c4269ff7aadc667902207a84a2812b0a80b964335af0e1455ba99e099e132c54247a0af7e12ae0034e6241210398f6aa8d4c6aa0841ba0e02eb5424008a75f4ac3f30745f2625db8857f2df4ea'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qzj78chrmrgwx68h7jcg86ls67lkqxv9gy86pyanq3',
      value: 0.00170347,
      tokenQty: 0,
      tokenQtyStr: '0',
      tokenId: null
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 1 47454e45534953 0 0 0 0 0 2 00000000000003e8',
        hex: '6a04534c500001010747454e455349534c004c004c004c00010001020800000000000003e8',
        type: 'nulldata'
      },
      tokenQtyStr: '0',
      tokenQty: 0
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 d55be2bdd99f1b5e09f2c3688876da2255535fca OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914d55be2bdd99f1b5e09f2c3688876da2255535fca88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qr24hc4amx03khsf7tpk3zrkmg39256legaktp8eeh'
        ]
      },
      tokenQtyStr: '1000',
      tokenQty: 1000
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 d55be2bdd99f1b5e09f2c3688876da2255535fca OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914d55be2bdd99f1b5e09f2c3688876da2255535fca88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qr24hc4amx03khsf7tpk3zrkmg39256legaktp8eeh'
        ]
      },
      tokenQtyStr: '0',
      tokenQty: 0,
      isMintBaton: true
    },
    {
      value: 0.00168949,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 67879c21f52e949eef818103e02b6fa143cfa0d8 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a91467879c21f52e949eef818103e02b6fa143cfa0d888ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qpnc08pp75hff8h0sxqs8cptd7s58naqmq52jvjugf'
        ]
      },
      tokenQtyStr: '0',
      tokenQty: 0
    }
  ],
  hex: '0100000001cf7e7d92de9d80273d565aee6110e61b540cd34aab32f2dd01f7ecea3748573a020000006a47304402203a5798ab1429029e6dee14f9ec0adec5288f6436d7ab94a8c4269ff7aadc667902207a84a2812b0a80b964335af0e1455ba99e099e132c54247a0af7e12ae0034e6241210398f6aa8d4c6aa0841ba0e02eb5424008a75f4ac3f30745f2625db8857f2df4eafeffffff040000000000000000256a04534c500001010747454e455349534c004c004c004c00010001020800000000000003e822020000000000001976a914d55be2bdd99f1b5e09f2c3688876da2255535fca88ac22020000000000001976a914d55be2bdd99f1b5e09f2c3688876da2255535fca88acf5930200000000001976a91467879c21f52e949eef818103e02b6fa143cfa0d888acb44a0800',
  blockhash: '0000000000000000015bad75aa35ba272e8fad687c7eb150563ee4a4d0154404',
  confirmations: 171006,
  time: 1534273640,
  blocktime: 1534273640,
  blockheight: 543413,
  isSlpTx: true,
  tokenTxType: 'GENESIS',
  tokenId: '82a9c47118dd221bf528e8b9ee9daef626ca52fb824b92cbe52a83e87afb0fac',
  tokenType: 1,
  tokenTicker: '',
  tokenName: '',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: ''
}

const forwardDagTx03 = {
  txid: '483d0198ed272bd0be7c6bbaf0e60340cce926f7d32143e2b09c5513922eaf87',
  hash: '483d0198ed272bd0be7c6bbaf0e60340cce926f7d32143e2b09c5513922eaf87',
  version: 1,
  size: 479,
  locktime: 543412,
  vin: [
    {
      txid: '660057b446cc4c930493607aa02e943e4fe7c38ae0816797ff7234ba72fea50f',
      vout: 2,
      scriptSig: {
        asm: '3044022048bb05509630e604acf8747d0231bacc93966de451093aa303f0bd930e591f1202202c9109a5a1612412042b09b704029777b943ddd9a6acbd989174cbba741358a6[ALL|FORKID] 0374b12abf350ea6397f5d7f971deabbeeeecaf24fc356fac672c9567c506f3dcc',
        hex: '473044022048bb05509630e604acf8747d0231bacc93966de451093aa303f0bd930e591f1202202c9109a5a1612412042b09b704029777b943ddd9a6acbd989174cbba741358a641210374b12abf350ea6397f5d7f971deabbeeeecaf24fc356fac672c9567c506f3dcc'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qqka3k78qzemuqx5klktqpvv4wfwwehj2uxntvjw4z',
      value: 0.00000546,
      tokenQtyStr: '20995000',
      tokenQty: 20995000,
      tokenId: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
    },
    {
      txid: '660057b446cc4c930493607aa02e943e4fe7c38ae0816797ff7234ba72fea50f',
      vout: 3,
      scriptSig: {
        asm: '304402207330905bacf58ee65f352a829fcf33e15b318d1740149f339a0206174dbacae102207ebbda130f9919bea8fb2835e53b3a397340e4297fdf44c8a967bdf6d838f156[ALL|FORKID] 0374b12abf350ea6397f5d7f971deabbeeeecaf24fc356fac672c9567c506f3dcc',
        hex: '47304402207330905bacf58ee65f352a829fcf33e15b318d1740149f339a0206174dbacae102207ebbda130f9919bea8fb2835e53b3a397340e4297fdf44c8a967bdf6d838f15641210374b12abf350ea6397f5d7f971deabbeeeecaf24fc356fac672c9567c506f3dcc'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qqka3k78qzemuqx5klktqpvv4wfwwehj2uxntvjw4z',
      value: 0.00165266,
      tokenQtyStr: 'NaN',
      tokenQty: null,
      tokenId: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 1 1145980243 170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2 0000000000001388 0000000001404830',
        hex: '6a04534c500001010453454e4420170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2080000000000001388080000000001404830',
        type: 'nulldata'
      },
      tokenQty: null,
      tokenQtyStr: null
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 ed9026c379d71eb3d07f70d4e608075dc471deb6 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914ed9026c379d71eb3d07f70d4e608075dc471deb688ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qrkeqfkr08t3av7s0acdfesgqawuguw7kckw4c5d99'
        ]
      },
      tokenQtyStr: '5000',
      tokenQty: 5000
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 6745fe53aba44a96b693beb6208a91d12ed36bef OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9146745fe53aba44a96b693beb6208a91d12ed36bef88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qpn5tljn4wjy494kjwltvgy2j8gja5mtaumk070tde'
        ]
      },
      tokenQtyStr: '20990000',
      tokenQty: 20990000
    },
    {
      value: 0.00164239,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 6745fe53aba44a96b693beb6208a91d12ed36bef OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9146745fe53aba44a96b693beb6208a91d12ed36bef88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qpn5tljn4wjy494kjwltvgy2j8gja5mtaumk070tde'
        ]
      },
      tokenQty: null,
      tokenQtyStr: null
    }
  ],
  hex: '01000000020fa5fe72ba3472ff976781e08ac3e74f3e942ea07a609304934ccc46b4570066020000006a473044022048bb05509630e604acf8747d0231bacc93966de451093aa303f0bd930e591f1202202c9109a5a1612412042b09b704029777b943ddd9a6acbd989174cbba741358a641210374b12abf350ea6397f5d7f971deabbeeeecaf24fc356fac672c9567c506f3dccfeffffff0fa5fe72ba3472ff976781e08ac3e74f3e942ea07a609304934ccc46b4570066030000006a47304402207330905bacf58ee65f352a829fcf33e15b318d1740149f339a0206174dbacae102207ebbda130f9919bea8fb2835e53b3a397340e4297fdf44c8a967bdf6d838f15641210374b12abf350ea6397f5d7f971deabbeeeecaf24fc356fac672c9567c506f3dccfeffffff040000000000000000406a04534c500001010453454e4420170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde208000000000000138808000000000140483022020000000000001976a914ed9026c379d71eb3d07f70d4e608075dc471deb688ac22020000000000001976a9146745fe53aba44a96b693beb6208a91d12ed36bef88ac8f810200000000001976a9146745fe53aba44a96b693beb6208a91d12ed36bef88acb44a0800',
  blockhash: '0000000000000000015bad75aa35ba272e8fad687c7eb150563ee4a4d0154404',
  confirmations: 171006,
  time: 1534273640,
  blocktime: 1534273640,
  blockheight: 543413,
  isSlpTx: true,
  tokenTxType: 'SEND',
  tokenId: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2',
  tokenType: 1,
  tokenTicker: '',
  tokenName: '',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: ''
}

const burnTx01 = {
  txid: '70d69e0f3d58e52526ef8136b20993b5b4d3f7c936771fd2f490ccfc5c019372',
  hash: '70d69e0f3d58e52526ef8136b20993b5b4d3f7c936771fd2f490ccfc5c019372',
  version: 2,
  size: 338,
  locktime: 0,
  vin: [
    {
      txid: '1361b8db2d000d842d75a7ba87a39b7af585de4c699a5bd334a8f8e378346767',
      vout: 0,
      scriptSig: {
        asm: '304402201b29a12d8a98d670f75ea2e0d0cfb1c9d9d6a9541cc96bdb0a1bed653825560d022055c66cebe5f50e3d7776c43f5779651ef3999b3e06e50c0ab2aa317193a02cf1[ALL|FORKID] 0204a8a6fae1ad31159cd2efe7022443d1b6f913cf1830ca190a0501321b41aa7c',
        hex: '47304402201b29a12d8a98d670f75ea2e0d0cfb1c9d9d6a9541cc96bdb0a1bed653825560d022055c66cebe5f50e3d7776c43f5779651ef3999b3e06e50c0ab2aa317193a02cf141210204a8a6fae1ad31159cd2efe7022443d1b6f913cf1830ca190a0501321b41aa7c'
      },
      sequence: 4294967295,
      address: 'bitcoincash:qp3t5cuncq2czduh27ps3jmz08m37ey3s5le8qca2f',
      value: 0.00039025
    },
    {
      txid: 'be7ebc3143e6f020cfc7a6b225ff0c291b8b22f51b391695bf409676cd501c5e',
      vout: 1,
      scriptSig: {
        asm: '3044022000b905700ac1ca7eed48ebcba5d575e7f67ff6e1fcc1a4f757e7948fa8d6c72502207255a3d3371891b5971800f71270eae0e52253de83710a8b1e344fd96d64cbaa[ALL|FORKID] 0204a8a6fae1ad31159cd2efe7022443d1b6f913cf1830ca190a0501321b41aa7c',
        hex: '473044022000b905700ac1ca7eed48ebcba5d575e7f67ff6e1fcc1a4f757e7948fa8d6c72502207255a3d3371891b5971800f71270eae0e52253de83710a8b1e344fd96d64cbaa41210204a8a6fae1ad31159cd2efe7022443d1b6f913cf1830ca190a0501321b41aa7c'
      },
      sequence: 4294967295,
      address: 'bitcoincash:qp3t5cuncq2czduh27ps3jmz08m37ey3s5le8qca2f',
      value: 0.00000546
    }
  ],
  vout: [
    {
      value: 0.00039196,
      n: 0,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 62ba6393c015813797578308cb6279f71f649185 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a91462ba6393c015813797578308cb6279f71f64918588ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qp3t5cuncq2czduh27ps3jmz08m37ey3s5le8qca2f'
        ]
      }
    }
  ],
  hex: '020000000267673478e3f8a834d35b9a694cde85f57a9ba387baa7752d840d002ddbb86113000000006a47304402201b29a12d8a98d670f75ea2e0d0cfb1c9d9d6a9541cc96bdb0a1bed653825560d022055c66cebe5f50e3d7776c43f5779651ef3999b3e06e50c0ab2aa317193a02cf141210204a8a6fae1ad31159cd2efe7022443d1b6f913cf1830ca190a0501321b41aa7cffffffff5e1c50cd769640bf9516391bf5228b1b290cff25b2a6c7cf20f0e64331bc7ebe010000006a473044022000b905700ac1ca7eed48ebcba5d575e7f67ff6e1fcc1a4f757e7948fa8d6c72502207255a3d3371891b5971800f71270eae0e52253de83710a8b1e344fd96d64cbaa41210204a8a6fae1ad31159cd2efe7022443d1b6f913cf1830ca190a0501321b41aa7cffffffff011c990000000000001976a91462ba6393c015813797578308cb6279f71f64918588ac00000000',
  blockhash: '0000000000000000023533068bba840b28d8e7ec54df6b05aff016d9791757fd',
  confirmations: 67,
  time: 1639066973,
  blocktime: 1639066973,
  blockheight: 717638,
  isSlpTx: false
}

const addrData01 = {
  utxos: [
    {
      txid: 'be7ebc3143e6f020cfc7a6b225ff0c291b8b22f51b391695bf409676cd501c5e',
      vout: 1,
      type: 'token',
      qty: '9900',
      tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
      address: 'bitcoincash:qp3t5cuncq2czduh27ps3jmz08m37ey3s5le8qca2f'
    }
  ],
  txs: [
    {
      txid: 'f3ad7418888fb5344394d511e373b53f99a41bd6ae35176533d7b5b5a6b21452',
      height: 717542
    },
    {
      txid: '06fff9287c909617720ab002f12a05cd2d6f314f2e1e888df8e44bffd848b905',
      height: 717546
    },
    {
      txid: 'be7ebc3143e6f020cfc7a6b225ff0c291b8b22f51b391695bf409676cd501c5e',
      height: 717555
    }
  ],
  balances: [
    {
      tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
      qty: '9900'
    }
  ]
}

const tokenData01 = {
  type: 1,
  ticker: 'TROUT',
  name: "Trout's test token",
  tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
  documentUri: 'troutsblog.com',
  documentHash: '',
  decimals: 2,
  mintBatonIsActive: true,
  tokensInCirculationBN: '100100000000',
  tokensInCirculationStr: '100100000000',
  blockCreated: 622414,
  totalBurned: '0',
  txs: []
}

const slpTxs01 = [
  "82a9c47118dd221bf528e8b9ee9daef626ca52fb824b92cbe52a83e87afb0fac",
  "170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2",
  "e5ff3083cd2dcf87a40a4a4a478349a394c1a1eeffe4857c2a173b183fdd42a2",
  "f56121d5a21a319204cf26ce68a6d607fefa02ba6ac42b4647fcad813b32d8b3",
  "660057b446cc4c930493607aa02e943e4fe7c38ae0816797ff7234ba72fea50f",
  "483d0198ed272bd0be7c6bbaf0e60340cce926f7d32143e2b09c5513922eaf87",
  "234893177b18a95dbfc1eb855d69f1c9cc256a317a6c51be8fd1b9a38ae072ce",
  "a333e7ebd34f0e24b567e99ed27241e3cfda5e9952cacdaa8fab31a7ee7e544d"
]

export default {
  twoTxDag01,
  twoTxDag02,
  twoTxDag03,
  forwardDagTx01,
  forwardDagTx02,
  forwardDagTx03,
  burnTx01,
  addrData01,
  tokenData01,
  slpTxs01
}

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/mocks/log-api-mock.js`:

```js
// Mocks representing an array of logs for the
// Unit tests of logapi

const data = [
  {
    message: 'Error in lib/nodemailer.js/validateEmailArray()',
    level: 'error',
    timestamp: '2020-11-14T12:15:55.230Z'
  },
  {
    message: 'Error in lib/nodemailer.js/validateEmailArray()',
    level: 'error',
    timestamp: '2020-11-14T12:15:55.231Z'
  },
  {
    message: 'Error in lib/nodemailer.js/validateEmailArray()',
    level: 'error',
    timestamp: '2020-11-14T12:15:55.230Z'
  },
  {
    message: 'Error in lib/nodemailer.js/validateEmailArray()',
    level: 'error',
    timestamp: '2020-11-14T12:15:55.231Z'
  }
]

export default {
  data
};

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/mocks/use-cases/index.js`:

```js
/*
  Mocks for the use cases.
*/
/* eslint-disable */

class UserUseCaseMock {
  async createUser(userObj) {
    return {}
  }

  async getAllUsers() {
    return true
  }

  async getUser(params) {
    return true
  }

  async updateUser(existingUser, newData) {
    return true
  }

  async deleteUser(user) {
    return true
  }

  async authUser(login, passwd) {
    return {
      generateToken: () => {}
    }
  }
}

class UseCasesMock {
  constuctor(localConfig = {}) {
    // this.user = new UserUseCaseMock(localConfig)
  }

  user = new UserUseCaseMock()
}

export default UseCasesMock;

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/mocks/app-mock.js`:

```js
/*
  Mocks for Koa 'app' object.
*/

const app = {
  use: () => {}
}

export default app;

```

`/home/trout/work/psf/code/psf-slp-indexer/test/unit/mocks/ipfs-coord-mock.js`:

```js
/*
  Mocks for the ipfs-coord library
*/

class IPFSCoord {
  async isReady () {
    return true
  }

  async start () {}

  async subscribeToChat() {}
}

export default IPFSCoord;

```

`/home/trout/work/psf/code/psf-slp-indexer/test/integration/adapters/slp-indexer/tx-types/mint.integration.js`:

```js
/*
  Integration tests for the mint.js library
*/

// Public npm libraries
const sinon = require('sinon')

// Local libraries
const Transaction = require('../../../../../src/adapters/slp-indexer/lib/transaction')
const transaction = new Transaction()
const Mint = require('../../../../../src/adapters/slp-indexer/tx-types/mint')
const MockLevel = require('../../../../unit/mocks/leveldb-mock')
const Cache = require('../../../../../src/adapters/slp-indexer/lib/cache')

describe('#mint.js', () => {
  let uut, sandbox

  beforeEach(() => {
    const addrDb = new MockLevel()
    const tokenDb = new MockLevel()
    const txDb = new MockLevel()
    const utxoDb = new MockLevel()
    txDb.get = () => {
      throw new Error('not in db')
    }

    const cache = new Cache({ txDb })

    uut = new Mint({ cache, addrDb, tokenDb, txDb, utxoDb })

    // Restore the sandbox before each test.
    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  // This test is not working.
  describe('#processTx', () => {
    it('should processes multisig tx', async () => {
      const txid = '7f530b22748c227dd125ffbc045dbce23fa0d0e9826a8daab3ca5837dba1d382'

      const data = await getData(txid)

      // Stub removeBatonInAddr() as there is likely not an input to remove in the test.
      sandbox.stub(uut, 'removeBatonInAddr').resolves()

      // Stub update token stats
      sandbox.stub(uut, 'updateTokenStats').resolves()

      const result = await uut.processTx(data)
      console.log('result: ', result)
    })

    it('should process Group baton', async () => {
      const txid = '805b85ae1a7e1c1a770429a1158a8364cc8f6f1421115bcd0557cca9437d2769'

      const data = await getData(txid)
      console.log(`data: ${JSON.stringify(data, null, 2)}`)
    })
  })
})

// Get the data needed to process a TXID.
async function getData (txid) {
  const slpData = await transaction.decodeOpReturn(txid)
  console.log(`slpData: ${JSON.stringify(slpData, null, 2)}`)

  const txData = await transaction.get(txid)
  console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

  const blockHeight = txData.blockheight

  const data = { slpData, txData, blockHeight }

  return data
}

```

`/home/trout/work/psf/code/psf-slp-indexer/test/integration/adapters/slp-indexer/tx-types/send.integration.js`:

```js
/*
  Integration tests for the send.js library
*/

// Public npm libraries

// Local libraries
const Transaction = require('../../../../../src/adapters/slp-indexer/lib/transaction')
const transaction = new Transaction()
const Send = require('../../../../../src/adapters/slp-indexer/tx-types/send')
const MockLevel = require('../../../../unit/mocks/leveldb-mock')
const Cache = require('../../../../../src/adapters/slp-indexer/lib/cache')

describe('#send.js', () => {
  let uut

  beforeEach(() => {
    const addrDb = new MockLevel()
    const tokenDb = new MockLevel()
    const txDb = new MockLevel()
    const utxoDb = new MockLevel()
    txDb.get = () => {
      throw new Error('not in db')
    }

    const cache = new Cache({ txDb })

    uut = new Send({ cache, addrDb, tokenDb, txDb, utxoDb })
  })

  describe('#processTx', () => {
    it('should processes problematic tx', async () => {
      const txid = '8e577799f9366f41880f53fb4dcca12af3a69cae5f4a6c6bf6f8dd7dc43ef564'

      const data = await getData(txid)

      const result = await uut.processTx(data)
      console.log('result: ', result)
    })
  })
})

// Get the data needed to process a TXID.
async function getData (txid) {
  const slpData = await transaction.decodeOpReturn(txid)
  console.log(`slpData: ${JSON.stringify(slpData, null, 2)}`)

  const txData = await transaction.get(txid)
  console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

  const blockHeight = txData.blockheight

  const data = { slpData, txData, blockHeight }

  return data
}

```

`/home/trout/work/psf/code/psf-slp-indexer/test/integration/adapters/slp-indexer/tx-types/genesis.integration.js`:

```js
/*
  Integration tests for the genesis.js library
*/

// Public npm libraries

// Local libraries
const Transaction = require('../../../../../src/adapters/slp-indexer/lib/transaction')
const transaction = new Transaction()
const Genesis = require('../../../../../src/adapters/slp-indexer/tx-types/genesis')
const MockLevel = require('../../../../unit/mocks/leveldb-mock')
// const Cache = require('../../../../../src/adapters/slp-indexer/lib/cache')

describe('#genesis.js', () => {
  let uut

  beforeEach(() => {
    const addrDb = new MockLevel()
    const tokenDb = new MockLevel()
    const txDb = new MockLevel()
    const utxoDb = new MockLevel()
    txDb.get = () => {
      throw new Error('not in db')
    }

    // const cache = new Cache({ txDb })

    uut = new Genesis({ addrDb, tokenDb, utxoDb })
  })

  describe('#addBatonAddress', () => {
    it('should processes problematic tx', async () => {
      const txid = '805b85ae1a7e1c1a770429a1158a8364cc8f6f1421115bcd0557cca9437d2769'

      const data = await getData(txid)

      const result = await uut.addBatonAddress(data)
      console.log('result: ', result)
    })
  })
})

// Get the data needed to process a TXID.
async function getData (txid) {
  const slpData = await transaction.decodeOpReturn(txid)
  console.log(`slpData: ${JSON.stringify(slpData, null, 2)}`)

  const txData = await transaction.get(txid)
  console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

  const blockHeight = txData.blockheight

  const data = { slpData, txData, blockHeight }

  return data
}

```

`/home/trout/work/psf/code/psf-slp-indexer/test/integration/adapters/slp-indexer/lib/transaction-integration.js`:

```js
/*
  Integration tests for the Cache library
*/

const assert = require('chai').assert

const BCHJS = require('@psf/bch-js')
const bchjs = new BCHJS()

const MockLevel = require('../../../../unit/mocks/leveldb-mock')

const Transaction = require('../../../../../src/adapters/slp-indexer/lib/transaction')

describe('#transaction.js', () => {
  let uut

  beforeEach(() => {
    // const addrDb = new MockLevel()
    // const tokenDb = new MockLevel()
    const txDb = new MockLevel()

    uut = new Transaction({ bchjs, txDb })
  })

  describe('#decodeOpReturn', () => {
    // it('should throw error for problematic TX', async () => {
    //   const txid =
    //     '16a40eca8bf6a1d4b913820718db2361686a9371e4b4ad82998c0566cf7a3052'
    //
    //   const result = await uut.decodeOpReturn(txid)
    //   console.log(`result: ${JSON.stringify(result, null, 2)}`)
    // })

    it('should handle NFTs', async () => {
      // const txid = 'b91f7648d0a91e68f1ab5c205fcc9f0f7ab382034219e8db3147b83667798da8'
      const txid = '9eb460161344c0e1e69d22c518b9706cc6db37d492d009790dcf4e55b635df71'

      const result = await uut.decodeOpReturn(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.equal(result.tokenType, 65)
    })

    it('should properly handle a documentHash property in GENESIS tx', async () => {
      const txid = '79a6e7caa57b8eedfbeef799bf502b02f98055d0bed9a84296346bbdb00ec003'

      const result = await uut.decodeOpReturn(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.equal(result.documentHash, '54ff82df2f6f19844e884e386972c5aa7a2638efb33f49c70f4f2733c47eeba5')
    })
  })

  describe('#get', () => {
    it('should get details about a SLP SEND tx with SEND input', async () => {
      const txid =
        '266844d53e46bbd7dd37134688dffea6e54d944edff27a0add63dd0908839bc1'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that there are stanardized properties.
      assert.property(result, 'txid')
      assert.property(result, 'vin')
      assert.property(result, 'vout')
      assert.property(result.vout[0], 'value')
      assert.property(result.vout[1].scriptPubKey, 'addresses')

      // Assert outputs have expected properties
      assert.equal(result.vout[0].tokenQty, null)
      assert.equal(result.vout[0].tokenQtyStr, null)
      assert.equal(result.vout[1].tokenQty, 1)
      assert.equal(result.vout[1].tokenQtyStr, '1')
      assert.equal(result.vout[2].tokenQty, 998833)
      assert.equal(result.vout[2].tokenQtyStr, '998833')
      assert.equal(result.vout[3].tokenQty, null)
      assert.equal(result.vout[3].tokenQtyStr, null)

      // Assert that inputs have expected properties
      assert.equal(result.vin[0].tokenQtyStr, '998834')
      assert.equal(result.vin[0].tokenQty, 998834)
      assert.equal(
        result.vin[0].tokenId,
        '497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7'
      )
      assert.equal(result.vin[1].tokenQtyStr, '0')
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenId, null)

      // Assert blockheight is added
      assert.equal(result.blockheight, 603424)
      assert.equal(result.isSlpTx, true)
    })

    // This is a problematic TX.
    // TX b1091bb9d5821b84dd65be21158d905bcf2d799bf096b81a5c8a74d1c6e2e9ef
    // Has an input TX: 16a40eca8bf6a1d4b913820718db2361686a9371e4b4ad82998c0566cf7a3052
    // That is structured as a valid SLP token, but should fail SLP Parsing.
    // it('should properly hydrate input txs', async () => {
    //   const txid =
    //     'b1091bb9d5821b84dd65be21158d905bcf2d799bf096b81a5c8a74d1c6e2e9ef'
    //
    //   const result = await uut.get(txid)
    //   console.log(`result: ${JSON.stringify(result, null, 2)}`)
    // })

    it('should properly hydrate a genesis UTXO being spent', async () => {
      const txid = '401aae1bef9246c42916808c9595d2834791384dcf2e298d2fc294e27b6f5273'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.property(result, 'txid')
    })

    it('should get details about an NFT Group Genesis TX', async () => {
      const txid =
        '7e0b2c51417f2ebdbee1b2fa87935682dd23ef10c6601253e2426ffa20e8a1f5'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.equal(result.tokenType, 129)
      assert.equal(result.isSlpTx, true)
    })

    it('should get details for a Group Genesis TX', async () => {
      const txid = '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.equal(result.vout[0].tokenQty, 0)
      assert.equal(result.vout[1].tokenQty, 5)
      assert.equal(result.vout[2].isMintBaton, true)
      assert.equal(result.vout[2].tokenQty, 0)
      assert.equal(result.vout[3].tokenQty, 0)
    })

    // This is the creation of an NFT (child) from an NFT Group token.
    it('should get details about an NFT (Child) Genesis TX', async () => {
      // const txid = '526b5a95bb33cbe1b7da49e90656451a964dfb5ec0b80f1e75ae83c5d009afe9'
      const txid = '91884ea8e320ac9d133c09cfed84c1d7c063f07f5f2370d018f41018dc68a3e6'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that properties unique to an NFT Genesis TX exist in the output.
      assert.equal(result.vin[0].tokenQty, 5)
      // assert.equal(result.vin[0].tokenId, 'e8c8d85f03aedd0a4ec4b5ff8885c0bad33517ba2188ed29cfcefbd76e3959ca')
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenId, null)
      assert.equal(result.vout[0].isMintBaton, true)
      assert.equal(result.vout[1].tokenQty, 1)
      assert.equal(result.vout[2].tokenQty, 0)
    })
  })

  describe('#getTokenInfo', () => {
    it('should return data on burn transaction', async () => {
      const txid = '70d69e0f3d58e52526ef8136b20993b5b4d3f7c936771fd2f490ccfc5c019372'

      const result = await uut.getTokenInfo(txid)
      console.log('result: ', result)
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/integration/adapters/slp-indexer/lib/cache-integration.js`:

```js
/*
  Integration tests for the Cache library
*/

const assert = require('chai').assert

const BCHJS = require('@psf/bch-js')
const bchjs = new BCHJS()

const Cache = require('../../../../../src/adapters/slp-indexer/lib/cache')

describe('#cache.js', () => {
  let uut

  beforeEach(() => {
    uut = new Cache({ bchjs })
  })

  describe('#get', () => {
    it('should get tx data from bch-js on the first call', async () => {
      const txid =
        '6bc111fbf5b118021d68355ca19a0e77fa358dd931f284b2550f79a51ab4792a'

      let result = await uut.get(txid)
      // console.log('result: ', result)

      result = await uut.get(txid)

      assert.equal(result.blockheight, 543957)
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/integration/adapters/slp-indexer/lib/dag-integration.js`:

```js
/*
  Integration tests for the DAG library
*/

const assert = require('chai').assert

const BCHJS = require('@psf/bch-js')
// const bchjs = new BCHJS()
const bchjs = new BCHJS({ restURL: 'http://192.168.2.129:3000/v5/' })

const Cache = require('../../../../../src/adapters/slp-indexer/lib/cache')
// const Transaction = require('../../../../../src/adapters/slp-indexer/lib/transaction')
const MockLevel = require('../../../../unit/mocks/leveldb-mock')

const DAG = require('../../../../../src/adapters/slp-indexer/lib/dag')

describe('#dag.js', () => {
  let uut, cache

  beforeEach(() => {
    // const addrDb = new MockLevel()
    // const tokenDb = new MockLevel()

    // Force cache to get TX data from full node, not database.
    const txDb = new MockLevel()
    txDb.get = () => { throw new Error('no in db') }

    cache = new Cache({ bchjs, txDb })
    uut = new DAG({ cache, txDb })
  })

  describe('#DAG', () => {
    describe('#crawlDag', () => {
      it('should get DAG for invalid MINT', async () => {
        const txid =
          'c017075df2eae8cfcfa0d121040c6fd08f3ec3234faa5c71e56c800869f4b87a'
        const tokenId =
          '495322b37d6b2eae81f045eda612b95870a0c2b6069c58f70cf8ef4e6a9fd43a'

        // const txData = await cache.get(txid)
        // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

        const result = await uut.crawlDag(txid, tokenId)
        // console.log('result: ', result)

        assert.equal(result.isValid, false)
        assert.isArray(result.dag)
        assert.equal(result.dag.length, 2)
      })

      it('should get DAG for valid SEND', async () => {
        const txid =
          '8e22a695b43f2347660f881a687d190e1abb9ef241ce41a3437c4f2b2cdedf9b'
        const tokenId =
          '550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b35'

        // const txData = await cache.get(txid)
        // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

        const result = await uut.crawlDag(txid, tokenId)
        // console.log('result: ', result)

        assert.equal(result.isValid, true)
        assert.isArray(result.dag)
        assert.equal(result.dag.length, 4)
      })

      it('should get DAG for 3-tx DAG', async () => {
        const txid =
          '4e52e0ec21d26feb8bdcafdbe48d0f15662f1ba2b3bea8200bcf0a90d7c209ee'
        const tokenId =
          'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501'

        const result = await uut.crawlDag(txid, tokenId)
        // console.log('result: ', result)

        assert.equal(result.isValid, true)
        assert.isArray(result.dag)
        assert.equal(result.dag.length, 3)
      })

      // This comes from real-world data while troubleshooting the app.
      // CT 11/28/21
      it('should validate a genesis TX', async () => {
        const txid =
          '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170'
        const tokenId =
          '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170'

        const result = await uut.crawlDag(txid, tokenId)
        // console.log('result: ', result)

        assert.equal(result.isValid, true)
        assert.isArray(result.dag)
        assert.equal(result.dag.length, 1)
      })

      // it('should invalidate if parent UTXO is invalid', async () => {
      //   const txid = '1a8e0fb428fefe6c7413dba30c15e2814947f7efb7978de526c514d9128b266c'
      //   const tokenId = '01e34c1524c523380707570ced7217024f644fd6f228c13413b12e97e4ca13e8'
      //
      //   const result = await uut.crawlDag(txid, tokenId)
      //   console.log('result: ', result)
      // })

      // it('should inspect long SPICE DAG', async () => {
      //   const txid = 'a154947de9239b93e28b7fc809627b8b4d7ecb494156ea964e96ce2eeefbfe14'
      //   // const txid = '57e76d0d3d3b76f66ca4276642557eddc8e5c1b92355add6866da958ec39afe5'
      //   // const txid = '23279ab149da98673cf3677c9c6d90bbc4bad4a8de2c0baea7181e8fba08cccc'
      //   // const txid = 'de30610b68be8dae2d1627cd0e7f7c0e18d916bc8881bbbff074c4c2c8e58e73'
      //   // const txid = 'e74ed9a8593d521eb64e527ac12d1ab00c689c8440931079f6e50d37097d2f7c'
      //   // const txid = '58bbb866dd09bd348f20a367c706dd7c48cc8c642a28f4f9c442cb469f99aefb'
      //   // const txid = '43cf6410d2b41a2087f38d83ba5340547a32dd99a5778e347667df2379708eee'
      //   const tokenId = '4de69e374a8ed21cbddd47f2338cc0f479dc58daa2bbe11cd604ca488eca0ddf'
      //
      //   const result = await uut.crawlDag(txid, tokenId)
      //   console.log(`result: ${JSON.stringify(result, null, 2)}`)
      // })

      // This was a corner-case MINT transaction.
      // it('should inspect problematic MINT tx', async () => {
      //   const txid = 'a98686df3ced24b5ce7f47762631b8a8dc87086aa7b9ee2be59bcdde7886264a'
      //   const tokenId = 'd912758f9f2c9c365e31f4d87e1c79675ec09b35364db2484061413651d0ccd4'
      //
      //   const result = await uut.crawlDag(txid, tokenId)
      //   console.log(`result: ${JSON.stringify(result, null, 2)}`)
      // })

      it('should validate a NFT Group genesis TX', async () => {
        const txid =
          '7e0b2c51417f2ebdbee1b2fa87935682dd23ef10c6601253e2426ffa20e8a1f5'
        const tokenId =
          '7e0b2c51417f2ebdbee1b2fa87935682dd23ef10c6601253e2426ffa20e8a1f5'

        const result = await uut.crawlDag(txid, tokenId)
        // console.log('result: ', result)

        assert.equal(result.isValid, true)
      })

      it('should run this temporary test', async () => {
        const txid = '6d68a7ffbb63ef851c43025f801a1d365cddda50b00741bca022c743d74cd61a'
        const tokenId = '9b6db26b64aedcedc0bd9a3037b29b3598573ec5cea99eec03faa838616cd683'

        const result = await uut.crawlDag(txid, tokenId)
        // console.log('result: ', result)

        assert.equal(result.isValid, false)
        assert.equal(result.dag.length, 0)
      })

      // This is from MIST token, which has very large DAGs.
      it('should inspect large DAG from MIST token', async () => {
        const txid = '0cb4824d3e41790f4af5fe1c402c26d2c75767c250a14eb9b03982a802569c62'
        const tokenId = 'd6876f0fce603be43f15d34348bb1de1a8d688e1152596543da033a060cff798'

        const result = await uut.crawlDag(txid, tokenId)
        // console.log(`result: ${JSON.stringify(result, null, 2)}`)

        assert.equal(result.isValid, true)
      })
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/integration/adapters/slp-indexer/lib/rpc.integration.js`:

```js
/*
  Integration test for rpc.js library. These tests ensure the indexer is
  properly configured to talk with the full node.

  In order to run these tests, the environment variables must be configured
  for the Full Node, to override the defaults in the config/env/common.js file.
*/

const assert = require('chai').assert

const RPC = require('../../../../../src/adapters/slp-indexer/lib/rpc')
let uut

describe('#rpc.js', () => {
  beforeEach(() => {
    uut = new RPC()
  })

  describe('#getBlockCount', () => {
    it('should get current block height', async () => {
      const result = await uut.getBlockCount()
      // console.log('result: ', result)

      assert.isNumber(result)
    })
  })

  describe('#getBlockHeader', () => {
    it('should get the a block header', async () => {
      const hash =
        '0000000000000000008e8d83cba6d45a9314bc2ef4538d4e0577c6bed8593536'

      const result = await uut.getBlockHeader(hash)
      // console.log('result: ', result)

      assert.equal(result.height, 600000)
    })
  })

  describe('#getBlock', () => {
    it('should get the contents of a block', async () => {
      const hash =
        '0000000000000000008e8d83cba6d45a9314bc2ef4538d4e0577c6bed8593536'

      const result = await uut.getBlock(hash)
      // console.log('result: ', result)

      assert.equal(result.height, 600000)
    })
  })

  describe('#getBlockHash', () => {
    it('should get the contents of a block', async () => {
      const height = 600000
      const hash =
        '0000000000000000008e8d83cba6d45a9314bc2ef4538d4e0577c6bed8593536'

      const result = await uut.getBlockHash(height)
      // console.log('result: ', result)

      assert.equal(result, hash)
    })
  })

  describe('#getRawTransaction', () => {
    it('should get details on a transaction', async () => {
      const txid =
        'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34'

      const result = await uut.getRawTransaction(txid)
      // console.log('result: ', result)

      assert.equal(result.txid, txid)
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/integration/adapters/slp-indexer/lib/filter-block-integration.js`:

```js
/*
  Integration tests for the filter-block.js library
*/

const assert = require('chai').assert
const sinon = require('sinon')

const BCHJS = require('@psf/bch-js')
const bchjs = new BCHJS()
// const bchjs = new BCHJS({ restURL: 'http://192.168.0.36:3000/v5/' })

const Cache = require('../../../../../src/adapters/slp-indexer/lib/cache')
const Transaction = require('../../../../../src/adapters/slp-indexer/lib/transaction')
const MockLevel = require('../../../../unit/mocks/leveldb-mock')
const FilterBlock = require('../../../../../src/adapters/slp-indexer/lib/filter-block')

// const RPC = require('../../../../../src/adapters/slp-indexer/lib/rpc')
// const rpc = new RPC()

describe('#filter-block.js', () => {
  let uut, sandbox

  beforeEach(() => {
    // Restore the sandbox before each test.
    sandbox = sinon.createSandbox()

    const txDb = new MockLevel()
    const addrDb = new MockLevel()
    const tokenDb = new MockLevel()
    const utxoDb = new MockLevel()

    const cache = new Cache({ bchjs, txDb })
    const transaction = new Transaction()

    uut = new FilterBlock({ cache, transaction, addrDb, tokenDb, utxoDb, txDb })
  })

  afterEach(() => sandbox.restore())

  describe('#filterAndSortSlpTxs', () => {
    // it('should sort problematic block', async () => {
    //   // force cache to get data from the full node.
    //   sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))
    //
    //   const blockHeight = 688837
    //   const blockHash = await rpc.getBlockHash(blockHeight)
    //   const block = await rpc.getBlock(blockHash)
    //   const txs = block.tx
    //
    //   const slpTxs = await uut.filterAndSortSlpTxs(
    //     txs,
    //     blockHeight
    //   )
    //   console.log(`slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)
    // })
    //
    //   it('should filter a small block', async () => {
    //     // force cache to get data from the full node.
    //     sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))
    //
    //     const blockHeight = 652276
    //     const blockHash = await rpc.getBlockHash(blockHeight)
    //     const block = await rpc.getBlock(blockHash)
    //     // console.log(`block: ${JSON.stringify(block, null, 2)}`)
    //
    //     const txs = block.tx
    //
    //     const slpTxs = await uut.filterAndSortSlpTxs(
    //       txs,
    //       blockHeight
    //     )
    //     // console.log(`slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)
    //
    //     assert.equal(slpTxs.length, 1)
    //   })
    //
    //   it('should filter a block with a DAG', async () => {
    //     // force cache to get data from the full node.
    //     sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))
    //
    //     const blockHeight = 543413
    //     const blockHash = await rpc.getBlockHash(blockHeight)
    //     const block = await rpc.getBlock(blockHash)
    //
    //     const txs = block.tx
    //     // console.log(`original TXs: ${JSON.stringify(txs, null, 2)}`)
    //
    //     const slpTxs = await uut.filterAndSortSlpTxs(
    //       txs,
    //       blockHeight
    //     )
    //     console.log(`slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)
    //   })

    // it('should sort problematic block', async () => {
    //   // force cache to get data from the full node.
    //   sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))
    //
    //   const blockHeight = 688837
    //   const blockHash = await rpc.getBlockHash(blockHeight)
    //   const block = await rpc.getBlock(blockHash)
    //   const txs = block.tx
    //
    //   const slpTxs = await uut.filterAndSortSlpTxs2(txs, blockHeight)
    //   console.log(`slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)
    // })
  })

  describe('#filterAndSortSlpTxs2', () => {
    // it('should filter a block with a DAG', async () => {
    //   // force cache to get data from the full node.
    //   sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))
    //
    //   const blockHeight = 543413
    //   const blockHash = await rpc.getBlockHash(blockHeight)
    //   const block = await rpc.getBlock(blockHash)
    //
    //   const txs = block.tx
    //   // console.log(`original TXs: ${JSON.stringify(txs, null, 2)}`)
    //
    //   const result = await uut.filterAndSortSlpTxs2(txs, blockHeight)
    //   // console.log(`result: ${JSON.stringify(result, null, 2)}`)
    //
    //   // assert.equal(result.sortedTxids.length, 7)
    //   // assert.equal(result.independentTxids.length, 1)
    //
    //   assert.equal(result.length, 8)
    //   assert.include(result[0], '82a9') // Independent tx
    //   assert.include(result[7], 'a333') // newest chained tx
    // })

    it('should sort different tx ordering', async () => {
      // force cache to get data from the full node.
      sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))

      const blockHeight = 543413
      const txs = [
        '82a9c47118dd221bf528e8b9ee9daef626ca52fb824b92cbe52a83e87afb0fac',
        'e5ff3083cd2dcf87a40a4a4a478349a394c1a1eeffe4857c2a173b183fdd42a2',
        'f56121d5a21a319204cf26ce68a6d607fefa02ba6ac42b4647fcad813b32d8b3',
        '660057b446cc4c930493607aa02e943e4fe7c38ae0816797ff7234ba72fea50f',
        '483d0198ed272bd0be7c6bbaf0e60340cce926f7d32143e2b09c5513922eaf87',
        '234893177b18a95dbfc1eb855d69f1c9cc256a317a6c51be8fd1b9a38ae072ce',
        'a333e7ebd34f0e24b567e99ed27241e3cfda5e9952cacdaa8fab31a7ee7e544d',
        '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
      ]

      const result = await uut.filterAndSortSlpTxs2(txs, blockHeight)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.equal(result.length, 8)
      assert.include(result[0], '82a9') // Independent tx
      assert.include(result[7], 'a333') // newest chained tx
    })

    // This was a problematic block with chained txs.
    // 938c = Genesis
    // ee9d = Mint
    // 4640 = Send that consumes outputs from first two txs.
    //
    // Expected output:
    // [938c, ee9d, 4640]
    // Actual output:
    // [ee9d, 938c, 4640]
    // Actual is a result of 4640 depending on the first two txs. To fix this,
    // would require biz logic to detect a genesis tx and move it to the front.
    it('should sort mint and send in same block', async () => {
      // force cache to get data from the full node.
      sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))

      const blockHeight = 543614
      const txs = [
        '4640a734063ea79fa587a3cac38a70a2f6f3db0011e23514024185982110d0fa',
        '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
        'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34'
      ]

      const result = await uut.filterAndSortSlpTxs2(txs, blockHeight)
      console.log(`result: ${JSON.stringify(result, null, 2)}`)
    })

    it('should sort problematic block', async () => {
      // force cache to get data from the full node.
      sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))

      const blockHeight = 543751
      const txs = [
        '550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b35',
        '95d460512143b636bbc5780d8b27b04fca3bfd2f22003ab48da594e2bab9cfc1',
        'b36b0c7485ad569b98cc9b9614dc68a5208495f22ec3b00effcf963b135a5215'
      ]

      const result = await uut.filterAndSortSlpTxs2(txs, blockHeight)
      console.log(`result: ${JSON.stringify(result, null, 2)}`)
    })

    // it('should sort prolematic block', async () => {
    //   // force cache to get data from the full node.
    //   sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))
    //
    //   const blockHeight = 714476
    //   const blockHash = await rpc.getBlockHash(blockHeight)
    //   const block = await rpc.getBlock(blockHash)
    //
    //   const txs = block.tx
    //   // console.log(`original TXs: ${JSON.stringify(txs, null, 2)}`)
    //
    //   const result = await uut.filterAndSortSlpTxs2(txs, blockHeight)
    //   console.log(`result: ${JSON.stringify(result, null, 2)}`)
    // })

    // This block caused the app to freeze up.
    // it('should sort problematic block 642869', async () => {
    //   // force cache to get data from the full node.
    //   sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))
    //
    //   const blockHeight = 642869
    //   const blockHash = await rpc.getBlockHash(blockHeight)
    //   const block = await rpc.getBlock(blockHash)
    //
    //   const txs = block.tx
    //   // console.log(`original TXs: ${JSON.stringify(txs, null, 2)}`)
    //
    //   const result = await uut.filterAndSortSlpTxs2(txs, blockHeight)
    //   console.log(`result: ${JSON.stringify(result, null, 2)}`)
    // })
  })

  describe('#checkForParent', () => {
    it('should sort a small block', async () => {
      // force cache to get data from the full node.
      sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))

      const txid =
        '234893177b18a95dbfc1eb855d69f1c9cc256a317a6c51be8fd1b9a38ae072ce'

      const result = await uut.checkForParent2(txid, 543413)
      // console.log('result: ', result)

      assert.equal(result.hasParent, true)
      assert.equal(result.dag.length, 6)
    })
  })

  describe('#forwardDag', () => {
    it('should provide forward part of DAG', async () => {
      // force cache to get data from the full node.
      sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))

      const chainedArray = [
        '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2',
        'e5ff3083cd2dcf87a40a4a4a478349a394c1a1eeffe4857c2a173b183fdd42a2',
        'f56121d5a21a319204cf26ce68a6d607fefa02ba6ac42b4647fcad813b32d8b3',
        '660057b446cc4c930493607aa02e943e4fe7c38ae0816797ff7234ba72fea50f'
      ]
      const unsortedArray = [
        '234893177b18a95dbfc1eb855d69f1c9cc256a317a6c51be8fd1b9a38ae072ce',
        '82a9c47118dd221bf528e8b9ee9daef626ca52fb824b92cbe52a83e87afb0fac',
        '483d0198ed272bd0be7c6bbaf0e60340cce926f7d32143e2b09c5513922eaf87'
      ]

      const result = await uut.forwardDag(chainedArray, unsortedArray)
      // console.log('result: ', result)

      assert.equal(result.success, true)
      assert.equal(result.chainedArray.length, 6)
      assert.equal(result.unsortedArray.length, 1)
    })

    // Same test as above, but earlier part of the DAG is provided. This test
    // ensures that the entire part of the forward DAG is filled in.
    it('should fill in the rest of the DAG', async () => {
      // force cache to get data from the full node.
      sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))

      const chainedArray = [
        '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
      ]
      const unsortedArray = [
        'e5ff3083cd2dcf87a40a4a4a478349a394c1a1eeffe4857c2a173b183fdd42a2',
        'f56121d5a21a319204cf26ce68a6d607fefa02ba6ac42b4647fcad813b32d8b3',
        '660057b446cc4c930493607aa02e943e4fe7c38ae0816797ff7234ba72fea50f',
        '483d0198ed272bd0be7c6bbaf0e60340cce926f7d32143e2b09c5513922eaf87',
        '234893177b18a95dbfc1eb855d69f1c9cc256a317a6c51be8fd1b9a38ae072ce',
        'a333e7ebd34f0e24b567e99ed27241e3cfda5e9952cacdaa8fab31a7ee7e544d'
      ]

      const result = await uut.forwardDag(chainedArray, unsortedArray)
      // console.log('result: ', result)

      assert.equal(result.success, true)
      assert.equal(result.chainedArray.length, 7)
      assert.equal(result.unsortedArray, 0)
    })
  })

  describe('#filterSlpTxs', () => {
    // it('should not filter out burn TX', async () => {
    //   const blockHeight = 717638
    //   const blockHash = await rpc.getBlockHash(blockHeight)
    //   const block = await rpc.getBlock(blockHash)
    //   const txs = block.tx
    //
    //   const result = await uut.filterSlpTxs(txs)
    //   console.log('result: ', result)
    // })

    it('should save uncontrolled burn tx to the database', async () => {
      const txs = ['175ac1e083b86cf9e723acc1698e3c69d2ccbbe3f9901b015b817cdb0db5f9e7']

      // Force desired code path
      sandbox.stub(uut, 'getAddressFromTxid').resolves('bitcoincash:qq4kp3w3yhhvy4gm4jgeza4vus8vpxgrwc90n8rhxe')

      const result = await uut.filterSlpTxs(txs)
      console.log('result: ', result)
    })
  })

  describe('#deleteBurnedUtxos', () => {
    it('should purge burned UTXOs from DB.', async () => {
      // force cache to get data from the full node.
      sandbox.stub(uut.cache.txDb, 'get').rejects(new Error('no entry'))

      const txid = '70d69e0f3d58e52526ef8136b20993b5b4d3f7c936771fd2f490ccfc5c019372'

      const result = await uut.deleteBurnedUtxos(txid)
      console.log('result: ', result)
    })
  })
})

```

`/home/trout/work/psf/code/psf-slp-indexer/test/utils/test-utils.js`:

```js
/*
  Utility functions used to prepare the environment for tests.
*/

// Public NPM libraries
import mongoose from 'mongoose'
import axios from 'axios'

// Local libraries
import config from '../../config/index.js'
import User from '../../src/adapters/localdb/models/users.js'
import JsonFiles from '../../src/adapters/json-files.js'

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'

const jsonFiles = new JsonFiles()

const LOCALHOST = `http://localhost:${config.port}`
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

// Remove all collections from the DB.
async function cleanDb () {
  for (const collection in mongoose.connection.collections) {
    const collections = mongoose.connection.collections
    if (collections.collection) {
      // const thisCollection = mongoose.connection.collections[collection]
      // console.log(`thisCollection: ${JSON.stringify(thisCollection, null, 2)}`)

      await collection.deleteMany()
    }
  }
}

// Delete all users in the database. This ensures there is no previous state
// to confuse tests.
async function deleteAllUsers () {
  try {
    // Get all the users in the DB.
    const users = await User.find({}, '-password')
    // console.log(`users: ${JSON.stringify(users, null, 2)}`)

    // Delete each user.
    for (let i = 0; i < users.length; i++) {
      const thisUser = users[i]
      await thisUser.remove()
    }
  } catch (err) {
    console.error('Error in test-utils.js/deleteAllUsers()')
  }
}

// This function is used to create new users.
// userObj = {
//   username,
//   password
// }
async function createUser (userObj) {
  try {
    const options = {
      method: 'POST',
      url: `${LOCALHOST}/users`,
      data: {
        user: {
          email: userObj.email,
          password: userObj.password,
          name: userObj.name
        }
      }
    }

    const result = await axios(options)

    const retObj = {
      user: result.data.user,
      token: result.data.token
    }

    return retObj
  } catch (err) {
    console.log(
      'Error in utils.js/createUser(): ' + JSON.stringify(err, null, 2)
    )
    throw err
  }
}

async function loginTestUser () {
  try {
    const options = {
      method: 'POST',
      url: `${LOCALHOST}/auth`,
      data: {
        email: 'test@test.com',
        password: 'pass'
      }
    }

    const result = await axios(options)

    // console.log(`result: ${JSON.stringify(result.data, null, 2)}`)

    const retObj = {
      token: result.data.token,
      user: result.data.user.username,
      id: result.data.user._id.toString()
    }

    return retObj
  } catch (err) {
    console.log(
      'Error authenticating test user: ' + JSON.stringify(err, null, 2)
    )
    throw err
  }
}

async function loginAdminUser () {
  try {
    const FILENAME = `${__dirname.toString()}../../config/system-user-${config.env}.json`
    // console.log('FILENAME: ', FILENAME)

    const adminUserData = await jsonFiles.readJSON(FILENAME)
    // console.log(`adminUserData: ${JSON.stringify(adminUserData, null, 2)}`)

    const options = {
      method: 'POST',
      url: `${LOCALHOST}/auth`,
      data: {
        email: adminUserData.email,
        password: adminUserData.password,
        name: 'admin'
      }
    }

    const result = await axios(options)

    // console.log(`result: ${JSON.stringify(result.data, null, 2)}`)

    const retObj = {
      token: result.data.token,
      user: result.data.user.username,
      id: result.data.user._id.toString()
    }

    return retObj
  } catch (err) {
    console.log(
      'Error authenticating test admin user: ' + JSON.stringify(err, null, 2)
    )
    throw err
  }
}

// Retrieve the admin user JWT token from the JSON file it's saved at.
async function getAdminJWT () {
  try {
    // process.env.KOA_ENV = process.env.KOA_ENV || 'dev'
    // console.log(`env: ${process.env.KOA_ENV}`)

    const FILENAME = `${__dirname.toString()}../../config/system-user-${config.env}.json`
    // console.log('FILENAME: ', FILENAME)
    const adminUserData = await jsonFiles.readJSON(FILENAME)
    // console.log(`adminUserData: ${JSON.stringify(adminUserData, null, 2)}`)

    return adminUserData.token
  } catch (err) {
    console.error('Error in test/utils.js/getAdminJWT()')
    throw err
  }
}

export default {
  cleanDb,
  createUser,
  loginTestUser,
  loginAdminUser,
  getAdminJWT,
  deleteAllUsers
}

```

`/home/trout/work/psf/code/psf-slp-indexer/bin/server.js`:

```js
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

```

`/home/trout/work/psf/code/psf-slp-indexer/README.md`:

```md
# psf-slp-indexer

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

This application crawls the Bitcoin Cash (BCH) blockchain and indexes SLP token transactions. This code base is intended to be a replacement for [SLPDB](https://github.com/Permissionless-Software-Foundation/docker-slpdb). The work is based on [this report](https://gist.github.com/christroutner/77c46f1fa9adaf593074d41a508a6401) and the work was funded by [this Flipstarter](https://flipstarter.fullstack.cash/).

This indexer is one part of a collection of blockchain infrastructure. To understand how all the pieces fit together, read the [Cash Stack Documentation](https://cashstack.info).

If you have question or need help, ask in the [community support Telegram channel](https://t.me/psf_slp).

## Videos

- [Installing the psf-slp-indexer](https://youtu.be/5gF4ON9lRHI)
- [Additional Infrastructure Videos](https://psfoundation.cash/video/) in the 'Dev Ops & Infrastructure' section.

## Installation and Usage

This software is intended to be run inside a Docker container, controlled with Docker Compose, on a Ubuntu 20 OS.

- Enter the `production/docker` directory.
- Build the image with `docker-compose build --no-cache`
- Ensure you have a BCHN full node running and fully synced. [docker-bchn](https://github.com/Permissionless-Software-Foundation/docker-bchn) is recommended for running a full node.
- Start the indexer with `docker-compose up -d`


## Features

- Written in [standard JavaScript](https://www.npmjs.com/package/standard), using the [Clean Architecture](https://christroutner.github.io/trouts-blog/blog/clean-architecture) design pattern.
- 100% unit test coverage. This allows for operational reliability and easy code collaboration.
- [GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) Licensed to encourage wide adoption and free use throughout the crypto ecosystem.
- [LevelDB](https://github.com/google/leveldb) used for fast, efficient indexing and querying.
- Drastically reduced memory usage, compared to SLPDB.
- Fast indexing using transaction maps.
- Docker container for easy deployment and horizontal scaling.

## Development Environment

**See the [developer documentation](./dev-docs) for more information.**

### Requirements

- Ubuntu Linux OS v20.4+
- node **^16.17.0**
- npm **^8.15.0**

### Dev Environment Installation

Customize the [slp-indexer.sh](./slp-indexer.sh) bash shell script to point to the a BCH full node with the standard JSON RPC. [docker-bchn](https://github.com/Permissionless-Software-Foundation/docker-bchn) is recommended for running a full node.

```
git clone https://github.com/Permissionless-Software-Foundation/psf-slp-indexer
cd psf-slp-indexer
npm install
./slp-indexer.sh
```

**See the [developer documentation](./dev-docs) for more information.**

## Usage

- `npm start` Start server on live mode
- `npm run docs` Generate API documentation
- `npm test` Run mocha tests
- `docker-compose build` Build a 'production' Docker container
- `docker-compose up` Run the docker container

## License

[GPLv2](./LICENSE.md)

## Contributing

Contribution are welcome! Check out the [Contribution guide](./CONTRIBUTING.md) for guidence on contributing to this repository.

```

`/home/trout/work/psf/code/psf-slp-indexer/slp-indexer.sh`:

```sh
#!/bin/bash

## Customize these environment variables for your own full node.
export RPC_IP=172.17.0.1
export RPC_PORT=8332
export ZMQ_PORT=28332
export RPC_USER=bitcoin
export RPC_PASS=password

## Uncomment this if you do not want the indexer to automatically old
## backup zip files.
#export DELETE_BACKUP=1

# Normal indexing, scanning every block and starting at SLP genesis.
npm start

# Fast reindex using a tx-map of SLP transactions.
#npm run reindex

```

`/home/trout/work/psf/code/psf-slp-indexer/shell-scripts/ipfs-service-provider-generic.sh`:

```sh
#!/bin/bash

# This script is an example for running a generic ipfs-service-provider instance.

# Ports
export PORT=5001 # REST API port
export IPFS_TCP_PORT=5268
export IPFS_WS_PORT=5269

# The human-readible name that is used when displaying data about this node.
export COORD_NAME=ipfs-service-provider-generic

# This is used for end-to-end encryption (e2ee).
export MNEMONIC="churn aisle shield silver ladder swear hunt slim pen demand spoil veteran"

# 0 = less verbose. 3 = most verbose
export DEBUG_LEVEL=1

# MongoDB connection string.
#export DBURL=mongodb://localhost:27017/bch-service-dev

npm start

```

`/home/trout/work/psf/code/psf-slp-indexer/shell-scripts/ipfs-service-provider-relay.sh`:

```sh
#!/bin/bash

# This script is an example for running a ipfs-service-provider as a Circuit Relay.
# Circuit Relays are help other nodes on the network communicate. They are
# critical for reliable functioning of the network, and for circumventing
# censorship.

# Ports
export PORT=5001 # REST API port
export IPFS_TCP_PORT=5268
export IPFS_WS_PORT=5269

# The human-readible name that is used when displaying data about this node.
export COORD_NAME=ipfs-service-provider-generic

# This is used for end-to-end encryption (e2ee).
export MNEMONIC="churn aisle shield silver ladder swear hunt slim pen demand spoil veteran"

# 0 = less verbose. 3 = most verbose
export DEBUG_LEVEL=1

# MongoDB connection string.
#export DBURL=mongodb://localhost:27017/bch-service-dev

# Comment to disable circuit relay functionality. Or set to 1 to enable.
export ENABLE_CIRCUIT_RELAY=1
# For browsers to use your circuit realy, you must set up a domain, SSL certificate,
# and you must forward that subdomain to the IPFS_WS_PORT.
#export CR_DOMAIN=subdomain.yourdomain.com

npm start

```

`/home/trout/work/psf/code/psf-slp-indexer/shell-scripts/local-external-ipfs-node.sh`:

```sh
#!/bin/bash

# This script is an example for running a production environment, which is
# defined by running an external go-ipfs node.

# Ports
export PORT=5010 # REST API port

# The human-readible name that is used when displaying data about this node.
export COORD_NAME=ipfs-service-provider-generic

# This is used for end-to-end encryption (e2ee).
export MNEMONIC="churn aisle shield silver ladder swear hunt slim pen demand spoil veteran"

# 0 = less verbose. 3 = most verbose
export DEBUG_LEVEL=0

# Production settings that use external IPFS node.
# https://github.com/christroutner/docker-ipfs
export SVC_ENV=production
export IPFS_HOST=localhost
export IPFS_API_PORT=5001

# Configure IPFS ports
export IPFS_TCP_PORT=4001
#export IPFS_WS_PORT=5269

# MongoDB connection string.
export DBURL=mongodb://localhost:27017/ipfs-service-dev

npm start

```

`/home/trout/work/psf/code/psf-slp-indexer/production/docker/start-production.sh`:

```sh
#!/bin/bash

# BEGIN: Optional configuration settings

# This mnemonic is used to set up persistent public key for e2ee
# Replace this with your own 12-word mnemonic.
# You can get one at https://wallet.fullstack.cash.
#export MNEMONIC="olive two muscle bottom coral ancient wait legend bronze useful process session"

# The human readable name this IPFS node identifies as.
#export COORD_NAME=ipfs-service-provider-generic

# Allow this node to function as a circuit relay. It must not be behind a firewall.
#export ENABLE_CIRCUIT_RELAY=true
# For browsers to use your circuit realy, you must set up a domain, SSL certificate,
# and you must forward that subdomain to the IPFS_WS_PORT.
#export CR_DOMAIN=subdomain.yourdomain.com

# Debug level. 0 = minimal info. 2 = max info.
export DEBUG_LEVEL=1

# END: Optional configuration settings


# Production database connection string.
export DBURL=mongodb://172.17.0.1:5555/psf-slp-indexer-prod

# Configure REST API port
export PORT=5010

# Production settings using external go-ipfs node.
export SVC_ENV=production
#export IPFS_HOST=172.17.0.1
#export IPFS_API_PORT=5001
#export IPFS_TCP_PORT=4001
#export IPFS_WS_PORT=5269

# RPC settings for the full node
export RPC_IP=172.17.0.1
export RPC_PORT=8332
export ZMQ_PORT=28332
export RPC_USER=bitcoin
export RPC_PASS=password

# Delete backups as it syncs.
export DELETE_BACKUP=1

# make directories
mkdir leveldb
mkdir leveldb/current
mkdir leveldb/backup
mkdir leveldb/zips
cp restore-auto.sh leveldb/zips/

npm start

```

`/home/trout/work/psf/code/psf-slp-indexer/production/docker/cleanup-images.sh`:

```sh
#!/bin/bash

# Remove all untagged docker images.
docker rmi $(docker images | grep "^<none>" | awk '{print $3}')


```

`/home/trout/work/psf/code/psf-slp-indexer/production/docker/restore-auto.sh`:

```sh
#!/bin/bash

rm -rf /home/safeuser/psf-slp-indexer/leveldb/current/*

cp -r /home/safeuser/psf-slp-indexer/leveldb/zips/home/safeuser/psf-slp-indexer/src/adapters/slp-indexer/lib/leveldb/current/* /home/safeuser/psf-slp-indexer/leveldb/current/

```

`/home/trout/work/psf/code/psf-slp-indexer/production/docker/README.md`:

```md
# Docker Containers

The 'production' environment is assumed to be a set of Docker containers orchestrated with Docker Compose. The files in this directory will stand up three Docker containers:

1 An instance of go-ipfs.
2 An instance of MongoDB.
3 The JavaScript software in this repository.

The software in this repository depends on the first two containers, so if they aren't running correctly, the application won't run correctly either.

## IPFS

IPFS can be a little tricky to set up. By default, the container uses the following ports:

- 4001 for TCP connections, exposed publicly.
- 5001 for control by the application, exposed privately.
- 8080 for an IPFS gateway, consumed by the application, exposed privately.

If you already have an IPFS node running on a the computer, you will need to change the ports to avaid a conflict. To change the ports from the default, you'll need to perform a series of steps, and the order of the steps matter.

1. Edit the `docker-compose.yml` file and change the ports. Then save the file. Here is an example:

```
ports:
  - 4101:4101
  - 172.17.0.1:5101:5101
  - 172.17.0.1:8180:8180
```

2. Bring the Docker containers up, and then back down. This will allow the IPFS container to create the config file that you'll need to edit.

- `docker-compose up -d`
- Wait a few seconds.
- `docker-compose down`

3. Update the generated config file at `../data/go-ipfs/data/config`, to update the ports in the config file, like this:

```
"Addresses": {
    "API": "/ip4/0.0.0.0/tcp/5101",
    "Announce": [],
    "AppendAnnounce": [],
    "Gateway": "/ip4/0.0.0.0/tcp/8180",
    "NoAnnounce": [],
    "Swarm": [
      "/ip4/0.0.0.0/tcp/4101",
      "/ip6/::/tcp/4101",
      "/ip4/0.0.0.0/udp/4101/quic",
      "/ip6/::/udp/4101/quic"
    ]
  },

```

4. Update the port changes in the `start-production.sh` shell script. This tells the application which ports to use, in order to control the IPFS node, are are used when signaling other nodes.

5. Quickly rebuild the containers, to add the modified `start-production.sh` shell script to the application Docker container:

- `docker-compose build`

6. Now start the containers, and the port changes to IPFS should be complete.

```

`/home/trout/work/psf/code/psf-slp-indexer/production/docker/docker-compose.yml`:

```yml
# Start the service with the command 'docker-compose up -d'

version: '3.9'

services:
  slp-indexer:
    build: .
    container_name: slp-indexer
    logging:
      driver: 'json-file'
      options:
        max-size: '10m'
        max-file: '10'
    #mem_limit: 500mb
    #links:
    #  - mongo-slp-indexer
    ports:
      - '5010:5010' # <host port>:<container port>
    volumes:
      - ../data/ipfsdata:/home/safeuser/psf-slp-indexer/.ipfsdata
      - ../data/leveldb:/home/safeuser/psf-slp-indexer/leveldb
      - ./start-production.sh:/home/safeuser/psf-slp-indexer/start-production.sh
    restart: always

```

`/home/trout/work/psf/code/psf-slp-indexer/production/docker/Dockerfile`:

```
# Create a Dockerized API server
#

#IMAGE BUILD COMMANDS
# ct-base-ubuntu = ubuntu 18.04 + nodejs v10 LTS
#FROM christroutner/ct-base-ubuntu
FROM ubuntu:22.04
MAINTAINER Chris Troutner <chris.troutner@gmail.com>

#Update the OS and install any OS packages needed.
RUN apt-get update
RUN apt-get install -y sudo git curl nano gnupg wget zip unzip python3

#Install Node and NPM
RUN curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get install -y nodejs build-essential

#Create the user 'safeuser' and add them to the sudo group.
#RUN useradd -ms /bin/bash safeuser
#RUN adduser safeuser sudo

#Set password to 'password' change value below if you want a different password
#RUN echo safeuser:password | chpasswd

#Set the working directory to be the home directory
WORKDIR /home/safeuser

#Setup NPM for non-root global install
#RUN mkdir /home/safeuser/.npm-global
#RUN chown -R safeuser .npm-global
#RUN echo "export PATH=~/.npm-global/bin:$PATH" >> /home/safeuser/.profile
#RUN runuser -l safeuser -c "npm config set prefix '~/.npm-global'"

# Update to the latest version of npm.
#RUN npm install -g npm@8.3.0

# npm mirror to prevent direct dependency on npm.
#RUN npm set registry http://94.130.170.209:4873/

# Switch to user account.
#USER safeuser
# Prep 'sudo' commands.
#RUN echo 'abcd8765' | sudo -S pwd

#RUN npm install -g node-gyp

# Clone the rest.bitcoin.com repository
WORKDIR /home/safeuser
RUN git clone https://github.com/Permissionless-Software-Foundation/psf-slp-indexer

# Switch to the desired branch. `master` is usually stable,
# and `stage` has the most up-to-date changes.
WORKDIR /home/safeuser/psf-slp-indexer

# For development: switch to unstable branch
#RUN git checkout ct-unstable

# Install dependencies
RUN npm install

# Generate the API docs
RUN npm run docs

VOLUME /home/safeuser/keys

# Make leveldb folders
#RUN mkdir leveldb
#WORKDIR /home/safeuser/psf-slp-indexer/leveldb
#RUN mkdir current
#RUN mkdir zips
#RUN mkdir backup
#WORKDIR /home/safeuser/psf-slp-indexer/leveldb/zips
COPY restore-auto.sh restore-auto.sh
#WORKDIR /home/safeuser/psf-slp-indexer

# Expose the port the API will be served on.
EXPOSE 5010

# Start the application.
#COPY start-production.sh start-production.sh
VOLUME start-production.sh
CMD ["./start-production.sh"]

#CMD ["npm", "start"]

```

`/home/trout/work/psf/code/psf-slp-indexer/util/README.md`:

```md
This directory contains utility functions for managing the database.

```

`/home/trout/work/psf/code/psf-slp-indexer/util/wipe-test-db.js`:

```js
/*
  Utility app to wipe the test database.
*/

'use strict'

import mongoose from 'mongoose'
import config from '../config/index.js'

// Force test environment
process.env.KOA_ENV = 'test'

async function cleanDb () {
  // Connect to the Mongo Database.
  mongoose.Promise = global.Promise
  mongoose.set('useCreateIndex', true) // Stop deprecation warning.
  await mongoose.connect(config.database, { useNewUrlParser: true })

  console.log(`mongoose.connection.collections: ${JSON.stringify(mongoose.connection.collections, null, 2)}`)

  for (const collection in mongoose.connection.collections) {
    const collections = mongoose.connection.collections
    if (collections.collection) {
      // const thisCollection = mongoose.connection.collections[collection]
      // console.log(`thisCollection: ${JSON.stringify(thisCollection, null, 2)}`)

      await collection.deleteMany()
    }
  }

  mongoose.connection.close()
}
cleanDb()

```

`/home/trout/work/psf/code/psf-slp-indexer/util/index/create-tx-map.js`:

```js
/*
  Utility tool to retrieve all token TXs the indexer indexed, organized by
  block height.

  Run this command by increasing the memory allocation for node.js:
  node --max_old_space_size=28000 create-tx-map.js
*/

const fs = require('fs')

const level = require('level')

const txDb = level(`${__dirname.toString()}/../../leveldb/current/txs`, {
  valueEncoding: 'json'
})

// const txs = []

async function getTxs () {
  try {
    // const promiseArray = []
    const stream = txDb.createReadStream()

    const txids = []

    // const txData = []

    // Add block height to the transaction data and add it to the txs array.
    // async function getTxData (txid) {
    //   try {
    //     await bchjs.Util.sleep(200)
    //
    //     const txData = await bchjs.Transaction.get3(txid)
    //     return txData
    //   } catch (err) {
    //     console.error('Error in getTxData')
    //     throw err
    //   }
    // }

    stream.on('data', async function (data) {
      try {
        // console.log(data.key, ' = ', JSON.stringify(data.value, null, 2))
        // console.log(data.key)
        // txs.push(data.key)

        // promiseArray.push(getTxDataWithHeight(data.value))

        // Get the TXID from the database.
        txids.push(data.value)
      } catch (err) {
        console.error('Error in "data" read steam: ', err)
      }
    })

    stream.on('close', async function () {
      try {
        console.log('Stream closed.')
        // console.log(`const txs = ${JSON.stringify(txs, null, 2)}`)

        console.log(`txids: ${txids.length}`)
      } catch (err) {
        console.error('Error in "close" read steam: ', err)
      }
    })

    stream.on('end', function () {
      console.log('Stream ended')
      console.log(`txids: ${txids.length}`)

      processTxids()
    })

    async function processTxids () {
      try {
        // console.log(`Waiting for ${promiseArray.length} promises`)
        // await Promise.all(promiseArray)

        // Loop through each txid and get the TX data for it.
        // const txData = []
        // for (let i = 0; i < txids.length; i++) {
        //   console.log(`Getting data on txid ${i} out of ${txids.length}`)
        //
        //   const txid = txids[i]
        //   const data = await getTxData(txid)
        //   txData.push(data)
        // }

        const txData = txids
        // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

        // Sort transactions by blockHeight. (oldest first)
        txData.sort(function (a, b) {
          return a.blockheight - b.blockheight
        })
        console.log(`There are ${txData.length} txs`)
        // console.log(`txs: ${JSON.stringify(txs, null, 2)}`)

        const outAry = []

        let currentBlock = txData[0].blockHeight
        let currentObj = {
          height: currentBlock,
          txs: []
        }

        for (let i = 0; i < txData.length; i++) {
          const elem = txData[i]
          // console.log(
          //   `elem.txid: ${elem.txid}, elem.blockHeight: ${elem.blockheight}`
          // )

          if (elem.blockheight !== currentBlock) {
            // Save the current block data to the output array.
            outAry.push(currentObj)

            // Create a new block object
            currentBlock = elem.blockheight
            currentObj = {
              height: currentBlock,
              txs: []
            }
          }

          // Add the current transaction to the block object.
          currentObj.txs.push(elem.txid)
        }

        // Push the final element
        outAry.push(currentObj)

        const outJsonStr = JSON.stringify(outAry, null, 2)
        // console.log(`${outJsonStr}`)
        fs.writeFileSync('./tx-map-new.json', outJsonStr)
      } catch (err) {
        console.error(err)
      }
    }
  } catch (err) {
    console.error(err)
  }
}
getTxs()

```

`/home/trout/work/psf/code/psf-slp-indexer/util/index/getOneTx.js`:

```js
/*
  Utility tool to retrieve a single TX from the TX database.
*/

// const TXID = '0717811273b8f2a517ccfad9ff70cb839b6a190146ec911dc96975497b61f399'
const TXID = '662bc5b6fe6fa2ab7ee3257ee31549d8490f3a7d591c52eecc053e97fc4c3a1c'

const level = require('level')

const txDb = level(`${__dirname.toString()}/../../leveldb/current/txs`, {
  valueEncoding: 'json'
})

async function getTx () {
  try {
    const txData = await txDb.get(TXID)

    console.log(`${JSON.stringify(txData, null, 2)}`)
  } catch (err) {
    console.error(err)
  }
}
getTx()

```

`/home/trout/work/psf/code/psf-slp-indexer/util/index/getAllAddressesWithTxid.js`:

```js
/*
  Utility tool to retrieve all token keys in the token DB that have a TX history
  that includes a given TXID.
*/

const TXID = 'c895e072e723a8c228db7e509dfa08684acdcd61973c2e1e26b1d34f42e023d5'

const level = require('level')

const addrDb = level(`${__dirname.toString()}/../../leveldb/current/addrs`, {
  valueEncoding: 'json'
})

async function getAddrs () {
  try {
    const stream = addrDb.createReadStream()

    stream.on('data', function (data) {
      const txHistory = data.value.txs

      const hasTxid = txHistory.filter(x => x.txid === TXID)
      if (hasTxid.length) {
        // console.log(data.key, ' = ', data.value)
        console.log(`${data.key} = ${JSON.stringify(data.value, null, 2)}`)
      }
    })
  } catch (err) {
    console.error(err)
  }
}
getAddrs()

```

`/home/trout/work/psf/code/psf-slp-indexer/util/index/getOneToken.js`:

```js
/*
  Utility tool to retrieve token stats on a specific token
*/

// Group
const tokenId =
  'b0f842e4170fc2e3a0a178990509914e02bf5e20a3f395b32a3a3d96fe428eff'

// NFT
// const tokenId =
//   '6f5c47c1a0d22781e6b28c5f119affd73de287b958ce8760ee02211626d4734e'

const level = require('level')

const tokenDb = level(`${__dirname.toString()}/../../leveldb/current/tokens`, {
  valueEncoding: 'json'
})

async function getOneToken () {
  try {
    const tokenData = await tokenDb.get(tokenId)

    tokenData.txsTotal = tokenData.txs.length
    // tokenData.txs = []

    console.log(`${JSON.stringify(tokenData, null, 2)}`)
  } catch (err) {
    console.error(err)
  }
}
getOneToken()

```

`/home/trout/work/psf/code/psf-slp-indexer/util/index/getGroupTokens.js`:

```js
/*
  This script scans the token database for NFT 1 Group tokens

  0x81 = 129 = Group token
  0x41 = 65 = Child NFT
*/

const level = require('level')

const tokenDb = level(`${__dirname.toString()}/../../leveldb/current/tokens`, {
  valueEncoding: 'json'
})

async function getNFTGroupTokens () {
  try {
    // const promiseArray = []
    const stream = tokenDb.createReadStream()
    const tokens = []

    function filterTokens (tokenData) {
      try {
        if (tokenData.type === 129) {
          tokens.push(tokenData)
        }
      } catch (err) {
        console.error('Error in filterTokens: ', err)
        throw err
      }
    }

    stream.on('data', async function (data) {
      try {
        data.value.txLength = data.value.txs.length
        delete data.value.txs

        filterTokens(data.value)
      } catch (err) {
        console.error('Error in "data" read steam: ', err)
      }
    })

    stream.on('close', async function () {
      try {
        console.log(`NFTs: ${JSON.stringify(tokens, null, 2)}`)
      } catch (err) {
        console.error('Error in "close" read steam: ', err)
      }
    })

    stream.on('end', function () {
      console.log('Stream ended')
    })
  } catch (err) {
    console.error(err)
  }
}
getNFTGroupTokens()

```

`/home/trout/work/psf/code/psf-slp-indexer/util/index/getAllUtxos.js`:

```js
/*
  Utility tool to retrieve all token keys in the token DB.
*/

const level = require('level')

const tokenDb = level(`${__dirname.toString()}/../../leveldb/current/utxos`, {
  valueEncoding: 'json'
})

async function getTokens () {
  try {
    const stream = tokenDb.createReadStream()

    stream.on('data', function (data) {
      console.log(data.key, ' = ', data.value)
    })
  } catch (err) {
    console.error(err)
  }
}
getTokens()

```

`/home/trout/work/psf/code/psf-slp-indexer/util/index/misc/README.md`:

```md
# Misc Indexer Scripts

These scripts were useful enough to hang on to as examples. This is a sort of 'junk drawer' for useful query scripts.

```

`/home/trout/work/psf/code/psf-slp-indexer/util/index/misc/getSimpleNfts.js`:

```js
/*
  Query the database for all tokens with a quantity of 1, decimals of 0,
  and no minting baton, which defines a simple NFT.
*/

const level = require('level')

const tokenDb = level(`${__dirname.toString()}/../../../leveldb/current/tokens`, {
  valueEncoding: 'json'
})

async function getTokens () {
  try {
    const stream = tokenDb.createReadStream()

    stream.on('data', function (data) {
      // console.log(data.key, ' = ', data.value)

      const hasQty1 = data.value.totalMinted === '1'
      const has0Decimals = data.value.decimals === 0
      const hasNoBaton = data.value.mintBatonIsActive === false

      if (hasQty1 && has0Decimals && hasNoBaton) {
        data.value.totalTxs = data.value.txs.length
        // data.value.txs = []
        console.log(data.key, ' = ', data.value)
      }
    })
  } catch (err) {
    console.error(err)
  }
}
getTokens()

```

`/home/trout/work/psf/code/psf-slp-indexer/util/index/getAllTxData.js`:

```js
/*
  Utility tool to retrieve all token keys in the token DB.
*/

const level = require('level')

const txDb = level(`${__dirname.toString()}/../../leveldb/current/txs`, {
  valueEncoding: 'json'
})

async function getTxs () {
  try {
    const stream = txDb.createReadStream()

    stream.on('data', function (data) {
      console.log(data.key, ' = ', JSON.stringify(data.value, null, 2))
    })
  } catch (err) {
    console.error(err)
  }
}
getTxs()

```

`/home/trout/work/psf/code/psf-slp-indexer/util/index/getAllAddresses.js`:

```js
/*
  Utility tool to retrieve all token keys in the token DB.
*/

const level = require('level')

const addrDb = level(`${__dirname.toString()}/../../leveldb/current/addrs`, {
  valueEncoding: 'json'
})

async function getAddrs () {
  try {
    const stream = addrDb.createReadStream()

    stream.on('data', function (data) {
      // console.log(data.key, ' = ', data.value)
      console.log(`${data.key} = ${JSON.stringify(data.value, null, 2)}`)
    })
  } catch (err) {
    console.error(err)
  }
}
getAddrs()

```

`/home/trout/work/psf/code/psf-slp-indexer/util/index/getNFTTokens.js`:

```js
/*
  This script scans the token database for NFT 1 Group tokens

  0x81 = 129 = Group token
  0x41 = 65 = Child NFT
*/

const level = require('level')

const tokenDb = level(`${__dirname.toString()}/../../leveldb/current/tokens`, {
  valueEncoding: 'json'
})

async function getNFTTokens () {
  try {
    // const promiseArray = []
    const stream = tokenDb.createReadStream()
    const tokens = []

    function filterTokens (tokenData) {
      try {
        if (tokenData.type === 65) {
          tokens.push(tokenData)
        }
      } catch (err) {
        console.error('Error in filterTokens: ', err)
        throw err
      }
    }

    stream.on('data', async function (data) {
      try {
        data.value.txLength = data.value.txs.length
        delete data.value.txs

        // promiseArray.push(filterTokens(data.value))
        filterTokens(data.value)
      } catch (err) {
        console.error('Error in "data" read steam: ', err)
      }
    })

    stream.on('close', async function () {
      try {
        console.log(`NFTs: ${JSON.stringify(tokens, null, 2)}`)
      } catch (err) {
        console.error('Error in "close" read steam: ', err)
      }
    })

    stream.on('end', function () {
      console.log('Stream ended')
    })
  } catch (err) {
    console.error(err)
  }
}
getNFTTokens()

```

`/home/trout/work/psf/code/psf-slp-indexer/util/index/getAllTokens.js`:

```js
/*
  Utility tool to retrieve all token keys in the token DB.
*/

const level = require('level')

const tokenDb = level(`${__dirname.toString()}/../../leveldb/current/tokens`, {
  valueEncoding: 'json'
})

async function getTokens () {
  try {
    const stream = tokenDb.createReadStream()

    stream.on('data', function (data) {
      // console.log(data.key, ' = ', data.value)

      if (data.value.totalBurned !== '0' && data.value.totalBurned !== data.value.totalMinted) {
        data.value.totalTxs = data.value.txs.length
        data.value.txs = []
        console.log(data.key, ' = ', data.value)
      }
    })
  } catch (err) {
    console.error(err)
  }
}
getTokens()

```

`/home/trout/work/psf/code/psf-slp-indexer/util/index/getAllTxs.js`:

```js
/*
  Utility tool to retrieve all token TXs the indexer indexed, organized by
  block height.
*/

const BCHJS = require('@psf/bch-js')
const bchjs = new BCHJS({ restURL: 'http://192.168.0.36:3000/v5/' })

const level = require('level')

const txDb = level(`${__dirname.toString()}/../../leveldb/current/txs`, {
  valueEncoding: 'json'
})

const txs = []

async function getTxs () {
  try {
    const promiseArray = []
    const stream = txDb.createReadStream()

    // const txData = []

    // Add block height to the transaction data and add it to the txs array.
    async function getTxDataWithHeight (txData) {
      try {
        const blockhash = txData.blockhash
        const blockHeader = await bchjs.Blockchain.getBlockHeader(blockhash)
        const blockHeight = blockHeader.height

        txData.blockHeight = blockHeight
        txs.push(txData)
      } catch (err) {
        console.error('Error in getTxDataWithHeight')
        throw err
      }
    }

    stream.on('data', async function (data) {
      try {
        // console.log(data.key, ' = ', JSON.stringify(data.value, null, 2))
        // console.log(data.key)
        // txs.push(data.key)

        promiseArray.push(getTxDataWithHeight(data.value))
      } catch (err) {
        console.error('Error in "data" read steam: ', err)
      }
    })

    stream.on('close', async function () {
      try {
        // console.log(`const txs = ${JSON.stringify(txs, null, 2)}`)

        console.log(`Waiting for ${promiseArray.length} promises`)
        await Promise.all(promiseArray)

        // Sort transactions by blockHeight. (oldest first)
        txs.sort(function (a, b) {
          return a.blockHeight - b.blockHeight
        })
        console.log(`There are ${txs.length} txs`)
        // console.log(`txs: ${JSON.stringify(txs, null, 2)}`)

        const outAry = []

        let currentBlock = txs[0].blockHeight
        let currentObj = {
          height: currentBlock,
          txs: []
        }

        for (let i = 0; i < txs.length; i++) {
          const elem = txs[i]
          console.log(
            `elem.txid: ${elem.txid}, elem.blockHeight: ${elem.blockHeight}`
          )

          if (elem.blockHeight !== currentBlock) {
            // Save the current block data to the output array.
            outAry.push(currentObj)

            // Create a new block object
            currentBlock = elem.blockHeight
            currentObj = {
              height: currentBlock,
              txs: []
            }
          }

          // Add the current transaction to the block object.
          currentObj.txs.push(elem.txid)
        }

        // Push the final element
        outAry.push(currentObj)

        console.log(`${JSON.stringify(outAry, null, 2)}`)
      } catch (err) {
        console.error('Error in "close" read steam: ', err)
      }
    })

    stream.on('end', function () {
      console.log('Stream ended')
    })
  } catch (err) {
    console.error(err)
  }
}
getTxs()

```

`/home/trout/work/psf/code/psf-slp-indexer/util/index/getOneAddr.js`:

```js
/*
  Utility tool to retrieve a single TX from the TX database.
*/

let addr = 'bitcoincash:qp5zflad4y9vk7q7m7l4j4cqtnvxkl7nh5y79lprka'
// let addr = 'bitcoincash:qqwmwye0udasr7m92nxx6attxhramh5qj5xg3ejk49'

const level = require('level')
const BCHJS = require('@psf/bch-js')
const bchjs = new BCHJS()

const addrDb = level(`${__dirname.toString()}/../../leveldb/current/addrs`, {
  valueEncoding: 'json'
})

async function getAddr () {
  try {
    addr = bchjs.SLP.Address.toCashAddress(addr)

    const addrData = await addrDb.get(addr)

    console.log(`${JSON.stringify(addrData, null, 2)}`)
  } catch (err) {
    console.error(err)
  }
}
getAddr()

```

`/home/trout/work/psf/code/psf-slp-indexer/util/wipe-db.md`:

```md

Here's how to wipe the db:
1. mongo
2. use koa-server-dev
3. db.dropDatabase()
4. exit

```

`/home/trout/work/psf/code/psf-slp-indexer/CONTRIBUTING.md`:

```md
# Contributing

This code repository welcomes code contributions from other developers, but any submissions must satisfy the following constraints:

## Tests
Because thie code is *infrastructure* that runs the SLP token economy, 100% unit test coverage must be maintained. Any code submissions must include unit tests, and any submissions must not decrease the overall percentage of code coverage.

## Code Reviews
The GitHub repository has a branch protection rules on the `master` branch to prevent pull requests from being merged without a code review. Any developer who has landed a PR on a PSF code repository can review submissions.

## Index Regression
Prior to merging a PR, it's a good idea to run the indexer from SLP genesis to the current chain tip, to ensure that changes do not cause a regression error.

# Questions
If you have any questions or need guidence, reach on on the [Telegram channel](https://t.me/psf_slp).
```

`/home/trout/work/psf/code/psf-slp-indexer/wipe-db.sh`:

```sh
#!/bin/bash

rm -r leveldb/current/addrs
rm -r leveldb/current/status
rm -r leveldb/current/tokens
rm -r leveldb/current/txs
rm -r leveldb/backup
rm -r leveldb/current/ptxs
rm -r leveldb/current/utxos

```

`/home/trout/work/psf/code/psf-slp-indexer/swarm.key`:

```key
/key/swarm/psk/1.0.0/
/base16/
bbd935b70105b03ebd0c6a3c2d2730cd22fc0d18c490ccf689b6c8a22e1bed2a
```

`/home/trout/work/psf/code/psf-slp-indexer/LICENSE.md`:

```md
==========================

_Version 2, June 1991_
_Copyright © 1989, 1991 Free Software Foundation, Inc.,_
_51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA_

Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.

### Preamble

The licenses for most software are designed to take away your
freedom to share and change it.  By contrast, the GNU General Public
License is intended to guarantee your freedom to share and change free
software--to make sure the software is free for all its users.  This
General Public License applies to most of the Free Software
Foundation's software and to any other program whose authors commit to
using it.  (Some other Free Software Foundation software is covered by
the GNU Lesser General Public License instead.)  You can apply it to
your programs, too.

When we speak of free software, we are referring to freedom, not
price.  Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
this service if you wish), that you receive source code or can get it
if you want it, that you can change the software or use pieces of it
in new free programs; and that you know you can do these things.

To protect your rights, we need to make restrictions that forbid
anyone to deny you these rights or to ask you to surrender the rights.
These restrictions translate to certain responsibilities for you if you
distribute copies of the software, or if you modify it.

For example, if you distribute copies of such a program, whether
gratis or for a fee, you must give the recipients all the rights that
you have.  You must make sure that they, too, receive or can get the
source code.  And you must show them these terms so they know their
rights.

We protect your rights with two steps: **(1)** copyright the software, and
**(2)** offer you this license which gives you legal permission to copy,
distribute and/or modify the software.

Also, for each author's protection and ours, we want to make certain
that everyone understands that there is no warranty for this free
software.  If the software is modified by someone else and passed on, we
want its recipients to know that what they have is not the original, so
that any problems introduced by others will not reflect on the original
authors' reputations.

Finally, any free program is threatened constantly by software
patents.  We wish to avoid the danger that redistributors of a free
program will individually obtain patent licenses, in effect making the
program proprietary.  To prevent this, we have made it clear that any
patent must be licensed for everyone's free use or not licensed at all.

The precise terms and conditions for copying, distribution and
modification follow.

### TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

**0.** This License applies to any program or other work which contains
a notice placed by the copyright holder saying it may be distributed
under the terms of this General Public License.  The “Program”, below,
refers to any such program or work, and a “work based on the Program”
means either the Program or any derivative work under copyright law:
that is to say, a work containing the Program or a portion of it,
either verbatim or with modifications and/or translated into another
language.  (Hereinafter, translation is included without limitation in
the term “modification”.)  Each licensee is addressed as “you”.

Activities other than copying, distribution and modification are not
covered by this License; they are outside its scope.  The act of
running the Program is not restricted, and the output from the Program
is covered only if its contents constitute a work based on the
Program (independent of having been made by running the Program).
Whether that is true depends on what the Program does.

**1.** You may copy and distribute verbatim copies of the Program's
source code as you receive it, in any medium, provided that you
conspicuously and appropriately publish on each copy an appropriate
copyright notice and disclaimer of warranty; keep intact all the
notices that refer to this License and to the absence of any warranty;
and give any other recipients of the Program a copy of this License
along with the Program.

You may charge a fee for the physical act of transferring a copy, and
you may at your option offer warranty protection in exchange for a fee.

**2.** You may modify your copy or copies of the Program or any portion
of it, thus forming a work based on the Program, and copy and
distribute such modifications or work under the terms of Section 1
above, provided that you also meet all of these conditions:

* **a)** You must cause the modified files to carry prominent notices
stating that you changed the files and the date of any change.
* **b)** You must cause any work that you distribute or publish, that in
whole or in part contains or is derived from the Program or any
part thereof, to be licensed as a whole at no charge to all third
parties under the terms of this License.
* **c)** If the modified program normally reads commands interactively
when run, you must cause it, when started running for such
interactive use in the most ordinary way, to print or display an
announcement including an appropriate copyright notice and a
notice that there is no warranty (or else, saying that you provide
a warranty) and that users may redistribute the program under
these conditions, and telling the user how to view a copy of this
License.  (Exception: if the Program itself is interactive but
does not normally print such an announcement, your work based on
the Program is not required to print an announcement.)

These requirements apply to the modified work as a whole.  If
identifiable sections of that work are not derived from the Program,
and can be reasonably considered independent and separate works in
themselves, then this License, and its terms, do not apply to those
sections when you distribute them as separate works.  But when you
distribute the same sections as part of a whole which is a work based
on the Program, the distribution of the whole must be on the terms of
this License, whose permissions for other licensees extend to the
entire whole, and thus to each and every part regardless of who wrote it.

Thus, it is not the intent of this section to claim rights or contest
your rights to work written entirely by you; rather, the intent is to
exercise the right to control the distribution of derivative or
collective works based on the Program.

In addition, mere aggregation of another work not based on the Program
with the Program (or with a work based on the Program) on a volume of
a storage or distribution medium does not bring the other work under
the scope of this License.

**3.** You may copy and distribute the Program (or a work based on it,
under Section 2) in object code or executable form under the terms of
Sections 1 and 2 above provided that you also do one of the following:

* **a)** Accompany it with the complete corresponding machine-readable
source code, which must be distributed under the terms of Sections
1 and 2 above on a medium customarily used for software interchange; or,
* **b)** Accompany it with a written offer, valid for at least three
years, to give any third party, for a charge no more than your
cost of physically performing source distribution, a complete
machine-readable copy of the corresponding source code, to be
distributed under the terms of Sections 1 and 2 above on a medium
customarily used for software interchange; or,
* **c)** Accompany it with the information you received as to the offer
to distribute corresponding source code.  (This alternative is
allowed only for noncommercial distribution and only if you
received the program in object code or executable form with such
an offer, in accord with Subsection b above.)

The source code for a work means the preferred form of the work for
making modifications to it.  For an executable work, complete source
code means all the source code for all modules it contains, plus any
associated interface definition files, plus the scripts used to
control compilation and installation of the executable.  However, as a
special exception, the source code distributed need not include
anything that is normally distributed (in either source or binary
form) with the major components (compiler, kernel, and so on) of the
operating system on which the executable runs, unless that component
itself accompanies the executable.

If distribution of executable or object code is made by offering
access to copy from a designated place, then offering equivalent
access to copy the source code from the same place counts as
distribution of the source code, even though third parties are not
compelled to copy the source along with the object code.

**4.** You may not copy, modify, sublicense, or distribute the Program
except as expressly provided under this License.  Any attempt
otherwise to copy, modify, sublicense or distribute the Program is
void, and will automatically terminate your rights under this License.
However, parties who have received copies, or rights, from you under
this License will not have their licenses terminated so long as such
parties remain in full compliance.

**5.** You are not required to accept this License, since you have not
signed it.  However, nothing else grants you permission to modify or
distribute the Program or its derivative works.  These actions are
prohibited by law if you do not accept this License.  Therefore, by
modifying or distributing the Program (or any work based on the
Program), you indicate your acceptance of this License to do so, and
all its terms and conditions for copying, distributing or modifying
the Program or works based on it.

**6.** Each time you redistribute the Program (or any work based on the
Program), the recipient automatically receives a license from the
original licensor to copy, distribute or modify the Program subject to
these terms and conditions.  You may not impose any further
restrictions on the recipients' exercise of the rights granted herein.
You are not responsible for enforcing compliance by third parties to
this License.

**7.** If, as a consequence of a court judgment or allegation of patent
infringement or for any other reason (not limited to patent issues),
conditions are imposed on you (whether by court order, agreement or
otherwise) that contradict the conditions of this License, they do not
excuse you from the conditions of this License.  If you cannot
distribute so as to satisfy simultaneously your obligations under this
License and any other pertinent obligations, then as a consequence you
may not distribute the Program at all.  For example, if a patent
license would not permit royalty-free redistribution of the Program by
all those who receive copies directly or indirectly through you, then
the only way you could satisfy both it and this License would be to
refrain entirely from distribution of the Program.

If any portion of this section is held invalid or unenforceable under
any particular circumstance, the balance of the section is intended to
apply and the section as a whole is intended to apply in other
circumstances.

It is not the purpose of this section to induce you to infringe any
patents or other property right claims or to contest validity of any
such claims; this section has the sole purpose of protecting the
integrity of the free software distribution system, which is
implemented by public license practices.  Many people have made
generous contributions to the wide range of software distributed
through that system in reliance on consistent application of that
system; it is up to the author/donor to decide if he or she is willing
to distribute software through any other system and a licensee cannot
impose that choice.

This section is intended to make thoroughly clear what is believed to
be a consequence of the rest of this License.

**8.** If the distribution and/or use of the Program is restricted in
certain countries either by patents or by copyrighted interfaces, the
original copyright holder who places the Program under this License
may add an explicit geographical distribution limitation excluding
those countries, so that distribution is permitted only in or among
countries not thus excluded.  In such case, this License incorporates
the limitation as if written in the body of this License.

**9.** The Free Software Foundation may publish revised and/or new versions
of the General Public License from time to time.  Such new versions will
be similar in spirit to the present version, but may differ in detail to
address new problems or concerns.

Each version is given a distinguishing version number.  If the Program
specifies a version number of this License which applies to it and “any
later version”, you have the option of following the terms and conditions
either of that version or of any later version published by the Free
Software Foundation.  If the Program does not specify a version number of
this License, you may choose any version ever published by the Free Software
Foundation.

**10.** If you wish to incorporate parts of the Program into other free
programs whose distribution conditions are different, write to the author
to ask for permission.  For software which is copyrighted by the Free
Software Foundation, write to the Free Software Foundation; we sometimes
make exceptions for this.  Our decision will be guided by the two goals
of preserving the free status of all derivatives of our free software and
of promoting the sharing and reuse of software generally.

### NO WARRANTY

**11.** BECAUSE THE PROGRAM IS LICENSED FREE OF CHARGE, THERE IS NO WARRANTY
FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW.  EXCEPT WHEN
OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES
PROVIDE THE PROGRAM “AS IS” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED
OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.  THE ENTIRE RISK AS
TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU.  SHOULD THE
PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING,
REPAIR OR CORRECTION.

**12.** IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MAY MODIFY AND/OR
REDISTRIBUTE THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES,
INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING
OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED
TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY
YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER
PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE
POSSIBILITY OF SUCH DAMAGES.

END OF TERMS AND CONDITIONS

### How to Apply These Terms to Your New Programs

If you develop a new program, and you want it to be of the greatest
possible use to the public, the best way to achieve this is to make it
free software which everyone can redistribute and change under these terms.

To do so, attach the following notices to the program.  It is safest
to attach them to the start of each source file to most effectively
convey the exclusion of warranty; and each file should have at least
the “copyright” line and a pointer to where the full notice is found.

    <one line to give the program's name and a brief idea of what it does.>
    Copyright (C) <year>  <name of author>

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

Also add information on how to contact you by electronic and paper mail.

If the program is interactive, make it output a short notice like this
when it starts in an interactive mode:

    Gnomovision version 69, Copyright (C) year name of author
    Gnomovision comes with ABSOLUTELY NO WARRANTY; for details type `show w'.
    This is free software, and you are welcome to redistribute it
    under certain conditions; type `show c' for details.

The hypothetical commands `show w` and `show c` should show the appropriate
parts of the General Public License.  Of course, the commands you use may
be called something other than `show w` and `show c`; they could even be
mouse-clicks or menu items--whatever suits your program.

You should also get your employer (if you work as a programmer) or your
school, if any, to sign a “copyright disclaimer” for the program, if
necessary.  Here is a sample; alter the names:

    Yoyodyne, Inc., hereby disclaims all copyright interest in the program
    `Gnomovision' (which makes passes at compilers) written by James Hacker.

    <signature of Ty Coon>, 1 April 1989
    Ty Coon, President of Vice

This General Public License does not permit incorporating your program into
proprietary programs.  If your program is a subroutine library, you may
consider it more useful to permit linking proprietary applications with the
library.  If this is what you want to do, use the GNU Lesser General
Public License instead of this License.
=======
The MIT License (MIT)
Copyright (c) 2021-2022 Permissionless Software Foundation

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

```

`/home/trout/work/psf/code/psf-slp-indexer/install-mongo.sh`:

```sh
#!/bin/bash
curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo service mongod start
sudo systemctl enable mongod

```

`/home/trout/work/psf/code/psf-slp-indexer/dev-docs/README.md`:

```md
# Developer Documentation

This indexer started as a fork of [ipfs-service-provider](https://github.com/Permissionless-Software-Foundation/ipfs-service-provider). That repository provides two interfaces for communication: 1) a [Koa](https://koajs.com/) REST API and 2) [JSON RPC over IPFS](https://troutsblog.com/blog/ipfs-service-providers). The SLP indexing logic was added in the `src/adapters/slp-indexer` directory.

The code in this repository follows the [Clean Architecture](https://troutsblog.com/blog/clean-architecture) design pattern. The app is built on the principles of [TDD](https://tanzu.vmware.com/content/blog/why-tdd), using [these test design patterns](https://youtu.be/lE3RYnchHps).


## Fast Indexing
A JSON file containing a 'transaction map' will be regularly uploaded to Filecoin. This file contains a list of blocks and transactions in the BCH blockchain that contain SLP transactions. This allows the indexer to ignore all non-SLP transaction in the blockchain, which greatly speeds up indexing.

- Download the tx-map by running [get-tx-map.js](../src/adapters/slp-indexer/tx-maps/get-tx-map.js): `node get-tx-map.js`
- Index using the tx map: `npm run reindex`


## Indexer Libraries

This document lays out the file structure of the SLP indexer. It gives a brief overview of what each file does, and how they fit together. This coveres the files in the `src/adapters/slp-indexer/lib/` folder.

- [rpc.js](../src/adapters/slp-indexer/lib/rpc.js) - This adapter library is responsible for interacting with the standard JSON RPC provided by a full node. BCHN is 'reference' node, as this is the full node implementation run by the vast majority of miners. This library stands on it's own, without any other dependencies. Other files depend on this file if they want to interact with the full node.<br />
- [transaction.js](../src/adapters/slp-indexer/lib/transaction.js) - This library is concerned with the pre-processing of transaction data. It leverages the rpc.js library to get raw transaction data from the full node. The library contains functions to quickly determine if the transaction's OP_RETURN conforms to the SLP specification. It also has functions the hydrate the transaction with additional token information.<br />
- [cache.js](../src/adapters/slp-indexer/lib/cache.js) - This is an in-memory cache for holding transaction data. This makes indexing faster by only needing to do transaction hydration once, and the retrieving that data from the cache if it's needed later. The cache will try to retrieve from the fastest to the slowest source; from memory first, LevelDB second, and the full node third.
- [dag.js](../src/adapters/slp-indexer/lib/dag.js) - This library is concerned with DAG validation of SLP transactions. It crawls the connections between transactions (the DAG) to get to the GENESIS transaction, and thereby validates SLP transactions based on the authenticity of this DAG. This is how the SLP protocol prevents forged transactions.
- [filter-block.js](../src/adapters/slp-indexer/lib/filter-block.js) - Contains utilities for quickly filtering non-SLP transactions from block. It also contains sorting logic for sorting the transactions in a blog by their DAG. This pre-processing makes processing by the database much faster and less error prone.
- [utils.js](../src/adapters/slp-indexer/lib/utils.js) - Contains abstract utility functions used by the different indexing libraries.
- [gensis.js](../src/adapters/slp-indexer/lib/genesis.js) - This library contains the logic used to index SLP GENESIS transactions.
- [mint.js](../src/adapters/slp-indexer/lib/mint.js) - This library contains the logic used to index SLP MINT transactions.
- [send.js](../src/adapters/slp-indexer/lib/send.js) - This library contains the logic used to index SLP SEND transactions.

## Indexer Databases
The indexer maintains several LevelDB databases.

- status - This is a small database that tracks the current state of the indexer.
- tokens - This database tracks the state of each token class. It tracks stats about each token, like the number in circulation and the number of burned tokens.
- addrs - This tracks addresses hold tokens and their current balance.
- txs - This is a persistant cache of transaction data. This reduces computational load by quickly retrieving hydrated token data, rather than recomputing it each time the transaction is needed.
- ptxs - (Processed transactions) A list of transactions that have already been processed by the indexer. This is periodically purged. It's used sync the mempool and blocks, when a new block is found.

## Indexing Phases
There are three distinct 'phases' or indexing that this app will run through:

### Bulk Indexing (Phase 1):
This is starting point. The indexer queries the full node to determine the current block height. The indexer then begins indexing the SLP transactions in each block and updating the database, until it reaches to tip of the blockchain.

During this phase, the epoch value is set at 50. The database will back itself up every 50 blocks, and will roll back to this backup if it encounters an error in indexing.

### Mempool Indexing (Phase 2):
Once the indexer reaches the tip of the blockchain, it begins listening to the ZMQ port on the full node. New transactions entering the mempool are passed to the indexer via the ZMQ port. Zero-confirmation SLP transaction are evaluated based on the DAG of transaction. When a new block is found, all the already-processed transactions are ignored. Any transactions missed by ZMQ (it happens) will be processed when the new block is found.

## Tools
The [`/util/index`](../util/index) folder contains several utility functions for working with the LevelDB databases. There are scripts for looking up addresses, transactions, token stats, etc.

## ToDo

- Detect and handle block reorgs.

```

`/home/trout/work/psf/code/psf-slp-indexer/dev-docs/dev-notes.md`:

```md
# Dev Notes

These are notes taking during code development.

## Problematic TXIDs

This section lists TXIDs that were found to be problematic.



TXID c321b6e7a3e447f2cbaea3da9d5d7c7f6c83542e4fb3b97a345f3b5b0f8018ce (MINT)
- Looks totally legit to me. Not sure why simpleledger.info shows this baton as burned.

## Notable TXIDs

TXID 1a8e0fb428fefe6c7413dba30c15e2814947f7efb7978de526c514d9128b266c (SEND)
- Has 2 token outputs.
- The tx implicitly burns 0.01 token (controlled burn)
- simpleledger.info shows the second output of 1228567.88 as burned in a future tx.

TXID 93d30d6ea82126f86c786041b10bf9eb44d9612907eaf9b14f9fba60fc0d3dc7 (SEND)
- Similar to above.
- has 1 token output.
- The tx implicitly burns 99 tokens (controlled burn)
- simpleledger.info shows the first output of 499,900 tokens as burned in a future tx.

TXID 175ac1e083b86cf9e723acc1698e3c69d2ccbbe3f9901b015b817cdb0db5f9e7
- Burns token utxos from two different tokens.

**Spice DAG**
These TXIDs are Spice token transaction that are linked by a long DAG. Most of the txs in this DAG are valid, but some are not. It appears the indexer has a discrepancy with SLPDB on the validity of the DAG.
TXID 23279ab149da98673cf3677c9c6d90bbc4bad4a8de2c0baea7181e8fba08cccc, 621236
- has an input that is invalid.
TXId 43cf6410d2b41a2087f38d83ba5340547a32dd99a5778e347667df2379708eee, 619563
- uncontrolled burn. Some of these are used in txid 23279

These are some of the TXIDs in-between:
// const txid = '57e76d0d3d3b76f66ca4276642557eddc8e5c1b92355add6866da958ec39afe5'
// const txid = '23279ab149da98673cf3677c9c6d90bbc4bad4a8de2c0baea7181e8fba08cccc'
// const txid = 'de30610b68be8dae2d1627cd0e7f7c0e18d916bc8881bbbff074c4c2c8e58e73'
// const txid = 'e74ed9a8593d521eb64e527ac12d1ab00c689c8440931079f6e50d37097d2f7c'
// const txid = '58bbb866dd09bd348f20a367c706dd7c48cc8c642a28f4f9c442cb469f99aefb'
const txid = '43cf6410d2b41a2087f38d83ba5340547a32dd99a5778e347667df2379708eee'
// const TXID = 'ab406b2ddac910067e987c2d32bf5acf01396be4f5982555483e55a2975d609d'
// const TXID = 'f36b94aa9e282d71ad9d578e4818c2d401eb928168793a8b04c3c2bb591d892b'
// const TXID = 'c94faf77fc2cd7057eb78d258c9bed007266c212e18b8d12254daa69a1e4bed1'

**UIOP2 token**
- Token ID: 3257135d7c351f8b2f46ab2b5e610620beb7a957f3885ce1787cffa90582f503

There is a pretty big discrepancy in the `totalBurned` value between psf-slp-indexer and SLPDB. This discrepency is worth investigating.

```

`/home/trout/work/psf/code/psf-slp-indexer/examples/README.md`:

```md
# Examples

Below are a series of JSON RPC calls that can be manually entered at chat.fullstack.cash to interact with the JSON RPC of this IPFS Service Provider.

- `{"jsonrpc":"2.0","id":"555","method":"users","params":{ "endpoint": "createUser", "email": "test555@test.com", "name": "testy tester", "password": "password"}}`<br />

- `{"jsonrpc":"2.0","id":"556","method":"auth","params":{ "endpoint": "authUser", "login": "test555@test.com", "password": "password"}}`<br />

- `{"jsonrpc":"2.0","id":"123","method":"users","params":{ "endpoint": "getAllUsers", "apiToken": "<JWT>"}}`<br />

- `{"jsonrpc":"2.0","id":"123","method":"users","params":{ "endpoint": "updateUser", "apiToken": "<JWT>", "userId": "<_id>", "name": "test999"}}`<br />

- `{"jsonrpc":"2.0","id":"123","method":"users","params":{ "endpoint": "getUser", "apiToken": "<JWT>", "userId": "<_id>"}}`<br />

- `{"jsonrpc":"2.0","id":"123","method":"users","params":{ "endpoint": "deleteUser", "userId": "<_id>", "apiToken": "<JWT>"}}`

```

`/home/trout/work/psf/code/psf-slp-indexer/apidoc.json`:

```json
{
    "sampleUrl": null

  }
```

`/home/trout/work/psf/code/psf-slp-indexer/config/index.js`:

```js
import common from './env/common.js'

import development from './env/development.js'
import production from './env/production.js'
import test from './env/test.js'

const env = process.env.SVC_ENV || 'development'
console.log(`Loading config for this environment: ${env}`)

let config = development
if (env === 'test') {
  config = test
} else if (env === 'prod') {
  config = production
}

// const importStr = `./env/${env}.js`
// console.log('importStr: ', importStr)
// import config from importStr

export default Object.assign({}, common, config)

```

`/home/trout/work/psf/code/psf-slp-indexer/config/env/common.js`:

```js
/*
  This file is used to store unsecure, application-specific data common to all
  environments.
*/

/* eslint  no-unneeded-ternary:0 */

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'

// Get the version from the package.json file.
import { readFileSync } from 'fs'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const pkgInfo = JSON.parse(readFileSync(`${__dirname.toString()}/../../package.json`))

const version = pkgInfo.version

const ipfsCoordName = process.env.COORD_NAME
  ? process.env.COORD_NAME
  : 'psf-slp-indexer'

export default {
  // Configure TCP port.
  port: process.env.PORT || 5020,

  // Password for HTML UI that displays logs.
  logPass: 'test',

  // Email server settings if nodemailer email notifications are used.
  emailServer: process.env.EMAILSERVER
    ? process.env.EMAILSERVER
    : 'mail.someserver.com',
  emailUser: process.env.EMAILUSER
    ? process.env.EMAILUSER
    : 'noreply@someserver.com',
  emailPassword: process.env.EMAILPASS
    ? process.env.EMAILPASS
    : 'emailpassword',

  // FullStack.cash account information, used for automatic JWT handling.
  getJwtAtStartup: process.env.GET_JWT_AT_STARTUP ? true : false,
  authServer: process.env.AUTHSERVER
    ? process.env.AUTHSERVER
    : 'https://auth.fullstack.cash',
  apiServer: process.env.APISERVER
    ? process.env.APISERVER
    : 'https://api.fullstack.cash/v5/',
  fullstackLogin: process.env.FULLSTACKLOGIN
    ? process.env.FULLSTACKLOGIN
    : 'demo@demo.com',
  fullstackPassword: process.env.FULLSTACKPASS
    ? process.env.FULLSTACKPASS
    : 'demo',

  // IPFS settings.
  useIpfs: process.env.DISABLE_IPFS ? false : true, // Disable IPFS flag
  isCircuitRelay: process.env.ENABLE_CIRCUIT_RELAY ? true : false,
  // SSL domain used for websocket connection via browsers.
  crDomain: process.env.CR_DOMAIN ? process.env.CR_DOMAIN : '',

  // Information passed to other IPFS peers about this node.
  apiInfo: 'https://ipfs-service-provider.fullstack.cash/',

  // JSON-LD and Schema.org schema with info about this app.
  announceJsonLd: {
    '@context': 'https://schema.org/',
    '@type': 'WebAPI',
    name: ipfsCoordName,
    version,
    protocol: 'psf-slp-indexer',
    description:
      'This is a generic IPFS Serivice Provider that uses JSON RPC over IPFS to communicate with it. This instance has not been customized. Source code: https://github.com/Permissionless-Software-Foundation/ipfs-service-provider',
    documentation: 'https://ipfs-service-provider.fullstack.cash/',
    provider: {
      '@type': 'Organization',
      name: 'Permissionless Software Foundation',
      url: 'https://PSFoundation.cash'
    }
  },

  // IPFS Ports
  ipfsTcpPort: process.env.IPFS_TCP_PORT ? process.env.IPFS_TCP_PORT : 4001,
  ipfsWsPort: process.env.IPFS_WS_PORT ? process.env.IPFS_WS_PORT : 4003,

  // BCH Mnemonic for generating encryption keys and payment address
  mnemonic: process.env.MNEMONIC ? process.env.MNEMONIC : '',

  debugLevel: process.env.DEBUG_LEVEL ? parseInt(process.env.DEBUG_LEVEL) : 2,

  // RPC connection information, used by the SLP indexer to communicate with the
  // full node.
  // rpcUri: process.env.RPC_URI ? process.env.RPC_URI : '192.168.0.5:8332',
  rpcIp: process.env.RPC_IP ? process.env.RPC_IP : '172.17.0.1',
  rpcPort: process.env.RPC_PORT ? process.env.RPC_PORT : '8332',
  zmqPort: process.env.ZMQ_PORT ? process.env.ZMQ_PORT : '28332',
  rpcUser: process.env.RPC_USER ? process.env.RPC_USER : 'bitcoin',
  rpcPass: process.env.RPC_PASS ? process.env.RPC_PASS : 'password',

  // Settings for production, using external go-ipfs node.
  isProduction: process.env.SVC_ENV === 'production' ? true : false,
  ipfsHost: process.env.IPFS_HOST ? process.env.IPFS_HOST : 'localhost',
  ipfsApiPort: process.env.IPFS_API_PORT
    ? parseInt(process.env.IPFS_API_PORT)
    : 5001,

  // This blacklist is used to ignore problematic tokens.
  blacklist: process.env.DISABLE_BLACKLIST
    ? []
    : [
        // FlexUSD
        'dd21be4532d93661e8ffe16db6535af0fb8ee1344d1fef81a193e2b4cfa9fbc9'
      ],

  // Number of backups to retain.
  backupQty: process.env.BACKUP_QTY ? parseInt(process.env.BACKUP_QTY) : 5,

  chatPubSubChan: 'psf-ipfs-chat-001'
}

```

`/home/trout/work/psf/code/psf-slp-indexer/config/env/production.js`:

```js
/*
  These are the environment settings for the PRODUCTION environment.
  This is the environment run with `npm start` if KOA_ENV=production.
  This is the environment run inside the Docker container.

  It is assumed the MonogDB Docker container is accessed by port 5555
  so as not to conflict with the default host port of 27017 for MongoDB.
*/

export default {
  session: 'secret-boilerplate-token',
  token: 'secret-jwt-token',
  // database: 'mongodb://172.17.0.1:5555/ipfs-service-prod',
  database: process.env.DBURL
    ? process.env.DBURL
    : 'mongodb://172.17.0.1:5555/psf-slp-indexer-prod',
  env: 'prod'
}

```

`/home/trout/work/psf/code/psf-slp-indexer/config/env/development.js`:

```js
/*
  These are the environment settings for the DEVELOPMENT environment.
  This is the environment run by default with `npm start` if KOA_ENV is not
  specified.
*/

export default {
  session: 'secret-boilerplate-token',
  token: 'secret-jwt-token',
  database: 'mongodb://localhost:27017/psf-slp-indexer-dev',
  env: 'dev'
}

```

`/home/trout/work/psf/code/psf-slp-indexer/config/env/test.js`:

```js
/*
  These are the environment settings for the TEST environment.
  This is the environment run with `npm start` if KOA_ENV=test.
  This is the environment run by the test suite.
*/

export default {
  session: 'secret-boilerplate-token',
  token: 'secret-jwt-token',
  database: 'mongodb://localhost:27017/psf-slp-indexer-test',
  env: 'test'
}

```

`/home/trout/work/psf/code/psf-slp-indexer/package.json`:

```json
{
  "name": "psf-slp-indexer",
  "version": "3.0.7",
  "description": "Indexer for validating SLP transactions. Uses LevelDB.",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node --max_old_space_size=16000 index.js",
    "test": "npm run test:all",
    "test:all": "export SVC_ENV=test && c8 --reporter=text mocha --exit --timeout 15000 --recursive test/unit/",
    "test:unit": "export SVC_ENV=test && c8 --reporter=text mocha --exit --timeout 15000 --recursive test/unit/",
    "test:temp": "export SVC_ENV=test && mocha --exit --timeout 15000 -g '#rate-limit' test/unit/json-rpc/",
    "lint": "standard --env mocha --fix",
    "docs": "./node_modules/.bin/apidoc -i src/ -o docs",
    "coverage": "c8 report --reporter=text-lcov | coveralls",
    "coverage:report": "export SVC_ENV=test && c8 --reporter=html mocha --exit --timeout 15000 --recursive test/unit/ test/e2e/automated/",
    "reindex": "node --max_old_space_size=16000 src/adapters/slp-indexer/re-index.js"
  },
  "author": "Chris Troutner <chris.troutner@gmail.com>",
  "license": "GPL-2.0",
  "apidoc": {
    "title": "psf-slp-indexer",
    "url": "localhost:5000"
  },
  "repository": "Permissionless-Software-Foundation/psf-slp-indexer",
  "dependencies": {
    "@chris.troutner/retry-queue-commonjs": "1.0.8",
    "@chris.troutner/slp-validate": "1.2.2",
    "@psf/bch-js": "6.7.3",
    "@psf/bitcoincash-zmq-decoder": "0.1.5",
    "axios": "0.27.2",
    "bcryptjs": "2.4.3",
    "bignumber.js": "9.0.1",
    "bitcoin-rpc-promise-retry": "1.3.0",
    "glob": "7.1.6",
    "ipfs-coord-esm": "9.1.13",
    "ipfs-http-client": "58.0.0",
    "jsonrpc-lite": "2.2.0",
    "jsonwebtoken": "8.5.1",
    "jwt-bch-lib": "1.3.0",
    "kcors": "2.2.2",
    "koa": "2.13.1",
    "koa-bodyparser": "4.3.0",
    "koa-convert": "2.0.0",
    "koa-generic-session": "2.1.1",
    "koa-logger": "3.2.1",
    "koa-mount": "4.0.0",
    "koa-passport": "4.1.3",
    "koa-router": "10.0.0",
    "koa-static": "5.0.0",
    "koa2-ratelimit": "0.9.1",
    "level": "7.0.1",
    "line-reader": "0.4.0",
    "minimal-slp-wallet": "5.11.1",
    "mongoose": "5.13.14",
    "node-fetch": "npm:@achingbrain/node-fetch@2.6.7",
    "nodemailer": "6.7.5",
    "p-queue": "7.4.1",
    "p-retry": "6.0.0",
    "passport-local": "1.0.0",
    "public-ip": "4.0.4",
    "readline": "1.3.0",
    "shelljs": "0.8.4",
    "slp-parser": "0.0.4",
    "winston": "3.3.3",
    "winston-daily-rotate-file": "4.5.0",
    "zeromq": "6.1.2"
  },
  "devDependencies": {
    "apidoc": "0.51.1",
    "c8": "7.12.0",
    "chai": "4.3.0",
    "coveralls": "3.1.0",
    "husky": "4.3.8",
    "lodash.clonedeep": "^4.5.0",
    "mocha": "10.0.0",
    "semantic-release": "19.0.3",
    "sinon": "9.2.4",
    "standard": "17.0.0",
    "uuid": "8.3.2"
  },
  "release": {
    "publish": [
      {
        "path": "@semantic-release/npm",
        "npmPublish": false
      }
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint"
    }
  },
  "standard": {
    "ignore": [
      "/test/unit/mocks/**/*.js"
    ]
  }
}

```
