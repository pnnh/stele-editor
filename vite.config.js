import { defineConfig } from 'vite'
import path from 'path'

const config = defineConfig({
  plugins: [
  ],
  base: '/',
  server: {
    hmr: true
  },
  build: {
    emptyOutDir: true,
    outDir: 'dist',
    rollupOptions: {
      input: ['index.html']
    }
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '~', replacement: path.resolve(__dirname, 'node_modules') }
    ]
  },
  publicDir: 'public'
})

export default config
