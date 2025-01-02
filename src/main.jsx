import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Router'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './AuthProvider/AuthProvider'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </AuthProvider>
)
