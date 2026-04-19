import antfu from '@antfu/eslint-config';
import { defaultRules } from './rules';
import { defaultConfigs } from './configs';

type Options = Parameters<typeof antfu>[0];
type ExtraConfigs = Parameters<typeof antfu>[1][];
type Config = ReturnType<typeof antfu>;

export { type Config, type ExtraConfigs, type Options };

export function useConfig(options?: Options, ...extraConfigs: ExtraConfigs): Config {
  const { rules: userRules } = options ?? {};

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
