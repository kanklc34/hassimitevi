import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages'e deploy ederken base'i repo adına göre ayarlamayı unutma.
// Örn: repo adı "has-simit-evi" ise -> base: '/has-simit-evi/'
// Kendi .com alan adına bağlarsan base: '/' yeterli.
export default defineConfig({
  plugins: [react()],
  base: './',
})
