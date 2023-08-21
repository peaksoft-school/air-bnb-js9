import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { adminUsersSlice } from './admin-users/adminUsersSlice'
import { applicationSlice } from './admin-application/ApplicationSlice'

export const store = configureStore({
   reducer: {
      [applicationSlice.name]: applicationSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [adminUsersSlice.name]: adminUsersSlice.reducer,
   },
})
