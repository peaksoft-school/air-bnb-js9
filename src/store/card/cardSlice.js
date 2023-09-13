/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
// import { getAllCards } from './cardThunk'

const initialState = {
   cards: [],
}

export const cardSlice = createSlice({
   name: 'card',
   initialState,
   reducers: {},
   extraReducers: () => {
      // builder.addCase(getAllCards.fulfilled, () => {
      //    // state.cards = action.payload
      // })
   },
})
