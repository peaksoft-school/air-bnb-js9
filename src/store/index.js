import { configureStore } from '@reduxjs/toolkit'
import { cardSlice } from './card/cardSlice'
import { getGlobalSearchSlice } from './search/searchSlice'
import { authSlice } from './auth/authSlice'
import { adminUsersSlice } from './admin-users/adminUsersSlice'
import { announcementSlice } from './profile/ProfileSlice'
import { applicationSlice } from './admin-application/ApplicationSlice'
import { allHousingSlice } from './admin-all-housing/AllHousingSlice'
import { getByIdSlice } from './anouncement/AnouncementSlice'
import { ToggleHandelrSlice } from './toggle/ToggleSlice'
import { paymentSlice } from './payment/PaymentSlice'
import { DarkModeSlice } from './dark-mode/DarkModeSlice'
import { ModalSlice } from './ModalSlice'
import { favoriteSlice } from './favorite/FavoriteSlice'
import { feedbackSlice } from './feedback/feedbackSlice'
import { uploadSlice } from './Upload'

export const store = configureStore({
   reducer: {
      [announcementSlice.name]: announcementSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [adminUsersSlice.name]: adminUsersSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [applicationSlice.name]: applicationSlice.reducer,
      [allHousingSlice.name]: allHousingSlice.reducer,
      [getByIdSlice.name]: getByIdSlice.reducer,
      [cardSlice.name]: cardSlice.reducer,
      [getGlobalSearchSlice.name]: getGlobalSearchSlice.reducer,
      [ToggleHandelrSlice.name]: ToggleHandelrSlice.reducer,
      [paymentSlice.name]: paymentSlice.reducer,
      [DarkModeSlice.name]: DarkModeSlice.reducer,
      [ModalSlice.name]: ModalSlice.reducer,
      [favoriteSlice.name]: favoriteSlice.reducer,
      [feedbackSlice.name]: feedbackSlice.reducer,
      [uploadSlice.name]: uploadSlice.reducer,
   },
})
