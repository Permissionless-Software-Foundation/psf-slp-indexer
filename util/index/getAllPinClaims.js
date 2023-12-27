/*
  Utility tool to retrieve all pinClaim keys in the token DB.
*/

import level from 'level'

// Hack to get __dirname back.
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const pinClaimDb = level(`${__dirname.toString()}/../../leveldb/current/pinClaim`, {
  valueEncoding: 'json'
})

async function getPinClaims () {
  try {
    const stream = pinClaimDb.createReadStream()

    stream.on('data', function (data) {
      console.log(data.key, ' = ', data.value)

      // if (data.value.totalBurned !== '0' && data.value.totalBurned !== data.value.totalMinted) {
      //   data.value.totalTxs = data.value.txs.length
      //   data.value.txs = []
      //   console.log(data.key, ' = ', data.value)
      // }
    })
  } catch (err) {
    console.error(err)
  }
}
getPinClaims()
