#!/bin/bash

# BEGIN: Optional configuration settings

# This mnemonic is used to set up persistent public key for e2ee
# Replace this with your own 12-word mnemonic.
# You can get one at https://wallet.fullstack.cash.
#export MNEMONIC="olive two muscle bottom coral ancient wait legend bronze useful process session"

# The human readable name this IPFS node identifies as.
#export COORD_NAME=ipfs-service-provider-generic

# Allow this node to function as a circuit relay. It must not be behind a firewall.
#export ENABLE_CIRCUIT_RELAY=true
# For browsers to use your circuit realy, you must set up a domain, SSL certificate,
# and you must forward that subdomain to the IPFS_WS_PORT.
#export CR_DOMAIN=subdomain.yourdomain.com

# Debug level. 0 = minimal info. 2 = max info.
export DEBUG_LEVEL=1

# END: Optional configuration settings


# Production database connection string.
export DBURL=mongodb://172.17.0.1:5555/psf-slp-indexer-prod

# Configure REST API port
export PORT=5010

# Production settings using external go-ipfs node.
export SVC_ENV=production
#export IPFS_HOST=172.17.0.1
#export IPFS_API_PORT=5001
#export IPFS_TCP_PORT=4001
#export IPFS_WS_PORT=5269

# RPC settings for the full node
export RPC_IP=172.17.0.1
export RPC_PORT=8332
export ZMQ_PORT=28332
export RPC_USER=bitcoin
export RPC_PASS=password

# Delete backups as it syncs.
export DELETE_BACKUP=1

# make directories
mkdir leveldb
mkdir leveldb/current
mkdir leveldb/backup
mkdir leveldb/zips
cp restore-auto.sh leveldb/zips/

# SSP-API
export SSP_API_URL=http://172.17.0.1:5020

npm start
