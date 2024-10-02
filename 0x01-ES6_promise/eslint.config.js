import js from '@eslint/js';  // Import the ESLint module

export default [
  {
    // Base configuration for all JavaScript files
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
    },
    plugins: {
      jest: {},
    },
    rules: {
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
    ignores: ['babel.config.js'],  // Use the ignores property to exclude files
  },
];

