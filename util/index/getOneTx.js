/*
  Utility tool to retrieve a single TX from the TX database.
*/

const TXID = '221b297f3c2d0421b8f12b70e44dc3ee72f205c84a5112c7fe5c6d7931b8ee50'
// const TXID = '6d68a7ffbb63ef851c43025f801a1d365cddda50b00741bca022c743d74cd61a'

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
