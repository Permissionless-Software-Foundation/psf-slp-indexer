// Global npm libraries
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// Local libraries
import config from '../../../../config/index.js'

const User = new mongoose.Schema({
  type: { type: String, default: 'user' },
  name: { type: String },
  username: { type: String },
  password: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true
  }
})

// Before saving, convert the password to a hash.
User.pre('save', async function preSave (next) {
  const user = this

  if (!user.isModified('password')) {
    return next()
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(user.password, salt)

  user.password = hash

  next(null)
})

// Validate the password by comparing to the saved hash.
User.methods.validatePassword = async function validatePassword (password) {
  const user = this

  const isMatch = await bcrypt.compare(password, user.password)

  return isMatch
}

// Generate a JWT token.
User.methods.generateToken = function generateToken () {
  const user = this

  const token = jwt.sign({ id: user.id }, config.token)
  // console.log(`config.token: ${config.token}`)
  // console.log(`generated token: ${token}`)
  return token
}

// export default mongoose.model('user', User)
export default mongoose.model('user', User)
