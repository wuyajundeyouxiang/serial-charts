import { defineConfig } from 'vite'

export default defineConfig({
  // 👈 核心：加上这一行！注意前后都要有斜杠
  base: '/serial-charts/', 
  
  build: {
    outDir: 'docs', 
  },
})
