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
