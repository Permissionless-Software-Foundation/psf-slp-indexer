/*
  Unit tests for the transaction.js library.
*/

// Public npm libraries
import { assert } from 'chai'
import sinon from 'sinon'
import cloneDeep from 'lodash.clonedeep'

import Transaction from '../../../../../src/adapters/slp-indexer/lib/transaction.js'
import mockDataLib from '../../../mocks/transaction-mock.js'

describe('#Transaction', () => {
  let uut
  let sandbox
  let mockData

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    mockData = cloneDeep(mockDataLib)

    uut = new Transaction()
  })
  afterEach(() => sandbox.restore())

  describe('#decodeOpReturn', () => {
    it('should throw an error for a non-string input', async () => {
      try {
        const txid = 53423 // Not a string.

        await uut.decodeOpReturn(txid)

        assert.equal(true, false, 'Unexpected result.')
      } catch (err) {
        // console.log(`err: ${util.inspect(err)}`)
        assert.include(err.message, 'txid string must be included')
      }
    })

    it('should throw an error for non-SLP transaction', async () => {
      try {
        // Mock dependencies
        sandbox
          .stub(uut.rpc, 'getRawTransaction')
          .resolves(mockData.nonSlpTxDetails)

        const txid =
          '3793d4906654f648e659f384c0f40b19c8f10c1e9fb72232a9b8edd61abaa1ec'

        await uut.decodeOpReturn(txid)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'scriptpubkey not op_return')
      }
    })

    it('should throw an error for non-SLP transaction with OP_RETURN', async () => {
      try {
        // Mock dependencies
        sandbox
          .stub(uut.rpc, 'getRawTransaction')
          .resolves(mockData.nonSLPTxDetailsWithOpReturn)

        const txid =
          '2ff74c48a5d657cf45f699601990bffbbe7a2a516d5480674cbf6c6a4497908f'

        await uut.decodeOpReturn(txid)

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(`err: ${util.inspect(err)}`)
        assert.include(err.message, 'SLP not in first chunk')
      }
    })

    it('should decode a genesis transaction', async () => {
      // Mock dependencies
      sandbox
        .stub(uut.rpc, 'getRawTransaction')
        .resolves(mockData.genesisTestInputTx02)

      const txid =
        '4de69e374a8ed21cbddd47f2338cc0f479dc58daa2bbe11cd604ca488eca0ddf'

      const result = await uut.decodeOpReturn(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert the expected properties exist
      assert.hasAllKeys(result, [
        'tokenType',
        'txType',
        'tokenId',
        'ticker',
        'name',
        'documentUri',
        'documentHash',
        'decimals',
        'mintBatonVout',
        'qty'
      ])
    })

    it('should decode a mint transaction', async () => {
      // Mock dependencies
      sandbox
        .stub(uut.rpc, 'getRawTransaction')
        .resolves(mockData.mintTestInputTx02)

      const txid =
        'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34'

      const result = await uut.decodeOpReturn(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.hasAllKeys(result, [
        'tokenType',
        'txType',
        'tokenId',
        'mintBatonVout',
        'qty'
      ])
    })

    it('should decode a send transaction', async () => {
      // Mock dependencies
      sandbox
        .stub(uut.rpc, 'getRawTransaction')
        .resolves(mockData.sendTestInputTx01)

      const txid =
        '6bc111fbf5b118021d68355ca19a0e77fa358dd931f284b2550f79a51ab4792a'

      const result = await uut.decodeOpReturn(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.hasAllKeys(result, ['tokenType', 'txType', 'tokenId', 'amounts'])
    })

    it('should properly decode a Genesis transaction with no minting baton', async () => {
      // Mock dependencies
      sandbox
        .stub(uut.rpc, 'getRawTransaction')
        .resolves(mockData.txDetailsSLPGenesisNoBaton)

      const txid =
        '497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7'

      const data = await uut.decodeOpReturn(txid)
      // console.log(`data: ${JSON.stringify(data, null, 2)}`)

      assert.equal(data.mintBatonVout, 0)
    })

    it('should decode a send transaction with alternate encoding', async () => {
      // Mock dependencies
      sandbox
        .stub(uut.rpc, 'getRawTransaction')
        .resolves(mockData.txDetailsSLPSendAlt)

      const txid =
        'd94357179775425ebc59c93173bd6dc9854095f090a2eb9dcfe9797398bc8eae'

      const data = await uut.decodeOpReturn(txid)
      // console.log(`data: ${JSON.stringify(data, null, 2)}`)

      assert.hasAnyKeys(data, [
        'transactionType',
        'txType',
        'tokenId',
        'amounts'
      ])
    })

    // Note: This TX is interpreted as valid by the original decodeOpReturn().
    // Fixing this issue and related issues was the reason for creating the
    // decodeOpReturn2() method using the slp-parser library.
    it('should throw error for invalid SLP transaction', async () => {
      try {
        // Mock dependencies
        sandbox
          .stub(uut.rpc, 'getRawTransaction')
          .resolves(mockData.mockInvalidSlpSend)

        const txid =
          'a60a522cc11ad7011b74e57fbabbd99296e4b9346bcb175dcf84efb737030415'

        await uut.decodeOpReturn(txid)
        // console.log(`result: ${JSON.stringify(result, null, 2)}`)
      } catch (err) {
        // console.log(`err: `, err)
        assert.include(err.message, 'amount string size not 8 bytes')
      }
    })

    it('should decode a NFT Parent transaction', async () => {
      // Mock dependencies
      sandbox
        .stub(uut.rpc, 'getRawTransaction')
        .resolves(mockData.txDetailsSLPNftGenesis)

      const txid =
        '4ef6eb92950a13a69e97c2c02c7967d806aa874c0e2a6b5546a8880f2cd14bc4'

      const data = await uut.decodeOpReturn(txid)
      // console.log(`data: ${JSON.stringify(data, null, 2)}`)

      assert.property(data, 'tokenType')
      assert.property(data, 'txType')
      assert.property(data, 'ticker')
      assert.property(data, 'name')
      assert.property(data, 'tokenId')
      assert.property(data, 'documentUri')
      assert.property(data, 'documentHash')
      assert.property(data, 'decimals')
      assert.property(data, 'mintBatonVout')
      assert.property(data, 'qty')

      assert.equal(data.tokenType, 129)
      assert.equal(data.mintBatonVout, 2)
      assert.equal(data.qty, 1)
    })

    it('should decode a NFT Child transaction', async () => {
      // Mock dependencies
      sandbox
        .stub(uut.rpc, 'getRawTransaction')
        .resolves(mockData.txDetailsSLPNftChild)

      const txid =
        'eeddccc4d716f04157ea132ac93a48040fea34a6b57f3d8f0cccb7d1a731ab2b'

      const data = await uut.decodeOpReturn(txid)
      // console.log(`data: ${JSON.stringify(data, null, 2)}`)

      assert.property(data, 'tokenType')
      assert.property(data, 'txType')
      assert.property(data, 'ticker')
      assert.property(data, 'name')
      assert.property(data, 'tokenId')
      assert.property(data, 'documentUri')
      assert.property(data, 'documentHash')
      assert.property(data, 'decimals')
      assert.property(data, 'mintBatonVout')
      assert.property(data, 'qty')

      assert.equal(data.tokenType, 65)
      assert.equal(data.mintBatonVout, 0)
      assert.equal(data.qty, '1')
    })

    it('should clear the cache when it gets too big', async () => {
      // Mock dependencies
      sandbox
        .stub(uut.rpc, 'getRawTransaction')
        .resolves(mockData.sendTestInputTx01)

      const txid =
        '6bc111fbf5b118021d68355ca19a0e77fa358dd931f284b2550f79a51ab4792a'

      // Force cache to be too big.
      uut.tokenCacheCnt = 9999999

      const result = await uut.decodeOpReturn(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.hasAllKeys(result, ['tokenType', 'txType', 'tokenId', 'amounts'])
    })
  })

  describe('#_getInputAddrs', () => {
    it('should return an array of input addresses', async () => {
      // Mock dependencies
      sandbox
        .stub(uut.rpc, 'getRawTransaction')
        .resolves(mockData.mockParentTx1)

      const result = await uut._getInputAddrs(mockData.mockTxIn)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.isArray(result)
      assert.equal(result.length, 1)
      assert.property(result[0], 'vin')
      assert.property(result[0], 'address')
    })

    it('should catch and throw and error', async () => {
      try {
        // Force an error
        sandbox.stub(uut, 'getTxWithRetry').rejects(new Error('test error'))

        await uut._getInputAddrs(mockData.mockTxIn)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)

        assert.equal(err.message, 'test error')
      }
    })

    it('should return an empty array when there is no txid', async () => {
      // Force corner-case error
      sandbox.stub(uut, 'getTxWithRetry').rejects(new Error('txid must be provided'))

      const result = await uut._getInputAddrs(mockData.mockTxIn)

      assert.isArray(result)
      assert.equal(result.length, 0)
    })
  })

  describe('#getTxData', () => {
    it('should return tx data with input addresses', async () => {
      // Mock dependencies
      sandbox
        .stub(uut, 'getTxWithRetry')
        .resolves(mockData.nonSlpTxDetails)
      sandbox.stub(uut, '_getInputAddrs').resolves([
        {
          vin: 0,
          address: 'bitcoincash:qr2jtznnkhy0jnynn4l7jmmce6teqcyrhc8herhlgt'
        }
      ])

      const txid =
        '05f7d4a4e25f53d63a360434eb54f221abf159112b7fffc91da1072a079cded3'

      const result = await uut.getTxData(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.property(result.vin[0], 'address')
    })

    it('should throw an error for a non-txid input', async () => {
      try {
        await uut.getTxData()

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)

        assert.include(
          err.message,
          'must be a string containg a TXID'
        )
      }
    })

    it('should catch and throw an error', async () => {
      try {
        // Force a network error.
        sandbox
          .stub(uut, 'getTxWithRetry')
          .rejects(new Error('test error'))

        const txid =
          '05f7d4a4e25f53d63a360434eb54f221abf159112b7fffc91da1072a079cded3'

        await uut.getTxData(txid)

        assert.fail('Unexpected result')
      } catch (err) {
        // console.log(err)

        assert.equal(err.message, 'test error')
      }
    })
  })

  describe('#getTokenInfo', () => {
    it('should return data from decodeOpReturn()', async () => {
      sandbox.stub(uut, 'decodeOpReturn').resolves({ txid: 'sometxid', tokenId: 'sometokenid' })

      const result = await uut.getTokenInfo('input-txid')

      assert.equal(result.txid, 'sometxid')
    })

    it('should return false when decodeOpReturn() throws an error', async () => {
      sandbox.stub(uut, 'decodeOpReturn').rejects(new Error('test error'))

      const result = await uut.getTokenInfo('input-txid')

      assert.equal(result, false)
    })

    it('should return false when token ID contains too many zeros', async () => {
      sandbox.stub(uut, 'decodeOpReturn').resolves({ txid: 'sometxid', tokenId: '00000000' })

      const result = await uut.getTokenInfo('input-txid')

      assert.equal(result, false)
    })
  })

  describe('#getNftTx', () => {
    it('should hydrate an NFT (child) Genesis Tx', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getTokenInfo').resolves(mockData.nftGenesisTokenData02)

      const txDetails = mockData.nftGenesisTx01
      const txTokenData = mockData.nftGenesisTokenData01

      const result = await uut.getNftTx(txDetails, txTokenData)
      // console.log('result: ', result)

      // Assert that properties unique to an NFT Genesis TX exist in the output.
      assert.equal(result.vin[0].tokenQty, 5)
      assert.equal(result.vin[0].tokenId, mockData.nftGenesisTokenData02.tokenId)
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenId, null)
      assert.equal(result.vout[0].isMintBaton, true)
      assert.equal(result.vout[1].tokenQty, 1)
      assert.equal(result.vout[2].tokenQty, 0)
    })

    it('should hydrate an NFT (child/type 65) Send Tx', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getTokenInfo')
        .onCall(0).resolves({
          tokenType: 65,
          txType: 'GENESIS',
          ticker: 'test',
          name: 'test',
          tokenId: 'c2ab27687de886ade3237d38c5f7b2af9b60ec5ca8c89623cd0b81ac7efec36d',
          documentUri: 'ipfs://bafybeidy4nrqgsgcl44jlyvehnulngfzq564kc4bz6ni3cldoupwhwzzy4',
          documentHash: '5126528223a04a49b8586608f8677ef0af0df9bc14f0044bd7395c76f5d1c039',
          decimals: 0,
          mintBatonVout: 0,
          qty: '1'
        })
        .onCall(1).resolves({
          tokenType: 65,
          txType: 'SEND',
          tokenId: '2adfd8afa3511725e0b882949c671f3fa234d9da848a900b819cc68e93af376f',
          amounts: [
            '1'
          ]
        })

      const txDetails = mockData.nftSendTxDetails01
      const txTokenData = mockData.nftSendTxTokenData01

      const result = await uut.getNftTx(txDetails, txTokenData)
      // console.log('result: ', result)

      // Assert expected properties and values exist.
      assert.equal(result.isSlpTx, true)
      assert.equal(result.tokenTxType, 'SEND')
      assert.equal(result.tokenType, 65)
      assert.equal(result.tokenDecimals, 0)
      assert.property(result, 'tokenUri')
      assert.property(result, 'tokenDocHash')
      assert.property(result, 'tokenName')
      assert.property(result, 'tokenTicker')
    })

    it('should throw error for unknown token type', async () => {
      try {
        const txDetails = mockData.nftSendTxDetails01
        const txTokenData = mockData.nftSendTxTokenData01

        // Force unknown token type
        txTokenData.txType = 'UNKNOWN'

        await uut.getNftTx(txDetails, txTokenData)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.message, 'Unknown SLP TX type for TX')
      }
    })

    it('should throw error for unknown token input', async () => {
      try {
        // Mock dependencies
        sandbox.stub(uut, 'getTokenInfo')
          .onCall(0).resolves({
            tokenType: 65,
            txType: 'UNKNOWN',
            ticker: 'test',
            name: 'test',
            tokenId: 'c2ab27687de886ade3237d38c5f7b2af9b60ec5ca8c89623cd0b81ac7efec36d',
            documentUri: 'ipfs://bafybeidy4nrqgsgcl44jlyvehnulngfzq564kc4bz6ni3cldoupwhwzzy4',
            documentHash: '5126528223a04a49b8586608f8677ef0af0df9bc14f0044bd7395c76f5d1c039',
            decimals: 0,
            mintBatonVout: 0,
            qty: '1'
          })

        const txDetails = mockData.nftSendTxDetails01
        const txTokenData = mockData.nftSendTxTokenData01

        await uut.getNftTx(txDetails, txTokenData)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.message, 'Unknown token type in input')
      }
    })

    it('should hydrate an NFT (child) Genesis Tx when Group token was a result of a SEND TX', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getTokenInfo').resolves(mockData.nftGenesisVinData03)

      const txDetails = mockData.nftGenesisTx03
      const txTokenData = mockData.nftGenesisTokenData03

      const result = await uut.getNftTx(txDetails, txTokenData)
      // console.log('result: ', result)

      // Assert that properties unique to an NFT Genesis TX exist in the output.
      assert.equal(result.vin[0].tokenQty, 1)
      assert.equal(result.vin[0].tokenId, 'b31704bfd4beb029bf29bed36599745b3b20dbb0ce1ad4efe9aaa15d3719c44e')
      assert.equal(result.vin[1].tokenQty, 1)
      assert.equal(result.vin[1].tokenId, 'b31704bfd4beb029bf29bed36599745b3b20dbb0ce1ad4efe9aaa15d3719c44e')
      assert.equal(result.vout[0].isMintBaton, true)
      assert.equal(result.vout[1].tokenQty, 1)
      assert.equal(result.vout[2].tokenQty, 0)
    })

    it('should hydrate an NFT (child) Genesis Tx when Group token was a result of a MINT TX', async () => {
      // Example TX: b219ba0a7e712345abeadd979db1783b19f4643374a6efc6ad61c7913de9528e
      // Using Group Token ID: 112f967519e18083c8e4bd7ba67ebc04d72aaaa941826d38655c53d677e6a5be

      // Mock dependencies
      sandbox.stub(uut, 'getTokenInfo')
        .onCall(0).resolves(mockData.nftGenesisFromGroupMintVin01)
        .onCall(1).resolves(mockData.nftGenesisFromGroupMintVin02)

      const txDetails = mockData.nftGenesisFromGroupMintTokenDetails01
      const txTokenData = mockData.nftGenesisFromGroupMintTokenData01

      const result = await uut.getNftTx(txDetails, txTokenData)
      // console.log('result: ', result)

      // Assert that properties unique to an NFT Genesis TX exist in the output.
      assert.equal(result.vin[0].tokenQty, 1)
      assert.equal(result.vin[0].tokenId, '112f967519e18083c8e4bd7ba67ebc04d72aaaa941826d38655c53d677e6a5be')
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenId, null)
      assert.equal(result.vout[0].isMintBaton, true)
      assert.equal(result.vout[1].tokenQty, 1)
      assert.equal(result.vout[2].tokenQty, 0)
    })

    it('should hydrate an NFT (child) Genesis Tx when Group token has a mint baton', async () => {
      // This is not a real-world test. It's simply exercising the different code paths.

      // Customizine mock data to force the desired code path
      mockData.nftGenesisFromGroupMintVin02.mintBatonVout = 3
      mockData.nftGenesisFromGroupMintVin01.txType = 'MINT'

      // Mock dependencies
      sandbox.stub(uut, 'getTokenInfo')
        .onCall(0).resolves(mockData.nftGenesisFromGroupMintVin01)
        .onCall(1).resolves(mockData.nftGenesisFromGroupMintVin02)

      const txDetails = mockData.nftGenesisFromGroupMintTokenDetails01
      const txTokenData = mockData.nftGenesisFromGroupMintTokenData01

      const result = await uut.getNftTx(txDetails, txTokenData)
      // console.log('result: ', result)

      // Assert that properties unique to an NFT Genesis TX exist in the output.
      assert.isNaN(result.vin[0].tokenQty)
      assert.equal(result.vin[0].tokenId, '112f967519e18083c8e4bd7ba67ebc04d72aaaa941826d38655c53d677e6a5be')
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenId, '112f967519e18083c8e4bd7ba67ebc04d72aaaa941826d38655c53d677e6a5be')
      assert.equal(result.vout[0].isMintBaton, true)
      assert.equal(result.vout[1].tokenQty, 1)
      assert.equal(result.vout[2].tokenQty, 0)
    })
  })

  describe('#get', () => {
    it('should throw an error if txid is not specified', async () => {
      try {
        await uut.get()

        assert.fail('Unexpected code path!')
      } catch (err) {
        assert.include(
          err.message,
          'Input to Transaction.get() must be a string containing a TXID.'
        )
      }
    })

    it('should get details about a non-SLP transaction', async () => {
      const txid =
        '2b37bdb3b63dd0bca720437754a36671431a950e684b64c44ea910ea9d5297c7'

      // Mock dependencies
      sandbox.stub(uut, 'getTxData').resolves(mockData.nonSlpTxDetails)
      sandbox.stub(uut.rpc, 'getBlockHeader').resolves({ height: 602405 })
      sandbox.stub(uut, 'getTokenInfo').resolves(false)

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that there are stanardized properties.
      assert.property(result, 'txid')
      assert.property(result, 'vin')
      assert.property(result, 'vout')
      assert.property(result.vout[0], 'value')
      assert.property(result.vout[0].scriptPubKey, 'addresses')

      // Assert that added properties exist.
      assert.property(result.vin[0], 'address')
      assert.property(result.vin[0], 'value')

      // Assert blockheight is added
      assert.equal(result.blockheight, 602405)
      assert.equal(result.isSlpTx, false)
    })

    it('should get details about a SLP SEND tx with SEND input', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getTxData').resolves(mockData.slpTxDetails)
      sandbox.stub(uut.rpc, 'getBlockHeader').resolves({ height: 603424 })
      sandbox
        .stub(uut, 'getTokenInfo')
        .onCall(0)
        .resolves(mockData.mockOpReturnData01)
        .onCall(1)
        .resolves(mockData.mockOpReturnData02)
        .onCall(2)
        .resolves(mockData.mockOpReturnData03)
        .onCall(3)
        .resolves(false)

      const txid =
        '266844d53e46bbd7dd37134688dffea6e54d944edff27a0add63dd0908839bc1'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that there are stanardized properties.
      assert.property(result, 'txid')
      assert.property(result, 'vin')
      assert.property(result, 'vout')
      assert.property(result.vout[0], 'value')
      assert.property(result.vout[1].scriptPubKey, 'addresses')

      // Assert outputs have expected properties
      assert.equal(result.vout[0].tokenQty, null)
      assert.equal(result.vout[0].tokenQtyStr, null)
      assert.equal(result.vout[1].tokenQty, 1)
      assert.equal(result.vout[1].tokenQtyStr, '1')
      assert.equal(result.vout[2].tokenQty, 998833)
      assert.equal(result.vout[2].tokenQtyStr, '998833')
      assert.equal(result.vout[3].tokenQty, null)
      assert.equal(result.vout[3].tokenQtyStr, null)

      // Assert that inputs have expected properties
      assert.equal(result.vin[0].tokenQtyStr, '998834')
      assert.equal(result.vin[0].tokenQty, 998834)
      assert.equal(
        result.vin[0].tokenId,
        '497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7'
      )
      assert.equal(result.vin[1].tokenQtyStr, '0')
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenId, null)

      // Assert blockheight is added
      assert.equal(result.blockheight, 603424)
      assert.equal(result.isSlpTx, true)
    })

    it('should catch and throw error on network error', async () => {
      try {
        const txid =
            '2b37bdb3b63dd0bca720437754a36671431a950e684b64c44ea910ea9d5297c7'

        // Force an error
        sandbox
          .stub(uut, 'getTxData')
          .rejects(new Error('test error'))

        await uut.get(txid)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'test error')
      }
    })

    // This test case was created in response to a bug. When the input TX
    // was a Genesis SLP transaction, the inputs of the transaction were not
    // being hydrated properly.
    it('should get details about a SLP SEND tx with GENSIS input', async () => {
      // Mock dependencies
      sandbox
        .stub(uut, 'getTxData')
        .resolves(mockData.genesisTestInputTx)
      sandbox
        .stub(uut.rpc, 'getBlockHeader')
        .resolves({ height: 543409 })
      sandbox
        .stub(uut, 'getTokenInfo')
        .onCall(0)
        .resolves(mockData.genesisTestOpReturnData01)
        .onCall(1)
        .resolves(mockData.genesisTestOpReturnData02)
        .onCall(2)
        .resolves(mockData.genesisTestOpReturnData02)
        .onCall(3)
        .resolves(mockData.genesisTestOpReturnData02)

      const txid =
          '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that there are stanardized properties.
      assert.property(result, 'txid')
      assert.property(result, 'vin')
      assert.property(result, 'vout')
      assert.property(result.vout[0], 'value')
      assert.property(result.vout[1].scriptPubKey, 'addresses')

      // Assert outputs have expected properties and values
      assert.equal(result.vout[0].tokenQty, null)
      assert.equal(result.vout[0].tokenQtyStr, null)
      assert.equal(result.vout[1].tokenQty, 5000000)
      assert.equal(result.vout[1].tokenQtyStr, '5000000')
      assert.equal(result.vout[2].tokenQty, 5000000)
      assert.equal(result.vout[2].tokenQtyStr, '5000000')
      assert.equal(result.vout[3].tokenQty, null)
      assert.equal(result.vout[3].tokenQtyStr, null)

      // Assert inputs have expected properties and values
      assert.equal(result.vin[0].tokenQty, 10000000)
      assert.equal(result.vin[0].tokenQtyStr, '10000000')
      assert.equal(
        result.vin[0].tokenId,
        '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35'
      )
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenQtyStr, '0')
      assert.equal(result.vin[1].tokenId, null)

      // Assert blockheight is added
      assert.equal(result.blockheight, 543409)
      assert.equal(result.isSlpTx, true)
    })

    it('should get details about a SLP SEND tx with MINT (and GENESIS) input', async () => {
      // Mock dependencies
      sandbox
        .stub(uut, 'getTxData')
        .resolves(mockData.mintTestInputTx)
      sandbox
        .stub(uut.rpc, 'getBlockHeader')
        .resolves({ height: 543614 })
      sandbox
        .stub(uut, 'getTokenInfo')
        .onCall(0)
        .resolves(mockData.mintTestOpReturnData01)
        .onCall(1)
        .resolves(mockData.mintTestOpReturnData02)
        .onCall(2)
        .resolves(mockData.mintTestOpReturnData02)
        .onCall(3)
        .resolves(mockData.mintTestOpReturnData03)
        .onCall(4)
        .resolves(mockData.mintTestOpReturnData03)

      const txid =
        '4640a734063ea79fa587a3cac38a70a2f6f3db0011e23514024185982110d0fa'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that there are stanardized properties.
      assert.property(result, 'txid')
      assert.property(result, 'vin')
      assert.property(result, 'vout')
      assert.property(result.vout[0], 'value')
      assert.property(result.vout[1].scriptPubKey, 'addresses')

      // Assert expected output properties and values exist.
      assert.equal(result.vout[0].tokenQty, null)
      assert.equal(result.vout[1].tokenQty, 43547.68657)
      assert.equal(result.vout[1].tokenQtyStr, '43547.68657')
      assert.equal(result.vout[2].tokenQty, null)

      // Assert expected input properties and values exist.
      assert.equal(result.vin[0].tokenQty, 43545.34534)
      assert.equal(result.vin[0].tokenQtyStr, '43545.34534')
      assert.equal(
        result.vin[0].tokenId,
        '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8'
      )
      assert.equal(result.vin[1].tokenQty, 2.34123)
      assert.equal(result.vin[1].tokenQtyStr, '2.34123')
      assert.equal(
        result.vin[1].tokenId,
        '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8'
      )
      assert.equal(result.vin[2].tokenQty, 0)
      assert.equal(result.vin[2].tokenQtyStr, '0')
      assert.equal(result.vin[2].tokenId, null)

      // Assert blockheight is added
      assert.equal(result.blockheight, 543614)
      assert.equal(result.isSlpTx, true)
    })

    // This test case was generated from the problematic transaction that
    // used inputs in a 'non-standard' way.
    it('should get details about a SLP SEND tx with MINT (and SEND) input', async () => {
      // Mock dependencies
      sandbox
        .stub(uut, 'getTxData')
        .resolves(mockData.sendTestInputTx01)
      sandbox
        .stub(uut.rpc, 'getBlockHeader')
        .resolves({ height: 543957 })
      sandbox
        .stub(uut, 'getTokenInfo')
        .onCall(0)
        .resolves(mockData.sendTestOpReturnData01)
        .onCall(1)
        .resolves(mockData.sendTestOpReturnData02)
        .onCall(2)
        .resolves(mockData.sendTestOpReturnData03)
        .onCall(3)
        .resolves(mockData.sendTestOpReturnData03)
        .onCall(4)
        .resolves(mockData.sendTestOpReturnData04)

      const txid =
        '6bc111fbf5b118021d68355ca19a0e77fa358dd931f284b2550f79a51ab4792a'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that there are stanardized properties.
      assert.property(result, 'txid')
      assert.property(result, 'vin')
      assert.property(result, 'vout')
      assert.property(result.vout[0], 'value')
      assert.property(result.vout[1].scriptPubKey, 'addresses')

      // Assert the outputs have expected properties and values.
      assert.equal(result.vout[0].tokenQty, null)
      assert.equal(result.vout[1].tokenQty, 1000000)
      assert.equal(result.vout[1].tokenQtyStr, '1000000')
      assert.equal(result.vout[2].tokenQty, 198000000)
      assert.equal(result.vout[2].tokenQtyStr, '198000000')
      assert.equal(result.vout[3].tokenQty, null)

      // Assert the inputs have expected properties and values.
      assert.equal(result.vin[0].tokenQty, 100000000)
      assert.equal(result.vin[0].tokenQtyStr, '100000000')
      assert.equal(
        result.vin[0].tokenId,
        '550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b35'
      )
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenQtyStr, 0)
      assert.equal(result.vin[1].tokenId, null)
      assert.equal(result.vin[2].tokenQty, 99000000)
      assert.equal(result.vin[2].tokenQtyStr, '99000000')
      assert.equal(
        result.vin[2].tokenId,
        '550d19eb820e616a54b8a73372c4420b5a0567d8dc00f613b71c5234dc884b35'
      )

      // Assert blockheight is added
      assert.equal(result.blockheight, 543957)
      assert.equal(result.isSlpTx, true)
    })

    // This was a problematic TX
    it('should process MINT TX with GENESIS input', async () => {
      // Mock dependencies
      sandbox
        .stub(uut, 'getTxData')
        .resolves(mockData.mintTestInputTx02)
      sandbox
        .stub(uut.rpc, 'getBlockHeader')
        .resolves({ height: 543614 })
      sandbox
        .stub(uut, 'getTokenInfo')
        .onCall(0)
        .resolves(mockData.mintTestOpReturnData04)
        .onCall(1)
        .resolves(mockData.mintTestOpReturnData05)
        .onCall(2)
        .resolves(mockData.mintTestOpReturnData05)
        .onCall(3)
        .resolves(mockData.mintTestOpReturnData05)
        .onCall(4)
        .resolves(mockData.mintTestOpReturnData05)
        .onCall(5)
        .resolves(mockData.mintTestOpReturnData05)

      const txid =
          'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that there are stanardized properties.
      assert.property(result, 'txid')
      assert.property(result, 'vin')
      assert.property(result, 'vout')
      assert.property(result.vout[0], 'value')
      assert.property(result.vout[1].scriptPubKey, 'addresses')

      // Assert outputs have expected properties and values
      assert.equal(result.vout[0].tokenQty, 0)
      assert.equal(result.vout[0].tokenQty, '0')
      assert.equal(result.vout[1].tokenQty, 2.34123)
      assert.equal(result.vout[1].tokenQty, '2.34123')
      assert.equal(result.vout[2].tokenQty, 0)
      assert.equal(result.vout[2].tokenQty, '0')
      assert.equal(result.vout[2].isMintBaton, true)
      assert.equal(result.vout[3].tokenQty, 0)
      assert.equal(result.vout[3].tokenQty, '0')

      // Assert inputs have expected properties and values
      assert.equal(result.vin[0].tokenQty, 0)
      assert.equal(result.vin[0].tokenQtyStr, '0')
      assert.equal(result.vin[0].tokenId, null)
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenQtyStr, '0')
      assert.equal(
        result.vin[1].tokenId,
        '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8'
      )
      assert.equal(result.vin[1].isMintBaton, true)

      // Assert added TX data exists.
      assert.equal(result.blockheight, 543614)
      assert.equal(result.isSlpTx, true)
    })

    it('should throw an error for unknown tx type', async () => {
      try {
      // Mock dependencies
        sandbox
          .stub(uut, 'getTxData')
          .resolves(mockData.genesisTestInputTx02)
        sandbox
          .stub(uut.rpc, 'getBlockHeader')
          .resolves({ height: 571212 })

        // Force token type to be an unknown type
        mockData.genesisTestOpReturn03.txType = 'UNKNOWN'
        sandbox
          .stub(uut, 'getTokenInfo')
          .onCall(0)
          .resolves(mockData.genesisTestOpReturn03)
          .onCall(1)
          .resolves(mockData.genesisTestOpReturn03)
          .onCall(2)
          .resolves(false)
          .onCall(3)
          .resolves(false)
          .onCall(4)
          .resolves(false)

        const txid =
          '4de69e374a8ed21cbddd47f2338cc0f479dc58daa2bbe11cd604ca488eca0ddf'

        await uut.get(txid)
        // const result = await uut.get(txid)
        // console.log(`result: ${JSON.stringify(result, null, 2)}`)

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'Unknown SLP TX type for TX')
      }
    })

    // It should process a GENESIS tx
    it('should process a GENESIS tx', async () => {
      // Mock dependencies
      sandbox
        .stub(uut, 'getTxData')
        .resolves(mockData.genesisTestInputTx02)
      sandbox
        .stub(uut.rpc, 'getBlockHeader')
        .resolves({ height: 571212 })
      sandbox
        .stub(uut, 'getTokenInfo')
        .onCall(0)
        .resolves(mockData.genesisTestOpReturn03)
        .onCall(1)
        .resolves(mockData.genesisTestOpReturn03)
        .onCall(2)
        .resolves(false)
        .onCall(3)
        .resolves(false)
        .onCall(4)
        .resolves(false)

      const txid =
          '4de69e374a8ed21cbddd47f2338cc0f479dc58daa2bbe11cd604ca488eca0ddf'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that there are stanardized properties.
      assert.property(result, 'txid')
      assert.property(result, 'vin')
      assert.property(result, 'vout')
      assert.property(result.vout[0], 'value')
      assert.property(result.vout[1].scriptPubKey, 'addresses')

      // Assert output have expected properties and values
      assert.equal(result.vout[0].tokenQty, 0)
      assert.equal(result.vout[0].tokenQtyStr, '0')
      assert.equal(result.vout[0].isMintBaton, true)
      assert.equal(result.vout[1].tokenQty, 1000000000)
      assert.equal(result.vout[1].tokenQtyStr, '1000000000')
      assert.equal(result.vout[2].tokenQty, 0)
      assert.equal(result.vout[2].tokenQtyStr, '0')

      // Assert input have expected properties and values
      assert.equal(result.vin[0].tokenQty, 0)
      assert.equal(result.vin[0].tokenQtyStr, '0')
      assert.equal(result.vin[0].tokenId, null)
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenQtyStr, '0')
      assert.equal(result.vin[1].tokenId, null)

      // Assert added TX data exists.
      assert.equal(result.blockheight, 571212)
      assert.equal(result.isSlpTx, true)
    })

    // Forces this mint tx to have a mint baton as input
    it('should process TX with MINT baton input', async () => {
      // Mock dependencies
      sandbox
        .stub(uut, 'getTxData')
        .resolves(mockData.mintTestInputTx02)
      sandbox
        .stub(uut.rpc, 'getBlockHeader')
        .resolves({ height: 543614 })

      // Force input TX to be a mint baton.
      sandbox
        .stub(uut, 'getTokenInfo')
        .onCall(0)
        .resolves(mockData.mintTestOpReturnData04)
        .onCall(1)
        .resolves(mockData.mintTestOpReturnData04)
        .onCall(2)
        .resolves(mockData.mintTestOpReturnData04)
        .onCall(3)
        .resolves(mockData.mintTestOpReturnData04)
        .onCall(4)
        .resolves(mockData.mintTestOpReturnData04)
        .onCall(5)
        .resolves(mockData.mintTestOpReturnData04)

      const txid =
          'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.equal(result.vin[1].tokenQtyStr, '0')
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].isMintBaton, true)
    })

    // I believe this use-case happens when the indexer is tracking transactions
    // comming in on the ZMQ in real time. They have not been mined, so they
    // have no blockhash.
    it('should calculate block height if TX has no blockhash', async () => {
      // For TX to not have a blockhash
      mockData.slpTxDetails.blockhash = undefined

      // Mock dependencies
      sandbox.stub(uut, 'getTxData').resolves(mockData.slpTxDetails)
      sandbox.stub(uut.rpc, 'getBlockCount').resolves(603423)
      // sandbox.stub(uut.rpc, 'getBlockHeader').resolves({ height: 603424 })
      sandbox
        .stub(uut, 'getTokenInfo')
        .onCall(0)
        .resolves(mockData.mockOpReturnData01)
        .onCall(1)
        .resolves(mockData.mockOpReturnData02)
        .onCall(2)
        .resolves(mockData.mockOpReturnData03)
        .onCall(3)
        .resolves(false)

      const txid =
        '266844d53e46bbd7dd37134688dffea6e54d944edff27a0add63dd0908839bc1'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that there are stanardized properties.
      assert.property(result, 'txid')
      assert.property(result, 'vin')
      assert.property(result, 'vout')
      assert.property(result.vout[0], 'value')
      assert.property(result.vout[1].scriptPubKey, 'addresses')

      // Assert outputs have expected properties
      assert.equal(result.vout[0].tokenQty, null)
      assert.equal(result.vout[0].tokenQtyStr, null)
      assert.equal(result.vout[1].tokenQty, 1)
      assert.equal(result.vout[1].tokenQtyStr, '1')
      assert.equal(result.vout[2].tokenQty, 998833)
      assert.equal(result.vout[2].tokenQtyStr, '998833')
      assert.equal(result.vout[3].tokenQty, null)
      assert.equal(result.vout[3].tokenQtyStr, null)

      // Assert that inputs have expected properties
      assert.equal(result.vin[0].tokenQtyStr, '998834')
      assert.equal(result.vin[0].tokenQty, 998834)
      assert.equal(
        result.vin[0].tokenId,
        '497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7'
      )
      assert.equal(result.vin[1].tokenQtyStr, '0')
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenId, null)

      // Assert blockheight is added
      assert.equal(result.blockheight, 603424)
      assert.equal(result.isSlpTx, true)
    })

    it('should get TX details for an NFT', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getTxData').resolves(mockData.nftTxDetails01)
      sandbox.stub(uut.rpc, 'getBlockHeader').resolves({ height: 613542 })
      sandbox
        .stub(uut, 'getTokenInfo')
        .onCall(0)
        .resolves(mockData.nftTxTokenData01)
        .onCall(1)
        .resolves(mockData.nftGenesisData01)
      sandbox.stub(uut, 'getNftTx').resolves(mockData.nftFinalTxDetails01)

      const txid =
        'd9eee23870c82ac0054442146c7de9e3985d70096ba2b913a29672b0376b8456'

      const result = await uut.get(txid)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      // Assert that there are stanardized properties.
      assert.property(result, 'txid')
      assert.property(result, 'vin')
      assert.property(result, 'vout')
      assert.property(result.vout[0], 'value')
      // assert.property(result.vout[1].scriptPubKey, 'addresses')

      // Assert outputs have expected properties
      assert.equal(result.vout[0].tokenQty, null)
      assert.equal(result.vout[0].tokenQtyStr, null)
      assert.equal(result.vout[1].tokenQty, 1)
      assert.equal(result.vout[1].tokenQtyStr, '1')
      assert.equal(result.vout[2].tokenQty, null)
      assert.equal(result.vout[2].tokenQtyStr, null)

      // Assert that inputs have expected properties
      assert.equal(result.vin[0].tokenQtyStr, '1')
      assert.equal(result.vin[0].tokenQty, 1)
      assert.equal(
        result.vin[0].tokenId,
        'da879a9b4d54372db011f254554172a0b4b81a8124bfdfd06ec916f5326948e0'
      )
      assert.equal(result.vin[1].tokenQtyStr, '0')
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenId, 'da879a9b4d54372db011f254554172a0b4b81a8124bfdfd06ec916f5326948e0')

      // Assert blockheight is added
      assert.equal(result.blockheight, 613542)
      assert.equal(result.isSlpTx, true)
    })
  })

  describe('#getTxWithRetry', () => {
    it('should return tx data', async () => {
      // Mock dependencies
      sandbox.stub(uut.queue, 'addToQueue').resolves({ key: 'value' })

      const result = await uut.getTxWithRetry('txid')
      // console.log('result: ', result)

      assert.property(result, 'key')
    })

    it('should catch and throw an error', async () => {
      try {
        // Force an error
        sandbox.stub(uut.queue, 'addToQueue').rejects(new Error('test error'))

        await uut.getTxWithRetry('txid')

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'test error')
      }
    })

    it('should throw an error if txid is not provided', async () => {
      try {
        // Force an error
        // sandbox.stub(uut.queue, 'addToQueue').rejects(new Error('test error'))

        await uut.getTxWithRetry()

        assert.fail('Unexpected code path')
      } catch (err) {
        // console.log(err)
        assert.include(err.message, 'txid string must be included.')
      }
    })

    it('should clear tx cache when it gets too large', async () => {
      // Mock dependencies
      sandbox.stub(uut.queue, 'addToQueue').resolves({ key: 'value' })

      // Force cache count to be too large
      uut.txCacheCnt = 9999999999

      const result = await uut.getTxWithRetry('txid')
      // console.log('result: ', result)

      assert.property(result, 'key')
    })
  })

  describe('#getTx01', () => {
    it('should get details on a normal SEND type 1 TX', async () => {
      // Mock dependencies
      sandbox.stub(uut, 'getTokenInfo')
        .onCall(0).resolves(mockData.sendVinTokenData01)
        .onCall(1).resolves(false)

      const txDetails = mockData.sendTxTokenDetails01
      const txTokenData = mockData.sendTxTokenData01

      const result = await uut.getTx01(txDetails, txTokenData)
      // console.log('result: ', result)

      // Assert that the result has expected properties and values
      assert.equal(result.vout[0].tokenQty, null)
      assert.equal(result.vout[0].tokenQtyStr, null)
      assert.equal(result.vout[1].tokenQty, 10000)
      assert.equal(result.vout[1].tokenQtyStr, '10000')
      assert.equal(result.vout[2].tokenQty, 9223372036854766000)
      assert.equal(result.vout[2].tokenQtyStr, '9223372036854765808')
      assert.equal(result.vout[3].tokenQty, null)
      assert.equal(result.vout[3].tokenQtyStr, null)

      assert.equal(result.vin[0].tokenQtyStr, '9223372036854775808')
      assert.equal(result.vin[0].tokenQty, 9223372036854776000)
      assert.equal(result.vin[0].tokenId, '792ff3fc9a708d5facb28427601a423aedfe96c1863ada303a4a22968781ad70')
      assert.equal(result.vin[1].tokenQtyStr, '0')
      assert.equal(result.vin[1].tokenQty, 0)
      assert.equal(result.vin[1].tokenId, null)
    })

    it('should throw error for unknown token type', async () => {
      // Force unknown token type
      mockData.sendVinTokenData01.txType = 'UNKNOWN'

      // Mock dependencies
      sandbox.stub(uut, 'getTokenInfo')
        .onCall(0).resolves(mockData.sendVinTokenData01)
        .onCall(1).resolves(false)

      const txDetails = mockData.sendTxTokenDetails01
      const txTokenData = mockData.sendTxTokenData01

      try {
        await uut.getTx01(txDetails, txTokenData)
        // console.log('result: ', result)

        assert.fail('Unexpected result')
      } catch (err) {
        assert.equal(err.message, 'Unknown token type in input')
      }
    })
  })

  describe('#isPinClaim', () => {
    it('should return data about valid Pin Claim', async () => {
      // Mock dependencies and force desired code path
      sandbox.stub(uut, 'getTxWithRetry')
        .onCall(0).resolves(mockData.validPinClaim01)
        .onCall(1).resolves(mockData.claimParent01)

      const txid = '1e3a17f945fcf6c718c6463d878f4a2bd647324a9111d17c38ac2bd7fb154b88'

      const result = await uut.isPinClaim(txid)
      // console.log('result: ', result)

      // Assert that the returned object has the expected properties
      assert.property(result, 'proofOfBurnTxid')
      assert.property(result, 'cid')
      assert.property(result, 'claimTxid')

      // Assert the expected values
      assert.equal(result.proofOfBurnTxid, 'abd03cd5a2d0bceb206ffcab6ca4d84bd70745c771433e0d7e467c153c295182')
      assert.equal(result.cid, 'bafkreihhjukasxdhdr4m75kz2pn2voswetczoh2qvokbp26n62wjfkxcde')
      assert.equal(result.claimTxid, '1e3a17f945fcf6c718c6463d878f4a2bd647324a9111d17c38ac2bd7fb154b88')
    })

    it('should throw error if txid is not included', async () => {
      try {
        await uut.isPinClaim()

        assert.fail('Unexpected code path')
      } catch (err) {
        assert.include(err.message, 'txid string must be included.')
      }
    })

    it('should return false for non-claim TX', async () => {
      // Mock dependencies and force desired code path
      sandbox.stub(uut, 'getTxWithRetry').resolves(mockData.nonSlpTxDetails)

      const txid = '2b37bdb3b63dd0bca720437754a36671431a950e684b64c44ea910ea9d5297c7'

      const result = await uut.isPinClaim(txid)
      // console.log('result: ', result)

      assert.equal(result, false)
    })

    it('should return false for 1st invalid pin claim', async () => {
      // Mock dependencies and force desired code path
      sandbox.stub(uut, 'getTxWithRetry').resolves(mockData.invalidPinClaim01)

      const txid = 'a73c26e7dc3151cfc1be195fbcea52c9c9824d0498f131a6ae5fe7dc76b2d941'

      const result = await uut.isPinClaim(txid)
      // console.log('result: ', result)

      assert.equal(result, false)
    })

    it('should return false for 2nd invalid pin claim', async () => {
      // Mock dependencies and force desired code path
      sandbox.stub(uut, 'getTxWithRetry').resolves(mockData.invalidPinClaim02)

      const txid = '26febcc05f93188acfeecef76f02688bd68d7617f388518af758695029f49b47'

      const result = await uut.isPinClaim(txid)
      // console.log('result: ', result)

      assert.equal(result, false)
    })

    it('should return false if Pin Claim is missing filename', async () => {
      // Mock dependencies and force desired code path
      sandbox.stub(uut, 'getTxWithRetry').resolves(mockData.invalidPinClaim03)

      const txid = '09555a14fd2de71a54c0317a8a22ae17bc43512116b063e263e41b3fc94f8905'

      const result = await uut.isPinClaim(txid)
      // console.log('result: ', result)

      assert.equal(result, false)
    })
  })
})
