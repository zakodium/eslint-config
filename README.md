# eslint-config

Various shared ESLint configurations for Zakodium projects

## Installation

```console
npm install -D eslint-config-zakodium eslint
```

## Configuration

Create a file named `.eslintrc.yml` at the root of the project and extend the
config that you want to use. Example:

```yaml
extends:
  - zakodium/ts
  - zakodium/adonis-v5
```

## Available configs

- `zakodium/js`: Same as [cheminfo/base](https://github.com/cheminfo/eslint-config/blob/main/base.js).
- `zakodium/ts`: Same as [cheminfo-typescript/base](https://github.com/cheminfo/eslint-config-cheminfo-typescript/blob/main/base.js).
- `zakodium/jsdoc`: Same as [cheminfo/jsdoc](https://github.com/cheminfo/eslint-config/blob/main/jsdoc.js).
- `zakodium/unicorn`: Same as [cheminfo/unicorn](https://github.com/cheminfo/eslint-config/blob/main/unicorn.js).
- `zakodium/react`: Same as [cheminfo-react/base](https://github.com/cheminfo/eslint-config-cheminfo-react/blob/main/base.js)
- `zakodium/adonis-v5`: Adapts some rules for AdonisJS 5 projects. Should be combined with `zakodium/ts`.
