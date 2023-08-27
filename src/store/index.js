import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { adminUsersSlice } from './admin-users/adminUsersSlice'
import { getByIdSlice } from './anouncement/AnouncementSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [adminUsersSlice.name]: adminUsersSlice.reducer,
      [getByIdSlice.name]: getByIdSlice.reducer,
   },
})
