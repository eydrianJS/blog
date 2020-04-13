import React from 'react'
import ReactDOM from 'react-dom'
import App from './Routes'
import './index.css'
import { AuthProvider } from './providers/AuthProvider'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
