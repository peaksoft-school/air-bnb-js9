import { configureStore } from '@reduxjs/toolkit'
import { applicationSlice } from './admin-application/ApplicationSlice'
import { anouncementSlice } from './upload/anouncementSlice'
import { authSlice } from './auth/authSlice'

export const store = configureStore({
   reducer: {
      [applicationSlice.name]: applicationSlice.reducer,
      [anouncementSlice.name]: anouncementSlice.reducer,
      [authSlice.name]: authSlice.reducer,
   },
})
