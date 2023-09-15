/* eslint-disable import/no-unresolved */
import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
// import { adminUsersSlice } from './admin-users/adminUsersSlice'
import { announcementSlice } from './profile/ProfileSlice'
import { getByIdSlice } from './anouncement/AnouncementSlice'
import { paymentSlice } from './payment/PaymentSlice'
import { DarkModeSlice } from './dark-mode/DarkModeSlice'
import { ModalSlice } from './ModalSlice'
import { getAnnouncementByIdSlice } from './getAnnouncement/GetAnnouncementByIdSlice'
import { favoriteSlice } from './favorite/FavoriteSlice'
import { uploadSlice } from './Upload'
import { adminSlice } from './admin/AdminSlice'
import { feedbackSlice } from './feedback/feedbackSlice'

export const store = configureStore({
   reducer: {
      [announcementSlice.name]: announcementSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [adminSlice.name]: adminSlice.reducer,
      [getByIdSlice.name]: getByIdSlice.reducer,
      [paymentSlice.name]: paymentSlice.reducer,
      [DarkModeSlice.name]: DarkModeSlice.reducer,
      [ModalSlice.name]: ModalSlice.reducer,
      [getAnnouncementByIdSlice.name]: getAnnouncementByIdSlice.reducer,
      [favoriteSlice.name]: favoriteSlice.reducer,
      [uploadSlice.name]: uploadSlice.reducer,
      [feedbackSlice.name]: feedbackSlice.reducer,
   },
})
