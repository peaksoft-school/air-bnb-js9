import { configureStore } from '@reduxjs/toolkit'
import { applicationSlice } from './admin-application/ApplicationSlice'

export const store = configureStore({
   reducer: {
      [applicationSlice.name]: applicationSlice.reducer,
   },
})
