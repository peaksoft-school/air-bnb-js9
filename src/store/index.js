import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { adminUsersSlice } from './admin-users/adminUsersSlice'
import { announcementSlice } from './profile/ProfileSlice'
import { applicationSlice } from './admin-application/ApplicationSlice'
import { allHousingSlice } from './admin-all-housing/AllHousingSlice'
import { getByIdSlice } from './anouncement/AnouncementSlice'

export const store = configureStore({
   reducer: {
      [announcementSlice.name]: announcementSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [adminUsersSlice.name]: adminUsersSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [applicationSlice.name]: applicationSlice.reducer,
      [allHousingSlice.name]: allHousingSlice.reducer,
      [getByIdSlice.name]: getByIdSlice.reducer,
   },
})
