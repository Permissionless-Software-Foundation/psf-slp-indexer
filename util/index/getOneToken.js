/*
  Utility tool to retrieve token stats on a specific token
*/

const tokenId =
  '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170'

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
