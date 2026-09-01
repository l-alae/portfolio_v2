import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BASE_PATH = '/'

export default defineConfig({
  base: BASE_PATH,
  plugins: [react()],
})
