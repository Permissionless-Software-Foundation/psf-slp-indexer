/*
  Utility tool to retrieve all token keys in the token DB.
*/

const level = require('level')

const addrDb = level(`${__dirname.toString()}/../../leveldb/current/addrs`, {
  valueEncoding: 'json'
})

async function getAddrs () {
  try {
    const stream = addrDb.createReadStream()

    stream.on('data', function (data) {
      // console.log(data.key, ' = ', data.value)
      console.log(`${data.key} = ${JSON.stringify(data.value, null, 2)}`)
    })
  } catch (err) {
    console.error(err)
  }
}
getAddrs()
