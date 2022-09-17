/*
  Unit tests for the bin/server.js file
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'

// Local libraries
import Server from '../../../bin/server.js'

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
      sandbox.stub(uut.controllers, 'initAdapters').resolves()
      sandbox.stub(uut.controllers, 'initUseCases').resolves()
      sandbox.stub(uut.controllers, 'attachRESTControllers').resolves()
      sandbox.stub(uut.adminLib, 'createSystemUser').resolves(true)
      sandbox.stub(uut.controllers, 'attachControllers').resolves()
      uut.config.env = 'dev'

      const result = await uut.startServer()
      // console.log('result: ', result)

      assert.property(result, 'env')

      // Turn off the server.
      uut.server.close()

      // Restor config env
      uut.config.env = 'test'
    })

    it('should exit on failure', async () => {
      // Force an error
      sandbox.stub(uut.mongoose, 'connect').rejects(new Error('test error'))

      // Prevent default behavior of exiting the program.
      sandbox.stub(uut, 'sleep').resolves()
      sandbox.stub(uut.process, 'exit').returns()

      await uut.startServer()

      // Not throwing an error is a success
    })
  })

  describe('#sleep', () => {
    it('should execute', async () => {
      await uut.sleep(1)
    })
  })
})
