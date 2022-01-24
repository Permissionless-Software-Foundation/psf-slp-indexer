/*
  Retrieve token stats for a token ID.
*/

// Public npm libraries
const axios = require('axios')

const SERVER = 'https://psf-slp-indexer.fullstack.cash'
const address = 'bitcoincash:qqlrzp23w08434twmvr4fxw672whkjy0py26r63g3d'

async function start () {
  try {
    const result = await axios.post(`${SERVER}/slp/address`, {
      address
    })
    // console.log('result.data: ', result.data)

    // const tokenData = result.data.tokenData
    // tokenData.totalTxs = tokenData.txs.length
    // tokenData.txs = []

    console.log(`address data: ${JSON.stringify(result.data, null, 2)}`)
    // console.log('token data: ', tokenData)
  } catch (err) {
    console.error(err)
  }
}
start()
