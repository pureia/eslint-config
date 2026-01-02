import type { Linter } from 'eslint';
import type { Awaitable, ConfigOptions, FlatConfigItem } from './types';

import { isPackageExists } from 'local-pkg';
import { ignores, imports, javascript, typescript, stylistic, jsonc } from './configs';
import { isObject } from './utils';

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
    typescript: enableTypeScript = isPackageExists('typescript'),
    jsonc: enableJsonc = true,
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
  if (enableTypeScript) {
    const typescriptOptions = isObject(enableTypeScript) ? enableTypeScript : {};
    configs.push(typescript({ ...typescriptOptions }));
  }

  // JSONC config
  enableJsonc && configs.push(jsonc());

  // Extra configs
  configs.push(...extraConfigs);

  const resolvedConfigs = await Promise.all(configs);

  return resolvedConfigs.flat().filter(Boolean);
}
