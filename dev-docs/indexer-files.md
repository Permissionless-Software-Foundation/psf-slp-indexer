# Indexer Files

This document lays out the file structure of the SLP indexer. It gives a brief overview of what each file does, and how they fit together. This coveres the files in the `src/adapters/slp-indexer/lib/` folder.

- rpc.js - This adapter library is responsible for interacting with the standard JSON RPC provided by a full node. This library stands on it's own, without any other dependencies. Other files depend on this file if they want to interact with the full node.
- transaction.js - This library is concerned with the pre-processing of transaction data. It leverages the rpc.js library to get raw transaction data from the full node. The library contains functions to quickly determine if the transaction's OP_RETURN conforms to the SLP specification. It also has functions the hydrate the transaction with additional token information.
