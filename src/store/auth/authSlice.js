import { createSlice } from '@reduxjs/toolkit'
import { authWithGoogleRequest, signInRequest } from './authThunk'
import { STORAGE_KEY, userRoles } from '../../utils/constants'

const getInitialState = () => {
   const json = localStorage.getItem(STORAGE_KEY.AIRBNB_AUTH)

   if (json) {
      const userData = JSON.parse(json)

      return {
         isAuthorization: true,
         isLoading: false,
         token: userData.token,
         email: userData.email,
         role: userData.role,
      }
   }

   return {
      isAuthorization: false,
      isLoading: false,
      token: '',
      email: '',
      role: userRoles.GUEST,
      isError: '',
   }
}

const initialState = getInitialState()

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      logout: (state) => {
         state.isAuthorization = false
         state.isLoading = false
         state.token = ''
         state.email = ''

         return localStorage.clear()
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(signInRequest.fulfilled, (state, action) => {
            state.isAuthorization = true
            state.token = action.payload.token
            state.isLoading = false

            state.email = action.payload.email
            state.role = action.payload.role
         })
         .addCase(signInRequest.pending, (state) => {
            state.isLoading = true
         })
         .addCase(signInRequest.rejected, (state, action) => {
            state.isLoading = false
            state.isError = action.payload
         })

      builder
         .addCase(authWithGoogleRequest.fulfilled, (state, action) => {
            state.isAuthorization = true
            state.token = action.payload.token
            state.isLoading = false

            state.email = action.payload.email
            state.role = action.payload.role
         })
         .addCase(authWithGoogleRequest.pending, (state) => {
            state.isLoading = true
         })
         .addCase(authWithGoogleRequest.rejected, (state) => {
            state.isLoading = false
         })
   },
})

export const authActions = authSlice.actions
