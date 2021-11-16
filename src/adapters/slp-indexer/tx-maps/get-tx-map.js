/*
  This app is used to download the tx-map from the Filecoin blockchain.
*/

const https = require('https')
const fs = require('fs')

const url =
  'https://bafybeifg5ke5szowrwubucf2ljdthlgukupl3mvldtnjkacvig3wv4tity.ipfs.dweb.link/slp-tx-map-691599.json'

async function getTxMap () {
  try {
    const download = function (url, dest, cb) {
      const file = fs.createWriteStream(dest)
      https
        .get(url, function (response) {
          response.pipe(file)
          file.on('finish', function () {
            file.close(cb) // close() is async, call cb after close completes.
          })
        })
        .on('error', function (err) {
          // Handle errors
          fs.unlink(dest) // Delete the file async. (But we don't check the result)
          if (cb) cb(err.message)
        })
    }

    console.log(
      'Downloading tx-map. It\'s a big file (over 100MB), it can take a while...'
    )
    const dest = 'tx-map.json'
    download(url, dest, function () {
      console.log('done')
    })
  } catch (err) {
    console.error('Error in getTxMap(): ', err)
  }
}
getTxMap()
