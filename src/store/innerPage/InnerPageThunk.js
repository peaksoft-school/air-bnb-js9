import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteInnerAnnouncementRequest,
   // eslint-disable-next-line import/named
   getAnnouncementRequest,
} from '../../api/InnerHotel/InnerHotel'

export const getByIdAnnouncement = createAsyncThunk(
   'get/getById',
   async (id, { rejectWithValue }) => {
      try {
         const response = await getAnnouncementRequest(id)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const deleteAnnouncement = createAsyncThunk(
   'delete/deleteAnnounncement',
   async ({ id, toastType, navigate }, { rejectWithValue }) => {
      try {
         const response = await deleteInnerAnnouncementRequest(id)

         toastType(
            'success',
            'Deleted announcement from your inner page',
            response.data.message
         )
         navigate('/Profile/my-announcement')

         return response
      } catch (error) {
         toastType(
            'error',
            ' error not deleted from your inner page',
            error.message
         )
         return rejectWithValue(error)
      }
   }
)
