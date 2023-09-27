import { createSlice } from '@reduxjs/toolkit'
import { getByIdAnnouncement } from './InnerPageThunk'

export const announcementsSlice = createSlice({
   name: 'annByID',
   initialState: {
      announcement: [],
      loading: false,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getByIdAnnouncement.pending, (state) => {
            state.loading = true
         })
         .addCase(getByIdAnnouncement.fulfilled, (state, action) => {
            state.loading = false
            state.announcement = action.payload
         })
         .addCase(getByIdAnnouncement.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })
   },
})
