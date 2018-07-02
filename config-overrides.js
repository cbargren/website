const { injectBabelPlugin } = require('react-app-rewired');

// eslint-disable-next-line no-unused-vars
module.exports = function override(config, env) {
  return injectBabelPlugin('styled-components', config);
};
