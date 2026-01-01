# @purea/eslint-config

A comprehensive, opinionated ESLint configuration library for modern JavaScript and TypeScript projects.

## Features

- 🎯 **Zero Configuration**: Works out of the box with sensible defaults
- 🔧 **TypeScript Support**: Full TypeScript integration with strict rules
- ⚛️ **React Support**: Comprehensive React and JSX linting rules
- 🌐 **Node.js Support**: Node.js specific rules and patterns
- 📦 **Modern**: Uses latest ESLint flat config format
- 🚀 **Performance**: Optimized for speed and efficiency
- 🎨 **Consistent**: Enforces consistent code style across your project
- 🛠️ **Extensible**: Easy to customize and extend

## Installation

```bash
npm install --save-dev @purea/eslint-config
# or
pnpm add -D @purea/eslint-config
# or
yarn add -D @purea/eslint-config
```

## Usage

### Basic Usage

Create an `eslint.config.js` file in your project root:

```javascript
import config from '@purea/eslint-config'

export default config
```

### Advanced Usage

You can customize the configuration based on your project needs:

```javascript
import { useConfig } from '@purea/eslint-config'

export default useConfig({
  typescript: true,  // Enable TypeScript rules
  react: true,       // Enable React rules
  node: true,        // Enable Node.js rules
  browser: true,     // Enable browser environment
})
```

### Using Preset Configurations

We provide several preset configurations for common use cases:

```javascript
import {
  typescriptConfig,
  reactConfig,
  nodeConfig,
  browserConfig,
  fullConfig
} from '@purea/eslint-config'

// TypeScript project
export default typescriptConfig()

// React project
export default reactConfig()

// Node.js project
export default nodeConfig()

// Browser project
export default browserConfig()

// Full-featured configuration
export default fullConfig()
```

### Using Individual Configs

You can also import individual configurations:

```javascript
import { javascript, typescript, react, node } from '@purea/eslint-config'

export default [
  javascript,
  typescript,
  react,
  node,
  {
    // Your custom rules
    rules: {
      'no-console': 'off'
    }
  }
]
```

### Custom Rules and Ignores

```javascript
import { useConfig } from '@purea/eslint-config'

export default useConfig({
  typescript: true,
  react: true,
  rules: {
    'no-console': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
  ignores: [
    'dist',
    'node_modules',
    '*.config.js'
  ]
})
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `typescript` | `boolean` | `true` | Enable TypeScript-specific rules |
| `react` | `boolean` | `false` | Enable React-specific rules |
| `node` | `boolean` | `false` | Enable Node.js-specific rules |
| `browser` | `boolean` | `false` | Enable browser environment globals |
| `rules` | `object` | `{}` | Custom rules to override or extend defaults |
| `ignores` | `string[]` | `[]` | Custom ignore patterns |

## Available Configs

- `javascript` - Base JavaScript rules with modern ES6+ syntax
- `typescript` - TypeScript-specific rules with strict type checking
- `react` - React and JSX rules with hooks and accessibility
- `node` - Node.js environment rules and best practices

## Rules Overview

### JavaScript Rules

The JavaScript configuration includes:

- **Possible Errors**: Catches common programming errors
- **Best Practices**: Enforces modern JavaScript best practices
- **Variables**: Proper variable declaration and usage
- **Node.js**: Node.js specific patterns and globals
- **Stylistic Issues**: Consistent code style and formatting
- **ES6**: Modern ES6+ syntax and features

Key features:
- Enforces modern ES6+ syntax
- Prevents common programming errors
- Enforces consistent code style
- Optimizes for performance
- Supports both CommonJS and ES modules

### TypeScript Rules

The TypeScript configuration includes:

- Strict type checking rules
- Consistent interface usage
- Proper generic constraints
- Advanced type safety
- Naming conventions
- Explicit return types
- No `any` types (auto-fixes to `unknown`)

### React Rules

The React configuration includes:

- JSX best practices
- Accessibility (a11y) compliance
- Hooks rules enforcement
- Component optimization
- Proper prop types
- No deprecated patterns

### Node.js Rules

The Node.js configuration includes:

- Proper error handling
- Async/await patterns
- File system best practices
- Environment-specific globals
- No synchronous operations warnings

## Examples

### TypeScript React Project

```javascript
// eslint.config.js
import { useConfig } from '@purea/eslint-config'

export default useConfig({
  typescript: true,
  react: true,
  browser: true
})
```

### Node.js API Project

```javascript
// eslint.config.js
import { nodeConfig } from '@purea/eslint-config'

export default nodeConfig({
  typescript: true
})
```

### Pure JavaScript Project

```javascript
// eslint.config.js
import config from '@purea/eslint-config'

export default config
```

### Full-Stack Application

```javascript
// eslint.config.js
import { fullConfig } from '@purea/eslint-config'

export default fullConfig({
  rules: {
    'no-console': 'off'
  }
})
```

## Peer Dependencies

This config requires the following peer dependencies:

```json
{
  "eslint": "^9.39.1",
  "typescript": ">=5.0.0"
}
```

Note: TypeScript is optional and will only be used if installed in your project.

## Development

```bash
# Install dependencies
pnpm install

# Build the project
pnpm run build

# Run tests
pnpm test

# Lint the code
pnpm run lint

# Watch mode for development
pnpm run dev

# Clean build artifacts
pnpm run clean
```

## Project Structure

```
eslint-config/
├── src/
│   ├── index.ts           # Main entry point
│   ├── configs/
│   │   ├── javascript.ts  # JavaScript base configuration
│   │   ├── typescript.ts  # TypeScript configuration
│   │   ├── react.ts       # React configuration
│   │   └── node.ts        # Node.js configuration
│   └── factory.ts         # Configuration factory utilities
├── eslint.config.ts       # Project's own ESLint config
├── tsdown.config.ts       # Build configuration
└── tsconfig.json          # TypeScript configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes.
