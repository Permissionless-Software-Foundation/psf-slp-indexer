# psf-slp-indexer

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

This application crawls the Bitcoin Cash (BCH) blockchain and indexes all the SLP token transactions. This code base is intended to be a replacement for [SLPDB](https://github.com/Permissionless-Software-Foundation/docker-slpdb). The work is based on [this report](https://gist.github.com/christroutner/77c46f1fa9adaf593074d41a508a6401) and the work was funded by [this Flipstarter](https://flipstarter.fullstack.cash/).

This indexer is one part of a collection of blockchain infrastructure. To understand how all the pieces fit together, read the [Cash Stack Documentation](https://permissionless-software-foundation.github.io/cashstack.info/).

## Development Status

Current status: **Beta**

This project is using conventional development milestones:
- Alpha = Under active development. Bugs are expected, things are expected to break.
- Beta = Some bugs still exist, but code is mature enough for careful roll-out into production.
- Production = Code has been heavily tested and code commits have slowed in frequency. App is ready for normal operators.

Regular status updates will be reported at the [bi-weekly PSF Technical Steering Committee meetings](https://github.com/Permissionless-Software-Foundation/TSC/issues). Updates will also be reported in [this Telegram channel](https://t.me/psf_slp).

**See the [developer documentation](./dev-docs) for more information.**

### Videos

- [Installing the psf-slp-indexer](https://youtu.be/5gF4ON9lRHI)
- [Additional Infrastructure Videos](https://psfoundation.cash/video/) in the 'Dev Ops & Infrastructure' section.


## Features

- Written in [standard JavaScript](https://www.npmjs.com/package/standard), using the [Clean Architecture](https://troutsblog.com/blog/clean-architecture) design pattern.
- 100% unit test coverage. This allows for operational reliability and easy code collaboration.
- [GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) Licensed to encourage wide adoption and free use throughout the BCH ecosystem.
- [LevelDB](https://github.com/google/leveldb) used for fast, efficient indexing and querying.
- Drastically reduced memory usage, compared to SLPDB.
- Fast indexing using transaction maps.
- Docker container for easy deployment and horizontal scaling.

## Requirements

- Ubuntu Linux OS v20.4+
- node **^14.17.0**
- npm **^7.13.0**

## Installation

Customize the [slp-indexer.sh](./slp-indexer.sh) bash shell script to point to the a BCH full node with the standard JSON RPC. [docker-bchn](https://github.com/Permissionless-Software-Foundation/docker-bchn) is recommended.

```
git clone https://github.com/Permissionless-Software-Foundation/psf-slp-indexer
cd psf-slp-indexer
npm install
./slp-indexer.sh
```

**See the [developer documentation](./dev-docs) for more information.**

## Usage

- `npm start` Start server on live mode
- `npm run docs` Generate API documentation
- `npm test` Run mocha tests
- `docker-compose build` Build a 'production' Docker container
- `docker-compose up` Run the docker container

## License

[GPLv2](./LICENSE.md)
