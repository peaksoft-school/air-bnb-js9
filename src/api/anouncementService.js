import { axiosInstance } from '../config/axiosInstance'

export const addAnouncement = (data) => {
   return axiosInstance.post('/api/vendor/submitAnAd', data)
}

export const anouncementGetById = () => {
   return axiosInstance.get(`/api/announcements/244`)
}
