import { useConfig } from './src';

export default useConfig(
  {
    typescript: {
      tsconfigPath: './tsconfig.json',
    },
  },
  {
    files: ['tsdown.config.ts'],
    rules: { 'import/no-extraneous-dependencies': 'off' },
  }
);
