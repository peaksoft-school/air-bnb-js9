import { createSlice } from '@reduxjs/toolkit'
import {
   countRatingGetByIdRequest,
   // editFeedbackById,
   feedbackGetByIdRequest,
} from './feedbackThunk'

const initialState = {
   feedbackDataById: [],
   countRatingDataById: {},
}

export const feedbackSlice = createSlice({
   name: 'feedback',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(feedbackGetByIdRequest.fulfilled, (state, action) => {
            state.feedbackDataById = action.payload
         })
         // .addCase(editFeedbackById.fulfilled, (state, action) => {
         //    state.feedbackDataById = action.payload
         // })
         .addCase(countRatingGetByIdRequest.fulfilled, (state, action) => {
            state.countRatingDataById = action.payload
         })
   },
})

export const feedbackActions = feedbackSlice.actions
