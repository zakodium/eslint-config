# eslint-config-zakodium

Various shared ESLint configurations for Zakodium projects.

## Installation

```console
npm install -D eslint-config-zakodium eslint
```

## Configuration

Create a file named `eslint.config.mjs` at the root of the project and extend the
config that you want to use. Example:

```js
import { defineConfig } from 'eslint/config';
import ts from 'eslint-config-zakodium/ts';
import adonisV5 from 'eslint-config-zakodium/adonis-v5';

export default defineConfig(ts, adonisV5);
```

### Globals

This package re-exports [`globals`](https://github.com/sindresorhus/globals) for convenience:

```js
import { defineConfig } from 'eslint/config';
import { globals } from 'eslint-config-zakodium';

export default defineConfig({
  languageOptions: {
    globals: {
      ...globals.nodeBuiltin,
    },
  },
});
```

### Monorepo

In a monorepo, you may want to apply different configs for different paths. The `defineConfig` ESLint helper allows to do that with `extends`:

```js
import { defineConfig, globalIgnores } from 'eslint/config';
import ts from 'eslint-config-zakodium/ts';
import adonisV5 from 'eslint-config-zakodium/adonis-v5';
import react from 'eslint-config-zakodium/react';

export default defineConfig(
  // Global ignore patterns.
  globalIgnores(['**/build']),
  // Apply TypeScript config on the whole project.
  ts,
  {
    // Apply Adonis v5 config only to the api.
    files: ['api/**'],
    extends: [adonisV5],
  },
  {
    // Apply React config only to the frontend.
    files: ['front/**'],
    extends: [react],
  },
);
```

## Available configs

- `zakodium/js`: Same as [cheminfo/base](https://github.com/cheminfo/eslint-config/blob/main/configs/base.js).
- `zakodium/ts`: Same as [cheminfo-typescript/base](https://github.com/cheminfo/eslint-config-cheminfo-typescript/blob/main/configs/base.js). Also includes `cheminfo/base`!
- `zakodium/jsdoc`: Same as [cheminfo/jsdoc](https://github.com/cheminfo/eslint-config/blob/main/configs/jsdoc.js).
- `zakodium/unicorn`: Same as [cheminfo/unicorn](https://github.com/cheminfo/eslint-config/blob/main/configs/unicorn.js).
- `zakodium/react`: Same as [cheminfo-react/base](https://github.com/cheminfo/eslint-config-cheminfo-react/blob/main/base.js)
- `zakodium/adonis-v5`: Adapts some rules for AdonisJS 5 projects. Should be combined with `zakodium/ts`.
- `zakodium/tailwind`: Class rules for Tailwind CSS projects. Should only be used with Tailwind CSS v4.
- `zakodium/vitest`: Same as [cheminfo/vitest](https://github.com/cheminfo/eslint-config/blob/main/configs/vitest.js).
- `zakodium/vitest-ts`: Same as [cheminfo-typescript/vitest](https://github.com/cheminfo/eslint-config-cheminfo-typescript/blob/main/configs/vitest.js). Also includes `cheminfo/vitest`!
- `zakodium/components`: Rules to disable the import of components outside the index.ts file
