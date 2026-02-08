import type { Linter } from 'eslint';
import type { Awaitable, ConfigOptions, FlatConfigItem } from './types';
import { isPackageExists } from 'local-pkg';
import { FlatConfigComposer } from 'eslint-flat-config-utils';
import { isObject } from './utils';
import { vue, jsonc, ignores, imports, stylistic, javascript, typescript, perfectionist } from './configs';

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
 * @param extraConfigs - Additional configurations to append
 * @returns FlatConfigComposer instance
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
export function useConfig(
  options: ConfigOptions & Omit<FlatConfigItem, 'files'> = {},
  ...extraConfigs: Awaitable<FlatConfigItem | FlatConfigItem[] | Linter.Config[]>[]
): FlatConfigComposer<FlatConfigItem> {
  const {
    ignores: userIgnores = [],
    imports: enableImports = true,
    typescript: enableTypeScript = isPackageExists('typescript'),
    jsonc: enableJsonc = true,
    vue: enableVue = isPackageExists('vue'),
    perfectionist: enablePerfectionist = true,
  } = options;

  const configs: Awaitable<FlatConfigItem | FlatConfigItem[] | Linter.Config[]>[] = [];

  configs.push(
    ignores(userIgnores),
    javascript(),
    stylistic()
  );

  // Imports config
  enableImports && configs.push(imports());

  // Perfectionist config
  enablePerfectionist && configs.push(perfectionist());

  // TypeScript config
  if (enableTypeScript) {
    const typescriptOptions = isObject(enableTypeScript) ? enableTypeScript : {};

    const componentExts = typescriptOptions.componentExts ?? [];
    enableVue && componentExts.push('vue');

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

  const composer = new FlatConfigComposer<FlatConfigItem>();

  composer.append(...configs);

  return composer;
}
