import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteAdminApplicationRequest,
   getAdminApplicationRequest,
   getApplicationByIdRequest,
   postAcceptApplicationsRequest,
   postRejectApplicationsRequest,
} from '../../api/AdminApplicationService'

export const getAdminApplication = createAsyncThunk(
   'application/getAdminApplication',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getAdminApplicationRequest(payload)

         return response.data.announcementResponses
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getApplicationById = createAsyncThunk(
   'application/getApplicationById',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getApplicationByIdRequest(payload)

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const deleteAdminApplication = createAsyncThunk(
   'application/deleteAdminApplication',
   async ({ id, toastType, current }, { rejectWithValue, dispatch }) => {
      try {
         const response = await deleteAdminApplicationRequest(id)

         dispatch(getAdminApplication(current))
         toastType(
            'success',
            'Delete card :)',
            'Moderation successfully passed'
         )

         return response.data
      } catch (error) {
         toastType('error', 'Delete card :(', error.message)
         return rejectWithValue(error.message)
      }
   }
)

export const postRejectApplications = createAsyncThunk(
   'application/putRejectApplications',
   async ({ toastType, reject, current }, { rejectWithValue, dispatch }) => {
      try {
         const response = await postRejectApplicationsRequest(reject)

         toastType('success', 'Reject :)', 'Moderation successfully passed')
         dispatch(getAdminApplication(current))

         return response.data
      } catch (error) {
         toastType('error', 'Reject :(', error.message)
         return rejectWithValue(error.message)
      }
   }
)

export const postAcceptApplications = createAsyncThunk(
   'application/putRejectApplications',
   async (
      { id, status, toastType, current },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await postAcceptApplicationsRequest({ id, status })

         toastType('success', 'Accepted :)', 'Moderation successfully passed')
         dispatch(getAdminApplication(current))

         return response.data
      } catch (error) {
         toastType('error', 'Accepted :(', error.message)
         return rejectWithValue(error.message)
      }
   }
)
