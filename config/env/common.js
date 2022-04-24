/*
  This file is used to store unsecure, application-specific data common to all
  environments.
*/

/* eslint  no-unneeded-ternary:0 */

// Get the version from the package.json file.
const pkgInfo = require('../../package.json')
const version = pkgInfo.version

const ipfsCoordName = process.env.COORD_NAME
  ? process.env.COORD_NAME
  : 'psf-slp-indexer'

module.exports = {
  // Configure TCP port.
  port: process.env.PORT || 5001,

  // Password for HTML UI that displays logs.
  logPass: 'test',

  // Email server settings if nodemailer email notifications are used.
  emailServer: process.env.EMAILSERVER
    ? process.env.EMAILSERVER
    : 'mail.someserver.com',
  emailUser: process.env.EMAILUSER
    ? process.env.EMAILUSER
    : 'noreply@someserver.com',
  emailPassword: process.env.EMAILPASS
    ? process.env.EMAILPASS
    : 'emailpassword',

  // FullStack.cash account information, used for automatic JWT handling.
  getJwtAtStartup: process.env.GET_JWT_AT_STARTUP ? true : false,
  authServer: process.env.AUTHSERVER
    ? process.env.AUTHSERVER
    : 'https://auth.fullstack.cash',
  apiServer: process.env.APISERVER
    ? process.env.APISERVER
    : 'https://api.fullstack.cash/v5/',
  fullstackLogin: process.env.FULLSTACKLOGIN
    ? process.env.FULLSTACKLOGIN
    : 'demo@demo.com',
  fullstackPassword: process.env.FULLSTACKPASS
    ? process.env.FULLSTACKPASS
    : 'demo',

  // IPFS settings.
  isCircuitRelay: process.env.ENABLE_CIRCUIT_RELAY ? true : false,
  // SSL domain used for websocket connection via browsers.
  crDomain: process.env.CR_DOMAIN ? process.env.CR_DOMAIN : '',

  // Information passed to other IPFS peers about this node.
  apiInfo: 'https://ipfs-service-provider.fullstack.cash/',

  // JSON-LD and Schema.org schema with info about this app.
  announceJsonLd: {
    '@context': 'https://schema.org/',
    '@type': 'WebAPI',
    name: ipfsCoordName,
    version,
    protocol: 'psf-slp-indexer',
    description:
      'This is a generic IPFS Serivice Provider that uses JSON RPC over IPFS to communicate with it. This instance has not been customized. Source code: https://github.com/Permissionless-Software-Foundation/ipfs-service-provider',
    documentation: 'https://ipfs-service-provider.fullstack.cash/',
    provider: {
      '@type': 'Organization',
      name: 'Permissionless Software Foundation',
      url: 'https://PSFoundation.cash'
    }
  },

  // IPFS Ports
  ipfsTcpPort: process.env.IPFS_TCP_PORT ? process.env.IPFS_TCP_PORT : 4001,
  ipfsWsPort: process.env.IPFS_WS_PORT ? process.env.IPFS_WS_PORT : 4003,

  // BCH Mnemonic for generating encryption keys and payment address
  mnemonic: process.env.MNEMONIC ? process.env.MNEMONIC : '',

  debugLevel: process.env.DEBUG_LEVEL ? parseInt(process.env.DEBUG_LEVEL) : 2,

  // RPC connection information, used by the SLP indexer to communicate with the
  // full node.
  // rpcUri: process.env.RPC_URI ? process.env.RPC_URI : '192.168.0.5:8332',
  rpcIp: process.env.RPC_IP ? process.env.RPC_IP : '172.17.0.1',
  rpcPort: process.env.RPC_PORT ? process.env.RPC_PORT : '8332',
  zmqPort: process.env.ZMQ_PORT ? process.env.ZMQ_PORT : '28332',
  rpcUser: process.env.RPC_USER ? process.env.RPC_USER : 'bitcoin',
  rpcPass: process.env.RPC_PASS ? process.env.RPC_PASS : 'password',

  // Settings for production, using external go-ipfs node.
  isProduction: process.env.SVC_ENV === 'production' ? true : false,
  ipfsHost: process.env.IPFS_HOST ? process.env.IPFS_HOST : 'localhost',
  ipfsApiPort: process.env.IPFS_API_PORT
    ? parseInt(process.env.IPFS_API_PORT)
    : 5001,

  // This blacklist is used to ignore problematic tokens.
  blacklist: process.env.DISABLE_BLACKLIST
    ? []
    : [
        // FlexUSD
        'dd21be4532d93661e8ffe16db6535af0fb8ee1344d1fef81a193e2b4cfa9fbc9'
      ],

  // Number of backups to retain.
  backupQty: process.env.BACKUP_QTY ? parseInt(process.env.BACKUP_QTY) : 5
}
