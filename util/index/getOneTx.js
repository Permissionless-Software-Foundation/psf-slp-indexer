/*
  Utility tool to retrieve a single TX from the TX database.
*/

const TXID = '762b3706536aa006a64675c7da8bb08407439dfcd17a4fdb148f6d4ad32d2b41'
// const TXID = 'ab406b2ddac910067e987c2d32bf5acf01396be4f5982555483e55a2975d609d'
// const TXID = 'f36b94aa9e282d71ad9d578e4818c2d401eb928168793a8b04c3c2bb591d892b'
// const TXID = 'c94faf77fc2cd7057eb78d258c9bed007266c212e18b8d12254daa69a1e4bed1'
// const TXID = '58bbb866dd09bd348f20a367c706dd7c48cc8c642a28f4f9c442cb469f99aefb'
// const TXID = '43cf6410d2b41a2087f38d83ba5340547a32dd99a5778e347667df2379708eee'
// const TXID = 'a154947de9239b93e28b7fc809627b8b4d7ecb494156ea964e96ce2eeefbfe14'

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
