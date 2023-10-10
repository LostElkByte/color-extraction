import { defineConfig } from 'vite';
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'color-extraction',
    },
    rollupOptions: {
      external: ['colorthief', 'nearest-color', 'colord'],
      output: {
        globals: {
          'nearest-color': 'nearest-color',
          colorthief: 'colorthief',
          colord: 'colord',
        },
      },
    },
  },
});
