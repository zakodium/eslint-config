import { defineConfig } from 'eslint/config';

export default defineConfig({
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: [
              '**/tailwind-ui/**',
              '**/tailwind_ui/**',
              '!**/tailwind-ui/index.ts',
              '!**/tailwind_ui/index.ts',
            ],
            message:
              'Direct imports are not allowed. Please import from tailwind-ui/index.ts or tailwind_ui/index.ts',
          },
        ],
      },
    ],
  },
});
