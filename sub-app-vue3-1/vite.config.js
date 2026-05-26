import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

export default defineConfig({
  plugins: [
    vue(),
    qiankun('sub-app-vue3-1', { useDevMode: true })
  ],
  server: {
    port: 3001,
    cors: true,
    origin: 'http://localhost:3001'
  }
})
