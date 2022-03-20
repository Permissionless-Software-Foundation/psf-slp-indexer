/*
  Utility tool to retrieve a single TX from the TX database.
*/

// const addr = 'bitcoincash:qq59p3sway2l5gxkv0dezf57xn4t85d2lyaa2jptwx'
let addr = 'bitcoincash:qrnn49rx0p4xh78tts79utf0zv26vyru6vqtl9trd3'

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
