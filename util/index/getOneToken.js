/*
  Utility tool to retrieve token stats on a specific token
*/

const tokenId =
  '78d2901d10dd3ce9f836ce5fa473e3802451b082134fcd4c82f30a77a9b98cb4'

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
