import { createAsyncThunk } from '@reduxjs/toolkit'
import { anouncementGetById } from '../../api/anouncementService'

export const getByIdRequest = createAsyncThunk(
   'getById/getByIdRequest',
   async (_, { rejectWithValue }) => {
      try {
         const response = await anouncementGetById()

         console.log('response: ', response)

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
