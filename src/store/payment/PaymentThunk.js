import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'

export const postBookRequest = createAsyncThunk(
   'book/postBookRequest',
   async ({ postBookData, toastType }, { rejectWithValue }) => {
      try {
         console.log(postBookData, 'postBookData')

         const response = await axiosInstance.post('/api/vendor', postBookData)

         toastType('success', 'Payment and Book :)', response.data.message)
         return response.data
      } catch (error) {
         // console.log(error, 'errror thunk')
         toastType('error', 'Payment :(', error.message)
         return rejectWithValue(error.message)
      }
   }
)

export const putBookRequest = createAsyncThunk(
   'book/putBookRequest',
   async ({ updateBookingData, toastType }, { rejectWithValue }) => {
      try {
         console.log(updateBookingData, 'updateBookingData')
         const response = await axiosInstance.put(
            '/api/vendor',
            updateBookingData
         )

         toastType('success', 'Payment :)', response.data.message)

         return response.data
      } catch (error) {
         toastType('error', 'Payment and Book :(', error.message)

         return rejectWithValue(error.message)
      }
   }
)

export const postFavoriteInPayment = createAsyncThunk(
   'book/postFavoriteInPayment',
   async ({ id, toastType }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post(`/api/favorites/${id}`)

         toastType('success', 'favorite :)', response.data.message)
         return response.data
      } catch (error) {
         console.log(error, 'error')
         toastType('error', 'favorite :)', error.message)

         return rejectWithValue(error.message)
      }
   }
)
