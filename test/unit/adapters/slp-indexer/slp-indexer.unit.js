/*
  Unit tests for the main slp-indexer/index.js library
*/

// Global npm libraries
// const assert = require('chai').assert
// const sinon = require('sinon')
//
// // Local libraries
// const SlpIndexer = require('../../../../src/adapters/slp-indexer')
// const MockLevel = require('../../../unit/mocks/leveldb-mock')
//
// describe('#slpIndexer', () => {
//   let uut, sandbox
//
//   beforeEach(() => {
//     uut = new SlpIndexer()
//
//     // Restore the sandbox before each test.
//     sandbox = sinon.createSandbox()
//   })
//
//   afterEach(() => sandbox.restore())
//
//   // after(async () => {
//   //
//   // })
//
//   describe('#getStatus()', () => {
//     it('should get status from the database', async () => {
//       uut.statusDb = new MockLevel()
//       sandbox.stub(uut.statusDb, 'get').resolves('test data')
//
//       const result = await uut.getStatus()
//
//       assert.equal(result, 'test data')
//     })
//   })
// })
