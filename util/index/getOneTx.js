/*
  Utility tool to retrieve a single TX from the TX database.
*/

const TXID = '9b6db26b64aedcedc0bd9a3037b29b3598573ec5cea99eec03faa838616cd683'
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
