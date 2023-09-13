import { axiosInstance } from '../config/axiosInstance'

export const getAllCardsRequest = (params) => {
   console.log(params, 'params')
   return axiosInstance.get('/api/vendor/announcements-filter', { params })
}
