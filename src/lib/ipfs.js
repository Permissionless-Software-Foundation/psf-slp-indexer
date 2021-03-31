/*
  This support library handles the connection to the IPFS network. It instantiates
  the IPFS node and starts the ipfs-coord library.
*/

// Global npm libraries
const IPFS = require('ipfs')
const IpfsCoord = require('ipfs-coord')
const BCHJS = require('@psf/bch-js')

class IPFSLib {
  constructor (localConfig) {
    // Encapsulate dependencies
    this.IPFS = IPFS
    this.IpfsCoord = IpfsCoord
    this.bchjs = new BCHJS()
  }

  // This is a 'macro' start method. It kicks off several smaller methods that
  // start the various subcomponents of this IPFS library.
  async start () {
    await this.startIpfs()
    await this.startIpfsCoord()
    console.log('IPFS is ready.')
  }

  async startIpfs () {
    try {
      // Ipfs Options
      const ipfsOptions = {
        repo: './ipfsdata',
        start: true,
        EXPERIMENTAL: {
          pubsub: true
        },
        config: {
          relay: {
            enabled: true, // enable circuit relay dialer and listener
            hop: {
              enabled: true // enable circuit relay HOP (make this node a relay)
            }
          },
          pubsub: true // enable pubsub
        }
      }

      // Create a new IPFS node.
      this.ipfs = await this.IPFS.create(ipfsOptions)
    } catch (err) {
      console.error('Error in startIpfs()')
      throw err
    }
  }

  async startIpfsCoord () {
    try {
      this.ipfsCoord = new this.IpfsCoord({
        ipfs: this.ipfs,
        type: 'node.js',
        bchjs: this.bchjs
      })

      await this.ipfsCoord.isReady()
    } catch (err) {
      console.error('Error in startIpfsCoord()')
      throw err
    }
  }
}

module.exports = IPFSLib
