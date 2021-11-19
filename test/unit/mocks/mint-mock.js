/*
  Mock data for the mint.js library and mint.unit.js unit tests.
*/

const BigNumber = require('bignumber.js')

const mintData = {
  slpData: {
    tokenType: 1,
    txType: 'MINT',
    tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
    mintBatonVout: 2,
    qty: new BigNumber('234123')
  },
  blockHeight: 543614,
  txData: {
    txid: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
    hash: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
    version: 1,
    size: 473,
    locktime: 543613,
    vin: [
      {
        txid: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
        vout: 3,
        scriptSig: {
          asm: '3045022100ac43a871e0f84787001db745e4801b789fd9cd7efa247727ebb5c0c7b66d597302205316328b6501759e9a15ec65202219a433172d153f9f1b68f65f3a63494ba6f0[ALL|FORKID] 0345a5f5dd11c987b346c18c245f0df6d305369984b9b3c7ba465c29875466e374',
          hex: '483045022100ac43a871e0f84787001db745e4801b789fd9cd7efa247727ebb5c0c7b66d597302205316328b6501759e9a15ec65202219a433172d153f9f1b68f65f3a63494ba6f041210345a5f5dd11c987b346c18c245f0df6d305369984b9b3c7ba465c29875466e374'
        },
        sequence: 4294967294,
        address: 'bitcoincash:qqj0durd4qzdddvl2u6sen8n8h6mljtywugqctt9km',
        value: 0.00056266,
        tokenQtyStr: '0',
        tokenQty: 0,
        tokenId: null
      },
      {
        txid: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
        vout: 2,
        scriptSig: {
          asm: '304402202ce2d9d63bc6ab7765d267540fd3429bf7a8d1b50e975391fff3a4506289461a02205daf3f761a9b02d141f22136a6fe019062182c9da1b1d3a5245ff745f1236e45[ALL|FORKID] 02c00b05bc633a48e074bc54dd195b19a470ad6252ac8d306c82a2bd729c1c4c69',
          hex: '47304402202ce2d9d63bc6ab7765d267540fd3429bf7a8d1b50e975391fff3a4506289461a02205daf3f761a9b02d141f22136a6fe019062182c9da1b1d3a5245ff745f1236e45412102c00b05bc633a48e074bc54dd195b19a470ad6252ac8d306c82a2bd729c1c4c69'
        },
        sequence: 4294967294,
        address: 'bitcoincash:qzf72qccdgjrpjpewq8dazlze6jyxzku8q3cauna4t',
        value: 0.00000546,
        tokenQtyStr: '0',
        tokenQty: 0,
        tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
        isMintBaton: true
      }
    ],
    vout: [
      {
        value: 0,
        n: 0,
        scriptPubKey: {
          asm: 'OP_RETURN 5262419 1 1414416717 938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8 2 000000000003928b',
          hex: '6a04534c50000101044d494e5420938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8010208000000000003928b',
          type: 'nulldata'
        },
        tokenQtyStr: '0',
        tokenQty: 0
      },
      {
        value: 0.00000546,
        n: 1,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 1272884e6bd20c4661b5a052f874ff9a14c925b2 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a9141272884e6bd20c4661b5a052f874ff9a14c925b288ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: [
            'bitcoincash:qqf89zzwd0fqc3npkks997r5l7dpfjf9kgx2rqu500'
          ]
        },
        tokenQtyStr: '2.34123',
        tokenQty: 2.34123
      },
      {
        value: 0.00000546,
        n: 2,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 d1eaebf8d1face5bd866e36bd94f43e2ffceef71 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a914d1eaebf8d1face5bd866e36bd94f43e2ffceef7188ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: [
            'bitcoincash:qrg746lc68avuk7cvm3khk20g030lnh0wy5h2k2fqr'
          ]
        },
        tokenQtyStr: '0',
        tokenQty: 0,
        isMintBaton: true
      },
      {
        value: 0.00054848,
        n: 3,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 17178e31b3e468c0d98d57be07bc907bf94d1fdb OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a91417178e31b3e468c0d98d57be07bc907bf94d1fdb88ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: [
            'bitcoincash:qqt30r33k0jx3sxe34tmupaujpaljnglmvqgrrfp2x'
          ]
        },
        tokenQtyStr: '0',
        tokenQty: 0
      }
    ],
    hex: '0100000002f8cda53b43b0ea49991a9bc6c74eb901d2a8b964bc7b8987d76789618ec18c93030000006b483045022100ac43a871e0f84787001db745e4801b789fd9cd7efa247727ebb5c0c7b66d597302205316328b6501759e9a15ec65202219a433172d153f9f1b68f65f3a63494ba6f041210345a5f5dd11c987b346c18c245f0df6d305369984b9b3c7ba465c29875466e374fefffffff8cda53b43b0ea49991a9bc6c74eb901d2a8b964bc7b8987d76789618ec18c93020000006a47304402202ce2d9d63bc6ab7765d267540fd3429bf7a8d1b50e975391fff3a4506289461a02205daf3f761a9b02d141f22136a6fe019062182c9da1b1d3a5245ff745f1236e45412102c00b05bc633a48e074bc54dd195b19a470ad6252ac8d306c82a2bd729c1c4c69feffffff040000000000000000396a04534c50000101044d494e5420938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8010208000000000003928b22020000000000001976a9141272884e6bd20c4661b5a052f874ff9a14c925b288ac22020000000000001976a914d1eaebf8d1face5bd866e36bd94f43e2ffceef7188ac40d60000000000001976a91417178e31b3e468c0d98d57be07bc907bf94d1fdb88ac7d4b0800',
    blockhash: '00000000000000000140f0d813052da59c811a936494a8d8b2d60b215d19e3dc',
    confirmations: 171061,
    time: 1534391953,
    blocktime: 1534391953,
    blockheight: 543614,
    isSlpTx: true,
    tokenTxType: 'MINT',
    tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
    tokenType: 1,
    tokenTicker: 'Bubb2',
    tokenName: 'the new bubbles!',
    tokenDecimals: 5,
    tokenUri: '',
    tokenDocHash: ''
  }
}

const mintAddrDb01 = {
  utxos: [
    {
      txid: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
      vout: 2,
      type: 'baton',
      tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
      address: 'bitcoincash:qzf72qccdgjrpjpewq8dazlze6jyxzku8q3cauna4t'
    }
  ],
  txs: [
    {
      txid: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
      height: 543614
    }
  ],
  balances: []
}

const mintAddrDb02 = {
  utxos: [
    {
      txid: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
      vout: 1,
      type: 'token',
      qty: '234123',
      tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
      address: 'bitcoincash:qqf89zzwd0fqc3npkks997r5l7dpfjf9kgx2rqu500'
    }
  ],
  txs: [
    {
      txid: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
      height: 543614
    }
  ],
  balances: []
}

module.exports = {
  mintData,
  mintAddrDb01,
  mintAddrDb02
}
