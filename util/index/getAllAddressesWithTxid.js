/*
  Utility tool to retrieve all token keys in the token DB that have a TX history
  that includes a given TXID.
*/

const TXID = 'c895e072e723a8c228db7e509dfa08684acdcd61973c2e1e26b1d34f42e023d5'

const level = require('level')

const addrDb = level(`${__dirname.toString()}/../../leveldb/current/addrs`, {
  valueEncoding: 'json'
})

async function getAddrs () {
  try {
    const stream = addrDb.createReadStream()

    stream.on('data', function (data) {
      const txHistory = data.value.txs

      const hasTxid = txHistory.filter(x => x.txid === TXID)
      if (hasTxid.length) {
        // console.log(data.key, ' = ', data.value)
        console.log(`${data.key} = ${JSON.stringify(data.value, null, 2)}`)
      }
    })
  } catch (err) {
    console.error(err)
  }
}
getAddrs()
