/*
  Unit tests for the config directory
*/

let currentEnv

describe('#config', () => {
  before(() => {
    // Backup the current environment setting.
    currentEnv = process.env.SVC_ENV
  })

  after(() => {
    // Restore the environment setting before starting these tests.
    process.env.SVC_ENV = currentEnv
  })

  it('Should return development environment config', () => {
    // import config from '../../../config/index.js'
    // console.log('config: ', config)
  })
})
