import type { Linter } from 'eslint';
import type { Awaitable, ConfigOptions, FlatConfigItem } from './types';
import { ignores, imports, javascript, typescript, stylistic } from './configs';

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
  ...extraConfigs: Awaitable<FlatConfigItem | FlatConfigItem[] | Linter.Config[]>[]
): Promise<FlatConfigItem[]> {
  const {
    ignores: userIgnores = [],
    imports: enableImports = true,
    typescript: enableTypeScript = true,
  } = options;

  const configs: Awaitable<FlatConfigItem | FlatConfigItem[] | Linter.Config[]>[] = [];

  configs.push(
    ignores(userIgnores),
    javascript(),
    stylistic()
  );

  // Imports config
  enableImports && configs.push(imports());

  // TypeScript config
  enableTypeScript && configs.push(typescript());

  // Extra configs
  configs.push(...extraConfigs);

  const resolvedConfigs = await Promise.all(configs);

  return resolvedConfigs.flat().filter(Boolean);
}
