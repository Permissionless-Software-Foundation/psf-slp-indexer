/*
  Generates and broadcasts a BCH transaction which includes an OP_RETURN
  including text data in the transaction. The OP_RETURN data complies with
  the format of a Claim from PS006.
*/

// Change the WIF private key for your own key pair.
// hold drip swamp now earn dolphin proof blood inquiry fancy usual install
const WIF = 'L3mFYy5TvWUSQeuiVBtn74XNYDSN83YQBwwWDbuWLHGtr7CyqD4p'
// bitcoincash:qpekzlu75xhgv6y8fv3388xa9gr4j5ywsvp6nkksy7

// Customize the message you want to send
const MESSAGE = 'ipfs://bafybeiejgelijpavmofaxe63ydql23n3focalc3n5z7znm2hjp45khpuxi'

// Store token ID
const STORE = '9fe85e577562e120447f22e8fa0fbeec210d1f3844e05192e8819bde75366dc0'

const BCHJS = require('@psf/bch-js')
const bchjs = new BCHJS()

async function writeOpReturn (msg, wif) {
  try {
    // Create an EC Key Pair from the user-supplied WIF.
    const ecPair = bchjs.ECPair.fromWIF(wif)

    // Generate the public address that corresponds to this WIF.
    const addr = bchjs.ECPair.toCashAddress(ecPair)
    console.log(`Publishing "${msg}" to ${addr}`)

    // Pick a UTXO controlled by this address.
    const utxoData = await bchjs.Electrumx.utxo(addr)
    const utxos = utxoData.utxos
    console.log(`utxos: ${JSON.stringify(utxos, null, 2)}`)

    const utxo = await findBiggestUtxo(utxos)

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
      Buffer.from('00504d00', 'hex'), // Makes message comply with the memo.cash protocol.
      Buffer.from(STORE),
      Buffer.from(`${msg}`)
    ]

    // Compile the script array into a bitcoin-compliant hex encoded string.
    const data = bchjs.Script.encode(script)

    // Add the OP_RETURN output.
    transactionBuilder.addOutput(data, 0)

    // END - Construction of OP_RETURN transaction.

    // Send the same amount - fee.
    transactionBuilder.addOutput(addr, originalAmount - fee)

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
    const txidStr = await bchjs.RawTransactions.sendRawTransaction(hex)
    console.log(`Transaction ID: ${txidStr}`)
    console.log(`https://blockchair.com/bitcoin-cash/transaction/${txidStr}`)
  } catch (err) {
    console.log('Error in writeOpReturn(): ', err)
  }
}
writeOpReturn(MESSAGE, WIF)

// Returns the utxo with the biggest balance from an array of utxos.
async function findBiggestUtxo (utxos) {
  if (!Array.isArray(utxos)) throw new Error('utxos needs to be an array')

  let largestAmount = 0
  let largestIndex = 0

  for (let i = 0; i < utxos.length; i++) {
    const thisUtxo = utxos[i]

    if (thisUtxo.value > largestAmount) {
      // Ask the full node to validate the UTXO. Skip if invalid.
      const isValid = await bchjs.Blockchain.getTxOut(
        thisUtxo.tx_hash,
        thisUtxo.tx_pos
      )
      if (isValid === null) continue

      largestAmount = thisUtxo.value
      largestIndex = i
    }
  }

  return utxos[largestIndex]
}
