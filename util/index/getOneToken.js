/*
  Utility tool to retrieve token stats on a specific token
*/

const tokenId =
  'a788ff70cc0b8add226219d901247fb7d80b8fa77e2c306a6a2165bff397f92e'

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
