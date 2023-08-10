import { axiosInstance } from '../config/axiosInstance'

export const addFile = (data) => {
   return axiosInstance.post('/api/file', data)
}

export const addAnouncement = (data) => {
   console.log('data: ', data)
   return axiosInstance.post('/api/vendor/submitAnAd', data)
}
