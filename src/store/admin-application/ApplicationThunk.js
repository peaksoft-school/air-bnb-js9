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
   async (id, { rejectWithValue }) => {
      try {
         const response = await deleteAdminApplicationRequest(id)

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const postRejectApplications = createAsyncThunk(
   'application/putRejectApplications',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await postRejectApplicationsRequest(payload)

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const postAcceptApplications = createAsyncThunk(
   'application/putRejectApplications',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await postAcceptApplicationsRequest(payload)

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
