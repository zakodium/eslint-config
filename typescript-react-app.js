'use strict';

module.exports = {
  extends: [
    'eslint-config-cheminfo-react',
    'eslint-config-cheminfo-typescript',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
  },
};
