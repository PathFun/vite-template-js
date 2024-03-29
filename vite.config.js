/// <reference types="vitest" />

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslintPlugin from 'vite-plugin-eslint';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-template-js',
  plugins: [
    vue(),
    vueJsx(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue']
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  css: {
    postcss: {},
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  define: {
    'import.meta.vitest': 'undefined'
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*/__tests__/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
  }
});
