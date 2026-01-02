import { useConfig } from './src';

export default useConfig(
  {},
  {
    files: ['tsdown.config.ts'],
    rules: { 'import/no-extraneous-dependencies': 'off' },
  }
);
