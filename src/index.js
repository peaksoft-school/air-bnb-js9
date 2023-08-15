import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { injectStore } from './config/axiosInstance'
import { theme } from './assets/styles/theme'
import { store } from './store'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
injectStore(store)
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
