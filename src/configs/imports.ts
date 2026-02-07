import type { FlatConfigItem } from '../types';
import { importDefault } from '../utils';

const typeScriptExtensions = ['.ts', '.cts', '.mts', '.tsx'];
const allExtensions = [...typeScriptExtensions, '.js', '.jsx', '.mjs', '.cjs'];

export async function imports(): Promise<FlatConfigItem[]> {
  const [importPlugin] = await Promise.all([
    importDefault(import('eslint-plugin-import')),
  ] as const);

  return [
    {
      name: 'purea/imports',
      plugins: { import: importPlugin },
      settings: {
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],
        'import/parsers': {
          '@typescript-eslint/parser': typeScriptExtensions,
        },
        'import/resolver': {
          node: allExtensions,
        },
      },
    },
    {
      name: 'purea/imports/rules',
      rules: {
        // Static analysis - 静态分析
        'import/no-unresolved': 'off', // 禁止导入无法解析的模块（关闭，由其他规则处理）
        'import/named': 'off', // 禁用，由 TypeScript 类型检查替代
        'import/default': 'error', // 确保默认导入存在
        'import/namespace': 'error', // 确保命名空间导入存在
        'import/no-absolute-path': 'error', // 禁止绝对路径导入
        'import/no-dynamic-require': 'warn', // 禁止动态 require 调用
        'import/no-webpack-loader-syntax': 'error', // 禁止 webpack loader 语法

        // CommonJS - CommonJS 相关
        'import/no-commonjs': 'off', // 禁止 CommonJS require（关闭）
        'import/no-amd': 'error', // 禁止 AMD require
        'import/no-nodejs-modules': 'off', // 禁止 Node.js 内置模块（关闭）

        // Style - 代码风格
        'import/first': 'error', // 确保所有导入在文件顶部
        'import/no-duplicates': 'error', // 禁止重复导入
        'import/no-namespace': 'off', // 禁止命名空间导入（关闭）
        'import/newline-after-import': ['error', { count: 1 }], // 导入后强制空行
        'import/no-anonymous-default-export': 'error', // 禁止匿名默认导出
        'import/order': [
          'error',
          {
            groups: [
              'type', // 类型导入
              'builtin', // 内置模块
              'external', // 外部依赖
              'internal', // 内部模块
              ['parent', 'sibling'], // 父级和同级
              'index', // 索引文件
              'object', // 对象类型
            ],
            'newlines-between': 'ignore', // 组之间强制空行
            sortTypesGroup: true, // 对类型导入进行排序
            'newlines-between-types': 'never', // 类型导入组之间强制空行
            alphabetize: {
              order: 'asc', // 按字母顺序排序
              caseInsensitive: true, // 不区分大小写
            },
          },
        ], // 强制导入排序
        'import/no-cycle': 'warn', // 禁止循环依赖
        'import/no-self-import': 'error', // 禁止导入自身
        'import/no-useless-path-segments': ['error', { noUselessIndex: true }], // 禁止无用的路径段
        'import/max-dependencies': ['off', { max: 10 }], // 限制依赖数量（关闭）
        'import/unambiguous': 'off', // 禁止 ES 模块和 CommonJS 混合（关闭）
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: false, // 开发依赖
            optionalDependencies: false, // 可选依赖
            peerDependencies: false, // 对等依赖
            bundledDependencies: false, // 打包依赖
          },
        ], // 禁止导入外部依赖（除非在特定位置）
        'import/no-mutable-exports': 'error', // 禁止可变导出
        'import/prefer-default-export': 'off', // 如果只有一个导出，优先使用默认导出（关闭）
        'import/no-default-export': 'off', // 禁止默认导出（关闭）
        'import/no-named-default': 'error', // 禁止导入默认导出作为命名导入
        'import/no-named-as-default': 'error', // 禁止将默认导出作为命名导入
        'import/no-named-as-default-member': 'error', // 禁止将默认导出的属性作为命名导入
        'import/export': 'error', // 确保所有导出存在
        'import/no-deprecated': 'warn', // 禁止导入已弃用的模块
        'import/no-unassigned-import': 'off', // 禁止未赋值的导入（关闭）
        'import/no-named-export': 'off', // 禁止命名导出（关闭）
        'import/extensions': 'off', // 强制或禁止文件扩展名
        'import/no-internal-modules': 'off', // 禁止导入内部模块（关闭）
      },
    },
  ];
}
