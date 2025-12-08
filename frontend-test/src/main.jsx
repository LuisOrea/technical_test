import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RenderRoutes from './routes/RenderRoutes'
import AuthProvider  from './context/AuthProvider'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RenderRoutes />
    </AuthProvider>
  </StrictMode>,
)
