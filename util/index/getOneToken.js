/*
  Utility tool to retrieve token stats on a specific token
*/

const tokenId =
  '44e3d05a07091091a63a4074287a784fcd96c26095682e05c22c4bd4e5bf8681'

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
