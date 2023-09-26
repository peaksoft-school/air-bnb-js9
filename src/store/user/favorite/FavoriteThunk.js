import { createAsyncThunk } from '@reduxjs/toolkit'
import { getFavorite, postFavorite } from '../../../api/favorite/Favorite'

export const getAllFavorites = createAsyncThunk(
   'favorite/getAllFavorites',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getFavorite()

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const postLike = createAsyncThunk(
   'post/postLike',
   async ({ id, toastType }, { rejectWithValue, dispatch }) => {
      try {
         const response = await postFavorite(id)

         dispatch(getAllFavorites())
         toastType('success', 'favorite :)', 'response like')

         return response.data
      } catch (error) {
         toastType('error', 'favorite :(', 'nod like')
         return rejectWithValue(error.message)
      }
   }
)
