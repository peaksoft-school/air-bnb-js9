import { createSlice } from '@reduxjs/toolkit'
import { getAdminUsersCardsId, getBookings } from './adminUsersThunk'

const initialState = {
   data: [],
   bookings: [],
}

export const adminUsersSlice = createSlice({
   name: 'adminUsers',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAdminUsersCardsId.fulfilled, (state, action) => {
            state.data = action.payload
         })
         .addCase(getBookings.fulfilled, (state, action) => {
            state.bookings = action.payload
         })
   },
})
