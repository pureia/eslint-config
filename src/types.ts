import type { Linter } from 'eslint';

export type Awaitable<T> = T | Promise<T>

/**  Configuration options for the ESLint config */
export interface ConfigOptions {
  /**
   * Enable TypeScript rules
   * @default true (if TypeScript is detected in the project)
   */
  typescript?: boolean
  /**
   * Enable browser environment globals
   * @default false
   */
  browser?: boolean
  /**  User ignores patterns */
  ignores?: string[]
}

export type FlatConfigItem = Omit<Linter.Config, 'plugins'> & {
  /**
   * An object containing a name-value mapping of plugin names to plugin objects.
   * When `files` is specified, these plugins are only available to the matching files.
   *
   * @see [Using plugins in your configuration](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#using-plugins-in-your-configuration)
   */
  plugins?: Record<string, unknown>
}
