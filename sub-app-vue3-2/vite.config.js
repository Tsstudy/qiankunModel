import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

export default defineConfig({
  plugins: [
    vue(),
    qiankun('sub-app-vue3-2', { useDevMode: true })
  ],
  server: {
    port: 3002,
    cors: true,
    origin: 'http://localhost:3002'
  }
})
