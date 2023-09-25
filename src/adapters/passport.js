/*
  koa-passport is an authorization library used for different authentication schemes.
*/

import passport from 'koa-passport'

let _this
class Passport {
  constructor () {
    _this = this
    this.passport = passport
  }

  async authUser (ctx) {
    return new Promise((resolve, reject) => {
      try {
        if (!ctx) throw new Error('ctx is required')

        _this.passport.authenticate('local', (err, user) => {
          try {
            if (err) throw err

            resolve(user)
          } catch (err) {
            return reject(err)
          }
        })(ctx, null)
      } catch (err) {
        return reject(err)
      }
    })
  }
}

export default Passport
