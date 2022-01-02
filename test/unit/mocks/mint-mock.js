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

const invalidMintData01 = {
  slpData: {
    tokenType: 1,
    txType: 'MINT',
    tokenId: 'd912758f9f2c9c365e31f4d87e1c79675ec09b35364db2484061413651d0ccd4',
    mintBatonVout: 3,
    qty: '25000'
  },
  blockHeight: 657508,
  txData: {
    txid: 'a98686df3ced24b5ce7f47762631b8a8dc87086aa7b9ee2be59bcdde7886264a',
    hash: 'a98686df3ced24b5ce7f47762631b8a8dc87086aa7b9ee2be59bcdde7886264a',
    version: 2,
    size: 772,
    locktime: 657505,
    vin: [
      {
        txid: '7fd154aac152f840a5387f0d418909353e1fbbf39daf10372ccfd962321a0841',
        vout: 0,
        scriptSig: {
          asm: '17c4c559f7f52da668c23283734151ac7693b5e5e9fa71cdf8625ac7af26b0dc49921edd6322f78ba75e1b3ec8f74c932c3ca74f789354a55bb48e7cf9881f7a[ALL|FORKID] 03db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354a',
          hex: '4117c4c559f7f52da668c23283734151ac7693b5e5e9fa71cdf8625ac7af26b0dc49921edd6322f78ba75e1b3ec8f74c932c3ca74f789354a55bb48e7cf9881f7a412103db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354a'
        },
        sequence: 4294967294,
        address: 'bitcoincash:qq39p58k3rtxjgtfw2edfdvrde7jx68xqsx939f37a',
        value: 0.00001,
        tokenQty: 0,
        tokenQtyStr: '0',
        tokenId: null
      },
      {
        txid: 'ca7c7111fed2a24a89bcbf28e5bd1db8c78c92797d395992000f87e43d8bde85',
        vout: 1,
        scriptSig: {
          asm: 'd8efea90f2885765014cace48d52a2024b6a9c3b29123292400a445c70510ca12e8f30c7d81178591c4d572ba888a7e3fdf37c8a91c071e98e8d3f7e79bbf93e[ALL|FORKID] 03db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354a',
          hex: '41d8efea90f2885765014cace48d52a2024b6a9c3b29123292400a445c70510ca12e8f30c7d81178591c4d572ba888a7e3fdf37c8a91c071e98e8d3f7e79bbf93e412103db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354a'
        },
        sequence: 4294967294,
        address: 'bitcoincash:qq39p58k3rtxjgtfw2edfdvrde7jx68xqsx939f37a',
        value: 0.00000546,
        tokenQtyStr: '250',
        tokenQty: 250,
        tokenId: 'd912758f9f2c9c365e31f4d87e1c79675ec09b35364db2484061413651d0ccd4'
      },
      {
        txid: 'cb510b1b4d962896b7a1c21e9db79dd56e703c6b4312a3a05fd9deb22c83a5b4',
        vout: 1,
        scriptSig: {
          asm: '67523587e9d62ec32dedf0e33c32e93c7dc111d57ce6b98440251c02e14c968a94728821dd30fdecae5908207ccbb922ed5149a2bf0cfe38e437056d9d69de98[ALL|FORKID] 03db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354a',
          hex: '4167523587e9d62ec32dedf0e33c32e93c7dc111d57ce6b98440251c02e14c968a94728821dd30fdecae5908207ccbb922ed5149a2bf0cfe38e437056d9d69de98412103db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354a'
        },
        sequence: 4294967294,
        address: 'bitcoincash:qq39p58k3rtxjgtfw2edfdvrde7jx68xqsx939f37a',
        value: 0.00000546,
        tokenQtyStr: '250',
        tokenQty: 250,
        tokenId: 'd912758f9f2c9c365e31f4d87e1c79675ec09b35364db2484061413651d0ccd4'
      },
      {
        txid: '1831935aeef250d0cb8b33a63ed31f65b684e490e69b8d2c48caefddc064d01d',
        vout: 0,
        scriptSig: {
          asm: '7ad2217363924bc16a2dca4a1770bfa6a2049c6a2a54b12e10ff64f0a40f66f83d34e7742ea2f5346906634eaaa51adf09072ae851b77b3caa5630c5b5ae2967[ALL|FORKID] 03db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354a',
          hex: '417ad2217363924bc16a2dca4a1770bfa6a2049c6a2a54b12e10ff64f0a40f66f83d34e7742ea2f5346906634eaaa51adf09072ae851b77b3caa5630c5b5ae2967412103db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354a'
        },
        sequence: 4294967294,
        address: 'bitcoincash:qq39p58k3rtxjgtfw2edfdvrde7jx68xqsx939f37a',
        value: 0.00005,
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
          asm: 'OP_RETURN 5262419 1 1414416717 d912758f9f2c9c365e31f4d87e1c79675ec09b35364db2484061413651d0ccd4 3 00000000000061a8',
          hex: '6a04534c50000101044d494e5420d912758f9f2c9c365e31f4d87e1c79675ec09b35364db2484061413651d0ccd401030800000000000061a8',
          type: 'nulldata'
        },
        tokenQtyStr: '0',
        tokenQty: 0
      },
      {
        value: 0.00000546,
        n: 1,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 2250d0f688d669216972b2d4b5836e7d2368e604 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a9142250d0f688d669216972b2d4b5836e7d2368e60488ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: [
            'bitcoincash:qq39p58k3rtxjgtfw2edfdvrde7jx68xqsx939f37a'
          ]
        },
        tokenQtyStr: '250',
        tokenQty: 250
      },
      {
        value: 0.000012,
        n: 2,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 133e7e8b5ec101c5567323bcef09ba782dba15a8 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a914133e7e8b5ec101c5567323bcef09ba782dba15a888ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: [
            'bitcoincash:qqfnul5ttmqsr32kwv3memcfhfuzmws44q3aapks67'
          ]
        },
        tokenQtyStr: '0',
        tokenQty: 0
      },
      {
        value: 0.00001,
        n: 3,
        scriptPubKey: {
          asm: 'OP_HASH160 db4a7b2bed469b98f610bf99c4beeb9401e125c1 OP_EQUAL',
          hex: 'a914db4a7b2bed469b98f610bf99c4beeb9401e125c187',
          reqSigs: 1,
          type: 'scripthash',
          addresses: [
            'bitcoincash:prd557eta4rfhx8kzzlen397aw2qrcf9cy2nuy0u9a'
          ]
        },
        tokenQtyStr: '0',
        tokenQty: 0,
        isMintBaton: true
      },
      {
        value: 0.00003346,
        n: 4,
        scriptPubKey: {
          asm: 'OP_HASH160 db4a7b2bed469b98f610bf99c4beeb9401e125c1 OP_EQUAL',
          hex: 'a914db4a7b2bed469b98f610bf99c4beeb9401e125c187',
          reqSigs: 1,
          type: 'scripthash',
          addresses: [
            'bitcoincash:prd557eta4rfhx8kzzlen397aw2qrcf9cy2nuy0u9a'
          ]
        },
        tokenQtyStr: '0',
        tokenQty: 0
      }
    ],
    hex: '020000000441081a3262d9cf2c3710af9df3bb1f3e350989410d7f38a540f852c1aa54d17f00000000644117c4c559f7f52da668c23283734151ac7693b5e5e9fa71cdf8625ac7af26b0dc49921edd6322f78ba75e1b3ec8f74c932c3ca74f789354a55bb48e7cf9881f7a412103db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354afeffffff85de8b3de4870f009259397d79928cc7b81dbde528bfbc894aa2d2fe11717cca010000006441d8efea90f2885765014cace48d52a2024b6a9c3b29123292400a445c70510ca12e8f30c7d81178591c4d572ba888a7e3fdf37c8a91c071e98e8d3f7e79bbf93e412103db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354afeffffffb4a5832cb2ded95fa0a312436b3c706ed59db79d1ec2a1b79628964d1b0b51cb01000000644167523587e9d62ec32dedf0e33c32e93c7dc111d57ce6b98440251c02e14c968a94728821dd30fdecae5908207ccbb922ed5149a2bf0cfe38e437056d9d69de98412103db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354afeffffff1dd064c0ddefca482c8d9be690e484b6651fd33ea6338bcbd050f2ee5a9331180000000064417ad2217363924bc16a2dca4a1770bfa6a2049c6a2a54b12e10ff64f0a40f66f83d34e7742ea2f5346906634eaaa51adf09072ae851b77b3caa5630c5b5ae2967412103db823aba03ec6cb61116c3731f429fc6edcd4a4c29ee8d505bcd005fb4ed354afeffffff050000000000000000396a04534c50000101044d494e5420d912758f9f2c9c365e31f4d87e1c79675ec09b35364db2484061413651d0ccd401030800000000000061a822020000000000001976a9142250d0f688d669216972b2d4b5836e7d2368e60488acb0040000000000001976a914133e7e8b5ec101c5567323bcef09ba782dba15a888ace80300000000000017a914db4a7b2bed469b98f610bf99c4beeb9401e125c187120d00000000000017a914db4a7b2bed469b98f610bf99c4beeb9401e125c18761080a00',
    blockhash: '000000000000000001d13782fe274e8b35970d169adb8d59aaa64038f40ff30a',
    confirmations: 62634,
    time: 1602923089,
    blocktime: 1602923089,
    blockheight: 657508,
    isSlpTx: true,
    tokenTxType: 'MINT',
    tokenId: 'd912758f9f2c9c365e31f4d87e1c79675ec09b35364db2484061413651d0ccd4',
    tokenType: 1,
    tokenTicker: 'UNI',
    tokenName: 'Fake Uni Token',
    tokenDecimals: 2,
    tokenUri: 'https://signup.cash/yield',
    tokenDocHash: ''
  }
}

module.exports = {
  mintData,
  mintAddrDb01,
  mintAddrDb02,
  invalidMintData01
}
