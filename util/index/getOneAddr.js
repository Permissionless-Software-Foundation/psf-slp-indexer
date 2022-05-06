/*
  Utility tool to retrieve a single TX from the TX database.
*/

let addr = 'bitcoincash:qp5zflad4y9vk7q7m7l4j4cqtnvxkl7nh5y79lprka'
// let addr = 'bitcoincash:qqwmwye0udasr7m92nxx6attxhramh5qj5xg3ejk49'

const level = require('level')
const BCHJS = require('@psf/bch-js')
const bchjs = new BCHJS()

const addrDb = level(`${__dirname.toString()}/../../leveldb/current/addrs`, {
  valueEncoding: 'json'
})

async function getAddr () {
  try {
    addr = bchjs.SLP.Address.toCashAddress(addr)

    const addrData = await addrDb.get(addr)

    console.log(`${JSON.stringify(addrData, null, 2)}`)
  } catch (err) {
    console.error(err)
  }
}
getAddr()
