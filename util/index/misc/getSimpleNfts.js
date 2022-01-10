/*
  Query the database for all tokens with a quantity of 1, decimals of 0,
  and no minting baton, which defines a simple NFT.
*/

const level = require('level')

const tokenDb = level(`${__dirname.toString()}/../../../leveldb/current/tokens`, {
  valueEncoding: 'json'
})

async function getTokens () {
  try {
    const stream = tokenDb.createReadStream()

    stream.on('data', function (data) {
      // console.log(data.key, ' = ', data.value)

      const hasQty1 = data.value.totalMinted === '1'
      const has0Decimals = data.value.decimals === 0
      const hasNoBaton = data.value.mintBatonIsActive === false

      if (hasQty1 && has0Decimals && hasNoBaton) {
        data.value.totalTxs = data.value.txs.length
        // data.value.txs = []
        console.log(data.key, ' = ', data.value)
      }
    })
  } catch (err) {
    console.error(err)
  }
}
getTokens()
