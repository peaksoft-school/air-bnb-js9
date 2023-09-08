import { createSlice } from '@reduxjs/toolkit'
import { getAllHousing } from './AllHousingThunk'

const initialState = {
   allHouseData: [],
   loading: false,
   openModal: false,
   editCardId: '',
}
export const allHousingSlice = createSlice({
   name: 'allHousing',
   initialState,
   reducers: {
      modalHandler: (state) => {
         return { ...state, openModal: true }
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getAllHousing.fulfilled, (state, action) => {
            state.allHouseData = action.payload
            state.editCardId = action.payload.map((item) => item.id)
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

export const allHousingActions = allHousingSlice.actions
