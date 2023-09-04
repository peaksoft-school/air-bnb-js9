import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteAllHousingRequest,
   getAllHousingRequest,
} from '../../api/AllHousingService'

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

export const deleteAllHousing = createAsyncThunk(
   'allHousing/deleteAllHousing',
   async (payload, { rejectWithValue }) => {
      try {
         console.log(payload, 'payload')
         const response = await deleteAllHousingRequest(payload)
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
