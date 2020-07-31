'use strict';

module.exports = {
  extends: 'eslint-config-cheminfo-typescript',
  rules: {
    'no-shadow': 'off',
    'import/no-unresolved': 'off',
    'import/default': 'off',
    'import/no-cycle': 'off',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {order: 'asc'},
        pathGroups: [
          { pattern: '@ioc:**', group: 'external', position: 'after'},
          {pattern: 'Contracts/**', group: 'internal', position: 'before'},
          {pattern: 'App/**', group: 'internal', position: 'before'},
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      }
    ],
    '@typescript-eslint/no-parameter-properties': 'off',
  }
};
