import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// vite.config.ts
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import naiveUIMD, { createCodeBlockRule } from 'vite-plugin-naive-ui-md'
import hljs from 'highlight.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Components({
      extensions: ['vue', 'md'],
      resolvers: [NaiveUiResolver()],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
      deep: true,
      dirs: ['./src/components', './src/demos']
      /* options */
    }),
    naiveUIMD({
      hljs: hljs,
      wrapCodeWithCard: false,
      markedSetup: (marked, ctx) => {
        marked.use({
          extensions: [createCodeBlockRule(ctx.filepath)]
        })
      }
    })
  ]
})
