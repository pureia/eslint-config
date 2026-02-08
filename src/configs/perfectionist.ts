import type { FlatConfigItem } from '../types';
import { importDefault } from '../utils';

export async function perfectionist(): Promise<FlatConfigItem[]> {
  const [
    plugin,
  ] = await Promise.all([
    importDefault(import('eslint-plugin-perfectionist')),
  ]);

  return [
    {
      name: 'purea/perfectionist/setup',
      plugins: {
        perfectionist: plugin,
      },
      rules: {
        'perfectionist/sort-exports': ['error', {
          groups: ['type-export', 'value-export', 'unknown'],
          newlinesBetween: 'ignore',
          order: 'asc',
          type: 'line-length',
        }],
        'perfectionist/sort-imports': ['error', {
          groups: [
            'type-import',
            ['type-parent', 'type-sibling', 'type-index', 'type-internal'],
            ['value-builtin', 'value-external'],
            'value-internal',
            ['value-parent', 'value-sibling'],
            'side-effect',
            'ts-equals-import',
            'value-index',
            'unknown',
          ],
          newlinesBetween: 'ignore',
          order: 'asc',
          type: 'line-length',
        }],
        'perfectionist/sort-named-exports': ['error', { order: 'asc', type: 'line-length' }],
        'perfectionist/sort-named-imports': ['error', { order: 'asc', type: 'line-length' }],
      },
    },
  ];
}
