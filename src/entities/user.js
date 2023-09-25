/*
  User Entity
*/

class User {
  validate ({ name, email, password } = {}) {
    // Input Validation
    if (!email || typeof email !== 'string') {
      throw new Error("Property 'email' must be a string!")
    }
    if (!password || typeof password !== 'string') {
      throw new Error("Property 'password' must be a string!")
    }
    if (!name || typeof name !== 'string') {
      throw new Error("Property 'name' must be a string!")
    }

    const userData = { name, email, password }

    return userData
  }
}

export default User
