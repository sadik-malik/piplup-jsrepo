import react from '@vitejs/plugin-react'
import path from 'path'
import safeParser from 'postcss-safe-parser'

import { fileURLToPath } from 'url';
import { defineConfig } from 'vite'

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  assetsInclude: ['**/*.glb'],
  css: {
    postcss: {
      parser: safeParser
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@ts-default': path.resolve(dirname, 'src/ts-default')
    },
  },
  server: {
    hmr: true
  }
})
