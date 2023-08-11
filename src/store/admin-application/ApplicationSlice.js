/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { deleteAdminApplication, getAdminApplication } from './ApplicationThunk'

const initialState = {
   data: [],
}

export const applicationSlice = createSlice({
   name: 'application',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAdminApplication.fulfilled, (state, action) => {
            state.data = action.payload
         })
         .addCase(deleteAdminApplication.fulfilled, (state, action) => {
            state.data.filter((item) => item.id !== action.payload)
         })
   },
})

export const ApplicationActoins = applicationSlice.actions
