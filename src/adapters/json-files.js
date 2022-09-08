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

            throw err
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
