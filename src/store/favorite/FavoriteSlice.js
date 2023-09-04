import { createSlice } from '@reduxjs/toolkit'
import { getAllFavorites } from './FavoriteThunk'

const initialState = {
   favorites: [],
   loading: false,
   error: null,
}
export const favoriteSlice = createSlice({
   name: 'favorite',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllFavorites.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(getAllFavorites.fulfilled, (state, action) => {
            state.loading = false
            state.favorites = action.payload
         })
         .addCase(getAllFavorites.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })
   },
})

export default favoriteSlice.reducer
