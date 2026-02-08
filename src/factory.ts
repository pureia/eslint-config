import type { Linter } from 'eslint';
import type { Awaitable, ConfigOptions, FlatConfigItem } from './types';

import { isPackageExists } from 'local-pkg';
import { ignores, imports, javascript, typescript, stylistic, jsonc, vue } from './configs';
import { isObject } from './utils';

const flatConfigProps = [
  'name',
  'languageOptions',
  'linterOptions',
  'processor',
  'plugins',
  'rules',
  'settings',
] as const;
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
  options: ConfigOptions & Omit<FlatConfigItem, 'files'> = {},
  ...extraConfigs: Awaitable<FlatConfigItem | FlatConfigItem[] | Linter.Config[]>[]
): Promise<FlatConfigItem[]> {
  const {
    ignores: userIgnores = [],
    imports: enableImports = true,
    typescript: enableTypeScript = isPackageExists('typescript'),
    jsonc: enableJsonc = true,
    vue: enableVue = isPackageExists('vue'),
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

    const componentExts = typescriptOptions.componentExts ?? [];

    configs.push(typescript({
      ...typescriptOptions,
      componentExts,
    }));
  }

  // Vue config
  if (enableVue) {
    const vueOptions = isObject(enableVue) ? enableVue : {};
    configs.push(vue({
      typescript: !!enableTypeScript,
      ...vueOptions,
    }));
  }

  // JSONC config
  enableJsonc && configs.push(jsonc());

  // Fused config
  const fusedConfig = flatConfigProps.reduce<Omit<FlatConfigItem, 'files'>>((acc, key) => key in options ? Object.assign(acc, { [key]: options[key] }) : acc, {});
  Object.keys(fusedConfig).length && configs.push(fusedConfig);

  // Extra configs
  configs.push(...extraConfigs);

  const resolvedConfigs = await Promise.all(configs);

  return resolvedConfigs.flat().filter(Boolean);
}
