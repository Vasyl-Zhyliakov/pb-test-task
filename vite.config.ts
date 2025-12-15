import { defineConfig } from 'vite';

export default defineConfig({
  base: '/pb-test-task/',
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://api.privatbank.ua',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
});
