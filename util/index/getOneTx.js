/*
  Utility tool to retrieve a single TX from the TX database.
*/

// const TXID = '0717811273b8f2a517ccfad9ff70cb839b6a190146ec911dc96975497b61f399'
const TXID = '662bc5b6fe6fa2ab7ee3257ee31549d8490f3a7d591c52eecc053e97fc4c3a1c'

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
