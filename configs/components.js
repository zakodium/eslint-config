import { defineConfig } from 'eslint/config';

/**
 * Creates an ESLint configuration to restrict direct imports from the components directory.
 *
 * @param {Object} config - The configuration object
 * @param {string} config.root - The path to the directory whose imports should be restricted
 *                                (e.g., 'components/tailwind-ui')
 *
 * @returns {Object} ESLint configuration with the 'no-restricted-imports' rule defined
 *
 * @example
 * // Prevents direct imports from 'components/tailwind-ui'
 * export default components({ root: 'components/tailwind-ui' });
 *
 * // This will be forbidden:
 * import { Button } from 'components/tailwind-ui/Button';
 * import { Card } from 'components/tailwind-ui/ui/Card';
 * import * as zod from 'zod';
 *
 * // This will be allowed:
 * import { Button } from 'components/tailwind-ui/index.ts';
 * import type { _ZodType } from 'zod'; // type import from zod are allowed
 *
 * @description
 * This configuration enforces two main restrictions:
 *
 * 1. **Component Directory Import Pattern**:
 *    - Prevents direct imports from the specified component directory (e.g., 'components/tailwind-ui')
 *    - All imports must go through the `index.ts` file
 *
 * 2. **Zod Import Restriction**:
 *    - Prevents direct imports from the 'zod' package
 *    - Encourages using centralized zod validator helpers from 'forms/validation'
 *    - Type-only imports from 'zod' are still allowed
 */
export default function components({ root: pathToTailwind }) {
  return defineConfig({
    rules: {
      'no-restricted-imports': 'off',
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'zod',
              message: 'Use zod validator helpers from forms/validation',
              allowTypeImports: true,
            },
          ],
          patterns: [
            {
              group: [
                `**/${pathToTailwind}/**`,
                `!**/${pathToTailwind}/index.ts`,
              ],
              message: `Direct imports are not allowed. Please import from ${pathToTailwind}/index.ts`,
            },
          ],
        },
      ],
    },
  });
}
