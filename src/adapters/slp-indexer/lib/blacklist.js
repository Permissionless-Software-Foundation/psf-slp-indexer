/*
  This library controls blacklists.
*/

// local libraries
const config = require('../../../../config')

class Blacklist {
  constructor () {
    // Encapsulate dependencies
    this.config = config

    this.blacklist = this.config.blacklist
  }

  // This function expects a token ID as input. It compares that token ID
  // against the list of token IDs in the blacklist. It returns true if there
  // is a match. Otherwise it returns false.
  checkBlacklist (tokenId) {
    try {
      // Default value
      let result = false

      for (let i = 0; i < this.blacklist.length; i++) {
        const thisToken = this.blacklist[i]

        if (tokenId === thisToken) {
          result = true
          break
        }
      }

      return result
    } catch (err) {
      console.error('Error in checkBlacklist()')
      throw err
    }
  }
}

module.exports = Blacklist
