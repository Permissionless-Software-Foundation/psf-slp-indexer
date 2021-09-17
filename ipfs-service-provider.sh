#!/bin/bash

# Ports
export PORT=5001 # REST API port
export IPFS_TCP_PORT=5268
export IPFS_WS_PORT=5269

#export ENABLE_CIRCUIT_RELAY=1

# Production database connection string.
#export DBURL=mongodb://localhost:27017/bch-service-dev

export COORD_NAME=ipfs-service-provider-generic
export MNEMONIC="churn aisle shield silver ladder swear hunt slim pen demand spoil veteran"

export DEBUG_LEVEL=1

npm start
