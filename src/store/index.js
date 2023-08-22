import { configureStore } from '@reduxjs/toolkit'
// import { anouncementSlice } from './upload/anouncementSlice'
import { authSlice } from './auth/authSlice'
import { adminUsersSlice } from './admin-users/adminUsersSlice'

export const store = configureStore({
   reducer: {
      // [anouncementSlice.name]: anouncementSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [adminUsersSlice.name]: adminUsersSlice.reducer,
   },
})
