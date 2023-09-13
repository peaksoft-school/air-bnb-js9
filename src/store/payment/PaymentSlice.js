import { createSlice } from '@reduxjs/toolkit'
import { postBookRequest } from './PaymentThunk'

const initialState = {
   postToggleResult: false,
   putToggleResult: false,
   message: '',
}

export const paymentSlice = createSlice({
   name: 'payment',
   initialState,
   reducers: {
      setToggleResult: (state) => {
         return {
            ...state,
            postToggleResult: !state.postToggleResult,
            putToggleResult: !state.putToggleResult,
         }
      },
   },
   extraReducers: (builder) => {
      builder.addCase(postBookRequest.fulfilled, (state, action) => {
         state.message = action.payload
      })
   },
})

export const paymentActions = paymentSlice.actions
