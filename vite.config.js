import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/14F/', // repo: https://github.com/Zaturr/14F
})
