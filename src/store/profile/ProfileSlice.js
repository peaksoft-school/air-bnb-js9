import { createSlice } from '@reduxjs/toolkit'
import { getAnnouncement } from './ProfileThunk'

const announcementSlice = createSlice({
   name: 'get',
   initialState: {
      data: [],
      error: null,
      isAllowed: false,
      status: '',
   },
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
         })
   },
})

export const announcementReducer = announcementSlice.reducer
