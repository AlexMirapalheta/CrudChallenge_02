module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'new-cap': 1,
    'prettier/prettier': 'error',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'comma-dangle': ['error', 'never'],
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'no-useless-escape': 'off',
    'no-underscore-dangle': 'off'
  }
};
