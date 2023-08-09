/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { getAllCards } from './cardThunk'

const initialState = {
   todos: [],
   isLoading: false,
}

export const cardSlice = createSlice({
   name: 'todo',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getAllCards.fulfilled, (state, action) => {
         state.todos = action.payload
         state.isLoading = false
      })
      builder.addCase(getAllCards.pending, (state) => {
         state.isLoading = true
      })

      builder.addCase(getAllCards.rejected, (state) => {
         state.isLoading = false
      })
   },
})
