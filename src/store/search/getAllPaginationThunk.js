import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllPaginationRequest } from '../../api/getAllPaginationService'

export const getAllPagination = createAsyncThunk(
   'global/getAllPagination',
   async (data, { rejectWithValue }) => {
      try {
         const response = await getAllPaginationRequest(data)

         return response.data.announcementResponses
      } catch (error) {
         return rejectWithValue(error.response.message)
      }
   }
)
