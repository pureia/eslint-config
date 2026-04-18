import type { Linter } from 'eslint';
import type { Awaitable, TypedFlatConfigItem } from '@antfu/eslint-config';

export const defaultConfigs = [
  {
    rules: {
      // 控制台与调试
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }], // 禁止 console.log，允许 warn/error/info

      // 最佳实践
      'no-undef': 'off', // 不检查未定义变量（TypeScript 已覆盖）
      'no-unused-vars': 'warn', // 声明但未使用的变量发出警告
      'no-use-before-define': 'off', // 允许在声明前使用变量

      // TypeScript
      'ts/ban-ts-comment': 'off', // 允许 @ts-ignore、@ts-expect-error 等注释
      'ts/no-use-before-define': 'off', // 允许在定义前使用 TS 变量/类型

      // 代码风格
      'style/comma-dangle': [
        'error',
        {
          arrays: 'always-multiline', // 多行数组末尾逗号
          objects: 'always-multiline', // 多行对象末尾逗号
          imports: 'always-multiline', // 多行导入末尾逗号
          exports: 'always-multiline', // 多行导出末尾逗号
          functions: 'never', // 函数参数不加末尾逗号
        },
      ], // 多行末尾逗号策略
      'style/arrow-parens': 'off', // 不强制箭头函数参数括号
      'style/semi': ['warn', 'always'], // 强制分号
      'style/operator-linebreak': 'off', // 不强制操作符换行位置
      'style/max-statements-per-line': 'off', // 不限制每行语句数
      'style/member-delimiter-style': ['warn', { multiline: { delimiter: 'semi', requireLast: true } }], // TS 类型成员多行时用分号分隔且末尾加分号

      // 未使用导入
      'unused-imports/no-unused-vars': 'warn', // 未使用变量发出警告（配合自动移除）

      // Antfu 规则
      'antfu/if-newline': 'off', // 允许 if (x) return 同行写法

      // 性能
      'e18e/prefer-static-regex': 'off', // 不强制使用正则字面量

      // Node.js
      'node/handle-callback-err': 'off', // 不强制处理回调 error 参数

      // 排序
      'perfectionist/sort-exports': ['error', {
        groups: ['type-export', 'value-export', 'unknown'], // 类型导出 → 值导出 → 未知
        newlinesBetween: 'ignore', // 分组间不强制空行
        order: 'asc', // 升序
        type: 'line-length', // 按行长度排序
      }], // 导出排序
      'perfectionist/sort-imports': ['error', {
        groups: [
          'type-import', // 类型导入
          ['type-parent', 'type-sibling', 'type-index', 'type-internal'], // 类型相对导入
          ['value-builtin', 'value-external'], // 内置/外部模块
          'value-internal', // 内部模块
          ['value-parent', 'value-sibling'], // 父级/同级
          'side-effect', // 副作用导入
          'ts-equals-import', // TS 等号导入
          'value-index', // 索引导入
          'unknown', // 未知
        ],
        newlinesBetween: 'ignore', // 分组间不强制空行
        order: 'asc', // 升序
        type: 'line-length', // 按行长度排序
      }], // 导入排序
    },
  },
  {
    files: ['**/*.vue'], // Vue 文件
    rules: {
      'vue/attribute-hyphenation': 'off', // 不强制属性命名风格（my-prop vs myProp）
      'vue/singleline-html-element-content-newline': 'off', // 单行元素内容不强制换行
      'vue/max-attributes-per-line': ['warn', { singleline: { max: 4 }, multiline: { max: 1 } }], // 单行最多 4 个属性，多行每行 1 个
    },
  },
  {
    files: ['**/*.md'], // Markdown 文件
    rules: {
      'perfectionist/sort-exports': 'off', // 关闭导出排序
      'perfectionist/sort-imports': 'off', // 关闭导入排序
    },
  },
] as Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | Linter.Config[]>[];
