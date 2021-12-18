/*
  Utility tool to retrieve a single TX from the TX database.
*/

const TXID = 'a6cedb6460dc91f4ff06ab37e9e96f2d1864b7c5ca5b65c68c2e7c1b436e187c'
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
