import { createAsyncThunk } from '@reduxjs/toolkit'
import { getFavorite, postFavorite } from '../../api/favorite/Favorite'

export const getAllFavorites = createAsyncThunk(
   'favorite/getAllFavorites',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getFavorite()

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const postLike = createAsyncThunk(
   'post/postLike',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         const response = await postFavorite(id)
         dispatch(getAllFavorites())
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
