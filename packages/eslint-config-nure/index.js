module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  plugins: ['react', 'eslint-plugin-jsx-a11y', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    '@react-native-community',
    'prettier',
  ],
  rules: {
    'import/order': [
      'warn',
      { 'newlines-between': 'always-and-inside-groups' },
    ],
    'import/exports-last': 'warn',

    'react/jsx-curly-brace-presence': { props: 'never', children: 'never' },

    'max-lines': ['error', { max: 300, skipBlankLines: true }],
    'max-params': ['warn', 3],
    'no-alert': 'error',
    'no-extend-native': 'error',
    'no-return-await': 'error',
    'no-sync': 'error',
    'no-throw-literal': 'error',
    'no-use-before-define': 'error',
    'no-useless-return': 'error',
    'no-unused-vars': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 'off',
    'require-await': 'error',
  },
  settings: {
    'import/resolver': ['reactnative', { node: { paths: ['src'] } }],
  },
}
