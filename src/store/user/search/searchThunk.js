import { createAsyncThunk } from '@reduxjs/toolkit'
import { postFavorite } from '../../../api/favorite/Favorite'
import { getGlobalSearchRequest } from '../../../api/searchService'
// import { getPagination } from './getAllPaginationThunk'
import {
   getAllCardsRequest,
   getAllPaginationRequest,
} from '../../../api/cardService'

export const getAllCards = createAsyncThunk(
   'card/getAllCards',
   async (params, { rejectWithValue }) => {
      try {
         const response = await getAllCardsRequest(params)
         return response.data.announcementResponses
      } catch (error) {
         return rejectWithValue(error?.response.message)
      }
   }
)

export const getAllPagination = createAsyncThunk(
   'global/getAllPagination',
   async (page, { rejectWithValue }) => {
      try {
         const response = await getAllPaginationRequest(page)
         console.log(
            response.data.announcementResponses,
            'announcementResponses'
         )
         return response.data.announcementResponses
      } catch (error) {
         return rejectWithValue(error.response.message)
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
         const response = await postFavorite(id)

         dispatch(getGlobalSearch())
         // dispatch(getPagination())
         dispatch(getAllCards(cardParams))

         return response.data.announcementResponses
      } catch (error) {
         return rejectWithValue(error?.response.message)
      }
   }
)
