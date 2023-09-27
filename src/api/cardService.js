import { axiosInstance } from '../config/axiosInstance'

export const getAllCardsRequest = (params) => {
   console.log(params, 'params')
   return axiosInstance.get('/api/vendor/announcements-filter', { params })
}

export const getAllPaginationRequest = (page) => {
   return axiosInstance.get(
      `/api/vendor/announcements-filter?currentPage=${page}&pageSize=99999`
   )
}
