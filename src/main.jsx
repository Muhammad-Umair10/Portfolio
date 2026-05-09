import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Handle GitHub Pages redirect for SPA routing
if (window.location.search.startsWith('/?')) {
  const path = window.location.search.slice(2);
  window.history.replaceState(null, '', path);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
