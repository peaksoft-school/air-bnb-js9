import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import { theme } from './assets/styles/theme'
import { store } from './store/Index'
import './index.css'
=======
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { injectStore } from './config/axiosInstance'
import { theme } from './assets/styles/theme'
import { store } from './store'
import App from './App'
import { Snackbar } from './components/UI/snackbar/Snackbar'
>>>>>>> 8b126ec6b3765746a1d4faca70b5665e40beb34c

const root = ReactDOM.createRoot(document.getElementById('root'))
injectStore()
root.render(
   <React.StrictMode>
<<<<<<< HEAD
      <ThemeProvider theme={theme}>
         <BrowserRouter>
            <Provider store={store}>
               <App />
            </Provider>
         </BrowserRouter>
      </ThemeProvider>
=======
      <Provider store={store}>
         <ThemeProvider theme={theme}>
            <BrowserRouter>
               <App />
               <Snackbar />
            </BrowserRouter>
         </ThemeProvider>
      </Provider>
>>>>>>> 8b126ec6b3765746a1d4faca70b5665e40beb34c
   </React.StrictMode>
)
