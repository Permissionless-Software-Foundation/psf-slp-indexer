/*
  This library makes a webhook call to additional applications to extend
  functionality of the indexer. This library is currently targeted at the
  ipfs-file-pin-service app.
*/

// Global npm libraries
import axios from 'axios'

// Local libraries
import config from '../../config/index.js'

class Webhook {
  constructor () {
    // Encapsulate dependencies
    this.axios = axios
    this.config = config
  }

  // Generate a webhook to pass new claim data to the ssp-api.
  async webhookNewClaim (claim) {
    try {
      const url = `${this.config.pinUrl}/ipfs/pin-claim`

      await this.axios.post(url, claim)

      return true
    } catch (err) {
      console.error('Error in webhookNewClaim(): ', err)
      // throw err
      console.log('Skipping error and continuing processing. Check ipfs-file-pin-service')
    }
  }
}

export default Webhook
