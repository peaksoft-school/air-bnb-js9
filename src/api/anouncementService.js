import { axiosInstance } from '../config/axiosInstance'
import { axiosInstanceForImage } from './postImageAxiosInstance'

export const addAnouncement = (data) => {
   return axiosInstance.post('/api/vendor/submitAnAd', data)
}

export const addImageForAnouncement = (data) => {
   return axiosInstanceForImage.post('/api/file', data)
}
