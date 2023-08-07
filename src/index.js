import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { theme } from './assets/styles/theme'
import { store } from './store'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <ThemeProvider theme={theme}>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </ThemeProvider>
      </Provider>
   </React.StrictMode>
)
