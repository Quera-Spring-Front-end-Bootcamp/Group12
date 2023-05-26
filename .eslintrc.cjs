module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/parser',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'airbnb-typescript',
    'airbnb-base',
    'mantine',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: './tsconfig.json' },
  plugins: ['react-refresh','import','@typescript-eslint', 'react'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    indent: ['error', 2],
  },
}
