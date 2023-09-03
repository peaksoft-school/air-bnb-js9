/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { getAllCards } from './cardThunk'

const initialState = {
   cards: [],
}

export const cardSlice = createSlice({
   name: 'card',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getAllCards.fulfilled, (state, action) => {
         state.cards = action.payload
      })
   },
})
