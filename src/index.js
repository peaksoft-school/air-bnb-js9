import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { theme } from './assets/styles/theme'
import { store } from './store/index'
import './index.css'
import { injectStore } from './config/axiosInstance'
import { Snackbar } from './components/UI/snackbar/Snackbar'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
injectStore(store)
root.render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <BrowserRouter>
            <Provider store={store}>
               <App />
            </Provider>
         </BrowserRouter>
      </ThemeProvider>
      <Snackbar />
   </React.StrictMode>
)
