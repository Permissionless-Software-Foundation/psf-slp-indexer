/*
  Mock data for send-unit.js
*/
import BigNumber from 'bignumber.js'

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

const greaterOutputBurn = {
  slpData: {
    tokenType: 1,
    txType: 'SEND',
    tokenId: '01e34c1524c523380707570ced7217024f644fd6f228c13413b12e97e4ca13e8',
    amounts: ['133700', '123323087']
  },
  txData: {
    txid: '8e577799f9366f41880f53fb4dcca12af3a69cae5f4a6c6bf6f8dd7dc43ef564',
    hash: '8e577799f9366f41880f53fb4dcca12af3a69cae5f4a6c6bf6f8dd7dc43ef564',
    version: 1,
    size: 479,
    locktime: 0,
    vin: [
      {
        txid: '1a8e0fb428fefe6c7413dba30c15e2814947f7efb7978de526c514d9128b266c',
        vout: 2,
        scriptSig: {
          asm: '3044022033c488739e6ea1fdf063a4dd751f23bf31b8fae0938aff8f33b7c8a8c7b8f71702203d6519a4869ad699ece7153aad0393dfafbf7d97d2a2f36bf4b8f6e399429de3[ALL|FORKID] 0329d5ffda1250d97614cfd3a5cb1c89d0a255c59584c091915b21b3e64137fe7a',
          hex: '473044022033c488739e6ea1fdf063a4dd751f23bf31b8fae0938aff8f33b7c8a8c7b8f71702203d6519a4869ad699ece7153aad0393dfafbf7d97d2a2f36bf4b8f6e399429de341210329d5ffda1250d97614cfd3a5cb1c89d0a255c59584c091915b21b3e64137fe7a'
        },
        sequence: 4294967295,
        address: 'bitcoincash:qzk92nt0xdxc9qy3yj53h9rjw8dk0s9cqqucfqpcd6',
        value: 0.00000546,
        tokenQtyStr: '1228567.88',
        tokenQty: 1228567.88,
        tokenId:
          '01e34c1524c523380707570ced7217024f644fd6f228c13413b12e97e4ca13e8'
      },
      {
        txid: 'f63cfef445757d9b9a54fc595ac22518b8a2751ed6bb942f540f0226668f74c3',
        vout: 3,
        scriptSig: {
          asm: '3044022021f5f300a51ff9d858b9441d34d4af9b9dfe28c2e9a77eacf64fa7606735c6da0220086142b5ae9da5ef5617676b52291b74ac07ba5f502c00b020b680eda8b59cd9[ALL|FORKID] 0329d5ffda1250d97614cfd3a5cb1c89d0a255c59584c091915b21b3e64137fe7a',
          hex: '473044022021f5f300a51ff9d858b9441d34d4af9b9dfe28c2e9a77eacf64fa7606735c6da0220086142b5ae9da5ef5617676b52291b74ac07ba5f502c00b020b680eda8b59cd941210329d5ffda1250d97614cfd3a5cb1c89d0a255c59584c091915b21b3e64137fe7a'
        },
        sequence: 4294967295,
        address: 'bitcoincash:qzk92nt0xdxc9qy3yj53h9rjw8dk0s9cqqucfqpcd6',
        value: 0.00733515,
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
          asm: 'OP_RETURN 5262419 1 1145980243 01e34c1524c523380707570ced7217024f644fd6f228c13413b12e97e4ca13e8 0000000000020a44 000000000759c2cf',
          hex: '6a04534c500001010453454e442001e34c1524c523380707570ced7217024f644fd6f228c13413b12e97e4ca13e8080000000000020a4408000000000759c2cf',
          type: 'nulldata'
        },
        tokenQty: null,
        tokenQtyStr: null
      },
      {
        value: 0.00000546,
        n: 1,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 ac554d6f334d82809124a91b947271db67c0b800 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a914ac554d6f334d82809124a91b947271db67c0b80088ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: ['bitcoincash:qzk92nt0xdxc9qy3yj53h9rjw8dk0s9cqqucfqpcd6']
        },
        tokenQtyStr: '1337',
        tokenQty: 1337
      },
      {
        value: 0.00000546,
        n: 2,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 ac554d6f334d82809124a91b947271db67c0b800 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a914ac554d6f334d82809124a91b947271db67c0b80088ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: ['bitcoincash:qzk92nt0xdxc9qy3yj53h9rjw8dk0s9cqqucfqpcd6']
        },
        tokenQtyStr: '1233230.87',
        tokenQty: 1233230.87
      },
      {
        value: 0.00732424,
        n: 3,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 ac554d6f334d82809124a91b947271db67c0b800 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a914ac554d6f334d82809124a91b947271db67c0b80088ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: ['bitcoincash:qzk92nt0xdxc9qy3yj53h9rjw8dk0s9cqqucfqpcd6']
        },
        tokenQty: null,
        tokenQtyStr: null
      }
    ],
    hex: '01000000026c268b12d914c526e58d97b7eff7474981e2150ca3db13746cfefe28b40f8e1a020000006a473044022033c488739e6ea1fdf063a4dd751f23bf31b8fae0938aff8f33b7c8a8c7b8f71702203d6519a4869ad699ece7153aad0393dfafbf7d97d2a2f36bf4b8f6e399429de341210329d5ffda1250d97614cfd3a5cb1c89d0a255c59584c091915b21b3e64137fe7affffffffc3748f6626020f542f94bbd61e75a2b81825c25a59fc549a9b7d7545f4fe3cf6030000006a473044022021f5f300a51ff9d858b9441d34d4af9b9dfe28c2e9a77eacf64fa7606735c6da0220086142b5ae9da5ef5617676b52291b74ac07ba5f502c00b020b680eda8b59cd941210329d5ffda1250d97614cfd3a5cb1c89d0a255c59584c091915b21b3e64137fe7affffffff040000000000000000406a04534c500001010453454e442001e34c1524c523380707570ced7217024f644fd6f228c13413b12e97e4ca13e8080000000000020a4408000000000759c2cf22020000000000001976a914ac554d6f334d82809124a91b947271db67c0b80088ac22020000000000001976a914ac554d6f334d82809124a91b947271db67c0b80088ac082d0b00000000001976a914ac554d6f334d82809124a91b947271db67c0b80088ac00000000',
    blockhash:
      '000000000000000002fdeb2b410b81c4bed56adf46abe78ba701e198e47f91b6',
    confirmations: 146262,
    time: 1551713139,
    blocktime: 1551713139,
    blockheight: 572321,
    isSlpTx: true,
    tokenTxType: 'SEND',
    tokenId: '01e34c1524c523380707570ced7217024f644fd6f228c13413b12e97e4ca13e8',
    tokenType: 1,
    tokenTicker: 'JBC',
    tokenName: 'JB Coin',
    tokenDecimals: 2,
    tokenUri: 'jb@bitcoin.com',
    tokenDocHash: ''
  },
  blockHeight: 572321
}

const greaterOutputAddr01 = {
  utxos: [
    {
      txid: '8e577799f9366f41880f53fb4dcca12af3a69cae5f4a6c6bf6f8dd7dc43ef564',
      vout: 1,
      type: 'token',
      qty: '133700',
      tokenId: '01e34c1524c523380707570ced7217024f644fd6f228c13413b12e97e4ca13e8',
      address: 'bitcoincash:qzk92nt0xdxc9qy3yj53h9rjw8dk0s9cqqucfqpcd6'
    }
  ]
}

const greaterOutputAddr02 = {
  utxos: [
    {
      txid: '8e577799f9366f41880f53fb4dcca12af3a69cae5f4a6c6bf6f8dd7dc43ef564',
      vout: 2,
      type: 'token',
      qty: '123323087',
      tokenId: '01e34c1524c523380707570ced7217024f644fd6f228c13413b12e97e4ca13e8',
      address: 'bitcoincash:qzk92nt0xdxc9qy3yj53h9rjw8dk0s9cqqucfqpcd6'
    }
  ]
}

const nftSendData01 = {
  "slpData": {
    "tokenType": 65,
    "txType": "SEND",
    "tokenId": "90b8d1248b70ba0fcbe1a02261f3d18e17bdd499030d7879fe91604070809674",
    "amounts": [
      "1"
    ]
  },
  "blockHeight": 812387,
  "txData": {
    "txid": "3508ea57787f0444dcbcbd9280bb0825c35ef2edc22c514292df21ace938ec77",
    "hash": "3508ea57787f0444dcbcbd9280bb0825c35ef2edc22c514292df21ace938ec77",
    "version": 2,
    "size": 437,
    "locktime": 0,
    "vin": [
      {
        "txid": "e7974ab92006d19767ca383ac4834fd7a72605f5ef7745e48b3be6b3cfaabbf0",
        "vout": 2,
        "scriptSig": {
          "asm": "3044022045d8d7f143d2ce5c313af80fac1963dd7cabbe01dce26a65bf3ce06654f1e46602204739c27a43e99893bd7e98fd32af43b7deaf516fc0dc13058d919ffcde0dcdf1[ALL|FORKID] 023ed189c1d4c5a89f25ba53cc9d5d06c3e3abfcd323043bad67bdbb8b1a078c94",
          "hex": "473044022045d8d7f143d2ce5c313af80fac1963dd7cabbe01dce26a65bf3ce06654f1e46602204739c27a43e99893bd7e98fd32af43b7deaf516fc0dc13058d919ffcde0dcdf14121023ed189c1d4c5a89f25ba53cc9d5d06c3e3abfcd323043bad67bdbb8b1a078c94"
        },
        "sequence": 4294967295,
        "address": "bitcoincash:qzcrcjuqpwc9whmvpug7z425rnqxvx50ngl60rrjst",
        "value": 0.04220655,
        "tokenQty": 0,
        "tokenQtyStr": "0",
        "tokenId": null
      },
      {
        "txid": "90b8d1248b70ba0fcbe1a02261f3d18e17bdd499030d7879fe91604070809674",
        "vout": 1,
        "scriptSig": {
          "asm": "3045022100f6ea20cea2b6cf58cb3666bd4550e3405ef9b48fd856d9122fe821e713490e9102204bb40ae39128d9fb3957267be23130fcb1147fd1416870209112a1cea130b51b[ALL|FORKID] 037a22c03e02f20d0e10f1dfe5ff0eae8da67da1d5862c7a7fe6e889f6da7d62f6",
          "hex": "483045022100f6ea20cea2b6cf58cb3666bd4550e3405ef9b48fd856d9122fe821e713490e9102204bb40ae39128d9fb3957267be23130fcb1147fd1416870209112a1cea130b51b4121037a22c03e02f20d0e10f1dfe5ff0eae8da67da1d5862c7a7fe6e889f6da7d62f6"
        },
        "sequence": 4294967295,
        "address": "bitcoincash:qpymkr6as34a7rxarlupa387m4azjl3tnv8649xu5j",
        "value": 0.00000546,
        "tokenQtyStr": "1",
        "tokenQty": 1,
        "tokenId": "90b8d1248b70ba0fcbe1a02261f3d18e17bdd499030d7879fe91604070809674"
      }
    ],
    "vout": [
      {
        "value": 0,
        "n": 0,
        "scriptPubKey": {
          "asm": "OP_RETURN 5262419 65 1145980243 90b8d1248b70ba0fcbe1a02261f3d18e17bdd499030d7879fe91604070809674 72057594037927936",
          "hex": "6a04534c500001410453454e442090b8d1248b70ba0fcbe1a02261f3d18e17bdd499030d7879fe91604070809674080000000000000001",
          "type": "nulldata"
        },
        "tokenQty": null,
        "tokenQtyStr": null
      },
      {
        "value": 0.00000546,
        "n": 1,
        "scriptPubKey": {
          "asm": "OP_DUP OP_HASH160 3fb679e9e8301eb4ec14321216f89e7e4fd8dea1 OP_EQUALVERIFY OP_CHECKSIG",
          "hex": "76a9143fb679e9e8301eb4ec14321216f89e7e4fd8dea188ac",
          "reqSigs": 1,
          "type": "pubkeyhash",
          "addresses": [
            "bitcoincash:qqlmv70faqcpad8vzsepy9hcnelylkx75yl5998sr8"
          ]
        },
        "tokenQtyStr": "1",
        "tokenQty": 1
      },
      {
        "value": 0.04218679,
        "n": 2,
        "scriptPubKey": {
          "asm": "OP_DUP OP_HASH160 b03c4b800bb0575f6c0f11e155541cc0661a8f9a OP_EQUALVERIFY OP_CHECKSIG",
          "hex": "76a914b03c4b800bb0575f6c0f11e155541cc0661a8f9a88ac",
          "reqSigs": 1,
          "type": "pubkeyhash",
          "addresses": [
            "bitcoincash:qzcrcjuqpwc9whmvpug7z425rnqxvx50ngl60rrjst"
          ]
        },
        "tokenQty": null,
        "tokenQtyStr": null
      }
    ],
    "hex": "0200000002f0bbaacfb3e63b8be44577eff50526a7d74f83c43a38ca6797d10620b94a97e7020000006a473044022045d8d7f143d2ce5c313af80fac1963dd7cabbe01dce26a65bf3ce06654f1e46602204739c27a43e99893bd7e98fd32af43b7deaf516fc0dc13058d919ffcde0dcdf14121023ed189c1d4c5a89f25ba53cc9d5d06c3e3abfcd323043bad67bdbb8b1a078c94ffffffff74968070406091fe79780d0399d4bd178ed1f36122a0e1cb0fba708b24d1b890010000006b483045022100f6ea20cea2b6cf58cb3666bd4550e3405ef9b48fd856d9122fe821e713490e9102204bb40ae39128d9fb3957267be23130fcb1147fd1416870209112a1cea130b51b4121037a22c03e02f20d0e10f1dfe5ff0eae8da67da1d5862c7a7fe6e889f6da7d62f6ffffffff030000000000000000376a04534c500001410453454e442090b8d1248b70ba0fcbe1a02261f3d18e17bdd499030d7879fe9160407080967408000000000000000122020000000000001976a9143fb679e9e8301eb4ec14321216f89e7e4fd8dea188ac375f4000000000001976a914b03c4b800bb0575f6c0f11e155541cc0661a8f9a88ac00000000",
    "blockhash": "0000000000000000026845b659097c102817ada02a2217bcfc7efb1fad8913a9",
    "confirmations": 259,
    "time": 1695720407,
    "blocktime": 1695720407,
    "blockheight": 812387,
    "isSlpTx": true,
    "tokenTxType": "SEND",
    "tokenId": "90b8d1248b70ba0fcbe1a02261f3d18e17bdd499030d7879fe91604070809674",
    "tokenType": 65,
    "tokenTicker": "SWEDC",
    "tokenName": "Don't Matter Now Coin No. 958",
    "tokenDecimals": 0,
    "tokenUri": "https://collectible.sweet.io/series/31/958",
    "tokenDocHash": "81eba18f950d91a09c7ffb4dc7b4a986580c9d1bab456a2daef51de712415489"
  }
}

const invalidTxFromDb01 = {
  txid: 'b4f7b84eb8c69b8a62140610ad51f8e0fcb310263afa9d0bc740fe7451ceddb9',
  hash: 'b4f7b84eb8c69b8a62140610ad51f8e0fcb310263afa9d0bc740fe7451ceddb9',
  version: 1,
  size: 479,
  locktime: 0,
  vin: [
    {
      txid: 'c2fab06e94fd87b3509484e56315b9914167d3227fd63f480b756cf79502760f',
      vout: 2,
      scriptSig: [Object],
      sequence: 4294967295,
      address: 'bitcoincash:qrqac0du3cmc96y2nre7673ukzq8lm3udqcp78y339',
      value: 0.00000546,
      tokenQtyStr: '18998128',
      tokenQty: 18998128,
      tokenId: '07f5055b743215f55c0115d287f314134b9d3c31608cbbe6c81f17b9d9f80701'
    },
    {
      txid: 'c0dd111d203e2cace8b2f39eca87e6c3b3f0e8ac7551ca0c023fd325d0c9340b',
      vout: 1,
      scriptSig: [Object],
      sequence: 4294967295,
      address: 'bitcoincash:qq2dhpgnfh57g7g52zcadjlxnt99kcr68uenlrkf2d',
      value: 0.00143271,
      tokenQty: 0,
      tokenQtyStr: '0',
      tokenId: null
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: [Object],
      tokenQty: null,
      tokenQtyStr: null
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: [Object],
      tokenQtyStr: '20',
      tokenQty: 20
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: [Object],
      tokenQtyStr: '18998108',
      tokenQty: 18998108
    },
    {
      value: 0.00142244,
      n: 3,
      scriptPubKey: [Object],
      tokenQty: null,
      tokenQtyStr: null
    }
  ],
  hex: '01000000020f760295f76c750b483fd67f22d3674191b91563e5849450b387fd946eb0fac2020000006a47304402200ccc9635d8f582814dbb79b10adf4c06fc058b18661a6e882e6577e987d7354d022000d9092394f47bd96275fb2eb9b396f83b750c8760d6160e0f310407287f163c4121020985608c75bb06ab0b76e60e48e2a660c687cea19e0fb9e11ead98111e7e34efffffffff0b34c9d025d33f020cca5175ace8f0b3c3e687ca9ef3b2e8ac2c3e201d11ddc0010000006a473044022003bd77f59f3148abc018ffa85e7d164f5219e2283576fa4aa63343be4709ed27022053c1a1e8fc0dfd461d1b248c26205d851b49f262c1515362a0bf55fe95a091ab412102fd3dce09147e95872aaad1a1a295d412d0977936a358a640f0e1a3c31523f4beffffffff040000000000000000406a04534c500001010453454e442007f5055b743215f55c0115d287f314134b9d3c31608cbbe6c81f17b9d9f8070108000000000bebc200080000acc96ac9960022020000000000001976a914c1dc3dbc8e3782e88a98f3ed7a3cb0807fee3c6888ac22020000000000001976a914c1dc3dbc8e3782e88a98f3ed7a3cb0807fee3c6888aca42b0200000000001976a91414db85134de9e4791450b1d6cbe69aca5b607a3f88ac00000000',
  blockhash: '000000000000000001369f5383a456b0ce68b701a9f4ba630bd31d716ff72df7',
  confirmations: 6549,
  time: 1691704347,
  blocktime: 1691704347,
  blockheight: 805638,
  isSlpTx: true,
  tokenTxType: 'SEND',
  tokenId: '07f5055b743215f55c0115d287f314134b9d3c31608cbbe6c81f17b9d9f80701',
  tokenType: 1,
  tokenTicker: 'SMPLUS',
  tokenName: 'SM Plus',
  tokenDecimals: 7,
  tokenUri: 'https://metaversestudiosla.vhx.tv/',
  tokenDocHash: '',
  isValidSlp: false
}


export default {
  sendData01,
  addrData01,
  utxo01,
  addrData02,
  utxo02,
  sendData02,
  greaterOutputBurn,
  greaterOutputAddr01,
  greaterOutputAddr02,
  nftSendData01,
  invalidTxFromDb01
}
