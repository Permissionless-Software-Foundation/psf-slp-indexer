/*
  Utility tool to retrieve all token keys in the token DB.
*/

const level = require('level')

const txDb = level(`${__dirname.toString()}/../../leveldb/current/txs`, {
  valueEncoding: 'json'
})

async function getTxs () {
  try {
    const stream = txDb.createReadStream()

    stream.on('data', function (data) {
      console.log(data.key, ' = ', JSON.stringify(data.value, null, 2))
    })
  } catch (err) {
    console.error(err)
  }
}
getTxs()
