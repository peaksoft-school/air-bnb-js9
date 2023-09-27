import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteAnnouncementbyIdRequest,
   getMyAnnouncement,
   houseSortRequest,
   putAnnouncementsRequest,
} from '../../../api/ProfileServise/ProfileServise'

export const getAnnouncement = createAsyncThunk(
   'get/getAnnouncement',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getMyAnnouncement()
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
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
         return rejectWithValue(error.message)
      }
   }
)

export const deleteAnouncement = createAsyncThunk(
   'delete/deleteAnouncement',
   async ({ id, toastType }, { rejectWithValue, dispatch }) => {
      try {
         const response = await deleteAnnouncementbyIdRequest(id)
         dispatch(getAnnouncement(id))
         toastType(
            'success',
            'successfully removed your announcement',
            'Deleted announcement from your announcement'
         )
         return response.data
      } catch (error) {
         toastType('error', 'deleted card :(', error.message)

         return rejectWithValue(error.message)
      }
   }
)

export const editAnouncement = createAsyncThunk(
   'put/putAnouncement',
   async ({ editData, id, toastType }, { rejectWithValue, dispatch }) => {
      try {
         const responsePut = await putAnnouncementsRequest({ editData, id })
         dispatch(getAnnouncement(editData))
         toastType('success', 'successfully edited :)', 'message')
         return responsePut
      } catch (error) {
         toastType('error', 'uppdated :(', error.message)
         return rejectWithValue || 'you make mistakes'
      }
   }
)
