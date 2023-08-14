import { axiosInstance } from '../config/axiosInstance'

export const addAnouncement = (data) => {
   console.log('data: ', data)
   return axiosInstance.post('/api/vendor/submitAnAd', data)
}
