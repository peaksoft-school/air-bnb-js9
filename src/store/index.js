/* eslint-disable import/no-unresolved */
import { configureStore } from '@reduxjs/toolkit'
import { getGlobalSearchSlice } from './user/search/searchSlice'
import { authSlice } from './auth/authSlice'
import { announcementSlice } from './user/profile/ProfileSlice'
import { getByIdSlice } from './anouncement/AnouncementSlice'
import { paymentSlice } from './user/payment/PaymentSlice'
import { DarkModeSlice } from './dark-mode/DarkModeSlice'
import { ModalSlice } from './ModalSlice'
import { favoriteSlice } from './user/favorite/FavoriteSlice'
import { announcementsSlice } from './innerPage/InnerPageSlice'
import { feedbackSlice } from './user/feedback/feedbackSlice'
import { uploadSlice } from './Upload'
import { adminSlice } from './admin/AdminSlice'
import { getAnnouncementByIdSlice } from './admin/users/getAnnouncement/AnnouncementByIdSlice'

export const store = configureStore({
   reducer: {
      [announcementSlice.name]: announcementSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [adminSlice.name]: adminSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [getByIdSlice.name]: getByIdSlice.reducer,
      [getGlobalSearchSlice.name]: getGlobalSearchSlice.reducer,
      [paymentSlice.name]: paymentSlice.reducer,
      [DarkModeSlice.name]: DarkModeSlice.reducer,
      [ModalSlice.name]: ModalSlice.reducer,
      [getAnnouncementByIdSlice.name]: getAnnouncementByIdSlice.reducer,
      [favoriteSlice.name]: favoriteSlice.reducer,
      [announcementsSlice.name]: announcementsSlice.reducer,
      [feedbackSlice.name]: feedbackSlice.reducer,
      [uploadSlice.name]: uploadSlice.reducer,
   },
})
