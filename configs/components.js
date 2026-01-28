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
 *
 * // This will be allowed:
 * import { Button } from 'components/tailwind-ui/index.ts';
 */
export default function components({ root: pathToTailwind }) {
  return defineConfig({
    rules: {
      'no-restricted-imports': [
        'error',
        {
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
