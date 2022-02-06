/*
  Utility tool to retrieve token stats on a specific token
*/

const tokenId =
  'ed503628d6f3cbc986518aa674ed7544472571ee31a2eb3777b4bd8d68175a6d'

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
