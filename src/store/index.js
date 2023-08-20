import { configureStore } from '@reduxjs/toolkit'
import { applicationSlice } from './admin-application/ApplicationSlice'
import { authSlice } from './auth/authSlice'

export const store = configureStore({
   reducer: {
      [applicationSlice.name]: applicationSlice.reducer,
      [authSlice.name]: authSlice.reducer,
   },
})
