import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllCardsRequest } from '../../api/cardService'

export const getAllCards = createAsyncThunk(
   'card/getAllCards',
   async (params, { rejectWithValue }) => {
      try {
         const response = await getAllCardsRequest(params)

         return response.data
      } catch (error) {
         return rejectWithValue(error?.response.message)
      }
   }
)
