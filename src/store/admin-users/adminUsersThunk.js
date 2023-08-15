import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   // getAdminUsersCardsIdRequest,
   getAdminUsersCardsRequest,
} from '../../api/adminUsersServise'

export const getAdminUsersCards = createAsyncThunk(
   'adminUsers/getAdminUsersCards',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getAdminUsersCardsRequest()

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

// export const getAdminUsersCardsId = createAsyncThunk(
//    'adminUsers/getAdminUsersCardsId',
//    async (userId, { rejectWithValue }) => {
//       try {
//          const response = await getAdminUsersCardsIdRequest(userId)
//          console.log('response: ', response.data)
//          return response.data
//       } catch (error) {
//          return rejectWithValue(error.message)
//       }
//    }
// )
