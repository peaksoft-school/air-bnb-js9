/* eslint-disable import/no-unresolved */
import { configureStore } from '@reduxjs/toolkit'
import { cardSlice } from './card/cardSlice'
import { getGlobalSearchSlice } from './search/searchSlice'
import { authSlice } from './auth/authSlice'
import { adminUsersSlice } from './admin-users/adminUsersSlice'
import { announcementSlice } from './profile/ProfileSlice'
import { applicationSlice } from './admin-application/ApplicationSlice'
import { getByIdSlice } from './anouncement/AnouncementSlice'
import { ToggleHandelrSlice } from './toggle/ToggleSlice'
import { paymentSlice } from './payment/PaymentSlice'
import { DarkModeSlice } from './dark-mode/DarkModeSlice'
import { ModalSlice } from './ModalSlice'
import { getAnnouncementByIdSlice } from './getAnnouncement/GetAnnouncementByIdSlice'
import { favoriteSlice } from './favorite/FavoriteSlice'
import { announcementsSlice } from './innerPage/InnerPageSlice'
import { feedbackSlice } from './feedback/feedbackSlice'

export const store = configureStore({
   reducer: {
      [announcementSlice.name]: announcementSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [adminUsersSlice.name]: adminUsersSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [applicationSlice.name]: applicationSlice.reducer,
      [getByIdSlice.name]: getByIdSlice.reducer,
      [getByIdSlice.name]: getByIdSlice.reducer,
      [cardSlice.name]: cardSlice.reducer,
      [getGlobalSearchSlice.name]: getGlobalSearchSlice.reducer,
      [ToggleHandelrSlice.name]: ToggleHandelrSlice.reducer,
      [paymentSlice.name]: paymentSlice.reducer,
      [DarkModeSlice.name]: DarkModeSlice.reducer,
      [ModalSlice.name]: ModalSlice.reducer,
      [getAnnouncementByIdSlice.name]: getAnnouncementByIdSlice.reducer,
      [favoriteSlice.name]: favoriteSlice.reducer,
      [announcementsSlice.name]: announcementsSlice.reducer,
      [feedbackSlice.name]: feedbackSlice.reducer,
   },
})
