import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BASE_PATH = '/portfolio_v2/'

export default defineConfig({
  base: BASE_PATH,
  plugins: [react()],
})
