'use strict';

module.exports = {
  extends: [
    'eslint-config-cheminfo-react',
    'eslint-config-cheminfo-typescript',
  ],
  overrides: [
    {
      files: ['*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
      },
    },
  ],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
  },
};
