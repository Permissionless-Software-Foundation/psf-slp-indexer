/*
  Mock data for nft-genesis.unit.js
*/

const BigNumber = require('bignumber.js')

const nftGenesisTx01 = {
  txid: '91884ea8e320ac9d133c09cfed84c1d7c063f07f5f2370d018f41018dc68a3e6',
  hash: '91884ea8e320ac9d133c09cfed84c1d7c063f07f5f2370d018f41018dc68a3e6',
  version: 2,
  size: 453,
  locktime: 0,
  vin: [
    {
      txid: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
      vout: 1,
      scriptSig: {
        asm: '304402203e5d90af6f76b90f56b7bdea2d3da1b90e3ad30b7ac52b65d8970f7c31be40a902201f401fdd6c8039887be3d0f15723caa5acc6079008d183657e2fb7c4d681ef13[ALL|FORKID] 02b2d61d3af3a76ac101de91ed70bd620041c3bb0a930af229defcbc0a06a4a881',
        hex: '47304402203e5d90af6f76b90f56b7bdea2d3da1b90e3ad30b7ac52b65d8970f7c31be40a902201f401fdd6c8039887be3d0f15723caa5acc6079008d183657e2fb7c4d681ef13412102b2d61d3af3a76ac101de91ed70bd620041c3bb0a930af229defcbc0a06a4a881'
      },
      sequence: 4294967295,
      address: 'bitcoincash:qz90rpanj52tvwu8wqs8cyf7f48a95wgf5y9u3uvq2',
      value: 0.00000546,
      tokenQty: 5,
      tokenQtyStr: '5',
      tokenId: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59'
    },
    {
      txid: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
      vout: 3,
      scriptSig: {
        asm: '3045022100dee2efc8b83801de379eeced56cd50ed25b10a94141d9835813c362aff917d7f02206ee5854b35979d03202d15c8cbeee3c2bff16f0a91fddb7e4b05eb1126e6f16a[ALL|FORKID] 02b2d61d3af3a76ac101de91ed70bd620041c3bb0a930af229defcbc0a06a4a881',
        hex: '483045022100dee2efc8b83801de379eeced56cd50ed25b10a94141d9835813c362aff917d7f02206ee5854b35979d03202d15c8cbeee3c2bff16f0a91fddb7e4b05eb1126e6f16a412102b2d61d3af3a76ac101de91ed70bd620041c3bb0a930af229defcbc0a06a4a881'
      },
      sequence: 4294967295,
      address: 'bitcoincash:qz90rpanj52tvwu8wqs8cyf7f48a95wgf5y9u3uvq2',
      value: 0.00050444,
      tokenQty: 0,
      tokenQtyStr: '0',
      tokenId: null
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 65 47454e45534953 4e4654303031 4e4654204368696c64 68747470733a2f2f46756c6c537461636b2e63617368 0 0 0 0000000000000001',
        hex: '6a04534c500001410747454e45534953064e4654303031094e4654204368696c641668747470733a2f2f46756c6c537461636b2e636173684c0001004c00080000000000000001',
        type: 'nulldata'
      },
      opReturnData: {
        tokenType: 65,
        txType: 'GENESIS',
        ticker: 'NFT001',
        name: 'NFT Child',
        tokenId: '91884ea8e320ac9d133c09cfed84c1d7c063f07f5f2370d018f41018dc68a3e6',
        documentUri: 'https://FullStack.cash',
        documentHash: '',
        decimals: 0,
        mintBatonVout: 0,
        qty: '1'
      },
      tokenQtyStr: '0',
      tokenQty: 0,
      isMintBaton: true
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 8af187b39514b63b8770207c113e4d4fd2d1c84d OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9148af187b39514b63b8770207c113e4d4fd2d1c84d88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qz90rpanj52tvwu8wqs8cyf7f48a95wgf5y9u3uvq2'
        ]
      },
      tokenQtyStr: '1',
      tokenQty: 1
    },
    {
      value: 0.00049894,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 8af187b39514b63b8770207c113e4d4fd2d1c84d OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9148af187b39514b63b8770207c113e4d4fd2d1c84d88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qz90rpanj52tvwu8wqs8cyf7f48a95wgf5y9u3uvq2'
        ]
      },
      tokenQtyStr: '0',
      tokenQty: 0
    }
  ],
  hex: '0200000002594e3a9604a7676045b486bfbb0cdc2ab65c67f8c4d520c30c93c58263686c04010000006a47304402203e5d90af6f76b90f56b7bdea2d3da1b90e3ad30b7ac52b65d8970f7c31be40a902201f401fdd6c8039887be3d0f15723caa5acc6079008d183657e2fb7c4d681ef13412102b2d61d3af3a76ac101de91ed70bd620041c3bb0a930af229defcbc0a06a4a881ffffffff594e3a9604a7676045b486bfbb0cdc2ab65c67f8c4d520c30c93c58263686c04030000006b483045022100dee2efc8b83801de379eeced56cd50ed25b10a94141d9835813c362aff917d7f02206ee5854b35979d03202d15c8cbeee3c2bff16f0a91fddb7e4b05eb1126e6f16a412102b2d61d3af3a76ac101de91ed70bd620041c3bb0a930af229defcbc0a06a4a881ffffffff030000000000000000476a04534c500001410747454e45534953064e4654303031094e4654204368696c641668747470733a2f2f46756c6c537461636b2e636173684c0001004c0008000000000000000122020000000000001976a9148af187b39514b63b8770207c113e4d4fd2d1c84d88ace6c20000000000001976a9148af187b39514b63b8770207c113e4d4fd2d1c84d88ac00000000',
  blockhash: '0000000000000000022c0cb70f3fb47bd2e05513941b8487ced9cf4da5efccd7',
  confirmations: 10,
  time: 1646666703,
  blocktime: 1646666703,
  blockheight: 730295,
  isSlpTx: true,
  tokenTxType: 'GENESIS',
  tokenId: '91884ea8e320ac9d133c09cfed84c1d7c063f07f5f2370d018f41018dc68a3e6',
  tokenType: 65,
  tokenTicker: 'NFT001',
  tokenName: 'NFT Child',
  tokenDecimals: 0,
  tokenUri: 'https://FullStack.cash',
  tokenDocHash: ''
}

const groupTx01 = {
  txid: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
  hash: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
  version: 2,
  size: 344,
  locktime: 0,
  vin: [
    {
      txid: '7fe3e2dc5cc052435c2a61ad47014caf807329eb09aab6e512e047e703ed91eb',
      vout: 0,
      scriptSig: {
        asm: '3045022100f8ce4d404801149cdc4772d97a7e3af7b106357ec0d3acc4d56d9b1c9153a83102206c06c794d06424f36ed49c3a59cfab19b092bf734c7edc772d21c1dc4db1f004[ALL|FORKID] 02b2d61d3af3a76ac101de91ed70bd620041c3bb0a930af229defcbc0a06a4a881',
        hex: '483045022100f8ce4d404801149cdc4772d97a7e3af7b106357ec0d3acc4d56d9b1c9153a83102206c06c794d06424f36ed49c3a59cfab19b092bf734c7edc772d21c1dc4db1f004412102b2d61d3af3a76ac101de91ed70bd620041c3bb0a930af229defcbc0a06a4a881'
      },
      sequence: 4294967295,
      address: 'bitcoincash:qz90rpanj52tvwu8wqs8cyf7f48a95wgf5y9u3uvq2',
      value: 0.00052086,
      tokenQty: 0,
      tokenQtyStr: '0',
      tokenId: null
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 -1 47454e45534953 4e46545454 4e4654205465737420546f6b656e 68747470733a2f2f46756c6c537461636b2e63617368 0 0 2 0000000000000005',
        hex: '6a04534c500001810747454e45534953054e465454540e4e4654205465737420546f6b656e1668747470733a2f2f46756c6c537461636b2e636173684c0001000102080000000000000005',
        type: 'nulldata'
      },
      opReturnData: {
        tokenType: 129,
        txType: 'GENESIS',
        ticker: 'NFTTT',
        name: 'NFT Test Token',
        tokenId: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
        documentUri: 'https://FullStack.cash',
        documentHash: '',
        decimals: 0,
        mintBatonVout: 2,
        qty: '5'
      },
      tokenQtyStr: '0',
      tokenQty: 0
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 8af187b39514b63b8770207c113e4d4fd2d1c84d OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9148af187b39514b63b8770207c113e4d4fd2d1c84d88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qz90rpanj52tvwu8wqs8cyf7f48a95wgf5y9u3uvq2'
        ]
      },
      tokenQtyStr: '5',
      tokenQty: 5
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 8af187b39514b63b8770207c113e4d4fd2d1c84d OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9148af187b39514b63b8770207c113e4d4fd2d1c84d88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qz90rpanj52tvwu8wqs8cyf7f48a95wgf5y9u3uvq2'
        ]
      },
      tokenQtyStr: '0',
      tokenQty: 0,
      isMintBaton: true
    },
    {
      value: 0.00050444,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 8af187b39514b63b8770207c113e4d4fd2d1c84d OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9148af187b39514b63b8770207c113e4d4fd2d1c84d88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qz90rpanj52tvwu8wqs8cyf7f48a95wgf5y9u3uvq2'
        ]
      },
      tokenQtyStr: '0',
      tokenQty: 0
    }
  ],
  hex: '0200000001eb91ed03e747e012e5b6aa09eb297380af4c0147ad612a5c4352c05cdce2e37f000000006b483045022100f8ce4d404801149cdc4772d97a7e3af7b106357ec0d3acc4d56d9b1c9153a83102206c06c794d06424f36ed49c3a59cfab19b092bf734c7edc772d21c1dc4db1f004412102b2d61d3af3a76ac101de91ed70bd620041c3bb0a930af229defcbc0a06a4a881ffffffff0400000000000000004b6a04534c500001810747454e45534953054e465454540e4e4654205465737420546f6b656e1668747470733a2f2f46756c6c537461636b2e636173684c000100010208000000000000000522020000000000001976a9148af187b39514b63b8770207c113e4d4fd2d1c84d88ac22020000000000001976a9148af187b39514b63b8770207c113e4d4fd2d1c84d88ac0cc50000000000001976a9148af187b39514b63b8770207c113e4d4fd2d1c84d88ac00000000',
  blockhash: '0000000000000000045210262f68de7eca49e36e18080b4eae057acb854071db',
  confirmations: 1,
  time: 1646665685,
  blocktime: 1646665685,
  blockheight: 730293,
  isSlpTx: true,
  tokenTxType: 'GENESIS',
  tokenId: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
  tokenType: 129,
  tokenTicker: 'NFTTT',
  tokenName: 'NFT Test Token',
  tokenDecimals: 0,
  tokenUri: 'https://FullStack.cash',
  tokenDocHash: '',
  isValidSlp: true
}

const addrData01 = {
  utxos: [
    {
      txid: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
      vout: 1,
      type: 'token',
      qty: '234123',
      tokenId:
        '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
      address: 'bitcoincash:qqf89zzwd0fqc3npkks997r5l7dpfjf9kgx2rqu500'
    }
  ],
  txs: [
    {
      txid: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
      height: 543614
    }
  ],
  balances: [
    {
      tokenId:
        '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
      qty: new BigNumber('234123')
    }
  ]
}

const utxo01 = {
  txid: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
  vout: 1,
  type: 'token',
  qty: '234123',
  tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
  address: 'bitcoincash:qqf89zzwd0fqc3npkks997r5l7dpfjf9kgx2rqu500'
}

const addrData02 = {
  utxos: [
    {
      txid: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
      vout: 1,
      type: 'token',
      qty: '5',
      tokenId: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
      tokenType: 129,
      address: 'bitcoincash:qz90rpanj52tvwu8wqs8cyf7f48a95wgf5y9u3uvq2',
      effectiveQty: '5',
      decimals: 0,
      value: 0.00000546
    },
    {
      txid: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
      vout: 2,
      type: 'baton',
      tokenId: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
      address: 'bitcoincash:qz90rpanj52tvwu8wqs8cyf7f48a95wgf5y9u3uvq2'
    }
  ],
  txs: [
    {
      txid: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
      height: 730293
    }
  ],
  balances: [
    {
      tokenId: '046c686382c5930cc320d5c4f8675cb62adc0cbbbf86b4456067a704963a4e59',
      qty: '5'
    }
  ]
}

const slpData01 = {
  tokenType: 65,
  txType: 'GENESIS',
  ticker: 'NFT001',
  name: 'NFT Child',
  tokenId: '91884ea8e320ac9d133c09cfed84c1d7c063f07f5f2370d018f41018dc68a3e6',
  documentUri: 'https://FullStack.cash',
  documentHash: '',
  decimals: 0,
  mintBatonVout: 0,
  qty: '1'
}

module.exports = {
  nftGenesisTx01,
  groupTx01,
  addrData01,
  utxo01,
  addrData02,
  slpData01
}
