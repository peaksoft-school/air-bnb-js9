/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { getGlobalSearch } from './searchThunk'
import { getAllCards } from '../card/cardThunk'
import { getAllPagination } from './getAllPaginationThunk'

const initialState = {
   search: [],
   isLoading: false,
}

export const getGlobalSearchSlice = createSlice({
   name: 'global',
   initialState,
   reducers: {
      globalSearchHandler: (state, action) => {
         const filteredSearch = state.search.filter(
            (item) =>
               item.province.toUpperCase() === action.payload.toUpperCase()
         )
         return { ...state, search: filteredSearch }
      },
   },
   extraReducers: (builder) => {
      builder.addCase(getGlobalSearch.fulfilled, (state, action) => {
         state.search = action.payload
         state.isLoading = false
      })
      builder.addCase(getGlobalSearch.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getGlobalSearch.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(getAllCards.fulfilled, (state, action) => {
         state.search = action.payload
         state.isLoading = false
      })
      builder.addCase(getAllCards.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getAllCards.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(getAllPagination.fulfilled, (state, action) => {
         state.search = action.payload
      })
   },
})

export const getSearchAction = getGlobalSearchSlice.actions
