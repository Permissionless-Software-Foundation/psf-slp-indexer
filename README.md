# psf-slp-indexer

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

**Warning:** This is a prototype under active development. This code base is intended to be a replacement for [SLPDB](https://github.com/Permissionless-Software-Foundation/docker-slpdb). The work is based on [this report](https://gist.github.com/christroutner/77c46f1fa9adaf593074d41a508a6401) and the work was funded by [this Flipstarter](https://flipstarter.fullstack.cash/).

## Features

- Written in [standard JavaScript](https://www.npmjs.com/package/standard), using the [Clean Architecture](https://troutsblog.com/blog/clean-architecture) design pattern.
- 100% unit test coverage. This allows for operational reliability and easy code collaboration.
- MIT Licensed to encourage wide adoption and unrestricted use through the BCH ecosystem.
- [LevelDB](https://github.com/google/leveldb) used for fast, efficient indexing and querying.
- Drastically reduced memory usage, compared to SLPDB.
- Docker container for easy deployment and horizontal scaling.

## Requirements

- Ubuntu Linux OS v20.4+
- node **^14.17.0**
- npm **^7.13.0**

## Installation

Customize the [run-dev.sh](./run-dev.sh) bash shell script to point to the a BCH full node with the standard JSON RPC. [docker-bchn](https://github.com/Permissionless-Software-Foundation/docker-bchn) is recommended.

```
git clone https://github.com/Permissionless-Software-Foundation/psf-slp-indexer
cd psf-slp-indexer
npm install
./run-dev.sh
```

## Structure

The file layout of this repository differs from the koa-api-boilerplate. Instead, it follows the file layout of [Clean Architecture](troutsblog.com/blog/clean-architecture).

## Usage

- `npm start` Start server on live mode
- `npm run docs` Generate API documentation
- `npm test` Run mocha tests
- `docker-compose build` Build a 'production' Docker container
- `docker-compose up` Run the docker container

## License

[MIT](./LICENSE.md)
