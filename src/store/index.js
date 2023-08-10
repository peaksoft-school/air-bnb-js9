import { configureStore } from '@reduxjs/toolkit'
// import { anouncementSlice } from '../store/upload/uploadSlice'
import { anouncementSlice } from './upload/uploadSlice'

export const store = configureStore({
   reducer: {
      anouncement: anouncementSlice.reducer,
   },
})
