import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteAdminApplicationRequest,
   getAdminApplicationRequest,
   postAcceptApplicationsRequest,
   postRejectApplicationsRequest,
} from '../../api/AdminApplicationService'

export const getAdminApplication = createAsyncThunk(
   'application/getAdminApplication',
   async (count, { rejectWithValue }) => {
      try {
         const response = await getAdminApplicationRequest(count)

         console.log('response', response.data.announcementResponses)

         return response.data.announcementResponses
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const deleteAdminApplication = createAsyncThunk(
   'application/deleteAdminApplication',
   async (payload, { rejectWithValue, dispatch }) => {
      try {
         const response = await deleteAdminApplicationRequest(payload)
         dispatch(getAdminApplication())
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const postRejectApplications = createAsyncThunk(
   'application/putRejectApplications',
   async (payload, { rejectWithValue, dispatch }) => {
      try {
         const response = await postRejectApplicationsRequest(payload)

         dispatch(getAdminApplication())

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const postAcceptApplications = createAsyncThunk(
   'application/putRejectApplications',
   async (payload, { rejectWithValue, dispatch }) => {
      console.log('payload', payload)
      try {
         const response = await postAcceptApplicationsRequest(payload)

         dispatch(getAdminApplication())

         console.log('response', response.data)

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
