/*
  Utility tool to retrieve a single TX from the TX database.
*/

const TXID = '7e0b2c51417f2ebdbee1b2fa87935682dd23ef10c6601253e2426ffa20e8a1f5'

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
