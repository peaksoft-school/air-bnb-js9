import { axiosInstance } from '../config/axiosInstance'

export const addAnouncement = (data) => {
   return axiosInstance.post('/api/vendor/submitAnAd', data)
}

export const getAnouncementById = (id) => {
   return axiosInstance.get(`/api/vendor/getAnnouncement/${id}`)
}
