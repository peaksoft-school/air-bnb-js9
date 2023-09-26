import { createSlice } from '@reduxjs/toolkit'
import { getAllHousing } from './all-housing/AllHousingThunk'
import {
   getAdminApplication,
   getAdminApplicationAll,
   getApplicationById,
} from './application/ApplicationThunk'
import { getAdminUsersCardsId, getBookings } from './users/UsersThunk'

const initialState = {
   applications: [],
   applicationsAll: [],
   applicationById: [],
   announcements: [],
   bookings: [],
   allHouseData: [],
   loading: true,
   openModal: false,
   toggle: false,
   editCardId: '',
}
export const adminSlice = createSlice({
   name: 'admin',
   initialState,
   reducers: {
      modalHandler: (state) => {
         return { ...state, openModal: true }
      },
      toggleHandler: (state) => {
         return { ...state, toggle: !state.toggle }
      },
   },
   extraReducers: (builder) => {
      builder
         // all-housing
         .addCase(getAllHousing.fulfilled, (state, action) => {
            state.allHouseData = action?.payload
            state.editCardId = action?.payload.map((item) => item.id)
            state.loading = false
         })
         .addCase(getAllHousing.pending, (state) => {
            state.loading = true
         })
         .addCase(getAllHousing.rejected, (state) => {
            state.loading = false
         })
         // application
         .addCase(getAdminApplication.pending, (state) => {
            state.loading = true
         })
         .addCase(getAdminApplication.fulfilled, (state, action) => {
            state.applications = action?.payload
            state.loading = false
         })
         .addCase(getAdminApplication.rejected, (state) => {
            state.loading = false
         })
         .addCase(getAdminApplicationAll.fulfilled, (state, action) => {
            state.applicationsAll = action.payload
            state.loading = false
         })
         .addCase(getAdminApplicationAll.pending, (state) => {
            state.loading = true
         })
         .addCase(getAdminApplicationAll.rejected, (state) => {
            state.loading = false
         })
         //  get by id application
         .addCase(getApplicationById.pending, (state) => {
            state.loading = true
         })
         .addCase(getApplicationById.fulfilled, (state, action) => {
            state.applicationById = action?.payload
            state.loading = false
         })
         .addCase(getApplicationById.rejected, (state) => {
            state.loading = false
         })
         // users
         .addCase(getAdminUsersCardsId.fulfilled, (state, action) => {
            state.announcements = action?.payload
         })
         .addCase(getBookings.fulfilled, (state, action) => {
            state.bookings = action?.payload
         })
   },
})

export const AdminActions = adminSlice.actions
