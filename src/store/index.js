import { configureStore } from '@reduxjs/toolkit'
// import { anouncementSlice } from './upload/anouncementSlice'
import { authSlice } from './auth/authSlice'

export const store = configureStore({
   reducer: {
      // [anouncementSlice.name]: anouncementSlice.reducer,
      [authSlice.name]: authSlice.reducer,
   },
})
