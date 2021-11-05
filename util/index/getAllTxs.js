/*
  Utility tool to retrieve all token TXs the indexer indexed, organized by
  block height.
*/

const BCHJS = require('@psf/bch-js')
const bchjs = new BCHJS({ restURL: 'http://192.168.0.36:3000/v5/' })

const level = require('level')

const txDb = level(`${__dirname.toString()}/../../leveldb/current/txs`, {
  valueEncoding: 'json'
})

const txs = []

async function getTxs () {
  try {
    const promiseArray = []
    const stream = txDb.createReadStream()

    // const txData = []

    // Add block height to the transaction data and add it to the txs array.
    async function getTxDataWithHeight (txData) {
      try {
        const blockhash = txData.blockhash
        const blockHeader = await bchjs.Blockchain.getBlockHeader(blockhash)
        const blockHeight = blockHeader.height

        txData.blockHeight = blockHeight
        txs.push(txData)
      } catch (err) {
        console.error('Error in getTxDataWithHeight')
        throw err
      }
    }

    stream.on('data', async function (data) {
      try {
        // console.log(data.key, ' = ', JSON.stringify(data.value, null, 2))
        // console.log(data.key)
        // txs.push(data.key)

        promiseArray.push(getTxDataWithHeight(data.value))
      } catch (err) {
        console.error('Error in "data" read steam: ', err)
      }
    })

    stream.on('close', async function () {
      try {
        // console.log(`const txs = ${JSON.stringify(txs, null, 2)}`)

        console.log(`Waiting for ${promiseArray.length} promises`)
        await Promise.all(promiseArray)

        // Sort transactions by blockHeight. (oldest first)
        txs.sort(function (a, b) {
          return a.blockHeight - b.blockHeight
        })
        console.log(`There are ${txs.length} txs`)
        // console.log(`txs: ${JSON.stringify(txs, null, 2)}`)

        const outAry = []

        let currentBlock = txs[0].blockHeight
        let currentObj = {
          height: currentBlock,
          txs: []
        }

        for (let i = 0; i < txs.length; i++) {
          const elem = txs[i]
          console.log(
            `elem.txid: ${elem.txid}, elem.blockHeight: ${elem.blockHeight}`
          )

          if (elem.blockHeight !== currentBlock) {
            // Save the current block data to the output array.
            outAry.push(currentObj)

            // Create a new block object
            currentBlock = elem.blockHeight
            currentObj = {
              height: currentBlock,
              txs: []
            }
          }

          // Add the current transaction to the block object.
          currentObj.txs.push(elem.txid)
        }

        // Push the final element
        outAry.push(currentObj)

        console.log(`${JSON.stringify(outAry, null, 2)}`)
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
getTxs()
