import { configureStore } from '@reduxjs/toolkit'
import { cardSlice } from './card/cardSlice'
import { getGlobalSearchSlice } from './search/searchSlice'
import { authSlice } from './auth/authSlice'
import { adminUsersSlice } from './admin-users/adminUsersSlice'
import { applicationSlice } from './admin-application/ApplicationSlice'

export const store = configureStore({
   reducer: {
      [cardSlice.name]: cardSlice.reducer,
      [getGlobalSearchSlice.name]: getGlobalSearchSlice.reducer,
      [adminUsersSlice.name]: adminUsersSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [applicationSlice.name]: applicationSlice.reducer,
   },
})
