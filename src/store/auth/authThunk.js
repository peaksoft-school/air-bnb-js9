import { createAsyncThunk } from '@reduxjs/toolkit'
import { signIn, authWithGoogle } from '../../api/authService'
import { STORAGE_KEY } from '../../utils/constants'

export const signInRequest = createAsyncThunk(
   'auth/signIn',
   async ({ values, toastType }, { rejectWithValue }) => {
      try {
         const response = await signIn(values)

         localStorage.setItem(
            STORAGE_KEY.AIRBNB_AUTH,
            JSON.stringify(response.data)
         )
         toastType(
            'success',
            'Successfully logIn :) ',
            'Вы только что выполнили вход на наш сайт как Админ'
         )
         return response.data
      } catch (error) {
         toastType(
            'error',
            ' rejected login :(',
            'sorry for the misunderstanding, try again'
         )
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
         console.log('error: ', error)
         return rejectWithValue(error)
      }
   }
)
