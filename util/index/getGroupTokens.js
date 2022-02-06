/*
  This script scans the token database for NFT 1 Group tokens

  0x81 = 129 = Group token
  0x41 = 65 = Child NFT
*/

const level = require('level')

const tokenDb = level(`${__dirname.toString()}/../../leveldb/current/tokens`, {
  valueEncoding: 'json'
})

async function getNFTGroupTokens () {
  try {
    // const promiseArray = []
    const stream = tokenDb.createReadStream()
    const tokens = []

    function filterTokens (tokenData) {
      try {
        if (tokenData.type === 129) {
          tokens.push(tokenData)
        }
      } catch (err) {
        console.error('Error in filterTokens: ', err)
        throw err
      }
    }

    stream.on('data', async function (data) {
      try {
        data.value.txLength = data.value.txs.length
        delete data.value.txs

        filterTokens(data.value)
      } catch (err) {
        console.error('Error in "data" read steam: ', err)
      }
    })

    stream.on('close', async function () {
      try {
        console.log(`NFTs: ${JSON.stringify(tokens, null, 2)}`)
      } catch (err) {
        console.error('Error in "close" read steam: ', err)
      }
    })

    stream.on('end', function () {
      console.log('Stream ended')
    })
  } catch (err) {
    console.error(err)
  }
}
getNFTGroupTokens()
