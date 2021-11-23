/*
  Utility tool to retrieve a single TX from the TX database.
*/

const addr = 'bitcoincash:qrjspsctn5plxa77a0ddmj2ftcarjvnjmca0gqspay'

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
