import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getCountRatingById,
   getFeedbackById,
   // putFeedbackById,
} from '../../../api/feedbackService'

export const feedbackGetByIdRequest = createAsyncThunk(
   'feedback/getById',
   async (id, { rejectWithValue }) => {
      try {
         const response = await getFeedbackById(id)
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

// export const editFeedbackById = createAsyncThunk(
//    'feedback/putFeedback',
//    async ({ id, data }, { rejectWithValue }) => {
//       try {
//          const response = await putFeedbackById(id, data)

//          return response.data
//       } catch (error) {
//          return rejectWithValue(error.message)
//       }
//    }
// )

export const countRatingGetByIdRequest = createAsyncThunk(
   'feedback/countRating',
   async (id, { rejectWithValue }) => {
      try {
         const response = await getCountRatingById(id)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
