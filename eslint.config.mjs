import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { includeIgnoreFile } from '@eslint/compat'
import eslint from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import tsParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import noBarrelFilesPlugin from 'eslint-plugin-no-barrel-files'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tailwindcssPlugin from 'eslint-plugin-tailwindcss'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  includeIgnoreFile(gitignorePath),
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      react: reactPlugin,
      import: importPlugin,
      tailwindcss: tailwindcssPlugin,
      next: nextPlugin,
      'no-barrel-files': noBarrelFilesPlugin
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    settings: {
      tailwindcss: {
        callees: ['cn', 'cva'],
        config: 'tailwind.config.js'
      },
      'import/resolver': {
        typescript: {}
      },
      react: {
        version: 'detect'
      }
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/consistent-type-imports': 'error',
      'no-else-return': 'error',
      'max-params': ['error', 3],
      'max-depth': ['error', 3],
      'max-lines': [
        'error',
        { max: 300, skipBlankLines: true, skipComments: true }
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'import/no-default-export': ['error'],
      'react/jsx-boolean-value': 'error',
      'react/jsx-curly-brace-presence': 'error',
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'prefer-template': 'error',
      'react/jsx-pascal-case': 'error',
      'jsx-quotes': ['error', 'prefer-double'],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function'
        }
      ],
      'react/hook-use-state': 'error',
      'react/jsx-fragments': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/no-danger': 'error',
      'tailwindcss/no-custom-classname': 'off',
      'no-barrel-files/no-barrel-files': 'error'
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser
    }
  },
  {
    files: [
      'src/**/{layout,page}.tsx',
      'src/**/*error.tsx',
      'src/**/loading.tsx',
      'src/app/**/not-found.tsx',
      'src/**/*.stories.{ts,tsx}',
      '**/*.config.{cjs,mjs,js,ts}',
      'src/middleware.ts'
    ],
    rules: {
      'import/no-default-export': 'off',
      'react/function-component-definition': 'off',
      'no-undef': 'off'
    }
  },
  {
    files: ['src/**/*.stories.{ts,tsx}', '.storybook/**/*.{ts,tsx}'],
    rules: {
      'import/no-default-export': 'off',
      'react-hooks/rules-of-hooks': 'off'
    }
  },
  {
    files: [
      '**/*.config.{cjs,mjs,js,ts}',
      'src/components/ui/**/*.{js,jsx,ts,tsx}'
    ],
    rules: {
      'max-lines': 'off'
    }
  }
]
