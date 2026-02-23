import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), visualizer({ open: false, filename: 'stats.html' }), tailwindcss()],

  base: '/ToDo/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  server: {
    port: 3000,
    open: true,
    cors: true
  },

  build: {
    outDir: 'dist',
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'pinia']
        }
      }
    }
  }
})
