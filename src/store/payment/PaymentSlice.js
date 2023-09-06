import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   postToggleResult: false,
   putToggleResult: false,
   defaultDate: false,
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
})

export const paymentActions = paymentSlice.actions
