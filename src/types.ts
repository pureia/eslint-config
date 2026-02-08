import type { Linter } from 'eslint';

/**
  * A type that represents a value that can be either a Promise of T or T itself.
*/
export type Awaitable<T> = Promise<T> | T;

/**  Configuration options for the ESLint config */
export interface ConfigOptions {
  /**
  * User ignores patterns
  * @default []
  */
  ignores?: string[]
  /**
   * Enable imports rules
   * @default true
   */
  imports?: boolean
  /**
   * Enable TypeScript rules
   * @default true (if TypeScript is detected in the project)
   */
  typescript?: boolean | TypeScriptOptions
  /**
   * Enable JSONC rules
   * @default true
   */
  jsonc?: boolean
  /**
   * Enable Vue rules
   * @default true (if Vue is detected in the project)
   */
  vue?: boolean | VueOptions
  /**
   * Enable perfectionist rules
   * @default true
   */
  perfectionist?: boolean
}

export type FlatConfigItem = Omit<Linter.Config, 'plugins'> & {
  /**
   * An object containing a name-value mapping of plugin names to plugin objects.
   * When `files` is specified, these plugins are only available to the matching files.
   *
   * @see [Using plugins in your configuration](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#using-plugins-in-your-configuration)
   */
  plugins?: Record<string, unknown>
};

/** TypeScript options. */
export interface TypeScriptOptions {
  /**
   * When this options is provided, type aware rules will be enabled.
   * @see https://typescript-eslint.io/linting/typed-linting/
   */
  tsconfigPath?: string

  /**
   * Override type aware rules.
   */
  overridesTypeAwareRules?: FlatConfigItem['rules']

  /**
   * component file extensions
   */
  componentExts?: string[]
}

/** Vue options. */
export interface VueOptions {
  /**
   * Vue version
   * @default 3
   */
  vueVersion?: 2 | 3

  /**
   * Override Vue-specific rules.
   */
  overridesRules?: FlatConfigItem['rules']

  /**
   * Enable TypeScript rules for Vue SFC
   * @default false
   */
  typescript?: boolean
}
