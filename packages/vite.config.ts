import path from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'
// https://vitejs.dev/config/
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: './dist/src',
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'naive-ui-protable'
    },
    rollupOptions: {
      external: ['vue', 'naive-ui', 'vue-router'],
      output: {
        globals: {
          vue: 'Vue',
          'naive-ui': 'naive',
          'vue-router': 'VueRouter'
        }
      }
    }
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  }
})
