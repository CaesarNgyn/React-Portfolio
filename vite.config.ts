import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  base: '/cv/',
  plugins: [react()],
  server: {
    port: 2020,
    open: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`
    },
  },
})
