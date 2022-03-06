/*
  Utility tool to retrieve a single TX from the TX database.
*/

const TXID = '526b5a95bb33cbe1b7da49e90656451a964dfb5ec0b80f1e75ae83c5d009afe9'

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
