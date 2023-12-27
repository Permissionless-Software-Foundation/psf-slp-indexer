/*
  The create-proof-of-burn.js example should be run before this example.

  The TXID generated by the first example will be used in this example to
  generate a Claim that will pin IPFS content.

  First TX:
  TXID: 09555a14fd2de71a54c0317a8a22ae17bc43512116b063e263e41b3fc94f8905
  Block: 825,467
*/

// The IPFS CID that should be pinned.
// BCH Address: bitcoincash:qqkg30ryje97al52htqwvveha538y7gttywut3cdqv
// SLP Address: simpleledger:qqkg30ryje97al52htqwvveha538y7gttyz8q2dd7j

import Wallet from 'minimal-slp-wallet'
const CID = 'bafybeicd455l7c6mxiogptqcg6md474qmzzmzobgzu4vfms4wnek2hxguy'
const POB_TXID = '5bfcdca588830245dcd9353f45bb1d06640d7fada0000160ae2789a887b23766'

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

    // Get info and libraries from the wallet.
    const addr = wallet.walletInfo.address
    const bchjs = wallet.bchjs

    // Sign a message with the private key
    // const sig = bchjs.BitcoinCash.signMessageWithPrivKey(privKey, POB_TXID)

    // Generate the object that will be included in the Claim.
    const claimObj = {
      pow: POB_TXID,
      cid: `ipfs://${CID}`
    }
    const opReturnStr = JSON.stringify(claimObj)
    console.log(opReturnStr)

    let utxos = await wallet.getUtxos()
    utxos = utxos.bchUtxos
    // console.log('utxos: ', utxos)

    const utxo = bchjs.Utxo.findBiggestUtxo(utxos)
    // console.log('utxo: ', utxo)

    // instance of transaction builder
    const transactionBuilder = new bchjs.TransactionBuilder()

    const originalAmount = utxo.value
    const vout = utxo.tx_pos
    const txid = utxo.tx_hash

    // add input with txid and index of vout
    transactionBuilder.addInput(txid, vout)

    // TODO: Compute the 1 sat/byte fee.
    const fee = 500

    // BEGIN - Construction of OP_RETURN transaction.

    // Add the OP_RETURN to the transaction.
    const script = [
      bchjs.Script.opcodes.OP_RETURN,
      Buffer.from('00510000', 'hex'), // Makes message comply with the memo.cash protocol.
      Buffer.from(POB_TXID, 'hex'),
      Buffer.from(CID)
    ]

    // Compile the script array into a bitcoin-compliant hex encoded string.
    const data = bchjs.Script.encode(script)

    // Add the OP_RETURN output.
    transactionBuilder.addOutput(data, 0)

    // END - Construction of OP_RETURN transaction.

    // Send the same amount - fee.
    transactionBuilder.addOutput(addr, originalAmount - fee)

    // Create an EC Key Pair from the user-supplied WIF.
    const ecPair = bchjs.ECPair.fromWIF(WIF)

    // Sign the transaction with the HD node.
    let redeemScript
    transactionBuilder.sign(
      0,
      ecPair,
      redeemScript,
      transactionBuilder.hashTypes.SIGHASH_ALL,
      originalAmount
    )

    // build tx
    const tx = transactionBuilder.build()

    // output rawhex
    const hex = tx.toHex()
    // console.log(`TX hex: ${hex}`);
    // console.log(` `);

    // Broadcast transation to the network
    // const txidStr = await bchjs.RawTransactions.sendRawTransaction(hex)
    const txidStr = await wallet.broadcast({ hex })
    console.log(`Claim Transaction ID: ${txidStr}`)
    console.log(`https://blockchair.com/bitcoin-cash/transaction/${txidStr}`)
  } catch (err) {
    console.error(err)
  }
}
start()