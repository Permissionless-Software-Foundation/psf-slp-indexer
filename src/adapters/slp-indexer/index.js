/*
  Main class library for the SLP indexing functionality.

  Testing notes:
  - First Genesis tx occurs in block 543376, txid: 545cba6f72a08cbcb08c7d4e8166267942e8cb9a611328805c62fa538e861ba4
  - First Send tx occurs in block 543409, txid: 874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e
  - First Mint tx occurs in block 543614 txid: ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34

  ToDo: Wrap rpc calls in processBlock() in a retry wrapper.

*/

// Constants use to configure indexing thresholds. Customize as needed.
const EPOCH = 400 // blocks between backups
const RETRY_CNT = 10 // Number of retries before exiting the indexer

// Local libraries
const { wlogger } = require('../wlogger')
const LevelDb = require('./lib/level-db')
const RPC = require('./lib/rpc')
const DbBackup = require('./lib/db-backup')
const Cache = require('./lib/cache')
const Transaction = require('./lib/transaction')
const FilterBlock = require('./lib/filter-block')
const Genesis = require('./tx-types/genesis')
const NftGenesis = require('./tx-types/nft-genesis')
const Send = require('./tx-types/send')
const Mint = require('./tx-types/mint')
const StartStop = require('./lib/start-stop')
const ZMQ = require('./lib/zmq')
const Utils = require('./lib/utils')
const ManagePTXDB = require('./lib/ptxdb')
const Query = require('./lib/query')
const Blacklist = require('./lib/blacklist')

class SlpIndexer {
  constructor (localConfig = {}) {
    // Open the indexer databases.
    this.levelDb = new LevelDb()
    const { addrDb, tokenDb, txDb, statusDb, pTxDb, utxoDb } =
      this.levelDb.openDbs()
    this.addrDb = addrDb
    this.tokenDb = tokenDb
    this.txDb = txDb
    this.statusDb = statusDb
    this.pTxDb = pTxDb
    this.utxoDb = utxoDb

    // Encapsulate dependencies
    this.rpc = new RPC()
    this.dbBackup = new DbBackup({
      addrDb,
      tokenDb,
      txDb,
      statusDb,
      pTxDb,
      utxoDb
    })
    this.cache = new Cache({ txDb })
    this.transaction = new Transaction({ txDb })
    this.filterBlock = new FilterBlock({
      cache: this.cache,
      transaction: this.transaction,
      addrDb,
      tokenDb,
      utxoDb,
      txDb
    })
    this.genesis = new Genesis({ addrDb, tokenDb, utxoDb })
    this.nftGenesis = new NftGenesis({ addrDb, tokenDb, utxoDb, txDb, cache: this.cache })
    this.send = new Send({ addrDb, tokenDb, txDb, utxoDb, cache: this.cache })
    this.mint = new Mint({ addrDb, tokenDb, txDb, utxoDb, cache: this.cache })
    this.startStop = new StartStop()
    this.zmq = new ZMQ()
    this.utils = new Utils()
    this.managePtxdb = new ManagePTXDB({ pTxDb })
    this.query = new Query({ addrDb, tokenDb, txDb, statusDb, pTxDb })
    this.statusDb = statusDb
    this.blacklist = new Blacklist()

    // state
    this.indexState = 'phase0'

    // _this = this
  }

  async start () {
    try {
      wlogger.info('starting SLP indexer...')

      // Capture keyboard input to determine when to shut down.
      this.startStop.initStartStop()

      // Get the current sync status.
      const status = await this.getStatus()
      console.log(
        `Indexer is currently synced to height ${status.syncedBlockHeight}`
      )

      // Get the current block height
      let biggestBlockHeight = await this.rpc.getBlockCount()
      console.log('Current chain block height: ', biggestBlockHeight)
      console.log('Starting bulk indexing.')

      // Update the status database with the chain block height.
      status.chainBlockHeight = biggestBlockHeight
      await this.statusDb.put('status', status)

      // Loop through the block heights and index every block.
      // Phase 1: Bulk indexing

      let blockHeight = status.syncedBlockHeight
      do {
        // Update and save the sync status.
        status.syncedBlockHeight = blockHeight
        await this.statusDb.put('status', status)
        // console.log(`Indexing block ${blockHeight}`)

        // Shut down elegantly if the 'q' key was detected.
        const shouldStop = this.startStop.stopStatus()
        if (shouldStop) {
          console.log(
            `'q' key detected. Stopping indexing. Last block processed was ${
              blockHeight - 1
            }`
          )
          process.exit(0)
        }

        // Process all SLP txs in the block.
        await this.processBlock(blockHeight)

        // Change phase after processing first block. This prevents unneeded
        // zipping of the database after a restart.
        this.indexState = 'phase1'

        // Wait a few seconds between loops.
        // await this.utils.sleep(1000)

        blockHeight++
        biggestBlockHeight = await this.rpc.getBlockCount()
      } while (blockHeight <= biggestBlockHeight)
      // } while (blockHeight < 730199)
      // } while (blockHeight < 730296)
      // console.log('Target block height reached.')
      // process.exit(0)

      // Debugging: state the current state of the indexer.
      console.log(`Leaving ${this.indexState}`)
      this.indexState = 'phase2'

      blockHeight = status.syncedBlockHeight
      // if (this.indexState === 'phase1') {
      //   // Update and save the sync status.
      //   status.syncedBlockHeight++
      //   await statusDb.put('status', status)
      //   blockHeight = status.syncedBlockHeight
      // }

      console.log(
        `\n\nBulk Indexing has completed. Last block synced: ${status.syncedBlockHeight}\n`
      )

      // Temp code for debugging. Take a backup at this point.
      // await this.dbBackup.zipDb(status.syncedBlockHeight)

      // Get the current block height
      biggestBlockHeight = await this.rpc.getBlockCount()
      console.log('Current chain block height: ', biggestBlockHeight)
      console.log('Starting indexing of mempool')

      // process.exit(0)

      // Start connection to ZMQ/websocket interface on full node.
      await this.zmq.connect()
      console.log('Connected to ZMQ port of full node.')

      // Enter permanent loop, processing ZMQ input.
      do {
        blockHeight = await this.rpc.getBlockCount()
        // console.log('Current chain block height: ', blockHeight)
        // console.log(`status.syncedBlockHeight: ${status.syncedBlockHeight}`)

        // On a new transaction, process it.
        const tx = this.zmq.getTx()
        // console.log('tx: ', tx)
        if (tx) {
          try {
            const inData = {
              tx,
              blockHeight
            }
            // console.log(`inData: ${JSON.stringify(inData, null, 2)}`)
            await this.processTx(inData)
          } catch (err) {
            /* exit quietly */
          }
        }

        // On a new block, process it.
        const block = this.zmq.getBlock()
        if (block) {
          console.log('block: ', block)

          const blockHeader = await this.rpc.getBlockHeader(block.hash)
          blockHeight = blockHeader.height
          console.log(`processing block ${blockHeight}`)

          // process.exit(0)

          // Update the status DB.
          status.syncedBlockHeight = blockHeight
          await this.statusDb.put('status', status)

          // Process the block.
          await this.processBlock(blockHeight)
        }

        // Check for block re-org. Roll back database if one is encountered.

        // Every 10 blocks, make a backup.

        // Wait a few seconds between loops.
        await this.utils.sleep(50)
      } while (1)
    } catch (err) {
      console.log('Error in indexer: ', err)
      // Don't throw an error. This is a top-level function.

      // console.log('Restoring backup of database.')
      // await this.dbBackup.restoreDb()

      // For debugging purposes, exit if there is an error.
      process.exit(0)
    }
  }

  // Get the status of the indexer from the status database. Initialize if
  // this is a new run.
  async getStatus () {
    try {
      const status = await this.statusDb.get('status')
      return status
    } catch (err) {
      console.log('Error trying to get status from leveldb')
      // New database, so there is no status. Create it.
      const status = {
        startBlockHeight: 543376,
        syncedBlockHeight: 543376
      }

      await this.statusDb.put('status', status)

      return status
    }
  }

  // Processes an entire block.
  async processBlock (blockHeight) {
    try {
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
      if (blockHeight % EPOCH === 0 && this.indexState !== 'phase0') {
        // Clean up stale TXs in the pTxDb.
        await this.managePtxdb.cleanPTXDB(blockHeight)

        console.log(`this.indexState: ${this.indexState}`)
        console.log(`Creating zip archive of database at block ${blockHeight}`)
        await this.dbBackup.zipDb(blockHeight, EPOCH)
      }

      // Filter and sort block transactions, to make indexing more efficient
      // and easier to debug.
      const slpTxs = await this.filterBlock.filterAndSortSlpTxs2(
        txs,
        blockHeight
      )
      // console.log(`slpTxs: ${JSON.stringify(slpTxs, null, 2)}`)
      console.log(`slpTxs: ${slpTxs.length}`)

      // If the block has no txs after filtering for SLP txs, then return.
      if (!slpTxs.length) return

      // Progressively processes TXs in the array.
      await this.processSlpTxs(slpTxs, blockHeight)
    } catch (err) {
      console.error('Error in processBlock()')
      throw err
    }
  }

  // This processes each SLP tx in-order in the array. If an error is found,
  // the current TX is moved to the back of the queue. Processing continues
  // until the array is empty, or the same TX has failed to process RETRY_CNT
  // times in a row.
  async processSlpTxs (slpTxs, blockHeight) {
    try {
      const errors = [] // Track errors

      // Loop through each tx in the slpTxs array, until all the TXs have been
      // removed from the array.
      do {
        // Get the first element in the slpTxs array.
        const tx = slpTxs.shift()
        console.log(`tx: ${JSON.stringify(tx, null, 2)}`)
        console.log(`slpTxs: ${slpTxs.length}`)

        try {
          // Attempt to process TX
          await this.processTx({ tx, blockHeight })
        } catch (err) {
          // Temp. Seeing if we can skip errors when in phase 2.
          if (this.indexState === 'phase2') {
            console.log(
              'Skipping error because indexer is in phase 2, indexing the tip of the chain.'
            )
            return
          }

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

          const retryCnt = RETRY_CNT
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
      const rollbackHeight = Math.floor(targetBlockHeight / EPOCH) * EPOCH
      console.log(
        `Rolling database back to this block height: ${rollbackHeight}`
      )

      // Roll back the database to before the parent transaction.
      await this.dbBackup.unzipDb(rollbackHeight)

      // Kill the process, which will allow the app to shut down, and pm2 or Docker can
      // restart it at a block height prior to the problematic parent transaction.
      process.exit(0)
    } catch (err) {
      console.error('Error in handleProcessFailure: ', err)
      // Do not throw an error, as this is an error handlilng function.
    }
  }

  // Process a single SLP transaction.
  async processTx (inData) {
    try {
      const { tx, blockHeight } = inData

      let dataToProcess = false

      // Check the pTxs database to see if this transaction has already been
      // processed. If so, skip it.
      try {
        // Will throw an error if tx is not found, which is the same as false.
        await this.pTxDb.get(tx)

        // If TXID exists in the DB, then it's been processed. Exit.
        console.log(`${tx} already processed. Skipping.`)
        return
      } catch (err) {
        /* exit quietly */
      }

      try {
        // Is the TX an SLP TX? If not, it will throw an error.
        const slpData = await this.transaction.decodeOpReturn(tx)
        // console.log('slpData: ', slpData)

        // console.log('height: ', blockHeight)

        // Get the transaction information.
        const txData = await this.cache.get(tx)
        // console.log('txData: ', txData)

        // Skip this TX if it is for a token that is in the blacklist.
        const tokenId = slpData.tokenId
        const isInBlacklist = this.blacklist.checkBlacklist(tokenId)
        if (isInBlacklist) {
          console.log(
            `Skipping TX ${tx}, it contains...\ntoken ${tokenId} which is in the blacklist.`
          )

          // Mark the transaction validity as 'null' to signal that this tx
          // has not been processed and the UTXO should be ignored.
          txData.isValidSlp = null
          await this.txDb.put(tx, txData)

          // Save the TX to the processed database.
          await this.pTxDb.put(tx, blockHeight)

          throw new Error('TX is for token in blacklist')
        }

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

      // Save the TX to the processed database.
      await this.pTxDb.put(tx, blockHeight)

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

      // Skip tokens with an unknown token type.
      // But mark the TX as 'null', to signal to wallets that the UTXO should
      // be segregated so that it's not burned.
      if (slpData.tokenType !== 1 && slpData.tokenType !== 65 && slpData.tokenType !== 129) {
        console.log(
          `Skipping TX ${txData.txid}, it is tokenType ${slpData.tokenType}, which is not yet supported.`
        )

        // Mark the transaction validity as 'null' to signal that this tx
        // has not been processed and the UTXO should be   ignored.
        txData.isValidSlp = null
        await this.txDb.put(txData.txid, txData)

        return
      }

      // console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

      // Route the data for processing, based on the type of transaction.
      if (slpData.txType.includes('GENESIS')) {
        if (slpData.tokenType === 65) {
          // NFT Genesis

          await this.nftGenesis.processTx(data)

          console.log(`NFT Genesis tx processed: ${txData.txid}`)
        } else {
          // Type 1 and Group GENESIS

          await this.genesis.processTx(data)

          console.log(`Genesis tx processed: ${txData.txid}`)
        }
      } else if (slpData.txType.includes('MINT')) {
        console.log(`Mint tx for token ID: ${slpData.tokenId}`)

        // console.log(`Mint data: ${JSON.stringify(data, null, 2)}`)
        await this.mint.processTx(data)

        console.log(`Mint tx processed: ${txData.txid}`)
      } else if (slpData.txType.includes('SEND')) {
        console.log(`Send tx. Block Height: ${data.blockHeight}`)

        await this.send.processTx(data)

        console.log(`Send tx processed: ${txData.txid}`)
      }

      // If a prior library did not explictely mark this TX as invalid,
      if (txData.isValidSlp !== false && txData.isValidSlp !== null) {
        // Mark TXID as valid.
        txData.isValidSlp = true
      }

      // Add the transaction to the database
      await this.txDb.put(txData.txid, txData)

      //
    } catch (err) {
      console.error('Error in processData(): ', err)
      throw err
    }
  }
}

module.exports = SlpIndexer
