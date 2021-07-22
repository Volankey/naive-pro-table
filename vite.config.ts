import path = require('path')
import vueJsx from '@vitejs/plugin-vue-jsx'
import vuePlugin from '@vitejs/plugin-vue'
/**
 * @type {import('vite').UserConfig}
 */
export default {
  define: {
    __VUE_PROD_DEVTOOLS__: false
  },
  plugins: [vuePlugin(), vueJsx()],
  build: {
    outDir: path.resolve(__dirname, 'site')
  },
  resolve: {
    alias:
      process.env.NODE_ENV !== 'production'
        ? [
            {
              find: 'naive-pro-table',
              replacement: path.resolve(__dirname, './src')
            }
          ]
        : undefined
  }
}
