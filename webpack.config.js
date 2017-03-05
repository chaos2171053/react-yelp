'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2));

// const NODE_ENV = process.env.NODE_ENV;
// const dotenv = require('dotenv');
// const dotEnvVars = dotenv.config();
// const environmentEnv = dotenv.config({
//   path: join(root, 'config', `${NODE_ENV}.config.js`),
//   silent: true,
// });
// const envVariables =
//     Object.assign({}, dotEnvVars, environmentEnv);
// const defines =
//   Object.keys(envVariables)
//   .reduce((memo, key) => {
//     const val = JSON.stringify(envVariables[key]);
//     memo[`__${key.toUpperCase()}__`] = val;
//     return memo;
//   }, {
//     __NODE_ENV__: JSON.stringify(NODE_ENV)
//   });
//   config.plugins = [
//   new webpack.DefinePlugin(defines)
// ].concat(config.plugins);
// List of allowed environments
const allowedEnvs = ['dev', 'dist', 'test'];

// Set the correct environment
let env;
if (args._.length > 0 && args._.indexOf('start') !== -1) {
  env = 'test';
} else if (args.env) {
  env = args.env;
} else {
  env = 'dev';
}
process.env.REACT_WEBPACK_ENV = env;

/**
 * Build the webpack configuration
 * @param  {String} wantedEnv The wanted environment
 * @return {Object} Webpack config
 */
function buildConfig(wantedEnv) {
  let isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
  let validEnv = isValid ? wantedEnv : 'dev';
  let config = require(path.join(__dirname, 'cfg/' + validEnv));
  return config;
}

module.exports = buildConfig(env);
