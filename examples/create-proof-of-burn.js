/*
  This example generates a proof-of-burn transaction. This TXID can submitted
  in a Claim as proof of payment for the pinning of a file.
*/

// BCH Address: bitcoincash:qqkg30ryje97al52htqwvveha538y7gttywut3cdqv
// SLP Address: simpleledger:qqkg30ryje97al52htqwvveha538y7gttyz8q2dd7j

import Wallet from 'minimal-slp-wallet'
const WRITE_PRICE = 0.08335233 // Cost in PSF tokens to pin 1MB

// Replace this private key and public address with your own. You can generate
// new values at wallet.fullstack.cash.
const WIF = 'L1tcvcqa5PztqqDH4ZEcUmHA9aSHhTau5E2Zwp1xEK5CrKBrjP3m'

async function start () {
  try {
    // Initialize the wallet.
    const wallet = new Wallet(WIF, {
      interface: 'consumer-api',
      restURL: 'https://free-bch.fullstack.cash'
    })
    await wallet.initialize()

    const PSF_TOKEN_ID = '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0'
    const txid = await wallet.burnTokens(WRITE_PRICE, PSF_TOKEN_ID)

    console.log(`Proof of burn TXID: ${txid}`)
  } catch (err) {
    console.error(err)
  }
}
start()
