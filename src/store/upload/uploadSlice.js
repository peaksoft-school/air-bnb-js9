/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { postAnouncementForm } from './uploadThunk'

const initialState = {
   anouncement: [{}],
}

export const anouncementSlice = createSlice({
   name: 'anouncement',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(postAnouncementForm.fulfilled, (state, action) => {
         state.anouncement = action.payload
      })
   },
})
