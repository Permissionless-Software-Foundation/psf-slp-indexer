/*
  This is a top-level library that encapsulates all the additional Adapters.
  The concept of Adapters comes from Clean Architecture:
  https://troutsblog.com/blog/clean-architecture
*/

// Load individual adapter libraries.
const IPFSAdapter = require('./ipfs')
const LocalDB = require('./localdb')
const LogsAPI = require('./logapi')
const Passport = require('./passport')
const Nodemailer = require('./nodemailer')
const { wlogger } = require('./wlogger')
const JSONFiles = require('./json-files')

// Instantiate adapter libraries.
const ipfs = new IPFSAdapter()
const localdb = new LocalDB()
const logapi = new LogsAPI()
const passport = new Passport()
const nodemailer = new Nodemailer()
const jsonFiles = new JSONFiles()

module.exports = {
  ipfs,
  localdb,
  logapi,
  passport,
  nodemailer,
  wlogger,
  jsonFiles
}
