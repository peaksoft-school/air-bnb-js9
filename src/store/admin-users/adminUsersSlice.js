import { createSlice } from '@reduxjs/toolkit'
import { getAdminUsersCards } from './adminUsersThunk'

const initialState = {
   data: [],
}

export const adminUsersSlice = createSlice({
   name: 'adminUsers',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getAdminUsersCards.fulfilled, (state, action) => {
         state.data = action.payload
      })
   },
})
