/*
  Utility tool to retrieve a single TX from the TX database.
*/

// const addr = 'bitcoincash:ppuxz3nyzt8hhxtxqlw4h4k2ahxq3vct0cdz9fhhw0'
// const addr = 'bitcoincash:pqdsh4fyupkj9n9zk44gejqhzzte6eg38ge9g4cckq'
const addr = 'bitcoincash:pq39w5jt7zcn2ugrak0r80vz6qhv0d9fvsprn5u7qy'

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
