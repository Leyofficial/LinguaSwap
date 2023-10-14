import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ts from 'rollup-plugin-typescript2';


export default defineConfig({
  plugins: [react() , ts()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
})
