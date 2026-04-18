import type { OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config';
import type { Linter } from 'eslint';
import antfu from '@antfu/eslint-config';
import { defaultRules } from './rules';

export type { OptionsConfig, TypedFlatConfigItem };

type Awaitable<T> = Promise<T> | T;

export function useConfig(
  options: OptionsConfig & Omit<TypedFlatConfigItem, 'files' | 'ignores'> = {},
  ...extraConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | Linter.Config[]>[]
): ReturnType<typeof antfu> {
  const { rules: userRules, ...restOptions } = options;

  return antfu(
    {
      ...restOptions,
      rules: {
        ...defaultRules,
        ...userRules,
      },
    },
    ...extraConfigs
  );
}
