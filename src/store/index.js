import { configureStore } from '@reduxjs/toolkit'
import { announcementSlice } from './profile/ProfileSlice'
import { authSlice } from './auth/authSlice'

export const store = configureStore({
   reducer: {
      [announcementSlice.name]: announcementSlice.reducer,
      [authSlice.name]: authSlice.reducer,
   },
})
