/*
  Main class library for the SLP indexing functionality.

  Testing notes:
  - First Genesis tx occurs in block 543376
  - First Send tx occurs in block 543409
  - First Mint tx occurs in block 543614 txid: ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34

*/

// Public npm libraries.
const level = require('level')
const readline = require('readline')

// Local libraries

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

class SlpIndexer {
  async start () {
    try {
      console.log('starting indexer...\n')

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
    } catch (err) {
      console.log('Error in indexer: ', err)
      // Don't throw an error. This is a top-level function.

      console.log('Restoring backup of database.')
      // this.dbBackup.restoreDb()

      // For debugging purposes, exit if there is an error.
      process.exit(0)
    }
  }
}

module.exports = SlpIndexer
