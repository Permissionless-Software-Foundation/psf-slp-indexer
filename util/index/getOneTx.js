/*
  Utility tool to retrieve a single TX from the TX database.
*/

const TXID = '0e27a51375d165b656459c1a4bc79e835541b70fad0183bb70a2bcfa037a4f27'

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
