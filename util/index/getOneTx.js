/*
  Utility tool to retrieve a single TX from the TX database.
*/

const TXID = '6d233d18866942d594763e7f21bbd071937ca94c8aef7fbd9a049d7f17635d45'

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
