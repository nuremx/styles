# Nure Styles

Set of modern JS for React and React Native formatting guides, using [**ESLint**](https://eslint.org/) and [**Prettier**](https://prettier.io/).

## Installing

Install packages

```bash
npm install --dev prettier-config-nure eslint-config nure lint-staged husky
```

Create a `.eslintrc.json` file with the following contents

```json
{
  "extends": ["eslint-config-nure"]
}
```

Next create a `.prettierrc.js` file with the following contents

```js
module.exports = {
  ...require("prettier-config-nure")
};
```

And finally add the following lines to your `package.json` file, if you want to ensure no rules are being ignored using [lint-staged](https://github.com/okonet/lint-staged) (optional).

```json
  "name": "My project",
  "version": "0.1.0",
  "scripts": {
    ...
  },
+  "husky": {
+    "hooks": {
+      "pre-commit": "lint-staged"
+    }
+  },
+  "lint-staged": {
+    "*.{js,jsx}": "eslint --fix",
+    "*.{js,jsx,ts,tsx,md,html,css}": "prettier --write"
+  }
```

## Packages

### `eslint-config-nure`

![npm](https://img.shields.io/npm/v/eslint-config-nure)

This package includes a ESLint configuration that extends `eslint-config-react-app` and adds some extra rules

### `prettier-config-nure`

![npm](https://img.shields.io/npm/v/prettier-config-nure)

Prettier configuration compatible with `eslint-config-nure`

## License

MIT
