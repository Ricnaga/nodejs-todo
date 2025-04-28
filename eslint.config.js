import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import tsEslintParser from '@typescript-eslint/parser';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['config/*', '!src/config/**'],
    languageOptions: {
      parser: tsEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },

    plugins: {
      '@typescript-eslint': eslintPluginTypescript,
      prettier: eslintPluginPrettier,
      import: eslintPluginImport,
    },

    rules: {
      'sort-imports': [
        'error',
        { ignoreCase: true, ignoreDeclarationSort: true },
      ],
      'import/order': [
        'error',
        {
          groups: [
            ['external', 'builtin'],
            'internal',
            ['sibling', 'parent'],
            'index',
          ],
          pathGroups: [
            {
              pattern: '@modules/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@config/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@shared/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@errors/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@utils/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@types/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'prettier/prettier': 'error',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
        },
      ],
      'import/prefer-default-export': 'off',
      'import/no-unresolved': 'error',
      'no-shadow': 'off',
      camelcase: 'off',
    },

    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
];
