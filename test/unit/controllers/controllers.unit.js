/*
  Unit tests for controllers index.js file.
*/

// Public npm libraries
// const assert = require('chai').assert
const sinon = require('sinon')

const adapters = require('../../../src/adapters')
const { attachControllers } = require('../../../src/controllers')

describe('#Controllers', () => {
  // let uut
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => sandbox.restore())

  describe('#attachControllers', () => {
    it('should attach the controllers', async () => {
      // mock IPFS
      sandbox.stub(adapters.ipfs, 'start').resolves({})
      adapters.ipfs.ipfsCoordAdapter = {
        attachRPCRouter: () => {}
      }

      const app = {
        use: () => {}
      }

      await attachControllers(app)
    })
  })
})
