import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, './index.ts'),
      name: 'naive-ui-protable',
    },
    rollupOptions: {
      external: ['vue','naive-ui'],
      output: {
        globals: {
          vue: 'Vue',
          'naive-ui':'naive'
        }
      }
    }
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  }
})