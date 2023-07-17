/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
=======
import { ThemeProvider } from '@mui/material'
>>>>>>> 48e9edbd708a40a72540938e75a3ebf9aebbdc87
import './index.css'
import App from './App'
import { theme } from './assets/styles/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
<<<<<<< HEAD
      <BrowserRouter>
         <App />
      </BrowserRouter>
=======
      <ThemeProvider theme={theme}>
         <App />
      </ThemeProvider>
>>>>>>> 48e9edbd708a40a72540938e75a3ebf9aebbdc87
   </React.StrictMode>
)
