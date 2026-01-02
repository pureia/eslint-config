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
  typescript?: boolean
  /**
   * Enable browser environment globals
   * @default false
   */
  browser?: boolean
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
