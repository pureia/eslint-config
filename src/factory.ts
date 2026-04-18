import type { Linter } from 'eslint';
import type { Awaitable, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config';
import antfu from '@antfu/eslint-config';
import { defaultConfigs } from './configs';

export type { Awaitable, OptionsConfig, TypedFlatConfigItem };

export function useConfig(
  options: OptionsConfig & Omit<TypedFlatConfigItem, 'files' | 'ignores'> = {},
  ...extraConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | Linter.Config[]>[]
): Linter.Config[] | Promise<Linter.Config[]> {
  return antfu(
    options,
    ...defaultConfigs,
    ...extraConfigs
  );
}
