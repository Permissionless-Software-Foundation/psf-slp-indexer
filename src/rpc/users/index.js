/*
  This is the JSON RPC router for the users API
*/

class UsersRPC {
  constructor (localConfig) {
    console.log('instantiating UsersRPC')
  }

  async userRouter (rpcData) {
    try {
      console.log('userRouter rpcData: ', rpcData)

      if (rpcData.payload.method === 'getAll') return await this.getAll()
    } catch (err) {
      console.error('Error in UsersRPC/rpcRouter()')
      throw err
    }
  }

  // Get all Users.
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
