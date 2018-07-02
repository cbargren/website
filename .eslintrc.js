module.exports = {
  globals: {},
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true
  },
  plugins: ['prettier'],
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {}
};
