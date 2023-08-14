import { configureStore } from '@reduxjs/toolkit'
import { anouncementSlice } from './upload/anouncementSlice'

export const store = configureStore({
   reducer: {
      [anouncementSlice.name]: anouncementSlice.reducer,
   },
})
