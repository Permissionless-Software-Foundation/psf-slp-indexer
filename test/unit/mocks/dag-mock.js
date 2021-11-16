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

module.exports = {
  slpSendTxData01,
  slpGenesisTxData01
}
