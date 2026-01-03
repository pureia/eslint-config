import type { FlatConfigItem, VueOptions } from '../types';
import { importDefault } from '../utils';

export async function vue(options: VueOptions = {}): Promise<FlatConfigItem[]> {
  const {
    vueVersion = 3,
    overridesRules = {},
    typescript = false,
  } = options;

  const [
    vuePlugin,
    vueParser,
  ] = await Promise.all([
    importDefault(import('eslint-plugin-vue')),
    importDefault(import('vue-eslint-parser')),
  ] as const);

  return [
    {
      name: 'purea/vue',
      languageOptions: {
        globals: {
          computed: 'readonly',
          defineEmits: 'readonly',
          defineExpose: 'readonly',
          defineProps: 'readonly',
          onMounted: 'readonly',
          onUnmounted: 'readonly',
          reactive: 'readonly',
          ref: 'readonly',
          shallowReactive: 'readonly',
          shallowRef: 'readonly',
          toRef: 'readonly',
          toRefs: 'readonly',
          watch: 'readonly',
          watchEffect: 'readonly',
        },
      },
      plugins: { vue: vuePlugin },
    },
    {
      name: 'purea/vue/rules',
      files: ['**/*.vue'],
      languageOptions: {
        parser: vueParser,
        parserOptions: {
          ecmaFeatures: { jsx: true },
          extraFileExtensions: ['.vue'],
          parser: typescript ? await importDefault(import('@typescript-eslint/parser')) : undefined,
          sourceType: 'module',
        },
      },
      rules: {
        // Vue 2 specific rules
        ...vueVersion === 2 ? vuePlugin.configs['flat/vue2-recommended'].map((item) => item.rules).reduce((prev, cur) => ({ ...prev, ...cur }), {}) : {},
        // Vue 3 specific rules
        ...vueVersion === 3 ? {
          ...vuePlugin.configs.base.rules,
          ...vuePlugin.configs['vue3-essential'].rules,
          ...vuePlugin.configs['vue3-recommended'].rules,
          ...vuePlugin.configs['vue3-strongly-recommended'].rules,
        } : {},
        // User overrides
        ...overridesRules,
      },
    },
  ];
}
