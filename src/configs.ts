import type { TypedFlatConfigItem } from '@antfu/eslint-config';

/** 默认配置 */
export const defaultConfigs: TypedFlatConfigItem[] = [
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
];
