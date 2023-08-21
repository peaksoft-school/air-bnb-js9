import { configureStore } from '@reduxjs/toolkit'
import { applicationSlice } from './admin-application/ApplicationSlice'
import { authSlice } from './auth/authSlice'
import { adminUsersSlice } from './admin-users/adminUsersSlice'

export const store = configureStore({
   reducer: {
      [applicationSlice.name]: applicationSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [adminUsersSlice.name]: adminUsersSlice.reducer,
   },
})
