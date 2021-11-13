# Developer Documentation

This indexer started as a fork of [ipfs-service-provider](https://github.com/Permissionless-Software-Foundation/ipfs-service-provider). That repository provides a Koa REST API and JSON RPC over IPFS. The indexing logic was added in the `src/adapters/slp-indexer`.

The code in this repository follows the [Clean Architecture](https://troutsblog.com/blog/clean-architecture) design pattern. The app is built on the principles of [TDD](https://tanzu.vmware.com/content/blog/why-tdd), using [these test design patterns](https://youtu.be/lE3RYnchHps).


## Fast Indexing
A JSON file containing a 'transaction map' will be regularly uploaded to Filecoin. This file contains a list of blocks and transactions in the BCH blockchain that contain SLP transactions. This allows the indexer to ignore all non-SLP transaction in the blockchain, which greatly speeds up indexing.

- [slp-tx-map-691599.json](https://bafybeifg5ke5szowrwubucf2ljdthlgukupl3mvldtnjkacvig3wv4tity.ipfs.dweb.link/)

To index using the tx map, move the file to the `src/adapters/slp-indexer/tx-maps` directory. Then run the npm script `npm run reindex`.

## Indexer Libraries

This document lays out the file structure of the SLP indexer. It gives a brief overview of what each file does, and how they fit together. This coveres the files in the `src/adapters/slp-indexer/lib/` folder.

- rpc.js - This adapter library is responsible for interacting with the standard JSON RPC provided by a full node. This library stands on it's own, without any other dependencies. Other files depend on this file if they want to interact with the full node.
- transaction.js - This library is concerned with the pre-processing of transaction data. It leverages the rpc.js library to get raw transaction data from the full node. The library contains functions to quickly determine if the transaction's OP_RETURN conforms to the SLP specification. It also has functions the hydrate the transaction with additional token information.
