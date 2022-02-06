/*
  Utility tool to retrieve token stats on a specific token
*/

const tokenId =
  'cfa9de71c3bf5aa87d973f68814acec71451c0560a37ff7cf4b7d2df79858f85'

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
