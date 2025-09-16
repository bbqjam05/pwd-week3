import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react-router-dom', 
        '@tanstack/react-query', 
        'react-toastify',
        '@emotion/react',
        '@emotion/styled',
        'react-icons/fa',
        'react-spinners',
        'react-hook-form',
        'axios'
      ]
    }
  }
})