/*
  Utility tool to retrieve a single TX from the TX database.
*/

const TXID = '175ac1e083b86cf9e723acc1698e3c69d2ccbbe3f9901b015b817cdb0db5f9e7'
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
