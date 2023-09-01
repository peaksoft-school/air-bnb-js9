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

<<<<<<< HEAD
         // console.log('response: ', response.data.announcementResponses)

=======
>>>>>>> 69f3e85a50d349d22e2d781cc8e5daf720ba7385
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
         console.log('response.booking: ', response.data.bookingUser)
         return response.data.bookingUser
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
