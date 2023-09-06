import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   openModal: false,
}

export const ModalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      openModalHandler: (state) => {
         return { ...state, openModal: !state.openModal }
      },
      closeModalHandler: () => {
         return { openModal: false }
      },
   },
})
export const ModalActions = ModalSlice.actions
