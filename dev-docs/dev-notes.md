# Dev Notes

These are notes taking during code development.

## Problematic TXIDs

This section lists TXIDs that were found to be problematic.

TXID 1a8e0fb428fefe6c7413dba30c15e2814947f7efb7978de526c514d9128b266c (SEND)
- Has 2 token outputs.
- The tx implicitly burns 0.01 token (controlled burn)
- simpleledger.info shows the second output of 1228567.88 as burned and invalid, but I don't understand why.

TXID 93d30d6ea82126f86c786041b10bf9eb44d9612907eaf9b14f9fba60fc0d3dc7 (SEND)
- Similar to above.
- has 1 token output.
- The tx implicitly burns 99 tokens (controlled burn)
- simpleledger.info shows the first output of 499,900 tokens as burned and invalid, but I don't understand why.
  - Passes SLP parser. Everything appears to be valid.

TXID c321b6e7a3e447f2cbaea3da9d5d7c7f6c83542e4fb3b97a345f3b5b0f8018ce (MINT)
- Looks totally legit to me. Not sure why simpleledger.info shows this baton as burned.
