# Dev Notes

These are notes taking during code development.

## Problematic TXIDs

This section lists TXIDs that were found to be problematic.

This first TXID is a SEND TX that fails SLP validation. It's used in the second TXID, which uses a mix of valid and invalid token inputs.

- TXID: 16a40eca8bf6a1d4b913820718db2361686a9371e4b4ad82998c0566cf7a3052
- TXID: b1091bb9d5821b84dd65be21158d905bcf2d799bf096b81a5c8a74d1c6e2e9ef


This first TXID is problematic. It forms a valid DAG with a GENESIS tx, but it's not a valid MINT transaction.
- TXID: c017075df2eae8cfcfa0d121040c6fd08f3ec3234faa5c71e56c800869f4b87a (invalid) 570635
- TXID: 9e85f156f83304f38cc44f759b319b3d3f0b45d79b81eadd712df6336e1f5cfa (invalid) 567566
- TXID: afea5ee626e415bfd2b3b957ee3a076e6e0f79e11cbe58a66100731dd5b7bba4 (invalid) 567559
- TXID: 495322b37d6b2eae81f045eda612b95870a0c2b6069c58f70cf8ef4e6a9fd43a (valid) 567558

## Problematic Blocks

- 714476 - caused filter-block.js/filterAndSortSlpTxs2() to have a duplicate TXID. This caused the TX to be processed twice, causing a halt to indexing because the deleted UTXO could not be found.
