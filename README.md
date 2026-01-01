# ESLint Config

A comprehensive, opinionated ESLint configuration library for modern JavaScript and TypeScript projects.

[![npm version](https://badge.fury.io/js/@your-username%2Feslint-config.svg)](https://badge.fury.io/js/@your-username%2Feslint-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🎯 **Zero Configuration**: Works out of the box with sensible defaults
- 🔧 **TypeScript Support**: Full TypeScript integration with strict rules
- ⚛️ **React Support**: Comprehensive React and JSX linting rules
- 🌐 **Node.js Support**: Node.js specific rules and patterns
- 📦 **Modern**: Uses latest ESLint flat config format
- 🚀 **Performance**: Optimized for speed and efficiency
- 🎨 **Consistent**: Enforces consistent code style across your project

## Installation

```bash
npm install --save-dev @your-username/eslint-config
```

## Usage

### Basic Usage

Create an `eslint.config.js` file in your project root:

```javascript
import config from '@your-username/eslint-config'

export default config
```

### Advanced Usage

You can customize the configuration based on your project needs:

```javascript
import { createConfig } from '@your-username/eslint-config'

export default createConfig({
  typescript: true,  // Enable TypeScript rules
  react: true,       // Enable React rules
  node: false        // Disable Node.js rules
})
```

### Using Individual Configs

You can also import individual configurations:

```javascript
import { javascript, typescript, react, node } from '@your-username/eslint-config'

export default [
  javascript,
  typescript,
  react,
  {
    // Your custom rules
    rules: {
      'no-console': 'off'
    }
  }
]
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `typescript` | `boolean` | `true` | Enable TypeScript-specific rules |
| `react` | `boolean` | `false` | Enable React-specific rules |
| `node` | `boolean` | `false` | Enable Node.js-specific rules |

## Available Configs

- `javascript` - Base JavaScript rules
- `typescript` - TypeScript-specific rules
- `react` - React and JSX rules
- `node` - Node.js environment rules
- `recommended` - Default configuration with sensible defaults
- `strict` - Strict configuration with all rules enabled

## Rules Overview

### JavaScript Rules
- Enforces modern ES6+ syntax
- Prevents common programming errors
- Enforces consistent code style
- Optimizes for performance

### TypeScript Rules
- Strict type checking
- Consistent interface usage
- Proper generic constraints
- Advanced type safety

### React Rules
- JSX best practices
- Accessibility (a11y) compliance
- Hooks rules enforcement
- Component optimization

### Node.js Rules
- Proper error handling
- Async/await patterns
- File system best practices
- Environment-specific globals

## Examples

### TypeScript React Project

```javascript
// eslint.config.js
import { createConfig } from '@your-username/eslint-config'

export default createConfig({
  typescript: true,
  react: true
})
```

### Node.js API Project

```javascript
// eslint.config.js
import { createConfig } from '@your-username/eslint-config'

export default createConfig({
  typescript: true,
  node: true,
  react: false
})
```

### Pure JavaScript Project

```javascript
// eslint.config.js
import config from '@your-username/eslint-config'

export default config
```

## Customization

You can extend or override any rules:

```javascript
// eslint.config.js
import { createConfig } from '@your-username/eslint-config'

const baseConfig = createConfig({
  typescript: true,
  react: true
})

export default [
  ...baseConfig,
  {
    rules: {
      'no-console': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off'
    }
  }
]
```

## Peer Dependencies

This config requires the following peer dependencies:

```json
{
  "eslint": "^8.0.0 || ^9.0.0",
  "typescript": "^4.0.0 || ^5.0.0"
}
```

## Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Lint the code
npm run lint
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes.