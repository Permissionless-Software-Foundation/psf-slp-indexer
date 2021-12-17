/*
  Utility tool to retrieve a single TX from the TX database.
*/

// const addr = 'bitcoincash:qq59p3sway2l5gxkv0dezf57xn4t85d2lyaa2jptwx'
const addr = 'bitcoincash:qzk92nt0xdxc9qy3yj53h9rjw8dk0s9cqqucfqpcd6'

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
