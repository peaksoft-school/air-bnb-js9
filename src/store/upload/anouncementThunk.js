import { createAsyncThunk } from '@reduxjs/toolkit'
import { addAnouncement } from '../../api/anouncementService'

export const postAnouncementForm = createAsyncThunk(
   'upload/postAnouncementForm',
   async (payload, { rejectWithValue }) => {
      try {
         console.log('payload: ', payload)
         const response = await addAnouncement(payload)
         console.log('response: ', response)

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
