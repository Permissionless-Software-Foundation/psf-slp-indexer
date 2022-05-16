/*
  This e2e tests requires a live database synced to 738800 or higher.

  This test validates changes made 5/5/22 that assumes a DAG to be valid if
  it grows beyond a certain size.
*/

// Global npm libraries
const BCHJS = require('@psf/bch-js')
const assert = require('chai').assert

// Local libraries
const DAG = require('../../../src/adapters/slp-indexer/lib/dag')
const Cache = require('../../../src/adapters/slp-indexer/lib/cache')
const LevelDb = require('../../../src/adapters/slp-indexer/lib/level-db')

describe('#dag', () => {
  let uut

  beforeEach(() => {
    const levelDb = new LevelDb()
    const { txDb } = levelDb.openDbs()
    const bchjs = new BCHJS()

    const cache = new Cache({ bchjs, txDb })
    uut = new DAG({ cache, txDb })
  })

  describe('#large-dags', () => {
    it('should assume large dag is valid at cut-off', async () => {
      const txid = '0cb4824d3e41790f4af5fe1c402c26d2c75767c250a14eb9b03982a802569c62'
      const tokenId = 'd6876f0fce603be43f15d34348bb1de1a8d688e1152596543da033a060cff798'

      const result = await uut.crawlDag(txid, tokenId)
      console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.equal(result.isValid, true)
    })
  })
})
