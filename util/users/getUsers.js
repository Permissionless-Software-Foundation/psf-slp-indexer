import mongoose from 'mongoose'
import config from '../../config/index.js'
import User from '../../src/models/users.js'

async function getUsers () {
  // Connect to the Mongo Database.
  mongoose.Promise = global.Promise
  mongoose.set('useCreateIndex', true) // Stop deprecation warning.
  await mongoose.connect(
    config.database,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )

  const users = await User.find({}, '-password')
  console.log(`users: ${JSON.stringify(users, null, 2)}`)

  mongoose.connection.close()
}
getUsers()
