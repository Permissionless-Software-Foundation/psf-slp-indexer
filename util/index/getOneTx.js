/*
  Utility tool to retrieve a single TX from the TX database.
*/

const TXID = '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170'
// const TXID = '401aae1bef9246c42916808c9595d2834791384dcf2e298d2fc294e27b6f5273'

const level = require('level')

const txDb = level(`${__dirname.toString()}/../../leveldb/current/txs`, {
  valueEncoding: 'json'
})

async function getTx () {
  try {
    const txData = await txDb.get(TXID)

    console.log(`${JSON.stringify(txData, null, 2)}`)
  } catch (err) {
    console.error(err)
  }
}
getTx()
