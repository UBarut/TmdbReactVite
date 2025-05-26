import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@partials': path.resolve(__dirname, 'src/components/partials'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@api': path.resolve(__dirname, 'src/services/api'),
      '@constants': path.resolve(__dirname, 'src/utils/constants'),
      '@HelmetComp': path.resolve(__dirname, 'src/components/sections/Head/HelmetComp'),
    }
  }
})
