import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@generics': path.resolve(__dirname, 'src/components/generics'),
      '@homespecifics': path.resolve(__dirname, 'src/components/homespecifics'),
      '@contactspecifics': path.resolve(__dirname, 'src/components/contactspecifics'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@scripts': path.resolve(__dirname, 'src/assets/scripts')
    }
  }
})
