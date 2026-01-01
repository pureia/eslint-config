import { ignores, javascript, typescript } from './configs';
import type { Awaitable, ConfigOptions, FlatConfigItem } from './types';

/**
 * Create ESLint configuration based on provided options
 *
 * @param options - Configuration options
 * @returns Array of ESLint configurations
 *
 * @example
 * ```typescript
 * import { useConfig } from '@purea/eslint-config'
 *
 * export default useConfig({
 *   typescript: true,
 * })
 * ```
 */
export async function useConfig(
  options: ConfigOptions = {},
  ...extraConfigs: Array<Awaitable<FlatConfigItem[]>>
): Promise<FlatConfigItem[]> {
  const {
    ignores: userIgnores = [],
    typescript: enableTypeScript = true,
  } = options;

  const configs: Array<Awaitable<FlatConfigItem[]>> = [];

  configs.push(
    ignores(userIgnores),
    javascript()
  );

  // TypeScript config
  enableTypeScript && configs.push(typescript());

  configs.push(...extraConfigs);

  const resolvedConfigs = await Promise.all(configs);

  return resolvedConfigs.flat().filter(Boolean);
}
