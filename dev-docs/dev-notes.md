# Dev Notes

These are notes taking during code development.

## Problematic TXIDs

This section lists TXIDs that were found to be problematic.

TXID 1a8e0fb428fefe6c7413dba30c15e2814947f7efb7978de526c514d9128b266c
- Has 2 token outputs.
- The tx implicitly burns 0.01 token (controlled burn)
- simpleledger.info shows the second output of 1228567.88 as burned and invalid, but I don't understand why.
