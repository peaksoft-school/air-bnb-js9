import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getBookingsRequest,
   getMyAnnouncementRequest,
} from '../../../api/admin/AdminService'

export const getAdminUsersCardsId = createAsyncThunk(
   'adminUsers/getAdminUsersCardsId',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getMyAnnouncementRequest(payload)

         console.log(' response.data', response.data)
         return response.data.announcementResponses
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const getBookings = createAsyncThunk(
   'adminUsers/getBookings',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getBookingsRequest(payload)
         return response.data.bookingUser
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
