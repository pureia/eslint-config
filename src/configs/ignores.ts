import type { FlatConfigItem } from '../types';

const EXCLUDES = [
  '**/node_modules',
  '**/dist',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb',
];

export function ignores(userIgnores: string[] = []): FlatConfigItem[] {
  return [
    {
      name: 'antfu/ignores',
      ignores: [...EXCLUDES, ...userIgnores],
    },
  ];
}
