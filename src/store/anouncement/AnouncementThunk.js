import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAnouncementById } from '../../api/anouncementService'

export const getByIdRequest = createAsyncThunk(
   'getById/getByIdRequest',
   async (id, { rejectWithValue }) => {
      try {
         const response = await getAnouncementById(id)

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
