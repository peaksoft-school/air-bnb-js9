import { createAsyncThunk } from '@reduxjs/toolkit'
import { addAnouncement, addFile } from '../../api/anouncementService'

export const postFile = createAsyncThunk(
   'upload/postFile',
   async (data, { rejectWithValue }) => {
      try {
         const response = await addFile(data)
         console.log(response)
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

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
