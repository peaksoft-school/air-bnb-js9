import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteAnnouncementbyIdRequest,
   getMyAnnouncement,
   houseSortRequest,
   putAnnouncementsRequest,
} from '../../api/ProfileServise/ProfileServise'

export const getAnnouncement = createAsyncThunk(
   'get/getAnnouncement',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getMyAnnouncement()
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const filterHouseRequest = createAsyncThunk(
   'filter/filterHouse',
   async (params, { rejectWithValue }) => {
      try {
         const response = await houseSortRequest(params)

         return response.data
      } catch (error) {
         return rejectWithValue
      }
   }
)

export const deleteAnouncement = createAsyncThunk(
   'delete/deleteAnouncement',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         const response = await deleteAnnouncementbyIdRequest(id)
         dispatch(getAnnouncement())
         return response.data
      } catch (error) {
         return rejectWithValue
      }
   }
)

export const editAnouncement = createAsyncThunk(
   'put/putAnouncement',
   async ({ saveData, itemId, toastType }, { rejectWithValue, dispatch }) => {
      try {
         const responsePut = await putAnnouncementsRequest({ saveData, itemId })
         dispatch(filterHouseRequest())
         toastType('success', 'successfully edited :)', 'message')
         return responsePut
      } catch (error) {
         toastType('error', 'uppdated :(', error.message)
         return rejectWithValue || 'you make mistakes'
      }
   }
)
