import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'

export const getAnnouncementByIdHandler = createAsyncThunk(
   'AnnouncementById/getAnnouncementByIdHandler',
   async (id, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/admin/getByIdAnnouncements?announcementId=${id}`
         )

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getAnnouncementFeedbacks = createAsyncThunk(
   'feedbacks/getAnnouncementFeedbacks',
   async (id, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/api/feedbacks/${id}`)
         console.log('response: ', response)

         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
