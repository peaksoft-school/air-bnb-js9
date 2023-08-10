import { createAsyncThunk } from '@reduxjs/toolkit'
import { addAnouncement, addFile } from '../../api/anouncementService'

export const postFile = createAsyncThunk(
   'upload/postFile',
   async (data, { rejectWithValue }) => {
      try {
         const response = await addFile(data)
         console.log(response)
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

export const postAnouncementForm = createAsyncThunk(
   'upload/postAnouncementForm',
   async (payload, { rejectWithValue }) => {
      try {
         console.log('payload: ', payload)
         const response = await addAnouncement(payload)
         console.log('response: ', response)

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

// {
//    "houseType": "HOUSE",
//    "images": [
//      "https://cdn.houseplansservices.com/product/do996bt7sq25eptckqlu9n0hj1/w800x533.jpg?v=2"
//    ],
//    "price": 10000,
//    "region": "OSH",
//    "address": "Kyzyl-Kyia",
//    "description": "should be here description",
//    "status": "BOOKED",
//    "title": "should be here title",
//    "maxGuests": 10,
//    "province": "Osh"
//  }
// {
//    "houseType": "HOUSE",
//    "images": [
//      "https://cdn.houseplansservices.com/product/do996bt7sq25eptckqlu9n0hj1/w800x533.jpg?v=2"
//    ],
//    "price": 1000,
//    "region": "TALAS",
//    "address": "Bakai-Ata",
//    "description": "should be here description",
//    "status": "BOOKED",
//    "title": "should be here title",
//    "maxGuests": 16,
//    "province": "Kirovka"
//  }
// {
//    "houseType": "HOUSE",
//    "images": [
//      "https://cdn.houseplansservices.com/product/do996bt7sq25eptckqlu9n0hj1/w800x533.jpg?v=2"
//    ],
//    "price": 5000,
//    "region": "JALAL-ABAD",
//    "address": "TOKTOGUL",
//    "description": "should be here description",
//    "status": "BOOKED",
//    "title": "should be here title",
//    "maxGuests": 30,
//    "province": "Toktogul"
//  }
