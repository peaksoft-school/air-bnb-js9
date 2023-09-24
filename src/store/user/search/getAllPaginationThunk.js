// import { createAsyncThunk } from '@reduxjs/toolkit'
// import {
//    getAllPaginationRequest,
//    getPaginationRequest,
// } from '../../../api/getAllPaginationService'

// export const getPagination = createAsyncThunk(
//    'global/getPagination',
//    async (page, { rejectWithValue }) => {
//       try {
//          const response = await getPaginationRequest(page)

//          return response.data.announcementResponses
//       } catch (error) {
//          return rejectWithValue(error.response.message)
//       }
//    }
// )

// export const getAllPagination = createAsyncThunk(
//    'global/getAllPagination',
//    async (_, { rejectWithValue }) => {
//       try {
//          const response = await getAllPaginationRequest()

//          return response.data.announcementResponses
//       } catch (error) {
//          return rejectWithValue(error.response.message)
//       }
//    }
// )
