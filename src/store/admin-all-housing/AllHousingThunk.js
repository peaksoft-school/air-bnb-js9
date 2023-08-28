import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllHousingRequest } from '../../api/AllHousingService'

export const getAllHousing = createAsyncThunk(
   'allHousing/getAllHousing',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getAllHousingRequest(payload)

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
