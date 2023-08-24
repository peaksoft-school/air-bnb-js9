// import { createAsyncThunk } from '@reduxjs/toolkit'
// // import { async } from 'q'
// import { axiosInstance } from '../../config/axiosInstance'

// export const postPaymentRequest = createAsyncThunk(
//    'payment/postPaymentRequest',
//    async (_, { rejectWithValue }) => {
//       try {
//          const response = await axiosInstance.post(
//             'http://airbnb.peaksoftprojects.com/api/payments/charge',
//             {
//                amount: price,
//                token,
//             }
//          )
//          console.log('response', response.data)

//          return response.data
//       } catch (error) {
//          return rejectWithValue(error.message)
//       }
//    }
// )
