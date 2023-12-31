import { createSlice } from '@reduxjs/toolkit'
import {
   getAnnouncementByIdHandler,
   getAnnouncementFeedbacks,
} from './AnnouncementByIdThunk'

const initialState = {
   AdminAnnouncementById: {},
   feedbacks: [],
}

export const getAnnouncementByIdSlice = createSlice({
   name: 'announcementById',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAnnouncementByIdHandler.fulfilled, (state, action) => {
            state.AdminAnnouncementById = action.payload
         })
         .addCase(getAnnouncementFeedbacks.fulfilled, (state, action) => {
            state.feedbacks = action.payload
         })
   },
})
