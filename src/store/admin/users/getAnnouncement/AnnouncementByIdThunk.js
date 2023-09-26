import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../config/axiosInstance'

export const getAnnouncementByIdHandler = createAsyncThunk(
   'announcementById/getAnnouncementByIdHandler',
   async (id, { rejectWithValue }) => {
      try {
         console.log(id, 'id get by id ')
         const response = await axiosInstance.get(
            `/api/admin/getByIdAnnouncements?announcementId=${id}`
         )
         console.log(response.data, 'userGetById')

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getAnnouncementFeedbacks = createAsyncThunk(
   'feedbacks/getAnnouncementFeedbacks',
   async (id, { rejectWithValue }) => {
      console.log(id, 'id feedback id ')

      try {
         const response = await axiosInstance.get(`/api/feedbacks/${id}`)
         console.log('response: feedback ', response.data)

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
