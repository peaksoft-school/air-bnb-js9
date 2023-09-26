import axios from 'axios'
import { axiosInstance } from '../config/axiosInstance'

export const signIn = (payload) => {
   console.log(payload, 'payload in sign in')
   return axiosInstance.post('/api/auth/signIn', payload)
}

export const authWithGoogle = (payload) => {
   return axios.post(
      `http://airbnb.peaksoftprojects.com/api/auth/google?tokenId=${payload}`
   )
}
