/*
  Main class library for the SLP indexing functionality.

  Testing notes:
  - First Genesis tx occurs in block 543376, txid: 545cba6f72a08cbcb08c7d4e8166267942e8cb9a611328805c62fa538e861ba4
  - First Send tx occurs in block 543409
  - First Mint tx occurs in block 543614 txid: ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34

*/

// Public npm libraries.
const level = require('level')
const readline = require('readline')

// Local libraries
const { wlogger } = require('../wlogger')
const RPC = require('./lib/rpc')
const DbBackup = require('./lib/db-backup')
const Cache = require('./lib/cache')
const Transaction = require('./lib/transaction')
const FilterBlock = require('./lib/filter-block')
const Genesis = require('./lib/genesis')
const Send = require('./lib/send')
const Mint = require('./lib/mint')

// Instantiate LevelDB databases
const addrDb = level(`${__dirname.toString()}/../../../leveldb/current/addrs`, {
  valueEncoding: 'json'
})
const txDb = level(`${__dirname.toString()}/../../../leveldb/current/txs`, {
  valueEncoding: 'json'
})
const tokenDb = level(
  `${__dirname.toString()}/../../../leveldb/current/tokens`,
  {
    valueEncoding: 'json'
  }
)
const statusDb = level(
  `${__dirname.toString()}/../../../leveldb/current/status`,
  {
    valueEncoding: 'json'
  }
)

let _this

class SlpIndexer {
  constructor (localConfig = {}) {
    // Encapsulate dependencies
    this.rpc = new RPC()
    this.dbBackup = new DbBackup()
    this.cache = new Cache({ txDb })
    this.transaction = new Transaction({ txDb })
    this.filterBlock = new FilterBlock({
      cache: this.cache,
      transaction: this.transaction
    })
    this.genesis = new Genesis({ addrDb, tokenDb })
    this.send = new Send({ addrDb, tokenDb, txDb, cache: this.cache })
    this.mint = new Mint({ addrDb, tokenDb, txDb, cache: this.cache })

    // State
    this.stopIndexing = false

    _this = this
  }

  async start () {
    try {
      console.log('starting SLP indexer...\n')
      wlogger.info('starting SLP indexer...')

      // Detect 'q' key to stop indexing.
      console.log("Press the 'q' key to stop indexing.")
      readline.emitKeypressEvents(process.stdin)
      if (process.stdin.isTTY) {
        process.stdin.setRawMode(true)
      }
      process.stdin.on('keypress', (str, key) => {
        if (key.name === 'q') {
          console.log(
            'q key detected. Will stop indexing after processing current block.'
          )
          _this.stopIndexing = true
        }

        // Exit immediately if Ctrl+C is pressed.
        if (key.ctrl && key.name === 'c') {
          process.exit(0)
        }
      })

      // Get the current sync status.
      let status
      try {
        status = await statusDb.get('status')
      } catch (err) {
        console.log('Error trying to get status from leveldb')
        // New database, so there is no status. Create it.
        status = {
          startBlockHeight: 543376,
          syncedBlockHeight: 543376
        }

        await statusDb.put('status', status)
      }
      // console.log('status: ', status)
      console.log(
        `Indexer is currently synced to height ${status.syncedBlockHeight}`
      )

      // Get the current block height
      const biggestBlockHeight = await this.rpc.getBlockCount()
      console.log('Current chain block height: ', biggestBlockHeight)

      // Loop through the block heights and index every block.
      for (
        let blockHeight = status.syncedBlockHeight;
        blockHeight < biggestBlockHeight;
        // blockHeight < status.syncedBlockHeight + 5;
        blockHeight++
      ) {
        // Update and save the sync status.
        status.syncedBlockHeight = blockHeight
        await statusDb.put('status', status)
        // console.log(`Indexing block ${blockHeight}`)

        if (this.stopIndexing) {
          console.log(
            `'q' key detected. Stopping indexing. Last block processed was ${
              blockHeight - 1
            }`
          )
          process.exit(0)
        }

        // Get the block hash for the current block height.
        const blockHash = await this.rpc.getBlockHash(blockHeight)
        // console.log("blockHash: ", blockHash);

        // Now get the actual data stored in that block.
        const block = await this.rpc.getBlock(blockHash)
        // console.log('block: ', block)

        // Transactions in the block.
        const txs = block.tx

        const now = new Date()
        console.log(
          `Indexing block ${blockHeight} with ${
            txs.length
          } transactions. ${now.toLocaleString()}`
        )

        // Create a zip-file backup every 'epoch' of blocks
        if (blockHeight % 50 === 0) {
          console.log(
            `Creating zip archive of database at block ${blockHeight}`
          )
          this.dbBackup.zipDb(blockHeight)
        }

        // Filter and sort block transactions, to make indexing more efficient
        // and easier to debug.
        const slpTxs = await this.filterBlock.filterAndSortSlpTxs(
          txs,
          blockHeight
        )
        console.log(`slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)
        console.log(`slpTxs.length: ${slpTxs.length}`)

        // Move on to the next block if there are no SLP transactions.
        if (!slpTxs.length) continue

        // Backup the database
        if (blockHeight % 5 === 0) {
          this.dbBackup.backupDb()
        }

        // const testAddr =
        //   'bitcoincash:qpq5uuctyf6qhh5nlsdxx8guhf7lxhegnsr0lwx4ev'
        // try {
        //   const testData = await addrDb.get(testAddr)
        //   console.log(`${testAddr}: ${JSON.stringify(testData, null, 2)}`)
        // } catch (err) {
        //   /* exit quietly */
        // }

        // Progressively processes TXs in the array.
        await this.processSlpTxs(slpTxs, blockHeight)
      }
    } catch (err) {
      console.log('Error in indexer: ', err)
      // Don't throw an error. This is a top-level function.

      console.log('Restoring backup of database.')
      this.dbBackup.restoreDb()

      // For debugging purposes, exit if there is an error.
      process.exit(0)
    }
  }

  // This is a replacement for the concurrent processing. This processes each
  // slp tx in-order in the array. If an error is found, the current TX is
  // moved to the back of the queue. Processing continues until the array is
  // is empty, or the same TX has failed to process 5 times in a row.
  async processSlpTxs (slpTxs, blockHeight) {
    try {
      const errors = [] // Track errors

      // Loop through each tx in the slpTxs array.
      // const numTxs = slpTxs.length
      // for (let i = 0; i < numTxs; i++) {
      do {
        // Get the first element in the slpTxs array.
        const tx = slpTxs.shift()
        console.log(`tx: ${JSON.stringify(tx, null, 2)}`)
        console.log(`slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)

        try {
          // Attempt to process TX
          await this.processTx({ tx, blockHeight })
        } catch (err) {
          console.log('----> HANDLING ERROR <----')
          console.log(err)

          // Move the tx to the back of the queue.
          slpTxs.push(tx)

          // Get the error object for this tx.
          const errObj = errors.filter((x) => x.tx === tx)

          // Create a new error object if it doesn't exist.
          if (!errObj.length) {
            const newErrObj = {
              tx,
              cnt: 0
            }

            errors.push(newErrObj)

            errObj.push(newErrObj)
          } else {
            // Increment the error count for this tx.
            errObj[0].cnt++
          }

          console.log(`Error count for ${tx}: ${errObj[0].cnt}`)

          const retryCnt = 15
          if (errObj[0].cnt > retryCnt) {
            await this.handleProcessFailure(blockHeight, tx, err.message)
            throw new Error(
              `Failed to process TXID ${tx} after ${retryCnt} tries.`
            )
          }
        }

        // Loop while there are still elements in the slpTxs array.
      } while (slpTxs.length)
    } catch (err) {
      console.error('Error in processSlpTxs()')
      throw err
    }
  }

  // This function is used to roll back to a previous snapshot, when the indexer
  // get stuck.
  // It determines the block height of the problematic parent transaction, then
  // rolls the database to a block height before that transaction.
  async handleProcessFailure (blockHeight, tx, errMsg) {
    try {
      console.log(`Block height: ${blockHeight}`)
      console.log(`errMsg: ${errMsg}`)

      const txData = await this.cache.get(tx)
      // console.log(
      //   `TX Data for problematic TX: ${JSON.stringify(txData, null, 2)}`
      // )

      // Figure out the block height of the parent transaction.
      let targetBlockHeight = blockHeight // Initial (wrong) value.

      // Loop through each Vin and find the oldest parent with the smallest
      // (oldest) block height.
      for (let i = 0; i < txData.vin.length; i++) {
        const thisVin = txData.vin[i]
        // console.log(`thisVin: ${JSON.stringify(thisVin, null, 2)}`)

        // Skip any non-token inputs.
        if (!thisVin.tokenQty) continue

        // Get parent TX data
        const parentTxData = await this.cache.get(thisVin.txid)

        // Get the block height of that transaction.
        // const parentBlockhash = parentTxData.blockhash
        // const parentBlockHeader = await this.rpc.getBlockHeader(parentBlockhash)

        // Find and track the oldest parent block height.
        // if (parentBlockHeader.height < targetBlockHeight) {
        //   targetBlockHeight = parentBlockHeader.height
        // }
        if (parentTxData.blockheight < targetBlockHeight) {
          targetBlockHeight = parentTxData.blockheight
        }
      }
      console.log(`targetBlockHeight: ${targetBlockHeight}`)

      // Round the hight to the nearest 50
      const rollbackHeight = Math.floor(targetBlockHeight / 50) * 50
      console.log(
        `Rolling database back to this block height: ${rollbackHeight}`
      )

      throw new Error(errMsg)

      // Round the hight to the nearest 100
      // const rollbackHeight = Math.floor(targetBlockHeight / 100) * 100
      // console.log(`Rolling database back to this block height: ${rollbackHeight}`)

      // Roll back the database to before the parent transaction.
      // this.dbBackup.unzipDb(rollbackHeight)

      // Kill the process, which will allow the app to shut down, and pm2 or Docker can
      // restart it at a block height prior to the problematic parent transaction.
      // process.exit(0)
    } catch (err) {
      console.error('Error in handleProcessFailure: ', err)
      // Do not throw an error, as this is an error handlilng function.
    }
  }

  // Process the transactions within a block. Uses p-queue to process TXs in
  // parallel.
  async processTx (inData) {
    try {
      const { tx, blockHeight } = inData

      let dataToProcess = false

      try {
        // Is the TX an SLP TX? If not, it will throw an error.
        const slpData = await this.transaction.decodeOpReturn(tx)
        // console.log('slpData: ', slpData)

        // console.log('height: ', blockHeight)

        // Get the transaction information.
        const txData = await _this.cache.get(tx)
        // console.log('txData: ', txData)

        // Combine available data for further processing.
        dataToProcess = {
          slpData,
          blockHeight,
          txData
        }
      } catch (err) {
        /* exit quietly */
        // console.log(err)
      }

      // Process the identified SLP transaction.
      if (dataToProcess) {
        console.log('Inspecting tx: ', tx)
        await this.processData(dataToProcess)
      }

      // console.log(`Completed ${tx}`)
    } catch (err) {
      console.error('Error in processTx()')
      throw err
    }
  }

  // This function routes the data for further processing, based on the type of
  // SLP transaction it is.
  async processData (data) {
    try {
      const { slpData, txData } = data
      // console.log('slpData: ', slpData)

      // For now, skip tokens that are not of type 1 (fungable SLP)
      if (slpData.tokenType !== 1) return

      // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

      // Route the data for processing, based on the type of transaction.
      if (slpData.txType.includes('GENESIS')) {
        await this.genesis.processTx(data)

        console.log(`Genesis tx processed: ${txData.txid}`)
      } else if (slpData.txType.includes('MINT')) {
        console.log('Mint tx')

        // console.log(`Mint data: ${JSON.stringify(data, null, 2)}`)
        await this.mint.processTx(data)

        console.log(`Mint tx processed: ${txData.txid}`)
      } else if (slpData.txType.includes('SEND')) {
        console.log(`Send tx. Block Height: ${data.blockHeight}`)

        await this.send.processTx(data)

        console.log(`Send tx processed: ${txData.txid}`)
      }

      // If a prior library did not explictely mark this TX as invalide,
      if (txData.isValidSlp !== false) {
        // Mark TXID as valid and add the transaction to the database.
        txData.isValidSlp = true
        await txDb.put(txData.txid, txData)
      }

      //
    } catch (err) {
      console.error('Error in processData(): ', err)
      throw err
    }
  }
}

module.exports = SlpIndexer
