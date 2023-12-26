/*
  Mocking data used in the transaction-unit.js tests.
*/

const nonSlpTxDetails = {
  txid: '2b37bdb3b63dd0bca720437754a36671431a950e684b64c44ea910ea9d5297c7',
  hash: '2b37bdb3b63dd0bca720437754a36671431a950e684b64c44ea910ea9d5297c7',
  version: 2,
  size: 225,
  locktime: 0,
  vin: [
    {
      txid: '5f09d317e24c5d376f737a2711f3bd1d381abdb41743fff3819b4f76382e1eac',
      vout: 1,
      scriptSig: {
        asm: '3044022000dd11c41a472f2e54348db996e60864d489429f12d1e044d49ff600b880c9590220715a926404bb0e2731a3795afb341ec1dad3f84ead7d27cd31fcc59abb14738c[ALL|FORKID] 038476128287ac37c7a3cf7e8625fd5f024db1bc3d8e37395abe7bf42fda78d0d9',
        hex: '473044022000dd11c41a472f2e54348db996e60864d489429f12d1e044d49ff600b880c9590220715a926404bb0e2731a3795afb341ec1dad3f84ead7d27cd31fcc59abb14738c4121038476128287ac37c7a3cf7e8625fd5f024db1bc3d8e37395abe7bf42fda78d0d9'
      },
      sequence: 4294967295,
      address: 'bitcoincash:qqxy8hycqe89j7wa79gnggq6z3gaqu2uvqy26xehfe',
      value: 0.00047504
    }
  ],
  vout: [
    {
      value: 0.00001,
      n: 0,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 2fe2c4c5ef359bb2fe1a849f891cecffbcfb4f77 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9142fe2c4c5ef359bb2fe1a849f891cecffbcfb4f7788ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qqh793x9au6ehvh7r2zflzguanlme760wuzehgzjh9']
      }
    },
    {
      value: 0.00046256,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 2dbf5e1804c39a497b908c876097d63210c84902 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9142dbf5e1804c39a497b908c876097d63210c8490288ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qqkm7hscqnpe5jtmjzxgwcyh6ceppjzfqg3jdn422e']
      }
    }
  ],
  hex: '0200000001ac1e2e38764f9b81f3ff4317b4bd1a381dbdf311277a736f375d4ce217d3095f010000006a473044022000dd11c41a472f2e54348db996e60864d489429f12d1e044d49ff600b880c9590220715a926404bb0e2731a3795afb341ec1dad3f84ead7d27cd31fcc59abb14738c4121038476128287ac37c7a3cf7e8625fd5f024db1bc3d8e37395abe7bf42fda78d0d9ffffffff02e8030000000000001976a9142fe2c4c5ef359bb2fe1a849f891cecffbcfb4f7788acb0b40000000000001976a9142dbf5e1804c39a497b908c876097d63210c8490288ac00000000',
  blockhash: '0000000000000000010903a1fc4274499037c9339be9ec7338ee980331c20ce5',
  confirmations: 77741,
  time: 1569792892,
  blocktime: 1569792892
}

const nonSLPTxDetailsWithOpReturn = {
  txid: '2ff74c48a5d657cf45f699601990bffbbe7a2a516d5480674cbf6c6a4497908f',
  hash: '2ff74c48a5d657cf45f699601990bffbbe7a2a516d5480674cbf6c6a4497908f',
  version: 1,
  size: 271,
  locktime: 0,
  vin: [
    {
      txid: '6a81a401ec165eccd08c5c5a57a2185056675bbf2380d515c418b7a4c04db40a',
      vout: 1,
      scriptSig: {
        asm: '30440220168a04932175c6d6b10947ebef23c53ff2e905bb8dfb7d1aec961944f83bf20e0220724ad7a459bb31174b9e6cbbc73260c9a62d32dda2c47f5d7c5351b5eb9cd944[ALL|FORKID] 0467ff2df20f28bc62ad188525868f41d461f7dab3c1e500314cdb5218e5637bfd0f9c02eb5b3f383f698d28ff13547eaf05dd9216130861dd0216824e9d7337e3',
        hex: '4730440220168a04932175c6d6b10947ebef23c53ff2e905bb8dfb7d1aec961944f83bf20e0220724ad7a459bb31174b9e6cbbc73260c9a62d32dda2c47f5d7c5351b5eb9cd94441410467ff2df20f28bc62ad188525868f41d461f7dab3c1e500314cdb5218e5637bfd0f9c02eb5b3f383f698d28ff13547eaf05dd9216130861dd0216824e9d7337e3'
      },
      sequence: 4294967295
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN -802180445 46386600368a3e883cd68c6939ab8c0a3c91537a3be6d9be35e42b8e37cfc92c',
        hex: '6a045d4dd0af2046386600368a3e883cd68c6939ab8c0a3c91537a3be6d9be35e42b8e37cfc92c',
        type: 'nulldata'
      }
    },
    {
      value: 0.00002626,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 066ebee590278f32aedc8a4865700c49e717f1d7 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914066ebee590278f32aedc8a4865700c49e717f1d788ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qqrxa0h9jqnc7v4wmj9ysetsp3y7w9l36u8gnnjulq']
      }
    }
  ],
  hex: '01000000010ab44dc0a4b718c415d58023bf5b67565018a2575a5c8cd0cc5e16ec01a4816a010000008a4730440220168a04932175c6d6b10947ebef23c53ff2e905bb8dfb7d1aec961944f83bf20e0220724ad7a459bb31174b9e6cbbc73260c9a62d32dda2c47f5d7c5351b5eb9cd94441410467ff2df20f28bc62ad188525868f41d461f7dab3c1e500314cdb5218e5637bfd0f9c02eb5b3f383f698d28ff13547eaf05dd9216130861dd0216824e9d7337e3ffffffff020000000000000000276a045d4dd0af2046386600368a3e883cd68c6939ab8c0a3c91537a3be6d9be35e42b8e37cfc92c420a0000000000001976a914066ebee590278f32aedc8a4865700c49e717f1d788ac00000000',
  blockhash: '0000000000000000014bf37d1253e3c46f0e6f151bd6cca13f8093e76c31496d',
  confirmations: 1571,
  time: 1565380800,
  blocktime: 1565380800
}

const slpTxDetails = {
  txid: '266844d53e46bbd7dd37134688dffea6e54d944edff27a0add63dd0908839bc1',
  hash: '266844d53e46bbd7dd37134688dffea6e54d944edff27a0add63dd0908839bc1',
  version: 2,
  size: 479,
  locktime: 0,
  vin: [
    {
      txid: 'abc685f1f2a95f51e5e05a350f3fb9c74676e9f78c835b2a019c888ac0a2a736',
      vout: 2,
      scriptSig: {
        asm: '3045022100e5f0f6f1212fcbb10eedb7fdc38fca6e86629b4e7e8356a3ad7371a109fc37a602204bfff37d1a34d2e2908b81c23677706fb59ff4ab639fa3299da6c303de74e1f7[ALL|FORKID] 0245b9b3586fab3cfd46db6d116c4588004fe7fe9798216ccb8e55a89bcebc07ac',
        hex: '483045022100e5f0f6f1212fcbb10eedb7fdc38fca6e86629b4e7e8356a3ad7371a109fc37a602204bfff37d1a34d2e2908b81c23677706fb59ff4ab639fa3299da6c303de74e1f741210245b9b3586fab3cfd46db6d116c4588004fe7fe9798216ccb8e55a89bcebc07ac'
      },
      sequence: 4294967295,
      address: 'bitcoincash:qzv7t2pzn2d0pklnetdjt65crh6fe8vnhuwvhsk2nn',
      value: 0.00000546
    },
    {
      txid: '58c8576404c01c23a224053307399483d3a070599b3e9eb6d45be9714b8d6856',
      vout: 1,
      scriptSig: {
        asm: '30430220784f6d81fa8f54db8a4948259e8c15972a0285f8b1640c433d4e9f606dc38f0c021f14eecc2e8af2efede0867ce459c400dde54186a0e64babdbe89f795db12753[ALL|FORKID] 0209ebe6d9da5043945ed1d81bec0fcace299eba05e5f46b72d6838c790d31c505',
        hex: '4630430220784f6d81fa8f54db8a4948259e8c15972a0285f8b1640c433d4e9f606dc38f0c021f14eecc2e8af2efede0867ce459c400dde54186a0e64babdbe89f795db1275341210209ebe6d9da5043945ed1d81bec0fcace299eba05e5f46b72d6838c790d31c505'
      },
      sequence: 4294967295,
      address: 'bitcoincash:qppzuxemgqyxf07nz3kan33gmc83mf3z3yz295c4s7',
      value: 0.68369626
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 1 1145980243 497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7 0000000005f5e100 00005ad7e49d9100',
        hex: '6a04534c500001010453454e4420497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7080000000005f5e1000800005ad7e49d9100',
        type: 'nulldata'
      }
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 36be3b7d185a85b6cf6fc61d63c16f2f10e54260 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a91436be3b7d185a85b6cf6fc61d63c16f2f10e5426088ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qqmtuwmarpdgtdk0dlrp6c7pduh3pe2zvqrkys2ex8']
      }
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 99e5a8229a9af0dbf3cadb25ea981df49c9d93bf OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a91499e5a8229a9af0dbf3cadb25ea981df49c9d93bf88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qzv7t2pzn2d0pklnetdjt65crh6fe8vnhuwvhsk2nn']
      }
    },
    {
      value: 0.68368564,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 422e1b3b400864bfd3146dd9c628de0f1da62289 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914422e1b3b400864bfd3146dd9c628de0f1da6228988ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qppzuxemgqyxf07nz3kan33gmc83mf3z3yz295c4s7']
      }
    }
  ],
  hex: '020000000236a7a2c08a889c012a5b838cf7e97646c7b93f0f355ae0e5515fa9f2f185c6ab020000006b483045022100e5f0f6f1212fcbb10eedb7fdc38fca6e86629b4e7e8356a3ad7371a109fc37a602204bfff37d1a34d2e2908b81c23677706fb59ff4ab639fa3299da6c303de74e1f741210245b9b3586fab3cfd46db6d116c4588004fe7fe9798216ccb8e55a89bcebc07acffffffff56688d4b71e95bd4b69e3e9b5970a0d383943907330524a2231cc0046457c85801000000694630430220784f6d81fa8f54db8a4948259e8c15972a0285f8b1640c433d4e9f606dc38f0c021f14eecc2e8af2efede0867ce459c400dde54186a0e64babdbe89f795db1275341210209ebe6d9da5043945ed1d81bec0fcace299eba05e5f46b72d6838c790d31c505ffffffff040000000000000000406a04534c500001010453454e4420497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7080000000005f5e1000800005ad7e49d910022020000000000001976a91436be3b7d185a85b6cf6fc61d63c16f2f10e5426088ac22020000000000001976a91499e5a8229a9af0dbf3cadb25ea981df49c9d93bf88acb4381304000000001976a914422e1b3b400864bfd3146dd9c628de0f1da6228988ac00000000',
  blockhash: '0000000000000000015284202422a688554b7fc80c54f18122847a99c4f79607',
  confirmations: 76722,
  time: 1570392893,
  blocktime: 1570392893
}

const mockOpReturnData01 = {
  tokenType: 1,
  txType: 'SEND',
  tokenId: '497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7',
  amounts: ['100000000', '99883300000000']
}

const mockOpReturnData02 = {
  tokenType: 1,
  txType: 'GENESIS',
  ticker: 'TOK-CH',
  name: 'TokyoCash',
  tokenId: '497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7',
  documentUri: '',
  documentHash: '',
  decimals: 8,
  mintBatonVout: 0,
  qty: '2100000000000000'
}

const mockOpReturnData03 = {
  tokenType: 1,
  txType: 'SEND',
  tokenId: '497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7',
  amounts: ['1000000000', '99883400000000']
}

const genesisTestInputTx = {
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
      value: 0.00000546
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
      value: 0.00172192
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
      }
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 0a74cf9c0fb3f6dd62c3f5eecd1ed6e1051428e0 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9140a74cf9c0fb3f6dd62c3f5eecd1ed6e1051428e088ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qq98fnuup7eldhtzc067ang76mss29pguqh7qv9eac']
      }
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 d4548261e1be0de7e50b7511597799ec4af2b173 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914d4548261e1be0de7e50b7511597799ec4af2b17388ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qr29fqnpuxlqmel9pd63zkthn8ky4u43wv0v7pg5mn']
      }
    },
    {
      value: 0.00171165,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 d4548261e1be0de7e50b7511597799ec4af2b173 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914d4548261e1be0de7e50b7511597799ec4af2b17388ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qr29fqnpuxlqmel9pd63zkthn8ky4u43wv0v7pg5mn']
      }
    }
  ],
  hex: '0100000002359dab0d9c8ddc788b14c0b51493d195c9fbd9f2203d091663350bae351e3a32010000006a4730440220268dacee1117975d904dd0d45ef8de42b86030d825a9522bae196a38bbf6b271022001ae1ce2536ab300040e597bcfaa8ef9fb2beaf702d0842f3161aae8e9867f554121028ff9e32b0dbc82c1d5e0fc945b2537b00420513b10684726f312f1b717c0ae11feffffff359dab0d9c8ddc788b14c0b51493d195c9fbd9f2203d091663350bae351e3a32030000006b483045022100fa241bb2de46f68688451bfcae3f165b724e3ccf13b219e7bf2d8d2df7712ad60220353017d6e581a06efce478adfcd2047cea2f92531e283845f3d0a345ef101519412102cc48ad10516f97e914b8836ff25448d07ad96ebb4704c6a828339880280831bcfeffffff040000000000000000406a04534c500001010453454e4420323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d350800000000004c4b400800000000004c4b4022020000000000001976a9140a74cf9c0fb3f6dd62c3f5eecd1ed6e1051428e088ac22020000000000001976a914d4548261e1be0de7e50b7511597799ec4af2b17388ac9d9c0200000000001976a914d4548261e1be0de7e50b7511597799ec4af2b17388acb04a0800',
  blockhash: '000000000000000000292a9c6150fce48e2edd8df346948494fe6249e6e7f63b',
  confirmations: 163095,
  time: 1534271330,
  blocktime: 1534271330
}

const mintTestInputTx = {
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
      tokenQtyStr: '43545.34534',
      tokenQty: 43545.34534
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
      tokenQty: 2.34123
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
      tokenQtyStr: '2.34123',
      tokenQty: 2.34123
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
      tokenQty: null
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
      tokenQty: null
    }
  ],
  hex: '0100000003f8cda53b43b0ea49991a9bc6c74eb901d2a8b964bc7b8987d76789618ec18c93010000006b483045022100e3d5f9a48f9aa1cf7e9ed1992e0281e7300b734ba0e4bd5bb9265b2be60bd71002200ccde53ce7ea9da9df3e834f234f3bea65c2e58c96f8436f93333fd8946a1db2412102056220984cc2cf5261a27d4f66d31c9ef601a688ca1a5ab81e55b6f0d311be74feffffff34dbf62a45295ae11c2a45f44368218ec64498ac3f7e1434c1993515f53c9dee010000006b483045022100bb90d52be9b568f643fdb1a302e9f063be27a9f914e2a6b192cbabf2cbdeaf9302203c275fc8d1b82390bc1726390d361c5266056bddd54dec23efa207c79eacea4a4121024146cfcd0c02e99d6451dc48ad0f97114aeda18fe55c52a10bfc0490f314e6a2feffffff34dbf62a45295ae11c2a45f44368218ec64498ac3f7e1434c1993515f53c9dee030000006a473044022029ab770c249f467b40bb90410429f6d657f9be299baa19a6838d04d972436b450220143660297e8e836bc16d317649fad8c310bdadb4fb61d4e9f6ba11203abe5dae412102eed4ac9dda3405d9b1ccbbf09f8056f3e7c615924274bd5643238b543d0a1d56feffffff030000000000000000376a04534c500001010453454e4420938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8080000000103907f1122020000000000001976a914059775ff94f65c04e8a6847e74eb9809d8cd779b88ac18d60000000000001976a9140e330dc9009e1e07831f5a22d4ade8977ab674c888ac7d4b0800',
  blockhash: '00000000000000000140f0d813052da59c811a936494a8d8b2d60b215d19e3dc',
  confirmations: 167007,
  time: 1534391953,
  blocktime: 1534391953,
  isValidSLPTx: true,
  tokenTxType: 'SEND',
  tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
  tokenTicker: 'Bubb2',
  tokenName: 'the new bubbles!',
  tokenDecimals: 5,
  tokenUri: '',
  tokenDocHash: ''
}

const genesisTestOpReturnData01 = {
  tokenType: 1,
  txType: 'SEND',
  tokenId: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
  amounts: ['5000000', '5000000']
}

const genesisTestOpReturnData02 = {
  tokenType: 1,
  txType: 'GENESIS',
  ticker: '',
  name: '',
  tokenId: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
  documentUri: '',
  documentHash: '',
  decimals: 0,
  mintBatonVout: 2,
  qty: '10000000'
}

const mintTestOpReturnData01 = {
  tokenType: 1,
  txType: 'SEND',
  tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
  amounts: ['4354768657']
}

const mintTestOpReturnData02 = {
  tokenType: 1,
  txType: 'GENESIS',
  ticker: 'Bubb2',
  name: 'the new bubbles!',
  tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
  documentUri: '',
  documentHash: '',
  decimals: 5,
  mintBatonVout: 2,
  qty: '4354534534'
}

const mintTestOpReturnData03 = {
  tokenType: 1,
  txType: 'MINT',
  tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
  mintBatonVout: 2,
  qty: '234123'
}

const sendTestInputTx01 = {
  txid: '6bc111fbf5b118021d68355ca19a0e77fa358dd931f284b2550f79a51ab4792a',
  hash: '6bc111fbf5b118021d68355ca19a0e77fa358dd931f284b2550f79a51ab4792a',
  version: 1,
  size: 627,
  locktime: 543956,
  vin: [
    {
      txid: 'b36b0c7485ad569b98cc9b9614dc68a5208495f22ec3b00effcf963b135a5215',
      vout: 1,
      scriptSig: {
        asm: '3045022100934ca9732bf6c1b146f09e6198142a79a80788b576c6b94e2052df5bcdc86ad902205ef6205192200ea93f6c97f966b838ee785529b694eb61e576e3452470613847[ALL|FORKID] 02b23484341cf36ec00184e045d54e6ffca97da7a8f8a6fd719cead192132306b1',
        hex: '483045022100934ca9732bf6c1b146f09e6198142a79a80788b576c6b94e2052df5bcdc86ad902205ef6205192200ea93f6c97f966b838ee785529b694eb61e576e3452470613847412102b23484341cf36ec00184e045d54e6ffca97da7a8f8a6fd719cead192132306b1'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qqxj7p2jatt8h3tcpadyxw8a2mr7myqk2qm57u4rdf',
      value: 0.00000546
    },
    {
      txid: 'b36b0c7485ad569b98cc9b9614dc68a5208495f22ec3b00effcf963b135a5215',
      vout: 3,
      scriptSig: {
        asm: '3044022004d4a95658ef140561ae3a936fb01511778a5376a499bcd6f47b64074a6ca4430220273a4bf553ca17c7e10f393582f980e17a6a98ada867633faad9dbcc595dfd23[ALL|FORKID] 0324fe3b895cfa09523e8ec529eb15c681e3a20f96df85175c54a952b68ac018df',
        hex: '473044022004d4a95658ef140561ae3a936fb01511778a5376a499bcd6f47b64074a6ca4430220273a4bf553ca17c7e10f393582f980e17a6a98ada867633faad9dbcc595dfd2341210324fe3b895cfa09523e8ec529eb15c681e3a20f96df85175c54a952b68ac018df'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qrcdncgpnv3s8lekcamv4yekp8sghnk37qtsxdyzla',
      value: 0.00153976
    },
    {
      txid: '95d460512143b636bbc5780d8b27b04fca3bfd2f22003ab48da594e2bab9cfc1',
      vout: 2,
      scriptSig: {
        asm: '3044022079f239216f8d806a084221e841227e55d23a1b90aaf5b5ab54d6f865fbeacf8b022053568f10afc00459af083e4c77d0b85229eb8973a1de406aaa699557f05c7fed[ALL|FORKID] 02035f98ff79d6f3a8ec5a2738c103bbb7796e94fcaffdfaae8f5b7a7fae5d93e3',
        hex: '473044022079f239216f8d806a084221e841227e55d23a1b90aaf5b5ab54d6f865fbeacf8b022053568f10afc00459af083e4c77d0b85229eb8973a1de406aaa699557f05c7fed412102035f98ff79d6f3a8ec5a2738c103bbb7796e94fcaffdfaae8f5b7a7fae5d93e3'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qrcukahsm53lsywcdarehh73vqazpdu8zv547nym9g',
      value: 0.00000546
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 1 1145980243 550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b35 00005af3107a4000 004657febe8d8000',
        hex: '6a04534c500001010453454e4420550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b350800005af3107a400008004657febe8d8000',
        type: 'nulldata'
      }
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 268dadd7c7becc11782ad3d956342442d8eae92a OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914268dadd7c7becc11782ad3d956342442d8eae92a88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qqngmtwhc7lvcytc9tfaj435y3pd36hf9gtdq8nsuu']
      }
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 9fb45b370f9ff38a775ee95cabcad7615817924e OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9149fb45b370f9ff38a775ee95cabcad7615817924e88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qz0mgkehp70l8znhtm54e2726as4s9ujfc9s2szctr']
      }
    },
    {
      value: 0.00153347,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 9fb45b370f9ff38a775ee95cabcad7615817924e OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9149fb45b370f9ff38a775ee95cabcad7615817924e88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qz0mgkehp70l8znhtm54e2726as4s9ujfc9s2szctr']
      }
    }
  ],
  hex: '010000000315525a133b96cfff0eb0c32ef2958420a568dc14969bcc989b56ad85740c6bb3010000006b483045022100934ca9732bf6c1b146f09e6198142a79a80788b576c6b94e2052df5bcdc86ad902205ef6205192200ea93f6c97f966b838ee785529b694eb61e576e3452470613847412102b23484341cf36ec00184e045d54e6ffca97da7a8f8a6fd719cead192132306b1feffffff15525a133b96cfff0eb0c32ef2958420a568dc14969bcc989b56ad85740c6bb3030000006a473044022004d4a95658ef140561ae3a936fb01511778a5376a499bcd6f47b64074a6ca4430220273a4bf553ca17c7e10f393582f980e17a6a98ada867633faad9dbcc595dfd2341210324fe3b895cfa09523e8ec529eb15c681e3a20f96df85175c54a952b68ac018dffeffffffc1cfb9bae294a58db43a00222ffd3bca4fb0278b0d78c5bb36b643215160d495020000006a473044022079f239216f8d806a084221e841227e55d23a1b90aaf5b5ab54d6f865fbeacf8b022053568f10afc00459af083e4c77d0b85229eb8973a1de406aaa699557f05c7fed412102035f98ff79d6f3a8ec5a2738c103bbb7796e94fcaffdfaae8f5b7a7fae5d93e3feffffff040000000000000000406a04534c500001010453454e4420550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b350800005af3107a400008004657febe8d800022020000000000001976a914268dadd7c7becc11782ad3d956342442d8eae92a88ac22020000000000001976a9149fb45b370f9ff38a775ee95cabcad7615817924e88ac03570200000000001976a9149fb45b370f9ff38a775ee95cabcad7615817924e88acd44c0800',
  blockhash: '000000000000000001882548bbd9a41bc53a039634f2afa4a12d653434347d04',
  confirmations: 166670,
  time: 1534593905,
  blocktime: 1534593905
}

const sendTestOpReturnData01 = {
  tokenType: 1,
  txType: 'SEND',
  tokenId: '550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b35',
  amounts: ['100000000000000', '19800000000000000']
}

const sendTestOpReturnData02 = {
  tokenType: 1,
  txType: 'GENESIS',
  ticker: 'USDT',
  name: 'Tether Ltd. US dollar backed tokens',
  tokenId: '550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b35',
  documentUri:
    'https://tether.to/wp-content/uploads/2016/06/TetherWhitePaper.pdf',
  documentHash:
    '�DQ�\u001e�3�\u0006p���pM�\u0001\u0017�pW(;\u0003,��wy19\u0016',
  decimals: 8,
  mintBatonVout: 2,
  qty: '10000000000000000'
}

const sendTestOpReturnData03 = {
  tokenType: 1,
  txType: 'MINT',
  tokenId: '550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b35',
  mintBatonVout: 2,
  qty: '10000000000000000'
}

const sendTestOpReturnData04 = {
  tokenType: 1,
  txType: 'SEND',
  tokenId: '550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b35',
  amounts: ['100000000000000', '9900000000000000']
}

const mintTestInputTx02 = {
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
      value: 0.00056266
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
      value: 0.00000546
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
      }
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 1272884e6bd20c4661b5a052f874ff9a14c925b2 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9141272884e6bd20c4661b5a052f874ff9a14c925b288ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qqf89zzwd0fqc3npkks997r5l7dpfjf9kgx2rqu500']
      }
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 d1eaebf8d1face5bd866e36bd94f43e2ffceef71 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914d1eaebf8d1face5bd866e36bd94f43e2ffceef7188ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qrg746lc68avuk7cvm3khk20g030lnh0wy5h2k2fqr']
      }
    },
    {
      value: 0.00054848,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 17178e31b3e468c0d98d57be07bc907bf94d1fdb OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a91417178e31b3e468c0d98d57be07bc907bf94d1fdb88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qqt30r33k0jx3sxe34tmupaujpaljnglmvqgrrfp2x']
      }
    }
  ],
  hex: '0100000002f8cda53b43b0ea49991a9bc6c74eb901d2a8b964bc7b8987d76789618ec18c93030000006b483045022100ac43a871e0f84787001db745e4801b789fd9cd7efa247727ebb5c0c7b66d597302205316328b6501759e9a15ec65202219a433172d153f9f1b68f65f3a63494ba6f041210345a5f5dd11c987b346c18c245f0df6d305369984b9b3c7ba465c29875466e374fefffffff8cda53b43b0ea49991a9bc6c74eb901d2a8b964bc7b8987d76789618ec18c93020000006a47304402202ce2d9d63bc6ab7765d267540fd3429bf7a8d1b50e975391fff3a4506289461a02205daf3f761a9b02d141f22136a6fe019062182c9da1b1d3a5245ff745f1236e45412102c00b05bc633a48e074bc54dd195b19a470ad6252ac8d306c82a2bd729c1c4c69feffffff040000000000000000396a04534c50000101044d494e5420938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8010208000000000003928b22020000000000001976a9141272884e6bd20c4661b5a052f874ff9a14c925b288ac22020000000000001976a914d1eaebf8d1face5bd866e36bd94f43e2ffceef7188ac40d60000000000001976a91417178e31b3e468c0d98d57be07bc907bf94d1fdb88ac7d4b0800',
  blockhash: '00000000000000000140f0d813052da59c811a936494a8d8b2d60b215d19e3dc',
  confirmations: 168436,
  time: 1534391953,
  blocktime: 1534391953
}

const mintTestOpReturnData04 = {
  tokenType: 1,
  txType: 'MINT',
  tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
  mintBatonVout: 2,
  qty: '234123'
}

const mintTestOpReturnData05 = {
  tokenType: 1,
  txType: 'GENESIS',
  ticker: 'Bubb2',
  name: 'the new bubbles!',
  tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
  documentUri: '',
  documentHash: '',
  decimals: 5,
  mintBatonVout: 2,
  qty: '4354534534'
}

const genesisTestInputTx02 = {
  txid: '4de69e374a8ed21cbddd47f2338cc0f479dc58daa2bbe11cd604ca488eca0ddf',
  hash: '4de69e374a8ed21cbddd47f2338cc0f479dc58daa2bbe11cd604ca488eca0ddf',
  version: 1,
  size: 444,
  locktime: 571211,
  vin: [
    {
      txid: 'f3e056874846b6f491a1ccac3da81a3411c61d8466835446a52efa68c0d11804',
      vout: 0,
      scriptSig: {
        asm: '3044022022fb67bd9b35810db3fa04da4014cc93063c5ed15e8febeca09d32c03397068502206fbb86498919ca8a9be6940c904c944cd923691391a4a7d92e0c841605d46b2e[ALL|FORKID] 03fbe2c56094dc336f6244eac2e45d3d25a8e97059f2cc7de31cbf179e73dcc9bf',
        hex: '473044022022fb67bd9b35810db3fa04da4014cc93063c5ed15e8febeca09d32c03397068502206fbb86498919ca8a9be6940c904c944cd923691391a4a7d92e0c841605d46b2e412103fbe2c56094dc336f6244eac2e45d3d25a8e97059f2cc7de31cbf179e73dcc9bf'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qz6rcxjw34yuy5fngu7fngnyy55t0v802cmsmjvsp2',
      value: 0.00001111
    },
    {
      txid: '87bf0efc1630f5179b73496f9f885b141cb4c8366432a91ba678298432b197ea',
      vout: 0,
      scriptSig: {
        asm: '3045022100d5fbab461c19c7b56245287eb15510c86872ceb405ede7322f5266efa6cc32ea022074b557bcef9a129fb31cb2e7c2ada9fe51d5cf924ae55d1d2a29368ca1f15ef2[ALL|FORKID] 03fbe2c56094dc336f6244eac2e45d3d25a8e97059f2cc7de31cbf179e73dcc9bf',
        hex: '483045022100d5fbab461c19c7b56245287eb15510c86872ceb405ede7322f5266efa6cc32ea022074b557bcef9a129fb31cb2e7c2ada9fe51d5cf924ae55d1d2a29368ca1f15ef2412103fbe2c56094dc336f6244eac2e45d3d25a8e97059f2cc7de31cbf179e73dcc9bf'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qz6rcxjw34yuy5fngu7fngnyy55t0v802cmsmjvsp2',
      value: 0.007
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 1 47454e45534953 5350494345 5370696365 7370696365736c7040676d61696c2e636f6d 0 8 0 016345785d8a0000',
        hex: '6a04534c500001010747454e45534953055350494345055370696365127370696365736c7040676d61696c2e636f6d4c0001084c0008016345785d8a0000',
        type: 'nulldata'
      }
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 70e5c384ae563b4fd6cfc5f7f8df43ea427d9e10 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a91470e5c384ae563b4fd6cfc5f7f8df43ea427d9e1088ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qpcwtsuy4etrkn7kelzl07xlg04yylv7zqru2cqwvm']
      }
    },
    {
      value: 0.0070012,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 df305a87d98cd64e1bee825d2167a16445ecdfdd OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914df305a87d98cd64e1bee825d2167a16445ecdfdd88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qr0nqk58mxxdvnsma6p96gt859jytmxlm5t0v7de4q']
      }
    }
  ],
  hex: '01000000020418d1c068fa2ea546548366841dc611341aa83daccca191f4b646488756e0f3000000006a473044022022fb67bd9b35810db3fa04da4014cc93063c5ed15e8febeca09d32c03397068502206fbb86498919ca8a9be6940c904c944cd923691391a4a7d92e0c841605d46b2e412103fbe2c56094dc336f6244eac2e45d3d25a8e97059f2cc7de31cbf179e73dcc9bffeffffffea97b132842978a61ba9326436c8b41c145b889f6f49739b17f53016fc0ebf87000000006b483045022100d5fbab461c19c7b56245287eb15510c86872ceb405ede7322f5266efa6cc32ea022074b557bcef9a129fb31cb2e7c2ada9fe51d5cf924ae55d1d2a29368ca1f15ef2412103fbe2c56094dc336f6244eac2e45d3d25a8e97059f2cc7de31cbf179e73dcc9bffeffffff0300000000000000003e6a04534c500001010747454e45534953055350494345055370696365127370696365736c7040676d61696c2e636f6d4c0001084c0008016345785d8a000022020000000000001976a91470e5c384ae563b4fd6cfc5f7f8df43ea427d9e1088acd8ae0a00000000001976a914df305a87d98cd64e1bee825d2167a16445ecdfdd88ac4bb70800',
  blockhash: '000000000000000002278c188c52b536d4ed84a1970d8ff59043e082cef7748a',
  confirmations: 141226,
  time: 1551042875,
  blocktime: 1551042875
}

const genesisTestOpReturn03 = {
  tokenType: 1,
  txType: 'GENESIS',
  ticker: 'SPICE',
  name: 'Spice',
  tokenId: '4de69e374a8ed21cbddd47f2338cc0f479dc58daa2bbe11cd604ca488eca0ddf',
  documentUri: 'spiceslp@gmail.com',
  documentHash: '',
  decimals: 8,
  mintBatonVout: 0,
  qty: '100000000000000000'
}

const txDetailsSLPGenesisNoBaton = {
  txid: '497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7',
  hash: '497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7',
  version: 1,
  size: 285,
  locktime: 575672,
  vin: [
    {
      txid: '805728012bc3349d1a05dc503aaf389c7a743917d7af6adfb844baff8ff2f89f',
      vout: 2,
      scriptSig: {
        asm: '3045022100e4c0e18d97ea6d24c15d60e4032131e985091dec0d844fe00065cb6852b2cfaa02207b6334f72e1aa70f26a88e0e0bff183966405b59bf3a9eaa89d03155cd155505[ALL|FORKID] 03adb6ee2ccaf17f407704c91aae7327bd12fa81aa1bad63bc1685a9ded76d6f2a',
        hex: '483045022100e4c0e18d97ea6d24c15d60e4032131e985091dec0d844fe00065cb6852b2cfaa02207b6334f72e1aa70f26a88e0e0bff183966405b59bf3a9eaa89d03155cd155505412103adb6ee2ccaf17f407704c91aae7327bd12fa81aa1bad63bc1685a9ded76d6f2a'
      },
      sequence: 4294967294
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 1 47454e45534953 544f4b2d4348 546f6b796f43617368 0 0 8 0 000775f05a074000',
        hex: '6a04534c500001010747454e4553495306544f4b2d434809546f6b796f436173684c004c0001084c0008000775f05a074000',
        type: 'nulldata'
      }
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 17c068626a1085ab782b94fe5577b67b9168a1d9 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a91417c068626a1085ab782b94fe5577b67b9168a1d988ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qqtuq6rzdgggt2mc9w20u4thkeaez69pmy6ur897sr']
      }
    },
    {
      value: 0.00474263,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 8b3decf88562b3a8037d8e88171e14bff010ea3d OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9148b3decf88562b3a8037d8e88171e14bff010ea3d88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qz9nmm8cs43t82qr0k8gs9c7zjllqy82853g26y3tc']
      }
    }
  ],
  hex: '01000000019ff8f28fffba44b8df6aafd71739747a9c38af3a50dc051a9d34c32b01285780020000006b483045022100e4c0e18d97ea6d24c15d60e4032131e985091dec0d844fe00065cb6852b2cfaa02207b6334f72e1aa70f26a88e0e0bff183966405b59bf3a9eaa89d03155cd155505412103adb6ee2ccaf17f407704c91aae7327bd12fa81aa1bad63bc1685a9ded76d6f2afeffffff030000000000000000326a04534c500001010747454e4553495306544f4b2d434809546f6b796f436173684c004c0001084c0008000775f05a07400022020000000000001976a91417c068626a1085ab782b94fe5577b67b9168a1d988ac973c0700000000001976a9148b3decf88562b3a8037d8e88171e14bff010ea3d88acb8c80800',
  blockhash: '0000000000000000003e44676df0c4f80b68aff24bf04823444c0069729631f8',
  confirmations: 21249,
  time: 1553714591,
  blocktime: 1553714591
}

const txDetailsSLPSendAlt = {
  txid: 'd94357179775425ebc59c93173bd6dc9854095f090a2eb9dcfe9797398bc8eae',
  hash: 'd94357179775425ebc59c93173bd6dc9854095f090a2eb9dcfe9797398bc8eae',
  version: 2,
  size: 438,
  locktime: 0,
  vin: [
    {
      txid: '984a8fc8093e1db5489a8856ab0ecbaef188662535f08de6f87da8622978146f',
      vout: 0,
      scriptSig: {
        asm: '3045022100f3f84a7c0a72e6df55ad8ff4596aae2d040403b38f8054d95ee48f3d554790050220776b0833891e65c52685ce3a498e3ee0aa804a85e9b79f21bb74a367ad88a569[ALL|FORKID] 03440d292d554f524a1a16fab1c4384c82a15aa191b6a25187c03f6ec4db57d61e',
        hex: '483045022100f3f84a7c0a72e6df55ad8ff4596aae2d040403b38f8054d95ee48f3d554790050220776b0833891e65c52685ce3a498e3ee0aa804a85e9b79f21bb74a367ad88a569412103440d292d554f524a1a16fab1c4384c82a15aa191b6a25187c03f6ec4db57d61e'
      },
      sequence: 4294967295
    },
    {
      txid: '164ff37f47a1be6550a81f3d76f3d57e121d82ed04ed8b7bc932e2273141ebbc',
      vout: 1,
      scriptSig: {
        asm: '30440220177d3583516caf6a3d8e99ed9c0a76595a4187d04c575c0f7dab6a6dfa4630c502207fc842e03ca73a2c9d1f9d7406145bb4ea6eb90d1585ea7c4e82491707fadb74[ALL|FORKID] 0252996f42e5908cc6fe5e2df42888a7226f352f2d496e7f9bb17aaf55e41d997b',
        hex: '4730440220177d3583516caf6a3d8e99ed9c0a76595a4187d04c575c0f7dab6a6dfa4630c502207fc842e03ca73a2c9d1f9d7406145bb4ea6eb90d1585ea7c4e82491707fadb7441210252996f42e5908cc6fe5e2df42888a7226f352f2d496e7f9bb17aaf55e41d997b'
      },
      sequence: 4294967295
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 256 1145980243 73db55368981e4878440637e448d4abe7f661be5c3efdcbcb63bd86a01a76b5a 0000000000000001',
        hex: '6a04534c50000200010453454e442073db55368981e4878440637e448d4abe7f661be5c3efdcbcb63bd86a01a76b5a080000000000000001',
        type: 'nulldata'
      }
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 f037d66efd7235ae4eeb03f666845a7c23ace91a OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914f037d66efd7235ae4eeb03f666845a7c23ace91a88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qrcr04nwl4erttjwavplve5ytf7z8t8frg94efy6ts']
      }
    },
    {
      value: 0.00047367,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 d5669ba347fd2abe6a06d0310f817d1f1304ba71 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914d5669ba347fd2abe6a06d0310f817d1f1304ba7188ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qr2kdxargl7j40n2qmgrzrup0503xp96wyn5ju6p5l']
      }
    }
  ],
  hex: '02000000026f14782962a87df8e68df035256688f1aecb0eab56889a48b51d3e09c88f4a98000000006b483045022100f3f84a7c0a72e6df55ad8ff4596aae2d040403b38f8054d95ee48f3d554790050220776b0833891e65c52685ce3a498e3ee0aa804a85e9b79f21bb74a367ad88a569412103440d292d554f524a1a16fab1c4384c82a15aa191b6a25187c03f6ec4db57d61effffffffbceb413127e232c97b8bed04ed821d127ed5f3763d1fa85065bea1477ff34f16010000006a4730440220177d3583516caf6a3d8e99ed9c0a76595a4187d04c575c0f7dab6a6dfa4630c502207fc842e03ca73a2c9d1f9d7406145bb4ea6eb90d1585ea7c4e82491707fadb7441210252996f42e5908cc6fe5e2df42888a7226f352f2d496e7f9bb17aaf55e41d997bffffffff030000000000000000386a04534c50000200010453454e442073db55368981e4878440637e448d4abe7f661be5c3efdcbcb63bd86a01a76b5a08000000000000000122020000000000001976a914f037d66efd7235ae4eeb03f666845a7c23ace91a88ac07b90000000000001976a914d5669ba347fd2abe6a06d0310f817d1f1304ba7188ac00000000'
}

const mockInvalidSlpSend = {
  txid: 'a60a522cc11ad7011b74e57fbabbd99296e4b9346bcb175dcf84efb737030415',
  hash: 'a60a522cc11ad7011b74e57fbabbd99296e4b9346bcb175dcf84efb737030415',
  version: 2,
  size: 473,
  locktime: 0,
  vin: [
    {
      txid: '3ad621d46ddb7bdccb6e5e7b6505ee639d9327a2b2bdaa2937b8e3aa55c4f2a7',
      vout: 0,
      scriptSig: {
        asm: '3045022100f962fdc585261007f114f0470828bbe9ac6197cefc4d0897fe4a7dd1d4cb2f5402202e104b617a1c14fc293c0ace9d4fd5e1cfa819a68b4ff976b4c3c199feda5227[ALL|FORKID] 0351c450ded2d7747dcad69982c9d954f3f785bab018d89fa09723bba7397e91fb',
        hex: '483045022100f962fdc585261007f114f0470828bbe9ac6197cefc4d0897fe4a7dd1d4cb2f5402202e104b617a1c14fc293c0ace9d4fd5e1cfa819a68b4ff976b4c3c199feda522741210351c450ded2d7747dcad69982c9d954f3f785bab018d89fa09723bba7397e91fb'
      },
      sequence: 4294967295
    },
    {
      txid: 'a31c3167686f892d835727bc46b74bb11a46d74a8a6b08dc6cd82abb6e987b43',
      vout: 1,
      scriptSig: {
        asm: '3044022027dcd4ef752819ba4e61b892039ea0cb8d3ab0ffaeb78384dce9cf43dd76967e0220594fdf41e3d26cd207b6df939e3d655f6e09b01f05948edeb096aa644e1b6ec4[ALL|FORKID] 0351c450ded2d7747dcad69982c9d954f3f785bab018d89fa09723bba7397e91fb',
        hex: '473044022027dcd4ef752819ba4e61b892039ea0cb8d3ab0ffaeb78384dce9cf43dd76967e0220594fdf41e3d26cd207b6df939e3d655f6e09b01f05948edeb096aa644e1b6ec441210351c450ded2d7747dcad69982c9d954f3f785bab018d89fa09723bba7397e91fb'
      },
      sequence: 4294967295
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 1 1145980243 091c80cee60cc3a6dd7b8c6c04cf0cf2d8103ba2d75daa105dcf1aaa53551fe8 1 fffffffffffffffe',
        hex: '6a04534c500001010453454e4420091c80cee60cc3a6dd7b8c6c04cf0cf2d8103ba2d75daa105dcf1aaa53551fe8010108fffffffffffffffe',
        type: 'nulldata'
      }
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 c0c53d84b5420c9bfe4015d1ae69017c3f1ddef8 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914c0c53d84b5420c9bfe4015d1ae69017c3f1ddef888ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qrqv20vyk4pqexl7gq2artnfq97r78w7lqj5548mny']
      }
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 b505afc357a7e911b207332f13e8e674a72099c3 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914b505afc357a7e911b207332f13e8e674a72099c388ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qz6stt7r27n7jydjquej7ylgue62wgyecvs9zm4gff']
      }
    },
    {
      value: 0.00044091,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 b505afc357a7e911b207332f13e8e674a72099c3 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914b505afc357a7e911b207332f13e8e674a72099c388ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qz6stt7r27n7jydjquej7ylgue62wgyecvs9zm4gff']
      }
    }
  ],
  hex: '0200000002a7f2c455aae3b83729aabdb2a227939d63ee05657b5e6ecbdc7bdb6dd421d63a000000006b483045022100f962fdc585261007f114f0470828bbe9ac6197cefc4d0897fe4a7dd1d4cb2f5402202e104b617a1c14fc293c0ace9d4fd5e1cfa819a68b4ff976b4c3c199feda522741210351c450ded2d7747dcad69982c9d954f3f785bab018d89fa09723bba7397e91fbffffffff437b986ebb2ad86cdc086b8a4ad7461ab14bb746bc2757832d896f6867311ca3010000006a473044022027dcd4ef752819ba4e61b892039ea0cb8d3ab0ffaeb78384dce9cf43dd76967e0220594fdf41e3d26cd207b6df939e3d655f6e09b01f05948edeb096aa644e1b6ec441210351c450ded2d7747dcad69982c9d954f3f785bab018d89fa09723bba7397e91fbffffffff040000000000000000396a04534c500001010453454e4420091c80cee60cc3a6dd7b8c6c04cf0cf2d8103ba2d75daa105dcf1aaa53551fe8010108fffffffffffffffe22020000000000001976a914c0c53d84b5420c9bfe4015d1ae69017c3f1ddef888ac22020000000000001976a914b505afc357a7e911b207332f13e8e674a72099c388ac3bac0000000000001976a914b505afc357a7e911b207332f13e8e674a72099c388ac00000000',
  blockhash: '000000000000000000915bd33a7241f34800b190f7cf51f90b42b2b05d2b7ed8',
  confirmations: 90327,
  time: 1535577007,
  blocktime: 1535577007
}

const txDetailsSLPNftGenesis = {
  txid: '4ef6eb92950a13a69e97c2c02c7967d806aa874c0e2a6b5546a8880f2cd14bc4',
  hash: '4ef6eb92950a13a69e97c2c02c7967d806aa874c0e2a6b5546a8880f2cd14bc4',
  version: 2,
  size: 344,
  locktime: 0,
  vin: [
    {
      txid: '4041bc842554b796de1dbb625bbb6994379bc5132a47522677bef7323f3e5051',
      vout: 2,
      scriptSig: {
        asm: '3045022100f8d678e7cd6a2fc317fe4c0c8b633f5941aa40bceb6d7472559955908869544b02206d82e45a6658bb9b5ad39734aa93832b1de2d3c9650e1b59c2ee2f15aa26f3bb[ALL|FORKID] 029547345d63f86ea89ea92ea4ed26386c4493ff60c78d871cc7b38f517f3fd72c',
        hex: '483045022100f8d678e7cd6a2fc317fe4c0c8b633f5941aa40bceb6d7472559955908869544b02206d82e45a6658bb9b5ad39734aa93832b1de2d3c9650e1b59c2ee2f15aa26f3bb4121029547345d63f86ea89ea92ea4ed26386c4493ff60c78d871cc7b38f517f3fd72c'
      },
      sequence: 4294967295
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 -1 47454e45534953 4e46545454 4e4654205465737420546f6b656e 68747470733a2f2f46756c6c537461636b2e63617368 0 0 2 0000000000000001',
        hex: '6a04534c500001810747454e45534953054e465454540e4e4654205465737420546f6b656e1668747470733a2f2f46756c6c537461636b2e636173684c0001000102080000000000000001',
        type: 'nulldata'
      }
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 6011206cd60db8b634f85edf46da22a6d1351e54 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9146011206cd60db8b634f85edf46da22a6d1351e5488ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qpspzgrv6cxm3d35lp0d73k6y2ndzdg72s2304ttr8']
      }
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 6011206cd60db8b634f85edf46da22a6d1351e54 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9146011206cd60db8b634f85edf46da22a6d1351e5488ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qpspzgrv6cxm3d35lp0d73k6y2ndzdg72s2304ttr8']
      }
    },
    {
      value: 0.0001562,
      n: 3,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 6011206cd60db8b634f85edf46da22a6d1351e54 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9146011206cd60db8b634f85edf46da22a6d1351e5488ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qpspzgrv6cxm3d35lp0d73k6y2ndzdg72s2304ttr8']
      }
    }
  ],
  hex: '020000000151503e3f32f7be772652472a13c59b379469bb5b62bb1dde96b7542584bc4140020000006b483045022100f8d678e7cd6a2fc317fe4c0c8b633f5941aa40bceb6d7472559955908869544b02206d82e45a6658bb9b5ad39734aa93832b1de2d3c9650e1b59c2ee2f15aa26f3bb4121029547345d63f86ea89ea92ea4ed26386c4493ff60c78d871cc7b38f517f3fd72cffffffff0400000000000000004b6a04534c500001810747454e45534953054e465454540e4e4654205465737420546f6b656e1668747470733a2f2f46756c6c537461636b2e636173684c000100010208000000000000000122020000000000001976a9146011206cd60db8b634f85edf46da22a6d1351e5488ac22020000000000001976a9146011206cd60db8b634f85edf46da22a6d1351e5488ac043d0000000000001976a9146011206cd60db8b634f85edf46da22a6d1351e5488ac00000000',
  blockhash: '000000000000000002405a44302888bc29bf0e9f4d99b97303038bcc83c15e33',
  confirmations: 2,
  time: 1591329189,
  blocktime: 1591329189
}

const txDetailsSLPNftChild = {
  txid: 'eeddccc4d716f04157ea132ac93a48040fea34a6b57f3d8f0cccb7d1a731ab2b',
  hash: 'eeddccc4d716f04157ea132ac93a48040fea34a6b57f3d8f0cccb7d1a731ab2b',
  version: 2,
  size: 453,
  locktime: 0,
  vin: [
    {
      txid: 'a9a2458a0f9f0761d5b8725c256f2e7fa35b9de4dec6f47b46e9f20d92d0e395',
      vout: 1,
      scriptSig: {
        asm: '3045022100890ff2f80f3c184419ba03a575b9d159c0a5edfa817e4548cfdb6c74d16ce8d202205a8237d2139196716c273fe80506896d369a0022bb54401e2eadb364286a9f07[ALL|FORKID] 03136d9ec06adef1c9154105950e82d470d290aa019ed34a5e3bbd0b679805623b',
        hex: '483045022100890ff2f80f3c184419ba03a575b9d159c0a5edfa817e4548cfdb6c74d16ce8d202205a8237d2139196716c273fe80506896d369a0022bb54401e2eadb364286a9f07412103136d9ec06adef1c9154105950e82d470d290aa019ed34a5e3bbd0b679805623b'
      },
      sequence: 4294967295
    },
    {
      txid: 'a9a2458a0f9f0761d5b8725c256f2e7fa35b9de4dec6f47b46e9f20d92d0e395',
      vout: 3,
      scriptSig: {
        asm: '304402203905a61ec4e3567f7cad7eb514132e5b32d8a1d77c8838baac1b34b735282a5f022044da6130b5cc41b65615b17df6610087fe1baedd1a3a9f37552b56ea8d36d026[ALL|FORKID] 03136d9ec06adef1c9154105950e82d470d290aa019ed34a5e3bbd0b679805623b',
        hex: '47304402203905a61ec4e3567f7cad7eb514132e5b32d8a1d77c8838baac1b34b735282a5f022044da6130b5cc41b65615b17df6610087fe1baedd1a3a9f37552b56ea8d36d026412103136d9ec06adef1c9154105950e82d470d290aa019ed34a5e3bbd0b679805623b'
      },
      sequence: 4294967295
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 65 47454e45534953 4e4654303034 4e4654204368696c64 68747470733a2f2f46756c6c537461636b2e63617368 0 0 0 0000000000000001',
        hex: '6a04534c500001410747454e45534953064e4654303034094e4654204368696c641668747470733a2f2f46756c6c537461636b2e636173684c0001004c00080000000000000001',
        type: 'nulldata'
      }
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 f6fc6bce702ef779d2373aa4356a32113d95e674 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914f6fc6bce702ef779d2373aa4356a32113d95e67488ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qrm0c67wwqh0w7wjxua2gdt2xggnm90xws00a3lezv']
      }
    },
    {
      value: 0.0003923,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 f6fc6bce702ef779d2373aa4356a32113d95e674 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914f6fc6bce702ef779d2373aa4356a32113d95e67488ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qrm0c67wwqh0w7wjxua2gdt2xggnm90xws00a3lezv']
      }
    }
  ],
  hex: '020000000295e3d0920df2e9467bf4c6dee49d5ba37f2e6f255c72b8d561079f0f8a45a2a9010000006b483045022100890ff2f80f3c184419ba03a575b9d159c0a5edfa817e4548cfdb6c74d16ce8d202205a8237d2139196716c273fe80506896d369a0022bb54401e2eadb364286a9f07412103136d9ec06adef1c9154105950e82d470d290aa019ed34a5e3bbd0b679805623bffffffff95e3d0920df2e9467bf4c6dee49d5ba37f2e6f255c72b8d561079f0f8a45a2a9030000006a47304402203905a61ec4e3567f7cad7eb514132e5b32d8a1d77c8838baac1b34b735282a5f022044da6130b5cc41b65615b17df6610087fe1baedd1a3a9f37552b56ea8d36d026412103136d9ec06adef1c9154105950e82d470d290aa019ed34a5e3bbd0b679805623bffffffff030000000000000000476a04534c500001410747454e45534953064e4654303034094e4654204368696c641668747470733a2f2f46756c6c537461636b2e636173684c0001004c0008000000000000000122020000000000001976a914f6fc6bce702ef779d2373aa4356a32113d95e67488ac3e990000000000001976a914f6fc6bce702ef779d2373aa4356a32113d95e67488ac00000000',
  blockhash: '000000000000000001360fe42629f4136e9adec53546b278de0e7ef788eed328',
  confirmations: 2113,
  time: 1613181364,
  blocktime: 1613181364
}

const mockParentTx1 = {
  vout: [
    {
      value: 0.04199959,
      n: 0,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 d5258a73b5c8f94c939d7fe96f78ce97906083be OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914d5258a73b5c8f94c939d7fe96f78ce97906083be88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qr2jtznnkhy0jnynn4l7jmmce6teqcyrhc8herhlgt']
      }
    },
    {
      value: 1.66296161,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 5e95c308c25c74c64c5ffe44a60a4d9b35743e90 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9145e95c308c25c74c64c5ffe44a60a4d9b35743e9088ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qp0ftscgcfw8f3jvtllyffs2fkdn2ap7jqreakn4ye']
      }
    }
  ]
}

const mockTxIn = {
  txid: '05f7d4a4e25f53d63a360434eb54f221abf159112b7fffc91da1072a079cded3',
  vin: [
    {
      txid: '8a6b3b70569270f0bdbf68fd12a410aef8f7bf044bc88ab02386a1572024b2bd',
      vout: 0,
      scriptSig: {
        asm: '3044022035c42f5b10d412445c5ecc5feea42c7f885c433669306c699da0f687216c61d5022018c81cd0ea68101cf3cbe0af67165fca1ce3d667be69d0c9329f0679bbee6ba0[ALL|FORKID] 030152eb20beaa692daaa1a27596dcc98cc06ccbc6eec23d6182a08c7bdaa29ea9',
        hex: '473044022035c42f5b10d412445c5ecc5feea42c7f885c433669306c699da0f687216c61d5022018c81cd0ea68101cf3cbe0af67165fca1ce3d667be69d0c9329f0679bbee6ba04121030152eb20beaa692daaa1a27596dcc98cc06ccbc6eec23d6182a08c7bdaa29ea9'
      },
      sequence: 4294967295
    }
  ]
}

const nftGenesisTx01 = {
  txid: '526b5a95bb33cbe1b7da49e90656451a964dfb5ec0b80f1e75ae83c5d009afe9',
  hash: '526b5a95bb33cbe1b7da49e90656451a964dfb5ec0b80f1e75ae83c5d009afe9',
  version: 2,
  size: 454,
  locktime: 0,
  vin: [
    {
      txid: 'e8c8d85f03aedd0a4ec4b5ff8885c0bad33517ba2188ed29cfcefbd76e3959ca',
      vout: 1,
      scriptSig: {
        asm: '3045022100f00641c2114af5248d7f6fffaa4d66a9d27c648d3e146aebb97da32bb0d07c850220556c234169bd77c8d588f7037d6d10f6b3bdc6ca2fc81647cbe82222120c7e0f[ALL|FORKID] 0260b1dbfdc44c961fb70aaf2723af36b2eaa68c2c9084a9fc9458c980bb8484e1',
        hex: '483045022100f00641c2114af5248d7f6fffaa4d66a9d27c648d3e146aebb97da32bb0d07c850220556c234169bd77c8d588f7037d6d10f6b3bdc6ca2fc81647cbe82222120c7e0f41210260b1dbfdc44c961fb70aaf2723af36b2eaa68c2c9084a9fc9458c980bb8484e1'
      },
      sequence: 4294967295,
      address: 'bitcoincash:qq4cufcxuwedzppke0hw883488hqfzw07qd3xtttaq',
      value: 0.00000546
    },
    {
      txid: 'e8c8d85f03aedd0a4ec4b5ff8885c0bad33517ba2188ed29cfcefbd76e3959ca',
      vout: 3,
      scriptSig: {
        asm: '3045022100a91fb9754fcd34d1bea375cff735ef4aef5fe8c4a5286d0dbf2891da1892063c022030f06627676f7930ea1536b62c9c4fc9e4d152666c753169768007326c6db56f[ALL|FORKID] 0260b1dbfdc44c961fb70aaf2723af36b2eaa68c2c9084a9fc9458c980bb8484e1',
        hex: '483045022100a91fb9754fcd34d1bea375cff735ef4aef5fe8c4a5286d0dbf2891da1892063c022030f06627676f7930ea1536b62c9c4fc9e4d152666c753169768007326c6db56f41210260b1dbfdc44c961fb70aaf2723af36b2eaa68c2c9084a9fc9458c980bb8484e1'
      },
      sequence: 4294967295,
      address: 'bitcoincash:qq4cufcxuwedzppke0hw883488hqfzw07qd3xtttaq',
      value: 0.0005054
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
      }
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 2b8e2706e3b2d10436cbeee39e3539ee0489cff0 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9142b8e2706e3b2d10436cbeee39e3539ee0489cff088ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qq4cufcxuwedzppke0hw883488hqfzw07qd3xtttaq'
        ]
      }
    },
    {
      value: 0.0004999,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 2b8e2706e3b2d10436cbeee39e3539ee0489cff0 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9142b8e2706e3b2d10436cbeee39e3539ee0489cff088ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qq4cufcxuwedzppke0hw883488hqfzw07qd3xtttaq'
        ]
      }
    }
  ],
  hex: '0200000002ca59396ed7fbcecf29ed8821ba1735d3bac08588ffb5c44e0addae035fd8c8e8010000006b483045022100f00641c2114af5248d7f6fffaa4d66a9d27c648d3e146aebb97da32bb0d07c850220556c234169bd77c8d588f7037d6d10f6b3bdc6ca2fc81647cbe82222120c7e0f41210260b1dbfdc44c961fb70aaf2723af36b2eaa68c2c9084a9fc9458c980bb8484e1ffffffffca59396ed7fbcecf29ed8821ba1735d3bac08588ffb5c44e0addae035fd8c8e8030000006b483045022100a91fb9754fcd34d1bea375cff735ef4aef5fe8c4a5286d0dbf2891da1892063c022030f06627676f7930ea1536b62c9c4fc9e4d152666c753169768007326c6db56f41210260b1dbfdc44c961fb70aaf2723af36b2eaa68c2c9084a9fc9458c980bb8484e1ffffffff030000000000000000476a04534c500001410747454e45534953064e4654303031094e4654204368696c641668747470733a2f2f46756c6c537461636b2e636173684c0001004c0008000000000000000122020000000000001976a9142b8e2706e3b2d10436cbeee39e3539ee0489cff088ac46c30000000000001976a9142b8e2706e3b2d10436cbeee39e3539ee0489cff088ac00000000',
  blockhash: '0000000000000000010a67a2b3d62902af82e8391ef6e5df93751dd05547cfde',
  confirmations: 10,
  time: 1646605243,
  blocktime: 1646605243,
  blockheight: 730198,
  isSlpTx: true,
  tokenTxType: 'GENESIS',
  tokenId: '526b5a95bb33cbe1b7da49e90656451a964dfb5ec0b80f1e75ae83c5d009afe9',
  tokenType: 65,
  tokenTicker: 'NFT001',
  tokenName: 'NFT Child',
  tokenDecimals: 0,
  tokenUri: 'https://FullStack.cash',
  tokenDocHash: ''
}

const nftGenesisTokenData01 = {
  tokenType: 65,
  txType: 'GENESIS',
  ticker: 'NFT001',
  name: 'NFT Child',
  tokenId: '526b5a95bb33cbe1b7da49e90656451a964dfb5ec0b80f1e75ae83c5d009afe9',
  documentUri: 'https://FullStack.cash',
  documentHash: '',
  decimals: 0,
  mintBatonVout: 0,
  qty: '1'
}

const nftGenesisTokenData02 = {
  tokenType: 129,
  txType: 'GENESIS',
  ticker: 'NFTTT',
  name: 'NFT Test Token',
  tokenId: 'e8c8d85f03aedd0a4ec4b5ff8885c0bad33517ba2188ed29cfcefbd76e3959ca',
  documentUri: 'https://FullStack.cash',
  documentHash: '',
  decimals: 0,
  mintBatonVout: 2,
  qty: '5'
}


const nftTxDetails01 = {
  "txid": "d9eee23870c82ac0054442146c7de9e3985d70096ba2b913a29672b0376b8456",
  "hash": "d9eee23870c82ac0054442146c7de9e3985d70096ba2b913a29672b0376b8456",
  "version": 1,
  "size": 424,
  "locktime": 613541,
  "vin": [
    {
      "txid": "1134b8560fc3fc3c28ac517f4ef63922c7528c53c71637ab29fb6f0a1adeeafa",
      "vout": 1,
      "scriptSig": {
        "asm": "a02886fb06a555cf16496e091bc0e938c8e96740cd41d2acef48d7bd6e7571ef08358ffc95c4189507708776cda95dd63b390b2b07597695f2c0b6d08c457886[ALL|FORKID] 027933929034fec3d5091f71d42f463c6188ff60b65af21020bf74443ab483a6b5",
        "hex": "41a02886fb06a555cf16496e091bc0e938c8e96740cd41d2acef48d7bd6e7571ef08358ffc95c4189507708776cda95dd63b390b2b07597695f2c0b6d08c4578864121027933929034fec3d5091f71d42f463c6188ff60b65af21020bf74443ab483a6b5"
      },
      "sequence": 4294967294,
      "address": "bitcoincash:qp39r6pxw8htwplf5rfejxtlzc6vu4p5vcwktmap3x",
      "value": 0.00000546
    },
    {
      "txid": "1134b8560fc3fc3c28ac517f4ef63922c7528c53c71637ab29fb6f0a1adeeafa",
      "vout": 2,
      "scriptSig": {
        "asm": "bb1b05dab07024469fbe7b5ea05966dae0c8f13d82810359fbcab8b1ea05c217f015b3a7ce7585df6914e8c0ca047d9de5a3b2f8bad33e7ecbcee454e54a64a6[ALL|FORKID] 027933929034fec3d5091f71d42f463c6188ff60b65af21020bf74443ab483a6b5",
        "hex": "41bb1b05dab07024469fbe7b5ea05966dae0c8f13d82810359fbcab8b1ea05c217f015b3a7ce7585df6914e8c0ca047d9de5a3b2f8bad33e7ecbcee454e54a64a64121027933929034fec3d5091f71d42f463c6188ff60b65af21020bf74443ab483a6b5"
      },
      "sequence": 4294967294,
      "address": "bitcoincash:qp39r6pxw8htwplf5rfejxtlzc6vu4p5vcwktmap3x",
      "value": 0.01199428
    }
  ],
  "vout": [
    {
      "value": 0,
      "n": 0,
      "scriptPubKey": {
        "asm": "OP_RETURN 5262419 65 1145980243 da879a9b4d54372db011f254554172a0b4b81a8124bfdfd06ec916f5326948e0 72057594037927936",
        "hex": "6a04534c500001410453454e4420da879a9b4d54372db011f254554172a0b4b81a8124bfdfd06ec916f5326948e0080000000000000001",
        "type": "nulldata"
      }
    },
    {
      "value": 0.00000546,
      "n": 1,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 dd100e1d27f7c072cdf614801a04d4c3624ba72d OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a914dd100e1d27f7c072cdf614801a04d4c3624ba72d88ac",
        "reqSigs": 1,
        "type": "pubkeyhash",
        "addresses": [
          "bitcoincash:qrw3qrsaylmuqukd7c2gqxsy6npkyja895fgx88qr6"
        ]
      }
    },
    {
      "value": 0.01199004,
      "n": 2,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 dd100e1d27f7c072cdf614801a04d4c3624ba72d OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a914dd100e1d27f7c072cdf614801a04d4c3624ba72d88ac",
        "reqSigs": 1,
        "type": "pubkeyhash",
        "addresses": [
          "bitcoincash:qrw3qrsaylmuqukd7c2gqxsy6npkyja895fgx88qr6"
        ]
      }
    }
  ],
  "hex": "0100000002faeade1a0a6ffb29ab3716c7538c52c72239f64e7f51ac283cfcc30f56b83411010000006441a02886fb06a555cf16496e091bc0e938c8e96740cd41d2acef48d7bd6e7571ef08358ffc95c4189507708776cda95dd63b390b2b07597695f2c0b6d08c4578864121027933929034fec3d5091f71d42f463c6188ff60b65af21020bf74443ab483a6b5fefffffffaeade1a0a6ffb29ab3716c7538c52c72239f64e7f51ac283cfcc30f56b83411020000006441bb1b05dab07024469fbe7b5ea05966dae0c8f13d82810359fbcab8b1ea05c217f015b3a7ce7585df6914e8c0ca047d9de5a3b2f8bad33e7ecbcee454e54a64a64121027933929034fec3d5091f71d42f463c6188ff60b65af21020bf74443ab483a6b5feffffff030000000000000000376a04534c500001410453454e4420da879a9b4d54372db011f254554172a0b4b81a8124bfdfd06ec916f5326948e008000000000000000122020000000000001976a914dd100e1d27f7c072cdf614801a04d4c3624ba72d88ac9c4b1200000000001976a914dd100e1d27f7c072cdf614801a04d4c3624ba72d88aca55c0900",
  "blockhash": "000000000000000002d6421daf0adc3b325292f37400506d02648d9018bfe14c",
  "confirmations": 199339,
  "time": 1576473899,
  "blocktime": 1576473899
}

const nftTxTokenData01 = {
  "tokenType": 65,
  "txType": "SEND",
  "tokenId": "da879a9b4d54372db011f254554172a0b4b81a8124bfdfd06ec916f5326948e0",
  "amounts": [
    "1"
  ]
}

const nftGenesisData01 = {
  "tokenType": 65,
  "txType": "GENESIS",
  "ticker": "picasho1/1",
  "name": "picasho1/1",
  "tokenId": "da879a9b4d54372db011f254554172a0b4b81a8124bfdfd06ec916f5326948e0",
  "documentUri": "Ceci n'est pas un concombre",
  "documentHash": "",
  "decimals": 0,
  "mintBatonVout": 0,
  "qty": "1"
}

const nftFinalTxDetails01 =  {
  txid: 'd9eee23870c82ac0054442146c7de9e3985d70096ba2b913a29672b0376b8456',
  hash: 'd9eee23870c82ac0054442146c7de9e3985d70096ba2b913a29672b0376b8456',
  version: 1,
  size: 424,
  locktime: 613541,
  vin: [
    {
      txid: '1134b8560fc3fc3c28ac517f4ef63922c7528c53c71637ab29fb6f0a1adeeafa',
      vout: 1,
      scriptSig: [Object],
      sequence: 4294967294,
      address: 'bitcoincash:qp39r6pxw8htwplf5rfejxtlzc6vu4p5vcwktmap3x',
      value: 0.00000546,
      tokenQtyStr: '1',
      tokenQty: 1,
      tokenId: 'da879a9b4d54372db011f254554172a0b4b81a8124bfdfd06ec916f5326948e0'
    },
    {
      txid: '1134b8560fc3fc3c28ac517f4ef63922c7528c53c71637ab29fb6f0a1adeeafa',
      vout: 2,
      scriptSig: [Object],
      sequence: 4294967294,
      address: 'bitcoincash:qp39r6pxw8htwplf5rfejxtlzc6vu4p5vcwktmap3x',
      value: 0.01199428,
      tokenQtyStr: '0',
      tokenQty: 0,
      tokenId: 'da879a9b4d54372db011f254554172a0b4b81a8124bfdfd06ec916f5326948e0'
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
      tokenQtyStr: '1',
      tokenQty: 1
    },
    {
      value: 0.01199004,
      n: 2,
      scriptPubKey: [Object],
      tokenQty: null,
      tokenQtyStr: null
    }
  ],
  hex: '0100000002faeade1a0a6ffb29ab3716c7538c52c72239f64e7f51ac283cfcc30f56b83411010000006441a02886fb06a555cf16496e091bc0e938c8e96740cd41d2acef48d7bd6e7571ef08358ffc95c4189507708776cda95dd63b390b2b07597695f2c0b6d08c4578864121027933929034fec3d5091f71d42f463c6188ff60b65af21020bf74443ab483a6b5fefffffffaeade1a0a6ffb29ab3716c7538c52c72239f64e7f51ac283cfcc30f56b83411020000006441bb1b05dab07024469fbe7b5ea05966dae0c8f13d82810359fbcab8b1ea05c217f015b3a7ce7585df6914e8c0ca047d9de5a3b2f8bad33e7ecbcee454e54a64a64121027933929034fec3d5091f71d42f463c6188ff60b65af21020bf74443ab483a6b5feffffff030000000000000000376a04534c500001410453454e4420da879a9b4d54372db011f254554172a0b4b81a8124bfdfd06ec916f5326948e008000000000000000122020000000000001976a914dd100e1d27f7c072cdf614801a04d4c3624ba72d88ac9c4b1200000000001976a914dd100e1d27f7c072cdf614801a04d4c3624ba72d88aca55c0900',
  blockhash: '000000000000000002d6421daf0adc3b325292f37400506d02648d9018bfe14c',
  confirmations: 199339,
  time: 1576473899,
  blocktime: 1576473899,
  blockheight: 613542,
  isSlpTx: true,
  tokenTxType: 'SEND',
  tokenId: 'da879a9b4d54372db011f254554172a0b4b81a8124bfdfd06ec916f5326948e0',
  tokenType: 65,
  tokenTicker: 'picasho1/1',
  tokenName: 'picasho1/1',
  tokenDecimals: 0,
  tokenUri: "Ceci n'est pas un concombre",
  tokenDocHash: ''
}

const nftSendTxDetails01 = {
  "txid": "5004cfbff8ed5a98bd3552aecc6774adc98cdb7326df6f57781edeccc4c530fb",
  "hash": "5004cfbff8ed5a98bd3552aecc6774adc98cdb7326df6f57781edeccc4c530fb",
  "version": 2,
  "size": 470,
  "locktime": 0,
  "vin": [
    {
      "txid": "c2ab27687de886ade3237d38c5f7b2af9b60ec5ca8c89623cd0b81ac7efec36d",
      "vout": 1,
      "scriptSig": {
        "asm": "304402203755dc7c88fd97492b80d31ec4fb727af2f24667001a303801e0d6b39ac2f6c2022040c9b215993621c8e4aa12d32d6a50dace82c87e1ee0b10f76b29ec52be4f870[ALL|FORKID] 024e56bd2dc68f467b1cf762d39a6ebb2e7b5260a2f6ee62f79f8a617e71ae4ffe",
        "hex": "47304402203755dc7c88fd97492b80d31ec4fb727af2f24667001a303801e0d6b39ac2f6c2022040c9b215993621c8e4aa12d32d6a50dace82c87e1ee0b10f76b29ec52be4f8704121024e56bd2dc68f467b1cf762d39a6ebb2e7b5260a2f6ee62f79f8a617e71ae4ffe"
      },
      "sequence": 4294967295,
      "address": "bitcoincash:qzcyf2nfjv08lnhguw5nduylkyxu6watdc4d39twmq",
      "value": 0.00000546
    },
    {
      "txid": "c451bc76016668353f417cff0491dbde01abe176d3943657894c7aac40868884",
      "vout": 3,
      "scriptSig": {
        "asm": "3044022018b19e6ae3e2b01266db36c1917b59af50446e737f5fe5a50de66ba5a9dc7edc02200244af5dc741e8dc5787ddc1bba2a8e382da7522b4e8962ea8c13a652e3b148a[ALL|FORKID] 024e56bd2dc68f467b1cf762d39a6ebb2e7b5260a2f6ee62f79f8a617e71ae4ffe",
        "hex": "473044022018b19e6ae3e2b01266db36c1917b59af50446e737f5fe5a50de66ba5a9dc7edc02200244af5dc741e8dc5787ddc1bba2a8e382da7522b4e8962ea8c13a652e3b148a4121024e56bd2dc68f467b1cf762d39a6ebb2e7b5260a2f6ee62f79f8a617e71ae4ffe"
      },
      "sequence": 4294967295,
      "address": "bitcoincash:qzcyf2nfjv08lnhguw5nduylkyxu6watdc4d39twmq",
      "value": 0.00247552
    }
  ],
  "vout": [
    {
      "value": 0,
      "n": 0,
      "scriptPubKey": {
        "asm": "OP_RETURN 5262419 65 1145980243 c2ab27687de886ade3237d38c5f7b2af9b60ec5ca8c89623cd0b81ac7efec36d 72057594037927936",
        "hex": "6a04534c500001410453454e4420c2ab27687de886ade3237d38c5f7b2af9b60ec5ca8c89623cd0b81ac7efec36d080000000000000001",
        "type": "nulldata"
      }
    },
    {
      "value": 0.00000546,
      "n": 1,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 b044aa69931e7fcee8e3a936f09fb10dcd3bab6e OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a914b044aa69931e7fcee8e3a936f09fb10dcd3bab6e88ac",
        "reqSigs": 1,
        "type": "pubkeyhash",
        "addresses": [
          "bitcoincash:qzcyf2nfjv08lnhguw5nduylkyxu6watdc4d39twmq"
        ]
      }
    },
    {
      "value": 0.00002,
      "n": 2,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 203b64bfbaa9e58333295b621159ddebc591ecb1 OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a914203b64bfbaa9e58333295b621159ddebc591ecb188ac",
        "reqSigs": 1,
        "type": "pubkeyhash",
        "addresses": [
          "bitcoincash:qqsrke9lh257tqen99dkyy2emh4uty0vky9y0z0lsr"
        ]
      }
    },
    {
      "value": 0.00244094,
      "n": 3,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 b044aa69931e7fcee8e3a936f09fb10dcd3bab6e OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a914b044aa69931e7fcee8e3a936f09fb10dcd3bab6e88ac",
        "reqSigs": 1,
        "type": "pubkeyhash",
        "addresses": [
          "bitcoincash:qzcyf2nfjv08lnhguw5nduylkyxu6watdc4d39twmq"
        ]
      }
    }
  ],
  "hex": "02000000026dc3fe7eac810bcd2396c8a85cec609bafb2f7c5387d23e3ad86e87d6827abc2010000006a47304402203755dc7c88fd97492b80d31ec4fb727af2f24667001a303801e0d6b39ac2f6c2022040c9b215993621c8e4aa12d32d6a50dace82c87e1ee0b10f76b29ec52be4f8704121024e56bd2dc68f467b1cf762d39a6ebb2e7b5260a2f6ee62f79f8a617e71ae4ffeffffffff84888640ac7a4c89573694d376e1ab01dedb9104ff7c413f3568660176bc51c4030000006a473044022018b19e6ae3e2b01266db36c1917b59af50446e737f5fe5a50de66ba5a9dc7edc02200244af5dc741e8dc5787ddc1bba2a8e382da7522b4e8962ea8c13a652e3b148a4121024e56bd2dc68f467b1cf762d39a6ebb2e7b5260a2f6ee62f79f8a617e71ae4ffeffffffff040000000000000000376a04534c500001410453454e4420c2ab27687de886ade3237d38c5f7b2af9b60ec5ca8c89623cd0b81ac7efec36d08000000000000000122020000000000001976a914b044aa69931e7fcee8e3a936f09fb10dcd3bab6e88acd0070000000000001976a914203b64bfbaa9e58333295b621159ddebc591ecb188ac7eb90300000000001976a914b044aa69931e7fcee8e3a936f09fb10dcd3bab6e88ac00000000",
  "blockheight": 812938,
  "isSlpTx": true,
  "tokenTxType": "SEND",
  "tokenId": "c2ab27687de886ade3237d38c5f7b2af9b60ec5ca8c89623cd0b81ac7efec36d",
  "tokenType": 65,
  "tokenTicker": "test",
  "tokenName": "test",
  "tokenDecimals": 0,
  "tokenUri": "ipfs://bafybeidy4nrqgsgcl44jlyvehnulngfzq564kc4bz6ni3cldoupwhwzzy4",
  "tokenDocHash": "5126528223a04a49b8586608f8677ef0af0df9bc14f0044bd7395c76f5d1c039"
}

const nftSendTxTokenData01 = {
  "tokenType": 65,
  "txType": "SEND",
  "tokenId": "c2ab27687de886ade3237d38c5f7b2af9b60ec5ca8c89623cd0b81ac7efec36d",
  "amounts": [
    "1"
  ]
}

const nftGenesisTx03 = {
  "txid": "83cdecea64f8d4e8efc3b6cd55afe2c66ae197ca6c0caaeb485e17b58a5b96cf",
  "hash": "83cdecea64f8d4e8efc3b6cd55afe2c66ae197ca6c0caaeb485e17b58a5b96cf",
  "version": 2,
  "size": 526,
  "locktime": 0,
  "vin": [
    {
      "txid": "7d32fcc25a46fa538472db41c0078c9dce8af7167f04c2cc38aa6ad4fb5de44b",
      "vout": 16,
      "scriptSig": {
        "asm": "3044022051a7d4e178f87a2426ea34954047188e96553fde1f48a6353b4f8cea2326157d022079256ac9a93f91218e7c7a5390005907cc9a81017fadb8a4562688b263d704de[ALL|FORKID] 034c0506d9b385070681fed0949128e6d80a029686aad92ac3ef37d09847eb11b7",
        "hex": "473044022051a7d4e178f87a2426ea34954047188e96553fde1f48a6353b4f8cea2326157d022079256ac9a93f91218e7c7a5390005907cc9a81017fadb8a4562688b263d704de4121034c0506d9b385070681fed0949128e6d80a029686aad92ac3ef37d09847eb11b7"
      },
      "sequence": 4294967295,
      "address": "bitcoincash:qpy0h7yfsug0vfecvlaa45vv5dzjvt59scdydey8dt",
      "value": 0.00000546
    },
    {
      "txid": "770348ecbdf5c791f848a7644741a73fcab24caba02c96e6f4137737310071cd",
      "vout": 2,
      "scriptSig": {
        "asm": "3045022100c260db45cbcbfd1b46398b33f54f3c9bdbc93a7eddfa055428a6613d1594519c02202476b7538a07d32d002ca1817dfce36b280a39323d25b7af74a4f258dc6b0337[ALL|FORKID] 034e72bde1d0fe7d11ffdf8eb10089ac9bfd550501816518a9a3b4ab570be0c23f",
        "hex": "483045022100c260db45cbcbfd1b46398b33f54f3c9bdbc93a7eddfa055428a6613d1594519c02202476b7538a07d32d002ca1817dfce36b280a39323d25b7af74a4f258dc6b03374121034e72bde1d0fe7d11ffdf8eb10089ac9bfd550501816518a9a3b4ab570be0c23f"
      },
      "sequence": 4294967295,
      "address": "bitcoincash:qp6n0lr3atmg96yq92x58xeeq6guw2xtvv3tdryfrw",
      "value": 0.00035947
    }
  ],
  "vout": [
    {
      "value": 0,
      "n": 0,
      "scriptPubKey": {
        "asm": "OP_RETURN 5262419 65 23443045060855111 288908203859 5465737420536572696573206334343936322023313937 68747470733a2f2f636f6c6c65637469626c652e73746167696e672e73776565742e696f2f7365726965732f3937332f313937 c7379405d99a421f54c6d6926b4a8dab7f100d8a2e92c721a80f36f081de24ce 0 0 72057594037927936",
        "hex": "6a04534c500001410747454e455349530553574544431754657374205365726965732063343439363220233139373368747470733a2f2f636f6c6c65637469626c652e73746167696e672e73776565742e696f2f7365726965732f3937332f31393720c7379405d99a421f54c6d6926b4a8dab7f100d8a2e92c721a80f36f081de24ce01004c00080000000000000001",
        "type": "nulldata"
      }
    },
    {
      "value": 0.00000546,
      "n": 1,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 5ef290eb9d8acd970ce9384a5ba6a61e39c35f3c OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a9145ef290eb9d8acd970ce9384a5ba6a61e39c35f3c88ac",
        "reqSigs": 1,
        "type": "pubkeyhash",
        "addresses": [
          "bitcoincash:qp009y8tnk9vm9cvayuy5kax5c0rns6l8ss5p7m9a7"
        ]
      }
    },
    {
      "value": 0.00035397,
      "n": 2,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 7537fc71eaf682e8802a8d439b390691c728cb63 OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a9147537fc71eaf682e8802a8d439b390691c728cb6388ac",
        "reqSigs": 1,
        "type": "pubkeyhash",
        "addresses": [
          "bitcoincash:qp6n0lr3atmg96yq92x58xeeq6guw2xtvv3tdryfrw"
        ]
      }
    }
  ],
  "hex": "02000000024be45dfbd46aaa38ccc2047f16f78ace9d8c07c041db728453fa465ac2fc327d100000006a473044022051a7d4e178f87a2426ea34954047188e96553fde1f48a6353b4f8cea2326157d022079256ac9a93f91218e7c7a5390005907cc9a81017fadb8a4562688b263d704de4121034c0506d9b385070681fed0949128e6d80a029686aad92ac3ef37d09847eb11b7ffffffffcd710031377713f4e6962ca0ab4cb2ca3fa7414764a748f891c7f5bdec480377020000006b483045022100c260db45cbcbfd1b46398b33f54f3c9bdbc93a7eddfa055428a6613d1594519c02202476b7538a07d32d002ca1817dfce36b280a39323d25b7af74a4f258dc6b03374121034e72bde1d0fe7d11ffdf8eb10089ac9bfd550501816518a9a3b4ab570be0c23fffffffff030000000000000000906a04534c500001410747454e455349530553574544431754657374205365726965732063343439363220233139373368747470733a2f2f636f6c6c65637469626c652e73746167696e672e73776565742e696f2f7365726965732f3937332f31393720c7379405d99a421f54c6d6926b4a8dab7f100d8a2e92c721a80f36f081de24ce01004c0008000000000000000122020000000000001976a9145ef290eb9d8acd970ce9384a5ba6a61e39c35f3c88ac458a0000000000001976a9147537fc71eaf682e8802a8d439b390691c728cb6388ac00000000",
  "blockhash": "0000000000000000006a2549f7a0a4d2cdbb90f01e356d6fedcabf98736d0198",
  "confirmations": 886,
  "time": 1695536918,
  "blocktime": 1695536918,
  "blockheight": 812057,
  "isSlpTx": true,
  "tokenTxType": "GENESIS",
  "tokenId": "83cdecea64f8d4e8efc3b6cd55afe2c66ae197ca6c0caaeb485e17b58a5b96cf",
  "tokenType": 65,
  "tokenTicker": "SWEDC",
  "tokenName": "Test Series c44962 #197",
  "tokenDecimals": 0,
  "tokenUri": "https://collectible.staging.sweet.io/series/973/197",
  "tokenDocHash": "c7379405d99a421f54c6d6926b4a8dab7f100d8a2e92c721a80f36f081de24ce"
}

const nftGenesisTokenData03 = {
  "tokenType": 65,
  "txType": "GENESIS",
  "ticker": "SWEDC",
  "name": "Test Series c44962 #197",
  "tokenId": "83cdecea64f8d4e8efc3b6cd55afe2c66ae197ca6c0caaeb485e17b58a5b96cf",
  "documentUri": "https://collectible.staging.sweet.io/series/973/197",
  "documentHash": "c7379405d99a421f54c6d6926b4a8dab7f100d8a2e92c721a80f36f081de24ce",
  "decimals": 0,
  "mintBatonVout": 0,
  "qty": "1"
}

const nftGenesisVinData03 = {
  "tokenType": 129,
  "txType": "SEND",
  "tokenId": "b31704bfd4beb029bf29bed36599745b3b20dbb0ce1ad4efe9aaa15d3719c44e",
  "amounts": [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "302"
  ]
}

const sendTxTokenData01 = {
  "tokenType": 1,
  "txType": "SEND",
  "tokenId": "792ff3fc9a708d5facb28427601a423aedfe96c1863ada303a4a22968781ad70",
  "amounts": [
    "10000",
    "9223372036854765808"
  ]
}

const sendTxTokenDetails01 = {
  "txid": "18c65448bb763ccfc1e9e3369587606f5fa8bac6e0f3de589bf94196aca18d42",
  "hash": "18c65448bb763ccfc1e9e3369587606f5fa8bac6e0f3de589bf94196aca18d42",
  "version": 1,
  "size": 478,
  "locktime": 0,
  "vin": [
    {
      "txid": "792ff3fc9a708d5facb28427601a423aedfe96c1863ada303a4a22968781ad70",
      "vout": 1,
      "scriptSig": {
        "asm": "3044022043f898fbfc6e6d7aa2da2ae34d9ca429fb6e8cc571df18765f9bcaba99eacabc022051d24111be1b3ab46f0cecc1ab803bd9e94cc187e7ca437acfeb2b50bbcfac4c[ALL|FORKID] 0391a42c9894d14298b4f7ebde5703c35eb621b3e6bee5d77084430902bd1e0263",
        "hex": "473044022043f898fbfc6e6d7aa2da2ae34d9ca429fb6e8cc571df18765f9bcaba99eacabc022051d24111be1b3ab46f0cecc1ab803bd9e94cc187e7ca437acfeb2b50bbcfac4c41210391a42c9894d14298b4f7ebde5703c35eb621b3e6bee5d77084430902bd1e0263"
      },
      "sequence": 4294967295,
      "address": "bitcoincash:qryw2j5e380mk3q6ugvq2287xjxluff8dq4ulns0l4",
      "value": 0.00000546
    },
    {
      "txid": "5a9badc76a4cc5e36e58c4bc6c3b75a6fcff401c3335ae243485e042aad2701d",
      "vout": 1,
      "scriptSig": {
        "asm": "3043021f69f1d3c72865abb929316603c90be727ee7182b5814da5f2cb9627a384f6940220427beae63887411f5fb4ef2113e54f05663a01e0d71496534cd4dc1092f54c50[ALL|FORKID] 02c24c7acb970193ff93b94a50926ea691c3707a196a8bf3408daec70f3817ee5a",
        "hex": "463043021f69f1d3c72865abb929316603c90be727ee7182b5814da5f2cb9627a384f6940220427beae63887411f5fb4ef2113e54f05663a01e0d71496534cd4dc1092f54c50412102c24c7acb970193ff93b94a50926ea691c3707a196a8bf3408daec70f3817ee5a"
      },
      "sequence": 4294967295,
      "address": "bitcoincash:qrfmvutyysfre5wxvv0wvhkxhrc8qwdkxuseg99xh3",
      "value": 0.00009822
    }
  ],
  "vout": [
    {
      "value": 0,
      "n": 0,
      "scriptPubKey": {
        "asm": "OP_RETURN 5262419 1 1145980243 792ff3fc9a708d5facb28427601a423aedfe96c1863ada303a4a22968781ad70 1163899028698562560 -8131530602194141055",
        "hex": "6a04534c500001010453454e4420792ff3fc9a708d5facb28427601a423aedfe96c1863ada303a4a22968781ad70080000000000002710087fffffffffffd8f0",
        "type": "nulldata"
      }
    },
    {
      "value": 0.00000546,
      "n": 1,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 c8e54a9989dfbb441ae2180528fe348dfe252768 OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a914c8e54a9989dfbb441ae2180528fe348dfe25276888ac",
        "reqSigs": 1,
        "type": "pubkeyhash",
        "addresses": [
          "bitcoincash:qryw2j5e380mk3q6ugvq2287xjxluff8dq4ulns0l4"
        ]
      }
    },
    {
      "value": 0.00000546,
      "n": 2,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 c8e54a9989dfbb441ae2180528fe348dfe252768 OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a914c8e54a9989dfbb441ae2180528fe348dfe25276888ac",
        "reqSigs": 1,
        "type": "pubkeyhash",
        "addresses": [
          "bitcoincash:qryw2j5e380mk3q6ugvq2287xjxluff8dq4ulns0l4"
        ]
      }
    },
    {
      "value": 0.00008795,
      "n": 3,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 d3b6716424123cd1c6631ee65ec6b8f07039b637 OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a914d3b6716424123cd1c6631ee65ec6b8f07039b63788ac",
        "reqSigs": 1,
        "type": "pubkeyhash",
        "addresses": [
          "bitcoincash:qrfmvutyysfre5wxvv0wvhkxhrc8qwdkxuseg99xh3"
        ]
      }
    }
  ],
  "hex": "010000000270ad818796224a3a30da3a86c196feed3a421a602784b2ac5f8d709afcf32f79010000006a473044022043f898fbfc6e6d7aa2da2ae34d9ca429fb6e8cc571df18765f9bcaba99eacabc022051d24111be1b3ab46f0cecc1ab803bd9e94cc187e7ca437acfeb2b50bbcfac4c41210391a42c9894d14298b4f7ebde5703c35eb621b3e6bee5d77084430902bd1e0263ffffffff1d70d2aa42e0853424ae35331c40fffca6753b6cbcc4586ee3c54c6ac7ad9b5a0100000069463043021f69f1d3c72865abb929316603c90be727ee7182b5814da5f2cb9627a384f6940220427beae63887411f5fb4ef2113e54f05663a01e0d71496534cd4dc1092f54c50412102c24c7acb970193ff93b94a50926ea691c3707a196a8bf3408daec70f3817ee5affffffff040000000000000000406a04534c500001010453454e4420792ff3fc9a708d5facb28427601a423aedfe96c1863ada303a4a22968781ad70080000000000002710087fffffffffffd8f022020000000000001976a914c8e54a9989dfbb441ae2180528fe348dfe25276888ac22020000000000001976a914c8e54a9989dfbb441ae2180528fe348dfe25276888ac5b220000000000001976a914d3b6716424123cd1c6631ee65ec6b8f07039b63788ac00000000",
  "blockhash": "000000000000000001c2cacaaeeeef83cf7330706c6734ac259a3e2b71039456",
  "confirmations": 228,
  "time": 1696115619,
  "blocktime": 1696115619,
  "blockheight": 813078,
  "isSlpTx": true,
  "tokenTxType": "SEND",
  "tokenId": "792ff3fc9a708d5facb28427601a423aedfe96c1863ada303a4a22968781ad70",
  "tokenType": 1,
  "tokenTicker": "Zapit (ZAPT)",
  "tokenName": "Zapit (ZAPT)",
  "tokenDecimals": 0,
  "tokenUri": "https://zapit.io",
  "tokenDocHash": ""
}

const sendVinTokenData01 = {
  "tokenType": 1,
  "txType": "GENESIS",
  "ticker": "Zapit (ZAPT)",
  "name": "Zapit (ZAPT)",
  "tokenId": "792ff3fc9a708d5facb28427601a423aedfe96c1863ada303a4a22968781ad70",
  "documentUri": "https://zapit.io",
  "documentHash": "",
  "decimals": 0,
  "mintBatonVout": 2,
  "qty": "9223372036854775808"
}

const nftGenesisFromGroupMintVin01 = {
  "tokenType": 129,
  "txType": "SEND",
  "tokenId": "112f967519e18083c8e4bd7ba67ebc04d72aaaa941826d38655c53d677e6a5be",
  "amounts": [
    "1",
    "999998"
  ]
}

const nftGenesisFromGroupMintVin02 = {
  "tokenType": 129,
  "txType": "MINT",
  "tokenId": "112f967519e18083c8e4bd7ba67ebc04d72aaaa941826d38655c53d677e6a5be",
  "mintBatonVout": 2,
  "qty": "1000"
}

const nftGenesisFromGroupMintTokenData01 = {
  "tokenType": 65,
  "txType": "GENESIS",
  "ticker": "NFT1 Child",
  "name": "My NFT1 Child",
  "tokenId": "b219ba0a7e712345abeadd979db1783b19f4643374a6efc6ad61c7913de9528e",
  "documentUri": "",
  "documentHash": "",
  "decimals": 0,
  "mintBatonVout": 0,
  "qty": "1"
}

const nftGenesisFromGroupMintTokenDetails01 = {
  "txid": "b219ba0a7e712345abeadd979db1783b19f4643374a6efc6ad61c7913de9528e",
  "hash": "b219ba0a7e712345abeadd979db1783b19f4643374a6efc6ad61c7913de9528e",
  "version": 2,
  "size": 440,
  "locktime": 0,
  "vin": [
    {
      "txid": "89a35ae263ae87c7dcc2a67ed70643bf6854245f10e7f0ece6a815fd1f4ede05",
      "vout": 1,
      "scriptSig": {
        "asm": "3045022100f6ac72165da5a5a23e18a33e9325430767ec885165dfb82484ccd1b7a0bddc48022007f83e983e338370f547d452d33a7b38ebff5f0aaed09003ebce2915c047e6bb[ALL|FORKID] 02e03a2d925cf5e79d567186e01f50ab1e081fb568837ac7610d89b885e6bc85e0",
        "hex": "483045022100f6ac72165da5a5a23e18a33e9325430767ec885165dfb82484ccd1b7a0bddc48022007f83e983e338370f547d452d33a7b38ebff5f0aaed09003ebce2915c047e6bb412102e03a2d925cf5e79d567186e01f50ab1e081fb568837ac7610d89b885e6bc85e0"
      },
      "sequence": 4294967295,
      "address": "bitcoincash:qrhvcy5xlegs858fjqf8ssl6a4f7wpstaqlsy4gusz",
      "value": 0.00000546
    },
    {
      "txid": "48db423a6ff59a7f07e1b6741ba77498a71c67c8dd1326b15495fd32f82ccf1d",
      "vout": 3,
      "scriptSig": {
        "asm": "304402207860274924daba23137b2dac12a691603335ec19a80ffd485426c5723bff54000220369b32ab17692801bb9490fa2f5cc5acb56b23e41c7425e96c5f05e30e2a67d9[ALL|FORKID] 02e03a2d925cf5e79d567186e01f50ab1e081fb568837ac7610d89b885e6bc85e0",
        "hex": "47304402207860274924daba23137b2dac12a691603335ec19a80ffd485426c5723bff54000220369b32ab17692801bb9490fa2f5cc5acb56b23e41c7425e96c5f05e30e2a67d9412102e03a2d925cf5e79d567186e01f50ab1e081fb568837ac7610d89b885e6bc85e0"
      },
      "sequence": 4294967295,
      "address": "bitcoincash:qrhvcy5xlegs858fjqf8ssl6a4f7wpstaqlsy4gusz",
      "value": 0.00005598
    }
  ],
  "vout": [
    {
      "value": 0,
      "n": 0,
      "scriptPubKey": {
        "asm": "OP_RETURN 5262419 65 23443045060855111 4e465431204368696c64 4d79204e465431204368696c64 0 0 0 0 72057594037927936",
        "hex": "6a04534c500001410747454e455349530a4e465431204368696c640d4d79204e465431204368696c644c004c0001004c00080000000000000001",
        "type": "nulldata"
      }
    },
    {
      "value": 0.00000546,
      "n": 1,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 eecc1286fe5103d0e990127843faed53e7060be8 OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a914eecc1286fe5103d0e990127843faed53e7060be888ac",
        "reqSigs": 1,
        "type": "pubkeyhash",
        "addresses": [
          "bitcoincash:qrhvcy5xlegs858fjqf8ssl6a4f7wpstaqlsy4gusz"
        ]
      }
    },
    {
      "value": 0.00005156,
      "n": 2,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 eecc1286fe5103d0e990127843faed53e7060be8 OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a914eecc1286fe5103d0e990127843faed53e7060be888ac",
        "reqSigs": 1,
        "type": "pubkeyhash",
        "addresses": [
          "bitcoincash:qrhvcy5xlegs858fjqf8ssl6a4f7wpstaqlsy4gusz"
        ]
      }
    }
  ],
  "hex": "020000000205de4e1ffd15a8e6ecf0e7105f245468bf4306d77ea6c2dcc787ae63e25aa389010000006b483045022100f6ac72165da5a5a23e18a33e9325430767ec885165dfb82484ccd1b7a0bddc48022007f83e983e338370f547d452d33a7b38ebff5f0aaed09003ebce2915c047e6bb412102e03a2d925cf5e79d567186e01f50ab1e081fb568837ac7610d89b885e6bc85e0ffffffff1dcf2cf832fd9554b12613ddc8671ca79874a71b74b6e1077f9af56f3a42db48030000006a47304402207860274924daba23137b2dac12a691603335ec19a80ffd485426c5723bff54000220369b32ab17692801bb9490fa2f5cc5acb56b23e41c7425e96c5f05e30e2a67d9412102e03a2d925cf5e79d567186e01f50ab1e081fb568837ac7610d89b885e6bc85e0ffffffff0300000000000000003a6a04534c500001410747454e455349530a4e465431204368696c640d4d79204e465431204368696c644c004c0001004c0008000000000000000122020000000000001976a914eecc1286fe5103d0e990127843faed53e7060be888ac24140000000000001976a914eecc1286fe5103d0e990127843faed53e7060be888ac00000000",
  "blockhash": "0000000000000000034c077673e0288d7c639c53304f60456eaf05a45b4b29f7",
  "confirmations": 221747,
  "time": 1563550792,
  "blocktime": 1563550792,
  "blockheight": 592010,
  "isSlpTx": true,
  "tokenTxType": "GENESIS",
  "tokenId": "b219ba0a7e712345abeadd979db1783b19f4643374a6efc6ad61c7913de9528e",
  "tokenType": 65,
  "tokenTicker": "NFT1 Child",
  "tokenName": "My NFT1 Child",
  "tokenDecimals": 0,
  "tokenUri": "",
  "tokenDocHash": ""
}



export default {
  nonSlpTxDetails,
  nonSLPTxDetailsWithOpReturn,
  slpTxDetails,
  mockOpReturnData01,
  mockOpReturnData02,
  mockOpReturnData03,
  genesisTestInputTx,
  mintTestInputTx,
  genesisTestOpReturnData01,
  genesisTestOpReturnData02,
  mintTestOpReturnData01,
  mintTestOpReturnData02,
  mintTestOpReturnData03,
  sendTestInputTx01,
  sendTestOpReturnData01,
  sendTestOpReturnData02,
  sendTestOpReturnData03,
  sendTestOpReturnData04,
  mintTestInputTx02,
  mintTestOpReturnData04,
  mintTestOpReturnData05,
  genesisTestInputTx02,
  genesisTestOpReturn03,
  txDetailsSLPGenesisNoBaton,
  txDetailsSLPSendAlt,
  mockInvalidSlpSend,
  txDetailsSLPNftGenesis,
  txDetailsSLPNftChild,
  mockParentTx1,
  mockTxIn,
  nftGenesisTx01,
  nftGenesisTokenData01,
  nftGenesisTokenData02,
  nftTxDetails01,
  nftTxTokenData01,
  nftGenesisData01,
  nftFinalTxDetails01,
  nftSendTxDetails01,
  nftSendTxTokenData01,
  nftGenesisTx03,
  nftGenesisTokenData03,
  nftGenesisVinData03,
  sendTxTokenData01,
  sendTxTokenDetails01,
  sendVinTokenData01,
  nftGenesisFromGroupMintVin01,
  nftGenesisFromGroupMintVin02,
  nftGenesisFromGroupMintTokenData01,
  nftGenesisFromGroupMintTokenDetails01
}
