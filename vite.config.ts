import { defineConfig } from 'vite';
import visualizer from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    visualizer({ open: false }), // 自动开启分析页面
  ],

  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'colorExtraction',
    },
    rollupOptions: {
      external: ['colorthief', 'nearest-color', 'tinycolor2'],
      output: {
        globals: {
          'nearest-color': 'nearest-color',
          colorthief: 'colorthief',
          tinycolor2: 'tinycolor2',
        },
      },
    },
  },
});
