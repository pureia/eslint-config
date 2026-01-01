import type { Linter } from 'eslint'
import { javascript } from './configs/javascript'
import { typescript } from './configs/typescript'
import { react } from './configs/react'
import { node } from './configs/node'

export * from './configs/javascript'
export * from './configs/typescript'
export * from './configs/react'
export * from './configs/node'

export interface ConfigOptions {
  typescript?: boolean
  react?: boolean
  node?: boolean
  browser?: boolean
}

export function useConfig(options: ConfigOptions = {}): Linter.Config[] {
  
  const configs: Linter.Config[] = []

  // Base JavaScript config
  configs.push(javascript)

  // TypeScript config
  if (options.typescript !== false) {
    configs.push(typescript)
  }

  // React config
  if (options.react) {
    configs.push(react)
  }

  // Node.js config
  if (options.node) {
    configs.push(node)
  }

  return configs
}

// Default export for common usage
export default useConfig()

