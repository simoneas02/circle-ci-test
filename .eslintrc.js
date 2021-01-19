module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    ,
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        // ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    // 'no-unused-vars': 'off',
    // 'no-use-before-define': 'off',
    // 'class-methods-use-this': 'off',
  },
};
