import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'

export const postPaymentRequest = createAsyncThunk(
   'payment/postPaymentRequest',
   async (data, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post('/api/payments/charge', data)

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const postBookRequest = createAsyncThunk(
   'book/postBookRequest',
   async (data, { rejectWithValue }) => {
      try {
         console.log('data-post', data)
         const response = await axiosInstance.post('/api/vendor', data)

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const putBookRequest = createAsyncThunk(
   'book/putBookRequest',
   async (data, { rejectWithValue }) => {
      try {
         console.log('data-put', data)
         const response = await axiosInstance.put('/api/vendor', data)

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
