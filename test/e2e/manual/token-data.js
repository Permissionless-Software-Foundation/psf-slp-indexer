/*
  Retrieve token stats for a token ID.
*/

// Public npm libraries
const axios = require('axios')

const SERVER = 'https://psf-slp-indexer.fullstack.cash'
const TOKENID =
  '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0'

async function start () {
  try {
    const result = await axios.post(`${SERVER}/slp/token`, {
      tokenId: TOKENID
    })

    const tokenData = result.data.tokenData
    tokenData.totalTxs = tokenData.txs.length
    // tokenData.txs = []

    console.log(`token data: ${JSON.stringify(tokenData, null, 2)}`)
    // console.log('token data: ', tokenData)
  } catch (err) {
    console.error(err)
  }
}
start()
