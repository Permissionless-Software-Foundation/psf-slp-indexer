/*
  Generate the 'data' object that is passed around to the various libraries that
  process and index SLP transactions. This object is composed of three parts:
  - SLP data from decodeOpReturn()
  - block height
  - hydrated transaction data

  This data can then be used in unit tests.
*/

const TXID = 'c321b6e7a3e447f2cbaea3da9d5d7c7f6c83542e4fb3b97a345f3b5b0f8018ce'

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
