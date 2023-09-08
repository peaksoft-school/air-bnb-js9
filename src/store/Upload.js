import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   images: [],
}

export const uploadSlice = createSlice({
   name: 'uploadImg',
   initialState,
   reducers: {
      addUploadImg: (state, action) => {
         state.images.push(action.payload)
      },
      resetImages: (state) => {
         state.images = []
      },
   },
})

export const uploadActions = uploadSlice.actions
