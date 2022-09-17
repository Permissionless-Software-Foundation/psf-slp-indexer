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
