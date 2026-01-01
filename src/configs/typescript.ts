import { importDefault } from '../utils';
import type { FlatConfigItem } from '../types';

export async function typescript(): Promise<FlatConfigItem[]> {
  const [
    tsParser,
    tsPlugin,
  ] = await Promise.all([
    importDefault(import('@typescript-eslint/parser')),
    importDefault(import('@typescript-eslint/eslint-plugin')),
  ] as const);

  return [
    {
      name: 'purea/typescript',
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          tsconfigRootDir: process.cwd(),
        },
        sourceType: 'module',
      },
      plugins: {
        '@typescript-eslint': tsPlugin,
      },
    },
    {
      name: 'purea/typescript/rules',
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    },
  ];
}
