import axios from 'axios'
import { axiosInstance } from '../config/axiosInstance'

export const signIn = (payload) => {
   return axiosInstance.post('/api/auth/signIn', payload)
}

export const authWithGoogle = (payload) => {
   return axios.post(
      `http://airbnb.peaksoftprojects.com/api/auth/google?tokenId=${payload}`
   )
}
