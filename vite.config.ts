import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron/simple';
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron({
      // 之前编写的 main.ts
      main:{
        entry:'electron/main.ts'
      }
    })
  ],
  server:{
    // 设置vue端口号
    port: 30909
  },
  resolve: {
    // Vite路径别名配置
    alias: {
      '@': path.resolve('./src')
    }
  }

})

