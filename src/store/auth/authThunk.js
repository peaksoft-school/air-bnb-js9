import { createAsyncThunk } from '@reduxjs/toolkit'
import { signIn, authWithGoogle } from '../../api/authService'
import { STORAGE_KEY } from '../../utils/constants'

export const signInRequest = createAsyncThunk(
   'auth/signIn',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await signIn(payload)

         localStorage.setItem(
            STORAGE_KEY.AIRBNB_AUTH,
            JSON.stringify(response.data)
         )

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const authWithGoogleRequest = createAsyncThunk(
   'auth/authWithGoogle',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await authWithGoogle(payload)

         localStorage.setItem(
            STORAGE_KEY.AIRBNB_AUTH,
            JSON.stringify(response.data)
         )
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
