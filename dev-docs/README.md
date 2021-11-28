# Developer Documentation

This indexer started as a fork of [ipfs-service-provider](https://github.com/Permissionless-Software-Foundation/ipfs-service-provider). That repository provides two interfaces for communication: 1) a [Koa](https://koajs.com/) REST API and 2) [JSON RPC over IPFS](https://troutsblog.com/blog/ipfs-service-providers). The SLP indexing logic was added in the `src/adapters/slp-indexer` directory.

The code in this repository follows the [Clean Architecture](https://troutsblog.com/blog/clean-architecture) design pattern. The app is built on the principles of [TDD](https://tanzu.vmware.com/content/blog/why-tdd), using [these test design patterns](https://youtu.be/lE3RYnchHps).


## Fast Indexing
A JSON file containing a 'transaction map' will be regularly uploaded to Filecoin. This file contains a list of blocks and transactions in the BCH blockchain that contain SLP transactions. This allows the indexer to ignore all non-SLP transaction in the blockchain, which greatly speeds up indexing.

- Download the tx-map by running [get-tx-map.js](../src/adapters/slp-indexer/tx-maps/get-tx-map.js): `node get-tx-map.js`
- Index using the tx map: `npm run reindex`


## Indexer Libraries

This document lays out the file structure of the SLP indexer. It gives a brief overview of what each file does, and how they fit together. This coveres the files in the `src/adapters/slp-indexer/lib/` folder.

- [rpc.js](../src/adapters/slp-indexer/lib/rpc.js) - This adapter library is responsible for interacting with the standard JSON RPC provided by a full node. BCHN is 'reference' node, as this is the full node implementation run by the vast majority of miners. This library stands on it's own, without any other dependencies. Other files depend on this file if they want to interact with the full node.<br />
- [transaction.js](../src/adapters/slp-indexer/lib/transaction.js) - This library is concerned with the pre-processing of transaction data. It leverages the rpc.js library to get raw transaction data from the full node. The library contains functions to quickly determine if the transaction's OP_RETURN conforms to the SLP specification. It also has functions the hydrate the transaction with additional token information.<br />
- [cache.js](../src/adapters/slp-indexer/lib/cache.js) - This is an in-memory cache for holding transaction data. This makes indexing faster by only needing to do transaction hydration once, and the retrieving that data from the cache if it's needed later. The cache will try to retrieve from the fastest to the slowest source; from memory first, LevelDB second, and the full node third.
- [dag.js](../src/adapters/slp-indexer/lib/dag.js) - This library is concerned with DAG validation of SLP transactions. It crawls the connections between transactions (the DAG) to get to the GENESIS transaction, and thereby validates SLP transactions based on the authenticity of this DAG. This is how the SLP protocol prevents forged transactions.
- [filter-block.js](../src/adapters/slp-indexer/lib/filter-block.js) - Contains utilities for quickly filtering non-SLP transactions from block. It also contains sorting logic for sorting the transactions in a blog by their DAG. This pre-processing makes processing by the database much faster and less error prone.
- [utils.js](../src/adapters/slp-indexer/lib/utils.js) - Contains abstract utility functions used by the different indexing libraries.
- [gensis.js](../src/adapters/slp-indexer/lib/genesis.js) - This library contains the logic used to index SLP GENESIS transactions.
- [mint.js](../src/adapters/slp-indexer/lib/mint.js) - This library contains the logic used to index SLP MINT transactions.
- [send.js](../src/adapters/slp-indexer/lib/send.js) - This library contains the logic used to index SLP SEND transactions.

## Indexer Databases
The indexer maintains several LevelDB databases.

- status - This is a small database that tracks the current state of the indexer.
- tokens - This database tracks the state of each token class. It tracks stats about each token, like the number in circulation and the number of burned tokens.
- addrs - This tracks addresses hold tokens and their current balance.
- txs - This is a persistant cache of transaction data. This reduces computational load by quickly retrieving hydrated token data, rather than recomputing it each time the transaction is needed.
- ptxs - (Processed transactions) A list of transactions that have already been processed by the indexer. This is periodically purged. It's used sync the mempool and blocks, when a new block is found.

## Indexing Phases
There are three distinct 'phases' or indexing that this app will run through:

### Bulk Indexing (Phase 1):
This is starting point. The indexer queries the full node to determine the current block height. The indexer then begins indexing the SLP transactions in each block and updating the database, until it reaches to tip of the blockchain.

During this phase, the epoch value is set at 50. The database will back itself up every 50 blocks, and will roll back to this backup if it encounters an error in indexing.

### Mempool Indexing (Phase 2):
Once the indexer reaches the tip of the blockchain, it begins listening to the ZMQ port on the full node. New transactions entering the mempool are passed to the indexer via the ZMQ port. Zero-confirmation SLP transaction are evaluated based on the DAG of transaction. When a new block is found, all the already-processed transactions are ignored. Any transactions missed by ZMQ (it happens) will be processed when the new block is found.

## ToDo

- Detect and handle block reorgs.
