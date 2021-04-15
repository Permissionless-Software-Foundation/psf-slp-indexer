/*
  This file is used to store unsecure, application-specific data common to all
  environments.
*/

/* eslint  no-unneeded-ternary:0 */

module.exports = {
  // Configure TCP port.
  port: process.env.PORT || 5001,

  // Password for HTML UI that displays logs.
  logPass: 'test',

  // Email server settings if nodemailer email notifications are used.
  emailServer: process.env.EMAILSERVER ? process.env.EMAILSERVER : 'mail.someserver.com',
  emailUser: process.env.EMAILUSER ? process.env.EMAILUSER : 'noreply@someserver.com',
  emailPassword: process.env.EMAILPASS ? process.env.EMAILPASS : 'emailpassword',

  // IPFS settings.
  isCircuitRelay: process.env.ENABLE_CIRCUIT_RELAY ? true : false,

  // Information passed to other IPFS peers about this node.
  apiInfo: 'https://ipfs-service-provider.fullstack.cash/',

  // JSON-LD and Schema.org schema with info about this app.
  announceJsonLd: {
    '@context': 'https://schema.org/',
    '@type': 'WebAPI',
    name: 'ipfs-service-provider',
    description: 'This is a generic IPFS Serivice Provider that uses JSON RPC over IPFS to communicate with it. This instance has not been customized. Source code: https://github.com/Permissionless-Software-Foundation/ipfs-service-provider',
    documentation: 'https://ipfs-service-provider.fullstack.cash/',
    provider: {
      '@type': 'Organization',
      name: 'Permissionless Software Foundation',
      url: 'https://PSFoundation.cash'
    }
  }
}
