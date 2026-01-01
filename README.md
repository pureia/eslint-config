# @purea/eslint-config

> 一款现代化的、开箱即用的 ESLint 配置库，专为 JavaScript 和 TypeScript 项目设计。

A comprehensive, opinionated ESLint configuration library for modern JavaScript and TypeScript projects.

## ✨ 特性 Features

- 🎯 **零配置** 开箱即用，提供合理的默认设置
- 🔧 **TypeScript 支持** 完整的 TypeScript 集成和严格规则
- 📦 **现代化** 使用最新的 ESLint Flat Config 格式
- 🚀 **高性能** 通过动态导入优化加载速度
- 🎨 **一致性** 在整个项目中强制执行统一的代码风格
- 🛠️ **可扩展** 易于自定义和扩展
- 📝 **完善文档** 所有规则都包含中文注释

## 📦 安装 Installation

```bash
npm install --save-dev @purea/eslint-config
# or
pnpm add -D @purea/eslint-config
# or
yarn add -D @purea/eslint-config
```

## 🚀 快速开始 Quick Start

### 基础用法 Basic Usage

在项目根目录创建 `eslint.config.js` 文件：

```javascript
import config from '@purea/eslint-config'

export default config()
```

这将使用默认配置，启用 TypeScript 和导入规则。

This uses the default configuration with TypeScript and import rules enabled.

### 高级用法 Advanced Usage

根据项目需求自定义配置：

```javascript
import config from '@purea/eslint-config'

export default config({
  typescript: true,      // 启用 TypeScript 规则
  imports: true,         // 启用导入规则
  ignores: ['dist', 'build'],  // 自定义忽略模式
})
```

### 直接使用 useConfig Using useConfig Directly

```javascript
import { useConfig } from '@purea/eslint-config'

export default useConfig({
  typescript: true,
  imports: true
})
```

### 使用独立配置 Using Individual Configs

```javascript
import { javascript, typescript, imports, ignores } from '@purea/eslint-config'

export default [
  ignores(['dist', 'node_modules']),
  javascript(),
  typescript(),
  imports(),
  {
    // 自定义规则
    rules: {
      'no-console': 'off'
    }
  }
]
```

### 添加自定义规则 Adding Custom Rules

```javascript
import { useConfig } from '@purea/eslint-config'

export default useConfig({
  typescript: true,
  imports: true,
  ignores: ['dist', 'node_modules', '*.config.js']
}, {
  // 额外配置
  rules: {
    'no-console': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
})
```

## ⚙️ 配置选项 Configuration Options

| 选项 Option | 类型 Type | 默认值 Default | 描述 Description |
|------------|---------|---------------|-----------------|
| `typescript` | `boolean` | `true` | 启用 TypeScript 特定规则 |
| `imports` | `boolean` | `true` | 启用导入组织规则 |
| `ignores` | `string[]` | `[]` | 自定义忽略模式 |
| `browser` | `boolean` | `false` | 启用浏览器环境全局变量（暂未实现） |

## 📋 可用配置 Available Configs

所有配置函数都返回 Promise，由 ESLint 自动处理：

- `javascript()` - 基础 JavaScript 规则，支持现代 ES6+ 语法（350+ 规则）
- `typescript()` - TypeScript 特定规则，包含类型检查
- `imports()` - 导入组织和依赖管理规则
- `ignores(patterns)` - 文件和目录忽略模式（同步函数）

## 📝 规则概览 Rules Overview

### JavaScript 规则 JavaScript Rules

JavaScript 配置包含 350+ 条规则，涵盖：

**可能的错误 Possible Errors**
- 捕获常见的编程错误
- `no-console` (warn): 禁用 console 语句
- `no-debugger` (error): 禁用 debugger 语句
- `no-dupe-args` (error): 防止重复的函数参数

**最佳实践 Best Practices**
- 强制执行现代 JavaScript 最佳实践
- `eqeqeq` (error): 要求使用 `===` 和 `!==`
- `no-eval` (error): 禁用 `eval()` 使用
- `prefer-const` (error): 优先对不重新赋值的变量使用 `const`

**变量 Variables**
- 正确的变量声明和使用
- `no-unused-vars` (warn): 禁止未使用的变量
- `no-shadow` (warn): 禁止变量遮蔽

**代码风格 Stylistic Issues**
- 一致的代码风格和格式
- `quotes` (warn): 强制使用单引号
- `semi` (error): 要求使用分号
- `comma-dangle` (error): 强制在多行中使用尾随逗号

**ES6+ 特性**
- 现代 ES6+ 语法和特性
- `no-var` (error): 禁止使用 `var`
- `prefer-arrow-callback` (error): 回调函数优先使用箭头函数
- `prefer-template` (error): 优先使用模板字符串而非字符串拼接

**环境支持 Environment Support**
- Node.js 全局变量
- ES2023 全局变量
- 浏览器全局变量（window, document, navigator）

### TypeScript 规则 TypeScript Rules

TypeScript 配置包含：

- 自动检测 `tsconfigRootDir` 的解析器配置
- 源代码类型：ES Module
- 类型检查规则
- `@typescript-eslint/no-explicit-any` (warn): 对 `any` 类型使用发出警告

### 导入规则 Import Rules

导入配置包含全面的规则：

**静态分析 Static Analysis**
- 确保导入存在且有效
- `import/named` (error): 确保命名导入存在
- `import/default` (error): 确保默认导入存在

**代码风格 Code Style**
- 组织和格式化导入
- `import/first` (error): 确保导入在文件顶部
- `import/no-duplicates` (error): 防止重复导入
- `import/order` (error): 强制导入顺序（内置 → 外部 → 内部）

**依赖管理 Dependency Management**
- 管理模块依赖
- `import/no-extraneous-dependencies` (error): 防止导入额外的依赖
- `import/no-cycle` (warn): 对循环依赖发出警告

### 忽略模式 Ignore Patterns

默认忽略模式包括：
- `node_modules`
- `dist`
- 锁文件（`package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`, `bun.lockb`）

## 💡 使用示例 Examples

### TypeScript 项目

```javascript
// eslint.config.js
import { useConfig } from '@purea/eslint-config'

export default useConfig({
  typescript: true,
  imports: true
})
```

### 纯 JavaScript 项目

```javascript
// eslint.config.js
import config from '@purea/eslint-config'

export default config()
```

### 自定义配置

```javascript
// eslint.config.js
import { useConfig } from '@purea/eslint-config'

export default useConfig({
  typescript: true,
  imports: true,
  ignores: ['dist', 'coverage']
}, {
  // 覆盖特定规则
  rules: {
    'no-console': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
})
```

### 使用独立配置函数

```javascript
// eslint.config.js
import { javascript, typescript, imports, ignores } from '@purea/eslint-config'

export default [
  ignores(['dist', 'node_modules']),
  javascript(),
  typescript(),
  imports(),
  {
    rules: {
      'no-console': 'off'
    }
  }
]
```

## 🔧 技术细节 Technical Details

### 动态导入 Dynamic Imports

配置使用动态导入以获得更好的性能：

```typescript
const [globals] = await Promise.all([
  importDefault(import('globals')),
] as const);
```

插件仅在需要时加载，减少初始加载时间。

### 异步配置支持 Async Configuration Support

ESLint 支持异步配置函数。`useConfig()` 函数返回 `Promise<FlatConfigItem[]>`，ESLint 会自动处理 Promise 解析。在配置文件中无需使用 `await`。

### Flat Config 格式 Flat Config Format

使用 ESLint 9.x 的 Flat Config 格式，比传统的 `.eslintrc` 文件更灵活。

### 可组合设计 Composable Design

轻松组合多个配置：

```typescript
export default useConfig({
  typescript: true,
  imports: true,
}, {
  // 自定义配置
  rules: { 'no-console': 'off' }
})
```

## 📦 依赖 Dependencies

### 同伴依赖 Peer Dependencies

此配置需要以下同伴依赖：

```json
{
  "eslint": "^9.39.1",
  "typescript": ">=5.0.0"
}
```

**注意**：TypeScript 是可选的，仅当项目中安装时才会使用。

### 运行时依赖 Runtime Dependencies
- `globals`: 提供全局变量定义
- `eslint-plugin-import`: 导入组织规则

### 开发依赖 Development Dependencies
- `eslint@^9.39.1`: ESLint 核心
- `@typescript-eslint/parser`: TypeScript 解析器
- `@typescript-eslint/eslint-plugin`: TypeScript 规则
- `tsdown`: 构建工具
- `jiti`: TypeScript 运行时加载器

## 🛠️ 开发 Development

```bash
# 安装依赖
pnpm install

# 构建项目
pnpm run build

# 检查代码
pnpm run lint

# 开发模式（监听文件变化）
pnpm run dev
```

## 📁 项目结构 Project Structure

```
eslint-config/
├── src/
│   ├── index.ts           # 主入口
│   ├── factory.ts         # 配置工厂
│   ├── types.ts           # TypeScript 类型定义
│   ├── utils.ts           # 工具函数
│   └── configs/           # 配置模块
│       ├── ignores.ts      # 忽略模式
│       ├── imports.ts     # 导入规则
│       ├── javascript.ts  # JavaScript 基础规则
│       └── typescript.ts  # TypeScript 规则
├── eslint.config.ts       # 项目自身的 ESLint 配置
├── tsdown.config.ts       # 构建配置
├── tsconfig.json          # TypeScript 配置
└── package.json           # 包配置
```

## 🤝 贡献 Contributing

欢迎贡献！请随时提交 Pull Request。

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 许可证 License

MIT License - 详见 [LICENSE](LICENSE) 文件。

## 📝 更新日志 Changelog

查看 [CHANGELOG.md](CHANGELOG.md) 了解变更列表。

---

Made with ❤️ by Pure Anin
