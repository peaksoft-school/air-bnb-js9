import { createSlice } from '@reduxjs/toolkit'
import { postBookRequest } from './PaymentThunk'

const initialState = {
   postToggleResult: false,
   putToggleResult: false,
   defaultDate: false,
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
      setDefaultDate: (state) => {
         return { ...state, defaultDate: true }
      },
   },
   extraReducers: (builder) => {
      builder.addCase(postBookRequest.fulfilled, (state, action) => {
         state.message = action.payload
      })
   },
})

export const paymentActions = paymentSlice.actions
