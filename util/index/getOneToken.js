/*
  Utility tool to retrieve token stats on a specific token
*/

const tokenId =
  '2ddf1b76250e720e7c4171a4c79ba67fe1950e139d84a4441328cde397481800'

const level = require('level')

const tokenDb = level(`${__dirname.toString()}/../../leveldb/current/tokens`, {
  valueEncoding: 'json'
})

async function getOneToken () {
  try {
    const tokenData = await tokenDb.get(tokenId)

    console.log(`${JSON.stringify(tokenData, null, 2)}`)
  } catch (err) {
    console.error(err)
  }
}
getOneToken()
