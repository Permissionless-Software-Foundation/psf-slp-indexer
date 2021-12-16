/*
  Generate the 'data' object that is passed around to the various libraries that
  process and index SLP transactions. This object is composed of three parts:
  - SLP data from decodeOpReturn()
  - block height
  - hydrated transaction data

  This data can then be used in unit tests.
*/

const TXID = '8e577799f9366f41880f53fb4dcca12af3a69cae5f4a6c6bf6f8dd7dc43ef564'

const Transaction = require('../../src/adapters/slp-indexer/lib/transaction')
const transaction = new Transaction()

async function getData (txid) {
  try {
    const slpData = await transaction.decodeOpReturn(txid)
    console.log(`slpData: ${JSON.stringify(slpData, null, 2)}`)

    const txData = await transaction.get(txid)
    console.log(`txData: ${JSON.stringify(txData, null, 2)}`)
  } catch (err) {
    console.error(err)
  }
}
getData(TXID)
