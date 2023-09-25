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
