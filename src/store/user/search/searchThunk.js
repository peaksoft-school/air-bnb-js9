import { createAsyncThunk } from '@reduxjs/toolkit'
import { postFavorite } from '../../../api/favorite/Favorite'
import { getGlobalSearchRequest } from '../../../api/searchService'
import { getPagination } from './getAllPaginationThunk'
import { getAllCardsRequest } from '../../../api/cardService'

export const getAllCards = createAsyncThunk(
   'card/getAllCards',
   async (params, { rejectWithValue }) => {
      try {
         const response = await getAllCardsRequest(params)

         return response.data
      } catch (error) {
         return rejectWithValue(error?.response.message)
      }
   }
)

export const getGlobalSearch = createAsyncThunk(
   'global/getGlobalSearch',
   async (params, { rejectWithValue }) => {
      try {
         const response = await getGlobalSearchRequest(params)

         return response.data.announcementResponses
      } catch (error) {
         return rejectWithValue(error?.response.message)
      }
   }
)

export const postFavoriteInCard = createAsyncThunk(
   'global/postFavoriteInCard',
   async ({ id, cardParams }, { rejectWithValue, dispatch }) => {
      try {
         console.log(id, 'favorite thunk')
         const response = await postFavorite(id)

         dispatch(getGlobalSearch())
         dispatch(getPagination())
         dispatch(getAllCards(cardParams))

         return response.data.announcementResponses
      } catch (error) {
         return rejectWithValue(error?.response.message)
      }
   }
)
