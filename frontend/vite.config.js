import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // THIS IS THE MOST IMPORTANT LINE!
  base: '/age-calculator/', // Change this to your actual repo name
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})