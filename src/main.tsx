import React from 'react'
import ReactDOM, { Container } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as Container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
