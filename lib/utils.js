/**
 * @module kad-spartacus/utils
 */

'use strict';

var crypto = require('crypto');

/**
 * Returns the nodeID
 * #getNodeIdFromPublicKey
 * @param {String} pubkey
 */
module.exports.getNodeIdFromPublicKey = function(pubkey) {
  if (!Buffer.isBuffer(pubkey)) {
    pubkey = new Buffer(pubkey, 'hex');
  }

  var pubhash = crypto.createHash('sha256').update(pubkey).digest();
  var pubripe = crypto.createHash('rmd160').update(pubhash).digest();

  return pubripe.toString('hex');
};
