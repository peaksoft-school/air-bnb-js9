import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { adminUsersSlice } from './admin-users/adminUsersSlice'
import { applicationSlice } from './admin-application/ApplicationSlice'
import { allHousingSlice } from './admin-all-housing/AllHousingSlice'

export const store = configureStore({
   reducer: {
      [adminUsersSlice.name]: adminUsersSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [applicationSlice.name]: applicationSlice.reducer,
      [allHousingSlice.name]: allHousingSlice.reducer,
   },
})
