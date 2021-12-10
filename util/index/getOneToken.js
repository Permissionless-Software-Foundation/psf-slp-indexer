/*
  Utility tool to retrieve token stats on a specific token
*/

const tokenId =
  'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2'

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
