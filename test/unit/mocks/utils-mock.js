/*
  Mocked testing data for utils.unit.js
*/

const balance01 = {
  utxos: [
    {
      txid: 'be7ebc3143e6f020cfc7a6b225ff0c291b8b22f51b391695bf409676cd501c5e',
      vout: 1,
      type: 'token',
      qty: '9900',
      tokenId:
        'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
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
      tokenId:
        'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
      qty: '9900'
    }
  ]
}

const tokenData01 = {
  type: 1,
  ticker: 'SLPTEST',
  name: 'SLP Test Token',
  tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
  documentUri: 'https://FullStack.cash',
  documentHash: '',
  decimals: 0,
  mintBatonIsActive: true,
  tokensInCirculationBN: '20000',
  tokensInCirculationStr: '20000',
  blockCreated: 716085
}

export default {
  balance01,
  tokenData01
}
