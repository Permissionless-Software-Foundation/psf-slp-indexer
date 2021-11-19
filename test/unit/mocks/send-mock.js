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

module.exports = {
  sendData01,
  addrData01,
  utxo01
}
