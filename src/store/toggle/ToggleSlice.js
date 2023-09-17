import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   path: '',
}

export const ToggleHandelrSlice = createSlice({
   name: 'toggle',
   initialState,
   reducers: {
      togglePathHandler: (state, action) => {
         return {
            ...state,
            path: action.payload,
         }
      },
   },
})
export const ActionToggleHandelr = ToggleHandelrSlice.actions
