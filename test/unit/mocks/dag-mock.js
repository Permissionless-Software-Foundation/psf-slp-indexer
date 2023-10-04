/*
  Mock data for dag.unit.js tests
*/

const slpSendTxData01 = {
  txid: '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e',
  hash: '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e',
  version: 1,
  size: 480,
  locktime: 543408,
  vin: [
    {
      txid: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
      vout: 1,
      scriptSig: {
        asm: '30440220268dacee1117975d904dd0d45ef8de42b86030d825a9522bae196a38bbf6b271022001ae1ce2536ab300040e597bcfaa8ef9fb2beaf702d0842f3161aae8e9867f55[ALL|FORKID] 028ff9e32b0dbc82c1d5e0fc945b2537b00420513b10684726f312f1b717c0ae11',
        hex: '4730440220268dacee1117975d904dd0d45ef8de42b86030d825a9522bae196a38bbf6b271022001ae1ce2536ab300040e597bcfaa8ef9fb2beaf702d0842f3161aae8e9867f554121028ff9e32b0dbc82c1d5e0fc945b2537b00420513b10684726f312f1b717c0ae11'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qp2jesd06k8ycj4wvkpl9lcwaemtr04f5yphjsa07v',
      value: 0.00000546,
      tokenQtyStr: '10000000',
      tokenQty: 10000000,
      tokenId: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'
    },
    {
      txid: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
      vout: 3,
      scriptSig: {
        asm: '3045022100fa241bb2de46f68688451bfcae3f165b724e3ccf13b219e7bf2d8d2df7712ad60220353017d6e581a06efce478adfcd2047cea2f92531e283845f3d0a345ef101519[ALL|FORKID] 02cc48ad10516f97e914b8836ff25448d07ad96ebb4704c6a828339880280831bc',
        hex: '483045022100fa241bb2de46f68688451bfcae3f165b724e3ccf13b219e7bf2d8d2df7712ad60220353017d6e581a06efce478adfcd2047cea2f92531e283845f3d0a345ef101519412102cc48ad10516f97e914b8836ff25448d07ad96ebb4704c6a828339880280831bc'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qppj3euc36x5u6twr5cxrrea2rca53vsfu3dxwr86j',
      value: 0.00172192,
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
        asm: 'OP_RETURN 5262419 1 1145980243 323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35 00000000004c4b40 00000000004c4b40',
        hex: '6a04534c500001010453454e4420323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d350800000000004c4b400800000000004c4b40',
        type: 'nulldata'
      },
      tokenQty: null,
      tokenQtyStr: null
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 0a74cf9c0fb3f6dd62c3f5eecd1ed6e1051428e0 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9140a74cf9c0fb3f6dd62c3f5eecd1ed6e1051428e088ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qq98fnuup7eldhtzc067ang76mss29pguqh7qv9eac'
        ]
      },
      tokenQtyStr: '5000000',
      tokenQty: 5000000
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 d4548261e1be0de7e50b7511597799ec4af2b173 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914d4548261e1be0de7e50b7511597799ec4af2b17388ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qr29fqnpuxlqmel9pd63zkthn8ky4u43wv0v7pg5mn'
        ]
      },
      tokenQtyStr: '5000000',
      tokenQty: 5000000
    },
    {
      value: 0.00171165,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 d4548261e1be0de7e50b7511597799ec4af2b173 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914d4548261e1be0de7e50b7511597799ec4af2b17388ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qr29fqnpuxlqmel9pd63zkthn8ky4u43wv0v7pg5mn'
        ]
      },
      tokenQty: null,
      tokenQtyStr: null
    }
  ],
  hex: '0100000002359dab0d9c8ddc788b14c0b51493d195c9fbd9f2203d091663350bae351e3a32010000006a4730440220268dacee1117975d904dd0d45ef8de42b86030d825a9522bae196a38bbf6b271022001ae1ce2536ab300040e597bcfaa8ef9fb2beaf702d0842f3161aae8e9867f554121028ff9e32b0dbc82c1d5e0fc945b2537b00420513b10684726f312f1b717c0ae11feffffff359dab0d9c8ddc788b14c0b51493d195c9fbd9f2203d091663350bae351e3a32030000006b483045022100fa241bb2de46f68688451bfcae3f165b724e3ccf13b219e7bf2d8d2df7712ad60220353017d6e581a06efce478adfcd2047cea2f92531e283845f3d0a345ef101519412102cc48ad10516f97e914b8836ff25448d07ad96ebb4704c6a828339880280831bcfeffffff040000000000000000406a04534c500001010453454e4420323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d350800000000004c4b400800000000004c4b4022020000000000001976a9140a74cf9c0fb3f6dd62c3f5eecd1ed6e1051428e088ac22020000000000001976a914d4548261e1be0de7e50b7511597799ec4af2b17388ac9d9c0200000000001976a914d4548261e1be0de7e50b7511597799ec4af2b17388acb04a0800',
  blockhash: '000000000000000000292a9c6150fce48e2edd8df346948494fe6249e6e7f63b',
  confirmations: 170678,
  time: 1534271330,
  blocktime: 1534271330,
  blockheight: 543409,
  isSlpTx: true,
  tokenTxType: 'SEND',
  tokenId: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
  tokenType: 1,
  tokenTicker: '',
  tokenName: '',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: ''
}

const slpGenesisTxData01 = {
  txid: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
  hash: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
  version: 1,
  size: 306,
  locktime: 543403,
  vin: [
    {
      txid: '4f035d656ed5b6e94a884c88c09a8d2dee9c7e97901cce3adec966115e2a1ba5',
      vout: 2,
      scriptSig: {
        asm: '3045022100baeb639ca78e399a14b942d82b2e516dca90d20d2f87f0ec12f1c068880afd930220587369dc0dd2282a25ae24db08b7e52c1e26e4ddda6e8b9ec9d8350562283b21[ALL|FORKID] 039e4b148421503560104fea3ac85afc88e418566edfd7dd6089179053449e0144',
        hex: '483045022100baeb639ca78e399a14b942d82b2e516dca90d20d2f87f0ec12f1c068880afd930220587369dc0dd2282a25ae24db08b7e52c1e26e4ddda6e8b9ec9d8350562283b214121039e4b148421503560104fea3ac85afc88e418566edfd7dd6089179053449e0144'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qpwz6zycq3j5rhq40av6w7q3cvc04h0xhuv6xfsn6n',
      value: 0.0017359,
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
        asm: 'OP_RETURN 5262419 1 47454e45534953 0 0 0 0 0 2 0000000000989680',
        hex: '6a04534c500001010747454e455349534c004c004c004c0001000102080000000000989680',
        type: 'nulldata'
      },
      tokenQtyStr: '0',
      tokenQty: 0
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 552cc1afd58e4c4aae6583f2ff0eee76b1bea9a1 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914552cc1afd58e4c4aae6583f2ff0eee76b1bea9a188ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qp2jesd06k8ycj4wvkpl9lcwaemtr04f5yphjsa07v'
        ]
      },
      tokenQtyStr: '10000000',
      tokenQty: 10000000
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 552cc1afd58e4c4aae6583f2ff0eee76b1bea9a1 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914552cc1afd58e4c4aae6583f2ff0eee76b1bea9a188ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qp2jesd06k8ycj4wvkpl9lcwaemtr04f5yphjsa07v'
        ]
      },
      tokenQtyStr: '0',
      tokenQty: 0,
      isMintBaton: true
    },
    {
      value: 0.00172192,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 4328e7988e8d4e696e1d30618f3d50f1da45904f OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9144328e7988e8d4e696e1d30618f3d50f1da45904f88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qppj3euc36x5u6twr5cxrrea2rca53vsfu3dxwr86j'
        ]
      },
      tokenQtyStr: '0',
      tokenQty: 0
    }
  ],
  hex: '0100000001a51b2a5e1166c9de3ace1c90977e9cee2d8d9ac0884c884ae9b6d56e655d034f020000006b483045022100baeb639ca78e399a14b942d82b2e516dca90d20d2f87f0ec12f1c068880afd930220587369dc0dd2282a25ae24db08b7e52c1e26e4ddda6e8b9ec9d8350562283b214121039e4b148421503560104fea3ac85afc88e418566edfd7dd6089179053449e0144feffffff040000000000000000256a04534c500001010747454e455349534c004c004c004c000100010208000000000098968022020000000000001976a914552cc1afd58e4c4aae6583f2ff0eee76b1bea9a188ac22020000000000001976a914552cc1afd58e4c4aae6583f2ff0eee76b1bea9a188aca0a00200000000001976a9144328e7988e8d4e696e1d30618f3d50f1da45904f88acab4a0800',
  blockhash: '000000000000000001d94aa156f4cdcec70b06d2aa8fb0d63ff218f7ac3d955c',
  confirmations: 170709,
  time: 1534269216,
  blocktime: 1534269216,
  blockheight: 543404,
  isSlpTx: true,
  tokenTxType: 'GENESIS',
  tokenId: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
  tokenType: 1,
  tokenTicker: '',
  tokenName: '',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: ''
}

const threeTxTestData01 = {
  txid: '4e52e0ec21d26feb8bdcafdbe48d0f15662f1ba2b3bea8200bcf0a90d7c209ee',
  hash: '4e52e0ec21d26feb8bdcafdbe48d0f15662f1ba2b3bea8200bcf0a90d7c209ee',
  version: 1,
  size: 481,
  locktime: 545432,
  vin: [
    {
      txid: 'f55373b8e7d1d139981acbe818bf6de07c03f5a325a6dbab1fe724590fbdac46',
      vout: 2,
      scriptSig: {
        asm: '30450221008f8c8045f1244d94084dc38a5cbdac1cfb21b0f25d8db0a0288606c07256c3a002205c7be38fd72967b9cd833100e99acc95ff933e9e89273c5816049b054a4b45e3[ALL|FORKID] 02536185f1e3406386865af715e27688c9b06e53fd022ec0cfbe45a937c6859095',
        hex: '4830450221008f8c8045f1244d94084dc38a5cbdac1cfb21b0f25d8db0a0288606c07256c3a002205c7be38fd72967b9cd833100e99acc95ff933e9e89273c5816049b054a4b45e3412102536185f1e3406386865af715e27688c9b06e53fd022ec0cfbe45a937c6859095'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qqlqlsw473np86d5uganw4aw6fgxvpu5sct3hv8we7',
      value: 0.00000546,
      tokenQtyStr: '3999999',
      tokenQty: 3999999,
      tokenId: 'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501'
    },
    {
      txid: 'f55373b8e7d1d139981acbe818bf6de07c03f5a325a6dbab1fe724590fbdac46',
      vout: 3,
      scriptSig: {
        asm: '304502210092643cb66c6ac55c32948e66d22d158cfad2facb5da021a3fca818ab96280c5a02207926b5ed4534eb98b5416d6e092e77e5ff9870c4d3a5e342bdd45b297f5f191a[ALL|FORKID] 02536185f1e3406386865af715e27688c9b06e53fd022ec0cfbe45a937c6859095',
        hex: '48304502210092643cb66c6ac55c32948e66d22d158cfad2facb5da021a3fca818ab96280c5a02207926b5ed4534eb98b5416d6e092e77e5ff9870c4d3a5e342bdd45b297f5f191a412102536185f1e3406386865af715e27688c9b06e53fd022ec0cfbe45a937c6859095'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qqlqlsw473np86d5uganw4aw6fgxvpu5sct3hv8we7',
      value: 0.00003372,
      tokenQtyStr: 'NaN',
      tokenQty: null,
      tokenId: 'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501'
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 1 1145980243 d9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501 0000000000000190 00000000003d076f',
        hex: '6a04534c500001010453454e4420d9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc75010800000000000001900800000000003d076f',
        type: 'nulldata'
      },
      tokenQty: null,
      tokenQtyStr: null
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 5ac6f426c25771a63777e006ce0fb932a9d46e65 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9145ac6f426c25771a63777e006ce0fb932a9d46e6588ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qpdvdapxcfthrf3hwlsqdns0hye2n4rwv5ag33vwgx'
        ]
      },
      tokenQtyStr: '400',
      tokenQty: 400
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 faf0ed0f75ff7bdc142126a772a84a7d3a7c6085 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914faf0ed0f75ff7bdc142126a772a84a7d3a7c608588ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qra0pmg0whlhhhq5yyn2wu4gff7n5lrqs5s4qcz6dd'
        ]
      },
      tokenQtyStr: '3999599',
      tokenQty: 3999599
    },
    {
      value: 0.00001864,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 faf0ed0f75ff7bdc142126a772a84a7d3a7c6085 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914faf0ed0f75ff7bdc142126a772a84a7d3a7c608588ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qra0pmg0whlhhhq5yyn2wu4gff7n5lrqs5s4qcz6dd'
        ]
      },
      tokenQty: null,
      tokenQtyStr: null
    }
  ],
  hex: '010000000246acbd0f5924e71fabdba625a3f5037ce06dbf18e8cb1a9839d1d1e7b87353f5020000006b4830450221008f8c8045f1244d94084dc38a5cbdac1cfb21b0f25d8db0a0288606c07256c3a002205c7be38fd72967b9cd833100e99acc95ff933e9e89273c5816049b054a4b45e3412102536185f1e3406386865af715e27688c9b06e53fd022ec0cfbe45a937c6859095feffffff46acbd0f5924e71fabdba625a3f5037ce06dbf18e8cb1a9839d1d1e7b87353f5030000006b48304502210092643cb66c6ac55c32948e66d22d158cfad2facb5da021a3fca818ab96280c5a02207926b5ed4534eb98b5416d6e092e77e5ff9870c4d3a5e342bdd45b297f5f191a412102536185f1e3406386865af715e27688c9b06e53fd022ec0cfbe45a937c6859095feffffff040000000000000000406a04534c500001010453454e4420d9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc75010800000000000001900800000000003d076f22020000000000001976a9145ac6f426c25771a63777e006ce0fb932a9d46e6588ac22020000000000001976a914faf0ed0f75ff7bdc142126a772a84a7d3a7c608588ac48070000000000001976a914faf0ed0f75ff7bdc142126a772a84a7d3a7c608588ac98520800',
  blockhash: '000000000000000000fc8cea3b24cb5be5446c6ee17e06c0c47876a66a221fe3',
  confirmations: 168938,
  time: 1535488058,
  blocktime: 1535488058,
  blockheight: 545433,
  isSlpTx: true,
  tokenTxType: 'SEND',
  tokenId: 'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501',
  tokenType: 1,
  tokenTicker: 'TRACY',
  tokenName: 'TRACYSPACY',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: ''
}

const threeTxTestData02 = {
  txid: 'f55373b8e7d1d139981acbe818bf6de07c03f5a325a6dbab1fe724590fbdac46',
  hash: 'f55373b8e7d1d139981acbe818bf6de07c03f5a325a6dbab1fe724590fbdac46',
  version: 1,
  size: 479,
  locktime: 545432,
  vin: [
    {
      txid: 'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501',
      vout: 1,
      scriptSig: {
        asm: '3044022064ecace59274f36a1fbc9a467ee024614a72c3e9310cac660f18f2d72e5aec2b022060f465096661326bc327a21b14d0fbb5664b9175214bfd9d05d039ee6c253120[ALL|FORKID] 02b01fa126d266a040e581b58e1f5faf8908d842475d834d8885c475d7e7f7152e',
        hex: '473044022064ecace59274f36a1fbc9a467ee024614a72c3e9310cac660f18f2d72e5aec2b022060f465096661326bc327a21b14d0fbb5664b9175214bfd9d05d039ee6c253120412102b01fa126d266a040e581b58e1f5faf8908d842475d834d8885c475d7e7f7152e'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qpuac0a5wn7lnjfrhj40ghwzde7ay8adfu57n79kzn',
      value: 0.00000546,
      tokenQtyStr: '4000000',
      tokenQty: 4000000,
      tokenId: 'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501'
    },
    {
      txid: 'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501',
      vout: 2,
      scriptSig: {
        asm: '3044022046699889b53a69982d85ad934f4b4bbd45ef4fbdd8bcee437ece5dfd9224a60802202471196f93beeac7ba290ee2bfc822cea09b48dd8d4126d8e23808928164690c[ALL|FORKID] 03c47d7f2515b5092f6523cb07e10aafcadfed142c116c9f7e172dc61e71be91ea',
        hex: '473044022046699889b53a69982d85ad934f4b4bbd45ef4fbdd8bcee437ece5dfd9224a60802202471196f93beeac7ba290ee2bfc822cea09b48dd8d4126d8e23808928164690c412103c47d7f2515b5092f6523cb07e10aafcadfed142c116c9f7e172dc61e71be91ea'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qruqv0jzqdy6zd656zq2awqdsmsq9sht5qxp6zrnd8',
      value: 0.00006323,
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
        asm: 'OP_RETURN 5262419 1 1145980243 d9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501 0000000000000001 00000000003d08ff',
        hex: '6a04534c500001010453454e4420d9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc75010800000000000000010800000000003d08ff',
        type: 'nulldata'
      },
      tokenQty: null,
      tokenQtyStr: null
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 f4f0d52af68f1eb2b13ea3db72e39cfe56ddc244 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914f4f0d52af68f1eb2b13ea3db72e39cfe56ddc24488ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qr60p4f27683av43863akuhrnnl9dhwzgs9x9lujwl'
        ]
      },
      tokenQtyStr: '1',
      tokenQty: 1
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 3e0fc1d5f46613e9b4e23b3757aed25066079486 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9143e0fc1d5f46613e9b4e23b3757aed2506607948688ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qqlqlsw473np86d5uganw4aw6fgxvpu5sct3hv8we7'
        ]
      },
      tokenQtyStr: '3999999',
      tokenQty: 3999999
    },
    {
      value: 0.00003372,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 3e0fc1d5f46613e9b4e23b3757aed25066079486 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9143e0fc1d5f46613e9b4e23b3757aed2506607948688ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qqlqlsw473np86d5uganw4aw6fgxvpu5sct3hv8we7'
        ]
      },
      tokenQty: null,
      tokenQtyStr: null
    }
  ],
  hex: '01000000020175cc212f0e49c3fb22798ae6a392033146054056583f54458957042716aad9010000006a473044022064ecace59274f36a1fbc9a467ee024614a72c3e9310cac660f18f2d72e5aec2b022060f465096661326bc327a21b14d0fbb5664b9175214bfd9d05d039ee6c253120412102b01fa126d266a040e581b58e1f5faf8908d842475d834d8885c475d7e7f7152efeffffff0175cc212f0e49c3fb22798ae6a392033146054056583f54458957042716aad9020000006a473044022046699889b53a69982d85ad934f4b4bbd45ef4fbdd8bcee437ece5dfd9224a60802202471196f93beeac7ba290ee2bfc822cea09b48dd8d4126d8e23808928164690c412103c47d7f2515b5092f6523cb07e10aafcadfed142c116c9f7e172dc61e71be91eafeffffff040000000000000000406a04534c500001010453454e4420d9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc75010800000000000000010800000000003d08ff22020000000000001976a914f4f0d52af68f1eb2b13ea3db72e39cfe56ddc24488ac22020000000000001976a9143e0fc1d5f46613e9b4e23b3757aed2506607948688ac2c0d0000000000001976a9143e0fc1d5f46613e9b4e23b3757aed2506607948688ac98520800',
  blockhash: '000000000000000000fc8cea3b24cb5be5446c6ee17e06c0c47876a66a221fe3',
  confirmations: 168938,
  time: 1535488058,
  blocktime: 1535488058,
  blockheight: 545433,
  isSlpTx: true,
  tokenTxType: 'SEND',
  tokenId: 'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501',
  tokenType: 1,
  tokenTicker: 'TRACY',
  tokenName: 'TRACYSPACY',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: ''
}

const threeTxTestData03 = {
  txid: 'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501',
  hash: 'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501',
  version: 1,
  size: 285,
  locktime: 508031,
  vin: [
    {
      txid: '25b2cf364d42dd5baa313707a9e2ff633dcf4a260edd6d8304911b87321017e2',
      vout: 3,
      scriptSig: {
        asm: '3045022100f158d1bf77d68dbad54f90313cef1abaeb7dd793d8410bcc7298d8c5ffcf2dd702206bcd3a057808f683cb8464a29d5c9ed744fd4c8b2bbc3e11e887127fd6daa98f[ALL|FORKID] 0336d05aac73f4288e2b20803a5a5bd8dcc00c0e8350db9f65eebe038ea6bb8e59',
        hex: '483045022100f158d1bf77d68dbad54f90313cef1abaeb7dd793d8410bcc7298d8c5ffcf2dd702206bcd3a057808f683cb8464a29d5c9ed744fd4c8b2bbc3e11e887127fd6daa98f41210336d05aac73f4288e2b20803a5a5bd8dcc00c0e8350db9f65eebe038ea6bb8e59'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qq0cm6k2d7lwdxthwv7rcfxfne677ezvavpsssw0wv',
      value: 0.00007154,
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
        asm: 'OP_RETURN 5262419 1 47454e45534953 5452414359 54524143595350414359 0 0 0 0 00000000003d0900',
        hex: '6a04534c500001010747454e455349530554524143590a545241435953504143594c004c0001004c000800000000003d0900',
        type: 'nulldata'
      },
      tokenQtyStr: '0',
      tokenQty: 0,
      isMintBaton: true
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 79dc3fb474fdf9c923bcaaf45dc26e7dd21fad4f OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a91479dc3fb474fdf9c923bcaaf45dc26e7dd21fad4f88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qpuac0a5wn7lnjfrhj40ghwzde7ay8adfu57n79kzn'
        ]
      },
      tokenQtyStr: '4000000',
      tokenQty: 4000000
    },
    {
      value: 0.00006323,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 f8063e420349a13754d080aeb80d86e002c2eba0 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914f8063e420349a13754d080aeb80d86e002c2eba088ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qruqv0jzqdy6zd656zq2awqdsmsq9sht5qxp6zrnd8'
        ]
      },
      tokenQtyStr: '0',
      tokenQty: 0
    }
  ],
  hex: '0100000001e2171032871b9104836ddd0e264acf3d63ffe2a9073731aa5bdd424d36cfb225030000006b483045022100f158d1bf77d68dbad54f90313cef1abaeb7dd793d8410bcc7298d8c5ffcf2dd702206bcd3a057808f683cb8464a29d5c9ed744fd4c8b2bbc3e11e887127fd6daa98f41210336d05aac73f4288e2b20803a5a5bd8dcc00c0e8350db9f65eebe038ea6bb8e59feffffff030000000000000000326a04534c500001010747454e455349530554524143590a545241435953504143594c004c0001004c000800000000003d090022020000000000001976a91479dc3fb474fdf9c923bcaaf45dc26e7dd21fad4f88acb3180000000000001976a914f8063e420349a13754d080aeb80d86e002c2eba088ac7fc00700',
  blockhash: '0000000000000000010ae5d428cbe866bbed91f528f91732fbf5ce8649ef2ea4',
  confirmations: 168940,
  time: 1535486440,
  blocktime: 1535486440,
  blockheight: 545431,
  isSlpTx: true,
  tokenTxType: 'GENESIS',
  tokenId: 'd9aa162704578945543f5856400546310392a3e68a7922fbc3490e2f21cc7501',
  tokenType: 1,
  tokenTicker: 'TRACY',
  tokenName: 'TRACYSPACY',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: ''
}

const cachedTxParent01 = {
  txid: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
  hash: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
  version: 1,
  size: 306,
  locktime: 543403,
  vin: [
    {
      txid: '4f035d656ed5b6e94a884c88c09a8d2dee9c7e97901cce3adec966115e2a1ba5',
      vout: 2,
      scriptSig: [Object],
      sequence: 4294967294,
      address: 'bitcoincash:qpwz6zycq3j5rhq40av6w7q3cvc04h0xhuv6xfsn6n',
      value: 0.0017359,
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
      opReturnData: [Object],
      tokenQtyStr: '0',
      tokenQty: 0
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: [Object],
      tokenQtyStr: '10000000',
      tokenQty: 10000000
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
      value: 0.00172192,
      n: 3,
      scriptPubKey: [Object],
      tokenQtyStr: '0',
      tokenQty: 0
    }
  ],
  hex: '0100000001a51b2a5e1166c9de3ace1c90977e9cee2d8d9ac0884c884ae9b6d56e655d034f020000006b483045022100baeb639ca78e399a14b942d82b2e516dca90d20d2f87f0ec12f1c068880afd930220587369dc0dd2282a25ae24db08b7e52c1e26e4ddda6e8b9ec9d8350562283b214121039e4b148421503560104fea3ac85afc88e418566edfd7dd6089179053449e0144feffffff040000000000000000256a04534c500001010747454e455349534c004c004c004c000100010208000000000098968022020000000000001976a914552cc1afd58e4c4aae6583f2ff0eee76b1bea9a188ac22020000000000001976a914552cc1afd58e4c4aae6583f2ff0eee76b1bea9a188aca0a00200000000001976a9144328e7988e8d4e696e1d30618f3d50f1da45904f88acab4a0800',
  blockhash: '000000000000000001d94aa156f4cdcec70b06d2aa8fb0d63ff218f7ac3d955c',
  confirmations: 270175,
  time: 1534269216,
  blocktime: 1534269216,
  blockheight: 543404,
  isSlpTx: true,
  tokenTxType: 'GENESIS',
  tokenId: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
  tokenType: 1,
  tokenTicker: '',
  tokenName: '',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: '',
  isValidSlp: true
}

const cachedTx01 = {
  txid: '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e',
  hash: '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e',
  version: 1,
  size: 480,
  locktime: 543408,
  vin: [
    {
      txid: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
      vout: 1,
      scriptSig: [Object],
      sequence: 4294967294,
      address: 'bitcoincash:qp2jesd06k8ycj4wvkpl9lcwaemtr04f5yphjsa07v',
      value: 0.00000546,
      tokenQtyStr: '10000000',
      tokenQty: 10000000,
      tokenId: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'
    },
    {
      txid: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
      vout: 3,
      scriptSig: [Object],
      sequence: 4294967294,
      address: 'bitcoincash:qppj3euc36x5u6twr5cxrrea2rca53vsfu3dxwr86j',
      value: 0.00172192,
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
      tokenQtyStr: '5000000',
      tokenQty: 5000000
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: [Object],
      tokenQtyStr: '5000000',
      tokenQty: 5000000
    },
    {
      value: 0.00171165,
      n: 3,
      scriptPubKey: [Object],
      tokenQty: null,
      tokenQtyStr: null
    }
  ],
  hex: '0100000002359dab0d9c8ddc788b14c0b51493d195c9fbd9f2203d091663350bae351e3a32010000006a4730440220268dacee1117975d904dd0d45ef8de42b86030d825a9522bae196a38bbf6b271022001ae1ce2536ab300040e597bcfaa8ef9fb2beaf702d0842f3161aae8e9867f554121028ff9e32b0dbc82c1d5e0fc945b2537b00420513b10684726f312f1b717c0ae11feffffff359dab0d9c8ddc788b14c0b51493d195c9fbd9f2203d091663350bae351e3a32030000006b483045022100fa241bb2de46f68688451bfcae3f165b724e3ccf13b219e7bf2d8d2df7712ad60220353017d6e581a06efce478adfcd2047cea2f92531e283845f3d0a345ef101519412102cc48ad10516f97e914b8836ff25448d07ad96ebb4704c6a828339880280831bcfeffffff040000000000000000406a04534c500001010453454e4420323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d350800000000004c4b400800000000004c4b4022020000000000001976a9140a74cf9c0fb3f6dd62c3f5eecd1ed6e1051428e088ac22020000000000001976a914d4548261e1be0de7e50b7511597799ec4af2b17388ac9d9c0200000000001976a914d4548261e1be0de7e50b7511597799ec4af2b17388acb04a0800',
  blockhash: '000000000000000000292a9c6150fce48e2edd8df346948494fe6249e6e7f63b',
  confirmations: 270171,
  time: 1534271330,
  blocktime: 1534271330,
  blockheight: 543409,
  isSlpTx: true,
  tokenTxType: 'SEND',
  tokenId: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
  tokenType: 1,
  tokenTicker: '',
  tokenName: '',
  tokenDecimals: 0,
  tokenUri: '',
  tokenDocHash: ''
}


export default {
  slpSendTxData01,
  slpGenesisTxData01,
  threeTxTestData01,
  threeTxTestData02,
  threeTxTestData03,
  cachedTxParent01,
  cachedTx01
}
