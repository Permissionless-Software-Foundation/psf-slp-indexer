/*
  Mock data for the genesis.unit.js test library
*/

const genesisData01 = {
  slpData: {
    tokenType: 1,
    txType: 'GENESIS',
    ticker: 'USDT',
    name: 'Tether Ltd. US dollar backed tokens',
    tokenId: '550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b35',
    documentUri: 'https://tether.to/wp-content/uploads/2016/06/TetherWhitePaper.pdf',
    documentHash: '�DQ�\u001e�3�\u0006p���pM�\u0001\u0017�pW(;\u0003,��wy19\u0016',
    decimals: 8,
    mintBatonVout: 2,
    qty: '10000000000000000'
  },
  blockHeight: 543751,
  txData: {
    txid: '550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b35',
    hash: '550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b35',
    version: 1,
    size: 437,
    locktime: 543750,
    vin: [
      {
        txid: 'f58c7bb144f24385c341687c725c095af274fe16666b2903b6e061f18d895ec5',
        vout: 3,
        scriptSig: {
          asm: '304402207aecd93c3a53cf64901ebf453e958bc52cc48588c1c5c4d6019adf7dd2d578b2022079fa2580811ab0b78fc488739366372e22350ec94b82aaf6da23954c2b50eb4a[ALL|FORKID] 037e3de2c36d31d9916082d45fb221d67ef9dc8464739cbc16a613be4e34e3457a',
          hex: '47304402207aecd93c3a53cf64901ebf453e958bc52cc48588c1c5c4d6019adf7dd2d578b2022079fa2580811ab0b78fc488739366372e22350ec94b82aaf6da23954c2b50eb4a4121037e3de2c36d31d9916082d45fb221d67ef9dc8464739cbc16a613be4e34e3457a'
        },
        sequence: 4294967294,
        address: 'bitcoincash:qqutt62t6wzzptzmynrv2azu9647ad25xc78gzeeha',
        value: 0.00157951,
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
          asm: 'OP_RETURN 5262419 1 47454e45534953 1413763925 546574686572204c74642e20555320646f6c6c6172206261636b656420746f6b656e73 68747470733a2f2f7465746865722e746f2f77702d636f6e74656e742f75706c6f6164732f323031362f30362f546574686572576869746550617065722e706466 db4451f11eda33950670aaf59e704da90117ff7057283b032cfaec7779313916 8 2 002386f26fc10000',
          hex: '6a04534c500001010747454e45534953045553445423546574686572204c74642e20555320646f6c6c6172206261636b656420746f6b656e734168747470733a2f2f7465746865722e746f2f77702d636f6e74656e742f75706c6f6164732f323031362f30362f546574686572576869746550617065722e70646620db4451f11eda33950670aaf59e704da90117ff7057283b032cfaec77793139160108010208002386f26fc10000',
          type: 'nulldata'
        },
        tokenQtyStr: '0',
        tokenQty: 0
      },
      {
        value: 0.00000546,
        n: 1,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 0d2f0552ead67bc5780f5a4338fd56c7ed901650 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a9140d2f0552ead67bc5780f5a4338fd56c7ed90165088ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: [
            'bitcoincash:qqxj7p2jatt8h3tcpadyxw8a2mr7myqk2qm57u4rdf'
          ]
        },
        tokenQtyStr: '100000000',
        tokenQty: 100000000
      },
      {
        value: 0.00000546,
        n: 2,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 0d2f0552ead67bc5780f5a4338fd56c7ed901650 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a9140d2f0552ead67bc5780f5a4338fd56c7ed90165088ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: [
            'bitcoincash:qqxj7p2jatt8h3tcpadyxw8a2mr7myqk2qm57u4rdf'
          ]
        },
        tokenQtyStr: '0',
        tokenQty: 0,
        isMintBaton: true
      },
      {
        value: 0.00156421,
        n: 3,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 2b1d225b83c9238afff5bfdfa86d568bac9b7cff OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a9142b1d225b83c9238afff5bfdfa86d568bac9b7cff88ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: [
            'bitcoincash:qq436gjms0yj8zhl7klal2rd2696exmulumkt4tlvd'
          ]
        },
        tokenQtyStr: '0',
        tokenQty: 0
      }
    ],
    hex: '0100000001c55e898df161e0b603296b6616fe74f25a095c727c6841c38543f244b17b8cf5030000006a47304402207aecd93c3a53cf64901ebf453e958bc52cc48588c1c5c4d6019adf7dd2d578b2022079fa2580811ab0b78fc488739366372e22350ec94b82aaf6da23954c2b50eb4a4121037e3de2c36d31d9916082d45fb221d67ef9dc8464739cbc16a613be4e34e3457afeffffff040000000000000000a96a04534c500001010747454e45534953045553445423546574686572204c74642e20555320646f6c6c6172206261636b656420746f6b656e734168747470733a2f2f7465746865722e746f2f77702d636f6e74656e742f75706c6f6164732f323031362f30362f546574686572576869746550617065722e70646620db4451f11eda33950670aaf59e704da90117ff7057283b032cfaec77793139160108010208002386f26fc1000022020000000000001976a9140d2f0552ead67bc5780f5a4338fd56c7ed90165088ac22020000000000001976a9140d2f0552ead67bc5780f5a4338fd56c7ed90165088ac05630200000000001976a9142b1d225b83c9238afff5bfdfa86d568bac9b7cff88ac064c0800',
    blockhash: '0000000000000000019f8897fe36617d092c4750f99ec32b721c11752cfc1f18',
    confirmations: 170789,
    time: 1534472609,
    blocktime: 1534472609,
    blockheight: 543751,
    isSlpTx: true,
    tokenTxType: 'GENESIS',
    tokenId: '550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b35',
    tokenType: 1,
    tokenTicker: 'USDT',
    tokenName: 'Tether Ltd. US dollar backed tokens',
    tokenDecimals: 8,
    tokenUri: 'https://tether.to/wp-content/uploads/2016/06/TetherWhitePaper.pdf',
    tokenDocHash: '�DQ�\u001e�3�\u0006p���pM�\u0001\u0017�pW(;\u0003,��wy19\u0016'
  }
}

const addrMock = {
  utxos: [
    {
      txid: '550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b35',
      vout: 1,
      type: 'token',
      qty: '10000000000000000',
      tokenId: '550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b35',
      address: 'bitcoincash:qqxj7p2jatt8h3tcpadyxw8a2mr7myqk2qm57u4rdf'
    }
  ],
  txs: [
    {
      txid: '550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b35',
      height: 543751
    }
  ],
  balances: [
    {
      tokenId: '550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b35',
      qty: '10000000000000000'
    }
  ]
}

const genesisData02 = {
  slpData: {
    tokenType: 1,
    txType: 'GENESIS',
    ticker: 'Treatment',
    name: 'Treatment',
    tokenId: 'ffa1b0f89750c74ebe1d0267a7774e635896f6050e836b59449b0a5581f1ff2b',
    documentUri: 'https://www.localvisibility.com.au/',
    documentHash: '',
    decimals: 8,
    mintBatonVout: 0,
    qty: '10000000000000000000'
  },
  blockHeight: 600518,
  txData: {
    txid: 'ffa1b0f89750c74ebe1d0267a7774e635896f6050e836b59449b0a5581f1ff2b',
    hash: 'ffa1b0f89750c74ebe1d0267a7774e635896f6050e836b59449b0a5581f1ff2b',
    version: 1,
    size: 315,
    locktime: 600517,
    vin: [
      {
        txid: 'a76e7825c400ad986257149b98dc6cf13b4a49de6e5ab71c87a1481edc72a88c',
        vout: 2,
        scriptSig: {
          asm: '31e18a20e77569bed32d1ad262159af92783e71354ede1bbb9670a97285d9566f2d3e6e6955263e5da433bb450cea57a1e31c2dcdb7b1a7e96b6e5023beadc6a[ALL|FORKID] 02e67502804cb4f239d1b787b6bd0e48806a1fb2207f7d2ae0fef6b7c1633d9e77',
          hex: '4131e18a20e77569bed32d1ad262159af92783e71354ede1bbb9670a97285d9566f2d3e6e6955263e5da433bb450cea57a1e31c2dcdb7b1a7e96b6e5023beadc6a412102e67502804cb4f239d1b787b6bd0e48806a1fb2207f7d2ae0fef6b7c1633d9e77'
        },
        sequence: 4294967294,
        address: 'bitcoincash:qrd8z8kp0j6qfqevtnzxl0rmjj6jswycevyw6tl35d',
        value: 0.00061017,
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
          asm: 'OP_RETURN 5262419 1 47454e45534953 54726561746d656e74 54726561746d656e74 68747470733a2f2f7777772e6c6f63616c7669736962696c6974792e636f6d2e61752f 0 8 0 8ac7230489e80000',
          hex: '6a04534c500001010747454e455349530954726561746d656e740954726561746d656e742368747470733a2f2f7777772e6c6f63616c7669736962696c6974792e636f6d2e61752f4c0001084c00088ac7230489e80000',
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
          asm: 'OP_DUP OP_HASH160 6e6873cb9ac2ce58dae7d82009fadd694dbc48e9 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a9146e6873cb9ac2ce58dae7d82009fadd694dbc48e988ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: [
            'bitcoincash:qphxsu7tntpvukx6ulvzqz06m455m0zgayznyljrfd'
          ]
        },
        tokenQtyStr: '100000000000',
        tokenQty: 100000000000
      },
      {
        value: 0.00060156,
        n: 2,
        scriptPubKey: {
          asm: 'OP_DUP OP_HASH160 a7ed25905a54f70826b6762a0a6dfecfcba817ff OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a914a7ed25905a54f70826b6762a0a6dfecfcba817ff88ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: [
            'bitcoincash:qzn76fvstf20wzpxkemz5zndlm8uh2qhluhsalmy9t'
          ]
        },
        tokenQtyStr: '0',
        tokenQty: 0
      }
    ],
    hex: '01000000018ca872dc1e48a1871cb75a6ede494a3bf16cdc989b14576298ad00c425786ea702000000644131e18a20e77569bed32d1ad262159af92783e71354ede1bbb9670a97285d9566f2d3e6e6955263e5da433bb450cea57a1e31c2dcdb7b1a7e96b6e5023beadc6a412102e67502804cb4f239d1b787b6bd0e48806a1fb2207f7d2ae0fef6b7c1633d9e77feffffff030000000000000000576a04534c500001010747454e455349530954726561746d656e740954726561746d656e742368747470733a2f2f7777772e6c6f63616c7669736962696c6974792e636f6d2e61752f4c0001084c00088ac7230489e8000022020000000000001976a9146e6873cb9ac2ce58dae7d82009fadd694dbc48e988acfcea0000000000001976a914a7ed25905a54f70826b6762a0a6dfecfcba817ff88acc5290900',
    blockhash: '0000000000000000005b17222cc0d0861a404427d7b4c8b0599897697a765af7',
    confirmations: 117998,
    time: 1568644882,
    blocktime: 1568644882,
    blockheight: 600518,
    isSlpTx: true,
    tokenTxType: 'GENESIS',
    tokenId: 'ffa1b0f89750c74ebe1d0267a7774e635896f6050e836b59449b0a5581f1ff2b',
    tokenType: 1,
    tokenTicker: 'Treatment',
    tokenName: 'Treatment',
    tokenDecimals: 8,
    tokenUri: 'https://www.localvisibility.com.au/',
    tokenDocHash: ''
  }
}

export default {
  genesisData01,
  addrMock,
  genesisData02
}
