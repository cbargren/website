module.exports = {
  globals: {},
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true
  },
  plugins: ['prettier'],
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: [
          '**/config/**',
          '**/?(*.)spec.js',
          'scripts/**',
          'config-overrides.js'
        ]
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/prop-types': 'off'
  }
};
