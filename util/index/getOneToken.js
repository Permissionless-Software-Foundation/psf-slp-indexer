/*
  Utility tool to retrieve token stats on a specific token
*/

const tokenId =
  'cc03769635d94b2cfacee7209b94666d18d822f823fcfe25823d8986373a00e8'

const level = require('level')

const tokenDb = level(`${__dirname.toString()}/../../leveldb/current/tokens`, {
  valueEncoding: 'json'
})

async function getOneToken () {
  try {
    const tokenData = await tokenDb.get(tokenId)

    console.log(`${JSON.stringify(tokenData, null, 2)}`)
  } catch (err) {
    console.error(err)
  }
}
getOneToken()
