import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: globals.node
    },
    plugins: {
      js
    },
    extends: ['js/recommended'],
    rules: {
      eqeqeq: 'error',
      'no-var': 'error'
    }
  },
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: globals.mocha
    }
  }
])