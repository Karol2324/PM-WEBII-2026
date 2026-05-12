import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/PM-WEBII-2026/', // <--- ¡Añade esto con el nombre de tu repositorio!
})