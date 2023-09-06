import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getBookingsRequest,
   getMyAnnouncementRequest,
} from '../../api/adminUsersServise'

export const getAdminUsersCardsId = createAsyncThunk(
   'adminUsers/getAdminUsersCardsId',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getMyAnnouncementRequest(payload)
         console.log('response.announcement: ', response.data)

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
         console.log('response.booking: ', response.data)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
