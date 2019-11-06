module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
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
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 'off',
    'no-unused-vars': 'error',
    'no-return-await': 'error',
    'import/order': ['warn', { 'newlines-between': 'always' }],
  },
  settings: {
    'import/resolver': 'reactnative',
  },
};
