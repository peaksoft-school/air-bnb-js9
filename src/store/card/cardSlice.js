/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
// import { getAllCards } from './cardThunk'

const initialState = {
   data: [],
   isLoading: false,
}

export const cardSlice = createSlice({
   name: 'card',
   initialState,
   reducers: {},
   extraReducers: () => {
      // builder.addCase(getAllCards.pending, (state) => {
      //    state.isLoading = true
      // })
      // builder.addCase(getAllCards.rejected, (state) => {
      //    state.isLoading = false
      // })
   },
})
