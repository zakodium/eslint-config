import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';
import { defineConfig } from 'eslint/config';

/**
 * Generates an ESLint configuration for the better-tailwindcss plugin,
 * intended for use with Tailwind CSS v4 only.
 *
 * @param {string} [entryPoint='tailwind.css'] - Path to the Tailwind CSS v4 entry file (default: 'tailwind.css').
 * @returns {import('eslint').Linter.Config[]} Array of ESLint configurations.
 */
export default function tailwind(entryPoint = 'tailwind.css') {
  return defineConfig([
    {
      name: 'zakodium/tailwind',
      plugins: {
        'better-tailwindcss': eslintPluginBetterTailwindcss,
      },
      rules: {
        // https://github.com/schoero/eslint-plugin-better-tailwindcss#rules
        'better-tailwindcss/no-unnecessary-whitespace': 'warn',
        'better-tailwindcss/no-duplicate-classes': 'error',
        'better-tailwindcss/no-unregistered-classes': 'error',
      },
      settings: {
        'better-tailwindcss': {
          entryPoint,
        },
      },
    },
  ]);
}
