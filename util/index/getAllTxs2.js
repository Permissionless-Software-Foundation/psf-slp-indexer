/*
  Utility tool to retrieve all token TXs the indexer indexed, organized by
  block height.
*/

const BCHJS = require('@psf/bch-js')
const bchjs = new BCHJS({ restURL: 'http://localhost:3000/v5/' })

const level = require('level')

const txDb = level(`${__dirname.toString()}/../../leveldb/current/txs`, {
  valueEncoding: 'json'
})

// const txs = []

async function getTxs () {
  try {
    // const promiseArray = []
    const stream = txDb.createReadStream()

    const txids = []

    // const txData = []

    // Add block height to the transaction data and add it to the txs array.
    async function getTxData (txid) {
      try {
        await bchjs.Util.sleep(200)

        const txData = await bchjs.Transaction.get3(txid)
        return txData
      } catch (err) {
        console.error('Error in getTxData')
        throw err
      }
    }

    stream.on('data', async function (data) {
      try {
        // console.log(data.key, ' = ', JSON.stringify(data.value, null, 2))
        // console.log(data.key)
        // txs.push(data.key)

        // promiseArray.push(getTxDataWithHeight(data.value))

        // Get the TXID from the database.
        txids.push(data.key)
      } catch (err) {
        console.error('Error in "data" read steam: ', err)
      }
    })

    stream.on('close', async function () {
      try {
        console.log('Stream closed.')
        // console.log(`const txs = ${JSON.stringify(txs, null, 2)}`)

        console.log(`txids: ${txids.length}`)

        // console.log(`Waiting for ${promiseArray.length} promises`)
        // await Promise.all(promiseArray)
        //
        // // Sort transactions by blockHeight. (oldest first)
        // txs.sort(function (a, b) {
        //   return a.blockHeight - b.blockHeight
        // })
        // console.log(`There are ${txs.length} txs`)
        // // console.log(`txs: ${JSON.stringify(txs, null, 2)}`)
        //
        // const outAry = []
        //
        // let currentBlock = txs[0].blockHeight
        // let currentObj = {
        //   height: currentBlock,
        //   txs: []
        // }
        //
        // for (let i = 0; i < txs.length; i++) {
        //   const elem = txs[i]
        //   console.log(`elem.txid: ${elem.txid}, elem.blockHeight: ${elem.blockHeight}`)
        //
        //   if (elem.blockHeight !== currentBlock) {
        //     // Save the current block data to the output array.
        //     outAry.push(currentObj)
        //
        //     // Create a new block object
        //     currentBlock = elem.blockHeight
        //     currentObj = {
        //       height: currentBlock,
        //       txs: []
        //     }
        //   }
        //
        //   // Add the current transaction to the block object.
        //   currentObj.txs.push(elem.txid)
        // }
        //
        // // Push the final element
        // outAry.push(currentObj)
        //
        // console.log(`${JSON.stringify(outAry, null, 2)}`)
      } catch (err) {
        console.error('Error in "close" read steam: ', err)
      }
    })

    stream.on('end', function () {
      console.log('Stream ended')
      console.log(`txids: ${txids.length}`)

      processTxids()
    })

    async function processTxids () {
      try {
        // console.log(`Waiting for ${promiseArray.length} promises`)
        // await Promise.all(promiseArray)

        // Loop through each txid and get the TX data for it.
        const txData = []
        for (let i = 0; i < txids.length; i++) {
          console.log(`Getting data on txid ${i} out of ${txids.length}`)

          const txid = txids[i]
          const data = await getTxData(txid)
          txData.push(data)
        }

        // Sort transactions by blockHeight. (oldest first)
        txData.sort(function (a, b) {
          return a.blockheight - b.blockheight
        })
        console.log(`There are ${txData.length} txs`)
        // console.log(`txs: ${JSON.stringify(txs, null, 2)}`)

        const outAry = []

        let currentBlock = txData[0].blockHeight
        let currentObj = {
          height: currentBlock,
          txs: []
        }

        for (let i = 0; i < txData.length; i++) {
          const elem = txData[i]
          console.log(`elem.txid: ${elem.txid}, elem.blockHeight: ${elem.blockheight}`)

          if (elem.blockheight !== currentBlock) {
            // Save the current block data to the output array.
            outAry.push(currentObj)

            // Create a new block object
            currentBlock = elem.blockheight
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
        console.error(err)
      }
    }
  } catch (err) {
    console.error(err)
  }
}
getTxs()
