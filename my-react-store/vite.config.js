import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/FSDI107/my-react-store/',
  plugins: [react()],
})

