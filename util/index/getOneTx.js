/*
  Utility tool to retrieve a single TX from the TX database.
*/

const TXID = 'c2899373c48f3902d83bc214144ca3b569517a972f313e9cfd01ae864f03474f'

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
