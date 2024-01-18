import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron/simple';

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
    port: 3000
  }
})

