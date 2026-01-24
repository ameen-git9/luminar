import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import ContextApi from './ContextApi.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ContextApi>
      <App />
    </ContextApi>
    </BrowserRouter>
  </StrictMode>,
)
