import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
// import { adminUsersSlice } from './admin-users/adminUsersSlice'
import { announcementSlice } from './profile/ProfileSlice'
// import { applicationSlice } from './admin-application/ApplicationSlice'
// import { allHousingSlice } from './admin-all-housing/AllHousingSlice'
import { getByIdSlice } from './anouncement/AnouncementSlice'
import { paymentSlice } from './payment/PaymentSlice'
import { DarkModeSlice } from './dark-mode/DarkModeSlice'
import { ModalSlice } from './ModalSlice'
import { favoriteSlice } from './favorite/FavoriteSlice'
import { uploadSlice } from './Upload'
import { adminSlice } from './admin/AdminSlice'

export const store = configureStore({
   reducer: {
      [announcementSlice.name]: announcementSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      // [adminUsersSlice.name]: adminUsersSlice.reducer,
      // [authSlice.name]: authSlice.reducer,
      [adminSlice.name]: adminSlice.reducer,
      // [applicationSlice.name]: applicationSlice.reducer,
      // [allHousingSlice.name]: allHousingSlice.reducer,
      [getByIdSlice.name]: getByIdSlice.reducer,
      [paymentSlice.name]: paymentSlice.reducer,
      [DarkModeSlice.name]: DarkModeSlice.reducer,
      [ModalSlice.name]: ModalSlice.reducer,
      [favoriteSlice.name]: favoriteSlice.reducer,
      [uploadSlice.name]: uploadSlice.reducer,
   },
})
