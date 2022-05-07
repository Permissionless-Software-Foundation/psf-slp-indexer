/*
  Utility tool to retrieve a single TX from the TX database.
*/

const TXID = '439c4bb9f216f194b5bda7270d96c9ec32f916cdfae31a2ea8c6fca791db961c'
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
