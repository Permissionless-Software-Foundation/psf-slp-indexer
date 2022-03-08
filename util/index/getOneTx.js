/*
  Utility tool to retrieve a single TX from the TX database.
*/

const TXID = '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59'

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
