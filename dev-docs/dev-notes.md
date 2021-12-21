# Dev Notes

These are notes taking during code development.

## Problematic TXIDs

This section lists TXIDs that were found to be problematic.



TXID c321b6e7a3e447f2cbaea3da9d5d7c7f6c83542e4fb3b97a345f3b5b0f8018ce (MINT)
- Looks totally legit to me. Not sure why simpleledger.info shows this baton as burned.

## Notable TXIDs

TXID 1a8e0fb428fefe6c7413dba30c15e2814947f7efb7978de526c514d9128b266c (SEND)
- Has 2 token outputs.
- The tx implicitly burns 0.01 token (controlled burn)
- simpleledger.info shows the second output of 1228567.88 as burned in a future tx.

TXID 93d30d6ea82126f86c786041b10bf9eb44d9612907eaf9b14f9fba60fc0d3dc7 (SEND)
- Similar to above.
- has 1 token output.
- The tx implicitly burns 99 tokens (controlled burn)
- simpleledger.info shows the first output of 499,900 tokens as burned in a future tx.

TXID 175ac1e083b86cf9e723acc1698e3c69d2ccbbe3f9901b015b817cdb0db5f9e7
- Burns token utxos from two different tokens.

**Spice DAG**
These TXIDs are Spice token transaction that are linked by a long DAG. Most of the txs in this DAG are valid, but some are not. It appears the indexer has a discrepancy with SLPDB on the validity of the DAG.
TXID 23279ab149da98673cf3677c9c6d90bbc4bad4a8de2c0baea7181e8fba08cccc, 621236
- has an input that is invalid.
TXId 43cf6410d2b41a2087f38d83ba5340547a32dd99a5778e347667df2379708eee, 619563
- uncontrolled burn. Some of these are used in txid 23279

These are some of the TXIDs in-between:
// const txid = '57e76d0d3d3b76f66ca4276642557eddc8e5c1b92355add6866da958ec39afe5'
// const txid = '23279ab149da98673cf3677c9c6d90bbc4bad4a8de2c0baea7181e8fba08cccc'
// const txid = 'de30610b68be8dae2d1627cd0e7f7c0e18d916bc8881bbbff074c4c2c8e58e73'
// const txid = 'e74ed9a8593d521eb64e527ac12d1ab00c689c8440931079f6e50d37097d2f7c'
// const txid = '58bbb866dd09bd348f20a367c706dd7c48cc8c642a28f4f9c442cb469f99aefb'
const txid = '43cf6410d2b41a2087f38d83ba5340547a32dd99a5778e347667df2379708eee'
// const TXID = 'ab406b2ddac910067e987c2d32bf5acf01396be4f5982555483e55a2975d609d'
// const TXID = 'f36b94aa9e282d71ad9d578e4818c2d401eb928168793a8b04c3c2bb591d892b'
// const TXID = 'c94faf77fc2cd7057eb78d258c9bed007266c212e18b8d12254daa69a1e4bed1'
