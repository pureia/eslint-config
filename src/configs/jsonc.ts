import type { FlatConfigItem } from '../types';
import { importDefault } from '../utils';

export async function jsonc(): Promise<FlatConfigItem[]> {
  const [
    jsoncParser,
    jsoncPlugin,
  ] = await Promise.all([
    importDefault(import('jsonc-eslint-parser')),
    importDefault(import('eslint-plugin-jsonc')),
  ]);

  return [
    {
      name: 'purea/jsonc/setup',
      plugins: { jsonc: jsoncPlugin },
    },
    {
      name: 'purea/jsonc/rules',
      languageOptions: { parser: jsoncParser },
      files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
      rules: {
        // Possible Problems - 可能的问题
        'jsonc/no-bigint-literals': 'error', // 禁止使用 BigInt 字面量
        'jsonc/no-binary-expression': 'error', // 禁止使用二元表达式
        'jsonc/no-binary-numeric-literals': 'error', // 禁止使用二进制数字字面量
        'jsonc/no-dupe-keys': 'error', // 禁止重复的键
        'jsonc/no-escape-sequence-in-identifier': 'error', // 禁止在标识符中使用转义序列
        'jsonc/no-floating-decimal': 'error', // 禁止浮点小数
        'jsonc/no-hexadecimal-numeric-literals': 'error', // 禁止十六进制数字字面量
        'jsonc/no-infinity': 'error', // 禁止使用 Infinity
        'jsonc/no-multi-str': 'error', // 禁止多行字符串
        'jsonc/no-nan': 'error', // 禁止使用 NaN
        'jsonc/no-number-props': 'error', // 禁止使用数字属性（如 0.toString()）
        'jsonc/no-numeric-separators': 'error', // 禁止使用数字分隔符
        'jsonc/no-octal': 'error', // 禁止八进制字面量
        'jsonc/no-octal-numeric-literals': 'error', // 禁止使用八进制数字字面量
        'jsonc/no-parenthesized': 'error', // 禁止使用括号
        'jsonc/no-plus-sign': 'error', // 禁止使用加号（如 +123）
        'jsonc/no-regexp-literals': 'error', // 禁止使用正则表达式字面量
        'jsonc/no-sparse-arrays': 'error', // 禁止稀疏数组
        'jsonc/no-template-literals': 'error', // 禁止使用模板字面量
        'jsonc/no-undefined-value': 'error', // 禁止使用 undefined 值
        'jsonc/no-unicode-codepoint-escapes': 'error', // 禁止使用 Unicode 码点转义
        'jsonc/no-useless-escape': 'error', // 禁止不必要的转义字符
        'jsonc/valid-json-number': 'error', // 验证 JSON 数字格式

        // Stylistic Issues - 样式问题
        'jsonc/array-bracket-newline': 'off', // 不强制数组括号换行
        'jsonc/array-bracket-spacing': ['error', 'never'], // 强制数组括号内无空格
        'jsonc/array-element-newline': 'off', // 不强制数组元素换行
        'jsonc/comma-dangle': ['error', 'never'], // 禁止尾随逗号
        'jsonc/comma-style': ['error', 'last'], // 强制逗号在行尾
        'jsonc/indent': ['error', 2], // 强制缩进为2空格
        'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true }], // 强制冒号前后空格
        'jsonc/no-comments': 'off', // 允许注释（JSONC 支持）
        'jsonc/object-curly-newline': 'off', // 不强制对象大括号换行
        'jsonc/object-curly-spacing': ['error', 'always'], // 强制对象大括号内空格
        'jsonc/object-property-newline': 'off', // 不强制对象属性换行
        'jsonc/quote-props': ['error', 'always'], // 强制对象属性使用引号
        'jsonc/quotes': ['error', 'double'], // 强制使用双引号
        'jsonc/space-unary-ops': 'off', // 一元运算符空格（JSON 中不适用）
      },
    },
  ];
}
