import { createSlice } from '@reduxjs/toolkit'
import {
   deleteAdminApplication,
   getAdminApplication,
   getApplicationById,
} from './ApplicationThunk'

const initialState = {
   data: [],
   dataById: [],
   error: '',
   toggle: false,
}

export const applicationSlice = createSlice({
   name: 'application',
   initialState,
   reducers: {
      toggleHandler: (state) => {
         return { ...state, toggle: !state.toggle }
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getAdminApplication.fulfilled, (state, action) => {
            state.data = action.payload
         })
         .addCase(getApplicationById.fulfilled, (state, action) => {
            state.dataById = action.payload
         })
         .addCase(deleteAdminApplication.fulfilled, (state, action) => {
            state.error = action.payload
         })
   },
})
