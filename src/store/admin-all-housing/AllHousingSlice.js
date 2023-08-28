import { createSlice } from '@reduxjs/toolkit'
import { getAllHousing } from './AllHousingThunk'

const initialState = {
   allHousData: [],
}
export const allHousingSlice = createSlice({
   name: 'allHousing',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getAllHousing.fulfilled, (state, action) => {
         state.allHousData = action.payload
      })
   },
})
