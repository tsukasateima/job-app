import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  // 配置代理
  server: {
    proxy: {
      '/api/upload': 'https://mobile.zcwytd.com',
      '/api': {
        target: 'https://api.imooc.zcwytd.com/',
        changeOrigin: true,
        secure: false
      }
    },
    cors: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/css/theme.scss";`
      }
    }
  }
})
