module.exports = {
  env: {
    es6: true,
    mocha: true,
  },
  extends: [
    'qare',
    'plugin:flowtype/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'flowtype',
  ],
  rules: {
  },
};
