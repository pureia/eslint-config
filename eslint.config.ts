import { useConfig } from './src';

export default useConfig({
  typescript: { tsconfigPath: './tsconfig.json' },
  rules: {
    'import/no-extraneous-dependencies': ['warn', { devDependencies: ['tsdown.config.ts'] }],
  },
});
