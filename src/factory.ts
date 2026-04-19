import type { Linter } from 'eslint';
import type { Awaitable, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config';
import antfu from '@antfu/eslint-config';
import { defaultRules } from './rules';
import { defaultConfigs } from './configs';

export type { Awaitable, OptionsConfig, TypedFlatConfigItem };

export function useConfig(
  options: OptionsConfig & Omit<TypedFlatConfigItem, 'files' | 'ignores'> = { },
  ...extraConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | Linter.Config[]>[]
): Linter.Config[] | Promise<Linter.Config[]> {
  const { rules: userRules } = options;

  /** 当前默认配置：移除默认配置中用户已定义的规则 */
  const currentDefaultConfigs = defaultConfigs.map((config) => {
    if (!config?.rules || !userRules) return config;
    return {
      ...config,
      rules: Object.fromEntries(Object.entries(config.rules).filter(([ruleName]) => !(ruleName in userRules))),
    };
  });

  return antfu(
    {
      ...options,
      rules: {
        ...defaultRules,
        ...(userRules ?? {}),
      },
    },
    ...currentDefaultConfigs,
    ...extraConfigs
  );
}
