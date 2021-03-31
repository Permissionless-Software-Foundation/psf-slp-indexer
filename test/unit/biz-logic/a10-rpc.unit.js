/*
  Unit tests for the rpc/index.js library.
*/

// Public npm libraries
const jsonrpc = require('jsonrpc-lite')

const JSONRPC = require('../../../src/rpc')

describe('#JSON RPC', () => {
  let uut

  beforeEach(() => {
    uut = new JSONRPC()
  })

  describe('#router', () => {
    it('should do something', async () => {
      // const request = {
      //   'users', // id
      //   'getAll', // method
      //   {}
      // }
      const json = jsonrpc.request('users', 'getAll', {})

      const str = JSON.stringify(json)

      await uut.router(str)
    })
  })
})
