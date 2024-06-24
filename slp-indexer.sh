#!/bin/bash

## Customize these environment variables for your own full node.
export RPC_IP=172.17.0.1
export RPC_PORT=8332
export ZMQ_PORT=28332
export RPC_USER=bitcoin
export RPC_PASS=password

## Uncomment this if you do not want the indexer to automatically old
## backup zip files.
#export DELETE_BACKUP=1

export USE_SLP_SUPPORT_API=true

# Normal indexing, scanning every block and starting at SLP genesis.
npm start

# Fast reindex using a tx-map of SLP transactions.
#npm run reindex
