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
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
        ],
      },
    },
  ],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
  },
};
