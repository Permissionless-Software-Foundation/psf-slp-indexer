/*
  Mocks for the ipfs-coord library
*/

class IPFSCoord {
  async isReady () {
    return true
  }

  async start () {}

  async subscribeToChat() {}
}

export default IPFSCoord;
