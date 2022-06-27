# ipfs-service-provider

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Overview

This is a 'boilerplate' repository. It's intended to be forked to start new projects. However, it can also be run as a stand-alone Circuit Relay, for supporting the PSF network.

## Boilerplate

This repository has been forked from the [koa-api-boilerplate](https://github.com/christroutner/koa-api-boilerplate). It has all the same features as that boilerplate:

- [Koa](https://koajs.com/) framework for REST APIs
- User management
- Access and rate-limit control using [JWT tokens](https://jwt.io/).

This boilerplate extends that code to provide the basic features required to be a 'service provider' on the [IPFS](https://ipfs.io) network. This is a core concept in the [web3 Cash Stack](https://cashstack.info). These basic features include:

- [ipfs-coord](https://www.npmjs.com/package/ipfs-coord) for coordinating service providers and consumers across the IPFS network.
- JSON RPC for creating an API between providers and consumers.

If you are interested in creating your own service provider on the IPFS network, fork this repository and start building.

## Circuit Relay

This 'production' environment for this boilerplate sets up a series of Docker containers, orchestrated with Docker Compose. This boilerplate code can be run without modification, in order to set up a [Circuit Relay](https://docs.libp2p.io/concepts/circuit-relay/) and support the PSF network. You can get paid a [bounty](https://github.com/Permissionless-Software-Foundation/bounties) for doing so, in PSF tokens. See the section below on setting up a Production Docker Container.

## Features

This project covers basic necessities of most APIs.

- [Koa](https://koajs.com/) framework for REST APIs
- Authentication (passport & jwt)
- Database (mongoose)
- Testing (mocha)
- Doc generation with apidoc
- Linting using [Standard](https://github.com/standard/standard)
- Packaged for production environment as a Docker container
- [ipfs-coord](https://www.npmjs.com/package/ipfs-coord) for coordinating peers over IPFS
- JSON RPC for mirroring the REST API over IPFS

## Requirements

- node **^14.18.2**
- npm **^8.3.0**
- Docker **^20.10.8**
- Docker Compose **^1.27.4**

## Installation

### Development Environment

**Note:** This software now uses an external go-ipfs IPFS node. The instructions below have not been updated to reflect this.

A development environment will allow you modify the code on-the-fly and contribute to the code base of this repository. [PM2](https://www.npmjs.com/package/pm2) is recommended for running this code base as an IPFS Circuit Relay.

- [Video: Installing ipfs-service-provider](https://youtu.be/Z0NsboIVN44)
- [Step-by-step installation instructions](https://gist.github.com/christroutner/3304a71d4c12a3a3e1664a438f64d9d0)

```bash
git clone https://github.com/Permissionless-Software-Foundation/ipfs-service-provider
cd ipfs-service-provider
./install-mongo-sh
sudo npm install -g node-pre-gyp
npm install
./ipfs-service-provider.sh
```

### Production Environment

The [docker](./production/docker) directory contains a Dockerfile for building a production deployment.

```
docker-compose pull
docker-compose up -d
```

You can bring the containers back up with `docker-compose up -d`.

### Operation Notes

- There is a memory leak in the version of js-ipfs. The app is currently configured to shut down every 8 hours to flush memory. It relies on a process manager like pm2, Docker, or systemd to restart the app after it shuts down, in order to ensure continuous operation.

- The PSF network operates as a private network. It does not connect or interact with the wider PSF network, relying instead on gateways to bridge the two networks, when they need to share content. This improves the performance and experience for everyone in the PSF network. To join the network, you'll need to add the [swarm.key](./swarm.key) file to the IPFS data folder.

- [Instructions on setting up IPFS private networks.](https://github.com/ipfs/go-ipfs/blob/master/docs/experimental-features.md#private-networks)
- For external installations, the swarm.key file will typically go in `~/.ipfs/swarm.key`
- For production Docker containers, the key would go in `ipfs-service-provider/production/data/go-ipfs/data/swarm.key`

## Structure

The file layout of this repository differs from the koa-api-boilerplate. Instead, it follows the file layout of [Clean Architecture](troutsblog.com/blog/clean-architecture).

## Usage

- `npm start` Start server on live mode
- `npm run docs` Generate API documentation
- `npm test` Run mocha tests
- `docker-compose build` Build a 'production' Docker container
- `docker-compose up` Run the docker container

## Documentation

API documentation is written inline and generated by [apidoc](http://apidocjs.com/).

Visit `http://localhost:5000/docs/` to view docs

There is additional developer documentation in the [dev-docs directory](./dev-docs).

## Dependencies

- [koa2](https://github.com/koajs/koa/tree/v2.x)
- [koa-router](https://github.com/alexmingoia/koa-router)
- [koa-bodyparser](https://github.com/koajs/bodyparser)
- [koa-generic-session](https://github.com/koajs/generic-session)
- [koa-logger](https://github.com/koajs/logger)
- [MongoDB](http://mongodb.org/)
- [Mongoose](http://mongoosejs.com/)
- [Passport](http://passportjs.org/)
- [Nodemon](http://nodemon.io/)
- [Mocha](https://mochajs.org/)
- [apidoc](http://apidocjs.com/)
- [ESLint](http://eslint.org/)
- [ipfs-coord](https://www.npmjs.com/package/ipfs-coord)

## IPFS

Snapshots pinned to IPFS will be listed here.

## License

[MIT](./LICENSE.md)
