import { configureStore } from '@reduxjs/toolkit'
import { cardSlice } from './card/cardSlice'
import { getGlobalSearchSlice } from './search/searchSlice'

export const store = configureStore({
   reducer: {
      [cardSlice.name]: cardSlice.reducer,
      [getGlobalSearchSlice.name]: getGlobalSearchSlice.reducer,
   },
})
