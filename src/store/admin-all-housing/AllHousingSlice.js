import { createSlice } from '@reduxjs/toolkit'
import { getAllHousing } from './AllHousingThunk'

const initialState = {
   allHouseData: [],
   loading: false,
}
export const allHousingSlice = createSlice({
   name: 'allHousing',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllHousing.fulfilled, (state, action) => {
            state.allHouseData = action.payload
            state.loading = false
         })
         .addCase(getAllHousing.pending, (state) => {
            state.loading = true
         })
         .addCase(getAllHousing.rejected, (state) => {
            state.loading = false
         })
   },
})
