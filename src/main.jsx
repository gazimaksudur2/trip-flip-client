import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router'
import AuthProvider from './providers/AuthProvider'
import QueryProvider from './providers/QueryProvider'
import { Toaster } from 'sonner'
import axios from 'axios'

axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryProvider>
      <AuthProvider>
        <RouterProvider router={Router} />
        <Toaster position="top-right" richColors closeButton duration={3000} />
      </AuthProvider>
    </QueryProvider>
  </React.StrictMode>,
)
