# Developer Documentation

This directory needs to be fleshed out with more information. The markdown files in this directory are intended to provide additional documentation for software developers that use this boilerplate to run their own forks.

## Startup
This software requires an IPFS node in order to operate the JSON RPC and ipfs-coord features. There are two ways to incorporate an IPFS node:

- js-ipfs is integrated into this repository. If you simply run `npm start`, then this app will default to the js-ipfs IPFS node. However, js-ipfs is not as full featured as go-ipfs. It has memory leaks and lags considerably behind go-ipfs in terms of features.

- go-ipfs is the preferred way to run a node. It can be run externally by following the guidence on the [IPFS homepage](https://ipfs.io). Once the IPFS node is running, this app can take control of it. Use the [local-external-ipfs-node.sh](../shell-scripts/local-external-ipfs-node.sh) shell script to start this app and attach it to the go-ipfs node.
