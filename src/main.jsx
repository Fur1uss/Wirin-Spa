import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingPage from './pages/landingPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)
