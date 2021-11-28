/*
  Mock data for send-unit.js
*/
const BigNumber = require('bignumber.js')

const sendData01 = {
  slpData: {
    tokenType: 1,
    txType: 'SEND',
    tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
    amounts: [new BigNumber('4354768657')]
  },
  blockHeight: 543614,
  txData: {
    txid: '4640a734063ea79fa587a3cac38a70a2f6f3db0011e23514024185982110d0fa',
    hash: '4640a734063ea79fa587a3cac38a70a2f6f3db0011e23514024185982110d0fa',
    version: 1,
    size: 585,
    locktime: 543613,
    vin: [
      {
        txid: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
        vout: 1,
        scriptSig: {
          asm: '3045022100e3d5f9a48f9aa1cf7e9ed1992e0281e7300b734ba0e4bd5bb9265b2be60bd71002200ccde53ce7ea9da9df3e834f234f3bea65c2e58c96f8436f93333fd8946a1db2[ALL|FORKID] 02056220984cc2cf5261a27d4f66d31c9ef601a688ca1a5ab81e55b6f0d311be74',
          hex: '483045022100e3d5f9a48f9aa1cf7e9ed1992e0281e7300b734ba0e4bd5bb9265b2be60bd71002200ccde53ce7ea9da9df3e834f234f3bea65c2e58c96f8436f93333fd8946a1db2412102056220984cc2cf5261a27d4f66d31c9ef601a688ca1a5ab81e55b6f0d311be74'
        },
        sequence: 4294967294,
        address: 'bitcoincash:qpaf9wltgmpjlg2vxwwu7zdw5y4z7m277ckxn8cufl',
        value: 0.00000546,
        tokenQtyStr: '0',
        tokenQty: 0,
        tokenId: null
      },
      {
        txid: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
        vout: 1,
        scriptSig: {
          asm: '3045022100bb90d52be9b568f643fdb1a302e9f063be27a9f914e2a6b192cbabf2cbdeaf9302203c275fc8d1b82390bc1726390d361c5266056bddd54dec23efa207c79eacea4a[ALL|FORKID] 024146cfcd0c02e99d6451dc48ad0f97114aeda18fe55c52a10bfc0490f314e6a2',
          hex: '483045022100bb90d52be9b568f643fdb1a302e9f063be27a9f914e2a6b192cbabf2cbdeaf9302203c275fc8d1b82390bc1726390d361c5266056bddd54dec23efa207c79eacea4a4121024146cfcd0c02e99d6451dc48ad0f97114aeda18fe55c52a10bfc0490f314e6a2'
        },
        sequence: 4294967294,
        address: 'bitcoincash:qqf89zzwd0fqc3npkks997r5l7dpfjf9kgx2rqu500',
        value: 0.00000546,
        tokenQtyStr: '2.34123',
        tokenQty: 2.34123,
        tokenId:
          '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8'
      },
      {
        txid: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
        vout: 3,
        scriptSig: {
          asm: '3044022029ab770c249f467b40bb90410429f6d657f9be299baa19a6838d04d972436b450220143660297e8e836bc16d317649fad8c310bdadb4fb61d4e9f6ba11203abe5dae[ALL|FORKID] 02eed4ac9dda3405d9b1ccbbf09f8056f3e7c615924274bd5643238b543d0a1d56',
          hex: '473044022029ab770c249f467b40bb90410429f6d657f9be299baa19a6838d04d972436b450220143660297e8e836bc16d317649fad8c310bdadb4fb61d4e9f6ba11203abe5dae412102eed4ac9dda3405d9b1ccbbf09f8056f3e7c615924274bd5643238b543d0a1d56'
        },
        sequence: 4294967294,
        address: 'bitcoincash:qqt30r33k0jx3sxe34tmupaujpaljnglmvqgrrfp2x',
        value: 0.00054848,
        tokenQtyStr: '0',
        tokenQty: 0,
        tokenId: null
      }
    ],
    vout: [
      {
        value: 0,
        n: 0,
        scriptPubKey: {
          asm: 'OP_RETURN 5262419 1 1145980243 938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8 0000000103907f11',
          hex: '6a04534c500001010453454e4420938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8080000000103907f11',
          type: 'nulldata'
        },
        tokenQty: null,
        tokenQtyStr: null
      },
      {
        value: 0.00000546,
        n: 1,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 059775ff94f65c04e8a6847e74eb9809d8cd779b OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a914059775ff94f65c04e8a6847e74eb9809d8cd779b88ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: ['bitcoincash:qqzewa0ljnm9cp8g56z8ua8tnqya3nthnvhv5hpu8y']
        },
        tokenQtyStr: '43547.68657',
        tokenQty: 43547.68657
      },
      {
        value: 0.00054808,
        n: 2,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 0e330dc9009e1e07831f5a22d4ade8977ab674c8 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a9140e330dc9009e1e07831f5a22d4ade8977ab674c888ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: ['bitcoincash:qq8rxrwfqz0pupurradz949dazth4dn5eqs3mhrucv']
        },
        tokenQty: null,
        tokenQtyStr: null
      }
    ],
    hex: '0100000003f8cda53b43b0ea49991a9bc6c74eb901d2a8b964bc7b8987d76789618ec18c93010000006b483045022100e3d5f9a48f9aa1cf7e9ed1992e0281e7300b734ba0e4bd5bb9265b2be60bd71002200ccde53ce7ea9da9df3e834f234f3bea65c2e58c96f8436f93333fd8946a1db2412102056220984cc2cf5261a27d4f66d31c9ef601a688ca1a5ab81e55b6f0d311be74feffffff34dbf62a45295ae11c2a45f44368218ec64498ac3f7e1434c1993515f53c9dee010000006b483045022100bb90d52be9b568f643fdb1a302e9f063be27a9f914e2a6b192cbabf2cbdeaf9302203c275fc8d1b82390bc1726390d361c5266056bddd54dec23efa207c79eacea4a4121024146cfcd0c02e99d6451dc48ad0f97114aeda18fe55c52a10bfc0490f314e6a2feffffff34dbf62a45295ae11c2a45f44368218ec64498ac3f7e1434c1993515f53c9dee030000006a473044022029ab770c249f467b40bb90410429f6d657f9be299baa19a6838d04d972436b450220143660297e8e836bc16d317649fad8c310bdadb4fb61d4e9f6ba11203abe5dae412102eed4ac9dda3405d9b1ccbbf09f8056f3e7c615924274bd5643238b543d0a1d56feffffff030000000000000000376a04534c500001010453454e4420938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8080000000103907f1122020000000000001976a914059775ff94f65c04e8a6847e74eb9809d8cd779b88ac18d60000000000001976a9140e330dc9009e1e07831f5a22d4ade8977ab674c888ac7d4b0800',
    blockhash:
      '00000000000000000140f0d813052da59c811a936494a8d8b2d60b215d19e3dc',
    confirmations: 171159,
    time: 1534391953,
    blocktime: 1534391953,
    blockheight: 543614,
    isSlpTx: true,
    tokenTxType: 'SEND',
    tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
    tokenType: 1,
    tokenTicker: 'Bubb2',
    tokenName: 'the new bubbles!',
    tokenDecimals: 5,
    tokenUri: '',
    tokenDocHash: ''
  }
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
      txid: '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170',
      vout: 1,
      type: 'token',
      qty: '100',
      tokenId:
        '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170',
      address: 'bitcoincash:qq59p3sway2l5gxkv0dezf57xn4t85d2lyaa2jptwx'
    }
  ],
  txs: [
    {
      txid: '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170',
      height: 716085
    }
  ],
  balances: [
    {
      tokenId:
        '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170',
      qty: '100'
    }
  ]
}

const utxo02 = {
  txid: '401aae1bef9246c42916808c9595d2834791384dcf2e298d2fc294e27b6f5273',
  vout: 2,
  type: 'token',
  qty: '99',
  tokenId: '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170',
  address: 'bitcoincash:qq59p3sway2l5gxkv0dezf57xn4t85d2lyaa2jptwx'
}

const sendData02 = {
  slpData: {
    tokenType: 1,
    txType: 'SEND',
    tokenId: '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170',
    amounts: [new BigNumber('1')]
  },
  blockHeight: 716089,
  txData: {
    txid: '401aae1bef9246c42916808c9595d2834791384dcf2e298d2fc294e27b6f5273',
    hash: '401aae1bef9246c42916808c9595d2834791384dcf2e298d2fc294e27b6f5273',
    version: 2,
    size: 481,
    locktime: 0,
    vin: [
      {
        txid: '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170',
        vout: 3,
        scriptSig: {
          asm: '3045022100c4eeff10549ad63e8cea17df1516c6b124234c200b0c43dc382b429faafa848e02201881b92c0530ea2645ed21104d7beb2d56deecfba8ebb36b7a147c26a61fdf8f[ALL|FORKID] 033dd792cf506a8f2d2bbbf70ddce529f11c5ff2e4fe5a1fc139c82af7f5285a0b',
          hex: '483045022100c4eeff10549ad63e8cea17df1516c6b124234c200b0c43dc382b429faafa848e02201881b92c0530ea2645ed21104d7beb2d56deecfba8ebb36b7a147c26a61fdf8f4121033dd792cf506a8f2d2bbbf70ddce529f11c5ff2e4fe5a1fc139c82af7f5285a0b'
        },
        sequence: 4294967295,
        address: 'bitcoincash:qq59p3sway2l5gxkv0dezf57xn4t85d2lyaa2jptwx',
        value: 0.00016329,
        tokenQtyStr: '0',
        tokenQty: 0,
        tokenId: null
      },
      {
        txid: '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170',
        vout: 1,
        scriptSig: {
          asm: '3045022100964354f4316ce4d580dd8dafe5c459c76389327560b8c7f167c594365e4f6b6302202a3a371d00c5cf712c17425a5e7e383fd952c0b92955598b9d90c5b96ce2fbdc[ALL|FORKID] 033dd792cf506a8f2d2bbbf70ddce529f11c5ff2e4fe5a1fc139c82af7f5285a0b',
          hex: '483045022100964354f4316ce4d580dd8dafe5c459c76389327560b8c7f167c594365e4f6b6302202a3a371d00c5cf712c17425a5e7e383fd952c0b92955598b9d90c5b96ce2fbdc4121033dd792cf506a8f2d2bbbf70ddce529f11c5ff2e4fe5a1fc139c82af7f5285a0b'
        },
        sequence: 4294967295,
        address: 'bitcoincash:qq59p3sway2l5gxkv0dezf57xn4t85d2lyaa2jptwx',
        value: 0.00000546,
        tokenQtyStr: '0',
        tokenQty: 0,
        tokenId: null
      }
    ],
    vout: [
      {
        value: 0,
        n: 0,
        scriptPubKey: {
          asm: 'OP_RETURN 5262419 1 1145980243 59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170 0000000000000001 0000000000000063',
          hex: '6a04534c500001010453454e442059cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170080000000000000001080000000000000063',
          type: 'nulldata'
        },
        tokenQty: null,
        tokenQtyStr: null
      },
      {
        value: 0.00000546,
        n: 1,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 f0d67d9f7e5a63a52961cb3a4f2cb98a1c4d0c03 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a914f0d67d9f7e5a63a52961cb3a4f2cb98a1c4d0c0388ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: ['bitcoincash:qrcdvlvl0edx8fffv89n5nevhx9pcngvqv86wvksj3']
        },
        tokenQtyStr: '1',
        tokenQty: 1
      },
      {
        value: 0.00000546,
        n: 2,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 2850c60ee915fa20d663db91269e34eab3d1aaf9 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a9142850c60ee915fa20d663db91269e34eab3d1aaf988ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: ['bitcoincash:qq59p3sway2l5gxkv0dezf57xn4t85d2lyaa2jptwx']
        },
        tokenQtyStr: '99',
        tokenQty: 99
      },
      {
        value: 0.00014987,
        n: 3,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 2850c60ee915fa20d663db91269e34eab3d1aaf9 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a9142850c60ee915fa20d663db91269e34eab3d1aaf988ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: ['bitcoincash:qq59p3sway2l5gxkv0dezf57xn4t85d2lyaa2jptwx']
        },
        tokenQty: null,
        tokenQtyStr: null
      }
    ],
    hex: '020000000270f13dcb618aad340038b07f053a517459c200374262b8e955b94869b83acd59030000006b483045022100c4eeff10549ad63e8cea17df1516c6b124234c200b0c43dc382b429faafa848e02201881b92c0530ea2645ed21104d7beb2d56deecfba8ebb36b7a147c26a61fdf8f4121033dd792cf506a8f2d2bbbf70ddce529f11c5ff2e4fe5a1fc139c82af7f5285a0bffffffff70f13dcb618aad340038b07f053a517459c200374262b8e955b94869b83acd59010000006b483045022100964354f4316ce4d580dd8dafe5c459c76389327560b8c7f167c594365e4f6b6302202a3a371d00c5cf712c17425a5e7e383fd952c0b92955598b9d90c5b96ce2fbdc4121033dd792cf506a8f2d2bbbf70ddce529f11c5ff2e4fe5a1fc139c82af7f5285a0bffffffff040000000000000000406a04534c500001010453454e442059cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df17008000000000000000108000000000000006322020000000000001976a914f0d67d9f7e5a63a52961cb3a4f2cb98a1c4d0c0388ac22020000000000001976a9142850c60ee915fa20d663db91269e34eab3d1aaf988ac8b3a0000000000001976a9142850c60ee915fa20d663db91269e34eab3d1aaf988ac00000000',
    blockheight: 716088,
    isSlpTx: true,
    tokenTxType: 'SEND',
    tokenId: '59cd3ab86948b955e9b862423700c25974513a057fb0380034ad8a61cb3df170',
    tokenType: 1,
    tokenTicker: 'SLPTEST',
    tokenName: 'SLP Test Token',
    tokenDecimals: 0,
    tokenUri: 'https://FullStack.cash',
    tokenDocHash: '',
    isValidSlp: true
  }
}

module.exports = {
  sendData01,
  addrData01,
  utxo01,
  addrData02,
  utxo02,
  sendData02
}
