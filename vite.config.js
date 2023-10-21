import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://linguaswap-9bebd1d452cf.herokuapp.com',
    },
  },
})
