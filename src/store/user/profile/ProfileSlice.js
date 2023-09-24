import { createSlice } from '@reduxjs/toolkit'
import { filterHouseRequest, getAnnouncement } from './ProfileThunk'

const initialState = {
   data: {
      announcements: [],
      bookings: [],
      onModerations: [],
   },
   idAnnouncement: [],
   error: null,
   isAllowed: false,
   status: '',
   loading: false,
}

export const announcementSlice = createSlice({
   name: 'getannouncement',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAnnouncement.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(getAnnouncement.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
         .addCase(getAnnouncement.fulfilled, (state, action) => {
            state.status = 'success'
            state.data = action.payload
            state.data.announcements = action.payload.announcements
            state.data.bookings = action.payload.bookings
            state.data.onModerations = action.payload.moderations
         })
         .addCase(filterHouseRequest.pending, (state) => {
            state.loading = true
         })
         .addCase(filterHouseRequest.fulfilled, (state, action) => {
            state.loading = false
            state.data.announcements = action.payload.responses
         })
         .addCase(filterHouseRequest.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export const announcementReducer = announcementSlice.reducer
