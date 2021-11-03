/*
  This library encapsulates code concerned with MongoDB and Mongoose models.
*/

// Load Mongoose models.
const Users = require('./models/users')

class LocalDB {
  constructor () {
    // Encapsulate dependencies
    this.Users = Users
  }
}

module.exports = LocalDB
