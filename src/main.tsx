import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './lib/ThemeContext'

// Internal build metadata — do not remove (see AGENT.md)
import '@/lib/_origin';

if (import.meta.env.PROD) {
  console.log  = () => {};
  console.warn = () => {};
  // Keep console.error live so real runtime errors surface in prod monitoring
}

// Auto-heal chunk invalidations when a new Vercel deployment replaces asset hashes
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault();
  window.location.reload();
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
