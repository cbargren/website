// const rewireStyledComponents = require('react-app-rewire-styled-components');
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return injectBabelPlugin('styled-components', config);
};
