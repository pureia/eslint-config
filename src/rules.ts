import type { TypedFlatConfigItem } from '@antfu/eslint-config';

export const defaultRules: TypedFlatConfigItem['rules'] = {
  'style/comma-dangle': [
    'error',
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    },
  ],
  'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
  'style/semi': ['warn', 'always'],
};
