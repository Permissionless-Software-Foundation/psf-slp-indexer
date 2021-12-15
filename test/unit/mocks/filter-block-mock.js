/*
  Mocked data used in filter-block.unit.js
*/

const twoTxDag01 = {
  txid: 'e5ff3083cd2dcf87a40a4a4a478349a394c1a1eeffe4857c2a173b183fdd42a2',
  hash: 'e5ff3083cd2dcf87a40a4a4a478349a394c1a1eeffe4857c2a173b183fdd42a2',
  version: 1,
  size: 480,
  locktime: 543412,
  vin: [
    {
      txid: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2',
      vout: 1,
      scriptSig: [Object],
      sequence: 4294967294,
      address: 'bitcoincash:qqwqd3u5xdxpkeqy8gx8hs9z6r9dmaunvyafv9vdv5',
      value: 0.00000546,
      tokenQtyStr: '21000000',
      tokenQty: 21000000,
      tokenId:
        '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
    },
    {
      txid: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2',
      vout: 3,
      scriptSig: [Object],
      sequence: 4294967294,
      address: 'bitcoincash:qzxqjseqseqrxmlsvlfumf7qgn24gjdq4uu9k3rfm2',
      value: 0.00167551,
      tokenQtyStr: '0',
      tokenQty: 0,
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
      tokenQtyStr: '1000000',
      tokenQty: 1000000
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: [Object],
      tokenQtyStr: '20000000',
      tokenQty: 20000000
    },
    {
      value: 0.00166524,
      n: 3,
      scriptPubKey: [Object],
      tokenQty: null,
      tokenQtyStr: null
    }
  ],
  hex: '0100000002e2dd8264c70e8da104b6113457c436096e84e4566c68dfc1e76dad8a54470117010000006a47304402204d135697eb7fb654cd3068838bcd50f8709fedeac9d07325d1497ed474db580a022039161eb454d7c9f31e37b2deff3b06b388835b8591cea9e3494b1cda9bc0f748412102e11b25ad09036672e09612cf14373bca526f976c1113d28e25de5fdedc50f054feffffffe2dd8264c70e8da104b6113457c436096e84e4566c68dfc1e76dad8a54470117030000006b483045022100c6a429638d8001d833fa1724a845e197771cc9b372d90d67336c8fd97070d5ae02204ee95888bbd8b6e08c2c05f3375825d728f8fe88ad74ade410f6b14d68cac82d4121023e2a5b3607199c2c83cae9f4c0eb8c14a062bc267d3c6f991c17b20065130509feffffff040000000000000000406a04534c500001010453454e4420170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde20800000000000f4240080000000001312d0022020000000000001976a9147a6f76875f9a5590824f4380bbd7e9ef9b119b8a88ac22020000000000001976a91453d8bc386bc4238db986e4c6309c35c4b146f38088ac7c8a0200000000001976a91453d8bc386bc4238db986e4c6309c35c4b146f38088acb44a0800',
  blockhash: '0000000000000000015bad75aa35ba272e8fad687c7eb150563ee4a4d0154404',
  confirmations: 170997,
  time: 1534273640,
  blocktime: 1534273640,
  blockheight: 543413,
  isSlpTx: true,
  tokenTxType: 'SEND',
  tokenId: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2',
  tokenType: 1,
  tokenTicker: '',
  tokenName: '',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: ''
}

const twoTxDag02 = {
  txid: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2',
  hash: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2',
  version: 1,
  size: 305,
  locktime: 543412,
  vin: [
    {
      txid: '82a9c47118dd221bf528e8b9ee9daef626ca52fb824b92cbe52a83e87afb0fac',
      vout: 3,
      scriptSig: [Object],
      sequence: 4294967294,
      address: 'bitcoincash:qpnc08pp75hff8h0sxqs8cptd7s58naqmq52jvjugf',
      value: 0.00168949,
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
      tokenQtyStr: '0',
      tokenQty: 0
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: [Object],
      tokenQtyStr: '21000000',
      tokenQty: 21000000
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: [Object],
      tokenQtyStr: '0',
      tokenQty: 0,
      isMintBaton: true
    },
    {
      value: 0.00167551,
      n: 3,
      scriptPubKey: [Object],
      tokenQtyStr: '0',
      tokenQty: 0
    }
  ],
  hex: '0100000001ac0ffb7ae8832ae5cb924b82fb52ca26f6ae9deeb9e828f51b22dd1871c4a982030000006a473044022069ce995e0496736dc540d2cf33dc516208a83ef3d6c6dfeedf4616b3f02b6c2d02205f083eb258b2d35ad677c71c96e5911403d24d88c4e4e310dc02cc9f48f970a841210379822f976d94a13bc18d82d81298ac6ee1b18b4c6628bbb5536fd663fb966955feffffff040000000000000000256a04534c500001010747454e455349534c004c004c004c0001000102080000000001406f4022020000000000001976a9141c06c794334c1b64043a0c7bc0a2d0caddf7936188ac22020000000000001976a9141c06c794334c1b64043a0c7bc0a2d0caddf7936188ac7f8e0200000000001976a9148c0943208640336ff067d3cda7c044d55449a0af88acb44a0800',
  blockhash: '0000000000000000015bad75aa35ba272e8fad687c7eb150563ee4a4d0154404',
  confirmations: 170997,
  time: 1534273640,
  blocktime: 1534273640,
  blockheight: 543413,
  isSlpTx: true,
  tokenTxType: 'GENESIS',
  tokenId: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2',
  tokenType: 1,
  tokenTicker: '',
  tokenName: '',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: ''
}

const twoTxDag03 = {
  txid: '82a9c47118dd221bf528e8b9ee9daef626ca52fb824b92cbe52a83e87afb0fac',
  hash: '82a9c47118dd221bf528e8b9ee9daef626ca52fb824b92cbe52a83e87afb0fac',
  version: 1,
  size: 305,
  locktime: 543412,
  vin: [
    {
      txid: '3a574837eaecf701ddf232ab4ad30c541be61061ee5a563d27809dde927d7ecf',
      vout: 2,
      scriptSig: {
        asm: '304402203a5798ab1429029e6dee14f9ec0adec5288f6436d7ab94a8c4269ff7aadc667902207a84a2812b0a80b964335af0e1455ba99e099e132c54247a0af7e12ae0034e62[ALL|FORKID] 0398f6aa8d4c6aa0841ba0e02eb5424008a75f4ac3f30745f2625db8857f2df4ea',
        hex: '47304402203a5798ab1429029e6dee14f9ec0adec5288f6436d7ab94a8c4269ff7aadc667902207a84a2812b0a80b964335af0e1455ba99e099e132c54247a0af7e12ae0034e6241210398f6aa8d4c6aa0841ba0e02eb5424008a75f4ac3f30745f2625db8857f2df4ea'
      },
      sequence: 4294967294
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 1 47454e45534953 0 0 0 0 0 2 00000000000003e8',
        hex: '6a04534c500001010747454e455349534c004c004c004c00010001020800000000000003e8',
        type: 'nulldata'
      }
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 d55be2bdd99f1b5e09f2c3688876da2255535fca OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914d55be2bdd99f1b5e09f2c3688876da2255535fca88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qr24hc4amx03khsf7tpk3zrkmg39256legaktp8eeh'
        ]
      }
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 d55be2bdd99f1b5e09f2c3688876da2255535fca OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914d55be2bdd99f1b5e09f2c3688876da2255535fca88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qr24hc4amx03khsf7tpk3zrkmg39256legaktp8eeh'
        ]
      }
    },
    {
      value: 0.00168949,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 67879c21f52e949eef818103e02b6fa143cfa0d8 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a91467879c21f52e949eef818103e02b6fa143cfa0d888ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qpnc08pp75hff8h0sxqs8cptd7s58naqmq52jvjugf'
        ]
      }
    }
  ],
  hex: '0100000001cf7e7d92de9d80273d565aee6110e61b540cd34aab32f2dd01f7ecea3748573a020000006a47304402203a5798ab1429029e6dee14f9ec0adec5288f6436d7ab94a8c4269ff7aadc667902207a84a2812b0a80b964335af0e1455ba99e099e132c54247a0af7e12ae0034e6241210398f6aa8d4c6aa0841ba0e02eb5424008a75f4ac3f30745f2625db8857f2df4eafeffffff040000000000000000256a04534c500001010747454e455349534c004c004c004c00010001020800000000000003e822020000000000001976a914d55be2bdd99f1b5e09f2c3688876da2255535fca88ac22020000000000001976a914d55be2bdd99f1b5e09f2c3688876da2255535fca88acf5930200000000001976a91467879c21f52e949eef818103e02b6fa143cfa0d888acb44a0800',
  blockhash: '0000000000000000015bad75aa35ba272e8fad687c7eb150563ee4a4d0154404',
  confirmations: 171001,
  time: 1534273640,
  blocktime: 1534273640
}

const forwardDagTx01 = {
  txid: '234893177b18a95dbfc1eb855d69f1c9cc256a317a6c51be8fd1b9a38ae072ce',
  hash: '234893177b18a95dbfc1eb855d69f1c9cc256a317a6c51be8fd1b9a38ae072ce',
  version: 1,
  size: 480,
  locktime: 543412,
  vin: [
    {
      txid: '483d0198ed272bd0be7c6bbaf0e60340cce926f7d32143e2b09c5513922eaf87',
      vout: 2,
      scriptSig: {
        asm: '3044022067af88306a77fa565ad5ab572527604b542bf89610b06b2f471ec978f336add60220480dbfd0f9e5726b01574c3195f81fc30753be93a4d1aa303aa14c646223562f[ALL|FORKID] 0303fc93e2f60f2b2cab27e3b47bb01e6fbd30f16a6838267eef8c31508ac3a505',
        hex: '473044022067af88306a77fa565ad5ab572527604b542bf89610b06b2f471ec978f336add60220480dbfd0f9e5726b01574c3195f81fc30753be93a4d1aa303aa14c646223562f41210303fc93e2f60f2b2cab27e3b47bb01e6fbd30f16a6838267eef8c31508ac3a505'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qpn5tljn4wjy494kjwltvgy2j8gja5mtaumk070tde',
      value: 0.00000546,
      tokenQtyStr: '20990000',
      tokenQty: 20990000,
      tokenId: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
    },
    {
      txid: '483d0198ed272bd0be7c6bbaf0e60340cce926f7d32143e2b09c5513922eaf87',
      vout: 3,
      scriptSig: {
        asm: '3045022100c434841de277ce31fa741cd62d682096aa95effafa7de4df023fc40e557801ff02203bf5d783b5194cf6990fb6893d4fa6fb066639f2a925cacb36b55559c8b25d4e[ALL|FORKID] 0303fc93e2f60f2b2cab27e3b47bb01e6fbd30f16a6838267eef8c31508ac3a505',
        hex: '483045022100c434841de277ce31fa741cd62d682096aa95effafa7de4df023fc40e557801ff02203bf5d783b5194cf6990fb6893d4fa6fb066639f2a925cacb36b55559c8b25d4e41210303fc93e2f60f2b2cab27e3b47bb01e6fbd30f16a6838267eef8c31508ac3a505'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qpn5tljn4wjy494kjwltvgy2j8gja5mtaumk070tde',
      value: 0.00164239,
      tokenQtyStr: 'NaN',
      tokenQty: null,
      tokenId: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 1 1145980243 170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2 0000000000000001 000000000140482f',
        hex: '6a04534c500001010453454e4420170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde208000000000000000108000000000140482f',
        type: 'nulldata'
      },
      tokenQty: null,
      tokenQtyStr: null
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 ed9026c379d71eb3d07f70d4e608075dc471deb6 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914ed9026c379d71eb3d07f70d4e608075dc471deb688ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qrkeqfkr08t3av7s0acdfesgqawuguw7kckw4c5d99'
        ]
      },
      tokenQtyStr: '1',
      tokenQty: 1
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 404671891bdb3ffbdc91edbc31ea9c023f9a11e2 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914404671891bdb3ffbdc91edbc31ea9c023f9a11e288ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qpqyvuvfr0dnl77uj8kmcv02nsprlxs3uggc90uhhd'
        ]
      },
      tokenQtyStr: '20989999',
      tokenQty: 20989999
    },
    {
      value: 0.00163212,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 404671891bdb3ffbdc91edbc31ea9c023f9a11e2 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914404671891bdb3ffbdc91edbc31ea9c023f9a11e288ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qpqyvuvfr0dnl77uj8kmcv02nsprlxs3uggc90uhhd'
        ]
      },
      tokenQty: null,
      tokenQtyStr: null
    }
  ],
  hex: '010000000287af2e9213559cb0e24321d3f726e9cc4003e6f0ba6b7cbed02b27ed98013d48020000006a473044022067af88306a77fa565ad5ab572527604b542bf89610b06b2f471ec978f336add60220480dbfd0f9e5726b01574c3195f81fc30753be93a4d1aa303aa14c646223562f41210303fc93e2f60f2b2cab27e3b47bb01e6fbd30f16a6838267eef8c31508ac3a505feffffff87af2e9213559cb0e24321d3f726e9cc4003e6f0ba6b7cbed02b27ed98013d48030000006b483045022100c434841de277ce31fa741cd62d682096aa95effafa7de4df023fc40e557801ff02203bf5d783b5194cf6990fb6893d4fa6fb066639f2a925cacb36b55559c8b25d4e41210303fc93e2f60f2b2cab27e3b47bb01e6fbd30f16a6838267eef8c31508ac3a505feffffff040000000000000000406a04534c500001010453454e4420170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde208000000000000000108000000000140482f22020000000000001976a914ed9026c379d71eb3d07f70d4e608075dc471deb688ac22020000000000001976a914404671891bdb3ffbdc91edbc31ea9c023f9a11e288ac8c7d0200000000001976a914404671891bdb3ffbdc91edbc31ea9c023f9a11e288acb44a0800',
  blockhash: '0000000000000000015bad75aa35ba272e8fad687c7eb150563ee4a4d0154404',
  confirmations: 171006,
  time: 1534273640,
  blocktime: 1534273640,
  blockheight: 543413,
  isSlpTx: true,
  tokenTxType: 'SEND',
  tokenId: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2',
  tokenType: 1,
  tokenTicker: '',
  tokenName: '',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: ''
}

const forwardDagTx02 = {
  txid: '82a9c47118dd221bf528e8b9ee9daef626ca52fb824b92cbe52a83e87afb0fac',
  hash: '82a9c47118dd221bf528e8b9ee9daef626ca52fb824b92cbe52a83e87afb0fac',
  version: 1,
  size: 305,
  locktime: 543412,
  vin: [
    {
      txid: '3a574837eaecf701ddf232ab4ad30c541be61061ee5a563d27809dde927d7ecf',
      vout: 2,
      scriptSig: {
        asm: '304402203a5798ab1429029e6dee14f9ec0adec5288f6436d7ab94a8c4269ff7aadc667902207a84a2812b0a80b964335af0e1455ba99e099e132c54247a0af7e12ae0034e62[ALL|FORKID] 0398f6aa8d4c6aa0841ba0e02eb5424008a75f4ac3f30745f2625db8857f2df4ea',
        hex: '47304402203a5798ab1429029e6dee14f9ec0adec5288f6436d7ab94a8c4269ff7aadc667902207a84a2812b0a80b964335af0e1455ba99e099e132c54247a0af7e12ae0034e6241210398f6aa8d4c6aa0841ba0e02eb5424008a75f4ac3f30745f2625db8857f2df4ea'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qzj78chrmrgwx68h7jcg86ls67lkqxv9gy86pyanq3',
      value: 0.00170347,
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
        asm: 'OP_RETURN 5262419 1 47454e45534953 0 0 0 0 0 2 00000000000003e8',
        hex: '6a04534c500001010747454e455349534c004c004c004c00010001020800000000000003e8',
        type: 'nulldata'
      },
      tokenQtyStr: '0',
      tokenQty: 0
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 d55be2bdd99f1b5e09f2c3688876da2255535fca OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914d55be2bdd99f1b5e09f2c3688876da2255535fca88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qr24hc4amx03khsf7tpk3zrkmg39256legaktp8eeh'
        ]
      },
      tokenQtyStr: '1000',
      tokenQty: 1000
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 d55be2bdd99f1b5e09f2c3688876da2255535fca OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914d55be2bdd99f1b5e09f2c3688876da2255535fca88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qr24hc4amx03khsf7tpk3zrkmg39256legaktp8eeh'
        ]
      },
      tokenQtyStr: '0',
      tokenQty: 0,
      isMintBaton: true
    },
    {
      value: 0.00168949,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 67879c21f52e949eef818103e02b6fa143cfa0d8 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a91467879c21f52e949eef818103e02b6fa143cfa0d888ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qpnc08pp75hff8h0sxqs8cptd7s58naqmq52jvjugf'
        ]
      },
      tokenQtyStr: '0',
      tokenQty: 0
    }
  ],
  hex: '0100000001cf7e7d92de9d80273d565aee6110e61b540cd34aab32f2dd01f7ecea3748573a020000006a47304402203a5798ab1429029e6dee14f9ec0adec5288f6436d7ab94a8c4269ff7aadc667902207a84a2812b0a80b964335af0e1455ba99e099e132c54247a0af7e12ae0034e6241210398f6aa8d4c6aa0841ba0e02eb5424008a75f4ac3f30745f2625db8857f2df4eafeffffff040000000000000000256a04534c500001010747454e455349534c004c004c004c00010001020800000000000003e822020000000000001976a914d55be2bdd99f1b5e09f2c3688876da2255535fca88ac22020000000000001976a914d55be2bdd99f1b5e09f2c3688876da2255535fca88acf5930200000000001976a91467879c21f52e949eef818103e02b6fa143cfa0d888acb44a0800',
  blockhash: '0000000000000000015bad75aa35ba272e8fad687c7eb150563ee4a4d0154404',
  confirmations: 171006,
  time: 1534273640,
  blocktime: 1534273640,
  blockheight: 543413,
  isSlpTx: true,
  tokenTxType: 'GENESIS',
  tokenId: '82a9c47118dd221bf528e8b9ee9daef626ca52fb824b92cbe52a83e87afb0fac',
  tokenType: 1,
  tokenTicker: '',
  tokenName: '',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: ''
}

const forwardDagTx03 = {
  txid: '483d0198ed272bd0be7c6bbaf0e60340cce926f7d32143e2b09c5513922eaf87',
  hash: '483d0198ed272bd0be7c6bbaf0e60340cce926f7d32143e2b09c5513922eaf87',
  version: 1,
  size: 479,
  locktime: 543412,
  vin: [
    {
      txid: '660057b446cc4c930493607aa02e943e4fe7c38ae0816797ff7234ba72fea50f',
      vout: 2,
      scriptSig: {
        asm: '3044022048bb05509630e604acf8747d0231bacc93966de451093aa303f0bd930e591f1202202c9109a5a1612412042b09b704029777b943ddd9a6acbd989174cbba741358a6[ALL|FORKID] 0374b12abf350ea6397f5d7f971deabbeeeecaf24fc356fac672c9567c506f3dcc',
        hex: '473044022048bb05509630e604acf8747d0231bacc93966de451093aa303f0bd930e591f1202202c9109a5a1612412042b09b704029777b943ddd9a6acbd989174cbba741358a641210374b12abf350ea6397f5d7f971deabbeeeecaf24fc356fac672c9567c506f3dcc'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qqka3k78qzemuqx5klktqpvv4wfwwehj2uxntvjw4z',
      value: 0.00000546,
      tokenQtyStr: '20995000',
      tokenQty: 20995000,
      tokenId: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
    },
    {
      txid: '660057b446cc4c930493607aa02e943e4fe7c38ae0816797ff7234ba72fea50f',
      vout: 3,
      scriptSig: {
        asm: '304402207330905bacf58ee65f352a829fcf33e15b318d1740149f339a0206174dbacae102207ebbda130f9919bea8fb2835e53b3a397340e4297fdf44c8a967bdf6d838f156[ALL|FORKID] 0374b12abf350ea6397f5d7f971deabbeeeecaf24fc356fac672c9567c506f3dcc',
        hex: '47304402207330905bacf58ee65f352a829fcf33e15b318d1740149f339a0206174dbacae102207ebbda130f9919bea8fb2835e53b3a397340e4297fdf44c8a967bdf6d838f15641210374b12abf350ea6397f5d7f971deabbeeeecaf24fc356fac672c9567c506f3dcc'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qqka3k78qzemuqx5klktqpvv4wfwwehj2uxntvjw4z',
      value: 0.00165266,
      tokenQtyStr: 'NaN',
      tokenQty: null,
      tokenId: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2'
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 1 1145980243 170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2 0000000000001388 0000000001404830',
        hex: '6a04534c500001010453454e4420170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2080000000000001388080000000001404830',
        type: 'nulldata'
      },
      tokenQty: null,
      tokenQtyStr: null
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 ed9026c379d71eb3d07f70d4e608075dc471deb6 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914ed9026c379d71eb3d07f70d4e608075dc471deb688ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qrkeqfkr08t3av7s0acdfesgqawuguw7kckw4c5d99'
        ]
      },
      tokenQtyStr: '5000',
      tokenQty: 5000
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 6745fe53aba44a96b693beb6208a91d12ed36bef OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9146745fe53aba44a96b693beb6208a91d12ed36bef88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qpn5tljn4wjy494kjwltvgy2j8gja5mtaumk070tde'
        ]
      },
      tokenQtyStr: '20990000',
      tokenQty: 20990000
    },
    {
      value: 0.00164239,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 6745fe53aba44a96b693beb6208a91d12ed36bef OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9146745fe53aba44a96b693beb6208a91d12ed36bef88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qpn5tljn4wjy494kjwltvgy2j8gja5mtaumk070tde'
        ]
      },
      tokenQty: null,
      tokenQtyStr: null
    }
  ],
  hex: '01000000020fa5fe72ba3472ff976781e08ac3e74f3e942ea07a609304934ccc46b4570066020000006a473044022048bb05509630e604acf8747d0231bacc93966de451093aa303f0bd930e591f1202202c9109a5a1612412042b09b704029777b943ddd9a6acbd989174cbba741358a641210374b12abf350ea6397f5d7f971deabbeeeecaf24fc356fac672c9567c506f3dccfeffffff0fa5fe72ba3472ff976781e08ac3e74f3e942ea07a609304934ccc46b4570066030000006a47304402207330905bacf58ee65f352a829fcf33e15b318d1740149f339a0206174dbacae102207ebbda130f9919bea8fb2835e53b3a397340e4297fdf44c8a967bdf6d838f15641210374b12abf350ea6397f5d7f971deabbeeeecaf24fc356fac672c9567c506f3dccfeffffff040000000000000000406a04534c500001010453454e4420170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde208000000000000138808000000000140483022020000000000001976a914ed9026c379d71eb3d07f70d4e608075dc471deb688ac22020000000000001976a9146745fe53aba44a96b693beb6208a91d12ed36bef88ac8f810200000000001976a9146745fe53aba44a96b693beb6208a91d12ed36bef88acb44a0800',
  blockhash: '0000000000000000015bad75aa35ba272e8fad687c7eb150563ee4a4d0154404',
  confirmations: 171006,
  time: 1534273640,
  blocktime: 1534273640,
  blockheight: 543413,
  isSlpTx: true,
  tokenTxType: 'SEND',
  tokenId: '170147548aad6de7c1df686c56e4846e0936c4573411b604a18d0ec76482dde2',
  tokenType: 1,
  tokenTicker: '',
  tokenName: '',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: ''
}

const burnTx01 = {
  txid: '70d69e0f3d58e52526ef8136b20993b5b4d3f7c936771fd2f490ccfc5c019372',
  hash: '70d69e0f3d58e52526ef8136b20993b5b4d3f7c936771fd2f490ccfc5c019372',
  version: 2,
  size: 338,
  locktime: 0,
  vin: [
    {
      txid: '1361b8db2d000d842d75a7ba87a39b7af585de4c699a5bd334a8f8e378346767',
      vout: 0,
      scriptSig: {
        asm: '304402201b29a12d8a98d670f75ea2e0d0cfb1c9d9d6a9541cc96bdb0a1bed653825560d022055c66cebe5f50e3d7776c43f5779651ef3999b3e06e50c0ab2aa317193a02cf1[ALL|FORKID] 0204a8a6fae1ad31159cd2efe7022443d1b6f913cf1830ca190a0501321b41aa7c',
        hex: '47304402201b29a12d8a98d670f75ea2e0d0cfb1c9d9d6a9541cc96bdb0a1bed653825560d022055c66cebe5f50e3d7776c43f5779651ef3999b3e06e50c0ab2aa317193a02cf141210204a8a6fae1ad31159cd2efe7022443d1b6f913cf1830ca190a0501321b41aa7c'
      },
      sequence: 4294967295,
      address: 'bitcoincash:qp3t5cuncq2czduh27ps3jmz08m37ey3s5le8qca2f',
      value: 0.00039025
    },
    {
      txid: 'be7ebc3143e6f020cfc7a6b225ff0c291b8b22f51b391695bf409676cd501c5e',
      vout: 1,
      scriptSig: {
        asm: '3044022000b905700ac1ca7eed48ebcba5d575e7f67ff6e1fcc1a4f757e7948fa8d6c72502207255a3d3371891b5971800f71270eae0e52253de83710a8b1e344fd96d64cbaa[ALL|FORKID] 0204a8a6fae1ad31159cd2efe7022443d1b6f913cf1830ca190a0501321b41aa7c',
        hex: '473044022000b905700ac1ca7eed48ebcba5d575e7f67ff6e1fcc1a4f757e7948fa8d6c72502207255a3d3371891b5971800f71270eae0e52253de83710a8b1e344fd96d64cbaa41210204a8a6fae1ad31159cd2efe7022443d1b6f913cf1830ca190a0501321b41aa7c'
      },
      sequence: 4294967295,
      address: 'bitcoincash:qp3t5cuncq2czduh27ps3jmz08m37ey3s5le8qca2f',
      value: 0.00000546
    }
  ],
  vout: [
    {
      value: 0.00039196,
      n: 0,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 62ba6393c015813797578308cb6279f71f649185 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a91462ba6393c015813797578308cb6279f71f64918588ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qp3t5cuncq2czduh27ps3jmz08m37ey3s5le8qca2f'
        ]
      }
    }
  ],
  hex: '020000000267673478e3f8a834d35b9a694cde85f57a9ba387baa7752d840d002ddbb86113000000006a47304402201b29a12d8a98d670f75ea2e0d0cfb1c9d9d6a9541cc96bdb0a1bed653825560d022055c66cebe5f50e3d7776c43f5779651ef3999b3e06e50c0ab2aa317193a02cf141210204a8a6fae1ad31159cd2efe7022443d1b6f913cf1830ca190a0501321b41aa7cffffffff5e1c50cd769640bf9516391bf5228b1b290cff25b2a6c7cf20f0e64331bc7ebe010000006a473044022000b905700ac1ca7eed48ebcba5d575e7f67ff6e1fcc1a4f757e7948fa8d6c72502207255a3d3371891b5971800f71270eae0e52253de83710a8b1e344fd96d64cbaa41210204a8a6fae1ad31159cd2efe7022443d1b6f913cf1830ca190a0501321b41aa7cffffffff011c990000000000001976a91462ba6393c015813797578308cb6279f71f64918588ac00000000',
  blockhash: '0000000000000000023533068bba840b28d8e7ec54df6b05aff016d9791757fd',
  confirmations: 67,
  time: 1639066973,
  blocktime: 1639066973,
  blockheight: 717638,
  isSlpTx: false
}

const addrData01 = {
  utxos: [
    {
      txid: 'be7ebc3143e6f020cfc7a6b225ff0c291b8b22f51b391695bf409676cd501c5e',
      vout: 1,
      type: 'token',
      qty: '9900',
      tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
      address: 'bitcoincash:qp3t5cuncq2czduh27ps3jmz08m37ey3s5le8qca2f'
    }
  ],
  txs: [
    {
      txid: 'f3ad7418888fb5344394d511e373b53f99a41bd6ae35176533d7b5b5a6b21452',
      height: 717542
    },
    {
      txid: '06fff9287c909617720ab002f12a05cd2d6f314f2e1e888df8e44bffd848b905',
      height: 717546
    },
    {
      txid: 'be7ebc3143e6f020cfc7a6b225ff0c291b8b22f51b391695bf409676cd501c5e',
      height: 717555
    }
  ],
  balances: [
    {
      tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
      qty: '9900'
    }
  ]
}

const tokenData01 = {
  type: 1,
  ticker: 'TROUT',
  name: "Trout's test token",
  tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
  documentUri: 'troutsblog.com',
  documentHash: '',
  decimals: 2,
  mintBatonIsActive: true,
  tokensInCirculationBN: '100100000000',
  tokensInCirculationStr: '100100000000',
  blockCreated: 622414,
  totalBurned: '0',
  txs: []
}

module.exports = {
  twoTxDag01,
  twoTxDag02,
  twoTxDag03,
  forwardDagTx01,
  forwardDagTx02,
  forwardDagTx03,
  burnTx01,
  addrData01,
  tokenData01
}
