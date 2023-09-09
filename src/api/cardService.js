import { axiosInstance } from '../config/axiosInstance'

export const getAllCardsRequest = (params) => {
   return axiosInstance.get('/api/vendor/announcements-filter', { params })
}
