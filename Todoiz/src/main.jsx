import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ThemeProvider from './Context/ThemeContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
  </StrictMode>
)
