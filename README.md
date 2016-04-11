# Player ESLint Config [![npm version](https://img.shields.io/npm/v/@vimeo/eslint-config-player.svg?maxAge=2592000)](https://www.npmjs.com/package/@vimeo/eslint-config-player)

> Default ESLint configuration for Player projects.

## How to use it

First, install the npm package:

```bash
npm install @vimeo/eslint-config-player
```

Then add the `extends` option to the `.eslintrc.json` file:

```json
{
    "extends": "@vimeo/eslint-config-player"
}
```

If the project is using ES6, extend from the ES6 version instead:

```json
{
    "extends": "@vimeo/eslint-config-player/es6"
}
```

You can override specific settings by specifying them as normal. See <http://eslint.org/docs/developer-guide/shareable-configs> for more details.
