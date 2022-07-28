import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Imports de componentes não React
import './styles/main.sass'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
