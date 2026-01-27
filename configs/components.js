import { defineConfig } from 'eslint/config';

export default defineConfig({
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: [
              '**/tailwind-ui/**/symbols.ts',
              '**/tailwind_ui/**/symbols.ts',
            ],
            message: 'Do not import Symbols from components',
          },
        ],
      },
    ],
  },
});
