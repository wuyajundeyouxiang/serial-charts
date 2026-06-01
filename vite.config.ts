import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'docs', // 👈 告诉 Vite，打包成品放到 docs 文件夹里
  },
})
