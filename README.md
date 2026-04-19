# @purea/eslint-config

基于 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 的 ESLint Flat Config 预设，内置团队默认规则。

## 特性

- 基于 `@antfu/eslint-config`，开箱即用
- 自动检测 TypeScript、Vue 等技术栈
- 内置团队默认规则，用户规则优先级更高
- ESLint Flat Config 格式（ESLint 9+）
- 完整的 TypeScript 类型支持，类型自动与上游同步

## 安装

```bash
pnpm add -D @purea/eslint-config eslint
```

> 要求 `eslint >= 9.39.2` 作为 peer dependency。

## 使用

### 最简用法

```js
// eslint.config.js
import useConfig from '@purea/eslint-config';

export default useConfig();
```

自动检测项目中安装的 TypeScript、Vue 等，按需启用对应规则。

### 自定义选项

所有 `@antfu/eslint-config` 的选项均可直接使用：

```js
// eslint.config.js
import useConfig from '@purea/eslint-config';

export default useConfig({
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  vue: true,
  react: true,
  ignores: ['**/generated'],
});
```

### 覆盖默认规则

用户传入的 `rules` 会与内置默认规则合并，同名规则以用户为准：

```js
// eslint.config.js
import useConfig from '@purea/eslint-config';

export default useConfig({
  rules: {
    'no-console': 'off',
  },
});
```

### 追加额外配置

```js
// eslint.config.js
import useConfig from '@purea/eslint-config';

export default useConfig(
  { typescript: true },
  {
    rules: {
      'my-custom-rule': 'error',
    },
  }
);
```

### 使用 FlatConfigComposer 链式 API

`useConfig()` 返回 `FlatConfigComposer`，支持链式操作：

```js
// eslint.config.js
import useConfig from '@purea/eslint-config';

export default useConfig()
  .override('antfu/javascript/rules', {
    rules: { 'no-console': 'off' },
  })
  .append({
    rules: { 'my-custom-rule': 'error' },
  });
```

## 导出

| 导出 | 类型 | 说明 |
| --- | --- | --- |
| `default` / `useConfig` | 函数 | 工厂函数，返回 `FlatConfigComposer` |
| `Options` | 类型 | 配置选项类型（从 `antfu()` 参数推导） |
| `ExtraConfigs` | 类型 | 额外配置参数类型（从 `antfu()` 参数推导） |
| `Config` | 类型 | 返回值类型 `FlatConfigComposer`（从 `antfu()` 返回值推导） |

## 更多选项

完整的配置选项请参考 [@antfu/eslint-config 文档](https://github.com/antfu/eslint-config)，支持的技术栈包括：

- TypeScript / JavaScript
- Vue / React / Svelte / Astro / Solid
- JSON / YAML / Toml / Markdown
- UnoCSS / Formatters
- 以及更多

## 开发

```bash
pnpm install    # 安装依赖
pnpm build      # 构建（tsdown → ESM + DTS）
pnpm dev        # 监听模式构建
pnpm lint       # ESLint 自检
```

## 项目结构

```
src/
├── index.ts     # 入口，导出 useConfig 及类型
├── factory.ts   # 工厂函数，注入默认规则
├── configs.ts   # 文件级默认配置（Vue、Markdown 等）
└── rules.ts     # 全局默认规则定义
```