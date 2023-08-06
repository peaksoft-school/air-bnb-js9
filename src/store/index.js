import { configureStore } from '@reduxjs/toolkit'
import { announcementReducer } from './profile/ProfileSlice'

export const store = configureStore({
   reducer: {
      announcement: announcementReducer,
   },
})
