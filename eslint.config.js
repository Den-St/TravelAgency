// import { defineConfig } from 'eslint-define-config';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config([
  // Base JavaScript configuration
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js },
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // TypeScript configuration
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.app.json', // Ensure ESLint uses your TypeScript configuration
      },
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'no-unused-vars': 'off',
      '@/no-unused-vars': 'error',
    },
  },

  // React configuration
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Not needed for modern React setups
      'react-hooks/rules-of-hooks': 'error', // Enforce React hooks rules
      'react-hooks/exhaustive-deps': 'warn', // Warn about missing dependencies in hooks
    },
  },

  // Prettier integration
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error', // Enforce Prettier rules
    },
  },

  // Disable conflicting rules between ESLint and Prettier
  {
    rules: {
      ...prettierConfig.rules,
      "react/prop-types": "off"
    },
  },

  {
    ignores: [
      'node_modules/*',
      '**/dist/*',
      '**/build/*',
      'coverage/*',
      'eslint.config.mjs',
      'vite.config.ts',
      'setupTests.ts',
    ],
  },
]);
