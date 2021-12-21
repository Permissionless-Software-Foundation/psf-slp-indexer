/*
  Utility tool to retrieve a single TX from the TX database.
*/

// const TXID = '23279ab149da98673cf3677c9c6d90bbc4bad4a8de2c0baea7181e8fba08cccc'
// const TXID = 'ab406b2ddac910067e987c2d32bf5acf01396be4f5982555483e55a2975d609d'
// const TXID = 'f36b94aa9e282d71ad9d578e4818c2d401eb928168793a8b04c3c2bb591d892b'
// const TXID = 'c94faf77fc2cd7057eb78d258c9bed007266c212e18b8d12254daa69a1e4bed1'
// const TXID = '58bbb866dd09bd348f20a367c706dd7c48cc8c642a28f4f9c442cb469f99aefb'
// const TXID = '43cf6410d2b41a2087f38d83ba5340547a32dd99a5778e347667df2379708eee'
const TXID = '57e76d0d3d3b76f66ca4276642557eddc8e5c1b92355add6866da958ec39afe5'

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
