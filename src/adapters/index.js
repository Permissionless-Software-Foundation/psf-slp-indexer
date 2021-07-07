/*
  This is a top-level library that encapsulates all the additional Adapters.
  The concept of Adapters comes from Clean Architecture:
  https://troutsblog.com/blog/clean-architecture
*/

// Individual adapter libraries.
const IPFSAdapter = require('./ipfs')
const ipfs = new IPFSAdapter()

module.exports = { ipfs }
