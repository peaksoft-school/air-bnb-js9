import { createAsyncThunk } from '@reduxjs/toolkit'
import { getMyAnnouncement } from '../../api/ProfileServise/ProfileServise'

export const getAnnouncement = createAsyncThunk(
   'get/announcement',
   async () => {
      const response = await getMyAnnouncement()
      console.log(response, 'responsethunk')
      return response.data
   }
)
