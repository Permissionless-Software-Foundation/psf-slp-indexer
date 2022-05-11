/*
  Utility tool to retrieve token stats on a specific token
*/

// Group
const tokenId =
  'b0f842e4170fc2e3a0a178990509914e02bf5e20a3f395b32a3a3d96fe428eff'

// NFT
// const tokenId =
//   '6f5c47c1a0d22781e6b28c5f119affd73de287b958ce8760ee02211626d4734e'

const level = require('level')

const tokenDb = level(`${__dirname.toString()}/../../leveldb/current/tokens`, {
  valueEncoding: 'json'
})

async function getOneToken () {
  try {
    const tokenData = await tokenDb.get(tokenId)

    tokenData.txsTotal = tokenData.txs.length
    // tokenData.txs = []

    console.log(`${JSON.stringify(tokenData, null, 2)}`)
  } catch (err) {
    console.error(err)
  }
}
getOneToken()
