import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false // Disable sourcemaps for production
  },
  // This is CRITICAL for Vercel deployment
  base: '/',
  publicDir: 'public',
  server: {
    host: true
  }
})