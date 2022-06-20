/*
  Unit tests for the bin/server.js file
*/

// Public npm libraries
const assert = require('chai').assert
const sinon = require('sinon')

// Local libraries
const Server = require('../../../bin/server')

describe('#server', () => {
  let uut, sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    uut = new Server()
  })

  afterEach(() => sandbox.restore())

  describe('#startServer', () => {
    it('should start the server', async () => {
      // Mock dependencies
      sandbox.stub(uut.mongoose, 'connect').resolves()
      sandbox.stub(uut.controllers, 'attachRESTControllers').resolves()
      sandbox.stub(uut.adminLib, 'createSystemUser').resolves(true)
      sandbox.stub(uut.controllers, 'attachControllers').resolves()

      const result = await uut.startServer()
      // console.log('result: ', result)

      assert.property(result, 'env')

      result.close()
    })
  })
})
