import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { adminUsersSlice } from './admin-users/adminUsersSlice'
import { applicationSlice } from './admin-application/ApplicationSlice'
import { getByIdSlice } from './anouncement/AnouncementSlice'
import { uploadSlice } from './Upload'
import { feedbackSlice } from './feedback/feedbackSlice'

export const store = configureStore({
   reducer: {
      [adminUsersSlice.name]: adminUsersSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [applicationSlice.name]: applicationSlice.reducer,
      [getByIdSlice.name]: getByIdSlice.reducer,
      [uploadSlice.name]: uploadSlice.reducer,
      [feedbackSlice.name]: feedbackSlice.reducer,
   },
})
