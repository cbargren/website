const { addBabelPlugins, override } = require('customize-cra');

// eslint-disable-next-line no-unused-vars
module.exports = override(addBabelPlugins('styled-components'));
