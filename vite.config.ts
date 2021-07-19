import path = require('path')
import vueJsx from '@vitejs/plugin-vue-jsx'
import vuePlugin from '@vitejs/plugin-vue'

export default {
  root: 'src',
  define: {
    __VUE_PROD_DEVTOOLS__: false
  },
  plugins: [vuePlugin(), vueJsx()],
  build: {
    outDir: path.resolve(__dirname, 'site')
  }
}
