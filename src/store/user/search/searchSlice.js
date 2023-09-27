/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { getGlobalSearch, getAllCards, getAllPagination } from './searchThunk'

const initialState = {
   search: [],
   allPagination: [],
   isLoading: false,
}

export const getGlobalSearchSlice = createSlice({
   name: 'global',
   initialState,
   reducers: {
      globalSearchHandler: (state, action) => {
         const filteredSearch = state.search.filter(
            (item) => item.region.toUpperCase() === action.payload.toUpperCase()
         )
         return { ...state, search: filteredSearch }
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getGlobalSearch.fulfilled, (state, action) => {
            state.search = action.payload
            state.isLoading = false
         })
         .addCase(getGlobalSearch.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getGlobalSearch.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(getAllCards.fulfilled, (state, action) => {
            state.search = action.payload
            state.isLoading = false
         })
         .addCase(getAllCards.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getAllCards.rejected, (state) => {
            state.isLoading = false
         })
         // .addCase(getPagination.fulfilled, (state, action) => {
         //    state.search = action.payload
         // })
         .addCase(getAllPagination.fulfilled, (state, action) => {
            state.allPagination = action.payload
         })
   },
})

export const getSearchAction = getGlobalSearchSlice.actions
