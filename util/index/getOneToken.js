/*
  Utility tool to retrieve token stats on a specific token
*/

const tokenId =
  '9e2b6321faf7830d4f1fa952d8c90ad6a7bc204802978c09ecafd78832c85509'

const level = require('level')

const tokenDb = level(`${__dirname.toString()}/../../leveldb/current/tokens`, {
  valueEncoding: 'json'
})

async function getOneToken () {
  try {
    const tokenData = await tokenDb.get(tokenId)

    tokenData.txsTotal = tokenData.txs.length
    // tokenData.txs = []

    console.log(`${JSON.stringify(tokenData, null, 2)}`)
  } catch (err) {
    console.error(err)
  }
}
getOneToken()
