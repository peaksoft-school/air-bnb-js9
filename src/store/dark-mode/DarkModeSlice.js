import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   darkMode: false,
}

export const DarkModeSlice = createSlice({
   name: 'darkMode',
   initialState,
   reducers: {
      darkModeHandler: (state) => {
         return { ...state, darkMode: !state.darkMode }
      },
   },
})
export const DarkModeActions = DarkModeSlice.actions
