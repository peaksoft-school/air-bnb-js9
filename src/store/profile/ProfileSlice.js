import { createSlice } from '@reduxjs/toolkit'
import {
   deleteAnouncement,
   filterHouseRequest,
   findAnnouncementById,
   getAnnouncement,
} from './ProfileThunk'

const initialState = {
   data: {
      announcements: [],
   },
   idAnnouncement: [],
   error: null,
   isAllowed: false,
   status: '',
   loading: false,
}

export const announcementSlice = createSlice({
   name: 'getannouncement',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAnnouncement.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(getAnnouncement.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
         .addCase(getAnnouncement.fulfilled, (state, action) => {
            console.log('action1: ', action)
            state.status = 'success'
            state.data = action.payload
         })
         .addCase(filterHouseRequest.pending, (state) => {
            state.loading = true
         })
         .addCase(filterHouseRequest.fulfilled, (state, action) => {
            console.log('action2: ', action)
            state.loading = false
            state.data.announcements = action.payload
         })
         .addCase(filterHouseRequest.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(deleteAnouncement.pending, (state) => {
            state.loading = true
         })
         .addCase(deleteAnouncement.fulfilled, (state, action) => {
            state.loading = false
            state.data.announcements = action.payload
         })

         .addCase(deleteAnouncement.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(findAnnouncementById.pending, (state) => {
            state.loading = true
            state.selectedAnnouncement = null // Обнуляем выбранный анонс перед новым запросом
         })

         .addCase(findAnnouncementById.fulfilled, (state, action) => {
            state.loading = false
            state.idAnnouncement = action.payload
         })

         .addCase(findAnnouncementById.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export const announcementReducer = announcementSlice.reducer
