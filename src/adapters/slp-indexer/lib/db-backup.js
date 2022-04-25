/*
  A library for handling the backup and restoration of the Level Database.

  The database is backed up prior to processing a block. If the indexer gets
  stuck on a block that it can't process, it will restore the backup before
  exiting. This library controls the backup and restore functionality.
*/

// Global npm librares
const shell = require('shelljs')

// Local libraries
const config = require('../../../../config')

const dbDir = `${__dirname.toString()}/../../../../leveldb`

class DbBackup {
  constructor (localConfig = {}) {
    const { addrDb, tokenDb, txDb, statusDb, pTxDb, utxoDb } = localConfig
    this.addrDb = addrDb
    this.tokenDb = tokenDb
    this.txDb = txDb
    this.statusDb = statusDb
    this.pTxDb = pTxDb
    this.utxoDb = utxoDb
    // TODO: throw error if dbs are not passed in.

    // Encapsulate dependencies
    this.shell = shell
    this.config = config

    // Create the backup directory if it doesn't already exist.
    // this.shell.mkdir(`${dbDir}/backup`)
  }

  // Backup the LevelDB.
  async backupDb () {
    try {
      // Close the databases
      await this.addrDb.close()
      await this.tokenDb.close()
      await this.txDb.close()
      await this.statusDb.close()
      await this.pTxDb.close()
      await this.utxoDb.close()

      // console.log(`dbDir: ${dbDir}`)

      // Delete the old backup
      this.shell.rm('-rf', `${dbDir}/backup`)

      // Create a new backup directory
      this.shell.mkdir(`${dbDir}/backup`)

      // Copy the existing LevelDB files to the backup folder.
      this.shell.cp('-r', `${dbDir}/current/addrs`, `${dbDir}/backup/`)
      this.shell.cp('-r', `${dbDir}/current/status`, `${dbDir}/backup/`)
      this.shell.cp('-r', `${dbDir}/current/tokens`, `${dbDir}/backup/`)
      this.shell.cp('-r', `${dbDir}/current/txs`, `${dbDir}/backup/`)
      this.shell.cp('-r', `${dbDir}/current/ptxs`, `${dbDir}/backup/`)
      this.shell.cp('-r', `${dbDir}/current/utxos`, `${dbDir}/backup/`)

      // Reopen the databases.
      await this.addrDb.open()
      await this.tokenDb.open()
      await this.txDb.open()
      await this.statusDb.open()
      await this.pTxDb.open()
      await this.utxoDb.open()

      return true
    } catch (err) {
      console.error('Error in backupDb()')
      throw err
    }
  }

  async restoreDb () {
    try {
      // Close the databases
      await this.addrDb.close()
      await this.tokenDb.close()
      await this.txDb.close()
      await this.statusDb.close()
      await this.pTxDb.close()
      await this.utxoDb.close()

      // console.log(`dbDir: ${dbDir}`)

      // this.shell.mv(`${dbDir}/backup/addrs`, `${dbDir}/current/`)
      // this.shell.mv(`${dbDir}/backup/status`, `${dbDir}/current/`)
      // this.shell.mv(`${dbDir}/backup/tokens`, `${dbDir}/current/`)
      // this.shell.mv(`${dbDir}/backup/txs`, `${dbDir}/current/`)

      this.shell.rm('-rf', `${dbDir}/current/*`)
      this.shell.cp('-r', `${dbDir}/backup/*`, `${dbDir}/current/`)

      return true
    } catch (err) {
      console.error('Error in restoreDb()')
      throw err
    }
  }

  // Create a zipped copy of the database.
  async zipDb (height, epoch) {
    try {
      // Close the databases
      await this.addrDb.close()
      await this.tokenDb.close()
      await this.txDb.close()
      await this.statusDb.close()
      await this.pTxDb.close()
      await this.utxoDb.close()

      // Create a zip backup of the current database.
      this.shell.exec(
        `zip -r ${dbDir}/zips/slp-indexer-${height}.zip ${dbDir}/current`
      )

      // const deleteBackup = parseInt(process.env.DELETE_BACKUP)
      const backupQty = this.config.backupQty
      if (backupQty && epoch) {
        // Delete the oldest backup.
        const oldHeight = height - (epoch * backupQty)
        const rmStr = `${dbDir}/zips/slp-indexer-${oldHeight}.zip`
        console.log(`rmStr: ${rmStr}`)
        this.shell.rm(rmStr)
      }

      // Reopen the databases.
      console.log('Reopening database')
      await this.addrDb.open()
      await this.tokenDb.open()
      await this.txDb.open()
      await this.statusDb.open()
      await this.pTxDb.open()
      await this.utxoDb.open()
    } catch (err) {
      console.error('Error in zipDb')
      throw err
    }
  }

  // Unzip a previous backup to roll the database back.
  // Height must match a zip file.
  async unzipDb (height) {
    try {
      // Close the databases
      await this.addrDb.close()
      await this.tokenDb.close()
      await this.txDb.close()
      await this.statusDb.close()
      await this.pTxDb.close()
      await this.utxoDb.close()

      // Wipe the old database
      this.shell.cd(`${dbDir}/../`)
      this.shell.exec('./wipe-db.sh')

      // Change to the zips directory.
      this.shell.cd(`${dbDir}/zips`)

      // Remove any previous unzip backup.
      this.shell.rm('-rf', 'home')

      // Unzip a previous archive.
      this.shell.exec(`unzip slp-indexer-${height}.zip`)

      // Restore the backup
      this.shell.exec('./restore-auto.sh')
    } catch (err) {
      console.error('Error in unzipDb: ', err)
    }
  }
}

module.exports = DbBackup
