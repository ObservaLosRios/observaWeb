import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'
import { resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
