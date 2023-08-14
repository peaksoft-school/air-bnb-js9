import { createAsyncThunk } from '@reduxjs/toolkit'
import { addAnouncement } from '../../api/anouncementService'

export const postAnouncementForm = createAsyncThunk(
   'upload/postAnouncementForm',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await addAnouncement(payload)

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
