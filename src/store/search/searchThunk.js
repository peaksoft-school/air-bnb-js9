import { createAsyncThunk } from '@reduxjs/toolkit'
import { getGlobalSearchRequest } from '../../api/searchService'

export const getGlobalSearch = createAsyncThunk(
   'global/getGlobalSearch',
   async (params, { rejectWithValue }) => {
      try {
         const response = await getGlobalSearchRequest(params)
         console.log(response.data, 'responsesss')
         return response.data.announcementResponses
      } catch (error) {
         return rejectWithValue(error?.response.message)
      }
   }
)
