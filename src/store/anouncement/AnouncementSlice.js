import { createSlice } from '@reduxjs/toolkit'
import { getByIdRequest } from './AnouncementThunk'

const initialState = {
   datas: {},
}

export const getByIdSlice = createSlice({
   name: 'getById',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getByIdRequest.fulfilled, (state, action) => {
         state.datas = action.payload
      })
   },
})
