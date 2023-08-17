// import { createAsyncThunk } from '@reduxjs/toolkit'
// import {
//    addAnouncement,
//    addImageForAnouncement,
// } from '../../api/anouncementService'

// export const postAnouncementForm = createAsyncThunk(
//    'upload/postAnouncementForm',
//    async (payload, { rejectWithValue }) => {
//       try {
//          const response = await addAnouncement(payload)
//          console.log(response)
//          return response.data
//       } catch (error) {
//          return rejectWithValue(error.message)
//       }
//    }
// )

// export const postImage = createAsyncThunk(
//    'upload/postImage',
//    async (payload, { rejectWithValue }) => {
//       try {
//          console.log(payload, ' payload for post')
//          const response = await addImageForAnouncement({ file: payload })

//          console.log(response, 'response in postImage')
//          return response
//       } catch (error) {
//          return rejectWithValue(error.message)
//       }
//    }
// )

// export const getImage = createAsyncThunk(
//    'upload/getImage',
//    async (data, { rejectWithValue, dispatch }) => {
//       try {
//          const getFile = await dispatch(postImage(data.image)).unwrap()

//          return console.log(getFile, 'GET FILE')
//       } catch (error) {
//          return rejectWithValue(error.message)
//       }
//    }
// )

// export const postImage = createAsyncThunk(
//    'upload/postImage',
//    async (payload, { rejectWithValue }) => {
//       try {
//          console.log(payload, 'this is payload for post')
//          const response = await axios.post('/api/file', payload, {
//             headers: { 'Content-Type': 'multipart/form-data' },
//          })

//          console.log(response, ' this is image upload')
//          return response
//       } catch (error) {
//          return rejectWithValue(error.message)
//       }
//    }
// )
