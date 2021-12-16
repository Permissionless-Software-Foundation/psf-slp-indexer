/*
  Utility tool to retrieve token stats on a specific token
*/

const tokenId =
  '01e34c1524c523380707570ced7217024f644fd6f228c13413b12e97e4ca13e8'

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
