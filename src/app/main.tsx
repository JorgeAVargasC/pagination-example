import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app.tsx'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <main className='dark text-foreground bg-background min-h-screen'>
          <App />
        </main>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
)
