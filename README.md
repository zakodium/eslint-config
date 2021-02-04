# eslint-config

Various shared ESLint configurations for Zakodium projects

## Installation

```console
npm install -D @zakodium/eslint-config eslint prettier
```

## Configuration

Create a file named `.eslintrc.yml` at the root of the project and extend the
config that you want to use. Example:

```yaml
extends: '@zakodium/eslint-config/adonis'
```

## Available configs

- `'@zakodium'` (alias of `'@zakodium/eslint-config/base'`): Equivalent to extending [eslint-config-cheminfo](https://github.com/cheminfo/eslint-config).
- `'@zakodium/eslint-config/typescript'`: Equivalent to extending [eslint-config-cheminfo-typescript](https://github.com/cheminfo/eslint-config-cheminfo-typescript)
- `'@zakodium/eslint-config/react'`: Equivalent to extending [eslint-config-cheminfo-react](https://github.com/cheminfo/eslint-config-cheminfo-react)
- `'@zakodium/eslint-config/typescript-react'`: Equivalent to extending both [eslint-config-cheminfo-typescript](https://github.com/cheminfo/eslint-config-cheminfo-typescript) and [eslint-config-cheminfo-react](https://github.com/cheminfo/eslint-config-cheminfo-react)
- `'@zakodium/eslint-config/adonis'`: Extends [eslint-config-cheminfo-typescript](https://github.com/cheminfo/eslint-config-cheminfo-typescript) with some adaptations for AdonisJS projects.
