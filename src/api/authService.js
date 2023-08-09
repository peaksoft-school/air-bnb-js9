import { axiosInstance } from '../config/axiosInstance'

export const signIn = (payload) => {
   return axiosInstance.post('/api/auth/signIn', payload)
}

export const authWithGoogle = (payload) => {
   return axiosInstance.post(`/api/auth/google?tokenId=${payload}`)
}
