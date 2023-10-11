import { defineConfig } from 'vite';
import visualizer from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    visualizer({ open: true }), // 自动开启分析页面
  ],

  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'colorExtraction',
    },
    // rollupOptions: {
    //   external: ['colorthief', 'nearest-color', 'colord'],
    //   output: {
    //     globals: {
    //       'nearest-color': 'nearest-color',
    //       colorthief: 'colorthief',
    //       colord: 'colord',
    //     },
    //   },
    // },
  },
});
