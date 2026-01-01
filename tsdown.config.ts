import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/configs/*.ts'
  ],
  format: ['esm'],
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: true,
  minify: false,
  target: 'node16',
  outDir: 'dist',
  rollup: {
    output: {
      preserveModules: true,
      preserveModulesRoot: 'src'
    }
  },
  esbuild: {
    platform: 'node',
    format: 'esm',
    target: 'node16',
    minify: false
  }
})