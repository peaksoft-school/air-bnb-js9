import { axiosInstance } from '../config/axiosInstance'

export const addAnouncement = (data) => {
   return axiosInstance.post('/api/vendor/submitAnAd', data)
}

export const getAnouncementById = () => {
   return axiosInstance.get(`/api/announcements/187`)
}
