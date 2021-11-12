/*
  Utility tool to retrieve all token keys in the token DB.
*/

const level = require('level')

const tokenDb = level(`${__dirname.toString()}/../../leveldb/current/tokens`, {
  valueEncoding: 'json'
})

async function getTokens () {
  try {
    const stream = tokenDb.createReadStream()

    stream.on('data', function (data) {
      console.log(data.key, ' = ', data.value)
    })
  } catch (err) {
    console.error(err)
  }
}
getTokens()
