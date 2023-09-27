import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteAllHousingRequest,
   getAllHousingRequest,
   updateAllHousingRequest,
} from '../../../api/admin/AdminService'

export const getAllHousing = createAsyncThunk(
   'allHousing/getAllHousing',
   async (params, { rejectWithValue }) => {
      try {
         const response = await getAllHousingRequest(params)

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const deleteAllHousing = createAsyncThunk(
   'allHousing/deleteAllHousing',
   async ({ id, toastType }, { rejectWithValue }) => {
      try {
         const response = await deleteAllHousingRequest(id)

         toastType('success', 'Delete card :)', response.data.message)
         return response.data
      } catch (error) {
         toastType('error', 'Delete card :(', error.message)
         return rejectWithValue(error.message)
      }
   }
)

export const updateAllHousing = createAsyncThunk(
   'allHousing/updateAllHousing',
   async ({ id, toastType, editData }, { rejectWithValue }) => {
      try {
         const response = await updateAllHousingRequest({ id, editData })

         console.log(response.data, 'response.data')

         toastType('success', 'Updated :)', response.data.message)
         return response.data
      } catch (error) {
         toastType('error', 'Updated :(', error.message)
         return rejectWithValue(error.message)
      }
   }
)
