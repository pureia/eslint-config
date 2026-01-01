import type { Linter } from 'eslint'
import globals from 'globals'

export const node: Linter.Config = {
  name: 'node',
  files: ['**/*.js', '**/*.ts', '**/*.mjs', '**/*.cjs'],
  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.nodeBuiltin
    }
  },
  rules: {
    // Node.js specific rules
    'no-console': 'off',
    'no-process-env': 'off',
    'no-process-exit': 'error',
    'no-sync': 'warn',

    // Import/Export for Node.js
    'import/no-commonjs': 'off',
    'import/no-nodejs-modules': 'off',
    'import/unambiguous': 'off',

    // File extensions for Node.js
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
      mjs: 'never',
      cjs: 'never'
    }],

    // Node.js specific patterns
    'no-restricted-syntax': ['error', {
      selector: 'CallExpression[callee.name="require"]',
      message: 'Use ES6 modules instead of require()'
    }],

    // Error handling
    'handle-callback-err': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',

    // Buffer usage
    'no-buffer-constructor': 'error',

    // Process
    'no-process-env': 'off',
    'no-process-exit': 'error',

    // Global variables
    'no-restricted-globals': ['error', {
      name: 'window',
      message: 'Use global instead of window in Node.js'
    }, {
      name: 'document',
      message: 'document is not available in Node.js'
    }, {
      name: 'navigator',
      message: 'navigator is not available in Node.js'
    }],

    // File system
    'no-restricted-imports': ['error', {
      paths: [{
        name: 'fs',
        importNames: ['readFileSync', 'writeFileSync', 'existsSync'],
        message: 'Use async alternatives instead of sync methods'
      }]
    }],

    // Common patterns
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prefer-const': 'error',
    'prefer-destructuring': ['error', {
      array: false,
      object: true
    }],

    // Error handling best practices
    'no-throw-literal': 'error',
    'prefer-promise-reject-errors': 'error'
  }
}