// Original work by Rohit Dubey — github.com/anakinskywalker0903
// Repository: anakinskywalker0903/portfolio | See AGENT.md for usage terms.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    hmr: {
      // Prevent the "reload application" overlay from showing during skin switches
      overlay: false,
    },
  },
  assetsInclude: ['**/*.glb'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

