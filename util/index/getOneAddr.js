/*
  Utility tool to retrieve a single TX from the TX database.
*/

const addr = 'bitcoincash:qpmukj7gljfyxwyem3hyxfkyayy07rveugssmelknm'

const level = require('level')

const addrDb = level(`${__dirname.toString()}/../../leveldb/current/addrs`, {
  valueEncoding: 'json'
})

async function getAddr () {
  try {
    const addrData = await addrDb.get(addr)

    console.log(`${JSON.stringify(addrData, null, 2)}`)
  } catch (err) {
    console.error(err)
  }
}
getAddr()
