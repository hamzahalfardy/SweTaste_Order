import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Food-Order/',
  build: {
    outDir: 'docs'
  },
  server:{
    port : 3000 
  }
  
  
})
