import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@mui/material'
import App from './App'
import { theme } from './assets/styles/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <App />
      </ThemeProvider>
   </React.StrictMode>
)
