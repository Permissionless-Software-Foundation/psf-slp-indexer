/*
  A library for handling the backup and restoration of the Level Database.

  The database is backed up prior to processing a block. If the indexer gets
  stuck on a block that it can't process, it will restore the backup before
  exiting. This library controls the backup and restore functionality.
*/

const shell = require('shelljs')

const dbDir = `${__dirname.toString()}/../../../../leveldb`

class DbBackup {
  constructor () {
    this.shell = shell

    // Create the backup directory if it doesn't already exist.
    // this.shell.mkdir(`${dbDir}/backup`)
  }

  // Backup the LevelDB.
  backupDb () {
    try {
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

      return true
    } catch (err) {
      console.error('Error in backupDb()')
      throw err
    }
  }

  restoreDb () {
    try {
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
  zipDb (height) {
    try {
      this.shell.exec(
        `zip -r ${dbDir}/zips/slp-indexer-${height}.zip ${dbDir}/current`
      )
    } catch (err) {
      console.error('Error in zipDb')
      throw err
    }
  }

  // Unzip a previous backup to roll the database back.
  // Height must match a zip file.
  unzipDb (height) {
    try {
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
      this.shell.exec('./restore.sh')
    } catch (err) {
      console.error('Error in unzipDb: ', err)
    }
  }
}

module.exports = DbBackup