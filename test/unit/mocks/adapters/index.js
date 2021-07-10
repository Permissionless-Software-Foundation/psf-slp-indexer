/*
  Mocks for the Adapter library.
*/

const ipfs = {
  ipfsAdapter: {
    ipfs: {}
  },
  ipfsCoordAdapter: {
    ipfsCoord: {}
  }
}

const localdb = {
  Users: class Users {
    static findById () {}
  }
}

module.exports = { ipfs, localdb }
