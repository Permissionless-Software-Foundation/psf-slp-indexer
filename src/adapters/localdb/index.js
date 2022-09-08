/*
  This library encapsulates code concerned with MongoDB and Mongoose models.
*/

// Load Mongoose models.
import Users from './models/users.js'

class LocalDB {
  constructor () {
    // Encapsulate dependencies
    this.Users = Users
  }
}

export default LocalDB
