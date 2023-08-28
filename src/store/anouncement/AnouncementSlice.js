import { createSlice } from '@reduxjs/toolkit'
import { getByIdRequest } from './AnouncementThunk'

const initialState = {
   announcementDataById: {},
}

export const getByIdSlice = createSlice({
   name: 'announcementGetById',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getByIdRequest.fulfilled, (state, action) => {
         state.announcementDataById = action.payload
      })
   },
})
