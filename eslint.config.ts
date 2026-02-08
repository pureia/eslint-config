import { useConfig } from './src';

export default useConfig({
  rules: {
    'import/no-extraneous-dependencies': ['warn', { devDependencies: ['tsdown.config.ts'] }],
  },
});
