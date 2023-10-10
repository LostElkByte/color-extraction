import { defineConfig } from 'vite';
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'colorExtraction',
    },
    rollupOptions: {
      external: ['colorthief', 'nearest-color', 'colord'],
      output: {
        globals: {
          colorExtraction: 'colorExtraction',
        },
      },
    },
  },
});
