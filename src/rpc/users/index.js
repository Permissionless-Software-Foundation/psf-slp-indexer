/*
  This is the JSON RPC router for the users API
*/

class UsersRPC {
  constructor (localConfig) {
    console.log('instantiating UsersRPC')
  }

  userRouter (rpcData) {
    try {
      console.log('userRouter rpcData: ', rpcData)

      if (rpcData.payload.method === 'getAll') this.getAll()
    } catch (err) {
      console.error('Error in UsersRPC/rpcRouter()')
      throw err
    }
  }

  async getAll () {
    try {
      console.log('Executing get all')
    } catch (err) {
      console.error('Error in getAll()')
      throw err
    }
  }
}

module.exports = UsersRPC
